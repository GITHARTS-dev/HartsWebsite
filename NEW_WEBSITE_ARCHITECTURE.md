# HARTS Website - Proposed New Architecture

> Synthesis of: `HARTS_brand_content.md`, `whiteboard.png` (capability mapping image), the sales-and-business-development flipchart (strategic identity / capability / market questions), the current Next.js implementation under `app/`, and the earlier `harts-website-full.jsx` prototype.
>
> **Scope:** architecture only. No code changes proposed here - this document is the blueprint to align on before any rebuild.

---

## 0. Framing - what each input actually said

- **Live site** (8 services × 9 industries × generic "principles") - reads like every other consulting firm. Soft, hedged copy. Doesn't tell a visitor what HARTS does that no one else does.
- **Brand doc strategy layer** - hard, specific positioning. BOT delivery, "we leave the capability", Sreema's 14 years at Metro GSC, vendor-neutral, mid-market in motion.
- **The whiteboard (image-2)** - capabilities organised under three client-engagement tracks: **EVORA (Scale Up)**, **ESP (Setup)**, **GMR (Develop)**. This is the real internal mental model.
- **The flipchart (image-1)** - the three strategy questions: Identity (who are we becoming), Capability (what we can confidently deliver), Market (where we can win).
- **`harts-website-full.jsx`** - the earlier prototype is closer to the truth than the live site: 4 service clusters (People & Org / M&A / COE & CI / GCC), a dedicated BOT page, a Leadership page with Rufus D'Souza. It loses the soft language but gains the spine.

The gap between the live site and the brand strategy is the whole problem. The live site sells *consulting*. The strategy doc says HARTS sells something else - a Setup → Develop → Scale BOT engine that leaves a functioning capability behind.

---

## 1. The single organising idea

> **HARTS is the partner you bring in when your organisation is in motion - to set up, develop, or scale a capability - and the only one that doesn't leave until you own it.**

Every architectural choice below derives from that one sentence. The site's job is to make a senior buyer, in under 60 seconds, understand three things:

1. which lifecycle stage they're in,
2. what HARTS does there,
3. why the BOT model means HARTS is structurally different from a Big 4 or HR boutique.

---

## 2. Re-architecture: from "8 services" to "3 lifecycle stages"

The live site forces visitors to self-serve through 8 service tiles that don't map to how clients think about their own moment. The whiteboard already solved this - three client-engagement tracks reflecting three lifecycle stages.

| New top-level offer | Mapped from whiteboard | What it answers |
|---|---|---|
| **Set Up** | ESP track | "I need to stand something up - a GCC, an SSC, a function, a post-acquisition entity. Take us from nothing to running." |
| **Develop** | GMR track | "I have it running, but it's not yet world-class. Build the CoE, the talent pipeline, the CI culture, the leadership bench." |
| **Scale Up** | EVORA track | "We're growing fast, going through M&A, transforming. Run the messy middle alongside us until the new state is stable." |

Underneath each stage, the existing 8 service lines are re-grouped as **plays** the client can recognise. Same content, dramatically better wayfinding.

---

## 3. New sitemap

