import Link from "next/link";
import {
  BadgeCheck,
  Bot,
  CircleDot,
  Compass,
  Layers3,
  LineChart,
  Rocket,
} from "lucide-react";

import { PageHero } from "../../_shared/layout/page-hero";
import type { ServiceOffering } from "../../_data/services-content";

type ServiceScene =
  | "service-innovation"
  | "service-mergers-acquisitions"
  | "service-operation"
  | "service-strategy"
  | "service-transformation"
  | "service-gcc-setup"
  | "service-sustainability"
  | "service-people-and-organization";

const sceneBySlug: Record<string, ServiceScene> = {
  innovation: "service-innovation",
  "mergers-acquisitions": "service-mergers-acquisitions",
  operation: "service-operation",
  strategy: "service-strategy",
  transformation: "service-transformation",
  "gcc-setup": "service-gcc-setup",
  sustainability: "service-sustainability",
  "people-and-organization": "service-people-and-organization",
};

type ServiceBodyContent = {
  howWeHelp: string[];
  aiRole: string[];
  outcomes: string[];
};

const serviceBodyContent: Record<string, ServiceBodyContent> = {
  innovation: {
    howWeHelp: [
      "We convert innovation from scattered ideation into a governed growth system: clear thesis, funded portfolio, stage gates, decision rights, and executive sponsorship.",
      "We help teams test new products, ventures, channels, and business models with disciplined experiments that protect the core while creating credible options for future growth.",
      "We design the operating model around speed and accountability: who owns the pipeline, how capital is released, when ideas are stopped, and how validated concepts scale back into the enterprise.",
    ],
    aiRole: [
      "AI scans market signals, patents, customer behaviour, and competitor moves to surface opportunity spaces faster than traditional research cycles.",
      "Generative AI accelerates concept development, prototype narratives, customer testing scripts, and business-case scenarios so teams can learn before they over-invest.",
      "AI-enabled portfolio analytics helps leadership compare bets by risk, strategic fit, funding need, and scale potential.",
    ],
    outcomes: [
      "A fundable innovation portfolio with clear owners, gates, and investment logic.",
      "Shorter validation cycles and cleaner kill, pivot, or scale decisions.",
      "New growth options that are linked to strategy, not side projects.",
      "A repeatable innovation rhythm your teams can run after the engagement.",
    ],
  },
  "mergers-acquisitions": {
    howWeHelp: [
      "We support the full deal arc: value thesis, diligence, Day-1 readiness, integration design, synergy delivery, and post-close operating discipline.",
      "We translate deal ambition into a practical integration agenda across customers, products, people, processes, systems, governance, and culture.",
      "We build the Integration Management Office with the cadence, decision forums, risk controls, and value-tracking discipline needed to protect the deal model.",
    ],
    aiRole: [
      "AI accelerates diligence by synthesising market data, customer sentiment, operating benchmarks, contracts, and management information into decision-ready insight.",
      "AI helps identify synergy pools, integration risks, dependency conflicts, and duplicated capabilities across functions and systems.",
      "AI-enabled integration dashboards give leaders earlier warning on value leakage, retention risk, milestone slippage, and adoption issues.",
    ],
    outcomes: [
      "A sharper deal thesis and value-creation plan before capital is committed.",
      "Day-1 readiness with fewer surprises for customers, employees, and operations.",
      "Synergy capture tied to named initiatives, owners, baselines, and milestones.",
      "A merged operating model that works beyond the announcement.",
    ],
  },
  operation: {
    howWeHelp: [
      "We diagnose operational performance from end to end, separating symptoms from root causes across process, organisation, technology, suppliers, and management cadence.",
      "We redesign workflows, KPIs, roles, service levels, governance, and cost-to-serve mechanics so performance improvement becomes part of daily management.",
      "We pilot practical changes, prove impact, and scale what works across sites, functions, regions, or business units.",
    ],
    aiRole: [
      "AI detects bottlenecks, exceptions, demand patterns, rework loops, and cost leakage across operational data sets.",
      "Predictive models improve capacity planning, service-level forecasting, inventory decisions, maintenance planning, and workforce deployment.",
      "AI copilots can support frontline teams with standard work guidance, faster issue triage, knowledge retrieval, and decision support.",
    ],
    outcomes: [
      "Measurable improvement in cost, throughput, quality, cycle time, and service reliability.",
      "Clear accountability for performance at leadership, management, and frontline levels.",
      "A practical operating cadence with the right metrics and escalation paths.",
      "Operational improvements that scale without depending on heroic effort.",
    ],
  },
  strategy: {
    howWeHelp: [
      "We help leadership teams make the few choices that matter: where to play, how to win, what to stop, and what capabilities must be built.",
      "We combine market reality, customer insight, competitor intelligence, economics, internal capability, and risk into options that can be debated and decided.",
      "We translate strategy into an execution architecture: initiatives, investment logic, milestones, KPIs, governance, and leadership alignment.",
    ],
    aiRole: [
      "AI expands strategic intelligence by scanning markets, customer signals, competitors, regulations, technologies, and weak signals at scale.",
      "AI supports scenario modelling, sensitivity analysis, demand forecasting, white-space identification, and portfolio trade-off analysis.",
      "AI helps leadership teams move faster from raw information to structured options, assumptions, risks, and decision points.",
    ],
    outcomes: [
      "A clear strategic direction backed by evidence and leadership conviction.",
      "Prioritised choices that focus capital, talent, and executive attention.",
      "A roadmap that connects ambition to initiatives, owners, metrics, and timing.",
      "Better strategic conversations because assumptions are visible and testable.",
    ],
  },
  transformation: {
    howWeHelp: [
      "We turn broad transformation ambition into a manageable delivery system with scope, governance, milestones, dependencies, value tracking, and adoption plans.",
      "We establish the Transformation Management Office and equip leaders with the cadence required to make decisions, remove blockers, and sustain momentum.",
      "We connect programme discipline with human adoption so process, technology, structure, and behaviour change together.",
    ],
    aiRole: [
      "AI helps identify transformation opportunities by analysing process data, cost pools, customer friction, workforce activity, and performance variance.",
      "AI-enabled programme controls flag dependency risks, milestone slippage, benefits leakage, adoption gaps, and change saturation earlier.",
      "Generative AI supports communications, training content, knowledge management, change impact analysis, and stakeholder-specific adoption support.",
    ],
    outcomes: [
      "A transformation portfolio leaders can govern, sequence, and fund with confidence.",
      "Reduced delivery slippage through stronger dependency and risk management.",
      "Benefits tracked from promise to realised value, not only reported as activity.",
      "Higher adoption because people understand what is changing and why.",
    ],
  },
  "gcc-setup": {
    howWeHelp: [
      "We design and stand up Global Capability Centers as strategic capability platforms, not just offshore cost structures.",
      "We shape the location strategy, business case, entity path, governance model, service catalogue, leadership structure, talent plan, and migration roadmap.",
      "We help the GCC mature from launch to scale by moving higher-value work, building capability depth, and establishing strong enterprise integration.",
    ],
    aiRole: [
      "AI supports location and talent analytics by comparing labour markets, skill depth, cost, attrition risk, ecosystem maturity, and regulatory considerations.",
      "AI accelerates service catalogue design, process documentation, knowledge transfer, workflow automation, and productivity benchmarking.",
      "AI-enabled operations help GCC leaders track capacity, quality, demand, skill gaps, productivity, and value migration across functions.",
    ],
    outcomes: [
      "A faster, lower-risk GCC setup with a clear business case and execution plan.",
      "A scalable operating model with the right governance, talent, and service ownership.",
      "Value beyond labour arbitrage through analytics, automation, innovation, and capability depth.",
      "A maturity roadmap that expands the GCC’s role over time.",
    ],
  },
  sustainability: {
    howWeHelp: [
      "We move sustainability from aspiration to operating discipline by connecting ESG ambition with strategy, capital allocation, operations, supply chain, reporting, and governance.",
      "We define material priorities, baselines, targets, decarbonisation pathways, implementation initiatives, and board-level accountability.",
      "We help teams build the evidence, controls, and reporting rhythm required for credible stakeholder, regulator, investor, and customer conversations.",
    ],
    aiRole: [
      "AI improves ESG data collection, anomaly detection, emissions estimation, supplier risk sensing, and sustainability performance monitoring.",
      "AI supports scenario modelling for decarbonisation pathways, transition risk, energy demand, supply chain exposure, and investment trade-offs.",
      "Generative AI can accelerate disclosure drafting, evidence mapping, policy analysis, and internal capability building while keeping expert review in place.",
    ],
    outcomes: [
      "A credible sustainability roadmap tied to business value and regulatory expectations.",
      "Better ESG data quality, reporting readiness, and audit confidence.",
      "Practical decarbonisation and resource-efficiency initiatives with accountable owners.",
      "Sustainability embedded into management routines rather than treated as a parallel agenda.",
    ],
  },
  "people-and-organization": {
    howWeHelp: [
      "We design the organisation your strategy requires: structure, roles, decision rights, leadership model, workforce plan, talent architecture, and culture shifts.",
      "We help leaders clarify what work must be done, where capability should sit, how teams should collaborate, and what behaviours must change.",
      "We turn organisation design into implementation: role mapping, transition planning, leadership alignment, communication, capability building, and adoption tracking.",
    ],
    aiRole: [
      "AI supports workforce analytics by identifying skill gaps, capacity pressure, span-of-control issues, attrition risk, collaboration patterns, and capability mismatches.",
      "AI helps model organisation scenarios, job architecture, talent supply, workforce demand, learning pathways, and succession risk.",
      "AI copilots can improve manager effectiveness through decision support, policy guidance, personalised learning, and employee listening synthesis.",
    ],
    outcomes: [
      "An organisation structure that matches strategic priorities and decision speed.",
      "Clearer roles, accountabilities, leadership expectations, and governance.",
      "A stronger view of capability gaps and the talent moves required to close them.",
      "Culture and adoption plans that make the new model real in daily work.",
    ],
  },
};

