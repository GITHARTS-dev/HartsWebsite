"use client";

import Link from "next/link";
import { Eye, Flame, Leaf, HeartHandshake } from "lucide-react";

import { PageHero } from "../../_shared/layout/page-hero";
import { FinalCTA } from "../../_shared/layout/final-cta";

const manifesto = [
  {
    id: "red",

    title: "Attitude of Excellence",
    desc: "Excellence is an attitude we carry across everything HARTS does. We raise the bar on quality, commitment, rigour, and the standard of outcomes we deliver for our clients.",
    icon: <Flame size={22} strokeWidth={1.7} aria-hidden="true" />,
  },
  {
    id: "yellow",

    title: "Inclusivity",
    desc: "Inclusivity is non-negotiable. Every voice is heard, every person is seen, and diversity of perspective, background, and experience is treated as a strategic strength.",
    icon: <HeartHandshake size={22} strokeWidth={1.7} aria-hidden="true" />,
  },
  {
    id: "blue",

    title: "Transparency & Communication",
    desc: "We hold ourselves to open, honest communication at every level. Trust is built and sustained through how leadership, teams, and external partners actually talk to each other.",
    icon: <Eye size={22} strokeWidth={1.7} aria-hidden="true" />,
  },
  {
    id: "green",

    title: "Well Being",
    desc: "We champion the well-being of every individual within the organisation. A healthy, supportive, balanced environment is how people thrive, and how good work gets done.",
    icon: <Leaf size={22} strokeWidth={1.7} aria-hidden="true" />,
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
    linkedin: "https://www.linkedin.com/in/cmargaretic/",
  },
  {
    name: "Savio James Abraham",
    role: "Chief Operating Officer",
    intro: "Builds the operational discipline that converts strategic intent into measurable progress.",
    image: "/team/savio-abraham.png",
    linkedin: "https://www.linkedin.com/in/savio-james-abraham/",
  },
  {
    name: "Flavio Gall",
    role: "Director, Business Development",
    intro: "Partners with leadership teams on growth, market clarity, and long-horizon strategy.",
    image: "/team/flavio.png",
    linkedin: "https://www.linkedin.com/in/flavio-gall/",
  },
];

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
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
        titleStrong="Clarity."
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
              HARTS is a boutique strategy and transformation consulting firm.
              We partner with leadership teams navigating moments of decisive
              change: restructuring, expansion, post-merger integration,
              modernisation, and the messy middle of transformation. Our craft
              is helping organisations think clearly, decide deliberately, and
              execute with operating discipline.
            </p>
            <p>
              We are a senior team of strategists, operators, and technologists.
              We work side by side with our clients, leave capability behind, and
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

      <section className="au-roster">
        <div className="au-roster-shell">
          <header className="au-roster-head">
            <div className="au-roster-head-left">
              <p className="au-eyebrow">Leadership</p>
              <div className="au-roster-eyebrow-line" aria-hidden="true" />
              <h2>
                Leadership with<br />
                <em>depth and direction.</em>
              </h2>
            </div>
            <p className="au-roster-sub">
              Across industries and markets, our leadership team combines deep
              operational experience with a shared commitment to building
              resilient, future-ready organisations.
            </p>
          </header>

          <div className="au-leadership-grid">
            {team.map((member) => (
              <div key={member.name} className="au-leader-card">
                <div className="au-leader-photo-wrap">
                  <svg className="au-leader-arc" viewBox="0 0 188 188" fill="none" aria-hidden="true">
                    <circle
                      cx="94" cy="94" r="87"
                      stroke="rgba(231,71,60,0.22)"
                      strokeWidth="1.5"
                      strokeDasharray="468 82"
                      strokeLinecap="round"
                    />
                    <circle cx="157" cy="36" r="4" fill="#E7473C" />
                  </svg>
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.role} at HARTS Consulting`}
                      className="au-leader-photo"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <span className="au-leader-initials">
                      {member.name.split(" ").map((p) => p[0]).slice(0, 2).join("")}
                    </span>
                  )}
                </div>
                <div className="au-leader-info">
                  <p className="au-leader-name">{member.name}</p>
                  <p className="au-leader-role">{member.role}</p>
                  <div className="au-leader-divider" aria-hidden="true" />
                  <p className="au-leader-bio">{member.intro}</p>
                </div>
                {member.linkedin && member.linkedin !== "#" ? (
                  <a
                    className="au-leader-li"
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <LinkedInIcon />
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Manifesto Teams ─────────────────────────────────────────── */}
      <section className="au-manifesto" aria-labelledby="manifesto-heading">
        <div className="au-manifesto-shell">
          <div className="au-manifesto-hd">
            <p className="au-eyebrow">Our Values</p>
            <h2 id="manifesto-heading">The HARTS Ethos</h2>
            <p className="au-manifesto-sub">
              Four principles that shape how we lead, collaborate, and deliver lasting impact.
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

      <FinalCTA
        heading={<>The right partner <em>changes everything.</em></>}
        // heading="The right partner changes everything."
        body="Connect with HARTS to explore how strategic clarity and disciplined execution can unlock transformative value for your organisation."
        primary={{ label: "Connect With HARTS", href: "/contact" }}
        secondary={{ label: "What We Deliver", href: "/what-we-deliver" }}
      />
    </main>
  );
}
