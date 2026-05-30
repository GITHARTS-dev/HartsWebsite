"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/what-we-deliver", label: "What We Deliver" },
  { href: "/where-we-deliver", label: "Where We Deliver" },
  { href: "/about-us", label: "About Us" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Auto-close menu on route change.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Lock background scroll while the mobile drawer is open.
  useEffect(() => {
    if (typeof document === "undefined") return;
    const original = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [menuOpen]);

  // ESC closes the drawer.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className={`site-header${menuOpen ? " site-header--menu-open" : ""}`}>
      <Link className="brand" href="/" aria-label="HARTS home">
        <img
          src="/HARTS Consulting LBG.png"
          alt="HARTS Consulting"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
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

      {/* Hamburger toggle - visible only at narrow widths. */}
      <button
        type="button"
        className="nav-toggle"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-drawer"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="nav-toggle-bar" aria-hidden="true" />
        <span className="nav-toggle-bar" aria-hidden="true" />
        <span className="nav-toggle-bar" aria-hidden="true" />
      </button>

      {/* Mobile drawer - overlays the page when open. */}
      <div
        id="mobile-drawer"
        className="mobile-drawer"
        aria-hidden={!menuOpen}
        data-open={menuOpen}
      >
        <nav className="mobile-drawer-nav" aria-label="Mobile primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-drawer-link${
                pathname.startsWith(item.href) ? " mobile-drawer-link--active" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mobile-drawer-actions">
          <Link className="outline-button large" href="/careers">
            Careers
          </Link>
          <Link className="solid-button large" href="/contact">
            Connect
          </Link>
        </div>
      </div>
    </header>
  );
}
