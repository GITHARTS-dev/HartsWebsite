import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "../_shared/layout/page-shell";
import { HowWeWorkTimeline } from "./_components/how-we-work-timeline";
import { TransformationPrinciples } from "./_components/transformation-principles";

export const metadata: Metadata = {
  title: "How We Work | HARTS",
  description:
    "Explore the HARTS approach from understanding and design through collaborative engagement, outcomes, and sustainment.",
};

const methodPreview = ["Diagnose", "Design", "Build", "Deliver", "Sustain"];

export default function HowWeWorkRoute() {
  return (
    <PageShell>
      <main className="work-page">
        <section className="work-hero work-hero--editorial">
          <div className="work-hero-grid" aria-hidden="true" />
          <div className="work-hero-orb work-hero-orb--a" aria-hidden="true" />
          <div className="work-hero-orb work-hero-orb--b" aria-hidden="true" />

          <div className="work-hero-shell">
            <div className="work-hero-copy reveal">
              <p className="eyebrow">Our Process</p>
              <h1>How We Work?</h1>
              <p>
                We combine strategic diagnosis, product thinking, and disciplined
                delivery to move from uncertain ideas to practical transformation.
                Every engagement is shaped around clear decisions, visible
                progress, and outcomes your teams can sustain.
              </p>
              <div className="work-hero-actions">
                <Link className="solid-button large" href="/contact">
                  Connect with us
                </Link>
              </div>
            </div>

            <aside className="work-hero-method reveal delay-one" aria-label="Five-phase method">
              <ol className="work-method-list">
                {methodPreview.map((name, i) => (
                  <li className="work-method-item" key={name} style={{ ["--i" as string]: i }}>
                    <span className="work-method-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="work-method-rail" aria-hidden="true" />
                    <span className="work-method-name">{name}</span>
                  </li>
                ))}
              </ol>
              <footer className="work-method-foot">
                <strong>From insight to execution</strong>
                <span>Shared context, sharper priorities, measurable momentum.</span>
              </footer>
            </aside>
          </div>

          <div className="work-hero-scroll-cue" aria-hidden="true">
            <span />
          </div>
        </section>

        <TransformationPrinciples />

        <HowWeWorkTimeline />
      </main>
    </PageShell>
  );
}
