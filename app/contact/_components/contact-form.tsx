"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SECTORS = [
  "Aerospace & Defense",
  "Agribusiness",
  "Automotive",
  "Chemicals",
  "Construction & Infrastructure",
  "Consumer Products",
  "Financial Services",
  "Healthcare & Life Sciences",
  "Industrial Machinery & Equipment",
  "Media & Entertainment",
  "Metals",
  "Mining",
  "Oil & Gas",
  "Paper & Packaging",
  "Private Equity",
  "Retail",
  "Social Impact",
  "Technology",
  "Telecommunications",
  "Transportation",
  "Travel & Leisure",
  "Utilities & Renewables",
  "Other",
];

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

const COUNTRIES = [
  "Afghanistan", "Albania", "Algeria", "Argentina", "Australia", "Austria",
  "Bahrain", "Bangladesh", "Belgium", "Brazil", "Canada", "Chile", "China",
  "Colombia", "Croatia", "Czech Republic", "Denmark", "Egypt", "Ethiopia",
  "Finland", "France", "Germany", "Ghana", "Greece", "Hong Kong", "Hungary",
  "India", "Indonesia", "Iraq", "Ireland", "Israel", "Italy", "Japan",
  "Jordan", "Kenya", "Kuwait", "Lebanon", "Luxembourg", "Malaysia", "Mexico",
  "Morocco", "Netherlands", "New Zealand", "Nigeria", "Norway", "Oman",
  "Pakistan", "Philippines", "Poland", "Portugal", "Qatar", "Romania",
  "Saudi Arabia", "Singapore", "South Africa", "South Korea", "Spain",
  "Sri Lanka", "Sweden", "Switzerland", "Taiwan", "Tanzania", "Thailand",
  "Tunisia", "Turkey", "Uganda", "Ukraine", "United Arab Emirates",
  "United Kingdom", "United States", "Vietnam", "Other",
];

const COUNTRY_CODES: Record<string, string> = {
  "Afghanistan": "+93", "Albania": "+355", "Algeria": "+213",
  "Argentina": "+54", "Australia": "+61", "Austria": "+43",
  "Bahrain": "+973", "Bangladesh": "+880", "Belgium": "+32",
  "Brazil": "+55", "Canada": "+1", "Chile": "+56", "China": "+86",
  "Colombia": "+57", "Croatia": "+385", "Czech Republic": "+420",
  "Denmark": "+45", "Egypt": "+20", "Ethiopia": "+251",
  "Finland": "+358", "France": "+33", "Germany": "+49",
  "Ghana": "+233", "Greece": "+30", "Hong Kong": "+852",
  "Hungary": "+36", "India": "+91", "Indonesia": "+62",
  "Iraq": "+964", "Ireland": "+353", "Israel": "+972",
  "Italy": "+39", "Japan": "+81", "Jordan": "+962",
  "Kenya": "+254", "Kuwait": "+965", "Lebanon": "+961",
  "Luxembourg": "+352", "Malaysia": "+60", "Mexico": "+52",
  "Morocco": "+212", "Netherlands": "+31", "New Zealand": "+64",
  "Nigeria": "+234", "Norway": "+47", "Oman": "+968",
  "Pakistan": "+92", "Philippines": "+63", "Poland": "+48",
  "Portugal": "+351", "Qatar": "+974", "Romania": "+40",
  "Saudi Arabia": "+966", "Singapore": "+65", "South Africa": "+27",
  "South Korea": "+82", "Spain": "+34", "Sri Lanka": "+94",
  "Sweden": "+46", "Switzerland": "+41", "Taiwan": "+886",
  "Tanzania": "+255", "Thailand": "+66", "Tunisia": "+216",
  "Turkey": "+90", "Uganda": "+256", "Ukraine": "+380",
  "United Arab Emirates": "+971", "United Kingdom": "+44",
  "United States": "+1", "Vietnam": "+84",
};

const STORAGE_KEY = "harts_contact_form";

type FormFields = {
  name: string;
  email: string;
  company: string;
  role: string;
  phone: string;
  country: string;
  sector: string;
  service: string;
  message: string;
};

