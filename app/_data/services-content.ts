export type ServiceOffering = {
  title: string;
  slug: string;
  summary: string;
  lead: string;
  image: string;
  imageAlt: string;
  capabilities: string[];
  benefits: string[];
  workflow: string[];
};

export const serviceOfferings: ServiceOffering[] = [
  {
    title: "Market Clarity",
    slug: "market-clarity",
    summary:
      "Prioritize the markets, segments, and growth bets that deserve leadership attention.",
    lead:
      "We help leadership teams read market signals, understand competitive pressure, and focus investment on the opportunities most likely to create durable value.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Strategy documents, charts, and laptop on a work table",
    capabilities: [
      "Market and customer opportunity sizing",
      "Competitive landscape and positioning analysis",
      "Portfolio prioritization and growth thesis development",
      "Decision framing for leadership and board discussions",
    ],
    benefits: [
      "Sharper choices about where to compete",
      "Better visibility into risks and value pools",
      "Clearer alignment across strategy, commercial, and operating teams",
    ],
    workflow: [
      "Frame the strategic question and decision horizon",
      "Gather market, customer, and internal evidence",
      "Map the opportunity space with practical trade-offs",
      "Translate findings into priorities and next moves",
    ],
  },
  {
    title: "Transformation Design",
    slug: "transformation-design",
    summary:
      "Turn ambition into operating models, roadmaps, governance, and measurable delivery.",
    lead:
      "We design transformation programs that connect strategic intent with delivery realities, helping teams move through complexity without losing focus.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Consulting team discussing a transformation roadmap",
    capabilities: [
      "Target operating model design",
      "Transformation roadmap and milestone planning",
      "Governance, funding, and decision rhythm setup",
      "Change readiness and adoption planning",
    ],
    benefits: [
      "A practical bridge between strategy and execution",
      "Clear owners, milestones, and accountability",
      "Reduced delivery risk across complex workstreams",
    ],
    workflow: [
      "Define the future-state ambition and constraints",
      "Design the operating model and transformation architecture",
      "Sequence initiatives by value, dependency, and readiness",
      "Stand up governance that keeps momentum visible",
    ],
  },
  {
    title: "Executive Alignment",
    slug: "executive-alignment",
    summary:
      "Build shared conviction before critical launches, pivots, investments, or change programs.",
    lead:
      "We create the structure leaders need to make complex decisions together, resolve tension early, and communicate a coherent path forward.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Executive team in a leadership workshop",
    capabilities: [
      "Leadership workshop design and facilitation",
      "Decision architecture and trade-off mapping",
      "Strategic narrative and stakeholder communication",
      "Operating cadence and leadership ritual design",
    ],
    benefits: [
      "Faster, more confident leadership decisions",
      "Reduced ambiguity for teams responsible for execution",
      "A shared story that connects ambition to action",
    ],
    workflow: [
      "Surface the decisions, tensions, and assumptions",
      "Facilitate structured alignment around options",
      "Document commitments, owners, and next actions",
      "Equip leaders with the narrative and cadence to mobilize teams",
    ],
  },
];
