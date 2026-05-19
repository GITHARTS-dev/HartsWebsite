"use client";

import type { CSSProperties, ReactNode } from "react";
import { Compass, Target, Users, RefreshCw, Telescope } from "lucide-react";

const ICON_SIZE = 28;
const ICON_STROKE = 1.6;

const principles: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Clarity Before Complexity",
    text: "We simplify transformation into actionable direction instead of introducing unnecessary operational complexity.",
    icon: <Compass size={ICON_SIZE} strokeWidth={ICON_STROKE} aria-hidden="true" />,
  },
  {
    title: "Strategy With Execution",
    text: "Every strategy should translate into measurable operational progress and real organizational movement.",
    icon: <Target size={ICON_SIZE} strokeWidth={ICON_STROKE} aria-hidden="true" />,
  },
  {
    title: "Human-Centered Thinking",
    text: "Transformation succeeds when people, systems, and processes move together with clarity and alignment.",
    icon: <Users size={ICON_SIZE} strokeWidth={ICON_STROKE} aria-hidden="true" />,
  },
  {
    title: "Adaptive Systems",
    text: "Organizations must continuously evolve in response to changing operational and technological environments.",
    icon: <RefreshCw size={ICON_SIZE} strokeWidth={ICON_STROKE} aria-hidden="true" />,
  },
  {
    title: "Long-Term Perspective",
    text: "We design transformation strategies that create sustainable momentum beyond initial implementation.",
    icon: <Telescope size={ICON_SIZE} strokeWidth={ICON_STROKE} aria-hidden="true" />,
  },
];

function revealStyle(index = 0): CSSProperties {
  return { "--reveal-delay": `${index * 90}ms` } as CSSProperties;
}

export function TransformationPrinciples() {
  return (
    <section className="work-principles">
      <div className="work-principles-copy scroll-reveal reveal-from-left">
        <p className="eyebrow">Our Principles</p>
        <h2>Principles That Guide Transformation</h2>
        <p>
          HARTS approaches transformation through clarity, collaboration,
          adaptability, and long-term thinking - helping organizations move
          forward with confidence and connected direction.
        </p>
      </div>

      <div className="work-principles-grid">
        {principles.map((principle, index) => (
          <article
            className="premium-info-card work-principle-card scroll-reveal reveal-soft-up"
            key={principle.title}
            style={revealStyle(index)}
          >
            <span className="card-icon-only">{principle.icon}</span>
            <h3>{principle.title}</h3>
            <p>{principle.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