function ServiceTitle({ title }: { title: string }) {
  const words = title.split(" ");
  if (words.length === 1) {
    return {
      soft: title,
      strong: "consulting.",
    };
  }

  return {
    soft: words.slice(0, -1).join(" "),
    strong: `${words.at(-1)} consulting.`,
  };
}

export function ServiceOfferingDetail({
  service,
}: {
  service: ServiceOffering;
}) {
  const title = ServiceTitle({ title: service.title });
  const scene = sceneBySlug[service.slug] ?? "service-strategy";
  const body = serviceBodyContent[service.slug];

  return (
    <main className={`service-offering-detail service-industry-style service-industry-style--${service.slug}`}>
      <PageHero
        scene={scene}
        eyebrow="How We Help"
        titleSoft={title.soft}
        titleStrong={title.strong}
        subtitle={service.lead}
        watermark={service.title.toUpperCase()}
        actions={
          <>
            <Link className="solid-button large" href="/contact">
              Connect with HARTS
            </Link>
            <Link className="outline-button large" href="/how-we-help">
              Back to services
            </Link>
          </>
        }
      />

      <section className="industry-detail-section industry-overview-section">
        <div className="industry-detail-shell">
          <div className="industry-detail-heading">
            <p className="eyebrow">How We Help</p>
            <h2>{service.title} with operating discipline</h2>
          </div>
          <div className="service-body-grid service-body-grid--narrative">
            {body.howWeHelp.map((item) => (
              <article className="service-body-panel" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-detail-section industry-challenges-section">
        <div className="industry-detail-shell">
          <div className="industry-detail-heading">
            <p className="eyebrow">AI Enablement</p>
            <h2>How AI plays in {service.title}</h2>
            <p>
              We use AI where it sharpens judgement, accelerates analysis, and
              strengthens execution. The goal is better leadership decisions,
              not technology theatre.
            </p>
          </div>
          <div className="industry-detail-card-grid industry-detail-card-grid--challenge">
            {body.aiRole.map((aiUse, index) => {
              const icons = [Bot, Compass, Layers3, Rocket, LineChart, CircleDot];
              const Icon = icons[index % icons.length];
              return (
                <article className="industry-detail-card industry-detail-card--challenge" key={aiUse}>
                  <span className="industry-card-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.7} />
                  </span>
                  <h3>{`AI lever ${index + 1}`}</h3>
                  <p>{aiUse}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="industry-detail-section industry-help-section">
        <div className="industry-detail-shell">
          <div className="industry-help-card service-value-card">
            <div className="industry-help-icon" aria-hidden="true">
              <BadgeCheck size={32} strokeWidth={1.6} />
            </div>
            <div className="industry-help-copy">
              <p className="eyebrow">Real Outcomes</p>
              <h2>What we help you deliver.</h2>
              <ul className="service-value-list">
                {body.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="industry-detail-cta" aria-labelledby="service-cta-heading">
        <div className="industry-detail-cta-inner">
          <p className="eyebrow">Work with HARTS</p>
          <h2 id="service-cta-heading">Ready to bring clarity to {service.title}?</h2>
          <p>
            Connect with HARTS to shape the right mandate, operating model, and
            execution rhythm for the work ahead.
          </p>
          <div className="industry-detail-actions">
            <Link className="solid-button large" href="/contact">
              Connect with HARTS
            </Link>
            <Link className="outline-button large" href="/how-we-help">
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
