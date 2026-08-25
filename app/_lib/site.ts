/**
 * Single source of truth for site-wide identity used by SEO metadata,
 * sitemap, robots, and JSON-LD structured data. Override siteUrl by
 * setting NEXT_PUBLIC_SITE_URL in the deploy environment.
 */

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.globalharts.com";

export const siteName = "HARTS Consulting";

export const siteTagline =
  "Strategy. Transformation. Clarity.";

/**
 * What HARTS *is*, in the plainest words available. siteTagline is brand voice
 * and reads well on a social card, but it never says "consulting firm" — so a
 * search result for "harts" gave a reader nothing to identify the company by.
 * This line carries the search title instead.
 */
export const siteCategory =
  "Management Consulting in India & Germany";

// Leads with the category and where HARTS operates, then names the actual
// services. Search engines lift the opening clause for the result snippet, so
// the identifying sentence has to come first and survive truncation at ~160
// characters.
export const siteDescription =
  "HARTS Consulting is a management consulting firm in India and Germany — organisational design, post-merger integration, Global Capability Centres, and executive advisory.";

export const ogImagePath = "/HARTS Consulting LBG.png";

export const organization = {
  legalName: "HARTS Consulting",
  email: "hello@globalharts.com",
  phone: "+91 422 000 0000",
  address: {
    streetAddress: "7C, Mayflower Signature, Avinashi Road, Peelamedu",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    postalCode: "641004",
    addressCountry: "IN",
  },
  sameAs: ["https://www.linkedin.com/company/harts-consultiing/"],
};
