import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "../_shared/layout/page-shell";
import { PageHero } from "../_shared/layout/page-hero";
import { FinalCTA } from "../_shared/layout/final-cta";
import { ServiceIcon, ArrowIcon } from "../_shared/icons";
import { services } from "../_data/services";

export const metadata: Metadata = {
  title: "What We Deliver Six Consulting Services",
  description:
    "Six end-to-end consulting services: OD & Implementation, Centre of Excellence, Post M&A Integration, GCC & Shared Services, Recruitment as a Service, and Executive Coaching.",
  alternates: { canonical: "/what-we-deliver" },
  openGraph: {
    title: "What We Deliver | HARTS",
    description:
      "Six consulting services delivered end-to-end, with the Build-Operate-Transfer model applied where it fits, most prominently to GCC & Shared Services.",
    url: "/what-we-deliver",
    type: "article",
  },
};

export default function WhatWeDeliverRoute() {
  return (
    <PageShell>
      <main className="ed-page">
        <PageHero
          scene="how-we-help"
          layout="split"
          eyebrow="What We Deliver"
          titleSoft="Specialized expertise."
          titleStrong=" Practical outcomes."
          subtitle="We work alongside your team and stay until the change runs. Pick the engagement that fits the work in front of you."
          actions={
            <Link className="solid-button large" href="/contact">
              Talk to a partner
            </Link>
          }
        />

        {/* Editorial service rows */}
        <section className="ed-section">
          <div className="ed-shell">
            <header className="ed-section-head">
              <p className="eyebrow">Our Services</p>
              <h2>
                Pick the capability that fits <span className="ed-accent">the work.</span>
              </h2>
            </header>

            <div className="ed-svc-list ed-svc-list--two-col">
              {services.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/what-we-deliver/${svc.slug}`}
                  className="ed-svc-row"
                  aria-label={`${svc.title} - ${svc.line}`}
                >
                  <span className="ed-svc-icon" aria-hidden="true">
                    <ServiceIcon slug={svc.slug} />
                  </span>
                  <div className="ed-svc-body">
                    <h2 className="ed-svc-title">{svc.title}</h2>
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

        <FinalCTA
          heading={<>Not sure which one fits? <em>Start with where you are.</em></>}
          body="Tell us the moment your organisation is in. We will come back with the service mix that actually fits."
          primary={{ label: "Talk to a partner", href: "/contact" }}
          secondary={{ label: "See the Three Stages", href: "/where-you-stand" }}
        />
      </main>
    </PageShell>
  );
}
