-- Adds an "industry" column so the contact form can capture the sector
-- the visitor is from. Nullable so existing rows are unaffected.
ALTER TABLE contact_inquiries
  ADD COLUMN IF NOT EXISTS industry TEXT;
