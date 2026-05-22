import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "../_shared/layout/page-shell";
import { PageHero } from "../_shared/layout/page-hero";
import { domains } from "../_data/domains";
import { services, getService } from "../_data/services";

export const metadata: Metadata = {
  title: "Where We Deliver | HARTS",
  description:
    "Setup, Develop, Scale Up — three moments of intervention. One partner across all of them.",
};

export default function WhereWeDeliverRoute() {
  return (
    <PageShell>
      <main className="wwd-page">
        <PageHero
          scene="industries"
          layout="split"
          eyebrow="Where We Deliver"
          titleSoft="Three moments."
          titleStrong="One partner across all of them."
          subtitle="HARTS organises around where you are, not what we sell. Setup, Develop, Scale Up — one capability, one engagement model, three moments of intervention. Many clients engage HARTS for Setup, return for Develop, and stay for Scale Up."
          actions={
            <Link className="solid-button large" href="/contact">
              Connect with us
            </Link>
          }
        />

        {domains.map((d, idx) => (
          <section
            key={d.id}
            id={d.slug}
            className={`wwd-domain${idx % 2 === 1 ? " wwd-domain--alt" : ""}`}
          >
            <div className="wwd-domain-shell">
              <div className="wwd-domain-head reveal">
                <div>
                  <span className="wwd-eyebrow">Domain 0{idx + 1} · {d.label}</span>
                  <h2>{d.sub}.</h2>
                </div>
                <p className="wwd-domain-body">{d.body}</p>
              </div>

              <div className="reveal">
                <p className="eyebrow" style={{ marginBottom: 14 }}>You&apos;re here if…</p>
                <ul className="wwd-trigger-list">
                  {d.triggers.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>

              <div className="reveal" style={{ marginTop: 36 }}>
                <p className="eyebrow" style={{ marginBottom: 14 }}>Services that apply in this moment</p>
                <div className="wwd-svc-strip">
                  {d.services.map((slug) => {
                    const svc = getService(slug);
                    if (!svc) return null;
                    return (
                      <Link
                        key={slug}
                        href={`/what-we-deliver/${slug}`}
                        className="wwd-svc-chip"
                      >
                        {svc.title}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="wwd-domain-actions">
                <Link className="outline-button" href="/contact">
                  Tell us this is where you are
                </Link>
              </div>
            </div>
          </section>
        ))}

        {/* ─── Cross-domain note ─────────────────────────────────────── */}
        <section className="section">
          <div className="section-heading reveal" style={{ maxWidth: 760 }}>
            <p className="eyebrow">One firm. All three moments.</p>
            <h2>You don&apos;t re-hire a new partner to learn your business twice.</h2>
            <p>
              Many clients engage HARTS for Setup, return for Develop, and stay
              for Scale Up. The continuity matters — the same team, the same
              methodology, the same accountability across every phase of your
              capability&apos;s life.
            </p>
          </div>
        </section>

        {/* ─── All six services strip ────────────────────────────────── */}
        <section className="section" style={{ background: "var(--soft)" }}>
          <div className="section-heading reveal" style={{ maxWidth: 760 }}>
            <p className="eyebrow">The six services, in every domain</p>
            <h2>Same playbook. Different starting line.</h2>
          </div>

          <div className="wwd-svc-strip reveal" style={{ maxWidth: 1080 }}>
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/what-we-deliver/${svc.slug}`}
                className="wwd-svc-chip"
              >
                {svc.num} · {svc.title}
              </Link>
            ))}
          </div>
        </section>

        {/* ─── CTA ───────────────────────────────────────────────────── */}
        <section className="hwh-cta">
          <div className="hwh-cta-inner">
            <h2>Tell us where you are.</h2>
            <p>
              We will come back with the service mix and the BOT path that fits
              the moment your organisation is in.
            </p>
            <div className="hwh-cta-actions">
              <Link className="solid-button large" href="/contact">
                Connect with HARTS
              </Link>
              <Link className="outline-button large" href="/how-we-deliver">
                How we deliver
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
