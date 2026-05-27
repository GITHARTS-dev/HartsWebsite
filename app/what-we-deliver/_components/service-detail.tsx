import Link from "next/link";

import { ServiceIcon, BotIcon, DomainIcon, CheckIcon } from "../../_shared/icons";
import { FinalCTA } from "../../_shared/layout/final-cta";
import { AbstractFlow } from "../../_shared/layout/abstract-flow";
import type { Service } from "../../_data/services";
import { domains } from "../../_data/domains";

const PHASE_LABELS = [
  { key: "build", num: "01", name: "Build" },
  { key: "operate", num: "02", name: "Operate" },
  { key: "transfer", num: "03", name: "Transfer" },
] as const;

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <main className="ed-page">
      {/* ─── HERO (editorial, no PageHero) ─────────────────────────── */}
      <section className="ed-detail-hero">
        <AbstractFlow className="ed-detail-hero-flow" />
        <div className="ed-shell">
          <nav className="ed-breadcrumb" aria-label="Breadcrumb">
            <Link href="/what-we-deliver">What We Deliver</Link>
            <span className="sep">/</span>
            <span className="cur">{service.num} · {service.title}</span>
          </nav>

          <div className="ed-detail-headline">
            <div className="ed-detail-mark" aria-hidden="true">
              <ServiceIcon slug={service.slug} size={28} strokeWidth={1.7} />
            </div>
            <div>
              <h1>
                {service.titleSoft && <span className="soft">{service.titleSoft}</span>}
                <span className="strong">{service.titleStrong ?? service.title}</span>
              </h1>
              <p className="ed-detail-line">{service.line}</p>
              <div className="ed-detail-actions">
                <Link className="solid-button" href="/contact">Discuss Your Transformation</Link>
                <Link className="outline-button" href="/how-we-deliver">Explore Our Delivery Model</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHAT IT IS - sub-capability editorial list ────────────── */}
      <section className="ed-section">
        <div className="ed-shell">
          <header className="ed-section-head">
            <p className="ed-eyebrow">Outcomes</p>
            <h2>
              What this <em>engagement unlocks.</em>
            </h2>
            <p>
              Each line below names a deliverable our team builds, runs, and
              transfers to yours. No vague workstreams. No theatre.
            </p>
          </header>

          <div className="ed-cap-list">
            {service.subs.map((sub, i) => (
              <article key={sub.label} className="ed-cap">
                <h3 className="ed-cap-label">
                  <span className="num" aria-hidden="true"><CheckIcon size={13} strokeWidth={2.5} /></span>
                  {sub.label}
                </h3>
                <div className="ed-cap-body">
                  <p>{sub.desc}</p>
                  {sub.children && sub.children.length > 0 && (
                    <ul className="ed-cap-children">
                      {sub.children.map((c) => (
                        <li key={c.label} className="ed-cap-child">
                          <span>
                            <span className="ed-cap-child-label">{c.label}</span>
                            <span className="ed-cap-child-desc">{c.desc}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW WE DELIVER THIS - BOT prose, 3 columns ────────────── */}
      <section className="ed-section ed-section--soft">
        <div className="ed-shell">
          <header className="ed-section-head">
            <p className="ed-eyebrow">How We Deliver This</p>
            <h2>
              Build. Operate. <em>Transfer.</em>
            </h2>
            <p>
              The HARTS methodology applied to {service.title.toLowerCase()}.
              Three phases, in plain language - what we do, how we run it, what
              we leave behind.
            </p>
          </header>

          <div className="ed-bot-cols">
            {PHASE_LABELS.map((phase) => (
              <div key={phase.key} className="ed-bot-col">
                <div className="ed-bot-col-head">
                  <span className="ed-bot-col-icon" aria-hidden="true">
                    <BotIcon phase={phase.key} />
                  </span>
                  <div>
                    <span className="ed-bot-col-num">{phase.num}</span>
                    <h3 className="ed-bot-col-name">{phase.name}</h3>
                  </div>
                </div>
                <p className="ed-bot-col-desc">{service.bot[phase.key]}</p>
              </div>
            ))}
          </div>

          <div className="ed-detail-actions" style={{ marginTop: 32 }}>
            <Link className="outline-button" href="/how-we-deliver">
              See the full methodology
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHERE WE DELIVER THIS - domain context rows ───────────── */}
      <section className="ed-section">
        <div className="ed-shell">
          <header className="ed-section-head">
            <p className="ed-eyebrow">Where We Deliver This</p>
            <h2>
              The same service. <em>Shaped to your moment.</em>
            </h2>
            <p>
              How this work flexes across the three moments where HARTS
              engages: setting something new up, developing what exists, or
              scaling what already works.
            </p>
          </header>

          <div className="ed-ctx-list">
            {domains.map((d) => (
              <Link key={d.id} href={`/where-we-deliver#${d.slug}`} className="ed-ctx">
                <span className="ed-ctx-label">
                  <DomainIcon id={d.id} size={16} />
                  {d.label}
                </span>
                <p className="ed-ctx-body">{service.ctx[d.id]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SREEMA'S VOICE ────────────────────────────────────────── */}
      <section className="ed-section ed-section--soft">
        <div className="ed-shell">
          <div className="ed-quote">
            <blockquote>&ldquo;{service.voice}&rdquo;</blockquote>
            <cite>Sreema Nallasivam · CEO &amp; Co-Founder</cite>
          </div>
        </div>
      </section>

      <FinalCTA
        heading={<>Ready to talk about <em>{service.title.toLowerCase()}?</em></>}
        body="Tell us where you are. We will respond with a focused perspective on how this work fits."
        primary={{ label: "Discuss Your Transformation", href: "/contact" }}
        secondary={{ label: "Explore Our Delivery Model", href: "/how-we-deliver" }}
      />
    </main>
  );
}

