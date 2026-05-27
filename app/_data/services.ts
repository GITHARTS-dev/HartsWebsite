export type ServiceColor = "green" | "blue" | "orange" | "red";

export type ServiceSubChild = {
  label: string;
  desc: string;
};

export type ServiceSub = {
  label: string;
  desc: string;
  children?: ServiceSubChild[];
};

export type Service = {
  slug: string;
  num: string;
  color: ServiceColor;
  title: string;
  /** Display-friendly title split for two-line hero headings (titleSoft + titleStrong). */
  titleSoft?: string;
  titleStrong?: string;
  line: string;
  voice: string;
  subs: ServiceSub[];
  /** Service-specific BOT prose - three paragraphs, one per phase. */
  bot: { build: string; operate: string; transfer: string };
  ctx: { setup: string; develop: string; scaleup: string };
};

export const services: Service[] = [
  {
    slug: "od-and-implementation",
    num: "01",
    color: "green",
    title: "OD & Implementation",
    titleSoft: "OD &",
    titleStrong: "Implementation",
    line: "Operating structures, leadership capability, and workforce systems built to scale with you.",
    voice:
      "Organisation design without implementation is wallpaper. We do both - because a beautiful org chart that nobody follows is worse than no org chart at all.",
    subs: [
      { label: "Organization Structure & Role Design", desc: "Design reporting structures, accountability models, and role frameworks aligned to operational scale and business strategy." },
      { label: "Workforce Capability Development", desc: "Identify capability gaps and implement structured development programs that improve performance, retention, and leadership readiness." },
      { label: "Talent Acquisition Strategy", desc: "Build scalable hiring models, employer positioning, and recruitment operations designed for growth-stage and transformation environments." },
      { label: "Leadership Development Programs", desc: "Develop future-ready leaders through structured learning, operational exposure, and transformation-focused leadership initiatives." },
      { label: "Emerging Leadership Acceleration", desc: "Prepare high-potential talent for strategic decision-making and enterprise leadership responsibilities." },
      { label: "Employer Brand & Employee Value Proposition", desc: "Define and strengthen the employee experience to improve attraction, engagement, and long-term workforce retention." },
    ],
    bot: {
      build:
        "Define the future operating model, organizational structure, governance framework, and workforce requirements needed to support business objectives.",
      operate:
        "Work alongside leadership and operational teams to implement structures, embed processes, and stabilize workforce execution.",
      transfer:
        "Transition ownership with governance, capability maturity, and operational continuity fully embedded within the organization.",
    },
    ctx: {
      setup: "Design the organization from the ground up including structure, leadership roles, workforce planning, and operating governance.",
      develop: "Strengthen existing teams through capability assessment, leadership development, and performance alignment.",
      scaleup: "Replicate proven organizational models across new regions, business units, and operational environments.",
    },
  },
  {
    slug: "coe",
    num: "02",
    color: "blue",
    title: "Centre of Excellence",
    titleSoft: "Centre of",
    titleStrong: "Excellence",
    line: "Operational excellence functions that standardize delivery and accelerate execution across the enterprise.",
    voice:
      "Everyone sells process mining tools. We build the team that makes those tools actually work. The tool is 20% of the value. The people running it are the other 80%.",
    subs: [
      { label: "Transformation Governance & Change Management", desc: "Establish governance structures, communication frameworks, and transformation controls that keep strategic initiatives aligned and accountable." },
      {
        label: "Enterprise Performance Control Tower",
        desc: "Create centralized operational visibility across goals, execution metrics, governance, and business performance to support faster leadership decision-making.",
        // children: [
        //   { label: "OKRs & Strategic Alignment", desc: "Align enterprise objectives with measurable operational outcomes across teams and functions." },
        //   { label: "Policy deployment", desc: "Translate strategy into executable operational priorities with clear ownership and accountability." },
        //   { label: "Performance Reporting & Insights", desc: "Build dashboards and reporting structures that surface operational risks, progress, and performance trends." },
        // ],
      },
      { label: "Innovation & Transformation Programs", desc: "Establish structured innovation practices that convert improvement initiatives into measurable operational and commercial outcomes." },
      {
        label: "Continuous Improvement Operations",
        desc: "Embed continuous improvement into day-to-day operations through structured problem-solving, operational reviews, and scalable improvement systems.",
        // children: [
        //   { label: "Root Cause & Problem Classification", desc: "Prioritize operational issues based on impact, recurrence, and business risk." },
        //   { label: "Agile Improvement Delivery", desc: "Execute rapid operational improvement cycles focused on measurable business outcomes." },
        //   { label: "Innovation & Experimentation Hub", desc: "Create controlled environments for testing operational improvements and transformation initiatives." },
        //   { label: "Enterprise Automation Strategy", desc: "Identify, prioritize, and govern automation opportunities across business functions." },
        // ],
      },
    ],
    bot: {
      build:
        "Design the Centre of Excellence structure, governance model, reporting cadence, operational metrics, and leadership framework.",
      operate:
        "Run the CoE alongside your teams while embedding operational discipline, decision governance, and continuous improvement practices.",
      transfer:
        "Transition the CoE with governance maturity, operational ownership, and sustainable execution capability fully embedded.",
    },
    ctx: {
      setup: "Establish the CoE from the ground up, including governance, tooling, reporting structures, operational cadence, and leadership ownership.",
      develop: "Strengthen existing CoEs through operational maturity, performance governance, continuous improvement, and execution alignment.",
      scaleup: "Replicate proven CoE models across business units, geographies, and enterprise functions with consistent governance standards.",
    },
  },
  {
    slug: "ma-and-pmi",
    num: "03",
    color: "orange",
    title: "Post M&A Integration",
    titleSoft: "Post M&A",
    titleStrong: "Integration",
    line: "Stabilize operations, integrate teams, and accelerate synergy realization through mergers and acquisitions.",
    voice:
      "Most consultants hand you a 200-slide integration plan and leave. We stay. We run the first 100 days because that's when deals are won or lost.",
    subs: [
      { label: "100-Day Integration Program", desc: "Build and execute a structured post-merger integration roadmap covering governance, operational priorities, leadership alignment, and synergy milestones." },
      { label: "Integration Management Office", desc: "Establish the governance structure, reporting cadence, escalation framework, and execution controls required to manage complex integration programs." },
      { label: "Synergy Planning & Value Tracking", desc: "Identify, monitor, and validate synergy opportunities across operations, workforce, processes, and enterprise functions with measurable accountability." },
    ],
    bot: {
      build:
        "Establish the integration office, define governance structures, align leadership responsibilities, and develop the post-merger execution roadmap.",
      operate:
        "Run the integration program alongside leadership teams while managing execution cadence, operational risks, dependency tracking, and synergy delivery.",
      transfer:
        "Transition integration governance, reporting structures, and operational ownership into the client organization with long-term sustainability embedded.",
    },
    ctx: {
      setup: "Support first-time acquisitions with integration governance, leadership alignment, operational planning, and structured 100-day execution.",
      develop: "Strengthen internal integration capabilities through repeatable playbooks, governance maturity, and operational integration discipline.",
      scaleup: "Manage multi-entity integration programs across regions and business units with unified governance and centralized execution control.",
    },
  },
  {
    slug: "gcc-and-shared-services",
    num: "04",
    color: "red",
    title: "GCC & Shared Services",
    titleSoft: "GCC &",
    titleStrong: "Shared Services",
    line: "Establish, operationalize, and scale Global Capability Centers with embedded governance and execution control.",
    voice:
      "I spent 14 years building and running Metro's global solution centre. This isn't theory - it's muscle memory.",
    subs: [
      { label: "GCC Operating Model & Governance Design", desc: "Define the organizational structure, governance framework, service catalogue, delivery model, and performance standards required to run a scalable GCC operation." },
      { label: "Build–Operate–Transfer GCC Execution", desc: "Deliver end-to-end GCC setup and operationalization — from feasibility and transition planning through operational stabilization and capability transfer." },
      { label: "Workforce Ramp-Up & Operational Readiness", desc: "Build scalable recruitment, onboarding, workforce planning, and operational enablement programs aligned to delivery demand and business priorities." },
      { label: "Regulated & Enterprise-Grade Delivery Environments", desc: "Establish compliance-ready GCC operations for regulated industries including healthcare, financial services, manufacturing, and utilities." },
    ],
    bot: {
      build:
        "Design the GCC structure, operating model, governance framework, workforce plan, and transition roadmap required for operational launch.",
      operate:
        "Run the GCC alongside enterprise stakeholders while stabilizing operations, embedding governance, and achieving delivery maturity.",
      transfer:
        "Transition operational ownership, leadership capability, governance structures, and delivery accountability into the client organization.",
    },
    ctx: {
      setup: "Support greenfield GCC establishment from location strategy and workforce planning through operational launch and early-stage stabilization.",
      develop: "Strengthen existing GCC operations through governance maturity, process optimization, delivery stabilization, and workforce capability development.",
      scaleup: "Expand GCC operations across functions, business units, and geographies while maintaining governance consistency and operational quality.",
    },
  },
  {
    slug: "recruitment-as-a-service",
    num: "05",
    color: "green",
    title: "Recruitment as a Service",
    titleSoft: "Recruitment",
    titleStrong: "as a Service",
    line: "Scalable talent acquisition and workforce ramp-up programs built for rapid growth.",
    voice:
      "Recruitment isn't an HR function. It's a strategic capability. We build it like one.",
    subs: [
      { label: "Talent Acquisition Strategy & Hiring Operations", desc: "Design scalable hiring processes, sourcing strategies, employer positioning, and recruitment operations aligned to workforce growth objectives." },
      { label: "Managed Recruitment Delivery", desc: "Run end-to-end recruitment operations including sourcing, screening, pipeline management, hiring governance, and workforce reporting." },
      { label: "Workforce Ramp-Up & Deployment", desc: "Build rapid hiring and onboarding programs that support operational launch, GCC expansion, and large-scale business growth initiatives." },
      { label: "Recruitment Process Transformation", desc: "Improve hiring speed, candidate quality, operational visibility, and recruitment governance through structured process redesign."},
      { label: "Talent Acquisition Capability Transfer", desc: "Transition recruitment operations, hiring playbooks, reporting structures, and operational ownership into internal HR and talent teams."},
    ],
    bot: {
      build:
        "Design the talent acquisition operating model, sourcing strategy, hiring governance, employer positioning, and recruitment workflows.",
      operate:
        "Run recruitment operations alongside business leaders while managing hiring delivery, workforce visibility, pipeline quality, and operational performance.",
      transfer:
        "Transition recruitment ownership, hiring systems, governance frameworks, and operational capability into the internal talent acquisition function.",
    },
    ctx: {
      setup: "Establish the talent acquisition function from the ground up, including hiring processes, sourcing operations, governance, and workforce planning.",
      develop: "Improve recruitment performance through process redesign, hiring governance, capability development, and operational optimization.",
      scaleup: "Support rapid workforce expansion through scalable recruitment operations, hiring acceleration, and structured capability transfer.",
    },
  },
  {
    slug: "executive-coaching",
    num: "06",
    color: "blue",
    title: "Executive Coaching & Board Advisory",
    titleSoft: "Executive Coaching &",
    titleStrong: "Board Advisory",
    line: "Leadership advisory through strategic decision-making, alignment, and high-impact transformation.",
    voice:
      "Transformation is lonely at the top. We've sat in that chair. We know what it feels like when the board wants answers and the organisation isn't moving.",
    subs: [
      { label: "Executive Leadership Advisory", desc: "Support senior leaders through organizational change, operational scaling, strategic uncertainty, and high-stakes decision environments." },
      { label: "Board & Strategic Governance Advisory", desc: "Provide independent advisory support for boards and executive teams navigating mergers, restructuring, operational transformation, and enterprise risk." },
      { label: "Leadership Alignment & Decision Facilitation", desc: "Align leadership teams around priorities, governance cadence, operational accountability, and enterprise execution decisions." },
      { label: "Transformation Leadership Support", desc: "Help executives lead large-scale organizational change through structured advisory, communication alignment, and execution governance."},
      { label: "Executive Capability & Succession Readiness", desc: "Develop leadership capability, succession preparedness, and decision maturity for growing organizations and scaling enterprises."}
    ],
    bot: {
      build:
        "Assess leadership dynamics, governance challenges, strategic priorities, and organizational risks to define the advisory framework.",
      operate:
        "Work alongside leadership teams through decision-making cycles, operational pressure points, and enterprise transformation milestones.",
      transfer:
        "Strengthen internal leadership rhythm, governance maturity, and executive decision capability for long-term organizational continuity.",
    },
    ctx: {
      setup: "Support newly formed leadership teams through strategic alignment, governance establishment, and operational decision structure.",
      develop: "Resolve leadership friction, improve decision cadence, and strengthen executive accountability during organizational growth.",
      scaleup: "Help scaling organizations expand leadership capability, preserve operational alignment, and maintain governance discipline across growth phases.",
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
