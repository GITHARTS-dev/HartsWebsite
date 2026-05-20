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
      "Use technology and innovation to solve business challenges, improve operations, and create scalable growth opportunities.",
    lead:
      "We help organizations use technology and innovation to solve business challenges, improve operations, and create scalable growth opportunities.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Innovation team collaborating on new product concepts",
    capabilities: [
      "Innovation and technology strategy",
      "Digital transformation roadmap",
      "Innovation governance and operating model",
      "Technology opportunity assessment",
      "Scale and implementation roadmap",
    ],
    benefits: [
      "Faster adoption of technology-driven solutions",
      "Improved operational efficiency and business performance",
      "Better alignment between innovation and strategic goals",
      "Scalable and sustainable innovation capability",
    ],
    workflow: [
      "Identify business challenges where innovation can create value",
      "Design frameworks supported by digital tools, automation, and data",
      "Validate solutions through pilot programs and business cases",
      "Scale implementation through practical roadmaps",
    ],
  },
  {
    title: "M&A / Post-Merger Integration",
    slug: "mergers-acquisitions",
    summary:
      "Realize merger value through a structured Post-Merger playbook from Day-1 through long-term value realization.",
    lead:
      "We help organizations realize merger value through a structured Post-Merger playbook that guides strategy, operations, people, and technology integration from Day-1 through long-term value realization.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Executive team reviewing a post-merger integration plan",
    capabilities: [
      "Post-Merger playbook",
      "Day-1 readiness framework",
      "100-day integration roadmap",
      "Synergy and value realization tracker",
      "Governance and Integration Office structure",
    ],
    benefits: [
      "Faster and smoother post-merger integration",
      "Reduced operational and transition risks",
      "Sustainable long-term value creation from the merger",
    ],
    workflow: [
      "Define integration priorities, synergy targets, and governance",
      "Align people, processes, technology, and operating models",
      "Drive Day-1 readiness, milestone tracking, and risk management",
      "Monitor value realization through long-term integration",
    ],
  },
  {
    title: "Operation",
    slug: "operation",
    summary:
      "Improve operational performance by reducing cost, improving efficiency, strengthening execution, and supporting growth.",
    lead:
      "We help organizations improve operational performance by optimizing processes, strengthening execution, and building scalable operating models that reduce cost, improve efficiency, and support growth.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Operations team reviewing performance dashboards",
    capabilities: [
      "Operational diagnostic and assessment",
      "Process optimization roadmap",
      "Operating model redesign",
      "KPI and performance framework",
      "Workflow and governance improvement plan",
    ],
    benefits: [
      "Improved operational efficiency and productivity",
      "Reduced cost, delays, and process inefficiencies",
      "Scalable operations that support growth",
    ],
    workflow: [
      "Assess operations across people, process, technology, and governance",
      "Redesign workflows, decision structures, and performance systems",
      "Build operational roadmaps and performance tracking",
      "Embed capability building and continuous improvement practices",
    ],
  },
  {
    title: "Strategy",
    slug: "strategy",
    summary:
      "Define strategic direction, prioritize growth opportunities, and turn business goals into executable plans.",
    lead:
      "We help organizations define strategic direction, prioritize growth opportunities, and turn business goals into executable plans with measurable outcomes.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1500&q=82",
    imageAlt: "Strategy session with leadership team mapping choices",
    capabilities: [
      "Strategic and business assessment",
      "Market and competitive analysis",
      "Growth and positioning strategy",
      "Strategic priorities and decision framework",
      "KPI and governance framework",
    ],
    benefits: [
      "Clear strategic direction and leadership alignment",
      "Better prioritization of investments and growth initiatives",
      "Measurable and sustainable business outcomes",
    ],
    workflow: [
      "Assess market conditions, performance, customers, and competition",
      "Define strategic priorities and growth pathways",
      "Translate strategy into roadmaps, KPIs, and governance",
      "Connect accountability structures to measurable outcomes",
    ],
  },
  {
    title: "Transformation",
    slug: "transformation",
    summary:
      "Run complex, multi-year change programmes with the discipline they actually require.",
    lead:
      "We mobilise and steer enterprise-wide transformation, combining programme rigour, change leadership, and embedded delivery discipline so ambition translates into durable outcomes.",
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
      "Sustained adoption: change that actually lands",
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
      "We help organisations design, build, and scale Global Capability Centers, working through location strategy, entity setup, operating model, talent, and long-term value migration.",
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
      "We help organisations translate sustainability commitments into operating reality. ESG becomes embedded in strategy, operations, reporting, and culture, with rigour your board, regulators, and investors can trust.",
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
      "We help leadership teams build the organisation that the strategy requires. Structure, roles, leadership, talent, and culture align so the right people are doing the right work, the right way.",
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
      "Measure capability and culture uplift, then refine continuously",
    ],
  },
];
