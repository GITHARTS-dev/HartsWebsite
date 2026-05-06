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
    <header className={`site-header${isHome ? " home-intro-header" : ""}`}>
      <Link className="brand" href="/#hero" aria-label="HARTS home">
        <img src="/HARTS Consulting LBG.png" alt="HARTS Consulting" />
      </Link>

      <nav className="primary-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-pill${pathname.startsWith(item.href) ? " nav-pill--active" : ""}`}
          >
            {item.label}
          </Link>
        ))}

        <div className="nav-menu">
          <button
            className={`nav-pill nav-menu-trigger${pathname.startsWith("/industries") ? " nav-pill--active" : ""}`}
            aria-haspopup="true"
            type="button"
          >
            Where We Engage
            <svg
              className="nav-chevron"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3 5l4 4 4-4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
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
        <Link className="outline-button" href="/#career">
          Career
        </Link>
        <Link className="solid-button" href="/contact">
          Connect
        </Link>
      </div>
    </header>
  );
}
