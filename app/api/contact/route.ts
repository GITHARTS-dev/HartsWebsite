import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const RECIPIENT = 'rajmadhan296@gmail.com';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, role, email, phone, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"HARTS Website" <${process.env.SMTP_USER}>`,
      to: RECIPIENT,
      replyTo: email,
      subject: `New Inquiry from ${name} — HARTS Consulting`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1a1a1a;">
          <h2 style="border-bottom: 2px solid #c9a84c; padding-bottom: 12px; color: #1a1a1a;">
            New Client Inquiry — HARTS Consulting
          </h2>
          <table style="width:100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; width: 36%; background: #f5f5f5;">Full Name</td>
              <td style="padding: 8px 12px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; background: #f5f5f5;">Company</td>
              <td style="padding: 8px 12px;">${company || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; background: #f5f5f5;">Role / Title</td>
              <td style="padding: 8px 12px;">${role || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; background: #f5f5f5;">Email</td>
              <td style="padding: 8px 12px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; background: #f5f5f5;">Phone</td>
              <td style="padding: 8px 12px;">${phone || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; background: #f5f5f5;">Area of Interest</td>
              <td style="padding: 8px 12px;">${service || '—'}</td>
            </tr>
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #f9f9f9; border-left: 4px solid #c9a84c; border-radius: 4px;">
            <p style="font-weight: bold; margin: 0 0 8px 0;">Message</p>
            <p style="margin: 0; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #888;">
            Submitted via the HARTS website contact form.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Failed to send your inquiry. Please try again.' }, { status: 500 });
  }
}
