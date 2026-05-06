"use client";

import { useState } from "react";

export function HomeExperience() {
  const [messageSent, setMessageSent] = useState(false);

  return (
    <main className="cinematic-home">
      <section className="welcome-screen" id="hero">
        <div className="welcome-glow" aria-hidden="true" />
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
          <h2>Start the conversation.</h2>
          <p>
            Share what you are working through, and the HARTS team will follow
            up with a focused next step.
          </p>
        </div>

        <form className="premium-contact-form reveal delay-one">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@company.com" />
          </label>
          <label className="full">
            Company Name
            <input type="text" name="company" placeholder="Company name" />
          </label>
          <label className="full">
            What are you looking for?
            <textarea
              name="need"
              placeholder="Tell us about the decision, opportunity, or transformation ahead."
            />
          </label>
          <button
            className="solid-button large"
            onClick={() => setMessageSent(true)}
            type="button"
          >
            {messageSent ? "Thank you" : "Send Inquiry"}
          </button>
          {messageSent ? (
            <p className="form-note">
              Thanks. HARTS will review your note and follow up shortly.
            </p>
          ) : null}
        </form>
      </section>
    </main>
  );
}
