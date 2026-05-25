import { NextResponse } from 'next/server';
import { getPostgresPool } from '../../_lib/postgres';

export const runtime = 'nodejs';

type ContactRequestBody = {
  name?: unknown;
  company?: unknown;
  role?: unknown;
  email?: unknown;
  phone?: unknown;
  service?: unknown;
  message?: unknown;
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
  };
}

function fieldToString(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  try {
    const body = await readContactBody(request);

    const name = fieldToString(body.name);
    const company = fieldToString(body.company);
    const role = fieldToString(body.role);
    const email = fieldToString(body.email);
    const phone = fieldToString(body.phone);
    const service = fieldToString(body.service);
    const message = fieldToString(body.message);

    if (!name || !company || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Name, company, email, phone, service, and message are required.' },
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
