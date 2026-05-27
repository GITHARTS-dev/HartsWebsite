"use client";

import type { CSSProperties } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { Users, Award, GitMerge, Globe, UserPlus, Target, Hammer, Settings, ArrowLeftRight, Layers, TrendingUp, Rocket } from "lucide-react";

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
  "setup": Layers,
  "develop": TrendingUp,
  "scale-up": Rocket,
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

      {/* ─── WHAT WE DELIVER (6 services) ─────────────────────────────── */}
      <section
        className="home-premium-section challenges-section parallax-section"
        id="what-we-deliver"
      >
        <div className="section-orb orb-one" aria-hidden="true" />
        <div className="home-section-shell">
          <div className="home-section-heading scroll-reveal">
            <p className="eyebrow">What We Deliver</p>
            <h2>Strategy is only valuable when operations can sustain it.</h2>
            <p>
              HARTS helps organizations build, operationalize, and scale critical business capabilities combining strategy, execution, and transition under one integrated consulting model.
            </p>
          </div>

          <div className="challenge-grid">
            {services.map((svc, index) => {
              const Icon = serviceIcons[svc.slug] ?? Users;
              return (
                <Link
                  key={svc.slug}
                  href={`/what-we-deliver/${svc.slug}`}
                  className="premium-info-card challenge-card scroll-reveal reveal-soft-up"
                  style={revealStyle(index)}
                >
                  <span className="card-icon-badge" aria-hidden="true">
                    <Icon />
                  </span>
                  <div className="card-body">
                    <h3>{svc.title}</h3>
                    <p>{svc.line}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="challenges-subheading-block" style={{ marginTop: 28 }}>
            <Link className="outline-button magnetic-button" href="/what-we-deliver">
              See all our services
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
          <div className="home-section-heading scroll-reveal">
            <p className="eyebrow">How We Deliver</p>
            <h2>Build. Operate. Transfer.</h2>
            <p>
              The Build–Operate–Transfer methodology is the spine of every HARTS engagement.
              We don&apos;t advise and leave. We build the capability, run it through transition,
              and hand it over to your team.
            </p>
          </div>

          <div className="bot-milestones">
            <div className="bot-milestones-line" aria-hidden="true" />
            {botSteps.map((step, index) => {
              const Icon = botIcons[index] ?? Hammer;
              const num = String(index + 1).padStart(2, "0");
              return (
                <article key={step.title} className="bot-milestone">
                  <div className="bot-milestone-marker">
                    <span className="bot-milestone-num">{num}</span>
                    <span className="bot-milestone-icon" aria-hidden="true">
                      <Icon />
                    </span>
                  </div>
                  <h3 className="bot-milestone-title">{step.title}</h3>
                  <p className="bot-milestone-text">{step.text}</p>
                </article>
              );
            })}
          </div>

          <div className="challenges-subheading-block" style={{ marginTop: 28 }}>
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
            {domains.map((d, index) => {
              const Icon = domainIcons[d.slug] ?? Layers;
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
