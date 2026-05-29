import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";

import { PageShell } from "../_shared/layout/page-shell";
import { PageHero } from "../_shared/layout/page-hero";
import { FinalCTA } from "../_shared/layout/final-cta";
import { siteUrl } from "../_lib/site";

export const metadata: Metadata = {
  title: "How We Deliver Build, Operate, Transfer",
  description:
    "Build, Operate, Transfer is the spine of every HARTS engagement. We build the capability, run it through transition, and transfer ownership when your team is ready to sustain it.",
  alternates: { canonical: "/how-we-deliver" },
  openGraph: {
    title: "How We Deliver | HARTS",
    description:
      "The HARTS Build, Operate, Transfer delivery model. Build capability, run it alongside your teams, transfer ownership.",
    url: "/how-we-deliver",
    type: "article",
  },
};

const phases = [
  {
    key: "build" as const,
    num: "01",
    name: "Build",
    line: "We design the operating model, governance structure, workforce capability, and execution framework required to support the business objective.",
    promise:
      "You don't get a generic playbook. You get an operating model designed for your business, your strategy, and the people who will actually run it.",
  },
  {
    key: "operate" as const,
    num: "02",
    name: "Operate",
    line: "We run the capability alongside your teams while stabilizing operations, embedding governance, and building execution maturity.",
    promise:
      "While we hold the weight, your people shadow, learn, and own decisions. By the time we step back, the work is already theirs.",
  },
  {
    key: "transfer" as const,
    num: "03",
    name: "Transfer",
    line: "We transition operational ownership, leadership accountability, and delivery capability into your organization with long-term sustainability embedded.",
    promise:
      "Ownership transfers. We stay close through hypercare, then leave a light governance retainer in place so the work keeps improving.",
  },
];

const outcomes = [
  {
    title: "Operational Capability That Fits",
    text:
      "Every capability is designed around your operating environment, workforce reality, governance structure, and growth objectives not generic frameworks.",
  },
  {
    title: "Teams That Can Run Independently",
    text:
      "We embed execution capability directly into your teams so operational ownership remains sustainable long after transition.",
  },
  {
    title: "Scalable Operating Foundations",
    text:
      "Governance, reporting rhythm, decision accountability, and operational discipline remain embedded beyond the engagement lifecycle.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${siteUrl}/how-we-deliver#faq`,
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Build-Operate-Transfer (BOT) methodology?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Build-Operate-Transfer is HARTS's end-to-end delivery model. We design the operating model and governance (Build), run the capability alongside your teams while they shadow and learn (Operate), then formally transfer ownership and exit through a structured hypercare period (Transfer). The methodology is engineered to create long-term operational ownership rather than dependency on consultants.",
      },
    },
    {
      "@type": "Question",
      name: "What happens during the Build phase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "During Build, HARTS designs the operating model, governance structure, workforce capability framework, and execution model required to support the business objective. The output is an operating model designed specifically for your organisation, not a generic playbook.",
      },
    },
    {
      "@type": "Question",
      name: "What happens during the Operate phase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "HARTS runs the capability alongside your teams. We hold the weight while your people shadow, learn, and take decisions. By the time we step back, the work is already theirs.",
      },
    },
    {
      "@type": "Question",
      name: "What happens during the Transfer phase?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Operational ownership, leadership accountability, and delivery capability transition formally into your organisation. HARTS stays close through a hypercare period, then leaves a light governance retainer so the work keeps improving after we leave.",
      },
    },
    {
      "@type": "Question",
      name: "How is HARTS different from traditional management consulting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional consulting ends with a recommendation deck and a long-term retainer. HARTS doesn't advise and leave. We build the capability, run it through transition, and hand it over to your team. Our founding principle: if it doesn't run without us, we haven't finished the job.",
      },
    },
  ],
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "@id": `${siteUrl}/how-we-deliver#howto`,
  name: "How HARTS delivers Build-Operate-Transfer (BOT) engagements",
  description:
    "The three-phase HARTS BOT methodology for designing, running, and transferring operational capabilities to client organisations.",
  totalTime: "P12M",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Build",
      text: "HARTS designs the operating model, governance structure, workforce capability framework, and execution model required to support the business objective.",
      url: `${siteUrl}/how-we-deliver#build`,
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Operate",
      text: "HARTS runs the capability alongside the client's teams while stabilising operations, embedding governance, and building execution maturity.",
      url: `${siteUrl}/how-we-deliver#operate`,
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Transfer",
      text: "HARTS transitions operational ownership, leadership accountability, and delivery capability into the client organisation with long-term sustainability embedded.",
      url: `${siteUrl}/how-we-deliver#transfer`,
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    {
      "@type": "ListItem",
      position: 2,
      name: "How We Deliver",
      item: `${siteUrl}/how-we-deliver`,
    },
  ],
};