```
/
├─ /                                  Home
├─ /what-we-do/                       What We Do (overview - Setup / Develop / Scale)
│   ├─ /set-up                          Setup engagements (GCC + M&A Day 1 + Transformation startup)
│   ├─ /develop                         Develop engagements (COE / CI / People & Org / Innovation)
│   └─ /scale                           Scale Up engagements (M&A integration, Operations, Strategy embedded)
│
├─ /how-we-deliver/                   The BOT Model  ← elevated to top nav (NEW)
│   └─ #advise  #build  #operate  #transfer
│
├─ /capabilities/                     Capability catalogue (kept, but reframed)
│   ├─ people-and-organisation
│   ├─ mergers-and-integration
│   ├─ coe-and-continuous-improvement
│   ├─ gcc-and-shared-services
│   ├─ operations
│   ├─ strategy                          (embedded only - no standalone product page sold)
│   ├─ innovation
│   └─ sustainability
│
├─ /sectors/                          Sectors (renamed from /industries - sharper word)
│   └─ [9 sector pages, kept]
│
├─ /proof/                            Proof  ← NEW top nav
│   ├─ /case-studies                    Anonymised Evora / ESP / GMR engagements
│   ├─ /perspectives                    Sreema's writing, BOT explainers (replaces blog)
│   └─ /metrics                         Concrete numbers: countries, languages, transfer rate
│
├─ /firm/                             About → Firm  (renamed)
│   ├─ /story                           Origin (Metro GSC → HARTS)
│   ├─ /leadership                      Sreema, Cristian, Savio, Flavio (Rufus when verified)
│   ├─ /manifesto                       The 4 manifesto teams
│   └─ /partners                        Evora, alliance partners (NEW)
│
├─ /careers/                          Careers (kept, restructured)
│
└─ /contact/                          Contact (kept; form refactored)
```

### What changes in the top nav (the 5-second test)

```
Current:  Where We Engage  |  How We Help  |  How We Work  |  About Us  |  Careers  |  Connect
Proposed: What We Do  |  How We Deliver  |  Sectors  |  Proof  |  Firm  |  Connect
```

Two surgical changes:

1. **`How We Deliver`** replaces `How We Work`. The page becomes a 100% BOT explainer - the single most differentiated thing HARTS sells. The brand doc says no competitor can match this; the live site buries it.
2. **`Proof`** becomes a top-nav peer. OKR 02 says "credibility before positioning". The site currently has none. Without published proof, the rest reads as claims.

`Careers` stays as a secondary button next to `Connect` (already is).

---

## 4. Page-by-page architecture

### 4.1 `/` Home - three jobs, one scroll

