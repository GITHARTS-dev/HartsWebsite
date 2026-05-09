"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { serviceOfferings } from "../../_data/services-content";

function ServiceIcon({ slug }: { slug: string }) {
  switch (slug) {
    case "market-clarity":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 12h4l3 8 4-16 3 8h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "transformation-design":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M17.5 14v7M14 17.5h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "executive-alignment":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="16" cy="7" r="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M2 20c0-3 2.5-5 6-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M22 20c0-3-2.5-5-6-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12 20c0-3-1.5-5-3-5h2c1.5 0 3 2 3 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "growth-strategy":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 18l5-7 4 4 5-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 7h4v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "operating-model-design":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="9" y="2" width="6" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
          <rect x="2" y="16" width="6" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
          <rect x="16" y="16" width="6" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 7v3.5M12 10.5H5v5.5M12 10.5h7v5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "digital-enablement":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M2 9l10-6 10 6-10 6L2 9z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 15l10 6 10-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
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

const engagementPrinciples = [
  "Embedded, not remote",
  "Decisions over decks",
  "Capability transfer",
  "Measurable progress",
] as const;

export function ServicesOverview() {
  const bentoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = bentoRef.current;
    if (!grid || typeof IntersectionObserver === "undefined") return;

    const cards = Array.from(grid.querySelectorAll<HTMLElement>(".hwh-bento-card"));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const idx = cards.indexOf(el);
          el.style.transitionDelay = `${idx * 60}ms`;
          el.classList.add("hwh-bento-card--in");
          el.addEventListener("transitionend", () => { el.style.transitionDelay = ""; }, { once: true });
          obs.unobserve(el);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    cards.forEach((card) => obs.observe(card));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="help-page">

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="hwh-hero">
        <div className="hwh-hero-inner">
          <div className="hwh-hero-left">
            <p className="hwh-eyebrow-pill">How We Help</p>
            <h1>
              Focused<br />
              <em className="hwh-accent-text">expertise.</em>
              <br />Decisive results.
            </h1>
          </div>

          <div className="hwh-hero-right">
            <div className="hwh-hero-divider" aria-hidden="true" />
            <div className="hwh-hero-right-content">
              <p>
                We help leadership teams clarify choices, design practical
                transformation, and mobilise people around work that matters.
                Our services move from insight to action.
              </p>
              <div className="hwh-hero-actions">
                <Link className="hwh-btn-primary" href="/contact">
                  Connect With Us
                </Link>
                <Link className="hwh-btn-ghost" href="#services">
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES: Bento Box ──────────────────────────────────── */}
      <section className="hwh-services" id="services">
        <div className="hwh-services-hd">
          <div>
            <p className="hwh-section-eyebrow">Capabilities</p>
            <h2>How we help</h2>
          </div>
          <p className="hwh-services-desc">
            Focused expertise across strategy, transformation, and leadership
            alignment — rigorous thinking, practical action, lasting change.
          </p>
        </div>

        <div className="hwh-bento-grid" ref={bentoRef}>
          {serviceOfferings.map((service, index) => (
            <Link
              key={service.slug}
              href={`/how-we-help/${service.slug}`}
              className={`hwh-bento-card hwh-bento-card--${index + 1}`}
            >
              <span className="hwh-bento-num">{String(index + 1).padStart(2, "0")}</span>
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

      {/* ─── APPROACH STRIP ───────────────────────────────────────── */}
      <section className="hwh-approach">
        <div className="hwh-approach-inner">
          <div className="hwh-approach-copy">
            <p className="hwh-approach-eyebrow">Our Approach</p>
            <h2>Built for outcomes, not artifacts.</h2>
            <p>
              Every engagement balances strategic rigour with delivery
              momentum — embedded with your team, measured by what changes
              inside your organisation.
            </p>
            <Link className="hwh-approach-link" href="/how-we-work">
              See how we work
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="hwh-phases">
            {engagementPrinciples.map((statement) => (
              <div className="hwh-phase" key={statement}>
                <strong>{statement}</strong>
              </div>
            ))}
          </div>
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
          <p className="hwh-cta-eyebrow">Get started</p>
          <h2>Ready to bring clarity<br />to your next move?</h2>
          <p>
            Tell us about the challenge ahead. We will respond with a focused
            perspective on how we can help.
          </p>
          <div className="hwh-cta-actions">
            <Link className="hwh-btn-primary" href="/contact">
              Connect with us
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
