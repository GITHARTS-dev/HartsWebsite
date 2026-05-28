# HARTS Website — Complete User Journey Mapping System

**Company:** HARTS — A senior team of strategists, operators, and technologists partnering with leadership through moments of decisive change.
**Tagline:** "We exist to create clarity."
**Founding principle:** "If it doesn't run without us, we haven't finished the job."
**Methodology:** Build · Operate · Transfer (BOT)

**Leadership team:**
- **Sreema Nallasivam** — Founder & CEO. The strategic brain and client-relationship anchor. Brings deep expertise in organisational design, transformation execution, and leadership advisory. Likely expectation from the website: it must communicate the intellectual depth and operational seriousness of HARTS — no fluff, no generic consulting speak, a site that earns its seat in the boardroom before a partner walks in.
- **Savio James Abraham** — COO. The operational backbone. Responsible for delivery excellence across engagements. Expectation from the website: it must reflect the discipline and rigour of how HARTS actually operates — the BOT methodology presented as an engineered system, not a marketing slide.
- **Hari Ram** — Senior leadership, PMP-certified. Project and programme management discipline. Brings structured execution methodology, likely experienced across large-scale implementations, GCC setups, and integration programmes. Expectation from the website: it must signal that HARTS has project governance credibility — certifications, methodology, rigour that procurement and PMO stakeholders recognise.
- **Rufus D'Souza** — Senior leadership. Business development and client-facing operations. Brings relationship-led growth, likely deep networks in target sectors. Expectation from the website: it must be a tool he can send to prospects — shareable, credible, impressive within two clicks. Every page must answer the question a prospect asks after a networking conversation: "Send me your website."

**Document purpose:** A complete reference for Claude Code to architect, design, and build harts.com around the actual behaviours of real visitors — not a single linear funnel, but the multiple parallel paths people actually take through a consulting website.

---

## PART ONE: THE CRITICAL INSIGHT — USERS DON'T FOLLOW A SINGLE PATH

Most journey mapping assumes users enter at Stage 1 and move neatly to Stage 8. Real consulting-website visitors don't do this. They enter at different pages, with different intent levels, at different times, and browse in radically different patterns.

**Claude Code must design the site for all of these patterns simultaneously.** Every page must work as both a first impression and a mid-journey deepening. No page can assume the visitor has seen any other page.

Below are the **twelve real visitor behaviour patterns** the HARTS site must handle. These are not theoretical — they are the actual ways people use consulting websites, derived from services-industry analytics patterns.

---

### Pattern 1: The Full-Homepage Scroller
**Who:** A curious senior leader who landed on the homepage (via direct URL, brand search, or a shared link) and has 3–5 minutes. They want to understand HARTS from top to bottom before deciding whether to dig deeper.

**Behaviour:** Lands on `/` → scrolls the full homepage slowly → reads every section → either clicks into a service or case study, or leaves with a mental bookmark.

**What the homepage must deliver, top to bottom:**
1. Immediate recognition: "This is for someone like me, in a situation like mine" (hero).
2. What HARTS does, described in the language of problems, not services.
3. How HARTS is different (BOT methodology — the founding principle).
4. Proof (case study snapshot, client logos, outcome metrics).
5. Who the people are (leadership faces and operating credentials).
6. A current thought (featured insight showing intellectual depth).
7. A clear next step that doesn't feel like a sales trap ("Start a conversation").

**Design implication:** The homepage must be self-contained. A visitor who scrolls to the footer and leaves should have absorbed: what HARTS does, how they're different, proof it works, and who the people are. If any of those four elements is missing from the homepage scroll, the pattern breaks.

---

### Pattern 2: The Capability-First Scanner
**Who:** A senior buyer or Champion who already has a shortlist and came to check HARTS's specific capabilities. They don't care about the brand story yet — they want to know "can they do the specific thing I need?"

**Behaviour:** Lands on `/` → ignores hero → goes directly to **Services** in the nav → scans the services overview → clicks into the one service that matches their need → reads it in detail → if satisfied, goes to case studies for proof → then either contacts or leaves.

**What this demands:**
- The **top nav must expose "Services" prominently** with a dropdown or mega-menu showing all six service lines clearly.
- The **services overview page** (`/services`) must let someone scan all six offerings in under 30 seconds. Each service card needs: a trigger-situation headline, a two-sentence description, and a link.
- Each **individual service page** must be self-sufficient — it cannot assume the visitor has read the homepage or the BOT methodology page. The BOT methodology must be explained within each service page (a short "how this works under BOT" section) in addition to having its own dedicated page.

---

### Pattern 3: The Proof-First Skeptic
**Who:** A senior leader who has been burned by consultancies before. Trust is zero. They want evidence before reading a single word of positioning.

**Behaviour:** Lands on `/` → goes straight to **Case Studies** → filters by their sector or problem type → reads one case study in full → if the outcome is credible, reads a second → then navigates to team → then maybe services → then maybe contacts.

**What this demands:**
- **Case studies must be reachable in one click from any page** (top nav).
- The case-study index must have **real filters** — by service line AND by sector/industry.
- Each case study must be structured so the *outcome is visible before scrolling* — the headline or card should include the result metric, not just the client name.
- Case studies must link to the relevant service page and to the team members involved, creating a trail the skeptic naturally follows.

---

### Pattern 4: The People-First Evaluator
**Who:** A CEO or board member who hires people, not firms. They want to know who they'll be sitting across from.

