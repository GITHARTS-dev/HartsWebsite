"use client";

import type { CSSProperties } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { Users, Award, GitMerge, Globe, UserPlus, Target, Sprout, TrendingUp, LineChart } from "lucide-react";

import { PageHero } from "../_shared/layout/page-hero";
import { FinalCTA } from "../_shared/layout/final-cta";
import { services } from "../_data/services";
import { stages } from "../_data/stages";

const serviceIcons: Record<string, React.ElementType> = {
  "od-and-implementation": Users,
  "coe": Award,
  "ma-and-pmi": GitMerge,
  "gcc-and-shared-services": Globe,
  "recruitment-as-a-service": UserPlus,
  "executive-coaching": Target,
};

const stageIcons: Record<string, React.ElementType> = {
  "setup": Sprout,
  "develop": TrendingUp,
  "scale-up": LineChart,
};

function revealStyle(index = 0): CSSProperties {
  return { "--reveal-delay": `${index * 55}ms` } as CSSProperties;
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
        titleSoft="When restructuring, integration, or transformation"
        titleStrong="has to work."
        subtitle="Standing beside leaders and their teams as they build the structures, capabilities, and confidence to navigate what comes next."
        actions={
          <Link className="solid-button large" href="/contact">
            Start a Conversation
          </Link>
        }
      />

      {/* ─── WHAT WE DELIVER (editorial index list) ──────────────────── */}
      <section
        className="home-premium-section challenges-section parallax-section"
        id="what-we-deliver"
      >
        <div className="section-orb orb-one" aria-hidden="true" />
        <div className="home-section-shell">
          <div className="wd-index">
            <header className="wd-index-head">
              <p className="eyebrow">What We Deliver</p>
              <div className="wd-index-head-body">
                <h2>Strategy is only valuable when operations can sustain it.</h2>
                <p>
                  We build the operations that make strategy stick. Six capabilities, delivered end-to-end.
                </p>
              </div>
            </header>

            <ol className="wd-index-list">
              {services.slice(0, 3).map((svc) => {
                const Icon = serviceIcons[svc.slug] ?? Users;
                return (
                  <li key={svc.slug} className="wd-index-item">
                    <Link href={`/what-we-deliver/${svc.slug}`} className="wd-index-row">
                      <span className="wd-index-icon" aria-hidden="true">
                        <Icon />
                      </span>
                      <span className="wd-index-title">{svc.title}</span>
                      <span className="wd-index-desc">{svc.line}</span>
                      <span className="wd-index-arrow" aria-hidden="true">→</span>
                    </Link>
                  </li>
                );
              })}
            </ol>

            <div className="wd-index-foot">
              <Link className="wd-index-link" href="/what-we-deliver">
                View all capabilities <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WHERE YOU STAND (3 stages) ───────────────────────────────── */}
      <section
        className="home-premium-section challenges-section parallax-section"
        id="where-you-stand"
      >
        <div className="section-orb orb-one" aria-hidden="true" />
        <div className="home-section-shell">
          <div className="home-section-heading scroll-reveal">
            <p className="eyebrow">Where You Stand</p>
            <h2>Where is your business right now?</h2>
            <p>
              The engagement looks different at every stage. Find the one that fits where you actually are.
            </p>
          </div>

          <div className="choose-grid">
            {stages.map((s, index) => {
              const Icon = stageIcons[s.slug] ?? Sprout;
              return (
                <Link
                  key={s.id}
                  href={`/where-you-stand#${s.slug}`}
                  className="premium-info-card choose-card scroll-reveal reveal-soft-up"
                  style={revealStyle(index)}
                >
                  <span className="card-icon-badge" aria-hidden="true">
                    <Icon />
                  </span>
                  <div className="card-body">
                    <h3>{s.label}</h3>
                    <p>{s.body}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="challenges-subheading-block" style={{ marginTop: 28 }}>
            <Link className="outline-button magnetic-button" href="/where-you-stand">
              Explore the three stages
            </Link>
          </div>
        </div>
      </section>

      {/* ─── VISION — emotional close before the final CTA ─────────────── */}
      <section className="vision-statement-section" id="vision">
        <div className="vision-statement reveal">
          <p className="eyebrow">Our Vision</p>
          <h2>
            Bringing People Together Through Equity and Purpose to Create Lasting Value
          </h2>
        </div>
      </section>

      <FinalCTA
        eyebrow="Partner With HARTS"
        heading={<>Navigate transformation <em>with confidence.</em></>}
        body="The future belongs to organisations that adapt, evolve, and lead with clarity. HARTS helps businesses move forward with intelligent strategy and connected transformation."
        primary={{ label: "Connect With Us", href: "/contact" }}
      />
    </main>
  );
}
