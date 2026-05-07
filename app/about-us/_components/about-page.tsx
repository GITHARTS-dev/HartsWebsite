"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const stats = [
  { value: "20+", label: "Years of practice" },
  { value: "300+", label: "Engagements delivered" },
  { value: "40+", label: "Industries served" },
  { value: "94%", label: "Client retention" },
];

const values = [
  {
    title: "What we see",
    body: "Markets shifting, organisations adapting, leaders seeking clarity amid complexity and rapid change.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "How we work",
    body: "Deep expertise combined with collaborative rigour — practical paths from strategic intent to measurable action.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Where we engage",
    body: "Across industries and functions, at the intersection where leadership conviction and execution discipline converge.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "James Hartley",
    role: "Founder & Managing Partner",
    image: "",
    linkedin: "#",
  },
  {
    name: "Sarah Okafor",
    role: "Partner, Strategy & Growth",
    image: "",
    linkedin: "#",
  },
  {
    name: "Marcus Reeves",
    role: "Partner, Transformation",
    image: "",
    linkedin: "#",
  },
  {
    name: "Priya Nair",
    role: "Director, Digital Enablement",
    image: "",
    linkedin: "#",
  },
];

function LinkedInIcon() {
  return (
    <svg
      className="au-team-li-icon"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function AboutPage() {
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observers: IntersectionObserver[] = [];

    [valuesRef.current, teamRef.current].forEach((container) => {
      if (!container) return;
      const items = Array.from(container.querySelectorAll<HTMLElement>(".au-reveal"));
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            const idx = items.indexOf(el);
            el.style.transitionDelay = `${idx * 90}ms`;
            el.classList.add("au-reveal--in");
            el.addEventListener("transitionend", () => { el.style.transitionDelay = ""; }, { once: true });
            obs.unobserve(el);
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
      );
      items.forEach((el) => obs.observe(el));
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <main className="about-page">

      {/* ─── HERO ──────────────────────────────────────────────────── */}
      <section className="au-hero">
        <div className="au-hero-inner">
          <div className="au-hero-left">
            <p className="au-eyebrow-pill">About HARTS</p>
            <h1>
              We exist<br />
              to create<br />
              <em className="au-accent">clarity.</em>
            </h1>
          </div>
          <div className="au-hero-right">
            <div className="au-hero-rule" aria-hidden="true" />
            <div className="au-hero-body">
              <p>
                HARTS was founded on a single belief: that the distance between
                strategic intent and organisational reality can be closed — with
                the right rigour, the right people, and an uncompromising focus
                on what actually moves the needle.
              </p>
              <Link className="au-btn-primary" href="/contact">
                Connect with us
              </Link>
            </div>
          </div>
        </div>

        <div className="au-stats-row">
          {stats.map((s) => (
            <div className="au-stat" key={s.label}>
              <span className="au-stat-value">{s.value}</span>
              <span className="au-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── VALUES ────────────────────────────────────────────────── */}
      <section className="au-values">
        <div className="au-section-hd">
          <p className="au-eyebrow">Our principles</p>
          <h2>How we operate in the world</h2>
          <p className="au-section-sub">
            An approach rooted in clarity, rigour, and measurable impact across every engagement.
          </p>
        </div>
        <div className="au-values-grid" ref={valuesRef}>
          {values.map((v) => (
            <div className="au-value-card au-reveal" key={v.title}>
              <div className="au-value-icon">{v.icon}</div>
              <h3 className="au-value-title">{v.title}</h3>
              <p className="au-value-body">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── TEAM ──────────────────────────────────────────────────── */}
      <section className="au-team">
        <div className="au-section-hd">
          <p className="au-eyebrow">Our people</p>
          <h2>The architects of clarity</h2>
          <p className="au-section-sub">
            A diverse team of strategists and operators united by a commitment to sustainable, measurable change.
          </p>
        </div>
        <div className="au-team-grid" ref={teamRef}>
          {team.map((member) => (
            <a
              className="au-team-card au-reveal"
              key={member.name}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
            >
              <div className="au-team-portrait">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="au-team-portrait-img"
                  />
                ) : (
                  <div className="au-team-portrait-placeholder" aria-hidden="true" />
                )}
                <div className="au-team-portrait-overlay" aria-hidden="true" />
              </div>
              <div className="au-team-info">
                <div className="au-team-name-row">
                  <p className="au-team-name">{member.name}</p>
                  <LinkedInIcon />
                </div>
                <p className="au-team-role">{member.role}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────── */}
      <section className="au-cta">
        <div className="au-cta-inner">
          <p className="au-eyebrow au-eyebrow--muted">Get started</p>
          <h2>Ready to see what's possible?</h2>
          <p>
            Let&apos;s explore how strategic clarity and disciplined execution can
            unlock new value for your organisation.
          </p>
          <div className="au-cta-actions">
            <Link className="au-btn-primary" href="/contact">
              Contact us
            </Link>
            <Link className="au-btn-ghost" href="/how-we-work">
              How we work
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
