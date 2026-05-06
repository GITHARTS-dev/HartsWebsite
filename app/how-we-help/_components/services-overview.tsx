"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { serviceOfferings } from "../../_data/services-content";

function ServiceIcon({ slug }: { slug: string }) {
  switch (slug) {
    case "market-clarity":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 12h4l3 8 4-16 3 8h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "transformation-design":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M17.5 14v7M14 17.5h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "executive-alignment":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="16" cy="7" r="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M2 20c0-3 2.5-5 6-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M22 20c0-3-2.5-5-6-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M12 20c0-3-1.5-5-4-5h4c2.5 0 4 2 4 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "growth-strategy":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 18l5-7 4 4 5-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 7h4v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "operating-model-design":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="9" y="2" width="6" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
          <rect x="2" y="16" width="6" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
          <rect x="16" y="16" width="6" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 7v3.5M12 10.5H5v5.5M12 10.5h7v5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "digital-enablement":
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M2 9l10-6 10 6-10 6L2 9z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 15l10 6 10-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

const phases = ["Diagnose", "Design", "Build", "Sustain"] as const;

export function ServicesOverview() {
  const tileGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = tileGridRef.current;
    if (!grid || typeof IntersectionObserver === "undefined") return;

    const tiles = Array.from(grid.querySelectorAll<HTMLElement>(".hwh-tile"));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const idx = tiles.indexOf(el);
          el.style.transitionDelay = `${idx * 70}ms`;
          el.classList.add("hwh-tile--in");
          el.addEventListener(
            "transitionend",
            () => { el.style.transitionDelay = ""; },
            { once: true }
          );
          obs.unobserve(el);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    tiles.forEach((tile) => obs.observe(tile));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="help-page">

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="hwh-hero">
        <div className="hwh-hero-copy reveal">
          <p className="eyebrow">How We Help</p>
          <h1>Focused expertise.<br />Decisive results.</h1>
          <p className="hwh-lead">
            HARTS helps leadership teams clarify choices, design practical
            transformation, and mobilise people around work that matters.
            Our services move from insight to action with discipline and
            sustained momentum.
          </p>
          <div className="hwh-hero-actions">
            <Link className="solid-button large" href="/contact">
              Start a conversation
            </Link>
            <Link className="outline-button large" href="#services">
              Explore services
            </Link>
          </div>
        </div>

        <div className="hwh-hero-visual reveal delay-one" aria-hidden="true">
          <div className="hwh-stack">
            {serviceOfferings.map((s, i) => (
              <div className={`hwh-stack-card hwh-stack-card--${i + 1}`} key={s.slug}>
                <span className="hwh-stack-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="hwh-stack-body">
                  <strong>{s.title}</strong>
                  <p>{s.summary}</p>
                </div>
                <div className="hwh-stack-icon">
                  <ServiceIcon slug={s.slug} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ────────────────────────────────────────── */}
      <section className="hwh-services" id="services">
        <div className="hwh-services-hd reveal">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2>How we help</h2>
          </div>
          <p className="hwh-services-desc">
            We bring focused expertise across strategy, transformation, and
            leadership alignment. Our approach combines rigorous thinking with
            practical action to deliver lasting change.
          </p>
        </div>

        <div className="hwh-tile-grid" ref={tileGridRef}>
          {serviceOfferings.map((service, index) => (
            <Link
              className="hwh-tile"
              href={`/how-we-help/${service.slug}`}
              key={service.slug}
            >
              <div className="hwh-tile-header">
                <div className="hwh-tile-icon" aria-hidden="true">
                  <ServiceIcon slug={service.slug} />
                </div>
                <span className="hwh-tile-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <span className="hwh-tile-explore" aria-hidden="true">
                View service
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="hwh-tile-footer reveal">
          <Link className="hwh-tile-cta-btn" href="/contact">
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
          <div className="hwh-approach-copy reveal">
            <p className="hwh-approach-eyebrow">Our Approach</p>
            <h2>From question to outcome in four phases.</h2>
            <p>
              Every engagement follows a disciplined path — diagnosis first,
              design next, then build and sustain. No shortcuts. No drift.
            </p>
            <Link className="hwh-approach-link" href="/how-we-work">
              See how we work
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="hwh-phases reveal delay-one">
            {phases.map((phase, i) => (
              <div className="hwh-phase" key={phase}>
                <span className="hwh-phase-num">{String(i + 1).padStart(2, "0")}</span>
                <strong>{phase}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────────────────── */}
      <section className="section hwh-faq">
        <div className="hwh-faq-inner">
          <div className="section-heading reveal">
            <p className="eyebrow">Questions</p>
            <h2>What leadership teams ask us.</h2>
          </div>
          <div className="hwh-faq-list">
            {faqs.map((item, i) => (
              <details
                className="hwh-faq-item reveal"
                key={i}
                style={{ animationDelay: `${i * 80}ms` }}
              >
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
        <div className="hwh-cta-inner reveal">
          <p className="eyebrow">Get started</p>
          <h2>Ready to bring clarity<br />to your next move?</h2>
          <p>
            Tell us about the challenge ahead. We will respond with a focused
            perspective on how we can help.
          </p>
          <div className="hwh-cta-actions">
            <Link className="solid-button large" href="/contact">
              Connect with us
            </Link>
            <Link className="outline-button large" href="/how-we-work">
              How we work
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
