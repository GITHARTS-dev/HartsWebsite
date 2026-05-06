"use client";

import type { CSSProperties } from "react";
import { useEffect } from "react";
import Link from "next/link";

const challenges = [
  {
    title: "Disconnected Systems",
    text: "Fragmented workflows and isolated platforms reduce visibility and slow collaboration.",
  },
  {
    title: "Slow Decision-Making",
    text: "Leaders need clearer insights and faster access to meaningful operational intelligence.",
  },
  {
    title: "Operational Inefficiencies",
    text: "Outdated processes and disconnected operations limit scalability and adaptability.",
  },
  {
    title: "Unclear Digital Direction",
    text: "Many organizations struggle to align transformation initiatives with long-term goals.",
  },
  {
    title: "Data Silos",
    text: "Disconnected data sources create gaps in visibility and enterprise-wide understanding.",
  },
  {
    title: "Transformation Visibility",
    text: "Organizations need measurable clarity into transformation progress and outcomes.",
  },
];

const reasons = [
  {
    title: "Strategic Clarity",
    text: "We simplify complexity and help organizations focus on meaningful transformation priorities.",
    direction: "from-left",
  },
  {
    title: "Human-Centered Transformation",
    text: "We combine technology, operational thinking, and human experience into every engagement.",
    direction: "from-bottom",
  },
  {
    title: "Scalable Execution",
    text: "Our frameworks are designed to adapt and scale across evolving business environments.",
    direction: "from-right",
  },
  {
    title: "Executive Alignment",
    text: "We help leadership teams move with shared visibility, direction, and confidence.",
    direction: "from-left",
  },
  {
    title: "AI-Enabled Intelligence",
    text: "We integrate intelligent systems and data-driven insights into future-ready operations.",
    direction: "from-bottom",
  },
  {
    title: "Long-Term Partnership",
    text: "HARTS supports organizations beyond implementation through continuous transformation.",
    direction: "from-right",
  },
];

function revealStyle(index = 0): CSSProperties {
  return { "--reveal-delay": `${index * 90}ms` } as CSSProperties;
}

export function HomeExperience() {
  useEffect(() => {
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(".scroll-reveal"),
    );

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.18 },
    );

    revealItems.forEach((item) => observer.observe(item));

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
      observer.disconnect();
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
      <section className="welcome-screen" id="hero">
        <div className="welcome-logo-backdrop" aria-hidden="true" />
        <div className="welcome-content">
          <p className="welcome-kicker">Strategy. Transformation. Clarity.</p>
          <h1>Welcome to HARTS</h1>
          <p>
            Purpose-led consulting for leaders shaping decisive, durable change.
          </p>
        </div>
      </section>

      <section className="consulting-section" id="consulting">
        <div className="consulting-copy reveal">
          <p className="eyebrow">Consulting</p>
          <h2>HARTS Consulting</h2>
          <p>
            HARTS partners with leadership teams to clarify strategy, align
            stakeholders, and turn complex decisions into focused action. We
            bring structured thinking, market context, and practical operating
            discipline to moments where progress matters.
          </p>
          <a className="solid-button large consulting-button" href="/about">
            About Us
          </a>
        </div>
        <div
          className="consulting-visual reveal delay-one"
          aria-label="Consulting team shaping an enterprise strategy"
        >
          <div className="visual-card">
            <span>Enterprise Strategy</span>
            <strong>Clear decisions, aligned execution.</strong>
          </div>
        </div>
      </section>

      <section className="vision-statement-section" id="vision">
        <div className="vision-statement reveal">
          <p className="eyebrow">Vision</p>
          <h2>
            To help ambitious organizations move through uncertainty with
            clarity, purpose, and measurable confidence.
          </h2>
        </div>
      </section>

      <section className="home-premium-section challenges-section parallax-section" id="challenges">
        <div className="section-orb orb-one" aria-hidden="true" />
        <div className="home-section-shell">
          <div className="home-section-heading scroll-reveal">
            <p className="eyebrow">Challenges We Solve</p>
            <h2>We help organizations navigate complexity with clarity.</h2>
            <p>
              Modern organizations face increasing operational complexity,
              fragmented systems, and accelerating digital expectations. HARTS
              helps leadership teams align strategy, intelligence, and
              transformation into one connected direction.
            </p>
          </div>

          <div className="challenge-grid">
            {challenges.map((item, index) => (
              <article
                className="premium-info-card challenge-card scroll-reveal reveal-soft-up"
                key={item.title}
                style={revealStyle(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
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
            <h2>A trusted transformation partner for modern organizations.</h2>
          </div>

          <div className="choose-network" aria-hidden="true" />
          <div className="choose-grid">
            {reasons.map((item, index) => (
              <article
                className={`premium-info-card choose-card scroll-reveal reveal-${item.direction}`}
                key={item.title}
                style={revealStyle(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
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
            <Link className="solid-button large magnetic-button glow-button" href="/contact">
              Schedule Consultation
            </Link>
            <Link className="outline-button large magnetic-button ghost-glow-button" href="/contact">
              Connect With Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