const EMPTY: FormFields = {
  name: "", email: "", company: "", role: "",
  phone: "", country: "", sector: "", service: "", message: "",
};

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [fields, setFields]     = useState<FormFields>(EMPTY);
  const [status, setStatus]     = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // Restore saved draft on mount
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) setFields(JSON.parse(saved));
    } catch {}
  }, []);

  // Save to sessionStorage on every change
  function update(field: keyof FormFields, value: string) {
    setFields((prev) => {
      const next = { ...prev, [field]: value };
      try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }

  // Auto-fill phone prefix when country changes
  function handleCountryChange(country: string) {
    const code = COUNTRY_CODES[country] ?? "";
    // Only auto-fill if phone is empty or still just a dial code with no number typed
    const isOnlyDialCode = /^\+\d{1,4}\s*$/.test(fields.phone.trim());
    setFields((prev) => {
      const next = {
        ...prev,
        country,
        phone: (!prev.phone || isOnlyDialCode) ? (code ? code + " " : "") : prev.phone,
      };
      try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }

  // Client-side validation
  function validate(): string | null {
    if (!fields.name.trim())    return "Full name is required.";
    if (!fields.email.trim())   return "Work email is required.";
    if (!/^[^\s@<>()"';]+@[^\s@<>()"';]+\.[^\s@<>()"';]+$/.test(fields.email))
      return "Please enter a valid work email address.";
    if (!fields.company.trim()) return "Company / Organisation is required.";
    if (!fields.phone.trim())   return "Phone number is required.";
    if (!/^[+\d][\d\s\-().]{5,29}$/.test(fields.phone))
      return "Please enter a valid phone number (e.g. +91 98765 43210).";
    if (!fields.country)        return "Please select your country.";
    if (!fields.service)        return "Please select the support needed.";
    if (!fields.message.trim()) return "Please describe how we can help.";
    return null;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const validationError = validate();
    if (validationError) {
      setStatus("error");
      setErrorMsg(validationError);
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Submission failed");
      }

      setStatus("success");
      setFields(EMPTY);
      try { sessionStorage.removeItem(STORAGE_KEY); } catch {}
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
      id="inquiry-form"
      className="apply-form"
      onSubmit={handleSubmit}
      noValidate
    >
      {/* ── About you ──────────────────────────────────────────── */}
      <fieldset className="apply-fieldset">
        <legend>About you</legend>
        <div className="apply-grid">
          <label>
            Full Name <span aria-hidden="true">*</span>
            <input
              type="text" name="name" placeholder="Your full name"
              value={fields.name} onChange={(e) => update("name", e.target.value)}
              required
            />
          </label>

          <label>
            Work Email <span aria-hidden="true">*</span>
            <input
              type="email" name="email" placeholder="you@company.com"
              value={fields.email} onChange={(e) => update("email", e.target.value)}
              required
            />
          </label>

          <label>
            Company / Organisation <span aria-hidden="true">*</span>
            <input
              type="text" name="company" placeholder="Your organisation"
              value={fields.company} onChange={(e) => update("company", e.target.value)}
              required
            />
          </label>

          <label>
            Role / Title
            <input
              type="text" name="role" placeholder="e.g. Chief Operating Officer"
              value={fields.role} onChange={(e) => update("role", e.target.value)}
            />
          </label>

          <label>
            Phone Number
            <input
              type="tel" name="phone"
              value={fields.phone} onChange={(e) => update("phone", e.target.value)}
            />
          </label>

          <label>
            Country <span aria-hidden="true">*</span>
            <select
              name="country" required
              value={fields.country} onChange={(e) => handleCountryChange(e.target.value)}
            >
              <option value="" disabled>Select your country</option>
              {COUNTRIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>
        </div>
      </fieldset>

      {/* ── Your inquiry ───────────────────────────────────────── */}
      <fieldset className="apply-fieldset">
        <legend>Your inquiry</legend>
        <div className="apply-grid">
          <label>
            Sector / Industry
            <select
              name="sector"
              value={fields.sector} onChange={(e) => update("sector", e.target.value)}
            >
              <option value="" disabled>Select your sector</option>
              {SECTORS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>

          <label>
            Support Needed <span aria-hidden="true">*</span>
            <select
              name="service" required
              value={fields.service} onChange={(e) => update("service", e.target.value)}
            >
              <option value="" disabled>Select a service area</option>
              {SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>

          <label className="apply-full">
            How can we help? <span aria-hidden="true">*</span>
            <textarea
              name="message" rows={5} required
              placeholder="Briefly describe the challenge or opportunity you are working through. The more context you share, the more useful our first conversation will be."
              value={fields.message} onChange={(e) => update("message", e.target.value)}
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
          Your information is handled with strict confidentiality and will never be shared with third parties. We will respond to your inquiry shortly.{" "}
          By submitting, you agree to our{" "}
          <Link href="/privacy-policy" className="apply-form-privacy-link">Privacy Policy</Link>
          {" "}and{" "}
          <Link href="/terms-of-use" className="apply-form-privacy-link">Terms of Use</Link>.
        </p>
      </div>
    </form>
  );
}
