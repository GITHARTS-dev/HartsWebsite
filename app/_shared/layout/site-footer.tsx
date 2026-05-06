"use client";

import { useEffect, useRef, useState } from "react";

const footerLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/harts-consulting/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Email", href: "mailto:hello@hartsconsulting.example" },
  {
    label: "Careers",
    href: "mailto:hello@hartsconsulting.example?subject=Career%20at%20HARTS",
    id: "career",
  },
  { label: "Contact Us", href: "/contact" },
];

export function SiteFooter() {
  const footerRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;

    if (!footer || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  return (
    <footer className={`footer ${visible ? "footer-visible" : ""}`} ref={footerRef}>
      <div className="footer-brand">
        <strong>HARTS</strong>
        <span>Strategy, transformation, and growth advisory.</span>
      </div>
      <nav className="footer-social-links" aria-label="HARTS social and contact links">
        {footerLinks.map((item, index) => (
          <a
            href={item.href}
            id={item.id}
            key={item.label}
            style={{ animationDelay: `${index * 90}ms` }}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
