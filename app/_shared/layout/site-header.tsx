"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/how-we-work", label: "How We Work" },
  { href: "/how-we-help", label: "How We Help" },
  { href: "/industries", label: "Where We Engage" },
  { href: "/about-us", label: "About Us" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
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

      </nav>

      <div className="header-actions">
        <Link className="outline-button" href="/careers">
          Careers
        </Link>
        <Link className="solid-button" href="/contact">
          Connect
        </Link>
      </div>
    </header>
  );
}
