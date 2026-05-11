"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { Plane, Zap, Car, ShoppingCart, Factory, HardHat } from "lucide-react";

const SECTOR_ICON_SIZE = 22;
const SECTOR_ICON_STROKE = 1.7;

const sectors: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Aerospace & Defense",
    text:
      "Supporting operational modernization, strategic coordination, and complex system transformation across mission-critical environments.",
    icon: <Plane size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
  },
  {
    title: "Energy",
    text:
      "Helping organizations navigate sustainability transitions, infrastructure modernization, and evolving operational ecosystems.",
    icon: <Zap size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
  },
  {
    title: "Automotive",
    text:
      "Enabling connected mobility transformation, operational adaptability, and next-generation manufacturing evolution.",
    icon: <Car size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
  },
  {
    title: "FMCG",
    text:
      "Improving supply-chain visibility, operational responsiveness, and large-scale organizational coordination.",
    icon: <ShoppingCart size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
  },
  {
    title: "Advanced Manufacturing",
    text:
      "Supporting industrial transformation through connected operations, adaptive systems, and scalable modernization strategies.",
    icon: <Factory size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
  },
  {
    title: "Engineering & Construction",
    text:
      "Helping organizations improve coordination, operational visibility, and transformation planning across complex delivery environments.",
    icon: <HardHat size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
  },
];

function revealDelay(index: number): CSSProperties {
  return { "--industry-delay": `${index * 95}ms` } as CSSProperties;
}

export function IndustriesExperience() {
  useEffect(() => {
    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>(".industry-reveal"),
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
      { rootMargin: "0px 0px -12% 0px", threshold: 0.16 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="industries-page">
      <section className="industries-intro-section" aria-labelledby="industries-heading">
        <div className="industries-intro-shell">
          <p className="eyebrow industry-reveal">Industries</p>
          <h1 className="industry-reveal" id="industries-heading" style={revealDelay(1)}>
            Where strategic transformation meets industry realities.
          </h1>
          <p className="industries-intro-lead industry-reveal" style={revealDelay(2)}>
            HARTS partners with organizations across industries facing operational
            complexity, evolving systems, and transformation pressure &mdash; helping
            leadership teams align strategy, operations, and long-term direction
            through connected thinking and practical execution.
          </p>
          <div className="industries-intro-actions">
            <Link
              className="solid-button large industry-reveal"
              href="#industry-sectors"
              style={revealDelay(3)}
            >
              Explore Sectors
            </Link>
            <Link
              className="outline-button large industry-reveal"
              href="/contact"
              style={revealDelay(4)}
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <section
        className="industry-grid-section"
        id="industry-sectors"
        aria-label="Industry sectors"
      >
        <div className="industry-grid-shell">
          <div className="industry-card-grid">
            {sectors.map((sector, index) => (
              <article
                className="industry-sector-card industry-reveal"
                key={sector.title}
                style={revealDelay(index)}
              >
                <span className="industry-sector-num">
                  <span className="industry-sector-icon">{sector.icon}</span>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2>{sector.title}</h2>
                <p>{sector.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-final-cta" aria-labelledby="industry-cta-heading">
        <div className="industry-final-cta-inner industry-reveal">
          <h2 id="industry-cta-heading">
            Ready to navigate transformation with clarity?
          </h2>
          <p>
            HARTS partners with organizations navigating operational complexity,
            transformation pressure, and evolving strategic priorities.
          </p>
          <div className="industry-final-cta-actions">
            <Link className="solid-button large" href="/contact">
              Connect With HARTS
            </Link>
            <Link className="outline-button large" href="/how-we-help">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
