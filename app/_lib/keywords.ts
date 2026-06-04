/**
 * Centralized SEO keyword library for HARTS Consulting.
 *
 * Organized into buckets that mirror how search-tool keyword reports
 * categorize terms (brand / category / service / industry / question /
 * geo / generic). Each page can compose its own keyword set by picking
 * from the relevant buckets — no copy/pasting strings across files.
 *
 * Keep lowercase and human-natural (no underscores, no comma-strings).
 * Modern search engines weight keywords lightly, but well-targeted lists
 * still help LLM/AI search engines (ChatGPT, Perplexity, Gemini) classify
 * the page correctly when they parse `<meta name="keywords">`.
 */

// ── BRAND ─────────────────────────────────────────────────────────────
export const brandKeywords = [
  "HARTS Consulting",
  "HARTS Consulting India",
  "HARTS Consulting Coimbatore",
  "HARTS Consulting Düsseldorf",
  "HARTS strategy consulting",
  "HARTS BOT consulting",
];

// ── CATEGORY (generic, high-volume search terms) ──────────────────────
// These attract broader public traffic from people searching for
// consulting firms generally, not HARTS specifically.
export const categoryKeywords = [
  "management consulting India",
  "management consulting firms",
  "strategy consulting firm",
  "strategy consulting India",
  "business consulting India",
  "business consulting services",
  "boutique consulting firm",
  "boutique consulting India",
  "enterprise consulting",
  "corporate consulting India",
  "consulting partners India",
  "transformation consulting",
  "transformation consulting firms",
  "operating model consulting",
  "consulting agency India",
  "best consulting firms India",
  "top consulting firms India",
];

// ── METHODOLOGY ───────────────────────────────────────────────────────
export const methodologyKeywords = [
  "build operate transfer",
  "build operate transfer consulting",
  "BOT methodology",
  "BOT engagement model",
  "BOT consulting model",
  "BOT delivery model",
];

// ── SERVICES (cross-service category terms) ───────────────────────────
export const serviceKeywords = [
  // OD & Implementation
  "organisational design consulting",
  "organisational design firm",
  "operating model design",
  "OD and implementation",
  "workforce structure consulting",
  "leadership capability development",
  // Centre of Excellence
  "centre of excellence setup",
  "centre of excellence consulting",
  "CoE setup",
  "CoE implementation",
  "operational excellence consulting",
  "governance framework consulting",
  // Post M&A Integration
  "post merger integration consultant",
  "post merger integration services",
  "M&A integration India",
  "M&A integration consulting",
  "100 day integration plan",
  "integration management office",
  "IMO consulting",
  "synergy realisation",
  "synergy capture consulting",
  // GCC & Shared Services
  "GCC setup India",
  "global capability center consultant",
  "global capability centre setup",
  "captive center setup India",
  "shared services setup",
  "shared services consulting",
  "offshore capability center",
  "GCC build operate transfer",
  // Recruitment as a Service
  "recruitment as a service",
  "RaaS provider India",
  "talent acquisition outsourcing",
  "recruitment process outsourcing",
  "RPO services India",
  "workforce ramp up programme",
  "scalable hiring solutions",
  // Executive Coaching
  "executive coaching India",
  "C-suite coaching",
  "CEO coaching India",
  "board advisory consulting",
  "board effectiveness",
  "leadership coaching during transformation",
];

// ── INDUSTRY VERTICALS ────────────────────────────────────────────────
// People often search by industry — covers them even without dedicated
// industry pages yet.
export const industryKeywords = [
  "BFSI transformation consulting",
  "banking transformation consulting",
  "manufacturing consulting India",
  "pharma consulting India",
  "life sciences consulting",
  "technology consulting India",
  "IT services transformation",
  "retail consulting India",
  "healthcare consulting India",
  "energy sector consulting",
  "telecom transformation consulting",
  "private equity portfolio consulting",
  "PE operating partner",
];

// ── QUESTION-BASED (long-tail, voice search, featured snippets) ──────
export const questionKeywords = [
  "what is build operate transfer",
  "what is BOT methodology",
  "how to set up a GCC in India",
  "how to manage post merger integration",
  "what is a centre of excellence",
  "how to design an operating model",
  "how to run an integration management office",
  "best consulting firm for M&A integration",
  "how does build operate transfer work",
  "BOT model vs traditional consulting",
];

// ── GEOGRAPHY (local SEO) ─────────────────────────────────────────────
export const geoKeywords = [
  "consulting firm Coimbatore",
  "consulting firm Tamil Nadu",
  "management consulting Coimbatore",
  "consulting firm Düsseldorf",
  "Germany India consulting partner",
  "India consulting boutique",
  "consulting firms south India",
];

// ── BUYER-INTENT (high-conversion long-tail) ──────────────────────────
export const intentKeywords = [
  "hire consulting firm India",
  "transformation execution partner",
  "operating model design firm",
  "consulting firm with implementation experience",
  "consulting firm that delivers, not just advises",
  "consulting partner for restructuring",
  "consulting partner for capability build",
];

// ── HOMEPAGE composite ───────────────────────────────────────────────
// What the root layout's <meta name="keywords"> should ship.
export const homepageKeywords: string[] = [
  ...brandKeywords,
  ...categoryKeywords,
  ...methodologyKeywords,
  ...serviceKeywords.slice(0, 18),
  ...industryKeywords.slice(0, 6),
  ...geoKeywords.slice(0, 4),
  ...intentKeywords.slice(0, 4),
];
