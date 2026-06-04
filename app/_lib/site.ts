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

export const siteDescription =
  "HARTS partners with senior leadership teams to navigate complexity, accelerate transformation, and deliver measurable outcomes across strategy, operations, and digital enablement.";

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
