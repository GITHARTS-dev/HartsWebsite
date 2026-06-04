import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "../_shared/layout/page-shell";
import { PageHero } from "../_shared/layout/page-hero";
import { FinalCTA } from "../_shared/layout/final-cta";
import { StageIcon, ServiceIcon, ArrowIcon } from "../_shared/icons";
import { stages } from "../_data/stages";
import { getService } from "../_data/services";

export const metadata: Metadata = {
  title: "Your Stage: Setup, Develop, Scale Up",
  description:
    "HARTS organises around your stage of operational maturity, not your industry. Setup, Develop, Scale Up. Three moments, one disciplined partner.",
  alternates: { canonical: "/where-you-stand" },
  openGraph: {
    title: "Your Stage | HARTS",
    description:
      "We engage based on where you are in your growth journey, not the industry you operate in.",
    url: "/where-you-stand",
    type: "article",
  },
};

export default function WhereYouStandRoute() {
  return (
    <PageShell>
      <main className="ed-page">
        <PageHero
          scene="how-we-work"
          layout="split"
          eyebrow="Where You Stand"
          titleSoft="Industry agnostic."
          titleStrong="Stage specific."
          subtitle="Three stages of operational maturity. We organise around the moment your business is in, not the sector it operates in."
          actions={
            <Link className="solid-button large" href="/contact">
              Talk to a partner
            </Link>
          }
        />

        {/* ─── PROGRESSION STRIP ─────────────────────────────────────────
            Three numbered cards in a single row — the whole story in one
            glance. Each card links down to the deeper section below. */}
        <section className="ed-section ed-section--soft">
          <div className="ed-shell">
            <div className="stages-strip">
              {stages.map((s, idx) => (
                <a key={s.id} href={`#${s.slug}`} className="stages-strip-card">
                  <span className="stages-strip-num" aria-hidden="true">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="stages-strip-icon" aria-hidden="true">
                    <StageIcon id={s.id} size={22} strokeWidth={1.8} />
                  </span>
                  <h2 className="stages-strip-label">{s.label}</h2>
                  <p className="stages-strip-sub">{s.sub}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── STAGE BLOCKS (deep dive, one per stage) ───────────────── */}
        {stages.map((s, idx) => (
          <section
            key={s.id}
            id={s.slug}
            className={`stage-block ${idx % 2 === 1 ? "ed-section--soft" : ""}`}
          >
            <div className="ed-shell">
              <div className="stage-block-grid">
                <header className="stage-block-head">
                  <div className="stage-block-mark">
                    <span className="stage-block-icon" aria-hidden="true">
                      <StageIcon id={s.id} size={36} strokeWidth={1.6} />
                    </span>
                    <span className="stage-block-num" aria-hidden="true">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="stage-block-title">
                    <em>{s.label}.</em>
                  </h2>
                  <p className="stage-block-sub">{s.body}</p>
                </header>

                <div className="stage-block-body">
                  <div className="stage-block-col">
                    <p className="stage-block-col-label">You&apos;re here if</p>
                    <ul className="stage-block-triggers">
                      {s.triggers.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="stage-block-col">
                    <p className="stage-block-col-label">Services that fit</p>
                    <ul className="stage-block-services">
                      {s.services.map((slug) => {
                        const svc = getService(slug);
                        if (!svc) return null;
                        return (
                          <li key={slug}>
                            <Link href={`/what-we-deliver/${slug}`}>
                              <ServiceIcon slug={slug} size={16} strokeWidth={1.8} />
                              <span>{svc.title}</span>
                              <ArrowIcon />
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <FinalCTA
          heading={<>Tell us <em>where you are.</em></>}
          body="A short conversation is faster than a brochure. We will come back with the engagement model that fits the stage you are in."
          primary={{ label: "Talk to a partner", href: "/contact" }}
          secondary={{ label: "What We Deliver", href: "/what-we-deliver" }}
        />
      </main>
    </PageShell>
  );
}
