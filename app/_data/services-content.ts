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
    title: "GCC Setup",
    slug: "market-clarity",
    summary:
      "Stand up Global Capability Centers that scale strategic capability at competitive economics.",
    lead:
      "We help organisations design, build, and scale Global Capability Centers — from location strategy and entity setup through operating model, talent, and long-term value migration.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Strategy documents, charts, and laptop on a work table",
    capabilities: [
      "Location strategy, feasibility, and business case",
      "Entity setup, regulatory compliance, and tax structuring",
      "Operating model, governance, and leadership design",
      "Talent strategy, hiring, and capability ramp-up",
      "Maturity roadmap and value migration planning",
    ],
    benefits: [
      "Faster speed-to-stand-up with reduced setup risk",
      "Strategic value beyond cost arbitrage",
      "A scalable platform for global capability and innovation",
    ],
    workflow: [
      "Build the business case and location shortlist",
      "Design the operating model, entity, and governance",
      "Stand up infrastructure, leadership, and the founding team",
      "Scale capability and migrate value through structured horizons",
    ],
  },
  {
    title: "Project and Program Management",
    slug: "transformation-design",
    summary:
      "Deliver complex programmes on time, on budget, and against measurable outcomes.",
    lead:
      "We bring senior delivery discipline to mission-critical programmes — turning ambition into structured execution with clear governance, milestone integrity, and stakeholder visibility from Day 1.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Consulting team discussing a transformation roadmap",
    capabilities: [
      "Programme governance and PMO / PgMO setup",
      "Milestone, dependency, and critical-path management",
      "Risk, issue, and change control",
      "Resource, budget, and benefits tracking",
      "Executive reporting and stakeholder management",
    ],
    benefits: [
      "Predictable delivery against committed outcomes",
      "Reduced cost and schedule slippage",
      "Clear accountability across every workstream",
    ],
    workflow: [
      "Establish governance, scope, and success metrics",
      "Mobilise teams, tooling, and reporting cadence",
      "Drive delivery through disciplined milestone tracking",
      "Close out, transition, and embed organisational learning",
    ],
  },
  {
    title: "Talent Acquisition and Development",
    slug: "executive-alignment",
    summary:
      "Acquire, develop, and retain the talent your strategy depends on — at every level.",
    lead:
      "We help organisations build the talent engine that powers their strategy — from workforce planning and acquisition through leadership development, succession, and retention.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Executive team in a leadership workshop",
    capabilities: [
      "Workforce planning and capability mapping",
      "Talent acquisition strategy and employer brand",
      "Leadership development and succession design",
      "Learning architecture and capability programmes",
      "Engagement, retention, and culture diagnostics",
    ],
    benefits: [
      "The right capability in the right roles at the right time",
      "A stronger leadership pipeline and lower succession risk",
      "A culture that attracts and retains critical talent",
    ],
    workflow: [
      "Diagnose current capability and future-state demand",
      "Design the talent and development architecture",
      "Activate hiring, development, and retention programmes",
      "Measure capability uplift and refine continuously",
    ],
  },
  {
    title: "JAM (Job Architecture Model)",
    slug: "growth-strategy",
    summary:
      "Bring structural clarity to roles, levels, pay, and career paths across the organisation.",
    lead:
      "We design Job Architecture Models that align roles, levels, and progression to your operating model — connecting work content to compensation, career pathways, and organisational design.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Business growth and market strategy planning session",
    capabilities: [
      "Job architecture framework and levelling design",
      "Role definition, evaluation, and grading",
      "Career pathway and progression mapping",
      "Compensation alignment and benchmarking",
      "Implementation, communication, and governance",
    ],
    benefits: [
      "Consistent role clarity across the organisation",
      "Defensible pay equity and compensation governance",
      "Transparent career paths that strengthen retention",
    ],
    workflow: [
      "Diagnose the current role landscape and structural gaps",
      "Design the architecture, levels, and evaluation framework",
      "Map and grade roles against the new model",
      "Roll out with leader enablement and change support",
    ],
  },
  {
    title: "Innovation Lab & Setup",
    slug: "operating-model-design",
    summary:
      "Stand up a focused Innovation Lab that turns enterprise scale into a competitive engine.",
    lead:
      "We help organisations design and operate Innovation Labs that translate strategic ambition into validated, fundable, scalable new ventures and capabilities — without disrupting the core.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Organisation design and operating model workshop with leadership team",
    capabilities: [
      "Innovation strategy and lab charter design",
      "Operating model, governance, and funding architecture",
      "Talent, partnerships, and ecosystem design",
      "Venture pipeline and stage-gate process",
      "Scaling protocols from lab to enterprise",
    ],
    benefits: [
      "A disciplined engine for new growth, not ad-hoc experiments",
      "Faster validation cycles with clearer kill / scale decisions",
      "Strategic optionality, protected from core operating pressure",
    ],
    workflow: [
      "Define the innovation thesis, mandate, and scope",
      "Design the lab — operating model, governance, and pipeline",
      "Stand up infrastructure, talent, and partnerships",
      "Run, measure, and scale validated ventures back into core",
    ],
  },
  {
    title: "Post M&A Playbook",
    slug: "digital-enablement",
    summary:
      "Capture the full value of your acquisition through disciplined post-merger integration.",
    lead:
      "We help acquirers and merged organisations execute the integration playbook that turns deal logic into realised value — across operating model, people, systems, and culture.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Digital transformation planning with leadership and technology teams",
    capabilities: [
      "Day-1 readiness and Integration Management Office (IMO)",
      "Operating model, organisation, and synergy design",
      "Systems, process, and data integration planning",
      "Culture, communication, and change management",
      "Synergy tracking and value realisation governance",
    ],
    benefits: [
      "Faster, disciplined integration with reduced disruption",
      "Synergy capture aligned to deal-model commitments",
      "Culture and talent retention through the transition",
    ],
    workflow: [
      "Stand up the IMO, governance, and Day-1 plan",
      "Design the integrated operating model and synergy roadmap",
      "Execute integration across people, process, and systems",
      "Track value realisation and embed the new operating state",
    ],
  },
];
