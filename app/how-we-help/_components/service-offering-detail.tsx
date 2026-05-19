import Link from "next/link";
import {
  BadgeCheck,
  Bot,
  CircleDot,
  Compass,
  Layers3,
  LineChart,
  Package,
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
  /** 1-2 sentence pain-recognition opener — sets up why this work matters. */
  challenge: string;
  howWeHelp: string[];
  /** Empty array means AI is supporting (not central) — no dedicated section rendered. */
  aiRole: string[];
  /** Concrete artifacts the engagement produces. */
  deliverables: string[];
  outcomes: string[];
};

const serviceBodyContent: Record<string, ServiceBodyContent> = {
  innovation: {
    challenge:
      "Most enterprise innovation accumulates pilots, decks, and demos without producing portfolio-level decisions. Leadership ends up debating ideas instead of allocating capital — and growth options stay theoretical when they should be commercial.",
    howWeHelp: [
      "We translate innovation ambition into a governed Three-Horizons portfolio — protected core, scaled adjacencies, transformational bets — each with a thesis, capital envelope, and stage-gate decision rights.",
      "We install a validation engine — opportunity hypotheses, customer-discovery sprints, MVP scoping, kill / pivot / scale triggers — so concepts advance on evidence rather than enthusiasm.",
      "We design the innovation operating model that fits — central office, embedded teams, corporate venturing, or ecosystem partnerships — with funding mechanics, talent rotation, and rhythms that connect outputs back to the P&L.",
    ],
    aiRole: [
      "Trend-sensing platforms scan patents, scientific publications, funding rounds, hiring patterns, and competitor moves to surface emerging opportunity spaces months before they appear in conventional market research.",
      "Generative AI compresses concept development, persona modelling, narrative testing, and business-case scenario drafting — letting cross-functional teams iterate on ten hypotheses in the time previously needed for one.",
      "Portfolio analytics rank ventures by funding need, strategic fit, risk-adjusted value, capability dependencies, and time-to-scale — giving leadership a transparent view of where corporate innovation capital is actually placed.",
    ],
    deliverables: [
      "Innovation thesis, horizon allocation, and capital envelope.",
      "Portfolio dashboard with stage-gate criteria and decision rights.",
      "Validation playbook covering discovery, MVP, pivot, and scale.",
      "Innovation operating model and governance cadence.",
    ],
    outcomes: [
      "A funded innovation portfolio with named owners, stage gates, and investment logic visible to leadership.",
      "Shorter discovery-to-decision cycles and cleaner kill, pivot, or scale calls.",
      "New growth options that connect to strategy and survive the next budget review.",
      "An innovation cadence — pipeline reviews, capital rounds, knowledge transfer — your teams sustain after we leave.",
    ],
  },
  "mergers-acquisitions": {
    challenge:
      "A majority of deals deliver less than their announced synergy value. The gap rarely sits in the thesis — it shows up in the months between Day-1 and steady-state, where operating decisions either protect the deal model or quietly erode it.",
    howWeHelp: [
      "We engage across the full deal arc — value thesis, commercial and operational due diligence, Day-1 readiness, 100-day plan, synergy delivery, post-close operating discipline — so the model signed at close shows up in the P&L.",
      "We translate the integration thesis into a workstream architecture across customers, products, people, operations, technology, finance, legal, and culture — with explicit owners, dependencies, decision points, and risk concentrations.",
      "We stand up the Integration Management Office — governance forums, weekly value-tracking, baseline-vs-target reporting, escalation paths, and TSA exit management — protecting the deal model from announcement through to full integration.",
    ],
    aiRole: [
      "Document intelligence accelerates due diligence by triaging contracts, customer data, operational metrics, employee surveys, and external signals into decision-ready briefs at a scale traditional diligence teams cannot match.",
      "Machine-learning models help identify duplicated capabilities, redundant systems, overlapping suppliers, dependency conflicts, and integration-risk concentrations that interview-based diligence routinely misses.",
      "AI-enabled integration dashboards give leaders early signal on revenue leakage, customer attrition, talent flight, milestone slippage, and synergy-capture rates — shifting the IMO from lagging reporting to leading indicators.",
    ],
    deliverables: [
      "Integration thesis tied to the value model and named synergy pools.",
      "Day-1 readiness pack and 100-day plan structured by workstream.",
      "Synergy tracker with baselines, targets, owners, and milestone evidence.",
      "TSA register and post-close operating cadence for the merged entity.",
    ],
    outcomes: [
      "A sharper value thesis and integration plan before capital is committed.",
      "Day-1 readiness with continuity for customers, employees, and core operations.",
      "Synergy capture tied to named initiatives, owners, baselines, and measurable milestones.",
      "A merged operating model that holds together long after the announcement cycle ends.",
    ],
  },
  operation: {
    challenge:
      "Cost pressure meets service expectations, and last year's improvements stop compounding. The operating system that worked at one scale starts to leak at the next — and root causes hide behind reporting that looks fine until it doesn't.",
    howWeHelp: [
      "We diagnose performance end-to-end — process, organisation, technology, suppliers, management routines, incentives — separating symptoms from root causes using process mining, value-stream analysis, and direct frontline observation.",
      "We redesign workflows, KPIs, roles, service levels, governance, and management cadence so improvement becomes part of daily work — applying Lean, Six Sigma, and operational-excellence techniques anchored in your operating reality, not template-driven.",
      "We pilot deliberately, prove impact against a defined baseline, and scale what works across sites, functions, or business units — transferring capability so your operations leaders own the gains and the ongoing optimisation rhythm.",
    ],
    aiRole: [
      "Process mining and operational analytics expose bottlenecks, rework loops, exception handling, and cost-to-serve variance across thousands of process instances — compressing diagnostics from weeks of interviews into days of evidence.",
      "Predictive models improve capacity planning, demand forecasting, inventory positioning, predictive maintenance, workforce scheduling, and service-level commitments — converting reactive operations into anticipatory ones.",
      "AI copilots equip frontline operators, supervisors, and contact-centre agents with standard-work guidance, faster issue triage, knowledge retrieval, and decision support — lifting performance at the moments where it actually changes.",
    ],
    deliverables: [
      "Operational diagnostic with prioritised performance gaps and root causes.",
      "Future-state operating design, KPI cascade, and cost-to-serve model.",
      "Management operating system — cadences, reviews, and escalation paths.",
      "Pilot evidence pack and scaling playbook validated on a working site.",
    ],
    outcomes: [
      "Measurable lift in cost, throughput, quality, cycle time, and service reliability.",
      "Clear accountability for performance at leadership, management, and frontline levels.",
      "A management operating system that runs without a programme team holding it up.",
      "Improvements that scale across sites and persist after the engagement closes.",
    ],
  },
  strategy: {
    challenge:
      "Strategy work too often produces alignment on language without alignment on choices. The plan becomes a document leaders nod through rather than a set of decisions they own — and the next budget cycle re-opens the same debates.",
    howWeHelp: [
      "We help leadership teams make the few choices that change the company — where to play, how to win, what to stop, and which capabilities must be built — making each choice visible, debatable, and decidable rather than buried in narrative.",
      "We assemble the evidence base — market sizing, customer insight, competitor positioning, regulatory direction, internal capability, and unit economics — so strategic options are grounded, comparable, and stress-tested before commitment.",
      "We translate the chosen direction into an execution architecture: initiatives, investment logic, milestones, KPIs, governance forums, and leadership alignment — so strategy stops being a document and starts producing decisions.",
    ],
    aiRole: [
      "AI scans markets, customer signals, competitor moves, regulatory developments, and technology shifts at a frequency conventional research cycles cannot match — keeping strategy continuously aware rather than annually refreshed.",
      "Scenario modelling, sensitivity analysis, and white-space mapping become richer with AI: leadership teams can compare ten paths instead of two, and see which assumptions actually drive value.",
      "AI helps compress information into structured options, surface counter-arguments, and challenge consensus — improving the quality of the strategic conversation, not just the speed of producing materials.",
    ],
    deliverables: [
      "Strategy on a page — choices, logic, and capabilities to build.",
      "Prioritised initiative portfolio with investment logic and sequencing.",
      "Capital and talent allocation framework with explicit resource shifts.",
      "Strategic governance design and leadership review rhythm.",
    ],
    outcomes: [
      "A strategic direction backed by evidence and leadership conviction.",
      "Prioritised choices that focus capital, talent, and executive attention.",
      "A roadmap that connects ambition to initiatives, owners, metrics, and timing.",
      "Better strategic conversations because assumptions are visible and testable.",
    ],
  },
  transformation: {
    challenge:
      "Large programmes report green status while value silently leaks. Dependencies, adoption, and benefit definitions drift apart faster than steering forums can catch them — and the gap between announced ambition and realised value widens quarter by quarter.",
    howWeHelp: [
      "We turn broad transformation ambition into a managed delivery system — scope architecture, governance, milestones, dependencies, value tracking, adoption plans — so the programme behaves like a portfolio of decisions rather than a slogan.",
      "We stand up the Transformation Management Office and equip the senior steering forum with the cadence and information required to make trade-offs, remove blockers, and protect benefits as conditions change.",
      "We connect programme discipline with human adoption — applying ADKAR alongside design-led communication, role-based enablement, and leadership coaching — so process, technology, structure, and behaviour change in step.",
    ],
    aiRole: [
      "Process mining and operational analytics quantify friction, cost pools, customer effort, workforce activity, and performance variance — anchoring the transformation portfolio in evidence rather than intuition.",
      "AI-enabled programme controls flag dependency risk, milestone slippage, benefits leakage, adoption gaps, and change saturation earlier than human reporting can — giving leaders time to intervene rather than explain.",
      "Generative AI scales communications, training, knowledge management, change-impact analysis, and stakeholder-specific support — keeping adoption tightly woven into delivery rather than treated as a final-mile activity.",
    ],
    deliverables: [
      "Transformation portfolio architecture, value model, and dependency map.",
      "TMO operating model with steering forum design and decision rights.",
      "Change architecture with role-based adoption plans and capability build.",
      "Benefits realisation framework — tracking promise to P&L impact.",
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
      "We stand up Global Capability Centers as enterprise capability platforms — shaping location strategy (informed by AI-driven labour-market analytics), business case, entity path (subsidiary, build-operate-transfer, partner), governance, service catalogue, leadership architecture, and migration roadmap.",
      "We move work in disciplined waves with knowledge-transfer protocols, service-level definitions, capacity planning, and quality controls — protecting business continuity while building durable capability inside the centre.",
      "We mature the GCC from launch through scale to Centre-of-Expertise positioning — migrating higher-value work, building specialist depth, integrating with enterprise governance, and measuring contribution beyond labour arbitrage.",
    ],
    aiRole: [],
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
      "Sustainability commitments outpace the operating systems, data, and governance required to deliver them. Disclosure deadlines arrive faster than the evidence base — and pledges made in annual reports start to look exposed.",
    howWeHelp: [
      "We move sustainability from aspiration to operating discipline — connecting ESG materiality, strategic intent, capital allocation, operations, supply chain, governance, and reporting into one enterprise agenda.",
      "We define material priorities, baselines, science-aligned targets, decarbonisation pathways across Scope 1, 2, and 3 emissions, and implementation initiatives with named owners and milestones — replacing pledges with plans.",
      "We build the evidence base, AI-supported data layer, and reporting rhythm required for credible disclosure aligned to TCFD, ISSB, GRI, SASB, and CSRD — and for the harder conversations with investors, regulators, customers, and the board.",
    ],
    aiRole: [],
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
      "We design the organisation your strategy requires — structure, layers, spans of control, roles, decision rights, leadership model, workforce mix (informed by AI-led workforce analytics), talent architecture, and the cultural shifts that make the design real.",
      "We help leaders clarify what work must be done, where capability should sit, how teams should collaborate across boundaries, and which behaviours must change for the operating model to perform.",
      "We turn organisation design into implementation — role mapping, transition planning, leadership alignment, communication, capability building, performance management, and adoption tracking — so the new model lives beyond the launch announcement.",
    ],
    aiRole: [],
    deliverables: [
      "Organisation design pack — structure, spans, roles, and decision rights.",
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

      {/* Challenge — pain match. Sets context before we describe our method.
          Eyebrow is user-centric ("the reality leaders face") rather than
          lecturing ("why this matters now"), because a leader landing on the
          page already cares about the topic — they need recognition. */}
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

      {/* AI section rendered only when AI is genuinely central to the
          capability. For GCC, Sustainability, and P&O, AI is mentioned
          briefly in How We Help instead — supporting, not defining. */}
      {body.aiRole.length > 0 && (
        <section className="industry-detail-section industry-challenges-section">
          <div className="industry-detail-shell">
            <div className="industry-detail-heading">
              <p className="eyebrow">AI Built In</p>
              <h2>How AI shows up in {service.title}</h2>
              <p>
                We use AI where it sharpens judgement, accelerates analysis,
                and strengthens execution — not as a separate workstream, but
                woven into how the work is delivered.
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
      )}

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
