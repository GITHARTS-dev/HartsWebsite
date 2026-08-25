/**
 * PHASE 2 — contact inquiry notification emails. Not wired up yet.
 *
 * Nothing in the app calls this file while INQUIRY_EMAILS is unset. To turn it
 * on, see the checklist in sendInquiryEmails() below.
 */
import { Resend } from "resend";
import { escapeHtml } from "./sanitize";

const resend = new Resend(process.env.RESEND_API_KEY);

// Where inquiry notifications land. Override with MAIL_TO in the deploy
// environment (Amplify console) so the recipient can change without a code push.
const MAIL_TO = process.env.MAIL_TO || "info@globalharts.com";

// The sender MUST be an address on a domain verified in Resend
// (resend.com > Domains > Add Domain > globalharts.com, then publish the DNS
// records it hands you). Resend's shared sandbox sender, onboarding@resend.dev,
// can only deliver to the Resend account owner's own address — it rejects
// anything addressed to MAIL_TO or to a visitor with a 403.
const MAIL_FROM =
  process.env.RESEND_FROM || "HARTS Website <website@globalharts.com>";

// Quoted in the visitor auto-reply. Keep it a promise the team can keep.
const REPLY_WINDOW = "1-2 business days";

export type InquiryFields = {
  name: string;
  email: string;
  company: string;
  role: string;
  phone: string;
  country: string;
  sector: string;
  service: string;
  message: string;
};

// Resend does NOT throw when a send is rejected — it resolves with
// { data: null, error: {...} }. Ignoring that object makes a failed send look
// identical to a delivered one, so every send goes through here instead.
async function sendEmail(options: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const { data, error } = await resend.emails.send({
    from:    MAIL_FROM,
    to:      options.to,
    subject: options.subject,
    html:    options.html,
    ...(options.replyTo ? { replyTo: options.replyTo } : {}),
  });

  if (error) {
    throw new Error(
      `Resend rejected the send to ${options.to} (${error.name}): ${error.message}`,
    );
  }

  return data?.id;
}

// Every value is escaped before it reaches the HTML — a visitor could otherwise
// put markup in the message field and have it render inside our own inbox.
function teamNotificationHtml(fields: InquiryFields, inquiryId: string | number) {
  const e = Object.fromEntries(
    Object.entries(fields).map(([key, value]) => [key, escapeHtml(value)]),
  ) as InquiryFields;

  const row = (label: string, value: string) =>
    value
      ? `<tr><td style="padding:8px 0;color:#475569;width:130px;">${label}</td><td style="padding:8px 0;color:#111827;">${value}</td></tr>`
      : "";

  return `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.6;max-width:600px;">
      <h2 style="margin:0 0 16px;color:#E7473C;">New Contact Inquiry</h2>
      <table role="presentation" style="border-collapse:collapse;width:100%;">
        ${row("Name", e.name)}
        ${row("Email", `<a href="mailto:${e.email}" style="color:#E7473C;">${e.email}</a>`)}
        ${row("Company", e.company)}
        ${row("Role", e.role)}
        ${row("Phone", e.phone)}
        ${row("Country", e.country)}
        ${row("Sector", e.sector)}
        ${row("Service", e.service)}
      </table>
      <div style="margin-top:18px;">
        <p style="margin:0 0 8px;color:#475569;">Message</p>
        <div style="padding:14px 16px;background:#f8fafc;border-left:4px solid #E7473C;white-space:pre-wrap;">${e.message}</div>
      </div>
      <p style="margin-top:20px;font-size:12px;color:#9ca3af;">Inquiry #${inquiryId} &middot; HARTS Website</p>
    </div>
  `;
}

function autoReplyHtml(fields: InquiryFields) {
  const eName    = escapeHtml(fields.name);
  const eMessage = escapeHtml(fields.message);

  return `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.6;max-width:600px;">
      <h2 style="margin:0 0 16px;color:#E7473C;">Thank you for reaching out</h2>
      <p style="margin:0 0 14px;">Dear ${eName},</p>
      <p style="margin:0 0 14px;">
        We have received your inquiry and a member of our team will respond within
        ${REPLY_WINDOW}. If your request is time-sensitive, reply directly to this
        email and it will reach us.
      </p>
      <div style="margin:20px 0;">
        <p style="margin:0 0 8px;color:#475569;font-size:13px;">A copy of your message</p>
        <div style="padding:14px 16px;background:#f8fafc;border-left:4px solid #E7473C;white-space:pre-wrap;">${eMessage}</div>
      </div>
      <p style="margin:0 0 4px;">Warm regards,</p>
      <p style="margin:0;font-weight:bold;">HARTS Consulting</p>
      <p style="margin:4px 0 0;color:#475569;font-size:13px;">Strategy. Transformation. Clarity.</p>
      <p style="margin-top:24px;font-size:12px;color:#9ca3af;">
        This is an automated confirmation from the HARTS website. Please do not
        share sensitive information by email.
      </p>
    </div>
  `;
}

/**
 * Notifies the team and acknowledges the visitor. Never throws: the inquiry is
 * already in the database by the time this runs, so a mail outage must not show
 * the visitor an error or make them resubmit. Failures are logged instead.
 *
 * To enable (Phase 2):
 *   1. resend.com > Domains > Add Domain > globalharts.com, publish its 3 DNS
 *      records, and wait for the domain to show as Verified.
 *   2. Set MAIL_TO and RESEND_FROM in .env.local for local testing, and in the
 *      Amplify console for production.
 *   3. In app/api/contact/route.ts, uncomment the import at the top and the
 *      sendInquiryEmails() call at the end of POST().
 */
export async function sendInquiryEmails(
  fields: InquiryFields,
  inquiryId: string | number,
) {
  try {
    await sendEmail({
      to:      MAIL_TO,
      subject: `New Inquiry from ${fields.name} - HARTS Website`,
      html:    teamNotificationHtml(fields, inquiryId),
      replyTo: fields.email, // Hitting Reply in the inbox answers the visitor directly.
    });
    console.info(`Inquiry ${inquiryId}: team notification sent to ${MAIL_TO}.`);
  } catch (mailError) {
    console.error(`Inquiry ${inquiryId}: team notification FAILED -`, mailError);
  }

  try {
    await sendEmail({
      to:      fields.email,
      subject: "We have received your inquiry - HARTS Consulting",
      html:    autoReplyHtml(fields),
      replyTo: MAIL_TO,
    });
    console.info(`Inquiry ${inquiryId}: auto-reply sent to ${fields.email}.`);
  } catch (mailError) {
    console.error(`Inquiry ${inquiryId}: auto-reply FAILED -`, mailError);
  }
}
