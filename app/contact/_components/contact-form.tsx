"use client";

import { useState } from "react";

const SERVICES = [
  "Strategy & Advisory",
  "Operational Transformation",
  "Post M&A Integration",
  "People & Organisation",
  "Innovation Hub",
  "Recruitment as a Service",
  "Talent Acquisition",
  "GCC",
  "Leadership Pipeline",
  "Automation Strategy",
  "Organization Design",
  "Other",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name:    (form.elements.namedItem("name")    as HTMLInputElement).value,
      email:   (form.elements.namedItem("email")   as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      role:    (form.elements.namedItem("role")    as HTMLInputElement).value,
      phone:   (form.elements.namedItem("phone")   as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="apply-success" role="status">
        <div className="apply-success-check" aria-hidden="true">✓</div>
        <h3>Inquiry received</h3>
        <p>
          Thank you. A senior HARTS consultant will review your inquiry and get
          back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      action="/api/contact"
      className="apply-form"
      method="post"
      onSubmit={handleSubmit}
    >
      {/* ── About you ──────────────────────────────────────────── */}
      <fieldset className="apply-fieldset">
        <legend>About you</legend>
        <div className="apply-grid">
          <label>
            Full Name <span aria-hidden="true">*</span>
            <input type="text" name="name" placeholder="Your full name" required />
          </label>

          <label>
            Work Email <span aria-hidden="true">*</span>
            <input type="email" name="email" placeholder="you@company.com" required />
          </label>

          <label>
            Company / Organisation <span aria-hidden="true">*</span>
            <input type="text" name="company" placeholder="Your organisation" required />
          </label>

          <label>
            Role / Title
            <input type="text" name="role" placeholder="e.g. Chief Operating Officer" />
          </label>

          <label className="apply-full">
            Phone Number <span aria-hidden="true">*</span>
            <input type="tel" name="phone" placeholder="+91 000 000 0000" required />
          </label>
        </div>
      </fieldset>

      {/* ── Your inquiry ───────────────────────────────────────── */}
      <fieldset className="apply-fieldset">
        <legend>Your inquiry</legend>
        <div className="apply-grid">
          <label>
            Support Needed <span aria-hidden="true">*</span>
            <select name="service" required defaultValue="">
              <option value="" disabled>Select a service area</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>

          <label className="apply-full">
            How can we help? <span aria-hidden="true">*</span>
            <textarea
              name="message"
              placeholder="Briefly describe the challenge or opportunity you are working through. The more context you share, the more useful our first conversation will be."
              rows={5}
              required
            />
          </label>
        </div>
      </fieldset>

      {errorMsg && (
        <p className="apply-form-error" role="alert">{errorMsg}</p>
      )}

      <div className="apply-form-actions">
        <button
          className="solid-button large apply-form-submit"
          type="submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Submit Inquiry"}
        </button>
        <p className="apply-form-privacy">
          Your information is handled with strict confidentiality and will never be shared with third parties. We will respond to your inquiry shortly.
        </p>
      </div>
    </form>
  );
}
