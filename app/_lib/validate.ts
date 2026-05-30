// Lightweight input validators shared by API routes. Kept dependency-free so
// the routes don't pull in zod just for these checks.

const EMAIL_RE = /^[^\s@<>()"';]+@[^\s@<>()"';]+\.[^\s@<>()"';]+$/;
// E.164-ish: digits, optional +, spaces, dashes, parens. Length-bounded.
const PHONE_RE = /^[+\d][\d\s\-().]{5,29}$/;

export function isValidEmail(value: string): boolean {
  return value.length <= 254 && EMAIL_RE.test(value);
}

export function isValidPhone(value: string): boolean {
  return PHONE_RE.test(value);
}

export function capLength(value: string, max: number): string {
  return value.length > max ? value.slice(0, max) : value;
}

// Honeypot: forms render a hidden field (e.g. name="website") that real
// users leave empty. Anything non-empty is a bot — reject silently with 200
// so scrapers don't learn what tripped the filter.
export function isHoneypotTripped(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}
