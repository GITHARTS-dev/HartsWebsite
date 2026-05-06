"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { industries } from "../../_data/home-content";

const navItems = [
  { href: "/how-we-work", label: "How We Work" },
  { href: "/how-we-help", label: "How We Help" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className={`site-header ${isHome ? "home-intro-header" : ""}`}>
      <Link className="brand" href="/#hero" aria-label="HARTS home">
        <img src="/harts-logo-mark.svg" alt="HARTS Consulting" />
      </Link>
      <nav className="primary-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className={`nav-pill${pathname.startsWith(item.href) ? " nav-pill--active" : ""}`}
          >
            {item.label}
          </Link>
        ))}
        <div className="nav-menu">
          <button
            aria-haspopup="true"
            className="nav-pill nav-menu-trigger"
            type="button"
          >
            Where We Engage
            <svg
              aria-hidden="true"
              className="nav-chevron"
              fill="none"
              height="12"
              viewBox="0 0 12 12"
              width="12"
            >
              <path
                d="M2 4L6 8L10 4"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.75"
              />
            </svg>
          </button>
          <div className="nav-dropdown" aria-label="Industries">
            {industries.map((industry) => (
              <Link href={`/industries/${industry.slug}`} key={industry.slug}>
                {industry.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div className="header-actions">
        <Link className="nav-pill nav-pill--outline" href="/#careers">
          Careers
        </Link>
        <Link className="nav-pill nav-pill--solid" href="/contact">
          Connect
        </Link>
      </div>
    </header>
  );
}