| Block | Job | Content |
|---|---|---|
| 1. Hero | One sentence to identify the buyer | Eyebrow: `Strategy. Transformation. Clarity.` H1: **"We build the operating model. We leave the capability."** (the brand doc's recommended lead - 14 words, no competitor can say it honestly). Sub: one-liner on mid-market in motion. CTA: `Start a conversation`. Drop the current vague "Building Future Enterprises" line - interchangeable with any Big 4. |
| 2. Three doors | Make the visitor pick a lifecycle stage in 5 seconds | Three large clickable tiles: **Set Up** / **Develop** / **Scale Up** - each with one question ("Standing something new up?" / "Maturing what you have?" / "In the messy middle?") and a hover deep-link |
| 3. The BOT promise | The differentiator | Animated 4-step strip: **Advise → Build → Operate → Transfer**. One line under each. Sub-CTA: `See how we deliver` → `/how-we-deliver` |
| 4. Sreema quote band | Founder-credibility, single sentence | *"The world doesn't need another consulting firm that tells you what to do. It needs one that stays long enough to make sure it gets done."* - with portrait + Metro GSC credential. (Replaces the current generic "Vision" section.) |
| 5. Proof strip | The thing that's missing today | Three numbers: **39 countries** (Metro GSC scale), **25+ languages**, **0 reports as deliverable**. Below: 3 named case-study cards (anonymised) → `/proof/case-studies` |
| 6. Sectors strip | Reassurance for the sector-led buyer | 9 icons in a single row, link to `/sectors`. Smaller than today. |
| 7. CTA band | Convert | Replaces current "Partner CTA" - same shape, sharper copy: *"You already know what you need. Let's talk about how we run it."* |

**What gets cut from current home:**

- The 6 "pain points" grid - generic, every consulting firm runs it. Replace with the three-doors model.
- The People / Process / Technology pillars - these are *capabilities*, not differentiators. They move into `/how-we-deliver`.

---

### 4.2 `/what-we-do/` → `/set-up`, `/develop`, `/scale`

Three near-identical page templates. Each is a **lifecycle-stage landing page**, not a service tile dump.

Template per page:

1. Hero - one-line definition of the stage + the client question it answers
2. **"You're here if…"** - three trigger conditions (e.g. for Set Up: *"You've signed off on a GCC", "You've just acquired an entity", "You're spinning out an SSC"*)
3. **Plays we run in this stage** - 3–4 cards. For Set Up: *GCC build-operate-transfer*, *PMI Day 1 readiness*, *MSA + governance design*. Each card links to its capability page in `/capabilities/`
4. **The BOT lifecycle, applied to this stage** - visual showing where Advise/Build/Operate/Transfer typically lands in a Setup engagement
5. **Stage-specific proof** - one case study + one Sreema quote (e.g. for Set Up: *"I spent 14 years building Metro's global solution centre…"*)
6. CTA - `Tell us where you are` → `/contact?stage=setup`

This is the page architecture that unlocks the 5 core USPs. The 8 services on the live site map to plays *inside* these three pages.

---

### 4.3 `/how-we-deliver/` - promoted to top nav (was buried)

Single long page. Currently the site has a "How We Work" page with 5 generic principles (Clarity, Strategy with Execution, Human-Centered, etc.) - bin them. Interchangeable with any firm.

New structure:

1. Hero: **"Most firms advise. Some build. We do both - and we transfer."**
2. The four-stage BOT diagram (Advise → Build → Operate → Transfer), interactive
3. **What advisory firms deliver vs. what HARTS delivers** - brand doc table at section 11.3, verbatim
4. **The non-negotiable** - *"If it doesn't run without us, we haven't finished the job."* - full-bleed quote
5. **Inside an engagement** - week-by-week shape of a typical 16-week BOT engagement
6. **The four verbs** - We integrate / We execute / We transfer / We measure (brand doc §10.3)
7. CTA

This page becomes the most-cited link in any HARTS proposal, LinkedIn post, or pitch deck. It earns the elevated nav slot.

---

### 4.4 `/capabilities/[slug]` - preserved, retuned

Keep all 8 service detail pages, but:

- **Add a "Where this fits"** band at the top of each: *"This capability runs inside Set Up / Develop / Scale Up engagements"* with chips
- **Add Sreema's voice quote** to each (already drafted in brand doc §4.6)
- **Strategy page** specifically labelled `Embedded only - we do not sell strategy as a standalone product` (brand doc §12.1 - "do not lead"). This is the discipline OKR 04 needs.
- **Sustainability page** kept but de-emphasised in nav weight until there's proof.

---

### 4.5 `/sectors/` (was `/industries`)

Keep the 9 sector pages. One structural addition:

- **Sector landing** gets a "**Setup / Develop / Scale** in this sector" mini-grid - connects sector view to lifecycle view
- **Each sector page** gets a "**Why this sector for HARTS**" block - 2 lines on credibility (e.g. for *Life Sciences*: regulated GCC build is in Sreema's muscle memory). If credibility isn't real for a sector, the page is marked "Selective engagements" instead of bluffing.

---

### 4.6 `/proof/` - net-new top-nav section (the most important addition)

The brand doc's OKR 02 is *"publish proof of delivery so the market knows HARTS does this work - not just claims it"*. The current site has zero proof. This is the biggest credibility gap.

```
/proof/
├─ /case-studies          3 anonymised cases at launch (Evora scale-up, ESP setup, GMR development)
├─ /perspectives          Sreema's voice - long-form pieces, replaces "blog"
└─ /metrics               Hard numbers: countries served, languages, transfer success rate, repeat-client %
```

Each case study uses a fixed template: **Where they were → What we built → What we transferred → What runs today without us**. Anonymous until clients consent to be named. Three at launch; one new every quarter is the suggested cadence.

---

### 4.7 `/firm/` (renamed from `/about-us/`)

| Subpage | Purpose | Notable change |
|---|---|---|
| `/firm/story` | Origin narrative | Lead with Sreema's Metro GSC → HARTS story, not abstract phrasing. The current "We exist to create clarity" is fine as a coda; the story should anchor it. |
| `/firm/leadership` | Team page | Four published leaders at launch: Sreema (CEO), Cristian (CEO), Savio (COO), Flavio (BD). **Rufus D'Souza added in Week 5/6 once verified** (see §8). Each leader gets: portrait, role, *what they actually did* (not "two decades of guiding…"), Sreema-style voice quote, LinkedIn. |
| `/firm/manifesto` | The 4 manifesto teams | Kept as-is - this is good content. |
| `/firm/partners` | NEW | Names Evora IT Solutions Group as a co-sell partner. The brand doc says this is the fastest pipeline channel; naming the relationship credibly shortens the trust gap with Evora-adjacent buyers. Only ship after MSA is signed (OKR 01). |

---

### 4.8 `/careers/` - restructured

Current page lists 8 hypothetical roles. None exist as confirmed openings. That reads as a phantom team.

Proposed:

1. Hero: *"We hire people who've done the work, not people who've studied it."* (Sreema voice)
2. **What we look for** - 4 traits, not 8 fake roles
3. **Currently hiring** - *only* real, live openings (zero is fine - say "We're not hiring right now. Send your profile, we'll come back when we are.")
4. **Disciplines we draw from** - the current 8 categories repurposed as "we hire from these disciplines" rather than as fake openings
5. CTA to talent inbox

---

### 4.9 `/contact/` - same shape, sharper form

Two changes:

1. **Lifecycle-stage selector** in the form: *"Where are you in your journey? (Setup / Develop / Scale / Not sure)"* - routes the inquiry to the right person
2. **Drop the "Phone Number" field** until there's someone to staff it. Right now `+91 422 000 0000` in the footer is clearly a placeholder - an unforced credibility leak. Either ship a real number or remove the placeholder.

---

## 5. Cross-cutting changes

### 5.1 Content discipline (apply globally)

The live site systematically uses softeners that violate the brand doc's voice principles ("synergy", "holistic", "end-to-end", "navigate complexity", "leverage"). Cut them. The brand voice principles from §1.6 should be the actual voice - the prototype JSX shows what that sounds like.

A 30-minute pass on every page, swapping:

- *"Empowering organizations to navigate complexity"* → *"We run the messy middle of transformation"*
- *"A trusted transformation partner"* → *"The partner that stays until it runs without us"*
- *"Building future enterprises"* → drop or replace with a verb

### 5.2 Sreema's voice (treated as a design element)

The brand doc has 12 approved Sreema quotes. Currently zero are on the live site. Place them as a recurring **quote band** component:

- One on home
- One per lifecycle-stage page (Setup / Develop / Scale)
- One per capability page (already drafted in brand doc §4.6)
- One on `/how-we-deliver`
- One on `/firm/story`

That's ~10 quotes in use - every page has a moment of practitioner credibility.

### 5.3 Replace the portal/cinematic intro on `/`

The current home has a full-screen red portal overlay that demands the user scroll/click to "enter the site". For a senior B2B buyer this is friction. Buyers arrive with a question, not appetite for a Vimeo intro. Replace with a 600ms hero fade-in. Save the cinematic moment for `/how-we-deliver` instead, where the patience is earned.

### 5.4 Visual identity choice (call out for decision)

There are **two palettes in this repo**:

- Brand doc + live site: single accent blue `#3B82F6`
- Prototype JSX (`harts-website-full.jsx`): four-colour gradient bar (red / blue / green / orange)

These are not compatible. The gradient bar is more distinctive but harder to apply consistently; the single-accent is safer but generic. This is a brand decision, not an architectural one - flagging it so it's resolved before the next build.

---

## 6. User journeys this architecture serves

Three primary personas, each with a clean path:

1. **The PE operator post-acquisition** (Set Up + Scale)
   `Home → Three doors → Set Up → reads "PMI Day 1 readiness" play → Sreema quote on M&A → case study → Contact (stage=setup)`

2. **The COO of a mid-market in transformation** (Develop)
   `Home → Three doors → Develop → reads "COE & CI" play → How We Deliver → Proof → Contact (stage=develop)`

3. **The CHRO standing up a GCC** (Set Up, sector-led)
   `Home → Sectors → Pharma & Life Sciences → "Regulated GCC build" call-out → Set Up → Sreema's 14-year Metro quote → Contact`

The current site supports none of these cleanly because lifecycle stage is invisible.

---

## 7. What ships first (phasing)

If landing this incrementally, the order that compounds fastest:

1. **Week 1** - Rewrite home (hero + three doors + Sreema quote + proof strip). Highest visibility per hour.
2. **Week 2** - Stand up `/how-we-deliver` as BOT page. Replace `/how-we-work`. The differentiator-defining page.
3. **Week 3** - `/what-we-do/set-up`, `/develop`, `/scale` (re-skins; reuses capability content).
4. **Week 4** - `/proof/case-studies` with three anonymised studies. Doesn't ship without this - credibility before positioning.
5. **Week 5** - Leadership page refresh + add Rufus (if verified), manifesto + partners.
6. **Week 6** - Content discipline pass across capability and sector pages.

Everything else (careers, contact form, visual polish) is week 6+.

---

## 8. Leadership-page caveats (from research pass)

Web access was blocked during the research run, so LinkedIn / globalharts.com couldn't be independently checked. What the brand doc and current `app/about-us/_components/about-page.tsx` already confirm is treated as verified; everything else is flagged.

**Verified from repo:**

- Sreema Nallasivam - CEO & Co-Founder. ~14 years at Metro Cash & Carry / Metro AG running Metro GSC India (per her approved voice quote). Approved bio line: *"two decades guiding enterprise transformation across regulated, multi-market organisations."*
- Cristian Margaretic - CEO & Co-Founder. Approved bio line: *"Operator-turned-advisor focused on strategy, operating models, and durable execution."*
- Savio James Abraham - COO. Approved bio line: *"Builds the operational discipline that converts strategic intent into measurable progress."*
- Flavio Gall - Director, Business Development. Approved bio line: *"Partners with leadership teams on growth, market clarity, and long-horizon strategy."*

**Not in any repo content - needs internal confirmation before publishing:**

- **Rufus D'Souza** - appears only in the `harts-website-full.jsx` prototype as Senior Advisor with a Metro GSC India background. Not in the brand doc, About page, or any other source. **Hold off the live site** until Sreema/Savio confirm role + affiliation + bio copy, or until LinkedIn can be checked directly.
- Sreema's exact Metro tenure dates and any pre-Metro employers.
- Savio's prior firms and total years of experience (repo has zero detail beyond the one-line bio).
- Whether the live `harts-website.vercel.app` sub-pages match the `[STRATEGY SESSION]` expanded copy in the brand doc, or are still placeholders.

None of the structural choices in §1–7 depend on the unverified leader detail. The leadership page is the only block that needs to wait on confirmation.

---

## 9. Open decisions

1. **Setup / Develop / Scale Up** as the primary nav model - confirm this is the right pivot, or push back if you'd rather keep "How We Help" naming.
2. **Single accent vs. four-colour gradient palette** - needs a call.
3. **Naming Evora as a partner publicly** on `/firm/partners` - depends on whether the co-sell MSA (OKR 01) is signed.
4. **Real phone number / replace placeholder** before the next deploy.
5. **Case study client consent** - three anonymised pieces is the minimum; would you also publish the Metro GSC story as Sreema's signature credential, or treat it as background only?
6. **Rufus D'Souza** - internal confirmation of role + bio, before he appears on `/firm/leadership`.

---

*End of architecture proposal.*
