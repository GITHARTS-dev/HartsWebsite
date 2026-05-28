export type Opening = {
  slug: string;
  title: string;
  role: string;
  description: string;
  location: string;
  employmentType: string;
  team: string;
  responsibilities: string[];
  qualifications: string[];
};

export const openings: Opening[] = [
  {
    slug: "transformation-operating-models",
    title: "Transformation & Operating Models",
    role: "Strategy & Transformation Consultant",
    description:
      "Lead client engagements across OD, post-merger integration, and CoE build. Work alongside leadership teams to design and run the operating model that the strategy actually needs.",
    location: "Hybrid · Bengaluru / London / Dubai",
    employmentType: "Full-time",
    team: "Strategy & Transformation",
    responsibilities: [
      "Diagnose operating-model gaps and design target-state structures with senior client sponsors.",
      "Run multi-workstream transformation programmes from initiation through to steady-state.",
      "Translate strategic intent into concrete operating cadence, RACI, and governance artefacts.",
      "Coach client leaders through change adoption and capability transfer.",
    ],
    qualifications: [
      "8+ years in management consulting, in-house transformation, or operator-side leadership.",
      "Track record of leading enterprise-scale OD, PMI, or CoE build engagements.",
      "Comfort working directly with CXO-level stakeholders in regulated environments.",
      "Sharp written communication and the ability to mobilise teams without authority.",
    ],
  },
  {
    slug: "gcc-shared-services",
    title: "GCC & Shared Services",
    role: "Global Capability Center Consultant",
    description:
      "Stand up Global Capability Centres for clients - site selection through to live operations. Carry the BOT lifecycle end-to-end, from first hire to full transfer.",
    location: "Hybrid · Bengaluru / Hyderabad",
    employmentType: "Full-time",
    team: "GCC & Shared Services",
    responsibilities: [
      "Run feasibility, location, and entity-structure analyses for new GCC builds.",
      "Lead Build–Operate–Transfer engagements across legal, talent, real estate, and tech.",
      "Define SLAs, operating KPIs, and the governance model that the client will inherit.",
      "Partner with leadership to scale headcount, capability, and process maturity.",
    ],
    qualifications: [
      "Direct experience setting up or scaling a Global Capability Centre / shared-services org.",
      "Strong grasp of India entry, statutory compliance, and large-scale talent acquisition.",
      "Hands-on with vendor selection, tech stack decisions, and operations design.",
      "Proven leadership in cross-border, multi-functional programmes.",
    ],
  },
  {
    slug: "people-talent",
    title: "People & Talent",
    role: "People & Change Consultant",
    description:
      "Design and run the people side of transformation - job architecture, EVP, recruitment-as-a-service, leadership development. Make sure the change actually lands with the humans doing the work.",
    location: "Hybrid · Bengaluru / Dubai",
    employmentType: "Full-time",
    team: "People & Organisation",
    responsibilities: [
      "Design job architecture, competency frameworks, and EVP for client organisations.",
      "Run recruitment-as-a-service mandates for niche and leadership hiring needs.",
      "Build and facilitate leadership-development and change-enablement programmes.",
      "Bring measurement discipline to people initiatives adoption, engagement, attrition.",
    ],
    qualifications: [
      "7+ years across HR strategy, talent, OD, or learning consulting.",
      "Hands-on with job architecture, EVP design, or executive search delivery.",
      "Strong facilitation skills with senior leaders and cross-functional groups.",
      "Comfort with people analytics and outcome measurement.",
    ],
  },
];

export function findOpening(slug: string): Opening | undefined {
  return openings.find((o) => o.slug === slug);
}
