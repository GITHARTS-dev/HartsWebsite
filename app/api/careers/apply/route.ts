import { NextResponse } from "next/server";
import { getPostgresPool } from "../../../_lib/postgres";
import {
  capLength,
  isHoneypotTripped,
  isValidEmail,
  isValidPhone,
} from "../../../_lib/validate";

export const runtime = "nodejs";

const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED_MIME = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const ALLOWED_EXT = [".pdf", ".doc", ".docx"];

const FIELD_MAX = {
  roleSlug: 120,
  roleTitle: 200,
  firstName: 80,
  lastName: 80,
  email: 254,
  phone: 30,
  city: 120,
  country: 120,
  linkedin: 300,
  currentCompany: 200,
  currentTitle: 200,
  experience: 40,
  notice: 80,
  coverLetter: 5000,
  heardFrom: 200,
};

function str(value: FormDataEntryValue | null, max?: number) {
  const s = typeof value === "string" ? value.trim() : "";
  return max ? capLength(s, max) : s;
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();

    // Honeypot — silent 200.
    if (isHoneypotTripped(form.get("website"))) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    const roleSlug = str(form.get("roleSlug"), FIELD_MAX.roleSlug);
    const roleTitle = str(form.get("roleTitle"), FIELD_MAX.roleTitle);
    const firstName = str(form.get("firstName"), FIELD_MAX.firstName);
    const lastName = str(form.get("lastName"), FIELD_MAX.lastName);
    const email = str(form.get("email"), FIELD_MAX.email).toLowerCase();
    const phone = str(form.get("phone"), FIELD_MAX.phone);
    const city = str(form.get("city"), FIELD_MAX.city);
    const country = str(form.get("country"), FIELD_MAX.country);
    const linkedin = str(form.get("linkedin"), FIELD_MAX.linkedin);
    const currentCompany = str(form.get("currentCompany"), FIELD_MAX.currentCompany);
    const currentTitle = str(form.get("currentTitle"), FIELD_MAX.currentTitle);
    const experience = str(form.get("experience"), FIELD_MAX.experience);
    const notice = str(form.get("notice"), FIELD_MAX.notice);
    const coverLetter = str(form.get("coverLetter"), FIELD_MAX.coverLetter);
    const heardFrom = str(form.get("heardFrom"), FIELD_MAX.heardFrom);
    const consent = form.get("consent");
    const resume = form.get("resume");

    if (
      !roleSlug ||
      !roleTitle ||
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !city ||
      !country ||
      !experience
    ) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { error: "Please enter a valid phone number." },
        { status: 400 },
      );
    }

    if (linkedin && linkedin.length > 0 && !/^https?:\/\//i.test(linkedin)) {
      return NextResponse.json(
        { error: "LinkedIn URL must start with http(s)://." },
        { status: 400 },
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "Consent is required to process your application." },
        { status: 400 },
      );
    }

    if (!(resume instanceof File) || resume.size === 0) {
      return NextResponse.json(
        { error: "Please attach your resume." },
        { status: 400 },
      );
    }

    if (resume.size > MAX_BYTES) {
      return NextResponse.json(
        { error: "Resume must be 5 MB or smaller." },
        { status: 400 },
      );
    }

    const lowerName = resume.name.toLowerCase();
    const okExt = ALLOWED_EXT.some((ext) => lowerName.endsWith(ext));
    const okMime = ALLOWED_MIME.has(resume.type);
    if (!okExt || !okMime) {
      return NextResponse.json(
        { error: "Resume must be a PDF, DOC, or DOCX file." },
        { status: 400 },
      );
    }

    const buffer = Buffer.from(await resume.arrayBuffer());

    // Magic-byte sniff — extension and MIME are client-supplied. PDF starts
    // with "%PDF", DOCX is a ZIP ("PK\x03\x04"), legacy DOC is OLE ("\xD0\xCF\x11\xE0").
    const isPdf = buffer.length >= 4 && buffer.slice(0, 4).toString("ascii") === "%PDF";
    const isDocx =
      buffer.length >= 4 &&
      buffer[0] === 0x50 && buffer[1] === 0x4b && buffer[2] === 0x03 && buffer[3] === 0x04;
    const isDoc =
      buffer.length >= 8 &&
      buffer[0] === 0xd0 && buffer[1] === 0xcf && buffer[2] === 0x11 && buffer[3] === 0xe0;
    if (!isPdf && !isDocx && !isDoc) {
      return NextResponse.json(
        { error: "Resume file appears corrupted or is not a real PDF/DOC/DOCX." },
        { status: 400 },
      );
    }

    const pool = getPostgresPool();
    const result = await pool.query<{ id: number }>(
      `
        INSERT INTO career_applications (
          role_slug,
          role_title,
          first_name,
          last_name,
          email,
          phone,
          city,
          country,
          linkedin,
          current_company,
          current_title,
          experience,
          notice,
          cover_letter,
          heard_from,
          resume_filename,
          resume_mime,
          resume_size,
          resume_data
        )
        VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
          $11, $12, $13, $14, $15, $16, $17, $18, $19
        )
        RETURNING id
      `,
      [
        roleSlug,
        roleTitle,
        firstName,
        lastName,
        email,
        phone,
        city,
        country,
        linkedin || null,
        currentCompany || null,
        currentTitle || null,
        experience,
        notice || null,
        coverLetter || null,
        heardFrom || null,
        resume.name,
        resume.type,
        resume.size,
        buffer,
      ],
    );

    return NextResponse.json(
      { success: true, applicationId: result.rows[0].id },
      { status: 201 },
    );
  } catch (error) {
    console.error("Career Apply API Error:", error);
    const errorMessage =
      process.env.NODE_ENV === "development" && error instanceof Error
        ? `Failed to submit your application: ${error.message}`
        : "Failed to submit your application. Please try again.";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
