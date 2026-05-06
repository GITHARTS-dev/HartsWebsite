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
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
        <div className="nav-menu">
          <button
            aria-haspopup="true"
            className="nav-menu-trigger"
            type="button"
          >
            Where We Engage
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
