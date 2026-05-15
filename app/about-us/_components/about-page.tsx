"use client";

import Link from "next/link";
import { Eye, Flame, Leaf, HeartHandshake } from "lucide-react";

import { PageHero } from "../../_shared/layout/page-hero";

const manifesto = [
  {
    id: "blue",
    
    title: "Transparency & Communication",
    desc: "Ensures transparency within and beyond the organisation — fostering open, honest communication at every level so that trust is built and sustained across leadership, teams, and external partners.",
    icon: <Eye size={22} strokeWidth={1.7} aria-hidden="true" />,
  },
  {
    id: "red",
   
    title: "Attitude of Excellence",
    desc: "Sets and upholds an attitude of excellence across everything HARTS does — raising the bar on quality, commitment, rigour, and the standard of outcomes we deliver for our clients.",
    icon: <Flame size={22} strokeWidth={1.7} aria-hidden="true" />,
  },
  {
    id: "green",
    
    title: "Well Being",
    desc: "Champions the well-being of every individual within the organisation — cultivating a healthy, supportive, and balanced environment where people are genuinely cared for and can thrive.",
    icon: <Leaf size={22} strokeWidth={1.7} aria-hidden="true" />,
  },
  {
    id: "yellow",
    
    title: "Inclusivity",
    desc: "Drives inclusivity across the organisation — ensuring every voice is heard, every person is seen, and that diversity of perspective, background, and experience is celebrated as a strategic strength.",
    icon: <HeartHandshake size={22} strokeWidth={1.7} aria-hidden="true" />,
  },
];

const team = [
  {
    name: "Sreema Nallasivam",
    role: "CEO & Co-Founder",
    intro: "Two decades guiding enterprise transformation across regulated, multi-market organisations.",
    image: "/team/sreema.png",
    linkedin: "https://www.linkedin.com/in/sreema-nallasivam-6a74498/",
  },
  {
    name: "Cristian Margaretic",
    role: "CEO & Co-Founder",
    intro: "Operator-turned-advisor focused on strategy, operating models, and durable execution.",
    image: "/team/cristian.png",
    linkedin: "#",
  },
  {
    name: "Savio James Abraham",
    role: "Chief Operating Officer",
    intro: "Builds the operational discipline that converts strategic intent into measurable progress.",
    image: "/team/savio.png",
    linkedin: "https://www.linkedin.com/in/savio-james-abraham/",
  },
  {
    name: "Flavio Gall",
    role: "Director — Business Development",
    intro: "Partners with leadership teams on growth, market clarity, and long-horizon strategy.",
    image: "/team/flavio.png",
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
  return (
    <main className="about-page">
      <PageHero
        scene="about"
        layout="split"
        eyebrow="About HARTS"
        titleSoft="We exist to create"
        titleStrong="clarity."
        subtitle="HARTS closes the distance between strategic intent and organisational reality with the right rigour, the right people, and an uncompromising focus on what actually moves the needle."
        actions={
          <>
            <Link className="solid-button large" href="/contact">
              Connect with HARTS
            </Link>
          </>
        }
      />

      <section className="au-story">
        <div className="au-story-shell">
          <div className="au-story-copy">
            <p className="eyebrow">Our story</p>
            <h2>Built for the moments where progress matters.</h2>
            <p>
              HARTS partners with leadership teams navigating moments of decisive
              change — restructuring, expansion, modernisation, and the messy
              middle of transformation. Our craft is helping organisations think
              clearly, decide deliberately, and execute with operating discipline.
            </p>
            <p>
              We are a senior team of strategists, operators, and technologists.
              We work side-by-side with our clients, leave capability behind, and
              measure ourselves by the durability of the outcomes we help create.
            </p>
          </div>
          <ul className="au-story-pillars">
            <li>
              <strong>Strategic clarity</strong>
              <span>Sharper choices, calmer execution.</span>
            </li>
            <li>
              <strong>Operating discipline</strong>
              <span>Decisions translated into running cadence.</span>
            </li>
            <li>
              <strong>Capability transfer</strong>
              <span>Your teams own the outcome long after we leave.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="au-team">
        <div className="au-section-hd">
          <p className="au-eyebrow">Our people</p>
          <h2>The architects of clarity</h2>
          <p className="au-section-sub">
            A senior team of strategists and operators united by a commitment to
            sustainable, measurable change.
          </p>
        </div>
        <div className="au-team-grid au-team-grid--premium">
          {team.map((member) => (
            <a
              className="au-team-card au-team-card--premium au-reveal"
              key={member.name}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
            >
              <div className="au-team-portrait au-team-portrait--rounded">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="au-team-portrait-img"
                  />
                ) : (
                  <div className="au-team-portrait-placeholder" aria-hidden="true">
                    <span>{member.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}</span>
                  </div>
                )}
                <div className="au-team-portrait-overlay" aria-hidden="true" />
              </div>
              <div className="au-team-info">
                <div className="au-team-name-row">
                  <p className="au-team-name">{member.name}</p>
                  <LinkedInIcon />
                </div>
                <p className="au-team-role">{member.role}</p>
                <p className="au-team-intro">{member.intro}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Manifesto Teams ─────────────────────────────────────────── */}
      <section className="au-manifesto" aria-labelledby="manifesto-heading">
        <div className="au-manifesto-shell">
          <div className="au-manifesto-hd">
            <p className="au-eyebrow">Our manifesto</p>
            <h2 id="manifesto-heading">Manifesto Team</h2>
            <p className="au-manifesto-sub">
              Four dedicated teams that represent and protect the core values
              HARTS is built on — each holding the organisation accountable to
              what matters most.
            </p>
          </div>

          <div className="au-manifesto-grid">
            {manifesto.map((item) => (
              <article
                key={item.id}
                className={`au-manifesto-card au-manifesto-card--${item.id}`}
              >
                <div className="au-manifesto-icon" aria-hidden="true">
                  {item.icon}
                </div>
                <div className="au-manifesto-body">
            
                  <h3 className="au-manifesto-title">{item.title}</h3>
                  <p className="au-manifesto-desc">{item.desc}</p>
                </div>
                <div className="au-manifesto-accent" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="au-cta">
        <div className="au-cta-inner">
          <h2>The right partner changes everything.</h2>
          <p>
            Connect with HARTS to explore how strategic clarity and disciplined
            execution can unlock transformative value for your organisation.
          </p>
          <div className="au-cta-actions">
            <Link className="solid-button large" href="/contact">
              Connect with HARTS
            </Link>
            <Link className="outline-button large" href="/how-we-work">
              How we work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