**Behaviour:** Lands on `/` → scrolls to leadership faces on homepage (or skips directly to **About** or **Team** in nav) → reads founder/CEO bios → checks LinkedIn profiles → evaluates operating backgrounds → if impressed, explores services or case studies → then contacts.

**What this demands:**
- **Leadership must be visible on the homepage** — real photos, real names, real titles. Not buried.
- The **Team page** must feel substantial, not like an afterthought. Bios must emphasise operating backgrounds, not consulting CVs. "Previously led the integration of a 4,000-person merger" beats "15 years in management consulting."
- Every leadership bio must have a **LinkedIn link** (this is verification — the CEO will check).
- Senior bios should have a **direct contact mechanism** — email or calendar link.

**Specific leadership requirements on the Team page:**

**Sreema Nallasivam — Founder & CEO**
Bio must communicate: strategic depth, the vision behind HARTS, operating credentials (not just advisory), the "why" behind the founding principle. The first sentence should establish her as a practitioner, not a consultant.

**Savio James Abraham — COO**
Bio must communicate: delivery discipline, operational excellence, the rigour behind BOT. Savio's bio should make a COO or Operations Director think "this person understands my world."

**Hari Ram — PMP®**
Bio must communicate: programme governance, structured methodology, large-scale execution. His PMP certification and project leadership credentials are trust signals for procurement and PMO stakeholders. The bio should reassure the Gatekeeper persona that HARTS has formal project management discipline.

**Rufus D'Souza**
Bio must communicate: client relationship depth, sector knowledge, a track record of long-term partnerships. Rufus's bio should feel like meeting someone at an industry event — credible, grounded, connected.

---

### Pattern 5: The LinkedIn-Referral Clicker
**Who:** Someone who saw a HARTS partner's post on LinkedIn, or received a link from a peer. They arrive with a fragment of context.

**Behaviour:** Lands on a **specific insights article** (most common LinkedIn entry point) → reads the article → if impressed, clicks the author bio → then navigates to About or Services → explores 2–3 pages → bookmarks → returns days later → eventually contacts.

**What this demands:**
- Every insights article must be **standalone-valuable** — useful even if the reader never visits another HARTS page.
- The **author byline must be rich** — photo, role, one-line operating background, LinkedIn link. The byline is HARTS's strongest trust signal on content pages.
- **Related content must be contextual** — "More from Sreema" or "Related: how we helped [client] with this exact problem" → case study link.
- The article must have a **soft CTA** at the end (newsletter, not "book a call") and the persistent nav must always offer the primary CTA.

---

### Pattern 6: The Methodology Investigator
**Who:** A COO, CTO, or transformation leader who is intellectually curious about HOW HARTS works, not just WHAT they deliver. BOT has caught their attention and they want to understand it deeply before anything else.

**Behaviour:** Lands on `/` → sees BOT mentioned on the homepage → clicks through to `/how-we-work` → reads the full methodology page → then checks case studies to see BOT in action → then reviews team to see who runs each phase → contacts.

**What this demands:**
- The **BOT methodology page** must be meaty — not a three-paragraph overview. It should cover:
  - What happens in each phase (Build, Operate, Transfer) in operating detail
  - Who is involved from HARTS and from the client at each phase
  - How long each phase typically lasts (ranges, not promises)
  - What the client gets at the end of each phase
  - How the commercial model works under BOT (this is what the CFO reads)
  - How hypercare and the light governance retainer work post-transfer
  - Why HARTS chose this model (the founding principle as philosophy, not slogan)
- The methodology page must **link to case studies that demonstrate each phase**.

---

### Pattern 7: The Multi-Visit Researcher
**Who:** A Champion doing serious due diligence over 2–4 weeks. They visit the site 4–7 times before ever contacting HARTS.

**Behaviour:**
- Visit 1: Homepage → Services overview → leaves.
- Visit 2 (3 days later): Returns → reads one service page in depth → reads a case study → leaves.
- Visit 3 (1 week later): Returns → reads two more case studies → checks team page → reads an insights article → leaves.
- Visit 4 (2 weeks later): Returns → reads pricing/working-with-us → contacts.

**What this demands:**
- The site must feel **consistent across visits** — consistent nav, consistent design language, consistent tone. A returning visitor must never feel lost.
- **Insights must be regularly updated** — a stale site loses the multi-visit researcher because they have nothing new to discover on visit 3.
- The **Working-with-us page** must exist and be substantial — this is what the researcher reads on their final visit before deciding to make contact.
- **Analytics must track returning visitors** — this segment is the highest-intent traffic HARTS has.

---

### Pattern 8: The Sector-Match Seeker
**Who:** A leader who only cares about one thing: "Have they worked in MY industry?"

**Behaviour:** Lands on `/` → looks for sector/industry indicators → if none visible, searches the site or leaves → if sectors are visible, clicks their sector → reads the sector page → checks case studies filtered to that sector → contacts.

**What this demands:**
- **Sector/industry pages** (`/sectors/{industry}`) for HARTS's strongest 3–5 verticals.
- Sectors must be **visible on the homepage** — a "Who we work with" or "Sectors" section.
- The **case-study filter** must work by sector.
- Each sector page must contain: sector-specific challenges, how HARTS's services apply to this sector, relevant case studies, the named partner who leads this sector.

---

### Pattern 9: The Urgent Problem Solver
**Who:** A leader in crisis. A merger was just announced. A GCC launch is behind schedule. A transformation has stalled and the board is asking questions next week. They need help NOW.

**Behaviour:** Lands on `/` (or a service page via Google) → scans for 15 seconds → either sees something that matches their crisis and contacts immediately, or leaves.

