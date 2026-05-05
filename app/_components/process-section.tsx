"use client";

import { useState } from "react";

import { steps } from "../_data/home-content";

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="process-section" id="process">
      <div
        className="process-image reveal"
        aria-label="Team workshop with notes and laptops"
      />
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
  );
}
