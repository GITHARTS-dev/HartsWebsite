"use client";

import { useState } from "react";

const SERVICES = [
  "Strategy & Advisory",
  "Operational Transformation",
  "Mergers & Acquisitions",
  "People & Organisation",
  "Technology & Innovation",
  "Sustainability",
  "GCC Setup",
  "Other",
];

export function ContactForm() {
  const [messageSent, setMessageSent] = useState(false);

  return (
    <form className="contact-form contact-form--premium">
      <div className="contact-form-row">
        <label>
          Full Name <span aria-hidden="true">*</span>
          <input type="text" name="name" placeholder="Your full name" required />
        </label>
        <label>
          Company / Organisation <span aria-hidden="true">*</span>
          <input type="text" name="company" placeholder="Your organisation" required />
        </label>
      </div>

      <div className="contact-form-row">
        <label>
          Role / Title
          <input type="text" name="role" placeholder="e.g. Chief Operating Officer" />
        </label>
        <label>
          Work Email <span aria-hidden="true">*</span>
          <input type="email" name="email" placeholder="you@company.com" required />
        </label>
      </div>

      <div className="contact-form-row">
        <label>
          Phone Number
          <input type="tel" name="phone" placeholder="+1 (000) 000-0000" />
        </label>
        <label>
          Area of Interest
          <select name="service">
            <option value="">Select a service area</option>
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>
      </div>

      <label className="full">
        How can we help? <span aria-hidden="true">*</span>
        <textarea
          name="message"
          placeholder="Briefly describe the challenge or opportunity you are working through. The more context you share, the more useful our first conversation will be."
          rows={5}
          required
        />
      </label>

      <p className="contact-form-privacy">
        Your information is handled in strict confidence and will never be shared
        with third parties. We respond to every inquiry within one business day.
      </p>

      <button
        className="solid-button large contact-form-submit"
        onClick={() => setMessageSent(true)}
        type="button"
      >
        {messageSent ? "Inquiry Received" : "Submit Inquiry"}
      </button>

      {messageSent && (
        <p className="form-note form-note--success">
          Thank you. A senior HARTS consultant will review your inquiry and
          reach out within one business day.
        </p>
      )}
    </form>
  );
}
