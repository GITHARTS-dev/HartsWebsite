"use client";

import { useEffect, useState } from "react";

import { heroSlides } from "../_data/home-content";

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4200);

    return () => window.clearInterval(slideTimer);
  }, []);

  return (
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
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.2)), url("${slide.image}")`,
        }}
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
  );
}
