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
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      role: (form.elements.namedItem("role") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
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

  return (
    <form className="contact-form contact-form--premium" onSubmit={handleSubmit} noValidate>
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

      <label>
        Phone Number
        <input type="tel" name="phone" placeholder="+91 000 000 0000" />
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
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : status === "success" ? "Inquiry Sent" : "Submit Inquiry"}
      </button>

      {status === "success" && (
        <p className="form-note form-note--success">
          Thank you. A senior HARTS consultant will review your inquiry and reach out within one business day.
        </p>
      )}

      {status === "error" && (
        <p className="form-note form-note--error">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
