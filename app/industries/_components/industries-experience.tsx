"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect } from "react";
import Link from "next/link";
import {
  Car,
  Plane,
  Flame,
  HeartPulse,
  FlaskConical,
  Dna,
  Zap,
  Cpu,
  Radio,
  TramFront,
} from "lucide-react";

import { PageHero } from "../../_shared/layout/page-hero";

const SECTOR_ICON_SIZE = 26;
const SECTOR_ICON_STROKE = 1.6;

type Sector = {
  title: string;
  text: string;
  icon: ReactNode;
  href: string;
};

const sectors: Sector[] = [
  {
    title: "Automotive",
    text: "Manufacturing transformation, mobility innovation, and enterprise-wide modernisation across automotive ecosystems.",
    icon: <Car size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
    href: "/industries/automotive",
  },
  {
    title: "Aerospace",
    text: "Engineering collaboration, supply-chain visibility, and transformation governance for precision-driven aerospace enterprises.",
    icon: <Plane size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
    href: "/industries/aerospace",
  },
  {
    title: "Oil & Gas",
    text: "Operational excellence, asset performance, and disciplined modernisation across upstream, midstream, and downstream operations.",
    icon: <Flame size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
    href: "/industries/oil-gas",
  },
  {
    title: "Healthcare",
    text: "Care-delivery transformation, operating-model design, and digital enablement for hospital systems and provider networks.",
    icon: <HeartPulse size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
    href: "/industries/healthcare",
  },
  {
    title: "Chemicals",
    text: "Process optimisation, safety governance, and scalable transformation across complex chemical-manufacturing networks.",
    icon: <FlaskConical size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
    href: "/industries/chemicals",
  },
  {
    title: "Life Sciences",
    text: "Pipeline acceleration, regulatory rigour, and operating-model modernisation across pharma, biotech, and medical-device organisations.",
    icon: <Dna size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
    href: "/industries/life-sciences",
  },
  {
    title: "Energy",
    text: "Transition strategy, grid modernisation, and enterprise transformation across conventional, renewable, and integrated energy portfolios.",
    icon: <Zap size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
    href: "/industries/energy",
  },
  {
    title: "Technology",
    text: "Operating-model design, growth scaling, and platform transformation for high-velocity technology enterprises.",
    icon: <Cpu size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
    href: "/industries/technology",
  },
  {
    title: "Telecommunications",
    text: "Network modernisation, customer-experience transformation, and operating discipline across communications enterprises.",
    icon: <Radio size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
    href: "/industries/telecom",
  },
  {
    title: "Transportation",
    text: "Operational scalability, logistics modernisation, and digital enablement across rail, road, port, and multi-modal networks.",
    icon: <TramFront size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
    href: "/industries/transportation",
  },
];

function revealDelay(index: number): CSSProperties {
  return { "--industry-delay": `${index * 70}ms` } as CSSProperties;
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
      <PageHero
        scene="industries"
        eyebrow="Where We Engage"
        titleSoft="Industry expertise."
        titleStrong="Enterprise impact."
        subtitle="HARTS partners with leadership teams across regulated, capital-intensive, and digitally evolving industries — helping organisations align strategy, operations, and transformation execution."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Where We Engage" },
        ]}
        actions={
          <>
            <Link className="solid-button large" href="#industry-sectors">
              Explore sectors
            </Link>
            <Link className="outline-button large" href="/contact">
              Schedule consultation
            </Link>
          </>
        }
      />

      <section
        className="industry-grid-section industry-grid-section--premium"
        id="industry-sectors"
        aria-label="Industry sectors"
      >
        <div className="industry-grid-shell">
          <div className="industry-grid-heading industry-reveal">
            <p className="eyebrow">Sector Coverage</p>
            <h2>Ten industries. One disciplined approach.</h2>
            <p>
              Whether the work calls for regulated rigour, capital-intensive
              operational excellence, or fast-moving digital transformation, the
              HARTS operating playbook adapts to industry reality.
            </p>
          </div>

          <div className="industry-card-grid industry-card-grid--ten">
            {sectors.map((sector, index) => (
              <Link
                className="industry-sector-card industry-sector-card--premium industry-reveal"
                key={sector.title}
                style={revealDelay(index)}
                href={sector.href}
              >
                <span className="industry-sector-icon-wrap" aria-hidden="true">
                  {sector.icon}
                </span>
                <h3>{sector.title}</h3>
                <p>{sector.text}</p>
                <span className="industry-sector-arrow" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-final-cta" aria-labelledby="industry-cta-heading">
        <div className="industry-final-cta-inner industry-reveal">
          <p className="eyebrow">Work with HARTS</p>
          <h2 id="industry-cta-heading">
            Ready to navigate transformation with clarity?
          </h2>
          <p>
            HARTS partners with organisations navigating operational complexity,
            transformation pressure, and evolving strategic priorities.
          </p>
          <div className="industry-final-cta-actions">
            <Link className="solid-button large" href="/contact">
              Connect with HARTS
            </Link>
            <Link className="outline-button large" href="/how-we-help">
              Explore services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
