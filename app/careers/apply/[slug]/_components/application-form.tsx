"use client";

import { useRef, useState } from "react";

type FormStatus = "idle" | "submitting" | "success" | "error";

type Props = {
  roleSlug: string;
  roleTitle: string;
};

const EXPERIENCE = ["0–2 years", "3–5 years", "6–10 years", "11–15 years", "16+ years"];
const NOTICE = ["Immediate", "Up to 30 days", "30–60 days", "60–90 days", "90+ days"];
const HEARD = ["LinkedIn", "Referral", "HARTS website", "Search engine", "Industry event", "Other"];

const ACCEPTED = [".pdf", ".doc", ".docx"];
const MAX_BYTES = 5 * 1024 * 1024;

export function ApplicationForm({ roleSlug, roleTitle }: Props) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [resumeName, setResumeName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setErrorMsg("");
    if (!file) {
      setResumeName("");
      return;
    }
    const lower = file.name.toLowerCase();
    const okExt = ACCEPTED.some((ext) => lower.endsWith(ext));
    if (!okExt) {
      setResumeName("");
      setErrorMsg("Resume must be a PDF, DOC, or DOCX file.");
      if (fileRef.current) fileRef.current.value = "";
      return;
    }
    if (file.size > MAX_BYTES) {
      setResumeName("");
      setErrorMsg("Resume must be 5 MB or smaller.");
      if (fileRef.current) fileRef.current.value = "";
      return;
    }
    setResumeName(file.name);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("roleSlug", roleSlug);
    formData.set("roleTitle", roleTitle);

    try {
      const res = await fetch("/api/careers/apply", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || "Submission failed");
      }
      setStatus("success");
      form.reset();
      setResumeName("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="apply-success" role="status">
        <div className="apply-success-check" aria-hidden="true">✓</div>
        <h3>Application received</h3>
        <p>
          Thanks for applying to the <strong>{roleTitle}</strong> role. A member
          of our talent team will review your profile and follow up within five
          business days at the email you provided.
        </p>
      </div>
    );
  }

  return (
    <form className="apply-form" onSubmit={handleSubmit} noValidate>
      <fieldset className="apply-fieldset">
        <legend>Personal details</legend>
        <div className="apply-grid">
          <label>
            First name <span aria-hidden="true">*</span>
            <input name="firstName" type="text" autoComplete="given-name" required />
          </label>
          <label>
            Last name <span aria-hidden="true">*</span>
            <input name="lastName" type="text" autoComplete="family-name" required />
          </label>
          <label>
            Email <span aria-hidden="true">*</span>
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Phone <span aria-hidden="true">*</span>
            <input name="phone" type="tel" autoComplete="tel" placeholder="+91 000 000 0000" required />
          </label>
          <label>
            City <span aria-hidden="true">*</span>
            <input name="city" type="text" autoComplete="address-level2" required />
          </label>
          <label>
            Country <span aria-hidden="true">*</span>
            <input name="country" type="text" autoComplete="country-name" required />
          </label>
          <label className="apply-full">
            LinkedIn profile
            <input name="linkedin" type="url" placeholder="https://www.linkedin.com/in/…" />
          </label>
        </div>
      </fieldset>

      <fieldset className="apply-fieldset">
        <legend>Professional background</legend>
        <div className="apply-grid">
          <label>
            Current company
            <input name="currentCompany" type="text" autoComplete="organization" />
          </label>
          <label>
            Current title
            <input name="currentTitle" type="text" autoComplete="organization-title" />
          </label>
          <label>
            Years of experience <span aria-hidden="true">*</span>
            <select name="experience" required defaultValue="">
              <option value="" disabled>Select range</option>
              {EXPERIENCE.map((v) => (<option key={v} value={v}>{v}</option>))}
            </select>
          </label>
          <label>
            Notice period
            <select name="notice" defaultValue="">
              <option value="">Select</option>
              {NOTICE.map((v) => (<option key={v} value={v}>{v}</option>))}
            </select>
          </label>
          <label className="apply-full">
            Why this role? (optional)
            <textarea
              name="coverLetter"
              rows={4}
              placeholder="A few sentences on the work you want to do, the impact you've had, or the kind of engagement that draws you to HARTS."
            />
          </label>
        </div>
      </fieldset>

      <fieldset className="apply-fieldset">
        <legend>Resume</legend>
        <label className="apply-file">
          <input
            ref={fileRef}
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            required
            onChange={onFileChange}
          />
          <span className="apply-file-cta">Choose file</span>
          <span className="apply-file-name">
            {resumeName || "PDF, DOC, or DOCX · max 5 MB"}
          </span>
        </label>
      </fieldset>

      <fieldset className="apply-fieldset">
        <legend>One last thing</legend>
        <div className="apply-grid">
          <label className="apply-full">
            How did you hear about us?
            <select name="heardFrom" defaultValue="">
              <option value="">Select</option>
              {HEARD.map((v) => (<option key={v} value={v}>{v}</option>))}
            </select>
          </label>
          <label className="apply-consent apply-full">
            <input name="consent" type="checkbox" required />
            <span>
              I consent to HARTS processing my personal data for recruitment
              purposes. <span aria-hidden="true">*</span>
            </span>
          </label>
        </div>
      </fieldset>

      {errorMsg && (
        <p className="apply-form-error" role="alert">{errorMsg}</p>
      )}

      <div className="apply-form-actions">
        <button
          type="submit"
          className="solid-button large apply-form-submit"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Submitting…" : "Submit application"}
        </button>
        <p className="apply-form-privacy">
          Your information is handled in confidence and used solely for
          the recruitment process.
        </p>
      </div>
    </form>
  );
}
