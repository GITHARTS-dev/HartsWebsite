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
  /** Service-specific BOT prose — three paragraphs, one per phase. */
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
    line: "Design the organisation your strategy needs — then build it.",
    voice:
      "Organisation design without implementation is wallpaper. We do both — because a beautiful org chart that nobody follows is worse than no org chart at all.",
    subs: [
      { label: "Job architecture programme", desc: "Role clarity, grade frameworks, and career pathways aligned to strategy." },
      { label: "Talent evaluation & development", desc: "Assess capability gaps. Build development pathways that retain your best." },
      { label: "Talent attraction & acquisition", desc: "Employer brand, sourcing strategy, and a hiring process built to move fast." },
      { label: "Fellowship", desc: "Structured leadership cohorts that accelerate capability across the org." },
      { label: "Mini-CXO", desc: "A high-potential programme giving emerging leaders C-suite decision exposure." },
      { label: "EVP", desc: "Define and activate what makes your organisation worth joining — and staying." },
    ],
    bot: {
      build:
        "Scope the OD engagement, map current state, transfer knowledge with the leadership team, set OKRs for the new design, and build the SLAs for every delivery milestone.",
      operate:
        "Stabilise the new structure through transition. Shadow role changes, coach managers through the shift, and execute against the delivery SLAs.",
      transfer:
        "Hand ownership to HR and the COO. Governance and runbooks transferred. Hypercare on adoption metrics. CI advisory retainer for ongoing tuning.",
    },
    ctx: {
      setup: "Design the entire org from zero — roles, grades, reporting lines, EVP — before the first hire.",
      develop: "Audit the current structure, close skill gaps, and embed performance management that sticks.",
      scaleup: "Replicate proven org models across new geographies and entities without losing culture.",
    },
  },
  {
    slug: "coe",
    num: "02",
    color: "blue",
    title: "Centre of Excellence",
    titleSoft: "Centre of",
    titleStrong: "Excellence",
    line: "The engine room for continuous improvement — not a slide deck about it.",
    voice:
      "Everyone sells process mining tools. We build the team that makes those tools actually work. The tool is 20% of the value. The people running it are the other 80%.",
    subs: [
      { label: "OCM + comms + governance", desc: "Change management, communication cadence, and governance that keeps transformation on track." },
      {
        label: "Control tower (business intelligence)",
        desc: "Central visibility across OKRs, policy deployment, and organisational performance.",
        children: [
          { label: "OKR + goals", desc: "Cascading objectives from board to team with measurable key results." },
          { label: "Policy deployment", desc: "Hoshin Kanri-style strategy connecting corporate intent to operational action." },
          { label: "Org performance reporting", desc: "Dashboards that surface the signals leadership needs to act on." },
        ],
      },
      { label: "Innovation", desc: "Structured methodology producing commercial outcomes — not hackathons." },
      {
        label: "Continuous improvement",
        desc: "CI embedded in operations, not bolted on.",
        children: [
          { label: "Problem classification", desc: "Triage issues by impact and root cause." },
          { label: "Agile methodology", desc: "Sprint-based improvement cycles for operational teams." },
          { label: "Innovation hub", desc: "A space for testing improvements at speed." },
          { label: "Automation strategy", desc: "Identify, prioritise, and govern automation across the enterprise." },
        ],
      },
    ],
    bot: {
      build:
        "Scope the CoE mandate, transfer knowledge of the current process landscape, define OKRs for CI maturity, and build the SLA framework for CoE delivery.",
      operate:
        "Stabilise the CoE cadence. Shadow governance rituals. Execute SLAs across control-tower dashboards and CI sprints.",
      transfer:
        "Hand CoE ownership to the internal lead. Governance and playbooks transferred. Hypercare through the first independent quarter. Retainer for advisory.",
    },
    ctx: {
      setup: "Stand up the CoE from first principles — governance, tooling, team, cadence.",
      develop: "Mature an existing CoE — embed CI culture, sharpen the control tower, link OCM to execution.",
      scaleup: "Replicate the CoE model across business units and geographies with consistent governance.",
    },
  },
  {
    slug: "ma-and-pmi",
    num: "03",
    color: "orange",
    title: "M&A & Post-Merger Integration",
    titleSoft: "M&A &",
    titleStrong: "Post-Merger Integration",
    line: "The 100 days that make or break a deal.",
    voice:
      "Most consultants hand you a 200-slide integration plan and leave. We stay. We run the first 100 days because that's when deals are won or lost.",
    subs: [
      { label: "100-day playbook", desc: "Day 1 readiness through synergy realisation — every decision, milestone, and owner named." },
      { label: "Integration office design", desc: "Governance, cadence, and escalation paths for the PMI programme." },
      { label: "Synergy tracking & realisation", desc: "From target identification to verified delivery — not just a spreadsheet." },
    ],
    bot: {
      build:
        "Scope the integration, transfer knowledge from the deal team to the integration team, set OKRs for the 100-day milestones, and build SLAs for every PMI workstream.",
      operate:
        "Stabilise the integration office cadence. Shadow governance forums. Execute SLAs across all workstreams in parallel.",
      transfer:
        "Ownership to your integration lead. Governance handover complete. Steering committee self-sufficient. Hypercare on synergy realisation. Advisory retainer.",
    },
    ctx: {
      setup: "First acquisition — build the integration office and 100-day cadence from zero.",
      develop: "Serial acquirer — strengthen the playbook and embed repeatable PMI capability in-house.",
      scaleup: "Multi-entity roll-up — parallel integration tracks across geographies with unified governance.",
    },
  },
  {
    slug: "gcc-and-shared-services",
    num: "04",
    color: "red",
    title: "GCC & Shared Services",
    titleSoft: "GCC &",
    titleStrong: "Shared Services",
    line: "From first hire to full transfer — 39 countries of experience.",
    voice:
      "I spent 14 years building and running Metro's global solution centre. This isn't theory — it's muscle memory.",
    subs: [
      { label: "Operating model design", desc: "Structure, governance, SLA framework, and the service catalogue." },
      { label: "BOT lifecycle management", desc: "End-to-end GCC setup through to client ownership." },
      { label: "Recruitment & onboarding at scale", desc: "High-volume hiring calibrated to local talent markets." },
      { label: "Regulated-industry centre build", desc: "Compliance-first design for pharma, financial services, and utilities." },
    ],
    bot: {
      build:
        "Scope the GCC mandate, transfer knowledge from HQ to the new centre, set OKRs for operational readiness, and build the SLA framework for every service line.",
      operate:
        "Stabilise operations through ramp-up. Shadow every function. Run SLAs through parallel operations with HQ until the centre is steady.",
      transfer:
        "Formal ownership transfer to local leadership. Full governance and knowledge handover. Steering committee. Hypercare through the first independent quarter. CI retainer.",
    },
    ctx: {
      setup: "Greenfield — site selection through to the first 100 hires and the initial SLA go-live.",
      develop: "Existing centre — governance uplift, process maturity, and performance embedding.",
      scaleup: "Multi-site expansion — replicate the model, unify governance, maintain quality at scale.",
    },
  },
  {
    slug: "recruitment-as-a-service",
    num: "05",
    color: "green",
    title: "Recruitment as a Service",
    titleSoft: "Recruitment",
    titleStrong: "as a Service",
    line: "Your hiring engine — built, run, and transferred when you're ready.",
    voice:
      "Recruitment isn't an HR function. It's a strategic capability. We build it like one.",
    subs: [
      { label: "Sourcing strategy & process design", desc: "Employer brand, channel mix, screening, and candidate experience." },
      { label: "Managed recruitment operations", desc: "We run hiring end-to-end until your team is ready." },
      { label: "TA capability transfer", desc: "Train your team, hand over tooling and playbooks, step back." },
    ],
    bot: {
      build:
        "Scope the TA function, transfer knowledge on existing processes and employer brand, set hiring OKRs, and build SLAs for time-to-fill and quality.",
      operate:
        "Stabilise the hiring pipeline. Shadow your TA team. Execute against SLAs across every open role.",
      transfer:
        "Ownership to the internal TA lead. Playbooks and tooling transferred. Hypercare through the first solo quarter. Advisory retainer.",
    },
    ctx: {
      setup: "No TA function exists — we build and run it from day one.",
      develop: "TA underperforms — we redesign the process and upskill the team.",
      scaleup: "Rapid growth — we absorb volume spikes and transfer capability as you hire permanent TA.",
    },
  },
  {
    slug: "executive-coaching",
    num: "06",
    color: "blue",
    title: "Executive Coaching & Board Advisory",
    titleSoft: "Executive Coaching &",
    titleStrong: "Board Advisory",
    line: "For the leaders who have to make the call — and live with it.",
    voice:
      "Transformation is lonely at the top. We've sat in that chair. We know what it feels like when the board wants answers and the organisation isn't moving.",
    subs: [
      { label: "Executive coaching", desc: "1:1 and team coaching for the C-suite navigating transformation or crisis." },
      { label: "Board advisory", desc: "Independent perspective for boards overseeing M&A or restructuring." },
      { label: "Leadership alignment", desc: "Facilitated sessions moving teams from debate to decision to action." },
    ],
    bot: {
      build:
        "Scope the coaching mandate, transfer knowledge on leadership dynamics and organisational context, set OKRs for leadership effectiveness, and establish cadence.",
      operate:
        "Stabilise the coaching rhythm. Shadow leadership meetings. Execute against agreed development milestones.",
      transfer:
        "The leadership team becomes self-sufficient. Governance for ongoing development is embedded. Retainer for quarterly board advisory.",
    },
    ctx: {
      setup: "New leadership — align on strategy, operating rhythm, and decision-making cadence.",
      develop: "Stalled decisions — break through misalignment, rebuild trust, restore momentum.",
      scaleup: "Growing team — onboard new leaders, preserve culture, scale decisions without bottlenecks.",
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
