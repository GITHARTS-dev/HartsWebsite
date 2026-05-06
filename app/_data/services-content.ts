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
  {
    title: "Growth Strategy",
    slug: "growth-strategy",
    summary:
      "Define where to grow next and build the investment case and roadmap to get there.",
    lead:
      "We help leadership teams identify and prioritise the markets, segments, and moves most likely to create durable value — and build the strategic case to act on them.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Business growth and market strategy planning session",
    capabilities: [
      "Market entry assessment and opportunity sizing",
      "Adjacency and portfolio expansion analysis",
      "Business case and investment thesis development",
      "Growth roadmap with sequenced initiatives",
    ],
    benefits: [
      "A clear view of where and how to compete for value",
      "Prioritised growth bets with defensible rationale",
      "Leadership conviction aligned around ambition",
    ],
    workflow: [
      "Define the growth horizon and ambition",
      "Map opportunity spaces with market evidence",
      "Prioritise by value, risk, and organisational readiness",
      "Build the case and mobilise teams around the plan",
    ],
  },
  {
    title: "Operating Model Design",
    slug: "operating-model-design",
    summary:
      "Align your structure, processes, and resources precisely to your strategic priorities.",
    lead:
      "We help organisations design operating models that connect strategic intent to daily execution — with clarity on roles, decisions, and delivery rhythms.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Organisation design and operating model workshop with leadership team",
    capabilities: [
      "Organisational structure and accountability design",
      "Process mapping and efficiency optimisation",
      "Resource allocation and capacity planning",
      "Ways of working and governance design",
    ],
    benefits: [
      "Faster decisions with clearer accountability",
      "Reduced duplication and operational friction",
      "A structure that scales with strategic ambition",
    ],
    workflow: [
      "Diagnose current model constraints and gaps",
      "Design the future operating model",
      "Sequence changes by impact and readiness",
      "Implement and embed new ways of working",
    ],
  },
  {
    title: "Digital Enablement",
    slug: "digital-enablement",
    summary:
      "Translate technology investments into measurable business capability and competitive advantage.",
    lead:
      "We help leadership teams make confident digital decisions — defining where technology creates real value, and how to build and sustain that capability over time.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Digital transformation planning with leadership and technology teams",
    capabilities: [
      "Digital strategy and technology roadmap",
      "Platform and architecture decision support",
      "Data and analytics capability building",
      "Digital adoption and change enablement",
    ],
    benefits: [
      "Technology investments tied to measurable business outcomes",
      "Reduced delivery risk on complex programmes",
      "Sustained digital capability beyond go-live",
    ],
    workflow: [
      "Assess digital maturity and opportunity landscape",
      "Define the technology vision and phased roadmap",
      "Prioritise by value, risk, and organisational feasibility",
      "Enable adoption and sustain performance over time",
    ],
  },
];
