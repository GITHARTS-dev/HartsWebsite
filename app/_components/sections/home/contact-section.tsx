"use client";

import { useState } from "react";

export function ContactSection() {
  const [messageSent, setMessageSent] = useState(false);

  return (
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
          <textarea
            name="message"
            placeholder="Tell us what you are working through"
          />
        </label>
        <button
          className="solid-button large"
          onClick={() => setMessageSent(true)}
          type="button"
        >
          {messageSent ? "Thank You!" : "Send Message"}
        </button>
        {messageSent ? (
          <p className="form-note">
            Thanks. HARTS will review your note and follow up shortly.
          </p>
        ) : null}
      </form>
    </section>
  );
}
