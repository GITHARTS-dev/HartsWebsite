"use client";

import Link from "next/link";
import { serviceOfferings } from "../../_data/services-content";
import { PageHero } from "../../_shared/layout/page-hero";

function ServiceIcon({ slug }: { slug: string }) {
  switch (slug) {
    case "innovation":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 3a6 6 0 0 0-3.5 10.9V16a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-2.1A6 6 0 0 0 12 3z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 20h4M11 22h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "mergers-acquisitions":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="8" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="16" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "operation":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "strategy":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="1.6" fill="currentColor" />
        </svg>
      );
    case "transformation":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 8a8 8 0 0 1 14-4M20 16a8 8 0 0 1-14 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M18 3v5h-5M6 21v-5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "gcc-setup":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "sustainability":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 19c4-4 8-7 14-14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "people-and-organization":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M2 19c0-3 2.5-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M14 19c0-3 2.5-5 5-5s3 2 3 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

const faqs = [
  {
    q: "How long does a typical engagement take?",
    a: "Most focused workstreams run six to twelve weeks. Larger transformation programs are phased over several months with clear milestones and decision points built in.",
  },
  {
    q: "Do you work alongside our internal teams?",
    a: "Yes — we embed with your teams, transfer capability throughout the engagement, and structure the work so your people own the outcome long after we step back.",
  },
  {
    q: "What makes HARTS different from a traditional consultancy?",
    a: "We prioritise decision-making over documentation. Every engagement produces clear owners, measurable milestones, and momentum your teams can sustain after the engagement ends.",
  },
];

export function ServicesOverview() {
  return (
    <main className="help-page">
      <PageHero
        scene="how-we-help"
        layout="split"
        eyebrow="How We Help"
        titleSoft="Focused expertise."
        titleStrong="Decisive results."
        subtitle="Focused service lines — engineered to clarify choices, design practical transformation, and mobilise people around work that matters."
        actions={
          <Link className="solid-button large" href="/contact">
            Connect with us
          </Link>
        }
      />

      {/* ─── SERVICES: Bento Box ──────────────────────────────────── */}
      <section className="hwh-services" id="services">
        <div className="hwh-services-hd">
          <div>
            <p className="hwh-section-eyebrow">Capabilities</p>
            <h2>Focused capabilities. Unified execution.</h2>
          </div>
          <p className="hwh-services-desc">
            HARTS brings together strategy, transformation, and operational
            expertise to help organisations move forward with clarity and
            confidence.
          </p>
        </div>

        <div className="hwh-bento-grid">
          {serviceOfferings.map((service, index) => (
            <Link
              key={service.slug}
              href={`/how-we-help/${service.slug}`}
              className={`hwh-bento-card hwh-bento-card--${index + 1}`}
            >
              <div className="hwh-bento-icon">
                <ServiceIcon slug={service.slug} />
              </div>
              <div className="hwh-bento-content">
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
              </div>
              <span className="hwh-bento-arrow" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7.5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="hwh-bento-footer">
          <Link className="hwh-bento-cta" href="/contact">
            Start a conversation
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M3 7.5h9M8.5 4l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────── */}
      <section className="section hwh-faq">
        <div className="hwh-faq-inner">
          <div className="hwh-faq-heading">
            <p className="hwh-faq-eyebrow">Questions</p>
            <h2>What leadership teams ask us.</h2>
          </div>
          <div className="hwh-faq-list">
            {faqs.map((item, i) => (
              <details className="hwh-faq-item" key={i}>
                <summary>
                  <span>{item.q}</span>
                  <span className="hwh-faq-toggle" aria-hidden="true" />
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ────────────────────────────────────────────── */}
      <section className="hwh-cta">
        <div className="hwh-cta-inner">
          
          <h2>Ready to bring clarity<br />to your next move?</h2>
          <p>
            Tell us about the challenge ahead. We will respond with a focused
            perspective on how we can help.
          </p>
          <div className="hwh-cta-actions">
            <Link className="hwh-btn-primary" href="/contact">
              Connect with HARTS
            </Link>
            <Link className="hwh-btn-ghost" href="/how-we-work">
              How we work
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
