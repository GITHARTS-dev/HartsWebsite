"use client";

import type { CSSProperties, ReactNode } from "react";
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
    text: "Enabling connected manufacturing, smart mobility innovation, supply-chain resilience, and enterprise-wide operational modernization across rapidly evolving global automotive ecosystems.",
    icon: <Car size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
    href: "/industries/automotive",
  },
  {
    title: "Aerospace",
    text: "Delivering engineering collaboration, operational visibility, compliance alignment, and scalable transformation governance for precision-focused aerospace and aviation enterprises worldwide.",
    icon: <Plane size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
    href: "/industries/aerospace",
  },
  {
    title: "Oil & Gas",
    text: "Driving operational excellence, asset reliability, infrastructure modernization, and intelligent performance optimization across upstream, midstream, and downstream energy operations.",
    icon: <Flame size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
    href: "/industries/oil-gas",
  },
 
  {
    title: "Chemicals",
    text: "Supporting process optimization, safety governance, regulatory compliance, and scalable operational transformation across complex and globally connected chemical manufacturing environments.",
    icon: <FlaskConical size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
    href: "/industries/chemicals",
  },
  {
    title: "Life Sciences",
    text: "Accelerating innovation, regulatory compliance, and operating-model transformation across pharmaceutical, biotechnology, healthcare, and medical-device organizations worldwide.",
    icon: <Dna size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
    href: "/industries/life-sciences",
  },
  {
    title: "Energy",
    text: "Enabling energy-transition strategies, infrastructure modernization, operational resilience, and enterprise transformation across renewable, conventional, and integrated energy ecosystems.",
    icon: <Zap size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
    href: "/industries/energy",
  },
  {
    title: "Technology",
    text: "Driving platform modernization, scalable operating models, intelligent automation, and growth transformation for rapidly evolving global technology enterprises.",
    icon: <Cpu size={SECTOR_ICON_SIZE} strokeWidth={SECTOR_ICON_STROKE} aria-hidden="true" />,
    href: "/industries/technology",
  },
  {
    title: "Telecommunications",
    text: "Strengthening network modernization, digital customer experiences, operational agility, and enterprise transformation across next-generation telecommunications ecosystems.",
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
  return (
    <main className="industries-page">
      <PageHero
        scene="industries"
        layout="split"
        eyebrow="Where We Engage"
        titleSoft="Industry Intelligence."
        titleStrong="Driving Enterprise Transformation."
        subtitle="HARTS partners with leadership teams across complex and evolving industries, helping organizations align strategy, operations, and transformation initiatives for sustainable growth and measurable impact."
        actions={
          <Link className="solid-button large" href="/contact">
            Start a Conversation
          </Link>
        }
      />

      <section
        className="industry-grid-section industry-grid-section--premium"
        id="industry-sectors"
        aria-label="Industry sectors"
      >
        <div className="industry-grid-shell">
          <div className="industry-grid-heading industry-reveal">
            <p className="eyebrow">Sector Expertise at Scale</p>
            <h2>Industry specific insight. Enterprise wide transformation.</h2>
            <p>
              HARTS adapts its consulting, operational, and technology frameworks to the realities of each industry enabling organizations to navigate complexity with clarity, resilience, and measurable impact.
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
              How we help
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
