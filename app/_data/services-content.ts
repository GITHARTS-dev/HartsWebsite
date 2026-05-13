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
    title: "Innovation",
    slug: "innovation",
    summary:
      "Turn enterprise scale into a disciplined engine for new growth, not ad-hoc experimentation.",
    lead:
      "We help leadership teams design innovation programmes that translate strategic ambition into validated, fundable, and scalable new ventures — without disrupting the core business.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Innovation team collaborating on new product concepts",
    capabilities: [
      "Innovation strategy, mandate, and lab charter design",
      "Operating model, governance, and funding architecture",
      "Talent, partnerships, and ecosystem design",
      "Stage-gate process and venture pipeline",
      "Scale-up protocols from lab to enterprise",
    ],
    benefits: [
      "A disciplined engine for new growth — not ad-hoc experiments",
      "Faster validation cycles with clearer kill / scale decisions",
      "Strategic optionality, protected from core operating pressure",
    ],
    workflow: [
      "Define the innovation thesis, mandate, and scope",
      "Design the operating model, governance, and pipeline",
      "Stand up infrastructure, talent, and partnerships",
      "Run, measure, and scale validated ventures back into core",
    ],
  },
  {
    title: "M&A",
    slug: "mergers-acquisitions",
    summary:
      "Capture the full value of every deal — from thesis through integration and synergy realisation.",
    lead:
      "We support acquirers and merged organisations across the full deal lifecycle — from commercial diligence and value-creation planning, through Day-1 readiness, integration, and disciplined synergy capture.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Executive team reviewing an M&A deal book",
    capabilities: [
      "Commercial diligence and value-creation thesis",
      "Day-1 readiness and Integration Management Office (IMO)",
      "Operating model, organisation, and synergy design",
      "Systems, process, and data integration planning",
      "Culture, communication, and change management",
    ],
    benefits: [
      "Faster, disciplined integration with reduced disruption",
      "Synergy capture aligned to deal-model commitments",
      "Culture and talent retention through the transition",
    ],
    workflow: [
      "Validate the deal thesis and value-creation hypotheses",
      "Stand up the IMO, governance, and Day-1 plan",
      "Execute integration across people, process, and systems",
      "Track value realisation and embed the new operating state",
    ],
  },
  {
    title: "Operation",
    slug: "operation",
    summary:
      "Bring rigour, throughput, and cost discipline to the operations that run your business.",
    lead:
      "We work alongside operational leadership to redesign processes, lift productivity, and embed performance management — from front-line workflows to enterprise-wide operating cadence.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Operations team reviewing performance dashboards",
    capabilities: [
      "Operating model diagnostics and redesign",
      "Process re-engineering and lean operations",
      "Performance management, KPIs, and operating cadence",
      "Cost-to-serve and productivity uplift programmes",
      "Service-level design and supplier governance",
    ],
    benefits: [
      "Measurable cost, quality, and throughput improvement",
      "Clearer accountability and operating rhythm",
      "A platform built to scale with the business",
    ],
    workflow: [
      "Diagnose performance gaps and root causes",
      "Design the future-state process and operating model",
      "Pilot, refine, and roll out at scale",
      "Embed measurement, cadence, and continuous improvement",
    ],
  },
  {
    title: "Strategy",
    slug: "strategy",
    summary:
      "Clarify the choices that matter — and align leadership around a confident way forward.",
    lead:
      "We help leadership teams cut through complexity to make clear, defensible strategic choices — grounded in market reality, sharpened by data, and supported by an executable plan.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Strategy session with leadership team mapping choices",
    capabilities: [
      "Corporate, business-unit, and portfolio strategy",
      "Market, customer, and competitor intelligence",
      "Growth strategy, adjacencies, and new market entry",
      "Scenario planning and strategic optionality",
      "Strategy-to-execution roadmap and KPI architecture",
    ],
    benefits: [
      "Sharper choices grounded in evidence and market reality",
      "Stronger leadership alignment behind a single direction",
      "A credible path from strategy to measurable outcomes",
    ],
    workflow: [
      "Frame the strategic question and decision criteria",
      "Run market, customer, and capability diagnostics",
      "Develop, test, and select strategic options",
      "Translate the choice into an executable roadmap",
    ],
  },
  {
    title: "Transformation",
    slug: "transformation",
    summary:
      "Run complex, multi-year change programmes with the discipline they actually require.",
    lead:
      "We mobilise and steer enterprise-wide transformation — combining programme rigour, change leadership, and embedded delivery discipline so that ambition translates into durable outcomes.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Cross-functional team coordinating a transformation programme",
    capabilities: [
      "Transformation strategy and operating-state blueprint",
      "Programme governance, PMO / TMO design",
      "Milestone, dependency, and critical-path management",
      "Change management, communications, and adoption",
      "Benefits tracking and value-realisation governance",
    ],
    benefits: [
      "Predictable delivery against committed outcomes",
      "Reduced cost and schedule slippage",
      "Sustained adoption — change that actually lands",
    ],
    workflow: [
      "Establish the blueprint, governance, and success metrics",
      "Mobilise teams, tooling, and reporting cadence",
      "Drive delivery through disciplined milestone tracking",
      "Close out, transition, and embed organisational learning",
    ],
  },
  {
    title: "GCC Setup",
    slug: "gcc-setup",
    summary:
      "Stand up Global Capability Centers that scale strategic capability at competitive economics.",
    lead:
      "We help organisations design, build, and scale Global Capability Centers — from location strategy and entity setup through operating model, talent, and long-term value migration.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Global Capability Center leadership team in a planning session",
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
    title: "Sustainability",
    slug: "sustainability",
    summary:
      "Move from ESG ambition to credible, measurable, audit-ready sustainability performance.",
    lead:
      "We help organisations translate sustainability commitments into operating reality — embedding ESG into strategy, operations, reporting, and culture, with rigour your board, regulators, and investors can trust.",
    image:
      "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Sustainability strategy session in front of a forested landscape",
    capabilities: [
      "ESG strategy, materiality, and target setting",
      "Decarbonisation roadmap and net-zero pathway",
      "Sustainable operations, supply chain, and circularity",
      "ESG reporting, assurance, and disclosure readiness",
      "Governance, culture, and capability building",
    ],
    benefits: [
      "Credible, measurable progress against ESG commitments",
      "Reduced regulatory, reputational, and transition risk",
      "Sustainability as a source of growth and resilience",
    ],
    workflow: [
      "Assess materiality, baseline, and stakeholder expectations",
      "Design the ambition, targets, and pathway",
      "Embed into operations, supply chain, and governance",
      "Report, assure, and continuously improve",
    ],
  },
  {
    title: "People & Organization",
    slug: "people-and-organization",
    summary:
      "Design the organisation, leadership, and culture your strategy actually needs to succeed.",
    lead:
      "We help leadership teams build the organisation that the strategy requires — aligning structure, roles, leadership, talent, and culture so the right people are doing the right work, the right way.",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Diverse leadership team collaborating around a table",
    capabilities: [
      "Organisation design and operating-model alignment",
      "Workforce planning and capability mapping",
      "Leadership development and succession design",
      "Job architecture, levelling, and reward strategy",
      "Culture, engagement, and change leadership",
    ],
    benefits: [
      "The right capability in the right roles at the right time",
      "A stronger leadership pipeline and lower succession risk",
      "A culture that attracts, retains, and energises talent",
    ],
    workflow: [
      "Diagnose current organisation, capability, and culture",
      "Design the future-state structure, roles, and leadership model",
      "Activate hiring, development, and reward programmes",
      "Measure capability and culture uplift — refine continuously",
    ],
  },
];
