import { NextResponse } from "next/server";
import { getMailTransporter, getSmtpConfig } from "../../_lib/mailer";
import { getPostgresPool } from "../../_lib/postgres";
import {
  capLength,
  isHoneypotTripped,
  isValidEmail,
  isValidPhone,
} from "../../_lib/validate";

export const runtime = "nodejs";

// Hard caps so a single payload can't OOM the Node process or balloon the
// row size. Values match the longest realistic input + headroom.
const MAX = {
  name: 120,
  company: 200,
  role: 120,
  email: 254,
  phone: 30,
  industry: 120,
  service: 120,
  message: 5000,
};

type ContactRequestBody = {
  name?: unknown;
  company?: unknown;
  role?: unknown;
  email?: unknown;
  phone?: unknown;
  industry?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
};

async function readContactBody(request: Request): Promise<ContactRequestBody> {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return (await request.json()) as ContactRequestBody;
  }

  const formData = await request.formData();

  return {
    name: formData.get("name"),
    company: formData.get("company"),
    role: formData.get("role"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    industry: formData.get("industry"),
    service: formData.get("service"),
    message: formData.get("message"),
    website: formData.get("website"),
  };
}

function fieldToString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatOptionalField(label: string, value: string) {
  if (!value) {
    return "";
  }

  return `
    <tr>
      <td style="padding: 8px 0; color: #475569; width: 140px;">${label}</td>
      <td style="padding: 8px 0; color: #111827;">${escapeHtml(value)}</td>
    </tr>
  `;
}

export async function POST(request: Request) {
  try {
    const body = await readContactBody(request);

    // Honeypot: silently succeed so bots don't learn what tripped the filter.
    if (isHoneypotTripped(body.website)) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const name = capLength(fieldToString(body.name), MAX.name);
    const company = capLength(fieldToString(body.company), MAX.company);
    const role = capLength(fieldToString(body.role), MAX.role);
    const email = capLength(fieldToString(body.email), MAX.email).toLowerCase();
    const phone = capLength(fieldToString(body.phone), MAX.phone);
    const industry = capLength(fieldToString(body.industry), MAX.industry);
    const service = capLength(fieldToString(body.service), MAX.service);
    const message = capLength(fieldToString(body.message), MAX.message);

    if (!name || !email || !message) {
      console.warn("Contact API validation failed: missing required field.");
      return NextResponse.json(
        { success: false, error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (phone && !isValidPhone(phone)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid phone number." },
        { status: 400 },
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
          industry,
          service,
          message
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING id
      `,
      [
        name,
        email,
        company || "Not provided",
        role || null,
        phone || "Not provided",
        industry || "Not provided",
        service || "General inquiry",
        message,
      ],
    );

    const inquiryId = result.rows[0].id;
    console.info(`Contact inquiry ${inquiryId} saved successfully.`);

    const transporter = getMailTransporter();
    const smtpConfig = getSmtpConfig();
    const mailTo = process.env.MAIL_TO;

    if (!mailTo) {
      throw new Error("Missing required environment variable: MAIL_TO");
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br />");

    await transporter.sendMail({
      from: `"HARTS Website" <${smtpConfig.user}>`,
      to: mailTo,
      replyTo: email,
      subject: "New Contact Form Submission",
      text: `
New Contact Inquiry

Name: ${name}
Email: ${email}
${company ? `Company: ${company}\n` : ""}${role ? `Role: ${role}\n` : ""}${phone ? `Phone: ${phone}\n` : ""}${industry ? `Industry: ${industry}\n` : ""}${service ? `Service: ${service}\n` : ""}
Message:
${message}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
          <h2 style="margin: 0 0 16px; color: #111827;">New Contact Inquiry</h2>
          <table role="presentation" style="border-collapse: collapse; width: 100%; max-width: 640px;">
            <tr>
              <td style="padding: 8px 0; color: #475569; width: 140px;">Name</td>
              <td style="padding: 8px 0; color: #111827;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #475569;">Email</td>
              <td style="padding: 8px 0; color: #111827;">${safeEmail}</td>
            </tr>
            ${formatOptionalField("Company", company)}
            ${formatOptionalField("Role", role)}
            ${formatOptionalField("Phone", phone)}
            ${formatOptionalField("Industry", industry)}
            ${formatOptionalField("Service", service)}
          </table>
          <div style="margin-top: 18px;">
            <p style="margin: 0 0 8px; color: #475569;">Message</p>
            <div style="padding: 14px 16px; background: #f8fafc; border-left: 4px solid #2563eb;">
              ${safeMessage}
            </div>
          </div>
        </div>
      `,
    });

    console.info(`Contact inquiry ${inquiryId} email notification sent.`);

    return NextResponse.json(
      { success: true, message: "Mail sent successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send mail" },
      { status: 500 },
    );
  }
}
