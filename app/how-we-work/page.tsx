import type { Metadata } from "next";

import { PageShell } from "../_shared/layout/page-shell";
import { HowWeWorkTimeline } from "./_components/how-we-work-timeline";
import { TransformationPrinciples } from "./_components/transformation-principles";

export const metadata: Metadata = {
  title: "How We Work | HARTS",
  description:
    "Explore the HARTS approach from understanding and design through collaborative engagement, outcomes, and sustainment.",
};

export default function HowWeWorkRoute() {
  return (
    <PageShell>
      <main className="work-page">
        <section className="work-hero">
          <div className="work-hero-copy reveal">
            <p className="eyebrow">Our Process</p>
            <h1>How We Work?</h1>
            <p>
              We combine strategic diagnosis, product thinking, and disciplined
              delivery to move from uncertain ideas to practical transformation.
              Every engagement is shaped around clear decisions, visible
              progress, and outcomes your teams can sustain.
            </p>
          </div>
          <div className="work-hero-media reveal delay-one">
            <div>
              <strong>From insight to execution</strong>
              <span>Shared context, sharper priorities, measurable momentum.</span>
            </div>
          </div>
        </section>

        <TransformationPrinciples />

        <HowWeWorkTimeline />
      </main>
    </PageShell>
  );
}
