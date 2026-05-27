"use client";

import Link from "next/link";
import { PageHero } from "../../_shared/layout/page-hero";
import { FinalCTA } from "../../_shared/layout/final-cta";
import { openings } from "../../_data/openings";

function OpeningIcon({ slug }: { slug: string }) {
  switch (slug) {
    case "transformation-operating-models":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 20v-3.5M10 20V9.5M16 20V12M22 20H2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.5 8.5 10 5l4 3 4.5-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "gcc-shared-services":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "people-talent":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
          <path d="M2 19c0-3 2.5-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M14 19c0-3 2.5-5 5-5s3 2 3 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "management-consulting":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 20v-3.5M10 20V9.5M16 20V12M22 20H2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.5 8.5 10 5l4 3 4.5-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "digital-enablement":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M16 13h5M18.5 10.5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "business-operations":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 18h16M6 18V8l6-3 6 3v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 18v-5h6v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "analytics-data-research":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 19V5M4 19h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M7 15l3-4 3 2 4-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 7h4v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "design":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 16c0-2.2 1.8-4 4-4h4c2.2 0 4 1.8 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M12 4v8M9 7h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "technology-cloud":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7.5 17h10a3.5 3.5 0 0 0 .5-6.96A4.5 4.5 0 0 0 9.2 7.2 4 4 0 0 0 7.5 17Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      );
    case "technology-ai-ml":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 3v3M12 18v3M5.2 6.2l2.1 2.1M16.7 16.7l2.1 2.1M3 12h3M18 12h3M5.2 17.8l2.1-2.1M16.7 7.3l2.1-2.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    case "product":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 19h14M7 16h10M8 13l4-8 4 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
  }
}

export function CareersPage() {
  return (
    <main className="careers-page">
      <PageHero
        scene="careers"
        layout="split"
        eyebrow="Careers"
        titleSoft="Build a career that."
        titleStrong="Defines Transformation."
        subtitle="Join a senior team of strategists, operators, and technologists shaping decisive, durable change for global leaders."
        actions={
          <>
            <Link className="solid-button large" href="#openings">
              Explore open roles
            </Link>
          </>
        }
      />

      <section className="careers-culture section" id="culture">
        <div className="careers-culture-inner">
          <p className="eyebrow">Culture</p>
          <h2>Shape the Future of Consulting.</h2>
          <p>
            We hire people who&apos;ve done the work, not people who&apos;ve studied it. HARTS
            runs on radical clarity, disciplined thinking, and a bias to ship. If you&apos;ve
            built, scaled, or turned something around - and you want to do that work for the
            clients we serve - we should talk.
          </p>
        </div>
      </section>

      <section className="careers-openings section" id="openings">
        <div className="section-heading careers-opening-heading">
          <p className="eyebrow">Openings</p>
          <h2>Where you fit in</h2>
          <p>Three roles. One mission. Find where you fit.</p>
        </div>

        <div className="careers-grid">
          {openings.map((item) => (
            <article
              className="careers-card"
              key={item.slug}
            >
              <span className="careers-card-icon" aria-hidden="true">
                <OpeningIcon slug={item.slug} />
              </span>
              <p className="careers-card-label">{item.title}</p>
              <h3>{item.role}</h3>
              <p>{item.description}</p>
              <Link className="careers-card-link" href={`/careers/apply/${item.slug}`}>
                Apply for this role
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      <FinalCTA
        eyebrow="Coming soon"
        heading="More openings will be published here shortly."
        body="If you don’t see a perfect fit yet, share your profile with us and tell us how you can contribute."
        primary={{ label: "Send your interest", href: "/contact?source=careers" }}
        secondary={{ label: "Talk to talent team", href: "/contact" }}
      />
    </main>
  );
}
