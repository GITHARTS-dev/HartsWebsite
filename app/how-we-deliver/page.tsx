import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "../_shared/layout/page-shell";
import { PageHero } from "../_shared/layout/page-hero";
import { BotIcon, CheckIcon, XIcon } from "../_shared/icons";
import { botPhases } from "../_data/bot";

export const metadata: Metadata = {
  title: "How We Deliver | HARTS",
  description:
    "Build. Operate. Transfer. The methodology that runs through every HARTS engagement — designed, run, and handed over until your team owns the outcome.",
};

const advisoryVsHarts = [
  { advisory: "A 200-slide deck", harts: "A functioning team" },
  { advisory: "A target operating model", harts: "The model, running" },
  { advisory: "A change roadmap", harts: "The change, in flight" },
  { advisory: "A KPI framework", harts: "KPIs your team owns" },
  { advisory: "“Phase 2 recommended”", harts: "We stay until you’re done" },
];

export default function HowWeDeliverRoute() {
  const build = botPhases[0]!;
  const operate = botPhases[1]!;
  const transfer = botPhases[2]!;

  return (
    <PageShell>
      <main className="ed-page">
        <PageHero
          scene="how-we-work"
          layout="split"
          eyebrow="How We Deliver"
          titleSoft="Build. Operate."
          titleStrong="Transfer."
          subtitle="Most firms advise. Some build. We do both — and we transfer. Three verbs, one unbroken arc. We don’t leave until the capability runs without us."
          actions={
            <Link className="solid-button large" href="/contact">
              Let&apos;s talk
            </Link>
          }
        />

        {/* ─── 1. The arc ─────────────────────────────────────────── */}
        <section className="ed-section">
          <div className="ed-shell">
            <header className="ed-section-head">
              <p className="ed-eyebrow">The Spine</p>
              <h2>
                Three phases. <em>One unbroken arc.</em>
              </h2>
              <p>
                Build, Operate, Transfer is how HARTS converts strategy into a
                capability your team owns. Each phase has its own discipline —
                and the engagement does not end until the last one is complete.
              </p>
            </header>

            <div className="ed-bot-timeline">
              <div className="ed-bot-tile">
                <div className="ed-bot-tile-head">
                  <span className="ed-bot-tile-icon"><BotIcon phase="build" /></span>
                  <span className="ed-bot-tile-num">01</span>
                </div>
                <h3>{build.label}</h3>
                <p>{build.desc}</p>
              </div>
              <div className="ed-bot-tile">
                <div className="ed-bot-tile-head">
                  <span className="ed-bot-tile-icon"><BotIcon phase="operate" /></span>
                  <span className="ed-bot-tile-num">02</span>
                </div>
                <h3>{operate.label}</h3>
                <p>{operate.desc}</p>
              </div>
              <div className="ed-bot-tile">
                <div className="ed-bot-tile-head">
                  <span className="ed-bot-tile-icon"><BotIcon phase="transfer" /></span>
                  <span className="ed-bot-tile-num">03</span>
                </div>
                <h3>{transfer.label}</h3>
                <p>{transfer.desc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. BUILD chapter ───────────────────────────────────── */}
        <section className="ed-section--rule">
          <div className="ed-shell">
            <div className="ed-chapter">
              <aside className="ed-chapter-side">
                <span className="ed-chapter-icon"><BotIcon phase="build" size={26} /></span>
                <span className="ed-chapter-num">Phase 01</span>
                <h2 className="ed-chapter-name">
                  Build, <em>with you.</em>
                </h2>
                <p>{build.desc} Scope, knowledge transfer, OKRs, SLA build — done with your people in the room, not for them.</p>
              </aside>
              <div className="ed-chapter-body">
                {build.items!.map((it, idx) => (
                  <article key={it.label} className="ed-item">
                    <span className="ed-item-num">{String(idx + 1).padStart(2, "0")}</span>
                    <div>
                      <h4>{it.label}</h4>
                      <p>{it.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 3. OPERATE chapter ─────────────────────────────────── */}
        <section className="ed-section--rule ed-section--soft">
          <div className="ed-shell">
            <div className="ed-chapter">
              <aside className="ed-chapter-side">
                <span className="ed-chapter-icon"><BotIcon phase="operate" size={26} /></span>
                <span className="ed-chapter-num">Phase 02</span>
                <h2 className="ed-chapter-name">
                  Operate, <em>through transition.</em>
                </h2>
                <p>{operate.desc} Stabilising the process, shadowing your team, and proving the SLAs work in practice — not just on paper.</p>
              </aside>
              <div className="ed-chapter-body">
                {operate.items!.map((it, idx) => (
                  <article key={it.label} className="ed-item">
                    <span className="ed-item-num">{String(idx + 1).padStart(2, "0")}</span>
                    <div>
                      <h4>{it.label}</h4>
                      <p>{it.desc}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. TRANSFER chapter (with 3 sub-stages) ───────────── */}
        <section className="ed-section--rule">
          <div className="ed-shell">
            <div className="ed-chapter">
              <aside className="ed-chapter-side">
                <span className="ed-chapter-icon"><BotIcon phase="transfer" size={26} /></span>
                <span className="ed-chapter-num">Phase 03</span>
                <h2 className="ed-chapter-name">
                  Transfer, <em>and step back.</em>
                </h2>
                <p>{transfer.desc} Transition, hypercare, steady state — three nested moments that ensure ownership transfer is real, not a calendar event.</p>
              </aside>
              <div className="ed-chapter-body">
                <div className="ed-stages">
                  {transfer.stages!.map((stg) => (
                    <article key={stg.key} className="ed-stage">
                      <h4>{stg.label}</h4>
                      <ul>
                        {stg.items.map((it) => (
                          <li key={it.label}>
                            <span>
                              <span className="ed-stage-label">{it.label}</span>
                              <span className="ed-stage-desc">{it.desc}</span>
                            </span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. Advisory vs HARTS ──────────────────────────────── */}
        <section className="ed-section ed-section--soft">
          <div className="ed-shell">
            <header className="ed-section-head">
              <p className="ed-eyebrow">Why It Matters</p>
              <h2>
                Advisory firms vs. <em>HARTS.</em>
              </h2>
              <p>
                The difference is not in the slide quality. It is in what you
                are left with when the team leaves the building.
              </p>
            </header>

            <div className="ed-compare">
              <div className="ed-compare-col ed-compare-col--advisory">
                <h3>Advisory firms deliver</h3>
                <ul>
                  {advisoryVsHarts.map((row) => (
                    <li key={row.advisory}>
                      <XIcon />
                      <span>{row.advisory}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ed-compare-col ed-compare-col--harts">
                <h3>HARTS delivers</h3>
                <ul>
                  {advisoryVsHarts.map((row) => (
                    <li key={row.harts}>
                      <CheckIcon />
                      <span>{row.harts}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 6. Pull quote ─────────────────────────────────────── */}
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

        {/* ─── 7. CTA ────────────────────────────────────────────── */}
        <section className="ed-cta">
          <div className="ed-shell">
            <h2>
              See BOT applied to <em>your moment.</em>
            </h2>
            <p>
              Tell us where your organisation is. We will come back with the
              service mix and the BOT path that fits.
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
