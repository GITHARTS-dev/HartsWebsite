const contactLinks = [
  {
    label: "LinkedIn",
    detail: "Follow HARTS insights and leadership updates",
    href: "https://www.linkedin.com/company/harts-consulting/",
  },
  {
    label: "Email",
    detail: "hello@hartsconsulting.example",
    href: "mailto:hello@hartsconsulting.example",
  },
  {
    label: "Career",
    detail: "Explore advisory and consulting opportunities",
    href: "mailto:hello@hartsconsulting.example?subject=Career%20at%20HARTS",
    id: "career",
  },
  {
    label: "Offices",
    detail: "Find HARTS locations and regional contacts",
    href: "/contact",
  },
];

export function HomeExperience() {
  return (
    <main className="cinematic-home">
      <section className="welcome-screen" id="hero">
        <div className="welcome-logo-backdrop" aria-hidden="true" />
        <div className="welcome-content">
          <p className="welcome-kicker">Strategy. Transformation. Clarity.</p>
          <h1>Welcome to HARTS</h1>
          <p>
            Purpose-led consulting for leaders shaping decisive, durable change.
          </p>
        </div>
      </section>

      <section className="consulting-section" id="consulting">
        <div className="consulting-copy reveal">
          <p className="eyebrow">Consulting</p>
          <h2>HARTS Consulting</h2>
          <p>
            HARTS partners with leadership teams to clarify strategy, align
            stakeholders, and turn complex decisions into focused action. We
            bring structured thinking, market context, and practical operating
            discipline to moments where progress matters.
          </p>
          <a className="solid-button large consulting-button" href="/about">
            About Us
          </a>
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
          <p className="eyebrow">Vision</p>
          <h2>
            To help ambitious organizations move through uncertainty with
            clarity, purpose, and measurable confidence.
          </h2>
        </div>
      </section>

      <section className="premium-contact-section" id="contact">
        <div className="contact-intro reveal">
          <p className="eyebrow">Contact</p>
          <h2>Stay close to the work that matters.</h2>
          <p>
            Connect with HARTS for advisory conversations, leadership updates,
            career inquiries, and regional office details.
          </p>
        </div>

        <div className="premium-contact-links reveal delay-one">
          {contactLinks.map((item) => (
            <a
              className="contact-link-card"
              href={item.href}
              id={item.id}
              key={item.label}
            >
              <span>{item.label}</span>
              <strong>{item.detail}</strong>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
