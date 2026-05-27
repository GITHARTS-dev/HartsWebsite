import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "../_shared/layout/page-shell";
import { PageHero } from "../_shared/layout/page-hero";
import { FinalCTA } from "../_shared/layout/final-cta";
import { DomainIcon, ServiceIcon, ArrowIcon } from "../_shared/icons";
import { domains } from "../_data/domains";
import { services, getService } from "../_data/services";

export const metadata: Metadata = {
  title: "Where We Deliver | HARTS",
  description:
    "Set-up, Develop, Scale-up - three moments of intervention. One partner across all of them.",
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
          subtitle="HARTS aligns its services to the operational stage of your organization — whether you are building a new capability, strengthening an existing operation, or scaling proven models across the enterprise."
          actions={
            <Link className="solid-button large" href="/contact">
              Connect With Us
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
          body="We will come back with the service mix and the BOT path that fits the moment your organisation is in."
          primary={{ label: "Connect with HARTS", href: "/contact" }}
          secondary={{ label: "How we deliver", href: "/how-we-deliver" }}
        />
      </main>
    </PageShell>
  );
}
