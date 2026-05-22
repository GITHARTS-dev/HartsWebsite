"use client";

import type { CSSProperties } from "react";
import { useEffect } from "react";
import Link from "next/link";

import { PageHero } from "../_shared/layout/page-hero";
import { services } from "../_data/services";
import { domains } from "../_data/domains";

function revealStyle(index = 0): CSSProperties {
  return { "--reveal-delay": `${index * 90}ms` } as CSSProperties;
}

const botSteps = [
  {
    title: "Build",
    text: "We define scope, transfer knowledge in, design OKRs and the SLAs your new function will run on - alongside your team, not for them.",
  },
  {
    title: "Operate",
    text: "We stabilise the process, shadow your people, and execute SLAs in practice - carrying the weight through transition.",
  },
  {
    title: "Transfer",
    text: "Transition, hypercare, steady-state. We hand over a functioning capability your organisation owns and runs without us.",
  },
];

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
        titleSoft="Strategic Expertise."
        titleStrong="Building Future Enterprises."
        subtitle="Empowering organizations to navigate complexity, accelerate transformation, and build sustainable competitive advantage in a rapidly evolving world."
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

      {/* ─── WHAT WE DELIVER (6 services) ─────────────────────────────── */}
      <section
        className="home-premium-section challenges-section parallax-section"
        id="what-we-deliver"
      >
        <div className="section-orb orb-one" aria-hidden="true" />
        <div className="home-section-shell">
          <div className="home-section-heading scroll-reveal">
            <p className="eyebrow">What We Deliver</p>
            <h2>Six services. One unbroken thread.</h2>
            <p>
              Each one built and run by people who have sat in the operator&apos;s chair.
              No generalists. No detached strategy decks. Six disciplined practices that
              connect strategy to outcomes your team owns.
            </p>
          </div>

          <div className="challenge-grid">
            {services.map((svc, index) => (
              <Link
                key={svc.slug}
                href={`/what-we-deliver/${svc.slug}`}
                className="premium-info-card challenge-card scroll-reveal reveal-soft-up"
                style={revealStyle(index)}
              >
                <span className="card-icon-only" aria-hidden="true">
                  <strong style={{ fontFamily: "DM Sans", fontSize: 13, fontWeight: 800, color: "#E7473C" }}>
                    {svc.num}
                  </strong>
                </span>
                <h3>{svc.title}</h3>
                <p>{svc.line}</p>
              </Link>
            ))}
          </div>

          <div className="challenges-subheading-block" style={{ marginTop: 28 }}>
            <Link className="outline-button magnetic-button" href="/what-we-deliver">
              See all six services
            </Link>
          </div>
        </div>
      </section>

      {/* ─── HOW WE DELIVER (BOT) ─────────────────────────────────────── */}
      <section
        className="home-premium-section choose-section parallax-section"
        id="how-we-deliver"
      >
        <div className="section-orb orb-two" aria-hidden="true" />
        <div className="home-section-shell">
          <div className="home-section-heading centered scroll-reveal">
            <p className="eyebrow">How We Deliver</p>
            <h2>Build. Operate. Transfer.</h2>
            <p style={{ maxWidth: 640, margin: "0 auto" }}>
              The Build–Operate–Transfer methodology is the spine of every HARTS engagement.
              We don&apos;t advise and leave. We build the capability, run it through transition,
              and hand it over to your team.
            </p>
          </div>

          <div className="choose-network" aria-hidden="true" />
          <div className="choose-grid">
            {botSteps.map((step, index) => (
              <article
                key={step.title}
                className="premium-info-card choose-card scroll-reveal reveal-soft-up"
                style={revealStyle(index)}
              >
                <span className="card-icon-only" aria-hidden="true">
                  <strong style={{ fontFamily: "DM Sans", fontSize: 13, fontWeight: 800, color: "#E7473C" }}>
                    {`0${index + 1}`}
                  </strong>
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <div className="challenges-subheading-block" style={{ marginLeft: -250, marginTop: 28, textAlign: "center" }}>
            <Link className="outline-button magnetic-button" href="/how-we-deliver">
              See how the methodology works
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHERE WE DELIVER (3 domains) ─────────────────────────────── */}
      <section
        className="home-premium-section challenges-section parallax-section"
        id="where-we-deliver"
      >
        <div className="section-orb orb-one" aria-hidden="true" />
        <div className="home-section-shell">
          <div className="home-section-heading scroll-reveal">
            <p className="eyebrow">Where We Deliver</p>
            <h2>Three moments. One partner across all of them.</h2>
            <p>
              HARTS organises around where you are, not what we sell. Setup, Develop,
              Scale Up - one capability, one engagement model, three moments of intervention.
            </p>
          </div>

          <div className="choose-grid">
            {domains.map((d, index) => (
              <Link
                key={d.id}
                href={`/where-we-deliver#${d.slug}`}
                className="premium-info-card choose-card scroll-reveal reveal-soft-up"
                style={revealStyle(index)}
              >
                <span className="card-icon-only" aria-hidden="true">
                  <strong style={{ fontFamily: "DM Sans", fontSize: 13, fontWeight: 800, color: "#E7473C" }}>
                    {`0${index + 1}`}
                  </strong>
                </span>
                <h3>{d.label}</h3>
                <p>{d.body}</p>
              </Link>
            ))}
          </div>

          <div className="challenges-subheading-block" style={{ marginTop: 28 }}>
            <Link className="outline-button magnetic-button" href="/where-we-deliver">
              Explore the three domains
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PARTNER CTA (kept) ───────────────────────────────────────── */}
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
