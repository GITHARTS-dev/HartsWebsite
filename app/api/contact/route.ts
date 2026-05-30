import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getPostgresPool } from '../../_lib/postgres';
import {
  capLength,
  isHoneypotTripped,
  isValidEmail,
  isValidPhone,
} from '../../_lib/validate';

export const runtime = 'nodejs';

// Hard caps so a single payload can't OOM the Node process or balloon the
// row size. Values match the longest realistic input + headroom.
const MAX = {
  name: 120,
  company: 200,
  role: 120,
  email: 254,
  phone: 30,
  service: 120,
  message: 5000,
};

type ContactRequestBody = {
  name?: unknown;
  company?: unknown;
  role?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown; // honeypot
};

async function readContactBody(request: Request): Promise<ContactRequestBody> {
  const contentType = request.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    return (await request.json()) as ContactRequestBody;
  }

  const formData = await request.formData();

  return {
    name: formData.get('name'),
    company: formData.get('company'),
    role: formData.get('role'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    message: formData.get('message'),
    website: formData.get('website'),
  };
}

function fieldToString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  try {
    const body = await readContactBody(request);

    // Honeypot — silently 200 so bots don't learn the trigger.
    if (isHoneypotTripped(body.website)) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const name = capLength(fieldToString(body.name), MAX.name);
    const company = capLength(fieldToString(body.company), MAX.company);
    const role = capLength(fieldToString(body.role), MAX.role);
    const email = capLength(fieldToString(body.email), MAX.email).toLowerCase();
    const phone = capLength(fieldToString(body.phone), MAX.phone);
    const service = capLength(fieldToString(body.service), MAX.service);
    const message = capLength(fieldToString(body.message), MAX.message);

    if (!name || !company || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Name, company, email, phone, service, and message are required.' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: 'Please enter a valid phone number.' },
        { status: 400 }
      );
    }

    const pool = getPostgresPool();
    const result = await pool.query<{ id: number }>(
      `
        INSERT INTO contact_inquiries (
          name,
          email,
          company,
          role,
          phone,
          service,
          message
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING id
      `,
      [name, email, company, role || null, phone, service, message]
    );

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        minVersion: 'TLSv1.2',
      },
    });

    const roleText = role || 'Not provided';
    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company);
    const safeRole = escapeHtml(roleText);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeService = escapeHtml(service);
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br />');

    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `New contact form submission from ${name}`,
      text: `
New contact form submission

Name:
${name}

Company:
${company}

Role:
${roleText}

Email:
${email}

Phone:
${phone}

Service:
${service}

Message:
${message}
      `.trim(),
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Role:</strong> ${safeRole}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Service:</strong> ${safeService}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    };

    // Safely commented out until AWS SES production access is enabled.
    // await transporter.sendMail(mailOptions);
    void transporter;
    void mailOptions;

    return NextResponse.json(
      { success: true, inquiryId: result.rows[0].id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);
    const errorMessage =
      process.env.NODE_ENV === 'development' && error instanceof Error
        ? `Failed to save your inquiry: ${error.message}`
        : 'Failed to save your inquiry. Please try again.';

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
