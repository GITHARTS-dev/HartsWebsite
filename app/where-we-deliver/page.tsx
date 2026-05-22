import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "../_shared/layout/page-shell";
import { PageHero } from "../_shared/layout/page-hero";
import { DomainIcon, ServiceIcon, ArrowIcon } from "../_shared/icons";
import { domains } from "../_data/domains";
import { services, getService } from "../_data/services";

export const metadata: Metadata = {
  title: "Where We Deliver | HARTS",
  description:
    "Set-up, Develop, Scale-up — three moments of intervention. One partner across all of them.",
};

export default function WhereWeDeliverRoute() {
  return (
    <PageShell>
      <main className="ed-page">
        <PageHero
          scene="industries"
          layout="split"
          eyebrow="Where We Deliver"
          titleSoft="Three contexts."
          titleStrong="One approach."
          subtitle="HARTS organises around where you are, not what we sell. Set-up, Develop, Scale-up — one capability, one engagement model, three moments of intervention. Many clients engage HARTS for Set-up, return for Develop, and stay for Scale-up."
          actions={
            <Link className="solid-button large" href="/contact">
              Let&apos;s talk
            </Link>
          }
        />

        {/* ─── DOMAIN BLOCKS (editorial, alternating) ───────────────── */}
        {domains.map((d, idx) => (
          <section
            key={d.id}
            id={d.slug}
            className={idx % 2 === 1 ? "ed-section--soft" : ""}
          >
            <div className="ed-shell">
              <div className="ed-dom-block">
                <aside className="ed-dom-side">
                  <span className="ed-dom-num">Domain 0{idx + 1}</span>
                  <span className="ed-dom-icon" aria-hidden="true">
                    <DomainIcon id={d.id} size={28} strokeWidth={1.7} />
                  </span>
                  <h2>
                    <em>{d.label}.</em>
                  </h2>
                  <p className="ed-dom-sub">{d.sub}.</p>
                </aside>

                <div className="ed-dom-body">
                  <p>{d.body}</p>

                  <div>
                    <p className="ed-dom-block-label">You&apos;re here if…</p>
                    <ul className="ed-trigger-list">
                      {d.triggers.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="ed-dom-block-label">Services most relevant</p>
                    <ul className="ed-svc-links">
                      {d.services.map((slug) => {
                        const svc = getService(slug);
                        if (!svc) return null;
                        return (
                          <li key={slug}>
                            <Link href={`/what-we-deliver/${slug}`}>
                              <span className="num">{svc.num}</span>
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

        {/* ─── Cross-domain note ───────────────────────────────────── */}
        <section className="ed-section">
          <div className="ed-shell">
            <header className="ed-section-head" style={{ maxWidth: 760 }}>
              <p className="ed-eyebrow">One firm. All three moments.</p>
              <h2>
                You don&apos;t re-hire a new partner to <em>learn your business twice.</em>
              </h2>
              <p>
                Many clients engage HARTS for Set-up, return for Develop, and
                stay for Scale-up. The continuity matters — the same team, the
                same methodology, the same accountability across every phase of
                your capability&apos;s life.
              </p>
            </header>

            <div className="ed-svc-list">
              {services.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/what-we-deliver/${svc.slug}`}
                  className="ed-svc-row"
                  aria-label={`${svc.title} — ${svc.line}`}
                >
                  <span className="ed-svc-num">{svc.num}</span>
                  <span className="ed-svc-icon" aria-hidden="true">
                    <ServiceIcon slug={svc.slug} />
                  </span>
                  <div className="ed-svc-body">
                    <h3 className="ed-svc-title">{svc.title}</h3>
                    <p className="ed-svc-tag">{svc.line}</p>
                  </div>
                  <span className="ed-svc-arrow" aria-hidden="true">
                    <ArrowIcon size={20} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ──────────────────────────────────────────────────── */}
        <section className="ed-cta">
          <div className="ed-shell">
            <h2>
              Tell us <em>where you are.</em>
            </h2>
            <p>
              We will come back with the service mix and the BOT path that
              fits the moment your organisation is in.
            </p>
            <div className="ed-cta-actions">
              <Link className="solid-button large" href="/contact">Connect with HARTS</Link>
              <Link className="outline-button large" href="/how-we-deliver">How we deliver</Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
