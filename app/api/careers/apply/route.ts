import { NextResponse } from "next/server";
import { getPostgresPool } from "../../../_lib/postgres";

export const runtime = "nodejs";

const MAX_BYTES = 5 * 1024 * 1024;
const ALLOWED_MIME = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const ALLOWED_EXT = [".pdf", ".doc", ".docx"];

function str(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const form = await request.formData();

    const roleSlug = str(form.get("roleSlug"));
    const roleTitle = str(form.get("roleTitle"));
    const firstName = str(form.get("firstName"));
    const lastName = str(form.get("lastName"));
    const email = str(form.get("email"));
    const phone = str(form.get("phone"));
    const city = str(form.get("city"));
    const country = str(form.get("country"));
    const linkedin = str(form.get("linkedin"));
    const currentCompany = str(form.get("currentCompany"));
    const currentTitle = str(form.get("currentTitle"));
    const experience = str(form.get("experience"));
    const notice = str(form.get("notice"));
    const coverLetter = str(form.get("coverLetter"));
    const heardFrom = str(form.get("heardFrom"));
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
