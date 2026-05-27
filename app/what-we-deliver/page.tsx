import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "../_shared/layout/page-shell";
import { PageHero } from "../_shared/layout/page-hero";
import { FinalCTA } from "../_shared/layout/final-cta";
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
            <header className="ed-section-head">
              <p className="eyebrow">Our Services</p>
              <h2>
                Six services we deliver <span className="ed-accent">end-to-end.</span>
              </h2>
              <p>
                Each row is a capability we build, run, and transfer. Pick the
                one that matches the moment you&apos;re in — the discipline
                behind it stays the same.
              </p>
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
          heading={<>Not sure which service fits? <em>Start with where you are.</em></>}
          body="Tell us about the moment your organisation is in. We will come back with the service mix that actually fits."
          primary={{ label: "Connect with HARTS", href: "/contact" }}
          secondary={{ label: "See the three domains", href: "/where-we-deliver" }}
        />
      </main>
    </PageShell>
  );
}
