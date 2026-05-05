import Link from "next/link";

import { industries } from "../_data/home-content";

const navItems = [
  { href: "/#process", label: "How We Work" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
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
          <Link
            aria-haspopup="true"
            className="nav-menu-trigger"
            href="/#engage"
          >
            Where We Engage
          </Link>
          <div className="nav-dropdown" aria-label="Industries">
            {industries.map((industry) => (
              <Link href={`/industries/${industry.slug}`} key={industry.slug}>
                {industry.title}
              </Link>
            ))}
          </div>
        </div>
        <Link href="/#services">How we help</Link>
      </nav>
      <div className="header-actions">
        <Link className="outline-button" href="/#careers">
          Careers
        </Link>
        <Link className="solid-button" href="/#contact">
          Connect
        </Link>
      </div>
    </header>
  );
}
