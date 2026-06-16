import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "../../_lib/supabase";
import { escapeHtml } from "../../_lib/sanitize";
import {
  capLength,
  isHoneypotTripped,
  isValidEmail,
  isValidPhone,
} from "../../_lib/validate";

const resend = new Resend(process.env.RESEND_API_KEY);

export const runtime = "nodejs";

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
  country?: unknown;
  sector?: unknown;
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
    name:    formData.get("name"),
    company: formData.get("company"),
    role:    formData.get("role"),
    email:   formData.get("email"),
    phone:   formData.get("phone"),
    country: formData.get("country"),
    service: formData.get("service"),
    message: formData.get("message"),
    sector:  formData.get("sector"),
    website: formData.get("website"),
  };
}

function fieldToString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

// Max 3 submissions per email per hour.
async function isRateLimited(email: string): Promise<boolean> {
  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { count } = await supabase
    .from("contact_inquiries")
    .select("*", { count: "exact", head: true })
    .eq("email", email)
    .gte("created_at", since);
  return (count ?? 0) >= 3;
}

export async function POST(request: Request) {
  try {
    const body = await readContactBody(request);

    // Honeypot: silently succeed so bots don't learn what tripped the filter.
    if (isHoneypotTripped(body.website)) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const name    = capLength(fieldToString(body.name),    MAX.name);
    const company = capLength(fieldToString(body.company), MAX.company);
    const role    = capLength(fieldToString(body.role),    MAX.role);
    const email   = capLength(fieldToString(body.email),   MAX.email).toLowerCase();
    const phone   = capLength(fieldToString(body.phone),   MAX.phone);
    const country = capLength(fieldToString(body.country), 100);
    const sector  = capLength(fieldToString(body.sector),  120);
    const service = capLength(fieldToString(body.service), MAX.service);
    const message = capLength(fieldToString(body.message), MAX.message);

    if (!name || !email || !message) {
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

    if (!country) {
      return NextResponse.json(
        { success: false, error: "Please select your country." },
        { status: 400 },
      );
    }

    if (await isRateLimited(email)) {
      return NextResponse.json(
        { success: false, error: "Too many submissions. Please try again later." },
        { status: 429 },
      );
    }

    const { data, error } = await supabase
      .from("contact_inquiries")
      .insert({
        name,
        email,
        company: company || "Not provided",
        role:    role    || null,
        phone:   phone   || "Not provided",
        country: country || "Not provided",
        sector:  sector  || null,
        service: service || "General inquiry",
        message,
      })
      .select("id")
      .single();

    if (error) throw new Error(`Supabase insert failed: ${error.message}`);

    console.info(`Contact inquiry ${data.id} saved to Supabase.`);

    const eName    = escapeHtml(name);
    const eEmail   = escapeHtml(email);
    const eCompany = escapeHtml(company);
    const eRole    = escapeHtml(role);
    const ePhone   = escapeHtml(phone);
    const eCountry = escapeHtml(country);
    const eSector  = escapeHtml(sector);
    const eService = escapeHtml(service);
    const eMessage = escapeHtml(message);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to:   "info@globalharts.com",
      subject: `New Inquiry from ${eName} — HARTS Website`,
      html: `
        <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.6;max-width:600px;">
          <h2 style="margin:0 0 16px;color:#E7473C;">New Contact Inquiry</h2>
          <table role="presentation" style="border-collapse:collapse;width:100%;">
            <tr>
              <td style="padding:8px 0;color:#475569;width:130px;">Name</td>
              <td style="padding:8px 0;color:#111827;">${eName}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#475569;">Email</td>
              <td style="padding:8px 0;color:#111827;">${eEmail}</td>
            </tr>
            ${eCompany ? `<tr><td style="padding:8px 0;color:#475569;">Company</td><td style="padding:8px 0;color:#111827;">${eCompany}</td></tr>` : ""}
            ${eRole ? `<tr><td style="padding:8px 0;color:#475569;">Role</td><td style="padding:8px 0;color:#111827;">${eRole}</td></tr>` : ""}
            ${ePhone ? `<tr><td style="padding:8px 0;color:#475569;">Phone</td><td style="padding:8px 0;color:#111827;">${ePhone}</td></tr>` : ""}
            ${eCountry ? `<tr><td style="padding:8px 0;color:#475569;">Country</td><td style="padding:8px 0;color:#111827;">${eCountry}</td></tr>` : ""}
            ${eSector  ? `<tr><td style="padding:8px 0;color:#475569;">Sector</td><td style="padding:8px 0;color:#111827;">${eSector}</td></tr>` : ""}
            ${eService ? `<tr><td style="padding:8px 0;color:#475569;">Service</td><td style="padding:8px 0;color:#111827;">${eService}</td></tr>` : ""}
          </table>
          <div style="margin-top:18px;">
            <p style="margin:0 0 8px;color:#475569;">Message</p>
            <div style="padding:14px 16px;background:#f8fafc;border-left:4px solid #E7473C;white-space:pre-wrap;">${eMessage}</div>
          </div>
          <p style="margin-top:20px;font-size:12px;color:#9ca3af;">Inquiry #${data.id} · HARTS Website</p>
        </div>
      `,
    });

    console.info(`Notification email sent for inquiry ${data.id}.`);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
