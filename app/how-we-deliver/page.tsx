import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";

import { PageShell } from "../_shared/layout/page-shell";
import { PageHero } from "../_shared/layout/page-hero";
import { FinalCTA } from "../_shared/layout/final-cta";

export const metadata: Metadata = {
  title: "How We Deliver — Build, Operate, Transfer",
  description:
    "Build, Operate, Transfer is the spine of every HARTS engagement. We build the capability, run it through transition, and transfer ownership when your team is ready to sustain it.",
  alternates: { canonical: "/how-we-deliver" },
  openGraph: {
    title: "How We Deliver | HARTS",
    description:
      "The HARTS Build-Operate-Transfer delivery model — build capability, run it alongside your teams, transfer ownership.",
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

export default function HowWeDeliverRoute() {
  return (
    <PageShell>
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
                  Every HARTS engagement follows a Build–Operate–Transfer
                  delivery model designed to create long-term operational
                  ownership not dependency on consultants.
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