**What this demands:**
- The **homepage hero must speak to urgency** without feeling frantic. The trigger situations must be visible within the first screen.
- **Contact mechanisms must be reachable from any page within one click** — persistent nav CTA, partner emails on service pages, a phone number.
- **The form must be extremely short** — name, organisation, "what's happening", email. Five fields maximum.
- **Response-time commitment must be visible:** "A partner will respond within one working day." For the urgent buyer, consider a phone number.

---

### Pattern 10: The Internal Seller / Link Forwarder
**Who:** The Champion who has already spoken with HARTS (or read about them) and is now forwarding the website to internal stakeholders for approval.

**Behaviour:** Does NOT browse the site themselves this time — they copy specific URLs and send them to:
- The CEO → forwards the About page or a case study
- The CFO → forwards the Working-with-us page or the BOT methodology page
- Legal/Procurement → forwards the Working-with-us page
- A peer → forwards an insights article or a case study

**What this demands:**
- **Every important page must have a clean, descriptive URL** that looks credible in an email.
- **Every page must have good Open Graph / social metadata** — when a URL is pasted in Slack, Teams, or email, the preview card must look professional (title, description, image).
- The **Working-with-us page** and **case studies** must be written so they make sense to someone who has NEVER spoken to HARTS — the CFO is reading this cold.
- **PDF download** of the capability statement must be available — some stakeholders want a document to circulate, not a URL.

---

### Pattern 11: The Talent / Careers Explorer
**Who:** A senior professional evaluating HARTS as a potential employer.

**Behaviour:** Lands on `/` or `/careers` → reads about the firm → checks team page → reads the ethos → looks at open roles → checks founder LinkedIn profiles → applies or reaches out.

**What this demands:**
- A **Careers page** that reflects the ethos: Attitude of Excellence, Inclusivity, Transparency & Communication, Well Being — not as posters but as lived descriptions.
- The **team page** serves double duty — it's a "who would I work with?" page for candidates too.
- **The ethos section** on the About page must feel genuine, not corporate. Short descriptions of what each value looks like day-to-day at HARTS.

---

### Pattern 12: The Returning Client
**Who:** An existing or past HARTS client coming back to the site.

**Behaviour:** Returns to find a specific partner's bio to forward, re-read a case study involving their engagement, find a recent insight to share, or make a referral introduction.

**What this demands:**
- **Fast paths** to team bios and case studies from the homepage.
- A **client login** if HARTS has a portal.
- **Share-friendly URLs and LinkedIn buttons** on insights and case studies.
- A **referral path** — even a simple "Know someone who could use clarity? Introduce us." with partner contact info.

---

## PART TWO: THE HARTS PERSONAS (UPDATED)

### Persona 1 — The Champion

**Profile:** CHRO, COO, Chief Transformation Officer, Head of Integration, Group HR Director, VP Operations, or a senior functional leader. Organisation size: 500–10,000 people. Age: 35–55. Under significant operational or strategic pressure.

**Trigger events (mapped to HARTS services):**

| Trigger situation | HARTS service it maps to |
|---|---|
| Board has signed off a restructuring or operating model redesign | OD & Implementation |
| An existing centre of excellence is underperforming or non-existent | Centre of Excellence (CoE) |
| M&A deal announced; integration planning must start within weeks | M&A & Post-Merger Integration |
| CEO has decided to set up a GCC; the Champion is the sponsor | GCC & Shared Services |
| A major ramp-up is needed and internal recruitment can't keep pace | Recruitment as a Service |
| Leadership team is struggling through a transition and needs external coaching | Executive Coaching & Board Advisory |
| A transformation has stalled and someone needs to rescue it | Cross-service; BOT is the framework |

**JTBD statement:**
> *"When my organisation is heading into a restructuring/integration/transformation that I know we can't deliver alone, I want a senior partner who will build the operating model, run it with us, and then leave — so I can survive the change with credibility and the work keeps improving after they're gone."*

**Website behaviour patterns:** Pattern 1 (full homepage), Pattern 2 (capability-first), Pattern 5 (LinkedIn referral), Pattern 7 (multi-visit), Pattern 9 (urgent), Pattern 10 (link forwarder).

---

### Persona 2 — The Economic Buyer

**Profile:** CEO, Group CEO, CFO, PE Operating Partner, Board Chair. Age: 45–65. Signs the contract.

**How they arrive:** Forwarded a URL by the Champion, or enters the site directly after hearing HARTS's name in a board discussion or peer conversation.

**Goals:** Verify in 15 minutes that the firm is credible, the partners are operating-grade, and the commercial model won't trap them.

**What they look for (in order):**
1. Are the founders/partners senior enough to be in my boardroom?
2. Have they done this before, in a context resembling mine?
3. What does BOT mean for cost predictability and exit?
4. Can I verify this firm externally? (LinkedIn, references, named clients)

**JTBD statement:**
> *"When my Champion brings me a recommended firm, I want to verify in fifteen minutes that the firm is credible, the partners are operating-grade, and the commercial model won't trap us — so I can approve or veto with confidence."*

**Website behaviour patterns:** Pattern 4 (people-first), Pattern 3 (proof-first), Pattern 10 (receives forwarded links).

---

### Persona 3 — The Gatekeeper / Influencer

**Profile:** General Counsel, Head of Procurement, Group Financial Controller, Head of IT Security, HR Compliance.

**Goals:** Find risk. Verify HARTS as a credible counterparty.

