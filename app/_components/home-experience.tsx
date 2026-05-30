"use client";

import type { CSSProperties } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { Users, Award, GitMerge, Globe, UserPlus, Target, Hammer, Settings, ArrowLeftRight, Sprout, TrendingUp, LineChart } from "lucide-react";

import { PageHero } from "../_shared/layout/page-hero";
import { FinalCTA } from "../_shared/layout/final-cta";
import { services } from "../_data/services";
import { domains } from "../_data/domains";

const serviceIcons: Record<string, React.ElementType> = {
  "od-and-implementation": Users,
  "coe": Award,
  "ma-and-pmi": GitMerge,
  "gcc-and-shared-services": Globe,
  "recruitment-as-a-service": UserPlus,
  "executive-coaching": Target,
};

const botIcons: React.ElementType[] = [Hammer, Settings, ArrowLeftRight];

const domainIcons: Record<string, React.ElementType> = {
  "setup": Sprout,
  "develop": TrendingUp,
  "scale-up": LineChart,
};

function revealStyle(index = 0): CSSProperties {
  return { "--reveal-delay": `${index * 55}ms` } as CSSProperties;
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

      {/* ─── WHAT WE DELIVER (split layout) ──────────────────────────── */}
      <section
        className="home-premium-section challenges-section parallax-section"
        id="what-we-deliver"
      >
        <div className="section-orb orb-one" aria-hidden="true" />
        <div className="home-section-shell">
          <div className="what-deliver-split">
            {/* Left: heading + description + CTA */}
            <div className="what-deliver-left">
              <p className="eyebrow">What We Deliver</p>
              <h2>Strategy is only valuable when operations can sustain it.</h2>
              <p>
                HARTS partners with leaders to architect, embed, and scale critical capabilities by unifying strategy, execution, and disciplined transfer under one operating model.
              </p>
              
            </div>

            {/* Right: floating diagonal card stack */}
            <div className="what-deliver-right">
              <div className="deliver-cards-stack">
                {services.slice(0, 3).map((svc, index) => {
                  const Icon = serviceIcons[svc.slug] ?? Users;
                  return (
                    <Link
                      key={svc.slug}
                      href={`/what-we-deliver/${svc.slug}`}
                      className={`deliver-float-card deliver-float-card--${index + 1}`}
                    >
                      <span className="deliver-float-icon" aria-hidden="true">
                        <Icon />
                      </span>
                      <div>
                        <h3>{svc.title}</h3>
                        <p>{svc.line}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <Link className="outline-button magnetic-button" href="/what-we-deliver">
                View all capabilities &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW WE DELIVER (BOT) ─────────────────────────────────────── */}
      {/* <section
        className="home-premium-section choose-section parallax-section"
        id="how-we-deliver"
      >
        <div className="section-orb orb-two" aria-hidden="true" />
        <div className="home-section-shell">
          <div className="home-section-heading scroll-reveal">
            <p className="eyebrow">How We Deliver</p>
            <h2>Build. Operate. Transfer.</h2>
            <p>
              The Build,Operate,Transfer (BOT) consulting methodology is the spine of every HARTS engagement.
              We don&apos;t advise and leave. We build the capability, run it through transition,
              and hand it over to your team.
            </p>
          </div>

          <div className="bot-pathway">
            <svg
              className="bot-pathway-curve"
              viewBox="0 0 1100 340"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M 40 186 L 183.33 186 C 340 186, 420 131, 550 131 S 770 76, 916.67 76 L 1056 76"
                fill="none"
                stroke="#E7473C"
                strokeWidth="1.4"
                strokeDasharray="5 7"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M 1046 67 L 1066 76 L 1046 85"
                fill="none"
                stroke="#E7473C"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            {botSteps.map((step, index) => {
              const Icon = botIcons[index] ?? Hammer;
              return (
                <article
                  key={step.title}
                  className={`bot-step bot-step--${index + 1}`}
                >
                  <span className="bot-step-icon" aria-hidden="true">
                    <Icon />
                  </span>
                  <span className="bot-step-dot" aria-hidden="true" />
                  <h3 className="bot-step-title">{step.title}</h3>
                  <p className="bot-step-text">{step.text}</p>
                </article>
              );
            })}
          </div>

          <div className="challenges-subheading-block" style={{ marginTop: 28 }}>
            <Link className="outline-button magnetic-button" href="/contact">
              Connect with us
            </Link>
          </div>
        </div>
      </section> */}

      {/* ─── WHERE WE DELIVER (3 domains) ─────────────────────────────── */}
      <section
        className="home-premium-section challenges-section parallax-section"
        id="where-we-deliver"
      >
        <div className="section-orb orb-one" aria-hidden="true" />
        <div className="home-section-shell">
          <div className="home-section-heading scroll-reveal">
            <p className="eyebrow">Where We Deliver</p>
            <h2>From setup to scale, we partner across every stage of growth.</h2>
            <p>
              HARTS organises around where you are, not what we sell. Setup, Develop,
              Scale Up; one consulting partner, one engagement model, three moments
              of intervention across your transformation lifecycle.
            </p>
          </div>

          <div className="choose-grid">
            {domains.map((d, index) => {
              const Icon = domainIcons[d.slug] ?? Sprout;
              return (
                <Link
                  key={d.id}
                  href={`/where-we-deliver#${d.slug}`}
                  className="premium-info-card choose-card scroll-reveal reveal-soft-up"
                  style={revealStyle(index)}
                >
                  <span className="card-icon-badge" aria-hidden="true">
                    <Icon />
                  </span>
                  <div className="card-body">
                    <h3>{d.label}</h3>
                    <p>{d.body}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="challenges-subheading-block" style={{ marginTop: 28 }}>
            <Link className="outline-button magnetic-button" href="/where-we-deliver">
              Explore the three domains
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA
        eyebrow="Partner With HARTS"
        heading={<>Navigate transformation <em>with confidence.</em></>}
        body="The future belongs to organizations that adapt, evolve, and lead with clarity. HARTS helps businesses move forward with intelligent strategy and connected transformation."
        primary={{ label: "Connect With Us", href: "/contact" }}
      />
    </main>
  );
}
