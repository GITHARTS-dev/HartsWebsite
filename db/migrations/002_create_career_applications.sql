CREATE TABLE IF NOT EXISTS career_applications (
  id SERIAL PRIMARY KEY,
  role_slug TEXT NOT NULL,
  role_title TEXT NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  city TEXT NOT NULL,
  country TEXT NOT NULL,
  linkedin TEXT,
  current_company TEXT,
  current_title TEXT,
  experience TEXT NOT NULL,
  notice TEXT,
  cover_letter TEXT,
  heard_from TEXT,
  resume_filename TEXT NOT NULL,
  resume_mime TEXT NOT NULL,
  resume_size INTEGER NOT NULL,
  resume_data BYTEA NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS career_applications_role_idx ON career_applications (role_slug);
CREATE INDEX IF NOT EXISTS career_applications_email_idx ON career_applications (email);
