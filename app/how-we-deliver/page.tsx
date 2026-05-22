import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "../_shared/layout/page-shell";
import { PageHero } from "../_shared/layout/page-hero";
import { BotIcon } from "../_shared/icons";

export const metadata: Metadata = {
  title: "How We Deliver | HARTS",
  description:
    "Build. Operate. Transfer. The way HARTS makes sure the capability runs without us - and stays that way.",
};

const phases = [
  {
    key: "build" as const,
    num: "01",
    name: "Build",
    line: "We design the capability with your team in the room.",
    promise:
      "You don't get a generic playbook. You get an operating model designed for your business, your strategy, and the people who will actually run it.",
  },
  {
    key: "operate" as const,
    num: "02",
    name: "Operate",
    line: "We run it through the early months so your team can take over without disruption.",
    promise:
      "While we hold the weight, your people shadow, learn, and own decisions. By the time we step back, the work is already theirs.",
  },
  {
    key: "transfer" as const,
    num: "03",
    name: "Transfer",
    line: "We hand it over - fully documented, fully working, fully yours.",
    promise:
      "Ownership transfers. We stay close through hypercare, then leave a light governance retainer in place so the work keeps improving.",
  },
];

const outcomes = [
  {
    title: "A capability that fits.",
    text:
      "The model we leave behind is built for your context, not lifted from a template. It works on day one and keeps working.",
  },
  {
    title: "A team that's ready.",
    text:
      "Your people don't learn the new way from a manual. They learn it by running it alongside us - so by the time we leave, the work is muscle memory.",
  },
  {
    title: "A future-proof operation.",
    text:
      "What we leave behind keeps improving. The CI rhythm, the governance, the ownership - built to last well beyond our involvement.",
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
          subtitle="Most firms advise and leave. We don't. The way HARTS works means the capability we build runs without us - and stays that way."
          actions={
            <Link className="solid-button large" href="/contact">
              Let&apos;s talk
            </Link>
          }
        />

        {/* ─── 1. The arc - three high-level tiles ───────────────────── */}
        <section className="ed-section">
          <div className="ed-shell">
            <header className="ed-section-head">
              <p className="ed-eyebrow">The Approach</p>
              <h2>
                Three phases. <em>One unbroken arc.</em>
              </h2>
              <p>
                Every HARTS engagement runs through Build, Operate, Transfer. It
                isn&apos;t a methodology you read about - it&apos;s the reason the
                work still runs after we&apos;ve gone.
              </p>
            </header>

            <div className="ed-bot-timeline">
              {phases.map((p) => (
                <div key={p.key} className="ed-bot-tile">
                  <div className="ed-bot-tile-head">
                    <span className="ed-bot-tile-icon"><BotIcon phase={p.key} /></span>
                    <span className="ed-bot-tile-num">{p.num}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.line}</p>
                </div>
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
                Three outcomes you can count on, regardless of which of our six
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

        {/* ─── 4. CTA ───────────────────────────────────────────────── */}
        <section className="ed-cta">
          <div className="ed-shell">
            <h2>
              See BOT applied to <em>your moment.</em>
            </h2>
            <p>
              Tell us where your organisation is. We&apos;ll come back with the
              service mix and the path that fits.
            </p>
            <div className="ed-cta-actions">
              <Link className="solid-button large" href="/contact">Connect with HARTS</Link>
              <Link className="outline-button large" href="/what-we-deliver">See the six services</Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