export default function HowWeDeliverRoute() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main className="ed-page">
        <PageHero
          scene="how-we-work"
          layout="split"
          eyebrow="How We Deliver"
          titleSoft="Build. Operate."
          titleStrong="Transfer."
          subtitle="HARTS doesn’t stop at strategy. We build operational capability, run it alongside your teams, and transfer ownership only when the organization is ready to sustain it independently."
          actions={
            <Link className="solid-button large" href="/contact">
              Connect With Us
            </Link>
          }
        />

        {/* ─── 1. The Approach - three phases with watermark numbers ──── */}
        <section className="ed-section approach-section">
          <div className="ed-shell">
            <header className="approach-head">
              <p className="approach-eyebrow">The Approach</p>
              <div className="approach-intro">
                <h2 className="approach-heading">
                  Three phases. <em>One unbroken arc.</em>
                </h2>
                <p className="approach-intro-text">
                  Every HARTS consulting engagement follows a structured
                  Build,Operate,Transfer (BOT) delivery model designed to
                  create long-term operational ownership inside your
                  organisation, not dependency on consultants.
                </p>
              </div>
            </header>

            <div className="approach-phases">
              {phases.map((p, idx) => (
                <Fragment key={p.key}>
                  <article className="approach-phase">
                    <span className="approach-phase-num" aria-hidden="true">
                      {p.num}
                    </span>
                    <h3 className="approach-phase-title">{p.name}</h3>
                    <p className="approach-phase-text">{p.line}</p>
                  </article>
                  {idx < phases.length - 1 && (
                    <span className="approach-arrow" aria-hidden="true">→</span>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 2. What it means for you ──────────────────────────────── */}
        <section className="ed-section ed-section--soft">
          <div className="ed-shell">
            <header className="ed-section-head">
              <p className="ed-eyebrow">What It Means For You</p>
              <h2>
                The work doesn&apos;t end with a deck. <em>It ends with you running it.</em>
              </h2>
              <p>
                Three outcomes you can count on, regardless of which of our
                services you engage us for.
              </p>
            </header>

            <div className="ed-bot-cols">
              {outcomes.map((o, idx) => (
                <div key={o.title} className="ed-bot-col">
                  <div className="ed-bot-col-head">
                    <span className="ed-bot-col-num">0{idx + 1}</span>
                    <h3 className="ed-bot-col-name">{o.title}</h3>
                  </div>
                  <p className="ed-bot-col-desc">{o.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 3. Pull quote ─────────────────────────────────────────── */}
        <section className="ed-section">
          <div className="ed-shell">
            <div className="ed-quote">
              <blockquote>
                &ldquo;If it doesn&apos;t run without us, we haven&apos;t finished the job.&rdquo;
              </blockquote>
              <cite>HARTS founding principle</cite>
            </div>
          </div>
        </section>

        <FinalCTA
          heading={<>See BOT applied to <em>your moment.</em></>}
          body="Tell us where your organisation is. We'll come back with the service mix and the path that fits."
          primary={{ label: "Connect With HARTS", href: "/contact" }}
          secondary={{ label: "See the Six Services", href: "/what-we-deliver" }}
        />
      </main>
    </PageShell>
  );
}
