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
  bot: { build: string; operate: string; transfer: string; names?: [string, string, string] };
  ctx: { setup: string; develop: string; scaleup: string };
  /** SEO keywords targeted by this service's detail page. */
  keywords: string[];
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
      names: ["Assess & Align", "Design & Execute", "Embed & Sustain"],
      build:
        "We evaluate your organizational structure, operating model, and strategic objectives while aligning key stakeholders around the desired future state.",
      operate:
        "We develop practical solutions and implement them through structured change, governance, and execution plans.",
      transfer:
        "We build internal ownership, monitor adoption, and ensure improvements are sustained over the long term.",
    },
    ctx: {
      setup: "Design the organization from the ground up including structure, leadership roles, workforce planning, and operating governance.",
      develop: "Strengthen existing teams through capability assessment, leadership development, and performance alignment.",
      scaleup: "Replicate proven organizational models across new regions, business units, and operational environments.",
    },
    keywords: [
      "organisational design consulting",
      "operating model design",
      "OD and implementation",
      "workforce structure consulting",
      "leadership capability development",
      "talent acquisition strategy",
      "employer value proposition",
      "EVP design",
      "organisation transformation consultant",
    ],
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
      names: ["Assess & Define", "Design & Establish", "Operate & Optimize"],
      build:
        "We identify capability requirements, operating model needs, and business priorities.",
      operate:
        "We create the governance, processes, roles, and frameworks required for an effective CoE.",
      transfer:
        "We support implementation and continuously refine the CoE to maximize value and performance.",
    },
    ctx: {
      setup: "Establish the CoE from the ground up, including governance, tooling, reporting structures, operational cadence, and leadership ownership.",
      develop: "Strengthen existing CoEs through operational maturity, performance governance, continuous improvement, and execution alignment.",
      scaleup: "Replicate proven CoE models across business units, geographies, and enterprise functions with consistent governance standards.",
    },
    keywords: [
      "centre of excellence setup",
      "centre of excellence consulting",
      "CoE setup",
      "operational excellence consulting",
      "governance framework consulting",
      "enterprise performance management",
      "continuous improvement consulting",
      "process standardisation consulting",
    ],
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
      names: ["Assess & Prioritize", "Integrate & Align", "Realize & Optimize"],
      build:
        "We evaluate integration opportunities, risks, and critical business dependencies.",
      operate:
        "We execute integration plans across people, processes, governance, and culture.",
      transfer:
        "We monitor progress, capture synergies, and ensure long-term value realization.",
    },
    ctx: {
      setup: "Support first-time acquisitions with integration governance, leadership alignment, operational planning, and structured 100-day execution.",
      develop: "Strengthen internal integration capabilities through repeatable playbooks, governance maturity, and operational integration discipline.",
      scaleup: "Manage multi-entity integration programs across regions and business units with unified governance and centralized execution control.",
    },
    keywords: [
      "post merger integration consultant",
      "M&A integration India",
      "post merger integration services",
      "100 day integration plan",
      "integration management office",
      "IMO consulting",
      "synergy realisation consulting",
      "merger integration consultant",
      "acquisition integration playbook",
    ],
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
      "I spent 14 years building and running Metro's global solution centre. This isn't theory - it's knowledge forged in practice.",
    subs: [
      { label: "GCC Operating Model & Governance Design", desc: "Define the organizational structure, governance framework, service catalogue, delivery model, and performance standards required to run a scalable GCC operation." },
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
    keywords: [
      "GCC setup India",
      "global capability center consultant",
      "global capability centre setup",
      "captive center setup India",
      "shared services setup",
      "BOT GCC model",
      "offshore capability center consulting",
      "GCC build operate transfer",
      "GCC site selection India",
    ],
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
      names: ["Understand & Plan", "Source & Select", "Hire & Integrate"],
      build:
        "We align with your workforce strategy, hiring priorities, and talent requirements.",
      operate:
        "We identify, assess, and present high-quality candidates who match both role and culture.",
      transfer:
        "We support the hiring process through onboarding to ensure a seamless transition and faster productivity.",
    },
    ctx: {
      setup: "Establish the talent acquisition function from the ground up, including hiring processes, sourcing operations, governance, and workforce planning.",
      develop: "Improve recruitment performance through process redesign, hiring governance, capability development, and operational optimization.",
      scaleup: "Support rapid workforce expansion through scalable recruitment operations, hiring acceleration, and structured capability transfer.",
    },
    keywords: [
      "recruitment as a service",
      "RaaS provider India",
      "talent acquisition outsourcing",
      "workforce ramp up programme",
      "scalable hiring solutions",
      "recruitment process outsourcing",
      "RPO consulting India",
      "tech recruitment outsourcing",
    ],
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
      names: ["Assess & Understand", "Advise & Develop", "Enable & Accelerate"],
      build:
        "We identify leadership priorities, organizational challenges, and strategic objectives.",
      operate:
        "We provide tailored coaching, insights, and guidance to strengthen leadership effectiveness.",
      transfer:
        "We support sustained leadership impact, stronger decision-making, and business growth.",
    },
    ctx: {
      setup: "Support newly formed leadership teams through strategic alignment, governance establishment, and operational decision structure.",
      develop: "Resolve leadership friction, improve decision cadence, and strengthen executive accountability during organizational growth.",
      scaleup: "Help scaling organizations expand leadership capability, preserve operational alignment, and maintain governance discipline across growth phases.",
    },
    keywords: [
      "executive coaching India",
      "board advisory consulting",
      "C-suite coaching",
      "leadership coaching during transformation",
      "CEO coaching India",
      "board effectiveness consulting",
      "executive coaching for transformation",
      "leadership development coaching",
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
