import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "../_shared/layout/page-shell";
import { PageHero } from "../_shared/layout/page-hero";
import { ServiceIcon, ArrowIcon } from "../_shared/icons";
import { services } from "../_data/services";

export const metadata: Metadata = {
  title: "What We Deliver | HARTS",
  description:
    "Six services. One operating discipline. Built, run, and transferred so your team owns the outcome.",
};

export default function WhatWeDeliverRoute() {
  return (
    <PageShell>
      <main className="ed-page">
        <PageHero
          scene="how-we-help"
          layout="split"
          eyebrow="What We Deliver"
          titleSoft="Integrated capabilities."
          titleStrong="Measurable outcomes."
          subtitle="We are not a generalist firm. These six are what we do - and we do them all under one model: Build, Operate, Transfer. Pick the work that matches your moment; the discipline behind it stays the same."
          actions={
            <Link className="solid-button large" href="/contact">
              Connect With Us
            </Link>
          }
        />

        {/* Editorial service rows */}
        <section className="ed-section">
          <div className="ed-shell">
            <div className="ed-svc-list">
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

        {/* CTA */}
        <section className="ed-cta">
          <div className="ed-shell">
            <h2>
              Not sure which service fits? <em>Start with where you are.</em>
            </h2>
            <p>
              Tell us about the moment your organisation is in. We will come
              back with the service mix that actually fits.
            </p>
            <div className="ed-cta-actions">
              <Link className="solid-button large" href="/contact">
                Connect with HARTS
              </Link>
              <Link className="outline-button large" href="/where-we-deliver">
                See the three domains
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
