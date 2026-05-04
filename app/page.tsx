"use client";

import { useEffect, useState } from "react";

const heroSlides = [
  {
    title: "Hear what matters",
    text: "We begin by listening to your challenges, leadership context, and goals.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1500&q=82",
  },
  {
    title: "Shape the path",
    text: "We turn complex choices into a clear agenda your team can act on.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1500&q=82",
  },
  {
    title: "Move with confidence",
    text: "We help leaders mobilize decisions, governance, and measurable momentum.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1500&q=82",
  },
];

const services = [
  {
    title: "Market Clarity",
    text: "Prioritize the bets, segments, and operating choices that unlock the next stage of growth.",
  },
  {
    title: "Transformation Design",
    text: "Turn ambitious strategy into funded roadmaps, governance rhythms, and measurable delivery.",
  },
  {
    title: "Executive Alignment",
    text: "Build shared conviction across leadership teams before critical launches, pivots, or investments.",
  },
];

const industries = [
  "Financial services",
  "Healthcare",
  "Technology",
  "Consumer markets",
  "Energy and infrastructure",
  "Private equity",
];

const steps = [
  {
    title: "Hear what matters",
    detail: "Stakeholder interviews, context mapping, and decision framing.",
  },
  {
    title: "Map the opportunity",
    detail: "Market signals, risks, constraints, and value pools made visible.",
  },
  {
    title: "Shape the operating plan",
    detail: "A focused roadmap with owners, milestones, and governance.",
  },
  {
    title: "Mobilize with momentum",
    detail: "Leadership routines that keep strategy connected to execution.",
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [messageSent, setMessageSent] = useState(false);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4200);

    return () => window.clearInterval(slideTimer);
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#hero" aria-label="HARTS home">
          <img src="/harts-logo-mark.svg" alt="HARTS Consulting" />
        </a>
        <nav className="primary-nav" aria-label="Primary navigation">
          <a href="#services">What We See</a>
          <a href="#process">How We Work</a>
          <a href="#engage">Where We Engage</a>
          <a href="#industries">Industries</a>
        </nav>
        <div className="header-actions">
          <a className="outline-button" href="#careers">
            Careers
          </a>
          <a className="solid-button" href="#contact">
            Connect
          </a>
        </div>
      </header>

      <section className="hero" id="hero">
        <div className="hero-copy reveal">
          <p className="eyebrow">HARTS consulting</p>
          <h1>Strategy built on clarity and trust</h1>
          <p>
            HARTS helps leadership teams make important decisions with sharper
            evidence, stronger alignment, and a practical route to action.
          </p>
          <div className="cta-row">
            <a className="solid-button large" href="#services">
              Explore
            </a>
            <a className="outline-button large" href="#about">
              Learn
            </a>
          </div>
        </div>

        <div
          className="hero-media reveal delay-one"
          style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.2)), url("${slide.image}")` }}
          aria-label="Consultants reviewing strategy in a boardroom"
        >
          <div className="hero-badge">HARTS Advisory Sprint</div>
          <div className="media-caption">
            <strong>{slide.title}</strong>
            <span>{slide.text}</span>
          </div>
          <div className="slider-controls" aria-label="Hero image controls">
            <div className="dots">
              {heroSlides.map((item, index) => (
                <button
                  className={`dot ${index === activeSlide ? "active" : ""}`}
                  key={item.title}
                  onClick={() => setActiveSlide(index)}
                  type="button"
                  aria-label={`Show slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section intro-band reveal" id="about">
        <div>
          <p className="eyebrow">About HARTS</p>
          <h2>Senior counsel for decisions that cannot drift.</h2>
        </div>
        <p>
          HARTS partners with ambitious companies when the stakes are high:
          entering new markets, reshaping operating models, preparing for
          investment, or bringing a complex transformation back into focus.
        </p>
      </section>

      <section className="section service-section" id="services">
        <div className="section-heading reveal">
          <p className="eyebrow">What We See</p>
          <h2>Practical insight across the full growth agenda.</h2>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card reveal" style={{ animationDelay: `${index * 120}ms` }} key={service.title}>
              <span />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <button type="button">Read focus area</button>
            </article>
          ))}
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="process-image reveal" aria-label="Team workshop with notes and laptops" />
        <div className="process-copy reveal delay-one">
          <p className="eyebrow">How We Work</p>
          <h2>A clear path from ambiguity to action.</h2>
          <div className="step-list">
            {steps.map((step, index) => (
              <button
                className={`step ${index === activeStep ? "active" : ""}`}
                key={step.title}
                onClick={() => setActiveStep(index)}
                type="button"
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step.title}</p>
              </button>
            ))}
          </div>
          <p className="step-detail">{steps[activeStep].detail}</p>
        </div>
      </section>

      <section className="section engage-section" id="engage">
        <div className="engage-copy reveal">
          <p className="eyebrow">Where We Engage</p>
          <h2>Built for moments when leadership needs a sharper view.</h2>
          <p>
            We support board updates, growth sprints, operating model resets,
            diligence support, and enterprise transformation offices.
          </p>
          <a className="solid-button large" href="#contact">
            Start a Conversation
          </a>
        </div>
        <div className="metric-grid reveal delay-one" aria-label="Company highlights">
          <div>
            <strong>42%</strong>
            <span>average cycle-time reduction in transformation planning</span>
          </div>
          <div>
            <strong>18</strong>
            <span>markets assessed for expansion and portfolio moves</span>
          </div>
          <div>
            <strong>91%</strong>
            <span>client leadership teams reporting stronger alignment</span>
          </div>
        </div>
      </section>

      <section className="section industries-section" id="industries">
        <div className="section-heading reveal">
          <p className="eyebrow">Industries</p>
          <h2>Focused advisory across complex sectors.</h2>
        </div>
        <div className="industry-list">
          {industries.map((industry) => (
            <button type="button" key={industry}>
              {industry}
            </button>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="reveal">
          <p className="eyebrow">Contact</p>
          <h2>Bring us the decision on your desk.</h2>
        </div>
        <form className="contact-form reveal delay-one">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@company.com" />
          </label>
          <label className="full">
            Message
            <textarea name="message" placeholder="Tell us what you are working through" />
          </label>
          <button
            className="solid-button large"
            onClick={() => setMessageSent(true)}
            type="button"
          >
            {messageSent ? "Message Ready" : "Send Message"}
          </button>
          {messageSent ? (
            <p className="form-note">Thanks. HARTS will review your note and follow up shortly.</p>
          ) : null}
        </form>
      </section>

      <footer className="footer">
        <strong>HARTS</strong>
        <span>Strategy, transformation, and growth advisory.</span>
        <a href="mailto:hello@hartsconsulting.example">hello@hartsconsulting.example</a>
      </footer>
    </main>
  );
}
