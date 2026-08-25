import { NextResponse } from "next/server";
import { supabase } from "../../_lib/supabase";
// PHASE 2: uncomment together with the call at the end of POST().
// import { sendInquiryEmails } from "../../_lib/inquiry-email";
import {
  capLength,
  isHoneypotTripped,
  isValidEmail,
  isValidPhone,
} from "../../_lib/validate";

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

    // PHASE 2 — notify info@globalharts.com and acknowledge the visitor.
    // Blocked until globalharts.com is verified in Resend; see the checklist in
    // app/_lib/inquiry-email.ts. sendInquiryEmails() never throws, so a mail
    // failure cannot turn a successfully stored inquiry into an error for the
    // visitor. Uncomment the import at the top of this file to enable.
    //
    // await sendInquiryEmails(
    //   { name, email, company, role, phone, country, sector, service, message },
    //   data.id,
    // );

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
