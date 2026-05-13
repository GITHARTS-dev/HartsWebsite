import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "../_shared/layout/page-shell";
import { PageHero } from "../_shared/layout/page-hero";
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
        <PageHero
          scene="how-we-work"
          layout="split"
          titleSoft="Disciplined Execution."
          titleStrong="Measurable Outcomes."
          subtitle="We combine strategic diagnosis, product thinking, and disciplined delivery — moving from uncertain ideas to practical transformation with clear decisions, visible progress, and outcomes your teams can sustain."
          actions={
            <Link className="solid-button large" href="/contact">
              Connect with us
            </Link>
          }
        />

        <div id="principles">
          <TransformationPrinciples />
        </div>

        <HowWeWorkTimeline />
      </main>
    </PageShell>
  );
}
