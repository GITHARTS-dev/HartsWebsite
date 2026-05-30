import Link from "next/link";

import { ServiceIcon, BotIcon, DomainIcon, CheckIcon } from "../../_shared/icons";
import { FinalCTA } from "../../_shared/layout/final-cta";
import type { Service } from "../../_data/services";
import { domains } from "../../_data/domains";

type PhaseKey = "build" | "operate" | "transfer";

const PHASE_NUMS = ["01", "02", "03"] as const;
const PHASE_KEYS: PhaseKey[] = ["build", "operate", "transfer"];

export function ServiceDetail({ service }: { service: Service }) {
  const phaseNames: [string, string, string] =
    service.bot.names ?? ["Build", "Operate", "Transfer"];

  const phaseLabels = PHASE_KEYS.map((key, i) => ({
    key,
    num: PHASE_NUMS[i],
    name: phaseNames[i],
  }));

  return (
    <main className="ed-page">
      {/* ─── HERO (editorial, no PageHero) ─────────────────────────── */}
      <section className="ed-detail-hero">
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
                <Link className="outline-button" href="/contact">Connect With Us</Link>
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
          </header>

          <div className="ed-cap-list">
            {service.subs.map((sub) => (
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
              A structured journey from <em>insight to impact.</em>
            </h2>
          </header>

          {service.slug !== "gcc-and-shared-services" && (
            <div className="ed-bot-cols">
              {phaseLabels.map((phase) => (
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
          )}

          {service.slug === "gcc-and-shared-services" && (
            <div className="bot-pathway" style={{ marginTop: 48 }}>
              <svg
                className="bot-pathway-curve"
                viewBox="0 0 1100 340"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M 40 186 L 183.33 186 C 340 186, 420 131, 550 131 S 770 76, 916.67 76 L 1056 76"
                  fill="none"
                  stroke="#E7473C"
                  strokeWidth="1.4"
                  strokeDasharray="5 7"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d="M 1046 67 L 1066 76 L 1046 85"
                  fill="none"
                  stroke="#E7473C"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
              {phaseLabels.map((phase, index) => (
                <article key={phase.key} className={`bot-step bot-step--${index + 1}`}>
                  <span className="bot-step-icon" aria-hidden="true">
                    <BotIcon phase={phase.key} />
                  </span>
                  <span className="bot-step-dot" aria-hidden="true" />
                  <h3 className="bot-step-title">{phase.name}</h3>
                  <p className="bot-step-text">{service.bot[phase.key]}</p>
                </article>
              ))}
            </div>
          )}

          <div className="ed-detail-actions" style={{ marginTop: 32 }}>
            <Link className="outline-button" href="/contact">
              Connect With Us
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
              Tailored to your <em>business context.</em>
            </h2>
            
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


      <FinalCTA
        heading={<>Ready to talk about <em>{service.title.toLowerCase()}?</em></>}
        body="Tell us where you are. We will respond with a focused perspective on how this work fits."
        primary={{ label: "Discuss Your Transformation", href: "/contact" }}
        secondary={{ label: "Explore Our Services", href: "/what-we-deliver" }}
      />
    </main>
  );
}

