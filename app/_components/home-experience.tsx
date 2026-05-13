"use client";

import type { CSSProperties } from "react";
import { useEffect } from "react";
import Link from "next/link";

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

/* Why Choose HARTS — three pillar synthesis (People / Process / Technology).
   Each pillar consolidates the prior six benefit cards so leadership sees a
   single, executive-grade frame for our differentiation. */
const reasons = [
  {
    title: "People",
    text: "Executive alignment, human-centered transformation, and long-term partnership — we move leadership teams with shared visibility and confidence.",
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
    text: "Strategic clarity and scalable execution — frameworks engineered to simplify complexity and adapt across evolving business environments.",
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
    text: "AI-enabled intelligence and connected data — intelligent systems and operating insight built for decisive, future-ready transformation.",
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
    const heroScene = document.querySelector<HTMLElement>(".welcome-scroll-scene");
    const hero = document.querySelector<HTMLElement>(".welcome-screen");
    const nextSection = document.querySelector<HTMLElement>(".consulting-section");
    let frameId: number | null = null;
    let progress = window.scrollY > 8 ? 1 : 0;
    let isComplete = progress >= 1;
    let touchY = 0;

    if (!heroScene || !hero) return;

    const applyHeroTransition = () => {
      const textProgress = Math.max(0, Math.min(1, progress / 0.52));
      const logoBrightProgress = Math.max(0, Math.min(1, progress / 0.58));
      const logoExitProgress = Math.max(0, Math.min(1, (progress - 0.58) / 0.32));
      const sectionProgress = Math.max(0, Math.min(1, (progress - 0.50) / 0.45));
      const easedProgress = textProgress * textProgress * (3 - 2 * textProgress);
      const easedLogoBrightProgress =
        logoBrightProgress * logoBrightProgress * (3 - 2 * logoBrightProgress);
      const easedLogoExitProgress =
        logoExitProgress * logoExitProgress * (3 - 2 * logoExitProgress);
      const easedSectionProgress =
        sectionProgress * sectionProgress * (3 - 2 * sectionProgress);
      const textOpacity = Math.max(0, 1 - easedProgress);
      const logoOpacity = Math.max(
        0,
        (0.12 + easedLogoBrightProgress * 0.56) * (1 - easedLogoExitProgress),
      );

      hero.style.setProperty("--hero-progress", easedProgress.toFixed(3));
      hero.style.setProperty("--welcome-text-y", "0px");
      hero.style.setProperty("--welcome-text-scale", "1");
      hero.style.setProperty("--welcome-text-blur", "0px");
      hero.style.setProperty("--welcome-text-opacity", textOpacity.toFixed(3));
      hero.style.setProperty("--welcome-logo-y", `${(-easedLogoBrightProgress * 12).toFixed(2)}px`);
      hero.style.setProperty("--welcome-logo-scale", (0.78 + easedLogoBrightProgress * 0.82).toFixed(3));
      hero.style.setProperty("--welcome-logo-blur", `${(1.2 - easedLogoBrightProgress * 1.2 + easedLogoExitProgress * 6.5).toFixed(2)}px`);
      hero.style.setProperty("--welcome-logo-opacity", logoOpacity.toFixed(3));
      hero.style.setProperty("--welcome-logo-brightness", (0.96 + easedLogoBrightProgress * 0.18 + easedLogoExitProgress * 0.08).toFixed(3));
      hero.style.setProperty("--welcome-surface-opacity", (1 - easedSectionProgress * 0.98).toFixed(3));
      hero.style.setProperty("--welcome-bg-opacity", (1 - easedSectionProgress * 0.98).toFixed(3));
      hero.classList.toggle("intro-complete", progress >= 0.995);

      nextSection?.style.setProperty(
        "--consulting-brightness",
        (0.42 + easedSectionProgress * 0.58).toFixed(3),
      );
      nextSection?.style.setProperty(
        "--consulting-opacity",
        (0.18 + easedSectionProgress * 0.82).toFixed(3),
      );

      frameId = null;
    };

    const requestHeroTransition = () => {
      if (frameId === null) {
        frameId = window.requestAnimationFrame(applyHeroTransition);
      }
    };

    const advanceIntro = (delta: number) => {
      progress = Math.max(0, Math.min(1, progress + delta));
      isComplete = progress >= 1;
      requestHeroTransition();
    };

    const shouldLockHero = () =>
      !isComplete && window.scrollY <= heroScene.offsetTop + 2;

    const handleWheel = (event: WheelEvent) => {
      if (!shouldLockHero()) return;

      event.preventDefault();
      advanceIntro(event.deltaY / 380);
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchY = event.touches[0]?.clientY ?? 0;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!shouldLockHero()) return;

      const nextY = event.touches[0]?.clientY ?? touchY;
      const delta = touchY - nextY;
      touchY = nextY;
      event.preventDefault();
      advanceIntro(delta / 340);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (!shouldLockHero()) return;

      const forwardKeys = ["ArrowDown", "PageDown", " ", "Spacebar"];
      const backwardKeys = ["ArrowUp", "PageUp"];

      if (forwardKeys.includes(event.key)) {
        event.preventDefault();
        advanceIntro(0.28);
      }

      if (backwardKeys.includes(event.key)) {
        event.preventDefault();
        advanceIntro(-0.28);
      }
    };

    const keepHeroPinned = () => {
      if (shouldLockHero() && window.scrollY > heroScene.offsetTop) {
        window.scrollTo(0, heroScene.offsetTop);
      }
    };

    applyHeroTransition();
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", keepHeroPinned, { passive: true });
    window.addEventListener("resize", requestHeroTransition);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", keepHeroPinned);
      window.removeEventListener("resize", requestHeroTransition);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

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
      <section className="welcome-scroll-scene" id="hero">
        <div className="welcome-screen">
          <div className="welcome-logo-backdrop" aria-hidden="true" />
          <div className="welcome-content">
            <p className="welcome-kicker">Strategy. Transformation. Clarity.</p>
            <h1>
              <span className="welcome-title-soft">Welcome to</span>
              <span className="welcome-title-strong">HARTS</span>
            </h1>
            <p>
              Purpose-led consulting for leaders shaping decisive, durable change.
            </p>
          </div>
          <div className="welcome-scroll-cue" aria-hidden="true">
            <span className="welcome-scroll-line"><span /></span>
          </div>
        </div>
      </section>

      <section className="consulting-section" id="consulting">
        <div className="consulting-copy reveal">
          
          <h2>HARTS Consulting</h2>
          <p>
            HARTS partners with leadership teams to clarify strategy, align
            stakeholders, and turn complex decisions into focused action. We
            bring structured thinking, market context, and practical operating
            discipline to moments where progress matters.
          </p>
          <Link className="solid-button large consulting-button" href="/about-us">
            About Us
          </Link>
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
              <p className="eyebrow">Challenges We Solve</p>
              <h2>We help organizations navigate complexity with clarity.</h2>
              <p>
                Organizations face increasing operational complexity,
                fragmented systems, and accelerating digital expectations. HARTS
                helps leadership teams align strategy, intelligence, and
                transformation into one connected direction.
              </p>
            </div>
            <div
              className="challenge-visual challenge-visual--premium scroll-reveal reveal-soft-up"
              style={revealStyle(2)}
              aria-label="Leaders reviewing operational insights together"
            >
              <span className="challenge-visual-offset" aria-hidden="true" />
              <span className="challenge-visual-grid" aria-hidden="true" />
            </div>
          </div>

          <p className="challenges-subheading scroll-reveal reveal-soft-up">
            Six recurring fault lines we resolve for leadership teams.
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
            <h2>A trusted transformation partner for organizations.</h2>
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
