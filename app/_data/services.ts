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
      { label: "Job architecture", desc: "Role clarity, grade frameworks, and career pathways aligned to your strategy." },
      { label: "Talent evaluation & development", desc: "Assess capability gaps and build the pathways that retain your best people." },
      { label: "Talent attraction & acquisition", desc: "Employer brand, sourcing strategy, and a hiring process designed to move fast." },
      { label: "Leadership Fellowship", desc: "A structured cohort programme that accelerates the next layer of leaders." },
      { label: "Mini-CxO programme", desc: "A high-potential programme giving emerging leaders genuine C-suite decision exposure." },
      { label: "Employer Value Proposition", desc: "Define and activate what makes your organisation worth joining — and staying with." },
    ],
    bot: {
      build:
        "We work alongside your leadership team to map where you are and design the structure your strategy needs — roles, grades, performance measures and all.",
      operate:
        "We run the new design with your managers, coaching them through the change so the org feels lived-in by the time we step back.",
      transfer:
        "You own a working organisation with the playbooks, governance and people in place to keep developing it after we leave.",
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
      { label: "Change management & governance", desc: "Change management, communication cadence, and the governance that keeps transformation on track." },
      {
        label: "Performance control tower",
        desc: "A single view across goals, policy, and operational performance — for leadership to act on, not just admire.",
        children: [
          { label: "OKRs & goals", desc: "Cascading objectives from board to team with measurable key results." },
          { label: "Policy deployment", desc: "Strategy connected to operational action, one cascade at a time." },
          { label: "Performance reporting", desc: "Dashboards that surface the signals leadership needs to act on." },
        ],
      },
      { label: "Innovation", desc: "A structured methodology that produces commercial outcomes — not hackathons." },
      {
        label: "Continuous improvement",
        desc: "CI embedded in operations, not bolted on.",
        children: [
          { label: "Problem classification", desc: "Triage issues by impact and root cause." },
          { label: "Agile delivery", desc: "Sprint-based improvement cycles for operational teams." },
          { label: "Innovation hub", desc: "A safe space for testing improvements at speed." },
          { label: "Automation strategy", desc: "Identify, prioritise, and govern automation across the enterprise." },
        ],
      },
    ],
    bot: {
      build:
        "We design the Centre of Excellence around your business — its remit, its team, the dashboards and cadences leadership will actually use.",
      operate:
        "We run the cadence while your team learns it in flight. Reviews happen, decisions get made, the rhythm becomes routine.",
      transfer:
        "Your internal lead takes ownership of a working CoE. We stay close through the first quarter, then move to a lightweight advisory role.",
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
      { label: "100-day playbook", desc: "Day 1 readiness through to synergy delivery — every decision, milestone, and owner named in advance." },
      { label: "Integration office", desc: "Governance, cadence, and escalation paths designed to keep the integration programme moving." },
      { label: "Synergy tracking", desc: "From target identification to verified delivery — accountability, not a spreadsheet." },
    ],
    bot: {
      build:
        "We stand up the integration office and define the 100-day plan — every workstream, every milestone, every owner, named and aligned.",
      operate:
        "We run the integration cadence with your team — keeping decisions moving, surfacing risks early, and protecting the deal's value.",
      transfer:
        "Your integration lead takes the chair with the full governance, scorecard and steering rhythm running. We stay close on synergy delivery.",
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
      { label: "Operating model design", desc: "The structure, governance, service catalogue, and performance commitments your centre will run on." },
      { label: "Build-Operate-Transfer lifecycle", desc: "End-to-end GCC setup, from feasibility through to the moment you take the keys." },
      { label: "Hiring & onboarding at scale", desc: "High-volume recruitment calibrated to the local talent market and the work you actually need done." },
      { label: "Regulated-industry centres", desc: "Compliance-first design for pharma, financial services, and utilities." },
    ],
    bot: {
      build:
        "We design the centre — its mandate, structure, hiring plan, service catalogue — and stand it up alongside your team.",
      operate:
        "We run live operations in parallel with HQ, working through ramp-up issues until the centre is delivering steady-state quality.",
      transfer:
        "Local leadership takes full ownership. We hand over a running centre with the governance, documentation, and people to keep it that way.",
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
      { label: "Sourcing & process design", desc: "Employer brand, channel mix, screening, and candidate experience — engineered for the talent you actually need." },
      { label: "Managed recruitment operations", desc: "We run hiring end-to-end until your team is ready to take it on." },
      { label: "Capability transfer", desc: "We train your team, hand over the tooling and playbooks, and step back." },
    ],
    bot: {
      build:
        "We design your hiring engine — the brand, the channels, the screening — and set the targets your business actually needs to hit.",
      operate:
        "We run hiring end-to-end while your team learns the playbook, with weekly visibility on pipeline, quality and speed.",
      transfer:
        "Your internal recruitment lead takes the engine over with everything in place — process, tools, training, and clear performance targets.",
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
      { label: "Executive coaching", desc: "1:1 and team coaching for C-suite leaders navigating transformation, crisis, or growth." },
      { label: "Board advisory", desc: "An independent voice for boards overseeing M&A, restructuring, or strategic inflection points." },
      { label: "Leadership alignment", desc: "Facilitated sessions that move leadership teams from debate to decision to action." },
    ],
    bot: {
      build:
        "We listen first — to you, your team, your board — and shape a coaching plan around the decisions you're actually facing.",
      operate:
        "We work alongside you through the hard calls. The cadence becomes part of how leadership moves, not an extra meeting on the calendar.",
      transfer:
        "Your team is self-sufficient on the routine decisions. We stay available for the board moments and the inflection points that matter.",
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
