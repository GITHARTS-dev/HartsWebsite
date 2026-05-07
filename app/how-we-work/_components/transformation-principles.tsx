"use client";

import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";

const principles = [
  {
    title: "Clarity Before Complexity",
    text: "We simplify transformation into actionable direction instead of introducing unnecessary operational complexity.",
  },
  {
    title: "Strategy With Execution",
    text: "Every strategy should translate into measurable operational progress and real organizational movement.",
  },
  {
    title: "Human-Centered Thinking",
    text: "Transformation succeeds when people, systems, and processes move together with clarity and alignment.",
  },
  {
    title: "Adaptive Systems",
    text: "Organizations must continuously evolve in response to changing operational and technological environments.",
  },
  {
    title: "Long-Term Perspective",
    text: "We design transformation strategies that create sustainable momentum beyond initial implementation.",
  },
];

function revealStyle(index = 0): CSSProperties {
  return { "--reveal-delay": `${index * 90}ms` } as CSSProperties;
}

export function TransformationPrinciples() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const revealItems = Array.from(
      section.querySelectorAll<HTMLElement>(".scroll-reveal"),
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

    return () => observer.disconnect();
  }, []);

  return (
    <section className="work-principles" ref={sectionRef}>
      <div className="work-principles-copy scroll-reveal reveal-from-left">
        <p className="eyebrow">Our Principles</p>
        <h2>Principles That Guide Transformation</h2>
        <p>
          HARTS approaches transformation through clarity, collaboration,
          adaptability, and long-term thinking — helping organizations move
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
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{principle.title}</h3>
            <p>{principle.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
