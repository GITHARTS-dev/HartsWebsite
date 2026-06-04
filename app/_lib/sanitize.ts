/**
 * Escapes HTML special characters to prevent XSS when embedding
 * user-supplied strings inside server-generated HTML (e.g. email bodies).
 * Not a replacement for a full sanitizer when rendering rich HTML — use
 * this for plain-text fields that must not be treated as markup.
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}
