import Link from "next/link";

const navCols = [
  {
    heading: "Practice",
    links: [
      { label: "What We Deliver", href: "/what-we-deliver" },
      { label: "How We Deliver", href: "/how-we-deliver" },
      { label: "Where We Deliver", href: "/where-we-deliver" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about-us" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Contact", href: "/contact" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/harts-consulting/",
        external: true,
      },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="sf-footer">
      <div className="sf-inner">
        <div className="sf-brand">
          <div className="sf-logo-link" aria-hidden="true">
            <img
              src="/image.png"
              alt="HARTS Consulting"
              className="sf-logo"
            />
          </div>
          <p className="sf-tagline">Strategy. Transformation. Clarity.</p>
        </div>

        <div className="sf-nav-cols">
          {navCols.map((col) => (
            <div className="sf-nav-col" key={col.heading}>
              <p className="sf-col-head">{col.heading}</p>
              {col.links.map((link) =>
                "external" in link && link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    className="sf-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link key={link.label} href={link.href} className="sf-link">
                    {link.label}
                  </Link>
                )
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="sf-bottom">
        <p className="sf-legal">
          &copy; {new Date().getFullYear()} HARTS Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