**What they look for:**
- Entity structure, jurisdictions, years operating
- Professional indemnity and liability insurance
- Data handling and confidentiality
- IP ownership in deliverables
- Standard contracting terms / MSA
- Reference clients available on request
- Project management certifications (Hari Ram's PMP® is a trust signal for this persona)

**JTBD statement:**
> *"When my CEO wants to engage HARTS, I want to verify that working with them won't create legal, commercial, or reputational risk — so I can approve the contract or surface issues before signing."*

**Website behaviour pattern:** Pattern 10 (receives the Working-with-us URL). Spends 90% of time on one page.

---

### Persona 4 — The Existing Client / Advocate

**Profile:** A leader inside a current HARTS engagement, or an alum.

**JTBD statement:**
> *"When I want to share HARTS with someone in my network, or revisit something they published, I want to find it quickly — so I can keep advocating without friction."*

**Website behaviour patterns:** Pattern 12 (returning client), Pattern 10 (link forwarder to peers).

---

### Persona 5 — The Talent Prospect

**Profile:** A senior operator, consultant, or subject-matter expert evaluating HARTS as an employer.

**JTBD statement:**
> *"When I'm considering my next move, I want to understand what kind of firm HARTS is, who runs it, and what the culture feels like — so I can decide whether these are people I'd want to work alongside."*

**Website behaviour pattern:** Pattern 11.

---

## PART THREE: THE EIGHT-STAGE JOURNEY MAP (with multi-path awareness)

### Stage 1 — Awareness

**Entry points:** Google search (problem terms), LinkedIn (partner posts), peer referral, industry event, podcast.

**The user arrives from different places:**
- From Google → lands on an insights article or a service page (not the homepage).
- From LinkedIn → lands on a specific insights article.
- From a peer → lands on the homepage via a shared URL.
- From an event → searches "HARTS consulting" → lands on the homepage.

**Website requirement:** Every page must function as a potential first page. No page can assume previous context. Every page must have: clear nav, visible identity (HARTS logo + tagline), a path to deeper content, and a path to contact.

**Content for this stage:**
- Insights hub with problem-first articles written in operator language.
- SEO-targeted pages for high-intent searches: "post-merger integration consultant", "GCC setup partner India", "operating model design firm", "transformation execution partner".
- Author bylines on every article showing operating credentials, not consulting CVs.

---

### Stage 2 — Research

**What happens:** Visitor has found HARTS and is now exploring — trying to understand what kind of firm this is.

**Pages that serve this stage:**
- Homepage (Pattern 1: full scroller)
- Services overview + individual service pages (Pattern 2: capability-first)
- How We Work / BOT methodology page (Pattern 6: methodology investigator)
- Team page (Pattern 4: people-first)
- About page

**Critical design requirement:** The visitor in this stage is *building a mental model of HARTS*. Every page must reinforce the same three things:
1. HARTS are operators, not slide-deck consultants.
2. BOT means they design it, run it with you, and then leave.
3. The people are senior enough to earn a seat in a boardroom.

---

### Stage 3 — Shortlist

**What happens:** HARTS is one of 2–4 firms being seriously considered. The visitor is now looking for proof and reasons to disqualify.

**Pages that serve this stage:**
- Case studies (Pattern 3: proof-first)
- Sector pages (Pattern 8: sector-match)
- Team bios (Pattern 4: people-first)

**Critical design requirement:** Case studies are the workhorses of this stage. They must be:
- Structured around BOT phases (Build → Operate → Transfer)
- Filterable by service line AND sector
- Outcome-led (metrics visible on the card, not buried in the text)
- Named where possible (anonymised case studies are the #1 trust-killer)

---

### Stage 4 — Enquiry

**What happens:** The visitor has decided to make contact.

**Pages that serve this stage:**
- Contact / "Start a conversation" (Pattern 9: urgent problem solver)
- Direct partner email links on service and team pages
- Calendar booking link

**Critical design requirement:** Zero friction. Maximum 5 form fields. Multiple paths. Partner-led response. Expectation-setting ("A partner will respond within one working day — not a salesperson"). The urgent buyer (Pattern 9) needs a phone number or immediate-response path.

---

### Stage 5 — Proposal / Internal Selling

**What happens:** The Champion is now selling HARTS internally. The website becomes a sales tool for the Champion.

**Pages that serve this stage:**
- Working-with-us page (Pattern 10: the link the Champion forwards to the CFO)
- About page (Pattern 10: the link the Champion forwards to the CEO)
- Case studies (Pattern 10: the link the Champion forwards to peers)
- Capability statement PDF (the document circulated in board packs)

**Critical design requirement:** Every page must work for a cold reader who has never spoken to HARTS. Open Graph metadata must be perfect — the URL preview in Slack/Teams/email is HARTS's first impression with the committee.

**The Working-with-us page must cover:**
- How engagements are scoped under BOT
- The commercial model: what Build costs, what Operate costs, what Transfer looks like commercially, what hypercare and the governance retainer look like
- IP ownership in deliverables — who owns the operating models, playbooks, governance frameworks
- Confidentiality and data handling posture
- Professional indemnity and liability insurance — stated facts
- Entity structure, jurisdictions, office locations
- Reference availability on request
- Hari Ram's PMP® and any other formal certifications as credibility signals for procurement

---

### Stage 6 — Engagement (Build phase)

**Website role:** Reassurance and orientation. The real work happens in client systems, but the website should make the Build phase feel concrete.

**Pages that serve this stage:**
- Client area login
- A public "What to expect in the Build phase" section
- Team bios (client wants to look up who they're working with)

---

### Stage 7 — Delivery (Operate → Transfer)

**Website role:** Client-only resources, progress frameworks, transfer playbooks.

**What this implies:**
- A client-only resources area (even a simple gated section)
- A public "How Transfer works" page — this also serves the prospect who wants to understand what they're really buying

---

### Stage 8 — Advocacy

**Website role:** Make it easy for happy clients to share HARTS.

**Pages that serve this stage:**
- Named case studies the client can proudly forward
- LinkedIn-share buttons on insights
- Events page
- A referral path: "Know someone who could use clarity? Make an introduction."
- Brand assets if partners or clients want to co-brand

---

## PART FOUR: COMPLETE PAGE-BY-PAGE BUILD SPEC

### 4.1 Homepage (`/`)

**Serves patterns:** 1, 2, 4, 5, 9, 10.
**Primary persona:** The Champion.
**Secondary personas:** Economic Buyer (scrolls briefly), Urgent Problem Solver (scans for 15 seconds).
**Primary CTA:** "Start a conversation."
**Secondary CTA:** "See our work" → case studies.

**Section-by-section spec, top to bottom:**

1. **Hero section**
   - Headline: speaks to the *moment* HARTS shows up in. NOT "We exist to create clarity" (that's the tagline, not the hook). Something like: *"When restructuring, integration, or transformation hits — and it has to work."* Or: *"For leadership teams in the middle of decisive change."* Test variations.
   - Sub-headline: one sentence on the HARTS promise. The tagline can live here: *"We exist to create clarity — then we build it, operate it, and hand it back."*
   - Primary CTA button: "Start a conversation."
   - Secondary CTA: "See our work."
   - One trust signal above the fold: named client logos or a numeric proof point.

2. **"When leaders call us" section**
   - Six trigger-situation cards, each mapped to a service:
     - "Your operating model needs rebuilding" → OD & Implementation
     - "Performance and governance are slipping" → Centre of Excellence
     - "You have 100 days to integrate" → M&A & Post-Merger Integration
     - "You're launching or scaling a GCC" → GCC & Shared Services
     - "You need to ramp 200 people and internal hiring can't keep pace" → Recruitment as a Service
     - "Your leadership team needs an outside voice" → Executive Coaching & Board Advisory
   - Each card links to the corresponding service page.

3. **"How we work — Build · Operate · Transfer" section**
   - Three compact blocks: Build (design it), Operate (run it with you), Transfer (hand it back).
   - The founding principle as a pull quote: *"If it doesn't run without us, we haven't finished the job."*
   - Link: "See the full methodology."

4. **Featured case study**
   - One named case study with: client (or sector), situation summary, BOT in action, outcome metric, client quote.
   - Link: "Read the full story" → case study page.

5. **"Meet the people you'll work with" section**
   - Sreema, Savio, Hari Ram, Rufus — real photos, titles, one-line operating description, LinkedIn links.
   - Link: "Meet the full team."

6. **Sector / "Who we work with" strip**
   - 3–5 sector cards showing HARTS's strongest industries.
   - Each links to its sector page.

7. **Featured insight**
   - The most recent or strategically important article. Author photo, title, one-line summary, read time.
   - Link: "Read" → article page. Secondary link: "See all insights."

8. **Footer CTA ribbon**
   - The founding principle or tagline as a pull quote.
   - "Start a conversation" button.

9. **Footer**
   - Full nav: Services, Sectors, How We Work, Case Studies, Insights, About, Team, Careers, Contact.
   - Office locations.
   - Social links (LinkedIn is primary).
   - Legal links.

---

### 4.2 Services Overview (`/services`)

**Serves patterns:** 2 (capability-first scanner).
**Primary persona:** The Champion scanning capabilities.
**CTA per card:** "Learn more" linking to service page.

- A short intro: "Six ways we create clarity for organisations in the middle of change."
- Six service cards in a grid. Each card:
  - Trigger-situation headline (not the service name — use the service name as a subtitle).
  - Two-sentence description.
  - Link to the individual service page.
- A mention of BOT: "Every engagement follows our Build · Operate · Transfer methodology." → link.

---

### 4.3 Individual Service Pages (`/services/{slug}`)

**Serves patterns:** 2, 7, 8, 9.
**Primary persona:** The Champion researching a specific need.
**CTA:** "Talk to {partner name} about this."

Each of the six pages follows the same template:

1. **Headline** = the trigger situation, not the service name.
   - OD & Implementation: *"Your operating model isn't holding — and the org knows it."*
   - Centre of Excellence: *"Governance exists on paper. Performance says otherwise."*
   - M&A & Post-Merger Integration: *"You have 100 days to integrate. The clock started yesterday."*
   - GCC & Shared Services: *"The board wants a GCC. You need it live in six months."*
   - Recruitment as a Service: *"You need 200 people. Internal hiring is at 12 a month."*
   - Executive Coaching & Board Advisory: *"Your leadership team is navigating a transition they've never faced before."*

2. **"When leaders engage us for this"** — 3–5 trigger situations.

3. **"What we do"** — the actual scope, in operating language. Not "we provide strategic advisory" but "we design the operating model, stand up the governance framework, build the capability matrix, and run it alongside your team until your people own it."

4. **"How this works under BOT"** — a short section showing Build → Operate → Transfer specific to this service. This is critical because the Capability-First Scanner (Pattern 2) may never visit the BOT methodology page; the explanation must live on every service page too.

5. **Linked case studies** for this service.

6. **Named partner(s)** who lead this practice — photo, bio snippet, "Talk to {name}" link.

---

### 4.4 How We Work / BOT Methodology (`/how-we-work`)

**Serves patterns:** 6 (methodology investigator), 7 (multi-visit researcher), 10 (forwarded to CFO).
**Primary personas:** Champion, Economic Buyer, Gatekeeper.
**CTA:** "See BOT in practice" → featured case study.

This is the **second most important page on the site**. Spec:

1. **Opening:** The founding principle as a bold statement. *"If it doesn't run without us, we haven't finished the job."*
2. **"Why BOT"** — a short philosophical section on why HARTS chose this model. Written for a CEO, not an analyst.

3. **Build phase**
   - What happens: design the operating model, governance, workforce plan, execution framework.
   - Who's involved from HARTS: named partner + delivery team.
   - Who's involved from the client: sponsor, steering committee, workstream leads.
   - Typical duration: range (e.g., 4–12 weeks).
   - What the client gets at the end: an operating model that's been designed for *their* organisation, not a generic playbook.

4. **Operate phase**
   - What happens: HARTS runs the model alongside the client's teams. Client teams shadow, learn, take decisions.
   - Critical differentiator: "Your people are leading within weeks, not watching from the sidelines."
   - Typical duration: range (e.g., 3–9 months).

5. **Transfer phase**
   - What happens: ownership transfers formally. HARTS stays through a hypercare period. A light governance retainer follows.
   - What "transfer" actually means: operating manuals, capability handover, decision-rights clarity, a governance rhythm the client owns.
   - The exit commitment: HARTS leaves. This is the part that distinguishes HARTS from every firm incentivised to stay forever.

6. **The commercial model under BOT** — how BOT changes pricing vs traditional consulting. Fixed-scope Build, retainer Operate, defined Transfer milestones. Cost predictability. Clear exit economics. (This section is what the CFO reads when the Champion forwards the link.)

7. **Case studies demonstrating BOT** — at least two, showing the three phases in action.

---

### 4.5 Case Studies (`/case-studies` and `/case-studies/{slug}`)

**Serves patterns:** 3 (proof-first), 7 (multi-visit), 8 (sector-match), 10 (forwarded links).
**Primary personas:** Champion, Economic Buyer.
**CTA per study:** "Facing something similar? Start a conversation."

**Index page:**
- Filterable by service line AND by sector.
- Each card shows: client/sector, trigger situation, outcome metric, service line tag. Outcome visible on the card.

**Individual case study template:**
1. Header: client name (or anonymised tier), sector, geography, engagement length.
2. **The situation** — written in the leader's voice where possible.
3. **Build** — what HARTS designed.
4. **Operate** — what HARTS ran alongside the client.
5. **Transfer** — how HARTS handed it back; what the client now owns.
6. **Outcomes** — numeric metrics. Cycle time, headcount ramp, synergy capture, integration milestones, governance maturity.
7. **Named client quote** — with photo, name, role, company.
8. **Related** — the relevant service page and sector page.
9. **CTA:** "Facing a similar situation? Talk to {partner name}."

---

### 4.6 Sector Pages (`/sectors/{industry}`)

**Serves pattern:** 8 (sector-match seeker).
**CTA:** "Talk to our {sector} lead."

- Sector-specific challenges and trends.
- How HARTS's services apply in this sector.
- Relevant case studies (pre-filtered).
- Named partner who leads this sector.

Start with HARTS's 3–5 strongest sectors. Add more as case studies accumulate.

---

### 4.7 Team (`/team` and `/team/{person-slug}`)

**Serves patterns:** 4 (people-first), 11 (talent prospect), 12 (returning client looking up a bio).
**CTA per bio:** LinkedIn link + direct contact for partners.

**Team index:** Leadership row (Sreema, Savio, Hari Ram, Rufus) prominently. Then wider team by practice area.

**Individual bio template:**
- Real photo.
- Current role at HARTS.
- Operating background (prior roles, industries, scale of engagements led).
- Signature engagement types.
- One human detail (a value they hold, a personal interest, a language).
- LinkedIn link.
- For leadership: direct email or calendar link.
- Certifications where applicable (Hari Ram: PMP®).

---

### 4.8 About (`/about`)

**Serves patterns:** 4, 10 (forwarded to CEO), 11 (talent).
**CTA:** "Meet the team" or "Start a conversation."

- HARTS's founding story: who, why, what gap they saw.
- The ethos — four lived values, not a poster:
  - **Attitude of Excellence** — what this looks like in an engagement (not a slogan; a specific behaviour).
  - **Inclusivity** — how this shapes who HARTS hires and how they work with clients.
  - **Transparency & Communication** — what the client can expect re: reporting, candour, difficult conversations.
  - **Well Being** — how HARTS protects its people and its clients' people during high-pressure engagements.
- Firm credentials: years operating, entities, jurisdictions, offices.
- Downloadable capability statement (PDF).

---

### 4.9 Working-with-us (`/working-with-us`)

**Serves patterns:** 7 (final visit before enquiry), 10 (forwarded to CFO/Legal/Procurement).
**Primary personas:** Gatekeeper, Economic Buyer.
**CTA:** "Request a proposal" or "Start a conversation."

This is **the page that closes deals quietly.** Spec:
- How engagements are scoped under BOT.
- Commercial model: what Build, Operate, and Transfer cost respectively; cost predictability vs open-ended consulting.
- IP ownership in deliverables.
- Confidentiality and data handling.
- Insurance (PI, liability) — stated facts.
- Jurisdictions, entities, office locations.
- Certifications (PMP, any others).
- References available on request.
- Contracting process overview.

---

### 4.10 Insights (`/insights` and `/insights/{slug}`)

**Serves patterns:** 5 (LinkedIn referral), 7 (multi-visit), 12 (returning client sharing).
**CTA per article:** Awareness-stage → newsletter. Decision-stage → "Start a conversation."

- Author byline with photo, role, operating background, LinkedIn link.
- Reading time estimate.
- Related articles by topic.
- LinkedIn share button (pre-filled well — this is where consulting content travels).
- Newsletter signup at article end (not a modal).

---

### 4.11 Contact / Start a Conversation (`/contact`)

**Serves patterns:** 9 (urgent), all final-step paths.
**CTA:** Submit enquiry.

- Three paths side by side:
  1. Short form: name, organisation, role, "what's happening" (free text), preferred contact method.
  2. Direct partner emails: Sreema, Savio, Hari Ram, Rufus — with photos.
  3. Calendar booking link with Rufus or a rotating partner.
- Expectation-setting: *"A partner will respond within one working day. The first conversation is a 30-minute call — no proposal, no pitch, just a conversation about what you're facing."*
- Human auto-response signed by a named person.
- Phone number for urgent situations.

---

### 4.12 Careers (`/careers`)

**Serves pattern:** 11 (talent prospect).
**CTA:** "Apply" or "Talk to us about joining."

- What kind of people HARTS hires — operators, not just consultants.
- The ethos in lived terms.
- Open roles.
- Link to the team page.

---

### 4.13 Events (`/events`)

**Serves patterns:** 8, 12 (advocacy).
- HARTS-hosted and HARTS-attended events.
- Past events archive (shows activity and credibility).

---

## PART FIVE: COMPONENT & UX REQUIREMENTS

### 5.1 Navigation

**Desktop nav:**
Services (dropdown with all six) · Sectors · How We Work · Case Studies · Insights · About (dropdown: Story, Team, Careers) · Contact (primary CTA button: "Start a conversation")

**Mobile nav:**
Hamburger with the same structure. Primary CTA always visible in header.

### 5.2 Persistent CTAs

- **Top nav CTA:** "Start a conversation" — visible on every page.
- **Footer CTA ribbon:** The founding principle as a pull quote + "Start a conversation" button. On every page.
- **Service-page CTA:** "Talk to {partner name}" — personalised, not generic.
- **Case-study CTA:** "Facing something similar? Start a conversation."
- **Article-end CTA:** Awareness articles → newsletter signup. Decision articles → "Start a conversation."

### 5.3 Trust elements

- Named client logos — on homepage, services pages, and Working-with-us.
- Accreditations, awards, certifications — on homepage (subtle), Working-with-us (prominent).
- Outcome metrics from case studies — scattered across service pages and homepage.

### 5.4 NO aggressive chat pop-ups

A senior buyer reading about post-merger integration does not want a chatbot bouncing in after 10 seconds. Premium positioning demands restraint. If chat is offered, it should be a quiet icon in the corner, never auto-opening.

### 5.5 Performance

- Largest Contentful Paint: under 2.5 seconds.
- Interaction to Next Paint: under 200ms.
- A slow site signals a slow firm.

### 5.6 Mobile-first

Most LinkedIn-sourced research traffic is mobile. The site must be fully functional and readable on a phone. Intro calls get booked on desktop, but discovery happens on phones.

### 5.7 Accessibility

WCAG 2.2 AA minimum. Keyboard navigation, screen reader support, colour contrast, reduced-motion support. Regulated-sector clients (and Gatekeeper personas) will check.

### 5.8 Open Graph / Social Metadata

Every page must have proper OG tags: title, description, image. When a HARTS URL is pasted in Slack, Teams, WhatsApp, or email, the preview card must look professional and convey the page's purpose. This directly serves Pattern 10 (link forwarding).

### 5.9 Print Stylesheet

Case studies and the capability statement get printed and circulated in board packs. A print stylesheet that produces clean, branded output is not optional.

---

## PART SIX: MEASUREMENT

### 6.1 Events to instrument

- Page-view per stage.
- Scroll depth (25/50/75/100%) on homepage, case studies, BOT methodology page.
- CTA clicks tagged by: page, location (hero/mid/footer/nav), CTA text.
- Form starts vs form submits (the gap = friction).
- Partner email link clicks.
- Calendar booking link clicks.
- LinkedIn profile outbound clicks (shows Pattern 4 behaviour).
- Insights article completion + LinkedIn share clicks.
- Capability-statement PDF downloads.
- Returning-visitor sessions (most important segment for services).
- High-intent sequences: case study + contact page in same session.
- Sector-page views (identifies which industries are driving traffic).

### 6.2 Stage-by-stage KPIs

| Stage | Primary KPI | Secondary KPIs |
|---|---|---|
| Awareness | Organic sessions, insights article reach | Article completion, LinkedIn shares |
| Research | Services + BOT page views per session | Pages-per-session, returning visitors |
| Shortlist | Case-study views by qualified visitors | Multi-case-study sessions, sector-page views |
| Enquiry | Form submits + calendar bookings | Form completion rate, partner-email clicks |
| Proposal | Capability-statement downloads, returning multi-stakeholder visits | Sales-pipeline data (offline) |
| Engagement | Client-portal logins (if applicable) | First-30-day NPS |
| Delivery | Client-resource usage | Transfer-phase satisfaction |
| Advocacy | Referral enquiries, case-study consents | LinkedIn mentions, event attendance |

### 6.3 Quarterly improvement loop

1. Pull the funnel.
2. Identify the one stage with the worst stage-to-stage conversion.
3. Ship two changes that address it.
4. Update the journey map.

Annually: interview the last five won clients and the last five lost prospects. Ask what role the website played, what reassured them, what didn't.

---

## PART SEVEN: CONTENT TONE & VOICE

### Voice principles

- **Second person ("you")** for the reader. **First person plural ("we")** for HARTS.
- **Operating language, not consulting language.** "We stand up the IMO and run the synergy tracker" beats "we provide strategic integration advisory services."
- **Specific over impressive.** "Ramped 340 people across three locations in 14 weeks" beats "delivered a large-scale talent acquisition programme."
- **Grounded authority.** HARTS can afford confidence because the BOT model is inherently honest — "we leave when the job is done" is a statement only a confident firm makes. The writing should match: direct, warm, zero bluster.

### Tagline and founding principle usage

- **"We exist to create clarity."** — appears on the homepage (sub-headline), About page, footer. Three times maximum. Overuse cheapens it.
- **"If it doesn't run without us, we haven't finished the job."** — appears on the homepage (BOT section), the BOT methodology page (opening), the footer CTA ribbon. The strongest single sentence HARTS has; let it carry weight.

### Banned words/phrases

"World-class", "best-in-class", "robust", "seamless", "trusted partner", "thought leader", "transformation journey", "leverage" (as a verb), "synergies" (outside M&A context), "holistic", "end-to-end solutions", "value-add", "scalable solutions", "cutting-edge", "paradigm shift."

These signal generic consulting and actively undermine HARTS's operator positioning.

### Imagery rules

- Real photos of the real team. No AI-generated imagery for people.
- Office and engagement photography where possible.
- If stock photography is used for abstract/conceptual visuals, it must feel premium and architectural — not "diverse team in glass conference room."
- Data visualisations and frameworks (from HARTS's methodology) are better than stock images.

---

## PART EIGHT: LEADERSHIP EXPECTATIONS SUMMARY

What each HARTS leader needs the website to deliver:

**Sreema Nallasivam (Founder & CEO)**
The site must communicate the intellectual depth and operational seriousness of HARTS. It should feel like walking into a firm that earns its seat in the boardroom — not through polish, but through substance. No fluff, no generic consulting speak. A CEO who lands on this site should think: "These people understand my world."

**Savio James Abraham (COO)**
The site must reflect delivery discipline. BOT should be presented as an engineered system — a rigorous methodology with defined phases, clear handoffs, and accountability at each stage. A COO visiting should feel operational kinship.

**Hari Ram (PMP®)**
The site must signal project governance credibility. Certifications, structured methodology, programme-management rigour. When a PMO or procurement stakeholder evaluates HARTS, they should find the formal credentials and process discipline they need to approve.

**Rufus D'Souza**
The site must be a tool Rufus can send to prospects after a conversation. Every page must answer the question a prospect asks after meeting Rufus at an event: "Send me your website." Shareable, credible, impressive within two clicks. Case studies must be the proof Rufus points to. The contact path must be smooth enough that prospects who are "almost ready" can act immediately.

---

## PART NINE: MISTAKES TO ACTIVELY AVOID

1. **Homepage that talks about HARTS, not the visitor.** "We are a senior team of strategists, operators, and technologists..." is the worst possible opening. The first words must be about the visitor's situation.

2. **BOT buried as a feature.** Build · Operate · Transfer is the competitive moat. It must have its own page, be on the homepage, appear on every service page, and structure every case study. If a visitor leaves not understanding BOT, the site has failed.

3. **Anonymised case studies.** "A leading European manufacturer" is unverifiable and worthless. Name clients wherever permission allows.

4. **No content for the Gatekeeper.** Legal, procurement, CFO — these reviewers silently kill deals. The Working-with-us page is the most commercially valuable page on the site after the contact page.

5. **Stale insights.** A "Latest Insights" section dated 14 months ago actively damages credibility. Either commit to a publishing cadence (one strong piece a month is enough) or de-emphasise dates.

6. **Generic team page.** Stock photos, one-paragraph bios, no LinkedIn links. For a firm selling senior relationships, this is fatal. Every bio must make you want to meet the person.

7. **Assuming a single user path.** The twelve patterns in Part One are the real spec. The site must work for all twelve simultaneously.

8. **Aggressive CTAs on every scroll.** HARTS's buyers are senior and deliberate. The CTAs should be clear and always available, but never pushy. "Start a conversation" is an invitation, not a demand.

---

## APPENDIX — VOCABULARY

- **BOT** — Build · Operate · Transfer; HARTS's core methodology.
- **Champion** — the internal advocate who pushes for HARTS to be hired.
- **Economic Buyer** — the person who signs the contract (CEO/CFO/Board).
- **Gatekeeper** — Legal, procurement, IT, finance — can block a deal silently.
- **Hypercare** — the post-transfer support phase.
- **IMO** — Integration Management Office (M&A context).
- **JTBD** — Jobs-to-Be-Done; the outcome a client "hires" HARTS to achieve.
- **Touchpoint** — any moment of contact between visitor and HARTS.
- **CTA** — call to action; the next step offered on a page.
- **OG tags** — Open Graph metadata; controls how URLs appear when shared on social/messaging platforms.
- **LCP** — Largest Contentful Paint; a Core Web Vital measuring load speed.
- **INP** — Interaction to Next Paint; a Core Web Vital measuring responsiveness.
