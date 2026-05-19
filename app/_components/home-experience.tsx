"use client";

import type { CSSProperties } from "react";
import { useEffect } from "react";
import Link from "next/link";

import { PageHero } from "../_shared/layout/page-hero";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  width: 15,
  height: 15,
  "aria-hidden": true as const,
};

const strokeProps = {
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const challenges = [
  {
    title: "Disconnected Systems",
    text: "Fragmented workflows and isolated platforms reduce visibility and slow collaboration.",
    icon: (
      <svg {...iconProps}>
        <circle cx="6" cy="12" r="2.5" {...strokeProps} />
        <circle cx="18" cy="12" r="2.5" {...strokeProps} />
        <path d="M9 12h2M13 12h2" {...strokeProps} />
      </svg>
    ),
  },
  {
    title: "Slow Decision-Making",
    text: "Leaders need clearer insights and faster access to meaningful operational intelligence.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="8.5" {...strokeProps} />
        <path d="M12 7.5v5l3 2" {...strokeProps} />
      </svg>
    ),
  },
  {
    title: "Operational Inefficiencies",
    text: "Outdated processes and disconnected operations limit scalability and adaptability.",
    icon: (
      <svg {...iconProps}>
        <path d="M3 7l9-4 9 4-9 4-9-4z" {...strokeProps} />
        <path d="M3 12l9 4 9-4M3 17l9 4 9-4" {...strokeProps} />
      </svg>
    ),
  },
  {
    title: "Unclear Digital Direction",
    text: "Many organizations struggle to align transformation initiatives with long-term goals.",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" {...strokeProps} />
        <path d="M15.5 8.5l-2.2 5.3-5.3 2.2 2.2-5.3 5.3-2.2z" {...strokeProps} />
      </svg>
    ),
  },
  {
    title: "Data Silos",
    text: "Disconnected data sources create gaps in visibility and enterprise-wide understanding.",
    icon: (
      <svg {...iconProps}>
        <ellipse cx="12" cy="5" rx="7.5" ry="2.5" {...strokeProps} />
        <path
          d="M4.5 5v6c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5V5M4.5 11v6c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-6"
          {...strokeProps}
        />
      </svg>
    ),
  },
  {
    title: "Transformation Visibility",
    text: "Organizations need measurable clarity into transformation progress and outcomes.",
    icon: (
      <svg {...iconProps}>
        <path d="M3 17l5-5 4 4 8-8" {...strokeProps} />
        <path d="M14 8h6v6" {...strokeProps} />
      </svg>
    ),
  },
];

/* Why Choose HARTS — three pillar synthesis (People / Process / Technology). */
const reasons = [
  {
    title: "People",
    text: "Executive alignment, leadership development, and people-centered transformation that strengthen collaboration, adaptability, and long-term organizational resilience. We help teams navigate change with confidence and shared clarity.",
    direction: "from-left",
    icon: (
      <svg {...iconProps}>
        <circle cx="9" cy="8.5" r="3" {...strokeProps} />
        <path d="M3.5 19a5.5 5.5 0 0 1 11 0" {...strokeProps} />
        <circle cx="17" cy="10" r="2.5" {...strokeProps} />
        <path d="M15 19a4 4 0 0 1 6.5-1.5" {...strokeProps} />
      </svg>
    ),
  },
  {
    title: "Process",
    text: "Strategic frameworks and scalable operating models engineered to simplify complexity, improve execution, and accelerate business performance across evolving operational environments.",
    direction: "from-bottom",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" {...strokeProps} />
        <circle cx="12" cy="12" r="5" {...strokeProps} />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Technology",
    text: "AI-enabled intelligence, connected systems, and integrated data ecosystems that empower organizations with real-time insight, smarter decisions, and future-ready transformation.",
    direction: "from-right",
    icon: (
      <svg {...iconProps}>
        <rect x="6" y="6" width="12" height="12" rx="2" {...strokeProps} />
        <rect x="10" y="10" width="4" height="4" {...strokeProps} />
        <path d="M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3" {...strokeProps} />
      </svg>
    ),
  },
];

function revealStyle(index = 0): CSSProperties {
  return { "--reveal-delay": `${index * 90}ms` } as CSSProperties;
}

