const navItems = [
  { href: "#services", label: "What We See" },
  { href: "#process", label: "How We Work" },
  { href: "#engage", label: "Where We Engage" },
  { href: "#industries", label: "Industries" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#hero" aria-label="HARTS home">
        <img src="/harts-logo-mark.svg" alt="HARTS Consulting" />
      </a>
      <nav className="primary-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <a className="outline-button" href="#careers">
          Careers
        </a>
        <a className="solid-button" href="#contact">
          Connect
        </a>
      </div>
    </header>
  );
}
