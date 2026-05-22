# HARTS Consulting — Master Brand & Content Document

> **Purpose:** Single source of truth for the Claude Code local codebase build.
> All copy marked `[LIVE SITE]` is verbatim from harts-website.vercel.app.
> All copy marked `[STRATEGY SESSION]` is approved content from whiteboard analysis and positioning workshops.
> Do not mix or substitute between the two — both are intentional and complementary.
>
> **Live site:** https://harts-website.vercel.app
> **Last synced:** May 2026

---

## Table of Contents

1. [Brand Foundation](#1-brand-foundation)
2. [Navigation & Site Structure](#2-navigation--site-structure)
3. [Page: Home](#3-page-home)
4. [Page: How We Help](#4-page-how-we-help)
5. [Page: How We Work](#5-page-how-we-work)
6. [Page: Where We Engage — Industries](#6-page-where-we-engage--industries)
7. [Page: About Us](#7-page-about-us)
8. [Page: Careers](#8-page-careers)
9. [Page: Contact](#9-page-contact)
10. [Strategic Layer: Identity & Positioning](#10-strategic-layer-identity--positioning)
11. [Strategic Layer: BOT Delivery Model](#11-strategic-layer-bot-delivery-model)
12. [Strategic Layer: Capability Confidence Map](#12-strategic-layer-capability-confidence-map)
13. [Strategic Layer: Competitive Positioning](#13-strategic-layer-competitive-positioning)
14. [Strategic Layer: Sreema's Voice — Approved Quotes](#14-strategic-layer-sreemas-voice--approved-quotes)
15. [Strategic Layer: OKRs — Immediate Focus Q3 2026](#15-strategic-layer-okrs--immediate-focus-q3-2026)
16. [Design System & Assets](#16-design-system--assets)

---

## 1. Brand Foundation

### 1.1 Identity

| Field | Value |
|---|---|
| Brand name | HARTS Consulting |
| Full legal name | HARTS Consulting Group |
| Meta title (live) | HARTS Consulting \| Strategy, Transformation & Digital Enablement |
| Meta description (live) | HARTS partners with senior leadership teams to navigate complexity, accelerate transformation, and deliver measurable outcomes across strategy, operations, and digital enablement. |
| Tagline | Strategy. Transformation. Clarity. |
| Email | hello@globalharts.com |
| LinkedIn | https://www.linkedin.com/company/harts-consulting/ |
| Headquarters | 7C, Mayflower Signature, Avinashi Road, Peelamedu, Coimbatore – 641004, Tamil Nadu, India |
| Phone | +91 422 000 0000 |

### 1.2 Logo

| Field | Value |
|---|---|
| File name | `HARTS Consulting LBG.png` |
| Live URL | `https://harts-website.vercel.app/HARTS%20Consulting%20LBG.png` |
| Variant | Light logo on dark background |
| Alt text | `HARTS Consulting` |
| Nav render height | 28px |
| Footer render height | 22–24px |

### 1.3 Images

| File | Live URL | Usage |
|---|---|---|
| `image.png` | `https://harts-website.vercel.app/image.png` | Footer CTA section, About page |
| `home-page-discussion.jpeg` | `https://harts-website.vercel.app/images/home-page-discussion.jpeg` | Home pain points section |

### 1.4 Colour Palette

`[STRATEGY SESSION]` — derived from live site visual inspection and brand assets.

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#070B14` | Page background |
| `--color-navy` | `#0B1120` | Section backgrounds, card surfaces |
| `--color-navy-mid` | `#131C33` | Card backgrounds |
| `--color-navy-light` | `#1A2744` | Hover elevated surfaces |
| `--color-accent` | `#3B82F6` | Primary — CTAs, links, active states, stats |
| `--color-accent-hover` | `#2563EB` | Button hover |
| `--color-green` | `#34D399` | People & Organisation, success |
| `--color-amber` | `#FBBF24` | GCC Setup, Innovation |
| `--color-rose` | `#FB7185` | Sustainability, Careers |
| `--color-text-primary` | `#F1F5F9` | Main body text |
| `--color-text-secondary` | `#94A3B8` | Descriptions, supporting copy |
| `--color-text-dim` | `#64748B` | Eyebrows, labels, captions |
| `--color-border` | `rgba(255,255,255,0.07)` | Default card borders, dividers |
| `--color-border-hover` | `rgba(255,255,255,0.14)` | Hover borders |
| `--color-white` | `#FFFFFF` | Button text on accent bg |

### 1.5 Typography

| Role | Family | Weights | Usage |
|---|---|---|---|
| Display | Instrument Serif | 400, 400 italic | H1, H2, hero text, blockquotes |
| Body | DM Sans | 300, 400, 500 | All body copy, nav, UI labels |
| Mono | JetBrains Mono | 400 | Section numbers, eyebrow labels |

**Google Fonts CDN import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
```

### 1.6 Brand Voice

`[STRATEGY SESSION]`

| Principle | Application |
|---|---|
| Direct | No hedge words, no softeners. Say it plainly. |
| Confident | We know this work because we've done it — not studied it. |
| People-first | Transformation is about people before process. Always. |
| Action-oriented | Every sentence moves toward an outcome. |
| Honest | If we're not the right fit, we say so. |
| No fluff | Avoid "synergy", "holistic", "leverage", "end-to-end" without specific meaning. |

---

## 2. Navigation & Site Structure

### 2.1 Primary Navigation `[LIVE SITE]`

```
[HARTS Logo]  |  Where We Engage  |  How We Help  |  How We Work  |  About Us  |  Careers  |  Connect
```

- `Careers` — secondary style button
- `Connect` — primary CTA button → `/contact`

### 2.2 Routes

| Page | Route | Live URL |
|---|---|---|
| Home | `/` | https://harts-website.vercel.app/ |
| How We Help | `/how-we-help` | https://harts-website.vercel.app/how-we-help |
| — Innovation | `/how-we-help/innovation` | |
| — M&A | `/how-we-help/mergers-acquisitions` | |
| — Operation | `/how-we-help/operation` | |
| — Strategy | `/how-we-help/strategy` | |
| — Transformation | `/how-we-help/transformation` | |
| — GCC Setup | `/how-we-help/gcc-setup` | |
| — Sustainability | `/how-we-help/sustainability` | |
| — People & Organization | `/how-we-help/people-and-organization` | |
| Where We Engage | `/industries` | https://harts-website.vercel.app/industries |
| — Automotive | `/industries/automotive` | |
| — Aerospace | `/industries/aerospace` | |
| — Oil & Gas | `/industries/oil-gas` | |
| — Chemicals | `/industries/chemicals` | |
| — Life Sciences | `/industries/life-sciences` | |
| — Energy | `/industries/energy` | |
| — Technology | `/industries/technology` | |
| — Telecommunications | `/industries/telecom` | |
| — Transportation | `/industries/transportation` | |
| How We Work | `/how-we-work` | https://harts-website.vercel.app/how-we-work |
| About Us | `/about-us` | https://harts-website.vercel.app/about-us |
| Careers | `/careers` | https://harts-website.vercel.app/careers |
| Contact | `/contact` | https://harts-website.vercel.app/contact |

### 2.3 Footer `[LIVE SITE]`

```
[Logo]                    Practice              Company       Connect
Strategy.                 How We Help           About         Contact
Transformation.           How We Work           Careers       LinkedIn
Clarity.                  Where We Engage

© 2026 HARTS Consulting. All rights reserved.
```

---

## 3. Page: Home

**Page title:** `HARTS Consulting | Strategy, Transformation & Digital Enablement`  
**Meta description:** `HARTS partners with senior leadership teams to navigate complexity, accelerate transformation, and deliver measurable outcomes across strategy, operations, and digital enablement.`

---

### 3.1 Hero Section `[LIVE SITE]`

**Eyebrow:**
> Strategy. Transformation. Clarity.

**H1:**
> Strategic Expertise.
> Building Future Enterprises.

**Body:**
> Empowering organizations to navigate complexity, accelerate transformation, and build sustainable competitive advantage in a rapidly evolving world.

**CTA:** `Connect with us` → `/contact`

---

### 3.2 Vision Section `[LIVE SITE]`

**Eyebrow:** Our Vision

**H2:**
> Bringing People Together Through Equity and Purpose to Create Lasting Value

---

### 3.3 Pain Points Section `[LIVE SITE]`

**Eyebrow:** Strategic Challenges We Solve

**H2:**
> Navigating Complexity with Confidence.

**Body:**
> Organizations today face operational complexity, fragmented systems, and rapidly evolving expectations. HARTS helps leadership teams align strategy, transformation, and execution into one connected direction for sustainable growth.

**Image:** `home-page-discussion.jpeg` — alt: `HARTS strategy consultants collaborating on enterprise challenges`

**Section label:** Six Recurring Patterns

**6 Pain Point Cards:**

| Title | Description |
|---|---|
| Disconnected Systems | Fragmented workflows and isolated platforms reduce visibility and slow collaboration. |
| Slow Decision-Making | Leaders need clearer insights and faster access to meaningful operational intelligence. |
| Operational Inefficiencies | Outdated processes and disconnected operations limit scalability and adaptability. |
| Unclear Digital Direction | Many organizations struggle to align transformation initiatives with long-term goals. |
| Data Silos | Disconnected data sources create gaps in visibility and enterprise-wide understanding. |
| Transformation Visibility | Organizations need measurable clarity into transformation progress and outcomes. |

---

### 3.4 People / Process / Technology Section `[LIVE SITE]`

**Eyebrow:** Why Organizations Choose HARTS

**H2:**
> A Trusted Transformation Partner for Organizations.

**Three pillars:**

**People**
> Executive alignment, leadership development, and people-centered transformation that strengthen collaboration, adaptability, and long-term organizational resilience. We help teams navigate change with confidence and shared clarity.

**Process**
> Strategic frameworks and scalable operating models engineered to simplify complexity, improve execution, and accelerate business performance across evolving operational environments.

**Technology**
> AI-enabled intelligence, connected systems, and integrated data ecosystems that empower organizations with real-time insight, smarter decisions, and future-ready transformation.

---

### 3.5 Partner CTA Section `[LIVE SITE]`

**Eyebrow:** Partner With HARTS

**H2:**
> Navigate transformation
> with confidence.

**Body:**
> The future belongs to organizations that adapt, evolve, and lead with clarity. HARTS helps businesses move forward with intelligent strategy and connected transformation.

**CTA:** `Connect With Us` → `/contact`

**Image:** `image.png` — alt: `HARTS Consulting`

---

## 4. Page: How We Help

**Page title:** `How We Help | HARTS`  
**Meta description:** `Explore HARTS services for market clarity, transformation design, and executive alignment.`

---

### 4.1 Hero `[LIVE SITE]`

**Eyebrow:** How We Help

**H1:**
> Focused expertise.
> Decisive results.

**Body:**
> Eight focused service lines — engineered to clarify choices, design practical transformation, and mobilise people around work that matters.

**CTA:** `Connect with us` → `/contact`

---

### 4.2 Capabilities Section `[LIVE SITE]`

**Eyebrow:** Capabilities

**H2:**
> Eight services. One disciplined approach.

**Body:**
> Whether the work calls for strategic clarity, operating discipline, enterprise transformation, or capability building, the HARTS consulting playbook adapts to the reality of the mandate.

---

### 4.3 The 8 Service Lines `[LIVE SITE]`

Each card: title + one-liner description + route.

| # | Service | One-liner | Route |
|---|---|---|---|
| 1 | Innovation | Turn enterprise scale into a disciplined engine for new growth, not ad-hoc experimentation. | `/how-we-help/innovation` |
| 2 | M&A | Capture the full value of every deal — from thesis through integration and synergy realisation. | `/how-we-help/mergers-acquisitions` |
| 3 | Operation | Bring rigour, throughput, and cost discipline to the operations that run your business. | `/how-we-help/operation` |
| 4 | Strategy | Clarify the choices that matter — and align leadership around a confident way forward. | `/how-we-help/strategy` |
| 5 | Transformation | Run complex, multi-year change programmes with the discipline they actually require. | `/how-we-help/transformation` |
| 6 | GCC Setup | Stand up Global Capability Centers that scale strategic capability at competitive economics. | `/how-we-help/gcc-setup` |
| 7 | Sustainability | Move from ESG ambition to credible, measurable, audit-ready sustainability performance. | `/how-we-help/sustainability` |
| 8 | People & Organization | Design the organisation, leadership, and culture your strategy actually needs to succeed. | `/how-we-help/people-and-organization` |

**CTA after grid:** `Start a conversation` → `/contact`

---

### 4.4 FAQ Section `[LIVE SITE]`

**Eyebrow:** Questions

**H2:**
> What leadership teams ask us.

**Q1:** How long does a typical engagement take?
> Most focused workstreams run six to twelve weeks. Larger transformation programs are phased over several months with clear milestones and decision points built in.

**Q2:** Do you work alongside our internal teams?
> Yes — we embed with your teams, transfer capability throughout the engagement, and structure the work so your people own the outcome long after we step back.

**Q3:** What makes HARTS different from a traditional consultancy?
> We prioritise decision-making over documentation. Every engagement produces clear owners, measurable milestones, and momentum your teams can sustain after the engagement ends.

---

### 4.5 Page CTA Banner `[LIVE SITE]`

**H2:**
> Ready to bring clarity to your next move?

**Body:**
> Tell us about the challenge ahead. We will respond with a focused perspective on how we can help.

**CTAs:**
- `Connect with HARTS` → `/contact`
- `How we work` → `/how-we-work`

---

### 4.6 Service Detail Pages — Expanded Copy `[STRATEGY SESSION]`

*These pages are linked from the service grid above. The live site sub-pages were not fully scraped. Use the following approved content for each sub-page build.*

---

#### `/how-we-help/innovation`

**H1:** Turn enterprise scale into a disciplined engine for new growth.

**Body:**
> Innovation at enterprise scale requires the same rigour as any other business function — a clear mandate, a defined process, and accountability for outcomes. HARTS helps organisations move from scattered ideation to a repeatable innovation operating model that generates commercial value, not just ideas.

**Sreema's voice:**
> Innovation isn't a hackathon. It's a system. We build the system.

---

#### `/how-we-help/mergers-acquisitions`

**H1:** Capture the full value of every deal — from thesis through integration.

**Body:**
> Most deals lose value in the integration phase — not in the deal room. HARTS partners with leadership teams through the 100 days that make or break an acquisition: operating model design, people integration, governance setup, synergy tracking, and the operational handover that makes the combined entity actually function.

**Service lines:**
- 100-day post-merger operating playbook
- Ownership transfer & governance design
- Knowledge handover & documentation
- Synergy tracking & realisation
- MSA (legal & commercial structuring)
- Steering committee setup & cadence
- Hypercare & SLA stabilisation
- Day 1 readiness planning

**Sreema's voice:**
> Most consultants hand you a 200-slide integration plan and leave. We stay. We run the first 100 days alongside your team because that's when deals are won or lost.

---

#### `/how-we-help/operation`

**H1:** Bring rigour, throughput, and cost discipline to the operations that run your business.

**Body:**
> Operational complexity accumulates quietly — fragmented processes, inconsistent standards, manual handoffs, and visibility gaps that slow the whole enterprise. HARTS diagnoses, redesigns, and stabilises the operational core so leadership teams can focus forward rather than firefighting.

**Sreema's voice:**
> Operations are where strategy either lives or dies. We make sure it lives.

---

#### `/how-we-help/strategy`

**H1:** Clarify the choices that matter — and align leadership around a confident way forward.

**Body:**
> Strategy without execution is decoration. HARTS doesn't deliver strategy as a document — we work with leadership teams to define the choices, build the alignment, and create the conditions for confident execution. Every strategy engagement ends with clear owners, measurable milestones, and a leadership team that knows what it's committing to.

**Sreema's voice:**
> We don't write strategy reports. We sit with leadership teams until they can make the decision they've been avoiding.

---

#### `/how-we-help/transformation`

**H1:** Run complex, multi-year change programmes with the discipline they actually require.

**Body:**
> Large transformation programmes fail not because the strategy is wrong but because they lose momentum, accountability, and the human thread that holds change together. HARTS provides the programme governance, OCM discipline, and leadership alignment that keeps transformation on track through the messy middle.

**Service lines:**
- Change management (OCM + comms governance)
- Programme governance & milestone reporting
- Leadership alignment workshops
- Stakeholder engagement design
- Benefits realisation tracking
- Transition & hypercare management

---

#### `/how-we-help/gcc-setup`

**H1:** Stand up Global Capability Centres that scale strategic capability at competitive economics.

**Body:**
> Building a Global Capability Centre is not a procurement exercise — it is an operating model decision. HARTS designs, builds, and transfers GCCs from ground zero: org structure, hiring, governance, SLAs, knowledge transfer, and the operational handover that ensures the centre runs independently. We have done it. For 39 countries. That is not theory — it is experience.

**Service lines:**
- GCC / SSC operating model design
- Build-Operate-Transfer lifecycle management
- Scope definition & knowledge transfer plan
- OKR & performance management setup
- SLA build, shadow run & parallel run
- Hypercare & completion of transfer
- Recruitment & onboarding at scale
- Regulated-industry centre build

**Sreema's voice:**
> I spent 14 years building and running Metro's global solution centre. This isn't theory for us — it's muscle memory. We've done the night shifts, the compliance audits, the first go-live.

---

#### `/how-we-help/sustainability`

**H1:** Move from ESG ambition to credible, measurable, audit-ready sustainability performance.

**Body:**
> Sustainability is no longer a communications function — it is a strategic and operational discipline. HARTS helps organisations translate ESG commitments into measurable programmes, reporting frameworks, and operational changes that survive audit scrutiny and stakeholder challenge.

---

#### `/how-we-help/people-and-organization`

**H1:** Design the organisation, leadership, and culture your strategy actually needs to succeed.

**Body:**
> Every transformation has a people problem underneath it. HARTS addresses it directly — organisation design, leadership development, OCM, talent architecture, and the cultural change that makes new ways of working actually stick. We connect the people agenda to the process and performance agenda so they reinforce rather than resist each other.

**Service lines:**
- Organisation design & restructuring
- Change management (OCM + comms)
- Executive coaching & leadership development
- Talent attraction & pipeline architecture
- Recruitment as a service
- Employee value proposition (EVP) design
- Performance management frameworks
- Learning organisation build

**Sreema's voice:**
> I've sat in the chair. I know what it feels like when you're trying to change a 3,000-person organisation and nobody has told the people why. We start there — with the why — and build outward.

---

## 5. Page: How We Work

**Page title:** `How We Work | HARTS`  
**Meta description:** `Explore the HARTS approach from understanding and design through collaborative engagement, outcomes, and sustainment.`

---

### 5.1 Hero `[LIVE SITE]`

**H1:**
> Disciplined Execution.
> Measurable Outcomes.

**Body:**
> We combine strategic diagnosis, product thinking, and disciplined delivery — moving from uncertain ideas to practical transformation with clear decisions, visible progress, and outcomes your teams can sustain.

**CTA:** `Connect with us` → `/contact`

---

### 5.2 Principles Section `[LIVE SITE]`

**Eyebrow:** Our Principles

**H2:**
> Principles That Guide Transformation

**Body:**
> HARTS approaches transformation through clarity, collaboration, adaptability, and long-term thinking — helping organizations move forward with confidence and connected direction.

**5 Principles:**

| Title | Description |
|---|---|
| Clarity Before Complexity | We simplify transformation into actionable direction instead of introducing unnecessary operational complexity. |
| Strategy With Execution | Every strategy should translate into measurable operational progress and real organizational movement. |
| Human-Centered Thinking | Transformation succeeds when people, systems, and processes move together with clarity and alignment. |
| Adaptive Systems | Organizations must continuously evolve in response to changing operational and technological environments. |
| Long-Term Perspective | We design transformation strategies that create sustainable momentum beyond initial implementation. |

---

### 5.3 Page CTA Banner `[LIVE SITE]`

**H2:**
> Ready to move from ambition to execution?

**Body:**
> Connect with HARTS to shape a practical path from diagnosis to sustained transformation, with clear decisions and measurable progress at every step.

**CTAs:**
- `Connect with HARTS` → `/contact`
- `About us` → `/about-us`

---

## 6. Page: Where We Engage — Industries

**Page title:** `Industries | HARTS`  
**Meta description:** `HARTS partners with organizations across industries to align strategy, operations, and transformation execution.`

---

### 6.1 Hero `[LIVE SITE]`

**Eyebrow:** Where We Engage

**H1:**
> Industry Intelligence.
> Driving Enterprise Transformation.

**Body:**
> HARTS partners with leadership teams across complex and evolving industries, helping organizations align strategy, operations, and transformation initiatives for sustainable growth and measurable impact.

**CTA:** `Start a Conversation` → `/contact`

---

### 6.2 Sector Grid `[LIVE SITE]`

**Eyebrow:** Sector Expertise at Scale

**H2:**
> Industry specific insight. Enterprise wide transformation.

**Body:**
> HARTS adapts its consulting, operational, and technology frameworks to the realities of each industry enabling organizations to navigate complexity with clarity, resilience, and measurable impact.

**9 Industry Sectors — verbatim descriptions:**

| # | Industry | Route | Description |
|---|---|---|---|
| 1 | Automotive | `/industries/automotive` | Enabling connected manufacturing, smart mobility innovation, supply-chain resilience, and enterprise-wide operational modernization across rapidly evolving global automotive ecosystems. |
| 2 | Aerospace | `/industries/aerospace` | Delivering engineering collaboration, operational visibility, compliance alignment, and scalable transformation governance for precision-focused aerospace and aviation enterprises worldwide. |
| 3 | Oil & Gas | `/industries/oil-gas` | Driving operational excellence, asset reliability, infrastructure modernization, and intelligent performance optimization across upstream, midstream, and downstream energy operations. |
| 4 | Chemicals | `/industries/chemicals` | Supporting process optimization, safety governance, regulatory compliance, and scalable operational transformation across complex and globally connected chemical manufacturing environments. |
| 5 | Life Sciences | `/industries/life-sciences` | Accelerating innovation, regulatory compliance, and operating-model transformation across pharmaceutical, biotechnology, healthcare, and medical-device organizations worldwide. |
| 6 | Energy | `/industries/energy` | Enabling energy-transition strategies, infrastructure modernization, operational resilience, and enterprise transformation across renewable, conventional, and integrated energy ecosystems. |
| 7 | Technology | `/industries/technology` | Driving platform modernization, scalable operating models, intelligent automation, and growth transformation for rapidly evolving global technology enterprises. |
| 8 | Telecommunications | `/industries/telecom` | Strengthening network modernization, digital customer experiences, operational agility, and enterprise transformation across next-generation telecommunications ecosystems. |
| 9 | Transportation | `/industries/transportation` | Operational scalability, logistics modernisation, and digital enablement across rail, road, port, and multi-modal networks. |

---

### 6.3 Industries Page CTA Banner `[LIVE SITE]`

**H2:**
> Ready to navigate transformation with clarity?

**Body:**
> HARTS partners with organisations navigating operational complexity, transformation pressure, and evolving strategic priorities.

**CTAs:**
- `Connect with HARTS` → `/contact`
- `How we help` → `/how-we-help`

---

## 7. Page: About Us

**Page title:** `About Us | HARTS`  
**Meta description:** `Learn about HARTS' story, team, and mission.`

---

### 7.1 Hero `[LIVE SITE]`

**Eyebrow:** About HARTS

**H1:**
> We exist to create
> clarity.

**Body:**
> HARTS closes the distance between strategic intent and organisational reality with the right rigour, the right people, and an uncompromising focus on what actually moves the needle.

**CTA:** `Connect with HARTS` → `/contact`

---

### 7.2 Our Story `[LIVE SITE]`

**Eyebrow:** Our story

**H2:**
> Built for the moments where progress matters.

**Paragraph 1:**
> HARTS partners with leadership teams navigating moments of decisive change — restructuring, expansion, modernisation, and the messy middle of transformation. Our craft is helping organisations think clearly, decide deliberately, and execute with operating discipline.

**Paragraph 2:**
> We are a senior team of strategists, operators, and technologists. We work side-by-side with our clients, leave capability behind, and measure ourselves by the durability of the outcomes we help create.

**3 proof bullets:**
- **Strategic clarity** — Sharper choices, calmer execution.
- **Operating discipline** — Decisions translated into running cadence.
- **Capability transfer** — Your teams own the outcome long after we leave.

---

### 7.3 Our People `[LIVE SITE]`

**Eyebrow:** Our people

**H2:**
> The architects of clarity

**Body:**
> A senior team of strategists and operators united by a commitment to sustainable, measurable change.

**4 team members — verbatim titles and bios:**

---

**Sreema Nallasivam**
- Role: CEO & Co-Founder
- Bio (live): Two decades guiding enterprise transformation across regulated, multi-market organisations.
- LinkedIn: https://www.linkedin.com/in/sreema-nallasivam-6a74498/

---

**Cristian Margaretic**
- Role: CEO & Co-Founder
- Bio (live): Operator-turned-advisor focused on strategy, operating models, and durable execution.
- LinkedIn: `#` (not yet published)

---

**Savio James Abraham**
- Role: Chief Operating Officer
- Bio (live): Builds the operational discipline that converts strategic intent into measurable progress.
- LinkedIn: https://www.linkedin.com/in/savio-james-abraham/

---

**Flavio Gall**
- Role: Director — Business Development
- Bio (live): Partners with leadership teams on growth, market clarity, and long-horizon strategy.
- LinkedIn: `#` (not yet published)

---

### 7.4 Manifesto Section `[LIVE SITE]`

**Eyebrow:** Our manifesto

**H2:**
> Manifesto Team

**Body:**
> Four dedicated teams that represent and protect the core values HARTS is built on — each holding the organisation accountable to what matters most.

**4 manifesto teams — verbatim:**

| Team name | Description |
|---|---|
| Transparency & Communication | Ensures transparency within and beyond the organisation — fostering open, honest communication at every level so that trust is built and sustained across leadership, teams, and external partners. |
| Attitude of Excellence | Sets and upholds an attitude of excellence across everything HARTS does — raising the bar on quality, commitment, rigour, and the standard of outcomes we deliver for our clients. |
| Well Being | Champions the well-being of every individual within the organisation — cultivating a healthy, supportive, and balanced environment where people are genuinely cared for and can thrive. |
| Inclusivity | Drives inclusivity across the organisation — ensuring every voice is heard, every person is seen, and that diversity of perspective, background, and experience is celebrated as a strategic strength. |

---

### 7.5 About Page CTA Banner `[LIVE SITE]`

**H2:**
> The right partner changes everything.

**Body:**
> Connect with HARTS to explore how strategic clarity and disciplined execution can unlock transformative value for your organisation.

**CTAs:**
- `Connect with HARTS` → `/contact`
- `How we work` → `/how-we-work`

---

## 8. Page: Careers

**Page title:** `Careers | HARTS Consulting`  
**Meta description:** `Explore careers at HARTS Consulting and join a team shaping strategy, transformation, and digital enablement.`

---

### 8.1 Hero `[LIVE SITE]`

**Eyebrow:** Careers

**H1:**
> Build a career that.
> Defines Transformation.

**Body:**
> Join a senior team of strategists, operators, and technologists shaping decisive, durable change for global leaders.

**CTA:** `Explore open roles` → `#openings`

---

### 8.2 Culture Section `[LIVE SITE]`

**Eyebrow:** Culture

**H2:**
> Shape the Future of Consulting.

**Body:**
> At HARTS, we foster an environment of radical clarity, collaborative innovation, and disciplined thinking. We're looking for leaders who want to move fast and apply digital enablement to the world's most complex business challenges.

---

### 8.3 Open Roles `[LIVE SITE]`

**Eyebrow:** Openings

**H2:**
> Where you fit in

**Subhead:**
> Eight disciplines. One mission. Find your place.

**8 Role Cards:**

| Discipline | Role Title | Description | Route |
|---|---|---|---|
| Management Consulting | Strategy & Growth Partner | Shape growth agendas, executive priorities, and transformation roadmaps for complex organisations. | `/contact?role=management-consulting` |
| Digital Enablement | Transformation Architect | Design practical digital ecosystems, operating rhythms, and change pathways that teams can sustain. | `/contact?role=digital-enablement` |
| Business Operations | Operations Lead | Build leaner operating models, clearer governance, and measurable execution across functions. | `/contact?role=business-operations` |
| Analytics, Data & Research | Data Strategy Director | Turn fragmented data into sharper decisions, better visibility, and actionable business intelligence. | `/contact?role=analytics-data-research` |
| Design | Transformation Design Lead | Translate complex challenges into clear journeys, service models, and elegant delivery experiences. | `/contact?role=design` |
| Technology | Senior Cloud Consultant | Help clients modernise systems, improve resilience, and move critical services to scalable platforms. | `/contact?role=technology-cloud` |
| Technology | AI/ML Specialist | Apply AI and machine learning to improve insight generation, workflow automation, and decision support. | `/contact?role=technology-ai-ml` |
| Product | Digital Product Manager | Lead product discovery, prioritisation, and delivery to create useful, measurable digital products. | `/contact?role=product` |

**Each card CTA label:** `View roles→`

---

### 8.4 Coming Soon Section `[LIVE SITE]`

**Eyebrow:** Coming soon

**H2:**
> More openings will be published here shortly.

**Body:**
> If you don't see a perfect fit yet, share your profile with us and tell us how you can contribute.

**CTAs:**
- `Send your interest` → `/contact?source=careers`
- `Talk to talent team` → `/contact`

---

## 9. Page: Contact

**Page title:** `Contact Us | HARTS`  
**Meta description:** `Connect with HARTS global headquarters and regional offices.`

---

### 9.1 Hero `[LIVE SITE]`

**Eyebrow:** Connect

**H1:**
> Let's start a
> conversation.

**Body:**
> Whether you are navigating a major transformation, exploring a growth opportunity, or seeking an independent strategic perspective, our team is ready to engage.

**CTA:** `Send an inquiry` → `#inquiry`

---

### 9.2 Inquiry Form `[LIVE SITE]`

**Section header:** Send us your inquiry

**Body:**
> Share your challenge and a senior consultant will respond within one business day.

**Form fields:**

| Field | Type | Required |
|---|---|---|
| Full Name | text | Yes |
| Work Email | email | Yes |
| Company / Organisation | text | Yes |
| Role / Title | text | No |
| Phone Number | tel | No |
| Area of Interest | select | No |
| How can we help? | textarea | Yes |

**Area of Interest options:**
- Strategy & Advisory
- Operational Transformation
- Mergers & Acquisitions
- People & Organisation
- Technology & Innovation
- Sustainability
- GCC Setup
- Other

**Privacy notice:**
> Your information is handled in strict confidence and will never be shared with third parties. We respond to every inquiry within one business day.

**Submit label:** `Submit Inquiry`

---

### 9.3 Find Us `[LIVE SITE]`

**Section header:** Find Us

**Office: Coimbatore**
```
7C, Mayflower Signature
Avinashi Road, Peelamedu
Coimbatore – 641004
Tamil Nadu, India

Email: hello@globalharts.com
Phone: +91 422 000 0000
```

**Map embed query:** `Mayflower Signature Avinashi Road Peelamedu Coimbatore 641004`

---

## 10. Strategic Layer: Identity & Positioning

`[STRATEGY SESSION]` — Approved at strategy workshop. Supplements and deepens the live site copy.

### 10.1 Core Positioning Statement

> The transformation partner for organisations in motion — navigating mergers, scaling operations, and building the people and process capability to sustain what comes next.

### 10.2 Strategic Taglines

| Usage | Copy |
|---|---|
| Hero statement | We build the operating model. We leave the capability. |
| Short form | Transformation that stays. |
| Integrated pitch | Where people, process and performance converge. |

**Recommended lead:** *"We build the operating model. We leave the capability."*
Rationale: 14 words. No competitor can say this honestly. Signals BOT delivery, client ownership, a fundamentally different model to advisory-only firms.

### 10.3 The Four Verbs — Identity Architecture

These four verbs define HARTS' differentiated position. Use consistently across all pages alongside live site copy.

| Verb | What it means |
|---|---|
| **We integrate** | People, process, and operational strategy in one engagement — not separate workstreams |
| **We execute** | Build-Operate-Transfer — not advisory alone, not implementation alone, both |
| **We transfer** | When we leave, the client owns a functioning capability — not a report |
| **We measure** | Success = how the organisation performs after we exit |

### 10.4 What HARTS Is Not

Use to maintain identity discipline and say no to the wrong briefs:

- ❌ Not a strategy house — strategy is embedded in delivery, never the standalone product
- ❌ Not a technology integrator — vendor-neutral, tool-agnostic
- ❌ Not an HR advisory — people work connects directly to process and performance
- ❌ Not a generalist consultancy — serves organisations in motion, not every brief

### 10.5 Target Client Profile

**Primary target:** Mid-market organisations (£100M–£2Bn revenue) in active change:
- Post-merger or acquisition (6–18 months post-deal)
- Active scale-up (Series C+ or PE-backed growth)
- GCC / shared service setup (first-time or restructuring)
- No internal COE or immature CI capability

**Fastest pipeline:** Evora IT Solutions Group client base (SAP/ServiceNow ecosystem)

**Priority sectors:** Financial services, Pharma & life sciences, Utilities & energy, Manufacturing

### 10.6 The 5 Core USPs

1. **Integrated people + process + tech** — neither people-first nor tech-first; both in one team
2. **Post-merger 100-day playbook with a COE that stays** — builds, operates, and transfers; doesn't leave a slide deck
3. **Vendor-neutral process intelligence** — no Celonis/Signavio/SAP licence conflict
4. **Build-Operate-Transfer across all service lines** — not just GCC; applies to every engagement
5. **Culture + innovation as CI multiplier** — culture as an operational lever, not a byproduct

---

## 11. Strategic Layer: BOT Delivery Model

`[STRATEGY SESSION]`

### 11.1 Overview

Build-Operate-Transfer (BOT) is not a service line. It is the delivery methodology for every HARTS engagement regardless of service area.

```
ADVISE → BUILD → OPERATE → TRANSFER
```

- Advisory firms: ADVISE only
- Implementation firms: BUILD only
- HARTS: all four stages

### 11.2 Phase Definitions

| Phase | Typical duration | What HARTS does |
|---|---|---|
| Advise | Weeks 1–3 | Diagnose, scope, design the target operating model |
| Build | Weeks 4–10 | Build the function, team, and governance alongside client |
| Operate | Weeks 8–16 | Shadow / parallel runs, SLA stabilisation, knowledge transfer |
| Transfer | Final 4 weeks | Handover documentation, sign-off, capability certification |

### 11.3 What Clients Buy vs What HARTS Delivers

| Client's stated need | HARTS' actual deliverable |
|---|---|
| Post-merger consulting | A functioning operating model the client owns |
| A new COE | A team that runs CI without HARTS present |
| An offshore / GCC centre | A transferred, governed, self-sufficient operation |
| Change management support | An organisation that can navigate change itself |
| A process mining implementation | A CI team that uses the tool effectively |

### 11.4 The One Non-Negotiable

> If it doesn't run without us, we haven't finished the job.

---

## 12. Strategic Layer: Capability Confidence Map

`[STRATEGY SESSION]` — Derived from capability mapping workshop (Evora/ESP/GMR tracks).

### 12.1 Confidence Tiers

| Tier | Services | Action |
|---|---|---|
| Lead now — sell actively | People & Organisation, M&A / PMI | Front every pitch with these |
| Sell with proof — invest | COE Design & CI, GCC Setup (BOT) | Need case studies before scaling BD |
| Embed only — do not lead | Strategy as standalone product | Deliver inside other engagements only |

### 12.2 Capability Detail

| Capability | Confidence | Live engagements proving it | Key gap |
|---|---|---|---|
| People, OD & change | High | Evora (exec coaching, OD, E4C), ESP (org design, recruitment), GMR (talent, EVP, learning org) | Needs published case studies |
| M&A / Post-merger integration | High | Evora (100-day playbook), ESP (MSA, BOT transition, hypercare) | How many live PMI tracks? Document them. |
| COE design & CI | Medium | Evora (COE, control tower), GMR (CI COE culture, innovation) | Vendor-neutral positioning must be explicit |
| GCC / shared service setup | Medium | ESP (entire track = GCC setup lifecycle) | Crowded market — position on regulated-industry angle |
| Strategy as product | Do not lead | GMR (BD, portfolio expansion) | Most commoditised consulting service — fold into other engagements |

---

## 13. Strategic Layer: Competitive Positioning

`[STRATEGY SESSION]`

### 13.1 Landscape

| Competitor type | Examples | Threat | HARTS advantage |
|---|---|---|---|
| Big 4 | Deloitte, KPMG, PwC, EY | High | Too slow, expensive, over-engineered for mid-market. Exit too early. |
| Tech-led SI partners | Capgemini + Celonis, Accenture + Signavio | Medium | Tied to licence revenue; weak OCM; leave COE to client post go-live. |
| Boutique M&A / PMI | FTI, Kroll, West Monroe | Medium | Strong in legal/financial only; no people/culture; no BOT model. |
| HR / OD boutiques | Mercer, Korn Ferry, Aon | Low–medium | Advisory only; no execution; no process/tech integration. |

### 13.2 White Space Statement

> HARTS operates in the white space every competitor leaves: the integration of people, process, and operational strategy — executed through a Build-Operate-Transfer model — in a single engagement that doesn't end until the client owns the outcome.

### 13.3 What No Competitor Does

1. BOT across all service lines — not just GCC setup
2. People + process in one team — not referred out
3. Vendor-neutral process advisory — no licence dependency
4. Retainer-based CI governance — recurring revenue anchor
5. Founders who've operated at scale — Sreema's 14-year GCC leadership is practitioner credibility no advisory firm can match

---

## 14. Strategic Layer: Sreema's Voice — Approved Quotes

`[STRATEGY SESSION]` — In-character, approved for use across pages, case studies, and thought leadership.

| Context | Quote |
|---|---|
| General identity | "The world doesn't need another consulting firm that tells you what to do. It needs one that stays long enough to make sure it gets done." |
| Founding story | "We built HARTS because we were tired of watching transformation projects end with a beautiful slide deck and no lasting change." |
| On people & change | "I've sat in the chair. I know what it feels like when you're trying to change a 3,000-person organisation and nobody has told the people why. We start there — with the why — and build outward." |
| On M&A | "Most consultants hand you a 200-slide integration plan and leave. We stay. We run the first 100 days alongside your team because that's when deals are won or lost." |
| On GCC | "I spent 14 years building and running Metro's global solution centre. This isn't theory for us — it's muscle memory. We've done the night shifts, the compliance audits, the first go-live." |
| On process tools | "Everyone sells process mining tools. We build the team that makes those tools actually work. The tool is 20% of the value. The people running it are the other 80%." |
| On the BOT model | "The deliverable is not a framework. It is a functioning capability. If it doesn't run without us, we haven't finished the job." |
| On contact | "We don't do discovery calls that waste your time. If you've read this far, you already know what we do. Let's talk about what you need." |
| On hiring | "We hire people who've done the work, not people who've studied it. If you've built something, scaled something, or turned something around — we should talk." |
| On strategy | "We don't write strategy reports. We sit with leadership teams until they can make the decision they've been avoiding." |
| On operations | "Operations are where strategy either lives or dies. We make sure it lives." |
| On innovation | "Innovation isn't a hackathon. It's a system. We build the system." |

---

## 15. Strategic Layer: OKRs — Immediate Focus Q3 2026

`[STRATEGY SESSION]`

### 15.1 Summary

| # | Objective | Owner | Horizon |
|---|---|---|---|
| OKR 01 | Formalise Evora channel and build qualified pipeline | Flavio Gall + Sreema | Weeks 1–12 |
| OKR 02 | Publish proof of delivery (case studies + LinkedIn) | Savio + Sreema | Weeks 1–8 |
| OKR 03 | Productise the 100-day PMI playbook | Cristian + Flavio | Weeks 2–10 |
| OKR 04 | Lock identity — one voice everywhere | Sreema (final) + Cristian | Weeks 1–6 |
| OKR 05 | Build internal delivery operating rhythm | Savio + all leaders | Weeks 1–12 |

### 15.2 OKR Detail

---

**OKR 01 — Pipeline: Revenue engine**

Objective: Formalise the Evora channel and build a qualified pipeline that funds the first 12 months.

Key Results:
1. Sign formal co-sell / referral agreement with Evora IT Solutions — defined trigger events and commission structure → **1 signed MSA**
2. Generate 6 qualified leads from Evora ecosystem (clients in active M&A, S/4HANA migration, or GCC setup) → **6 leads**
3. Close 2 paid engagements sourced from Evora referral or PE portfolio → **2 closed deals**

---

**OKR 02 — Credibility: Proof before positioning**

Objective: Publish proof of delivery so the market knows HARTS does this work — not just claims it.

Key Results:
1. Publish 3 anonymised case studies (Evora scale-up, ESP BOT setup, GMR capability build) with quantified outcomes → **3 published**
2. Secure 2 client testimonials for proposals and website → **2 testimonials**
3. Sreema or Savio publish 4 LinkedIn posts on HARTS identity and BOT model → **4 posts live**

---

**OKR 03 — Product: Package the 100-day playbook**

Objective: Turn the post-merger 100-day playbook into a named, scoped, priced product the BD team can sell without customisation.

Key Results:
1. Define product scope, deliverables, phases, team shape, fixed-price tiers (£80K / £150K / £250K) in 1-page sell sheet → **1 sell sheet**
2. Build reusable proposal template customisable in under 2 hours → **1 template**
3. Pitch productised playbook to 3 PE firms or post-acquisition clients → **3 pitches**

---

**OKR 04 — Identity: One voice, everywhere**

Objective: Lock the HARTS strategic identity so every touchpoint says the same thing.

Key Results:
1. All 4 leadership team members deliver identity statement without notes in under 60 seconds → **4/4 aligned**
2. Update live site to reflect refined positioning, BOT model, and Sreema's voice → **Site live**
3. Create 1 pitch deck (max 12 slides) usable for all 8 service lines → **1 deck**

---

**OKR 05 — Delivery engine: Operating discipline**

Objective: Build internal operating cadence that makes HARTS a firm, not individuals running separate client tracks.

Key Results:
1. Fortnightly leadership cadence (60 min) — no missed sessions for 6 consecutive weeks → **6/6 sessions**
2. Document internal delivery SLA (response time, deliverable cadence, escalation protocol) → **1 SLA doc**
3. Shared knowledge base (Notion / Confluence) housing all case studies, templates, playbooks → **1 KB live**

### 15.3 Execution Sequence

```
Week 1  →  Lock identity (OKR 04)
Week 2  →  Evora MSA conversation (OKR 01)
Week 3  →  First case study published (OKR 02)
Week 4  →  Playbook product defined (OKR 03)
Week 6  →  Delivery cadence running (OKR 05)
```

**The non-negotiable:** OKR 04 (identity) in week 1. Everything else runs slower without it.

---

## 16. Design System & Assets

### 16.1 Button Styles

```css
/* Primary CTA */
.btn-primary {
  background: #3B82F6;
  color: #FFFFFF;
  padding: 14px 32px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.4px;
  border-radius: 6px;
  border: none;
  transition: background 0.25s, transform 0.25s;
}
.btn-primary:hover {
  background: #2563EB;
  transform: translateY(-1px);
}

/* Outline / Secondary */
.btn-outline {
  background: transparent;
  color: #94A3B8;
  padding: 14px 32px;
  font-size: 13px;
  border: 0.5px solid rgba(255,255,255,0.07);
  border-radius: 6px;
  transition: all 0.25s;
}
.btn-outline:hover {
  background: rgba(255,255,255,0.03);
  border-color: rgba(255,255,255,0.14);
  transform: translateY(-1px);
}
```

### 16.2 Card Styles

```css
.card {
  background: #131C33;
  border: 0.5px solid rgba(255,255,255,0.07);
  border-radius: 10px;
  padding: 28px 24px;
  transition: border-color 0.3s, background 0.3s;
}
.card:hover {
  border-color: rgba(255,255,255,0.14);
  background: #1A2744;
}

/* Left-accent variant (services, manifesto) */
.card-accent-left {
  border-left: 3px solid var(--service-color);
  border-radius: 0 10px 10px 0;
}
```

### 16.3 Eyebrow Component

```html
<div class="eyebrow">
  <div class="eyebrow-bar"></div>
  <span>Section label</span>
</div>
```
```css
.eyebrow {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}
.eyebrow-bar {
  width: 28px;
  height: 2px;
  border-radius: 1px;
  background: #3B82F6;
}
.eyebrow span {
  font-size: 11px;
  letter-spacing: 2px;
  color: #64748B;
  text-transform: uppercase;
  font-family: 'JetBrains Mono', monospace;
}
```

### 16.4 Blockquote / Sreema Quote Component

```html
<blockquote class="quote-sreema">
  <span class="quote-mark" aria-hidden="true">"</span>
  <p>Quote text here.</p>
  <cite>— Sreema Nallasivam, CEO & Co-Founder</cite>
</blockquote>
```
```css
.quote-sreema {
  position: relative;
  background: #131C33;
  border: 0.5px solid rgba(255,255,255,0.07);
  border-radius: 10px;
  padding: 28px 32px;
}
.quote-mark {
  font-family: 'Instrument Serif', Georgia, serif;
  font-size: 56px;
  line-height: 1;
  color: #3B82F6;
  opacity: 0.2;
  position: absolute;
  top: -6px;
  left: -2px;
}
.quote-sreema p {
  font-family: 'Instrument Serif', Georgia, serif;
  font-size: 18px;
  font-style: italic;
  color: #94A3B8;
  line-height: 1.55;
  padding-left: 24px;
}
.quote-sreema cite {
  display: block;
  font-size: 11px;
  color: #64748B;
  padding-left: 24px;
  margin-top: 10px;
  font-style: normal;
}
```

### 16.5 Scroll Fade Animation

```javascript
function useFade(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

// Applied styles:
{
  opacity: visible ? 1 : 0,
  transform: visible ? 'translateY(0)' : 'translateY(24px)',
  transition: `opacity 0.6s cubic-bezier(.23,1,.32,1) ${delay}s,
               transform 0.6s cubic-bezier(.23,1,.32,1) ${delay}s`
}
```

### 16.6 Navbar Scroll Blur

```javascript
const navOpacity = Math.min(scrollY / 120, 1);

// Nav background:
`rgba(7, 11, 20, ${0.4 + navOpacity * 0.55})`

// Nav backdrop:
backdropFilter: 'blur(16px)'

// Nav border:
`0.5px solid rgba(255,255,255,${navOpacity * 0.06})`
```

### 16.7 Page Layout Tokens

```css
/* Section padding */
.section        { padding: 100px 48px; }
.section-hero   { padding: 140px 48px 100px; } /* Accounts for fixed nav */
.section-light  { padding: 80px 48px; }

/* Section divider */
.section + .section { border-top: 0.5px solid rgba(255,255,255,0.07); }

/* Grid systems */
.grid-2  { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
.grid-3  { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 14px; }
.grid-4  { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
.grid-content { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
```

### 16.8 Service Colour Map

```javascript
const SERVICE_COLORS = {
  innovation:       '#FB7185', // rose
  ma:               '#34D399', // green
  operation:        '#3B82F6', // blue
  strategy:         '#3B82F6', // blue
  transformation:   '#3B82F6', // blue
  gcc:              '#FBBF24', // amber
  sustainability:   '#FB7185', // rose
  people:           '#34D399', // green
};
```

### 16.9 External Asset URLs

| Asset | URL |
|---|---|
| Logo | `https://harts-website.vercel.app/HARTS%20Consulting%20LBG.png` |
| Footer/CTA image | `https://harts-website.vercel.app/image.png` |
| Home discussion image | `https://harts-website.vercel.app/images/home-page-discussion.jpeg` |
| LinkedIn company | `https://www.linkedin.com/company/harts-consulting/` |
| Sreema LinkedIn | `https://www.linkedin.com/in/sreema-nallasivam-6a74498/` |
| Savio LinkedIn | `https://www.linkedin.com/in/savio-james-abraham/` |

---

*End of document.*
*[LIVE SITE] content = verbatim from harts-website.vercel.app, scraped May 2026.*
*[STRATEGY SESSION] content = approved from whiteboard analysis sessions, capability mapping workshop, identity refinement, and OKR workshop.*
*Review all content with a qualified person before publishing externally.*