export function HomeExperience() {
  useEffect(() => {
    const parallaxSections = Array.from(
      document.querySelectorAll<HTMLElement>(".parallax-section"),
    );
    const moveSection = (event: PointerEvent) => {
      const section = event.currentTarget as HTMLElement;
      const rect = section.getBoundingClientRect();
      section.style.setProperty(
        "--cursor-x",
        `${((event.clientX - rect.left) / rect.width - 0.5).toFixed(3)}`,
      );
      section.style.setProperty(
        "--cursor-y",
        `${((event.clientY - rect.top) / rect.height - 0.5).toFixed(3)}`,
      );
    };

    parallaxSections.forEach((section) => {
      section.addEventListener("pointermove", moveSection);
    });

    const magneticLinks = Array.from(
      document.querySelectorAll<HTMLElement>(".magnetic-button"),
    );
    const moveMagnet = (event: PointerEvent) => {
      const link = event.currentTarget as HTMLElement;
      const rect = link.getBoundingClientRect();
      link.style.setProperty("--magnet-x", `${(event.clientX - rect.left - rect.width / 2) * 0.12}px`);
      link.style.setProperty("--magnet-y", `${(event.clientY - rect.top - rect.height / 2) * 0.18}px`);
    };
    const clearMagnet = (event: PointerEvent) => {
      const link = event.currentTarget as HTMLElement;
      link.style.setProperty("--magnet-x", "0px");
      link.style.setProperty("--magnet-y", "0px");
    };

    magneticLinks.forEach((link) => {
      link.addEventListener("pointermove", moveMagnet);
      link.addEventListener("pointerleave", clearMagnet);
    });

    return () => {
      parallaxSections.forEach((section) => {
        section.removeEventListener("pointermove", moveSection);
      });
      magneticLinks.forEach((link) => {
        link.removeEventListener("pointermove", moveMagnet);
        link.removeEventListener("pointerleave", clearMagnet);
      });
    };
  }, []);

  return (
    <main className="cinematic-home">
      <PageHero
        scene="home"
        layout="split"
        eyebrow="Strategy. Transformation. Clarity."
        titleSoft="Welcome to"
        titleStrong="HARTS"
        subtitle="Transforming ambitious organizations into resilient, future-ready enterprises."
        actions={
          <Link className="solid-button large" href="/contact">
            Connect with us
          </Link>
        }
      />

      <section className="vision-statement-section" id="vision">
        <div className="vision-statement reveal">
          <p className="eyebrow">Our Vision</p>
          <h2>
            Bringing People Together Through Equity and Purpose to Create Lasting Value
          </h2>
        </div>
      </section>

      <section className="home-premium-section challenges-section parallax-section" id="challenges">
        <div className="section-orb orb-one" aria-hidden="true" />
        <div className="home-section-shell">
          <div className="challenges-intro">
            <div className="home-section-heading scroll-reveal">
              <p className="eyebrow">Strategic Challenges We Solve</p>
              <h2>Navigating Complexity with Confidence.</h2>
              <p>
                Organizations today face operational complexity, fragmented systems, and rapidly evolving expectations. HARTS helps leadership teams align strategy, transformation, and execution into one connected direction for sustainable growth.
              </p>
            </div>
           
            <div className="challenge-image-wrap">
              <span className="challenge-image-accent" aria-hidden="true" />
              <div className="challenge-image-frame">
                <img
                  src="/images/home-page-discussion.jpg"
                  alt="HARTS strategy consultants collaborating on enterprise challenges"
                />
                {/* <div className="challenge-image-badge" aria-hidden="true">
                  <span className="badge-number">6</span>
                  <span className="badge-label">Challenges<br />We&nbsp;Solve</span>
                </div> */}
              </div>
            </div>
          </div>

          <p className="challenges-subheading scroll-reveal reveal-soft-up">
            Enterprise pain points we solve through strategic consulting
          </p>

          <div className="challenge-grid">
            {challenges.map((item, index) => (
              <article
                className="premium-info-card challenge-card scroll-reveal reveal-soft-up"
                key={item.title}
                style={revealStyle(index)}
              >
                <span className="card-icon-only">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-premium-section choose-section parallax-section" id="why-harts">
        <div className="section-orb orb-two" aria-hidden="true" />
        <div className="home-section-shell">
          <div className="home-section-heading centered scroll-reveal">
            <p className="eyebrow">Why Organizations Choose HARTS</p>
            <h2>A Trusted Transformation Partner for Organizations.</h2>
          </div>

          <div className="choose-network" aria-hidden="true" />
          <div className="choose-grid">
            {reasons.map((item, index) => (
              <article
                className={`premium-info-card choose-card scroll-reveal reveal-${item.direction}`}
                key={item.title}
                style={revealStyle(index)}
              >
                <span className="card-icon-only">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="partner-section parallax-section" id="partner">
        <div className="partner-content scroll-reveal">
          <p className="eyebrow">Partner With HARTS</p>
          <h2>
            <span>Navigate transformation</span>
            <span>with confidence.</span>
          </h2>
          <p>
            The future belongs to organizations that adapt, evolve, and lead
            with clarity. HARTS helps businesses move forward with intelligent
            strategy and connected transformation.
          </p>
          <div className="partner-actions">
            <Link className="outline-button large magnetic-button ghost-glow-button" href="/contact">
              Connect With Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
