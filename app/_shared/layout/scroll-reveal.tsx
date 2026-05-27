"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = [
  ".page-hero-content",
  ".vision-statement",
  ".home-section-heading",
  ".challenge-visual",
  ".challenge-image-wrap",
  ".premium-info-card",
  ".final-cta-inner",
  ".industry-grid-heading",
  ".industry-sector-card",
  ".industry-final-cta-inner",
  ".hwh-services-hd",
  ".hwh-bento-card",
  ".hwh-bento-footer",
  ".hwh-faq-heading",
  ".hwh-faq-item",
  ".hwh-cta-inner",
  ".service-body-panel",
  ".industry-detail-heading",
  ".industry-overview-copy",
  ".industry-force-panel",
  ".industry-detail-card",
  ".industry-help-card",
  ".industry-detail-cta-inner",
  ".work-principles-copy",
  ".work-principle-card",
  ".work-timeline-frame",
  ".au-story-copy",
  ".au-story-pillars li",
  ".au-section-hd",
  ".au-reveal",
  ".careers-culture-inner",
  ".careers-opening-heading",
  ".careers-card",
  ".contact-hero-content",
  ".contact-hero-media",
  ".contact-form-block",
  ".hq-block",
  ".section-heading",
  ".office-card",
  ".location-card",
].join(",");

function getRevealItems() {
  const main = document.querySelector("main");
  if (!main) return [];

  return Array.from(main.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter(
    (item, index, items) =>
      item.offsetParent !== null && items.findIndex((match) => match === item) === index,
  );
}

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    let observer: IntersectionObserver | null = null;
    const frame = window.requestAnimationFrame(() => {
      const items = getRevealItems();

      if (!items.length) return;

      items.forEach((item, index) => {
        item.classList.remove("site-reveal--visible");
        item.classList.add("site-reveal");
        item.style.setProperty("--site-reveal-delay", `${Math.min(index % 8, 7) * 40}ms`);
      });

      if (!("IntersectionObserver" in window)) {
        items.forEach((item) => item.classList.add("site-reveal--visible"));
        return;
      }

      const currentObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("site-reveal--visible");
            currentObserver.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -10% 0px", threshold: 0.14 },
      );

      observer = currentObserver;
      items.forEach((item) => currentObserver.observe(item));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
