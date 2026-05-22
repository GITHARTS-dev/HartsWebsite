# HARTS Website — Layout Design

> Refines `NEW_WEBSITE_ARCHITECTURE.md` with concrete page layouts.
> **Service taxonomy:** 6 services (confirmed by Sreema), each delivered via the BOT methodology, applied across 3 domains (Setup / Develop / Scale Up).
> **Style cues:** `harts-website-full.jsx` prototype — dark canvas, four-colour gradient accent, numbered service cards, operator voice, Sreema quotes treated as a design element.
> **Voice:** crisp, direct, no hedge words. The brand doc's voice principles, applied without compromise.

---

## 1. The mental model in one diagram

```
                       ┌─────────────────────────────────┐
                       │           HARTS                 │
                       └─────────────────────────────────┘
                                       │
        ┌──────────────────────────────┼──────────────────────────────┐
        │                              │                              │
   WHAT WE DELIVER               HOW WE DELIVER                WHERE WE DELIVER
   (6 services)                  (BOT methodology)             (3 domains)
        │                              │                              │
   01 OD & Implementation         Build                          Setup
   02 COE                         Operate                        Develop
   03 M&A & PMI                   Transfer                       Scale Up
   04 GCC & Shared Svcs             ├─ Transition
   05 Recruitment as a Svc          ├─ Hypercare
   06 Exec Coaching / Board         └─ Steady State
```

Every service page connects to all three: **what** the service is, **how** BOT applies to it, **where** in the lifecycle the client engages.

---

## 2. Navigation

### Primary nav (desktop, top of every page)

```
┌──────────────────────────────────────────────────────────────────────────┐
│ [HARTS │]   What We Deliver   How We Deliver   Where We Deliver         │
│                                              About    [ Let's Talk → ]   │
└──────────────────────────────────────────────────────────────────────────┘
```

- **Logo** — wordmark with the 4-colour gradient bar from the prototype (red → blue → green → orange).
- **What We Deliver** — opens a 6-card mega-menu on hover (one card per service, colour-coded).
- **How We Deliver** — single page on BOT.
- **Where We Deliver** — single page on Setup / Develop / Scale Up.
- **About** — quiet text link (firm story, leadership, manifesto, partners).
- **Let's Talk →** — primary CTA, four-colour gradient hover.

### What We Deliver mega-menu (on hover)

```
┌──────────────────────────────────────────────────────────────────────────┐
│  WHAT WE DELIVER                                                          │
│                                                                            │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐            │
│  │ 01  ── green    │ │ 02  ── blue     │ │ 03  ── orange   │            │
│  │ OD &            │ │ COE             │ │ M&A & PMI       │            │
│  │ Implementation  │ │                 │ │                 │            │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘            │
│                                                                            │
│  ┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐            │
│  │ 04  ── red      │ │ 05  ── teal     │ │ 06  ── amber    │            │
│  │ GCC &           │ │ Recruitment     │ │ Executive       │            │
│  │ Shared Services │ │ as a Service    │ │ Coaching        │            │
│  └─────────────────┘ └─────────────────┘ └─────────────────┘            │
│                                                                            │
│                                              [ See all six → ]            │
└──────────────────────────────────────────────────────────────────────────┘
```

### Footer

