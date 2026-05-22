import { useState, useEffect, useRef, useCallback } from "react";

/* ═══════════════════════════════════════════════════════════
   HARTS BRAND SYSTEM
   ═══════════════════════════════════════════════════════════ */
const B = {
  red: "#E8636A", redL: "#FFF0F0", redD: "#C24B52",
  blue: "#4A90D9", blueL: "#EBF3FF", blueD: "#2E6CB3",
  green: "#52B788", greenL: "#E8F5EE", greenD: "#3A8A63",
  orange: "#F0924C", orangeL: "#FFF4EB", orangeD: "#D07530",
  slate: "#1A1D23", slateM: "#2A2D35", slateL: "#3A3D45",
  text: "#F2F0EB", textM: "#A8A49A", textD: "#6B6860",
  bg: "#0E0F12", bgCard: "#16171C", bgSoft: "#1C1D23",
  border: "rgba(255,255,255,0.06)", borderH: "rgba(255,255,255,0.12)",
  white: "#FFFFFF",
};

const FONT = {
  display: "'Cormorant Garamond', Georgia, serif",
  body: "'DM Sans', 'Helvetica Neue', sans-serif",
  mono: "'JetBrains Mono', monospace",
};

/* ═══════════════════════════════════════════════════════════
   HARTS LOGO (4 colour gradient bar + wordmark)
   ═══════════════════════════════════════════════════════════ */
