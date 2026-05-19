import Link from "next/link";
import {
  BadgeCheck,
  Package,
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
  /** 1-2 sentence pain-recognition opener - sets up why this work matters. */
  challenge: string;
  howWeHelp: string[];
  /** Concrete artifacts the engagement produces. */
  deliverables: string[];
  outcomes: string[];
};

const serviceBodyContent: Record<string, ServiceBodyContent> = {
  innovation: {
    challenge:
      "Many organizations invest in technology and innovation but struggle to turn ideas into measurable business outcomes. Digital initiatives become fragmented, technology investments lack strategic direction, and teams face challenges in scaling innovation across the business.",
    howWeHelp: [
      "We identify business challenges and growth opportunities where innovation and technology can create measurable value.",
      "We design innovation frameworks supported by digital tools, automation, data, and emerging technologies to improve efficiency and decision-making.",
      "We validate and scale solutions through pilot programs, business case evaluation, and implementation roadmaps.",
    ],
    deliverables: [
      "Innovation and technology strategy.",
      "Digital transformation roadmap.",
      "Innovation governance and operating model.",
      "Technology opportunity assessment.",
      "Scale and implementation roadmap.",
    ],
    outcomes: [
      "Faster adoption of technology-driven solutions.",
      "Improved operational efficiency and business performance.",
      "Better alignment between innovation and strategic goals.",
      "Scalable and sustainable innovation capability.",
    ],
  },
  "mergers-acquisitions": {
    challenge:
      "Many mergers create uncertainty after the deal closes. Without a clear integration approach, organizations face delays, operational disruption, unclear ownership, cultural misalignment, and unrealized synergies.",
    howWeHelp: [
      "We apply a structured Post-Merger playbook to define integration priorities, synergy targets, governance, and execution plans.",
      "We align people, processes, technology, and operating models to ensure smooth business continuity and integration.",
      "We drive disciplined execution through Day-1 readiness, milestone tracking, risk management, and value realization monitoring.",
    ],
    deliverables: [
      "Post-Merger playbook.",
      "Day-1 readiness framework.",
      "100-day integration roadmap.",
      "Synergy and value realization tracker.",
      "Governance and Integration Office structure.",
      "Technology and operating model integration plan.",
      "Risk and dependency management framework.",
    ],
    outcomes: [
      "Faster and smoother post-merger integration.",
      "Reduced operational and transition risks.",
      "Clear accountability and synergy realization.",
      "Better alignment across teams, systems, and culture.",
      "Sustainable long-term value creation from the merger.",
    ],
  },
  operation: {
    challenge:
      "Organizations often face operational inefficiencies, rising costs, inconsistent performance, and slow execution. These challenges are rarely caused by a single issue and usually stem from disconnected processes, unclear ownership, limited visibility, and outdated operating practices.",
    howWeHelp: [
      "We assess current operations to identify bottlenecks, inefficiencies, performance gaps, and root causes across people, process, technology, and governance.",
      "We redesign operating models, workflows, decision-making structures, and performance systems to improve speed, accountability, and service quality.",
      "We support implementation through operational roadmaps, performance tracking, capability building, and continuous improvement practices.",
    ],
    deliverables: [
      "Operational diagnostic and assessment.",
      "Process optimization roadmap.",
      "Operating model redesign.",
      "KPI and performance framework.",
      "Workflow and governance improvement plan.",
      "Implementation and change roadmap.",
    ],
    outcomes: [
      "Improved operational efficiency and productivity.",
      "Reduced cost, delays, and process inefficiencies.",
      "Clearer ownership and accountability.",
      "Better performance visibility and decision-making.",
      "Scalable operations that support growth.",
    ],
  },
  strategy: {
    challenge:
      "Organizations often have growth ambitions but face uncertainty around priorities, market positioning, investment decisions, and execution. Without clear strategic direction, resources become fragmented and business goals are difficult to achieve.",
    howWeHelp: [
      "We assess market conditions, business performance, customer needs, and competitive positioning to identify opportunities and strategic challenges.",
      "We work with leadership teams to define strategic priorities, growth pathways, and decision frameworks aligned with business objectives.",
      "We translate strategy into execution through actionable roadmaps, KPIs, governance models, and accountability structures.",
    ],
    deliverables: [
      "Strategic and business assessment.",
      "Market and competitive analysis.",
      "Growth and positioning strategy.",
      "Strategic priorities and decision framework.",
      "Execution roadmap and initiative portfolio.",
      "KPI and governance framework.",
    ],
    outcomes: [
      "Clear strategic direction and leadership alignment.",
      "Better prioritization of investments and growth initiatives.",
      "Stronger connection between strategy and execution.",
      "Improved decision-making and resource allocation.",
      "Measurable and sustainable business outcomes.",
    ],
  },
  transformation: {
    challenge:
      "Large programmes report green status while value silently leaks. Dependencies, adoption, and benefit definitions drift apart faster than steering forums can catch them - and the gap between announced ambition and realised value widens quarter by quarter.",
    howWeHelp: [
      "We turn broad transformation ambition into a managed delivery system - scope architecture, governance, milestones, dependencies, value tracking, adoption plans - so the programme behaves like a portfolio of decisions rather than a slogan.",
      "We stand up the Transformation Management Office and equip the senior steering forum with the cadence and information required to make trade-offs, remove blockers, and protect benefits as conditions change.",
      "We connect programme discipline with human adoption - applying ADKAR alongside design-led communication, role-based enablement, and leadership coaching - so process, technology, structure, and behaviour change in step.",
    ],
    deliverables: [
      "Transformation portfolio architecture, value model, and dependency map.",
      "TMO operating model with steering forum design and decision rights.",
      "Change architecture with role-based adoption plans and capability build.",
      "Benefits realisation framework - tracking promise to P&L impact.",
    ],
    outcomes: [
      "A portfolio leaders can govern, sequence, and fund with confidence.",
      "Lower delivery slippage through stronger dependency, risk, and benefits management.",
      "Benefits tracked from promise to realised value, not only reported as activity.",
      "Higher adoption because people understand what is changing and why.",
    ],
  },
  "gcc-setup": {
    challenge:
      "Global Capability Centers too often plateau at labour arbitrage instead of becoming the capability platform the enterprise originally intended. Setup choices made in the first year quietly determine the ceiling for the next decade.",
    howWeHelp: [
      "We stand up Global Capability Centers as enterprise capability platforms - shaping location strategy (informed by AI-driven labour-market analytics), business case, entity path (subsidiary, build-operate-transfer, partner), governance, service catalogue, leadership architecture, and migration roadmap.",
      "We move work in disciplined waves with knowledge-transfer protocols, service-level definitions, capacity planning, and quality controls - protecting business continuity while building durable capability inside the centre.",
      "We mature the GCC from launch through scale to Centre-of-Expertise positioning - migrating higher-value work, building specialist depth, integrating with enterprise governance, and measuring contribution beyond labour arbitrage.",
    ],
    deliverables: [
      "Location decision pack and total business case with risk envelope.",
      "Entity setup roadmap (subsidiary, build-operate-transfer, or partner).",
      "Service catalogue, capacity build plan, and migration wave schedule.",
      "Maturity roadmap from launch through scale to Centre of Expertise.",
    ],
    outcomes: [
      "A faster, lower-risk GCC setup with a clear business case and execution plan.",
      "A scalable operating model with the right governance, talent, and service ownership.",
      "Value beyond labour arbitrage through analytics, automation, innovation, and capability depth.",
      "A maturity roadmap that expands the GCC's role as a strategic capability platform.",
    ],
  },
  sustainability: {
    challenge:
      "Sustainability commitments outpace the operating systems, data, and governance required to deliver them. Disclosure deadlines arrive faster than the evidence base - and pledges made in annual reports start to look exposed.",
    howWeHelp: [
      "We move sustainability from aspiration to operating discipline - connecting ESG materiality, strategic intent, capital allocation, operations, supply chain, governance, and reporting into one enterprise agenda.",
      "We define material priorities, baselines, science-aligned targets, decarbonisation pathways across Scope 1, 2, and 3 emissions, and implementation initiatives with named owners and milestones - replacing pledges with plans.",
      "We build the evidence base, AI-supported data layer, and reporting rhythm required for credible disclosure aligned to TCFD, ISSB, GRI, SASB, and CSRD - and for the harder conversations with investors, regulators, customers, and the board.",
    ],
    deliverables: [
      "Materiality matrix and ESG priority map tied to enterprise risk.",
      "Decarbonisation pathway across Scope 1, 2, and 3 with milestones.",
      "Reporting pack aligned to TCFD, ISSB, GRI, SASB, and CSRD.",
      "Sustainability operating model with named accountabilities and cadence.",
    ],
    outcomes: [
      "A credible sustainability roadmap tied to business value and regulatory expectation.",
      "Better ESG data quality, reporting readiness, and audit-defensible evidence.",
      "Decarbonisation and resource-efficiency initiatives with owners, milestones, and capital.",
      "Sustainability embedded into management routines, not treated as a parallel agenda.",
    ],
  },
  "people-and-organization": {
    challenge:
      "Most reorganisations announce structural changes without changing where decisions actually happen, who owns what work, or how leaders behave day-to-day. The new chart goes live; the operating reality lags by months or years.",
    howWeHelp: [
      "We design the organisation your strategy requires - structure, layers, spans of control, roles, decision rights, leadership model, workforce mix (informed by AI-led workforce analytics), talent architecture, and the cultural shifts that make the design real.",
      "We help leaders clarify what work must be done, where capability should sit, how teams should collaborate across boundaries, and which behaviours must change for the operating model to perform.",
      "We turn organisation design into implementation - role mapping, transition planning, leadership alignment, communication, capability building, performance management, and adoption tracking - so the new model lives beyond the launch announcement.",
    ],
    deliverables: [
      "Organisation design pack - structure, spans, roles, and decision rights.",
      "Job architecture, capability gap map, and workforce shift plan.",
      "Transition plan with communications, leadership alignment, and milestones.",
      "Adoption dashboard and post-launch performance review framework.",
    ],
    outcomes: [
      "An organisation structure matched to strategic priority and decision speed.",
      "Clearer roles, accountabilities, leadership expectations, and governance.",
      "A sharper view of capability gaps and the talent moves required to close them.",
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
          <Link className="solid-button large" href="/contact">
            Connect with HARTS
          </Link>
        }
      />

      <div className="service-back-wrap">
        <div className="industry-detail-shell">
          <Link className="service-back-link" href="/how-we-help">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M19 12H5M12 19l-7-7 7-7"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to How We Help
          </Link>
        </div>
      </div>

      {/* Challenge - pain match. Sets context before we describe our method.
          Eyebrow is user-centric ("the reality leaders face") rather than
          lecturing ("why this matters now"), because a leader landing on the
          page already cares about the topic - they need recognition. */}
      <section className="service-challenge-section">
        <div className="industry-detail-shell">
          <p className="eyebrow">The reality leaders face</p>
          <p className="service-challenge-statement">{body.challenge}</p>
        </div>
      </section>

      <section className="industry-detail-section industry-overview-section">
        <div className="industry-detail-shell">
          <div className="industry-detail-heading">
            <p className="eyebrow">How We Help</p>
            <h2>{service.title} with operating discipline</h2>
          </div>
          <div className="service-body-grid service-body-grid--narrative service-body-grid--circles">
            {body.howWeHelp.map((item) => (
              <article className="service-body-panel" key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What You Walk Away With — deliverables (artifacts) + outcomes (results) side by side. */}
      <section className="industry-detail-section service-walkaway-section">
        <div className="industry-detail-shell">
          <div className="industry-detail-heading">
            <p className="eyebrow">What you walk away with</p>
            <h2>Concrete deliverables, measurable outcomes.</h2>
          </div>
          <div className="service-walkaway-grid">
            <div className="service-walkaway-card service-walkaway-card--deliverables">
              <div className="service-walkaway-icon" aria-hidden="true">
                <Package size={28} strokeWidth={1.6} />
              </div>
              <p className="service-walkaway-label">Deliverables</p>
              <h3>The artifacts your team takes home.</h3>
              <ul className="service-value-list">
                {body.deliverables.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
            </div>
            <div className="service-walkaway-card service-walkaway-card--outcomes">
              <div className="service-walkaway-icon" aria-hidden="true">
                <BadgeCheck size={28} strokeWidth={1.6} />
              </div>
              <p className="service-walkaway-label">Outcomes</p>
              <h3>The change you can measure.</h3>
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