```
┌──────────────────────────────────────────────────────────────────────────┐
│  [HARTS │]                                                                │
│  Strategy. Transformation. Clarity.                                       │
│                                                                            │
│  WHAT WE DELIVER       HOW WE DELIVER       WHERE WE DELIVER              │
│  OD & Implementation   The BOT Model        Setup                          │
│  COE                                        Develop                        │
│  M&A & PMI                                  Scale Up                       │
│  GCC & Shared Svcs                                                         │
│  Recruitment a/Svc     ABOUT                CONNECT                        │
│  Exec Coaching         Firm                 Contact                        │
│                        Leadership           LinkedIn                       │
│                        Manifesto                                           │
│                        Careers                                             │
│                                                                            │
│  ──────────                                                                │
│  © 2026 HARTS Consulting Group.                                            │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 3. Home page layout

Single scroll. Five blocks. No portal overlay.

### Block 1 — Hero (full viewport, two-column)

```
┌──────────────────────────────────────────────────────────────────────────┐
│ [Nav]                                                                     │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│   ═══   (eyebrow: STRATEGY · TRANSFORMATION · CLARITY)                    │
│                                                                            │
│   We build the                       ┌────────────────────────────────┐  │
│   operating model.                   │                                │  │
│   We leave the                       │   [Hero image: senior team in  │  │
│   capability.                        │    working session — operator  │  │
│                                      │    energy, not stock photo]    │  │
│                                      │                                │  │
│   The partner for mid-market         │                                │  │
│   organisations in motion —          │                                │  │
│   mergers, scale-up, new             │                                │  │
│   capability builds. We don't        │                                │  │
│   leave until it runs                └────────────────────────────────┘  │
│   without us.                                                              │
│                                                                            │
│   [ Let's talk → ]                                                         │
│                                                                            │
└──────────────────────────────────────────────────────────────────────────┘
```

- H1 uses Cormorant Garamond (display). Short lines, two-stack.
- Image-right keeps the page asymmetric and modern — avoid centred-stack.

### Block 2 — Our Vision (quiet, single-statement)

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   ── OUR VISION                                                           │
│                                                                            │
│   Bringing people together                                                │
│   through equity and purpose                                              │
│   to create lasting value.                                                │
│                                                                            │
│   ────── (gradient bar)                                                   │
│                                                                            │
└──────────────────────────────────────────────────────────────────────────┘
```

One sentence. Lots of whitespace. A short gradient bar at the bottom is the only ornament.

### Block 3 — What We Deliver (short intro + 6-card grid)

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   ── WHAT WE DELIVER                                                      │
│                                                                            │
│   Six services. One unbroken thread.                                      │
│                                                                            │
│   Each is built and run by people who've sat in the operator's chair.     │
│                                                                            │
│   ┌────────────┐ ┌────────────┐ ┌────────────┐                          │
│   │ 01 │       │ │ 02 │       │ │ 03 │       │                          │
│   │ OD &       │ │ COE        │ │ M&A &      │                          │
│   │ Implem-    │ │            │ │ PMI        │                          │
│   │ entation   │ │            │ │            │                          │
│   │            │ │            │ │ 100-day    │                          │
│   │ People,    │ │ OCM, CI,   │ │ playbook   │                          │
│   │ org design,│ │ control    │ │ run beside │                          │
│   │ EVP, perf  │ │ tower,     │ │ your team. │                          │
│   │ and growth │ │ innovation │ │            │                          │
│   │ ── green   │ │ ── blue    │ │ ── orange  │                          │
│   └────────────┘ └────────────┘ └────────────┘                          │
│                                                                            │
│   ┌────────────┐ ┌────────────┐ ┌────────────┐                          │
│   │ 04 │       │ │ 05 │       │ │ 06 │       │                          │
│   │ GCC &      │ │ Recruitment│ │ Executive  │                          │
│   │ Shared     │ │ as a       │ │ Coaching / │                          │
│   │ Services   │ │ Service    │ │ Board      │                          │
│   │            │ │            │ │ Advisory   │                          │
│   │ Build it.  │ │ Pipeline,  │ │ The seat   │                          │
│   │ Run it.    │ │ closing,   │ │ you can't  │                          │
│   │ Hand it    │ │ onboarding │ │ get from   │                          │
│   │ over.      │ │ at scale.  │ │ a Big 4.   │                          │
│   │ ── red     │ │ ── teal    │ │ ── amber   │                          │
│   └────────────┘ └────────────┘ └────────────┘                          │
│                                                                            │
│   [ Explore the six → ]                                                    │
└──────────────────────────────────────────────────────────────────────────┘
```

- Numbered (01–06) like the prototype.
- Each card: number + colour swatch + title + 2-line description, hover reveals "Read more →".
- Click → service detail page.

### Block 4 — How We Deliver (the BOT promise)

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   ── HOW WE DELIVER                                                       │
│                                                                            │
│   We build it. We run it. We hand it over.                                │
│                                                                            │
│   The Build–Operate–Transfer methodology isn't a service line. It's       │
│   the spine of every engagement.                                          │
│                                                                            │
│       ●────────────●────────────●                                         │
│       BUILD       OPERATE      TRANSFER                                    │
│       Scope,      Stabilise,   Transition →                               │
│       KT, OKRs,   shadow,      Hypercare →                                │
│       SLA build   SLA execute  Steady state                               │
│                                                                            │
│   [ See how it works → ]                                                  │
│                                                                            │
└──────────────────────────────────────────────────────────────────────────┘
```

- Three dots on a gradient line. Hover each = brief expansion. Click = page.
- One-line teaser caption per phase.

### Block 5 — Where We Deliver (3 domains)

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   ── WHERE WE DELIVER                                                     │
│                                                                            │
│   Three moments. One partner across all of them.                          │
│                                                                            │
│   ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐        │
│   │  SETUP           │ │  DEVELOP         │ │  SCALE UP        │        │
│   │  ── green        │ │  ── blue         │ │  ── orange       │        │
│   │                  │ │                  │ │                  │        │
│   │  From zero to    │ │  From running    │ │  Through M&A,    │        │
│   │  running. New    │ │  to world-       │ │  growth, and     │        │
│   │  GCCs, SSCs,     │ │  class. CoE      │ │  the messy       │        │
│   │  PMI Day 1.      │ │  build, CI,      │ │  middle of       │        │
│   │                  │ │  talent depth.   │ │  transformation. │        │
│   │  Explore →       │ │  Explore →       │ │  Explore →       │        │
│   └──────────────────┘ └──────────────────┘ └──────────────────┘        │
│                                                                            │
└──────────────────────────────────────────────────────────────────────────┘
```

### Block 6 — Sreema quote band (close)

```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│   "                                                                        │
│      The world doesn't need another consulting firm                       │
│      that tells you what to do. It needs one that                         │
│      stays long enough to make sure it gets done.                         │
│   "                                                                        │
│                                                                            │
│   — Sreema Nallasivam, CEO & Co-Founder                                   │
│                                                                            │
│   [ Let's talk → ]                                                         │
│                                                                            │
└──────────────────────────────────────────────────────────────────────────┘
```

Full-bleed, Cormorant Garamond italic, large display quote mark in green at 30% opacity (from prototype).

---

## 4. What We Deliver — overview page (`/what-we-deliver`)

```
┌──────────────────────────────────────────────────────────────────────────┐
│ [Nav]                                                                     │
├──────────────────────────────────────────────────────────────────────────┤
│   ── WHAT WE DELIVER                                                      │
│                                                                            │
│   Six services. One disciplined thread.                                   │
│                                                                            │
│   We're not a generalist firm. These six are what we do, and we do        │
│   them all under one operating model — built, run, transferred.           │
└──────────────────────────────────────────────────────────────────────────┘

   ── 01 ─────────────────────────────────────────────────  ── green ──
   OD & IMPLEMENTATION
   Designing the organisation, then making it run.
   
     • Job Architecture Program
     • Talent Evaluation & Development Process
     • Talent Attraction & Acquisition Process
     • Fellowship
     • Mini-CXO
     • Employee Value Proposition (EVP)

   "I've sat in the chair. I know what it feels like when you're trying
    to change a 3,000-person organisation and nobody has told the people
    why. We start with the why — and build outward."
                                            — Sreema Nallasivam
                                                          [ Read more → ]

   ── 02 ─────────────────────────────────────────────────  ── blue ──
   COE — CENTRE OF EXCELLENCE
   The function that keeps the organisation moving after the project ends.

     • OCM + Communications + Governance
     • Control Tower (Business Intelligence)
         — OKRs & Goals
         — Policy Deployment
         — Org Performance Reporting & Insights
     • Innovation
     • Continuous Improvement (CI)
         — Problem Classification
         — Agile
         — Innovation Hub
         — Automation Strategy

   "Everyone sells process mining tools. We build the team that makes
    those tools actually work."
                                            — Sreema Nallasivam
                                                          [ Read more → ]

   [ ... continues for 03, 04, 05, 06 ... ]
```

Each service block:
- Numbered eyebrow with its colour accent
- Title (Cormorant Garamond, large)
- One-line tagline
- Bullet list of sub-capabilities
- One Sreema quote
- `Read more →` link to the service detail page

Layout alternates left/right alignment per block to keep rhythm. Generous vertical spacing.

---

## 5. Service detail page — template

Every service page follows the same 5-section template. Filled with content specific to that service.

### Template

```
┌──────────────────────────────────────────────────────────────────────────┐
│ [Nav]                                                                     │
├──────────────────────────────────────────────────────────────────────────┤
│ Breadcrumb:  What We Deliver  /  01  OD & Implementation                  │
│                                                                            │
│ ── 01  OD & IMPLEMENTATION                                       ── green │
│                                                                            │
│ Designing the organisation,                                                │
│ then making it run.                                                        │
│                                                                            │
│ The job, the talent, the development path, the EVP — designed             │
│ and built into a working system. Not a slide on org design.               │
│                                                                            │
│ [ Let's talk → ]                                                           │
└──────────────────────────────────────────────────────────────────────────┘
```

#### Section A — What this service is

```
   ── WHAT IT IS

   [ Lead paragraph — 2–3 sentences, plain operator language ]

   THE WORK INCLUDES
   ┌────────────────────────────┐ ┌────────────────────────────┐
   │ Job Architecture Program   │ │ Talent Evaluation &        │
   │ Levels, ladders, role      │ │ Development Process        │
   │ clarity that survives a    │ │ Decisions over             │
   │ reorg.                     │ │ paperwork.                 │
   └────────────────────────────┘ └────────────────────────────┘
   ┌────────────────────────────┐ ┌────────────────────────────┐
   │ Talent Attraction &        │ │ Fellowship                 │
   │ Acquisition Process        │ │ Building the next layer    │
   │ A pipeline you own, not a  │ │ of leadership before you   │
   │ vendor's revenue stream.   │ │ need it.                   │
   └────────────────────────────┘ └────────────────────────────┘
   ┌────────────────────────────┐ ┌────────────────────────────┐
   │ Mini-CXO                   │ │ EVP                        │
   │ Operating leadership at    │ │ Why the right people stay  │
   │ fractional cadence for     │ │ — written in language they │
   │ mid-market clients.        │ │ actually use.              │
   └────────────────────────────┘ └────────────────────────────┘
```

Six cards in a 3×2 grid (or 2×3 on mobile). Each card: sub-capability title + one-line plain description.

#### Section B — How we deliver this service (BOT lens, service-specific)

```
   ── HOW WE DELIVER THIS

   The BOT methodology, applied to OD & Implementation.

   ╭──── BUILD ──────╮ ╭──── OPERATE ────╮ ╭──── TRANSFER ───╮
   │  ── green       │ │  ── blue        │ │  ── orange      │
   │                  │ │                  │ │                  │
   │  • Scope the    │ │  • Stabilise    │ │  Transition      │
   │    org &         │ │    the new       │ │  • Ownership    │
   │    talent        │ │    structure     │ │    transfer     │
   │    baseline      │ │  • Shadow the   │ │    to HR /       │
   │  • Knowledge    │ │    leaders       │ │    People team   │
   │    transfer to   │ │  • Execute      │ │  • Handover —   │
   │    HR / leaders  │ │    SLAs on       │ │    governance & │
   │  • OKR &         │ │    OD rollout    │ │    knowledge    │
   │    perf design   │ │                  │ │  • Steering     │
   │  • SLA build     │ │                  │ │    committee    │
   │    for redesign  │ │                  │ │                  │
   │                  │ │                  │ │  Hypercare       │
   │                  │ │                  │ │  • Stabilise     │
   │                  │ │                  │ │    SLAs          │
   │                  │ │                  │ │  • Complete      │
   │                  │ │                  │ │    handover      │
   │                  │ │                  │ │  • CI guidance   │
   │                  │ │                  │ │                  │
   │                  │ │                  │ │  Steady state    │
   │                  │ │                  │ │  • Advisory +    │
   │                  │ │                  │ │    CI governance │
   ╰─────────────────╯ ╰─────────────────╯ ╰─────────────────╯
```

Three vertical pillars. The Transfer pillar contains the three sub-phases (Transition / Hypercare / Steady state) as nested groups.

#### Section C — Where we deliver this service (3 domains, service-specific)

```
   ── WHERE WE DELIVER THIS

   ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐
   │  SETUP           │ │  DEVELOP         │ │  SCALE UP        │
   │  ── green        │ │  ── blue         │ │  ── orange       │
   │                  │ │                  │ │                  │
   │  Stand up a new  │ │  Mature the HR   │ │  Reorganise      │
   │  HR / People     │ │  function into   │ │  through merger, │
   │  function from   │ │  a CoE that      │ │  spin-off, or    │
   │  ground zero.    │ │  scales without  │ │  rapid growth    │
   │                  │ │  re-hires.       │ │  without losing  │
   │                  │ │                  │ │  people.         │
   └──────────────────┘ └──────────────────┘ └──────────────────┘
```

Three cards, each one-paragraph, framed around *this* service in *that* domain.

#### Section D — Sreema's voice

A full-bleed quote, one per service. Already drafted in the brand doc and prototype.

#### Section E — CTA

```
   Ready to do this work?
   [ Let's talk → ]   [ See the BOT model → ]
```

---

### Per-service content packages (for the 6 detail pages)

#### 01 — OD & Implementation (green)

**Tagline:** Designing the organisation, then making it run.

**Sub-capabilities (6):**
1. Job Architecture Program
2. Talent Evaluation & Development Process
3. Talent Attraction & Acquisition Process
4. Fellowship
5. Mini-CXO
6. EVP

**Sreema quote:** *"I've sat in the chair…"*

---

#### 02 — COE — Centre of Excellence (blue)

**Tagline:** The function that keeps the organisation moving after the project ends.

**Sub-capabilities (4 main, 7 nested):**
1. OCM + Comms + Governance
2. Control Tower / Business Intelligence
   - OKRs + Goals
   - Policy Deployment
   - Org Performance Reporting & Insights
3. Innovation
4. Continuous Improvement (CI)
   - Problem Classification
   - Agile
   - Innovation Hub
   - Automation Strategy

**Sreema quote:** *"Everyone sells process mining tools. We build the team that makes those tools actually work."*

---

#### 03 — M&A & Post-Merger Integration (orange)

**Tagline:** The 100 days that decide whether the deal works.

**Sub-capabilities:**
- 100-Day PMI Playbook (the productised version — OKR 03)
- Day 1 Readiness
- MSA + Governance Setup
- Synergy Tracking & Realisation
- Steering Committee Cadence
- Hypercare & SLA Stabilisation

**Sreema quote:** *"Most consultants hand you a 200-slide integration plan and leave. We stay. We run the first 100 days alongside your team because that's when deals are won or lost."*

---

#### 04 — GCC & Shared Services (red)

**Tagline:** Build it. Run it. Hand it over.

**Sub-capabilities:**
- GCC / SSC Operating Model Design
- Build-Operate-Transfer Lifecycle Management
- Scope Definition & Knowledge Transfer
- OKR & Performance Management Setup
- SLA Build, Shadow Run, Parallel Run
- Hypercare & Completion of Transfer
- Recruitment & Onboarding at Scale
- Regulated-Industry Centre Build

**Sreema quote:** *"I spent 14 years building and running Metro's global solution centre. This isn't theory for us — it's muscle memory."*

---

#### 05 — Recruitment as a Service (teal)

**Tagline:** Hire at scale without renting forever.

**Sub-capabilities:**
- Hiring Strategy & Pipeline Design
- Sourcing & Screening Engine
- Offer Management & Closing Discipline
- Onboarding & Embedment
- Hiring Manager Coaching
- Capability Transfer to In-house Talent Team

**Sreema quote:** *(to draft — operator voice, e.g. "We don't sell req sheets. We build the engine, then we hand you the keys.")*

---

#### 06 — Executive Coaching / Board Advisory (amber)

**Tagline:** The seat at the table you can't get from a Big 4.

**Sub-capabilities:**
- 1:1 Executive Coaching
- Leadership Bench Development
- Board Advisory (independent, not transactional)
- Operating-Model Sounding Board
- CEO / COO Transition Support

**Sreema quote:** *(to draft — "When you're three years in and the board is asking the question you've been avoiding, that's when we matter most.")*

---

## 6. How We Deliver — BOT page (`/how-we-deliver`)

Single long page. Covers BOT in general, not service-specific.

### Block 1 — Hero

```
   ── HOW WE DELIVER

   Most firms advise.
   Some build.
   We do both — and we transfer.

   The Build–Operate–Transfer methodology is the spine of every HARTS
   engagement. Not a service. The way we work.

   [ Talk to us → ]
```

### Block 2 — The 5-step journey (visualised)

```
   ●──────●──────●──────●──────●
   BUILD  OPERATE  TRANS-  HYPER-  STEADY
                  ITION   CARE    STATE
   ─ green ─ blue ─ orange────────────────
   ←──────────────→ ←──────────────────→
       We hold it       We hand it over
       on our shoulders   to your team
```

A horizontal timeline. The Transfer phase shows three sub-nodes (Transition / Hypercare / Steady State) because that's where the differentiation lives.

### Block 3 — Each phase, in detail

Five stacked rows. One per phase. Each row uses left-side icon, right-side detail.

```
   ╭──── BUILD ──────────────────────────────────────────────╮
   │  ── green                                                │
   │                                                          │
   │  We scope the work, transfer the knowledge in, set       │
   │  OKRs and performance frameworks, and build the SLAs     │
   │  the new function will run on.                           │
   │                                                          │
   │  • Scope                                                 │
   │  • Knowledge transfer / nurturing / mentoring            │
   │  • OKR & performance management design                   │
   │  • SLA build                                             │
   ╰──────────────────────────────────────────────────────────╯
```

Repeat for OPERATE, TRANSITION, HYPERCARE, STEADY STATE — each with the user-specified items.

### Block 4 — Advisory firms vs. HARTS

Two-column comparison table (from brand doc §11.3):

```
   ┌────────────────────────────┬────────────────────────────┐
   │   ADVISORY FIRMS DELIVER   │   HARTS DELIVERS            │
   ├────────────────────────────┼────────────────────────────┤
   │   A 200-slide deck         │   A functioning team        │
   │   A target operating model │   The model, running        │
   │   A change roadmap         │   The change, in flight     │
   │   A KPI framework          │   KPIs your CoE owns        │
   │   "Phase 2 recommended"    │   We stay until you're done │
   └────────────────────────────┴────────────────────────────┘
```

### Block 5 — The non-negotiable

```
   "
       If it doesn't run without us,
       we haven't finished the job.
   "
                       — HARTS founding principle
```

Full-bleed, centred, Cormorant Garamond italic.

### Block 6 — CTA

```
   See the BOT model applied to your moment.
   [ Let's talk → ]   [ See the six services → ]
```

---

## 7. Where We Deliver — Domains page (`/where-we-deliver`)

Single page. Covers all 3 domains in general, not service-specific.

### Block 1 — Hero

```
   ── WHERE WE DELIVER

   Three domains. The same partner across all of them.

   HARTS organises around where you are, not what we sell. Setup,
   Develop, Scale Up — one capability, one engagement model, three
   moments of intervention.
```

### Block 2 — Three domain blocks (stacked, alternating)

```
   ╭──── DOMAIN 01 ──────────────────────────────────  ── green ───╮
   │                                                                 │
   │  SETUP                                                          │
   │  From zero to running.                                          │
   │                                                                 │
   │  You've signed off on a new GCC. You've just acquired           │
   │  an entity. You're spinning out a shared-service function.      │
   │  You need it standing — not in a slide, in operation.           │
   │                                                                 │
   │  Where the six services apply:                                  │
   │  GCC & Shared Services · M&A & PMI · OD & Implementation        │
   │  · COE (governance setup) · Recruitment as a Service            │
   │                                                                 │
   │  [ See how Setup engagements run → ]                            │
   ╰─────────────────────────────────────────────────────────────────╯

   ╭──── DOMAIN 02 ──────────────────────────────────  ── blue ────╮
   │                                                                 │
   │  DEVELOP                                                        │
   │  From running to world-class.                                   │
   │                                                                 │
   │  The function exists. It works. But it isn't yet generating     │
   │  the leverage you bought it for. We mature it — the CoE,        │
   │  the CI cadence, the leadership bench, the operating rhythm.    │
   │                                                                 │
   │  Where the six services apply:                                  │
   │  COE · OD & Implementation · Exec Coaching · Recruitment        │
   │  as a Service                                                   │
   │                                                                 │
   │  [ See how Develop engagements run → ]                          │
   ╰─────────────────────────────────────────────────────────────────╯

   ╭──── DOMAIN 03 ──────────────────────────────────  ── orange ──╮
   │                                                                 │
   │  SCALE UP                                                       │
   │  Through M&A, growth, and the messy middle.                     │
   │                                                                 │
   │  You're absorbing an acquisition, doubling headcount,           │
   │  reorganising for a new strategy. The risk isn't whether        │
   │  you'll change — it's whether the people, process, and          │
   │  performance machinery survives the change.                     │
   │                                                                 │
   │  Where the six services apply:                                  │
   │  M&A & PMI · OD & Implementation · COE · Exec Coaching          │
   │                                                                 │
   │  [ See how Scale Up engagements run → ]                         │
   ╰─────────────────────────────────────────────────────────────────╯
```

### Block 3 — Cross-domain note

```
   One firm, all three moments.

   Many clients engage HARTS for Setup, return for Develop, and
   stay for Scale Up. The continuity matters — you don't re-hire
   a new firm to learn your business twice.
```

### Block 4 — CTA

```
   [ Tell us where you are → ]
```

---

## 8. About / Firm pages (kept compact)

Single `/about` page, four sections — already covered in `NEW_WEBSITE_ARCHITECTURE.md` §3.7. No re-layout needed here; the new visual style (dark canvas, gradient accents, numbered cards, Sreema quotes) applies.

---

## 9. Visual style summary (from prototype)

| Element | Spec |
|---|---|
| Background | `#0E0F12` page · `#16171C` card · `#1C1D23` soft |
| Display font | Cormorant Garamond (serif, italic for quotes) |
| Body font | DM Sans |
| Mono accent | JetBrains Mono (eyebrow labels, section numbers) |
| Service colours | 01 green · 02 blue · 03 orange · 04 red · 05 teal · 06 amber |
| Gradient bar | red → blue → green → orange (logo, dividers, hover states) |
| Buttons | Solid green primary; outline secondary; gradient on hero CTA hover |
| Cards | `0.5px` border, hover lifts border opacity 0.06 → 0.12, no drop-shadow |
| Quotes | Cormorant italic, oversized `"` mark in service colour at 30% opacity |
| Section numbering | `01`, `02`, etc. in mono, paired with a coloured dash |
| Scroll | Fade-up animation on viewport entry (650ms, ease-out-cubic) |
| Mobile | Cards stack single-column; nav collapses to drawer |

---

## 10. Content discipline (the Sreema test)

Every line on the site should survive this filter:

| Cut | Use instead |
|---|---|
| "Empowering organizations to navigate complexity" | "We run the messy middle of transformation" |
| "End-to-end" | Name the start and the end |
| "Synergy" | "What you get back when two functions merge" |
| "Leverage our expertise" | "We've done this before" |
| "Holistic transformation" | "People, process, performance — in one engagement" |
| "Industry-leading" | Drop it. Show the work instead. |

If Sreema wouldn't say it out loud to a CEO across the table, it doesn't go on the site.

---

*End of layout design.*