function HartsLogo({ h = 26 }) {
  return (
    <svg viewBox="0 0 180 40" height={h} style={{ display: "block" }}>
      <defs>
        <linearGradient id="hg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={B.red} />
          <stop offset="33%" stopColor={B.blue} />
          <stop offset="66%" stopColor={B.green} />
          <stop offset="100%" stopColor={B.orange} />
        </linearGradient>
      </defs>
      <rect x="0" y="6" width="5" height="28" rx="2.5" fill="url(#hg)" />
      <text x="14" y="26" fontFamily={FONT.display} fontSize="22" fontWeight="500" letterSpacing="3" fill={B.text}>HARTS</text>
      <text x="14" y="36" fontFamily={FONT.body} fontSize="6.5" letterSpacing="2.5" fill={B.textD} textAnchor="start">CONSULTING GROUP</text>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   SCROLL ANIMATION HOOK
   ═══════════════════════════════════════════════════════════ */
function useFade(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return [ref, vis];
}

function Fade({ children, delay = 0, className = "", style = {} }) {
  const [ref, vis] = useFade();
  return (
    <div ref={ref} className={className} style={{ ...style, opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.65s cubic-bezier(.23,1,.32,1) ${delay}s, transform 0.65s cubic-bezier(.23,1,.32,1) ${delay}s` }}>
      {children}
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGES CONFIG
   ═══════════════════════════════════════════════════════════ */
const PAGES = ["home", "about", "services", "model", "leadership", "contact"];

const SERVICES = [
  {
    num: "01", color: B.green, colorL: B.greenL,
    title: "People, organisation\n& change",
    tagline: "Because transformation doesn't happen in PowerPoint. It happens through people.",
    items: ["Organisation design & restructuring", "Change management (OCM + comms governance)", "Executive coaching & leadership development", "Talent attraction & pipeline architecture", "Recruitment as a service", "Employee value proposition (EVP) design", "Performance management frameworks", "Learning organisation build"],
    sreema: "I've sat in the chair. I know what it feels like when you're trying to change a 3,000-person organisation and nobody has told the people why. We start there — with the why — and build outward."
  },
  {
    num: "02", color: B.blue, colorL: B.blueL,
    title: "M&A & post-merger\nintegration",
    tagline: "The 100 days that make or break a deal. We've built the playbook — and we run it with you.",
    items: ["100-day post-merger operating playbook", "Ownership transfer & governance design", "Knowledge handover & documentation", "Synergy tracking & realisation", "MSA (legal & commercial structuring)", "Steering committee setup & cadence", "Hypercare & SLA stabilisation", "Day 1 readiness planning"],
    sreema: "Most consultants hand you a 200-slide integration plan and leave. We stay. We run the first 100 days alongside your team because that's when deals are won or lost."
  },
  {
    num: "03", color: B.orange, colorL: B.orangeL,
    title: "COE design &\ncontinuous improvement",
    tagline: "We build centres of excellence that actually function after we leave.",
    items: ["COE operating model & governance design", "CI cadence & measurement framework", "Process mining advisory (vendor-neutral)", "Control tower & business intelligence", "Problem classification & solution centre", "Innovation methodology embedding", "Advisory & CI governance retainer", "Embedded capability building (train the trainer)"],
    sreema: "Everyone sells process mining tools. We build the team that makes those tools actually work. The tool is 20% of the value. The people running it are the other 80%."
  },
  {
    num: "04", color: B.red, colorL: B.redL,
    title: "GCC & shared service\nsetup",
    tagline: "End-to-end capability centre build — from first hire to full transfer.",
    items: ["GCC / SSC operating model design", "Build-operate-transfer lifecycle management", "Scope definition & knowledge transfer", "OKR & performance management setup", "SLA build, shadow run & parallel run", "Hypercare & completion of transfer", "Recruitment & onboarding at scale", "Regulated-industry centre build"],
    sreema: "I spent 14 years building and running Metro's global solution centre. This isn't theory for us — it's muscle memory. We've done the night shifts, the compliance audits, the first go-live."
  },
];

const BOT_STEPS = [
  { label: "Build", color: B.green, desc: "We design the operating model, hire the team, establish governance, and build the function alongside your people. Not for you — with you." },
  { label: "Operate", color: B.blue, desc: "We run the function through transition. Shadow runs, parallel operations, SLA stabilisation, knowledge transfer. We carry the weight until it's safe to let go." },
  { label: "Transfer", color: B.orange, desc: "We hand over a functioning capability your organisation owns and runs without us. Clean documentation, trained people, proven processes. Then we step back." },
];

const LEADERS = [
  { initials: "SN", name: "Sreema Nallasivam", role: "CEO & Co-Founder", color: B.green, bio: "14 years as CEO of Metro Business Solution Center. Board member of Metro GSC India. Built and scaled a global GCC serving 39 countries across 25+ languages. Sreema doesn't advise on transformation — she's lived it, from the first hire to the thousandth.", tags: ["GCC operations", "People-first culture", "Global transformation", "Board-level advisory"] },
  { initials: "SA", name: "Savio James Abraham", role: "Co-Founder & Transformation Lead", color: B.blue, bio: "Background spanning EY, Amazon, and e2x. Deep expertise in change management, leadership development, process optimisation, and Lean Six Sigma. Savio connects the human side of change to the operational machinery that makes it stick.", tags: ["Change management", "Process excellence", "Lean Six Sigma", "Leadership development"] },
  { initials: "RD", name: "Rufus D'Souza", role: "Senior Advisor", color: B.orange, bio: "Senior leader from Metro GSC India, with deep experience in multi-geography GCC delivery across finance and business operations. Rufus brings the operational rigour that turns GCC blueprints into running operations.", tags: ["GCC delivery", "Finance operations", "Multi-geography", "Operational governance"] },
];

const SECTORS = [
  { name: "Financial services", icon: "01", color: B.blue, desc: "Post-merger integration, COE build, and regulatory-ready operating models for banking, insurance, and asset management." },
  { name: "Pharma & life sciences", icon: "02", color: B.green, desc: "Capability centre design, compliance-first process transformation, and validated system governance for regulated environments." },
  { name: "Utilities & energy", icon: "03", color: B.orange, desc: "Asset-intensive operations, field service transformation, and SAP-centric process mining for utilities and energy companies." },
  { name: "Manufacturing", icon: "04", color: B.red, desc: "GCC setup for manufacturing operations, supply chain COE design, and cross-border shared service centres for European mid-market." },
];

/* ═══════════════════════════════════════════════════════════
   MAIN APP
   ═══════════════════════════════════════════════════════════ */
export default function HartsWebsite() {
  const [page, setPage] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeBot, setActiveBot] = useState(0);

  useEffect(() => {
    const h = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  useEffect(() => {
    const i = setInterval(() => setActiveBot(p => (p + 1) % 3), 3500);
    return () => clearInterval(i);
  }, []);

  const go = useCallback((p) => { setPage(p); setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }, []);
  const navO = Math.min(scrollY / 150, 1);

  return (
    <div style={{ background: B.bg, color: B.text, fontFamily: FONT.body, minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        ::selection{background:${B.green}33;color:${B.green}}
        html{scroll-behavior:smooth}
        @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        @keyframes lineGrow{from{width:0}to{width:48px}}
        @keyframes pulse{0%,100%{opacity:.4}50%{opacity:1}}
        .nav-link{transition:color .2s;cursor:pointer;background:none;border:none;font-family:${FONT.body}}
        .nav-link:hover{color:${B.green}!important}
        .nav-link.active{color:${B.green}!important}
        .cta{transition:all .25s;cursor:pointer;border:none;font-family:${FONT.body}}
        .cta:hover{transform:translateY(-1px)}
        .cta-primary{background:${B.green};color:${B.bg}}
        .cta-primary:hover{background:${B.greenD}}
        .cta-outline{background:transparent;color:${B.textM};border:0.5px solid ${B.border}}
        .cta-outline:hover{background:rgba(255,255,255,.03);border-color:${B.borderH}}
        .card-hover{transition:all .3s}
        .card-hover:hover{border-color:${B.borderH}!important;background:${B.bgSoft}!important}
        .quote-mark{font-family:${FONT.display};font-size:64px;line-height:1;color:${B.green};opacity:.3;position:absolute;top:-8px;left:-4px}
        .gradient-line{height:3px;border-radius:2px;background:linear-gradient(90deg,${B.red},${B.blue},${B.green},${B.orange})}
        .sector-card{transition:all .3s;cursor:default}
        .sector-card:hover{border-color:${B.borderH}!important;transform:translateY(-2px)}
        input,textarea{font-family:${FONT.body};outline:none}
        input:focus,textarea:focus{border-color:${B.green}!important}
      `}</style>

      {/* ═══ NAV ═══ */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0 48px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", background: `rgba(14,15,18,${.5 + navO * .45})`, backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", borderBottom: `0.5px solid rgba(255,255,255,${navO * .06})` }}>
        <div style={{ cursor: "pointer" }} onClick={() => go("home")}><HartsLogo /></div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {[["About", "about"], ["Services", "services"], ["Our model", "model"], ["Leadership", "leadership"], ["Contact", "contact"]].map(([l, p]) => (
            <button key={p} onClick={() => go(p)} className={`nav-link${page === p ? " active" : ""}`} style={{ fontSize: 12, color: B.textM, letterSpacing: .8 }}>{l}</button>
          ))}
          <button className="cta cta-primary" onClick={() => go("contact")} style={{ padding: "8px 20px", fontSize: 12, letterSpacing: .5, fontWeight: 500, borderRadius: 0 }}>Let's talk</button>
        </div>
      </nav>

      {/* ═══ PAGES ═══ */}
      {page === "home" && <HomePage go={go} activeBot={activeBot} setActiveBot={setActiveBot} />}
      {page === "about" && <AboutPage go={go} />}
      {page === "services" && <ServicesPage go={go} />}
      {page === "model" && <ModelPage go={go} activeBot={activeBot} setActiveBot={setActiveBot} />}
      {page === "leadership" && <LeadershipPage go={go} />}
      {page === "contact" && <ContactPage />}

      {/* ═══ FOOTER ═══ */}
      <footer style={{ padding: "48px", borderTop: `0.5px solid ${B.border}` }}>
        <div className="gradient-line" style={{ width: 48, marginBottom: 24 }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
          <div>
            <HartsLogo h={22} />
            <p style={{ fontSize: 12, color: B.textD, marginTop: 10, maxWidth: 320, lineHeight: 1.6 }}>We build the operating model. We leave the capability. Transformation that stays.</p>
          </div>
          <div style={{ display: "flex", gap: 32 }}>
            {[["About", "about"], ["Services", "services"], ["Model", "model"], ["Leadership", "leadership"], ["Contact", "contact"]].map(([l, p]) => (
              <button key={p} onClick={() => go(p)} className="nav-link" style={{ fontSize: 11, color: B.textD, letterSpacing: .5 }}>{l}</button>
            ))}
          </div>
          <div style={{ fontSize: 11, color: B.textD }}>Part of Evora IT Solutions Group</div>
        </div>
      </footer>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   HOME PAGE
   ═══════════════════════════════════════════════════════════ */
function HomePage({ go, activeBot, setActiveBot }) {
  return (
    <>
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "140px 48px 100px" }}>
        <div style={{ position: "absolute", inset: 0, opacity: .025, backgroundImage: `linear-gradient(${B.textD} .5px, transparent .5px), linear-gradient(90deg, ${B.textD} .5px, transparent .5px)`, backgroundSize: "80px 80px" }} />
        <div style={{ position: "absolute", left: 48, top: "18%", width: 3, height: "64%", background: `linear-gradient(to bottom, ${B.red}, ${B.blue}, ${B.green}, ${B.orange})`, borderRadius: 2, opacity: .3 }} />

        <Fade>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36 }}>
            <div className="gradient-line" style={{ width: 48 }} />
            <span style={{ fontSize: 11, letterSpacing: 3, color: B.textD, textTransform: "uppercase" }}>Transformation that stays</span>
          </div>
        </Fade>

        <Fade delay={.12}>
          <h1 style={{ fontFamily: FONT.display, fontSize: 68, fontWeight: 400, lineHeight: 1.08, maxWidth: 700, letterSpacing: -.5 }}>
            We build the<br />operating model.<br />
            <span style={{ color: B.green, fontStyle: "italic" }}>We leave the<br />capability.</span>
          </h1>
        </Fade>

        <Fade delay={.25}>
          <p style={{ fontSize: 16, color: B.textM, lineHeight: 1.75, maxWidth: 500, marginTop: 36, fontWeight: 300 }}>
            The transformation partner for organisations in motion — navigating mergers, scaling operations, and building the people and process capability to sustain what comes next.
          </p>
        </Fade>

        <Fade delay={.38}>
          <div style={{ display: "flex", gap: 14, marginTop: 44 }}>
            <button className="cta cta-primary" onClick={() => go("contact")} style={{ padding: "14px 32px", fontSize: 13, fontWeight: 500, letterSpacing: .5, borderRadius: 0 }}>Start a conversation</button>
            <button className="cta cta-outline" onClick={() => go("services")} style={{ padding: "14px 32px", fontSize: 13, letterSpacing: .5, borderRadius: 0 }}>Our services</button>
          </div>
        </Fade>

        <Fade delay={.5}>
          <div style={{ display: "flex", gap: 56, marginTop: 72, borderTop: `0.5px solid ${B.border}`, paddingTop: 28 }}>
            {[{ n: "14+", l: "Years GCC leadership", c: B.green }, { n: "100", l: "Day post-merger playbook", c: B.blue }, { n: "39", l: "Countries served", c: B.orange }, { n: "4", l: "Core capabilities", c: B.red }].map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: FONT.display, fontSize: 34, color: s.c, fontWeight: 400 }}>{s.n}</div>
                <div style={{ fontSize: 11, color: B.textD, marginTop: 3, letterSpacing: .5 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      {/* Sreema quote strip */}
      <section style={{ padding: "80px 48px", borderTop: `0.5px solid ${B.border}`, background: B.bgCard }}>
        <Fade>
          <div style={{ maxWidth: 640, position: "relative" }}>
            <span className="quote-mark">"</span>
            <p style={{ fontFamily: FONT.display, fontSize: 26, fontStyle: "italic", fontWeight: 400, lineHeight: 1.45, color: B.text, paddingLeft: 32 }}>
              I've spent my career building organisations from the inside — not advising from the outside. That's the difference. We know what it takes because we've done it.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 24, paddingLeft: 32 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: `${B.green}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 500, color: B.green }}>SN</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>Sreema Nallasivam</div>
                <div style={{ fontSize: 11, color: B.textD }}>CEO & Co-Founder, HARTS</div>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      {/* Service previews */}
      <section style={{ padding: "100px 48px", borderTop: `0.5px solid ${B.border}` }}>
        <Fade><SectionHeader num="01" label="What we deliver" /></Fade>
        <Fade delay={.1}>
          <h2 style={{ fontFamily: FONT.display, fontSize: 42, fontWeight: 400, lineHeight: 1.15, maxWidth: 520, marginBottom: 56 }}>
            Four capabilities.<br /><span style={{ color: B.green, fontStyle: "italic" }}>One delivery model.</span>
          </h2>
        </Fade>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {SERVICES.map((s, i) => (
            <Fade key={i} delay={.12 + i * .08}>
              <div className="card-hover" onClick={() => go("services")} style={{ background: B.bgCard, border: `.5px solid ${B.border}`, padding: "32px 28px", cursor: "pointer", minHeight: 200, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                    <span style={{ fontFamily: FONT.mono, fontSize: 11, color: B.textD }}>{s.num}</span>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.color }} />
                  </div>
                  <h3 style={{ fontFamily: FONT.display, fontSize: 22, fontWeight: 400, lineHeight: 1.25, whiteSpace: "pre-line", marginBottom: 12 }}>{s.title}</h3>
                </div>
                <p style={{ fontSize: 12, color: B.textM, lineHeight: 1.6, fontWeight: 300 }}>{s.tagline}</p>
              </div>
            </Fade>
          ))}
        </div>
        <Fade delay={.5}>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <button className="cta cta-outline" onClick={() => go("services")} style={{ padding: "12px 28px", fontSize: 12, letterSpacing: .5, borderRadius: 0 }}>View all services in detail</button>
          </div>
        </Fade>
      </section>

      {/* BOT preview */}
      <section style={{ padding: "100px 48px", borderTop: `0.5px solid ${B.border}`, background: B.bgCard }}>
        <Fade><SectionHeader num="02" label="How we deliver" /></Fade>
        <Fade delay={.1}>
          <h2 style={{ fontFamily: FONT.display, fontSize: 42, fontWeight: 400, lineHeight: 1.15, marginBottom: 48 }}>
            Build. Operate. <span style={{ color: B.green, fontStyle: "italic" }}>Transfer.</span>
          </h2>
        </Fade>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1, background: B.border }}>
          {BOT_STEPS.map((s, i) => (
            <Fade key={i} delay={.15 + i * .08}>
              <div onClick={() => setActiveBot(i)} style={{ background: activeBot === i ? B.bgSoft : B.bgCard, padding: "36px 28px", cursor: "pointer", borderTop: activeBot === i ? `2px solid ${s.color}` : "2px solid transparent", transition: "all .35s", minHeight: 180, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <span style={{ fontFamily: FONT.mono, fontSize: 11, color: activeBot === i ? s.color : B.textD }}>{`0${i + 1}`}</span>
                  <h3 style={{ fontFamily: FONT.display, fontSize: 26, fontWeight: 400, color: activeBot === i ? B.text : B.textM, marginTop: 12, transition: "color .3s" }}>{s.label}</h3>
                </div>
                <p style={{ fontSize: 12, color: B.textM, lineHeight: 1.6, fontWeight: 300, opacity: activeBot === i ? 1 : .5, transition: "opacity .3s", marginTop: 16 }}>{s.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
        <Fade delay={.4}>
          <div style={{ textAlign: "center", marginTop: 36 }}>
            <button className="cta cta-outline" onClick={() => go("model")} style={{ padding: "12px 28px", fontSize: 12, letterSpacing: .5, borderRadius: 0 }}>Learn how our model works</button>
          </div>
        </Fade>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 48px", borderTop: `0.5px solid ${B.border}`, textAlign: "center" }}>
        <Fade>
          <h2 style={{ fontFamily: FONT.display, fontSize: 44, fontWeight: 400, lineHeight: 1.15, marginBottom: 20 }}>
            Every transformation starts with<br />a <span style={{ color: B.green, fontStyle: "italic" }}>conversation.</span>
          </h2>
          <p style={{ fontSize: 14, color: B.textM, fontWeight: 300, marginBottom: 32 }}>No pitch deck. No sales process. Just an honest conversation about where you are.</p>
          <button className="cta cta-primary" onClick={() => go("contact")} style={{ padding: "14px 36px", fontSize: 13, fontWeight: 500, letterSpacing: .5, borderRadius: 0 }}>Start a conversation</button>
        </Fade>
      </section>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════
   ABOUT PAGE
   ═══════════════════════════════════════════════════════════ */
function AboutPage({ go }) {
  return (
    <section style={{ padding: "140px 48px 100px" }}>
      <Fade><SectionHeader num="" label="Who we are" /></Fade>
      <Fade delay={.1}>
        <h1 style={{ fontFamily: FONT.display, fontSize: 52, fontWeight: 400, lineHeight: 1.1, maxWidth: 640, marginBottom: 40 }}>
          Not strategy. Not technology.<br /><span style={{ color: B.green, fontStyle: "italic" }}>The connective tissue.</span>
        </h1>
      </Fade>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginBottom: 80 }}>
        <Fade delay={.2}>
          <div>
            <p style={{ fontSize: 15, color: B.textM, lineHeight: 1.8, fontWeight: 300, marginBottom: 20 }}>
              HARTS was founded on a simple observation: transformation fails not because the strategy is wrong or the technology doesn't work — but because nobody connects the people to the process to the operating model in a way that actually sticks.
            </p>
            <p style={{ fontSize: 15, color: B.textM, lineHeight: 1.8, fontWeight: 300, marginBottom: 20 }}>
              Every competitor is either people-first or tech-first. We are both — and we execute through to transfer, not just through to the recommendation.
            </p>
            <p style={{ fontSize: 15, color: B.textM, lineHeight: 1.8, fontWeight: 300 }}>
              Our leadership team has collectively built and run global capability centres, led post-merger integrations, and scaled organisations across 39 countries. We don't advise on what transformation looks like. We know what it <em>feels</em> like — because we've lived it.
            </p>
          </div>
        </Fade>
        <Fade delay={.3}>
          <div style={{ background: B.bgCard, border: `.5px solid ${B.border}`, padding: "32px 28px" }}>
            <div style={{ fontSize: 11, color: B.textD, letterSpacing: 2, textTransform: "uppercase", marginBottom: 20 }}>What defines us</div>
            {[
              { label: "We integrate", text: "People, process, and operations in a single engagement", c: B.green },
              { label: "We execute", text: "Build-operate-transfer — not advisory, both", c: B.blue },
              { label: "We transfer", text: "When we leave, the client owns the capability", c: B.orange },
              { label: "We measure", text: "Success = how the org performs after we exit", c: B.red },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, marginBottom: 16, alignItems: "flex-start" }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: item.c, marginTop: 6, flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: 12, color: item.c, fontWeight: 500, letterSpacing: .5, marginBottom: 2 }}>{item.label}</div>
                  <div style={{ fontSize: 13, color: B.textM, fontWeight: 300, lineHeight: 1.5 }}>{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>

      {/* Sreema voice */}
      <Fade>
        <div style={{ background: B.bgCard, border: `.5px solid ${B.border}`, padding: "40px 36px", maxWidth: 640, position: "relative" }}>
          <span className="quote-mark">"</span>
          <p style={{ fontFamily: FONT.display, fontSize: 22, fontStyle: "italic", fontWeight: 400, lineHeight: 1.5, paddingLeft: 28 }}>
            We built HARTS because we were tired of watching transformation projects end with a beautiful slide deck and no lasting change. The world doesn't need another consulting firm that tells you what to do. It needs one that stays long enough to make sure it gets done.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 20, paddingLeft: 28 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${B.green}22`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 500, color: B.green }}>SN</div>
            <div><span style={{ fontSize: 12, fontWeight: 500 }}>Sreema Nallasivam</span><span style={{ fontSize: 11, color: B.textD, marginLeft: 8 }}>CEO & Co-Founder</span></div>
          </div>
        </div>
      </Fade>

      <div style={{ textAlign: "center", marginTop: 56 }}>
        <button className="cta cta-outline" onClick={() => go("leadership")} style={{ padding: "12px 28px", fontSize: 12, letterSpacing: .5, borderRadius: 0 }}>Meet the leadership team</button>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SERVICES PAGE (Products & Services)
   ═══════════════════════════════════════════════════════════ */
function ServicesPage({ go }) {
  return (
    <section style={{ padding: "140px 48px 100px" }}>
      <Fade><SectionHeader num="" label="Products & services" /></Fade>
      <Fade delay={.1}>
        <h1 style={{ fontFamily: FONT.display, fontSize: 52, fontWeight: 400, lineHeight: 1.1, maxWidth: 620, marginBottom: 20 }}>
          What we can <span style={{ color: B.green, fontStyle: "italic" }}>confidently deliver.</span>
        </h1>
        <p style={{ fontSize: 15, color: B.textM, fontWeight: 300, lineHeight: 1.7, maxWidth: 540, marginBottom: 64 }}>
          Four capability areas. Thirty service lines. Every one delivered through our Build-Operate-Transfer model — because the deliverable is never a report. It's a functioning capability.
        </p>
      </Fade>

      {SERVICES.map((s, idx) => (
        <Fade key={idx} delay={.1}>
          <div style={{ marginBottom: 56, borderTop: `0.5px solid ${B.border}`, paddingTop: 48 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                  <span style={{ fontFamily: FONT.mono, fontSize: 12, color: B.textD }}>{s.num}</span>
                  <div style={{ width: 24, height: 3, borderRadius: 2, background: s.color }} />
                </div>
                <h2 style={{ fontFamily: FONT.display, fontSize: 32, fontWeight: 400, lineHeight: 1.2, whiteSpace: "pre-line", marginBottom: 12 }}>{s.title}</h2>
                <p style={{ fontSize: 14, color: s.color, fontWeight: 400, lineHeight: 1.5, marginBottom: 20 }}>{s.tagline}</p>

                {/* Sreema voice */}
                <div style={{ position: "relative", background: B.bgCard, border: `.5px solid ${B.border}`, padding: "20px 24px", marginTop: 20 }}>
                  <span style={{ fontFamily: FONT.display, fontSize: 36, lineHeight: 1, color: s.color, opacity: .25, position: "absolute", top: -2, left: 8 }}>"</span>
                  <p style={{ fontFamily: FONT.display, fontSize: 14, fontStyle: "italic", fontWeight: 400, lineHeight: 1.55, color: B.textM, paddingLeft: 16 }}>{s.sreema}</p>
                  <div style={{ fontSize: 10, color: B.textD, paddingLeft: 16, marginTop: 8 }}>— Sreema Nallasivam</div>
                </div>
              </div>

              <div>
                <div style={{ fontSize: 10, color: B.textD, letterSpacing: 2, textTransform: "uppercase", marginBottom: 16 }}>Service lines</div>
                {s.items.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 0", borderBottom: i < s.items.length - 1 ? `0.5px solid ${B.border}` : "none" }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: s.color, marginTop: 6, flexShrink: 0, opacity: .6 }} />
                    <span style={{ fontSize: 13, color: B.textM, fontWeight: 300, lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Fade>
      ))}

      {/* Sectors */}
      <div style={{ borderTop: `0.5px solid ${B.border}`, paddingTop: 56, marginTop: 24 }}>
        <Fade><SectionHeader num="" label="Sector focus" /></Fade>
        <Fade delay={.1}>
          <h2 style={{ fontFamily: FONT.display, fontSize: 36, fontWeight: 400, lineHeight: 1.15, marginBottom: 40 }}>
            Sectors where the <span style={{ color: B.green, fontStyle: "italic" }}>operating model matters.</span>
          </h2>
        </Fade>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {SECTORS.map((s, i) => (
            <Fade key={i} delay={.1 + i * .06}>
              <div className="sector-card" style={{ background: B.bgCard, border: `.5px solid ${B.border}`, padding: "28px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                  <span style={{ fontFamily: FONT.mono, fontSize: 11, color: B.textD }}>{s.icon}</span>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.color }} />
                </div>
                <h3 style={{ fontFamily: FONT.display, fontSize: 20, fontWeight: 400, marginBottom: 8 }}>{s.name}</h3>
                <p style={{ fontSize: 12, color: B.textM, fontWeight: 300, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: 56 }}>
        <button className="cta cta-primary" onClick={() => go("contact")} style={{ padding: "14px 32px", fontSize: 13, fontWeight: 500, letterSpacing: .5, borderRadius: 0 }}>Discuss your transformation</button>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   MODEL PAGE
   ═══════════════════════════════════════════════════════════ */
function ModelPage({ go, activeBot, setActiveBot }) {
  return (
    <section style={{ padding: "140px 48px 100px" }}>
      <Fade><SectionHeader num="" label="Our delivery model" /></Fade>
      <Fade delay={.1}>
        <h1 style={{ fontFamily: FONT.display, fontSize: 52, fontWeight: 400, lineHeight: 1.1, maxWidth: 600, marginBottom: 20 }}>
          Build. Operate. <span style={{ color: B.green, fontStyle: "italic" }}>Transfer.</span>
        </h1>
        <p style={{ fontSize: 15, color: B.textM, fontWeight: 300, lineHeight: 1.7, maxWidth: 540, marginBottom: 56 }}>
          Every engagement follows the same discipline. We don't advise and leave. We don't build and leave. We advise, build, operate, and transfer — four verbs, not two. That's the difference.
        </p>
      </Fade>

      {BOT_STEPS.map((s, i) => (
        <Fade key={i} delay={.1 + i * .08}>
          <div style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 36, padding: "40px 0", borderTop: `0.5px solid ${B.border}` }}>
            <div>
              <span style={{ fontFamily: FONT.mono, fontSize: 11, color: B.textD }}>Phase 0{i + 1}</span>
              <h3 style={{ fontFamily: FONT.display, fontSize: 32, fontWeight: 400, color: s.color, marginTop: 8 }}>{s.label}</h3>
            </div>
            <div>
              <p style={{ fontSize: 14, color: B.textM, fontWeight: 300, lineHeight: 1.75, marginBottom: 16 }}>{s.desc}</p>
              <div style={{ width: "100%", height: 3, background: B.bgSoft, borderRadius: 2 }}>
                <div style={{ height: 3, borderRadius: 2, background: s.color, width: `${33 * (i + 1)}%`, transition: "width .6s" }} />
              </div>
            </div>
          </div>
        </Fade>
      ))}

      <Fade delay={.4}>
        <div style={{ background: B.bgCard, border: `.5px solid ${B.border}`, padding: "36px 32px", marginTop: 40 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 24, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 10, color: B.textD, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>What clients think they buy</div>
              {["Post-merger consulting", "A new COE", "An offshore centre", "Change management support"].map((t, i) => (
                <div key={i} style={{ fontSize: 13, color: B.textM, fontWeight: 300, padding: "4px 0" }}>{t}</div>
              ))}
            </div>
            <div style={{ fontSize: 24, color: B.green }}>→</div>
            <div>
              <div style={{ fontSize: 10, color: B.textD, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>What HARTS actually delivers</div>
              {["A functioning operating model they own", "A team that runs CI without us", "A transferred, governed operation", "An organisation that can change itself"].map((t, i) => (
                <div key={i} style={{ fontSize: 13, color: B.green, fontWeight: 400, padding: "4px 0" }}>{t}</div>
              ))}
            </div>
          </div>
        </div>
      </Fade>

      <Fade delay={.5}>
        <div style={{ position: "relative", background: B.bgCard, border: `.5px solid ${B.border}`, padding: "28px 32px", marginTop: 32, maxWidth: 540 }}>
          <span className="quote-mark">"</span>
          <p style={{ fontFamily: FONT.display, fontSize: 16, fontStyle: "italic", fontWeight: 400, lineHeight: 1.55, color: B.textM, paddingLeft: 24 }}>
            The deliverable is not a framework. It is a functioning capability. If it doesn't run without us, we haven't finished the job.
          </p>
          <div style={{ fontSize: 10, color: B.textD, paddingLeft: 24, marginTop: 8 }}>— Sreema Nallasivam</div>
        </div>
      </Fade>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   LEADERSHIP PAGE
   ═══════════════════════════════════════════════════════════ */
function LeadershipPage({ go }) {
  return (
    <section style={{ padding: "140px 48px 100px" }}>
      <Fade><SectionHeader num="" label="Leadership" /></Fade>
      <Fade delay={.1}>
        <h1 style={{ fontFamily: FONT.display, fontSize: 52, fontWeight: 400, lineHeight: 1.1, maxWidth: 600, marginBottom: 20 }}>
          People who've <span style={{ color: B.green, fontStyle: "italic" }}>built it themselves.</span>
        </h1>
        <p style={{ fontSize: 15, color: B.textM, fontWeight: 300, lineHeight: 1.7, maxWidth: 520, marginBottom: 56 }}>Not career consultants. Operators who moved into advisory because they know what works — and what doesn't — from sitting in the chair.</p>
      </Fade>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {LEADERS.map((l, i) => (
          <Fade key={i} delay={.1 + i * .1}>
            <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 40, padding: "40px 0", borderTop: `0.5px solid ${B.border}` }}>
              <div>
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: `${l.color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, fontWeight: 500, color: l.color, fontFamily: FONT.display, marginBottom: 16 }}>{l.initials}</div>
                <h3 style={{ fontFamily: FONT.display, fontSize: 22, fontWeight: 400, marginBottom: 4 }}>{l.name}</h3>
                <div style={{ fontSize: 12, color: l.color, fontWeight: 400 }}>{l.role}</div>
              </div>
              <div>
                <p style={{ fontSize: 14, color: B.textM, fontWeight: 300, lineHeight: 1.75, marginBottom: 16 }}>{l.bio}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {l.tags.map((t, j) => (
                    <span key={j} style={{ fontSize: 10, padding: "3px 10px", border: `0.5px solid ${B.border}`, color: B.textD, letterSpacing: .3 }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   CONTACT PAGE
   ═══════════════════════════════════════════════════════════ */
function ContactPage() {
  return (
    <section style={{ padding: "140px 48px 100px" }}>
      <Fade><SectionHeader num="" label="Start here" /></Fade>
      <Fade delay={.1}>
        <h1 style={{ fontFamily: FONT.display, fontSize: 52, fontWeight: 400, lineHeight: 1.1, maxWidth: 580, marginBottom: 20 }}>
          Every transformation starts with a <span style={{ color: B.green, fontStyle: "italic" }}>conversation.</span>
        </h1>
        <p style={{ fontSize: 15, color: B.textM, fontWeight: 300, lineHeight: 1.7, maxWidth: 480, marginBottom: 48 }}>
          Whether you're mid-merger, building a capability centre, or redesigning how your organisation works — we should talk. No pitch deck. No sales process. Just an honest conversation about where you are and what comes next.
        </p>
      </Fade>

      <Fade delay={.2}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, maxWidth: 720 }}>
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={{ fontSize: 11, color: B.textD, letterSpacing: 1.5, display: "block", marginBottom: 6, textTransform: "uppercase" }}>Name</label>
                <input type="text" style={{ width: "100%", padding: "12px 14px", background: B.bgCard, border: `.5px solid ${B.border}`, color: B.text, fontSize: 14, borderRadius: 0 }} />
              </div>
              <div>
                <label style={{ fontSize: 11, color: B.textD, letterSpacing: 1.5, display: "block", marginBottom: 6, textTransform: "uppercase" }}>Email</label>
                <input type="email" style={{ width: "100%", padding: "12px 14px", background: B.bgCard, border: `.5px solid ${B.border}`, color: B.text, fontSize: 14, borderRadius: 0 }} />
              </div>
              <div>
                <label style={{ fontSize: 11, color: B.textD, letterSpacing: 1.5, display: "block", marginBottom: 6, textTransform: "uppercase" }}>Organisation</label>
                <input type="text" style={{ width: "100%", padding: "12px 14px", background: B.bgCard, border: `.5px solid ${B.border}`, color: B.text, fontSize: 14, borderRadius: 0 }} />
              </div>
              <div>
                <label style={{ fontSize: 11, color: B.textD, letterSpacing: 1.5, display: "block", marginBottom: 6, textTransform: "uppercase" }}>What are you working on?</label>
                <textarea rows={5} style={{ width: "100%", padding: "12px 14px", background: B.bgCard, border: `.5px solid ${B.border}`, color: B.text, fontSize: 14, borderRadius: 0, resize: "vertical" }} />
              </div>
              <button className="cta cta-primary" style={{ padding: "14px 32px", fontSize: 13, fontWeight: 500, letterSpacing: .5, borderRadius: 0, width: "100%", marginTop: 4 }}>Let's talk</button>
            </div>
          </div>

          <div style={{ paddingTop: 8 }}>
            <div style={{ background: B.bgCard, border: `.5px solid ${B.border}`, padding: "28px 24px", marginBottom: 16 }}>
              <div style={{ fontSize: 11, color: B.textD, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>What to expect</div>
              {["A 30-minute call to understand your situation", "An honest assessment of whether we're the right fit", "If we are — a scoped proposal within 5 working days", "If we're not — we'll tell you, and point you somewhere better"].map((t, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: B.green, marginTop: 5, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, color: B.textM, fontWeight: 300, lineHeight: 1.55 }}>{t}</span>
                </div>
              ))}
            </div>

            <div style={{ position: "relative", background: B.bgCard, border: `.5px solid ${B.border}`, padding: "24px 24px" }}>
              <span className="quote-mark" style={{ fontSize: 40 }}>"</span>
              <p style={{ fontFamily: FONT.display, fontSize: 14, fontStyle: "italic", fontWeight: 400, lineHeight: 1.55, color: B.textM, paddingLeft: 16 }}>
                We don't do discovery calls that waste your time. If you've read this far, you already know what we do. Let's talk about what you need.
              </p>
              <div style={{ fontSize: 10, color: B.textD, paddingLeft: 16, marginTop: 6 }}>— Sreema</div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   SHARED COMPONENTS
   ═══════════════════════════════════════════════════════════ */
function SectionHeader({ num, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
      {num && <span style={{ fontFamily: FONT.mono, fontSize: 11, color: B.textD }}>{num}</span>}
      {num && <div style={{ width: 24, height: .5, background: B.textD }} />}
      <span style={{ fontSize: 11, letterSpacing: 2, color: B.textD, textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}
