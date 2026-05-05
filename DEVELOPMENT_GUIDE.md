# HARTS Website – Development Guide

This document explains what exists in the codebase today, how the structure is organized, and how page flow works so you can build new pages quickly and consistently.

---

## 1) Tech stack and runtime model

- **Framework:** Next.js (App Router)
- **Language:** TypeScript + React
- **Styling:** Global CSS split into modular style files
- **Routing:** File-based routing under `app/`

### Key dependencies
- `next@16.2.4`
- `react@19.2.5`
- `react-dom@19.2.5`

---

## 2) Current project structure

## Root
- `app/` → all routes, UI components, data, and styles
- `public/` → static assets (logo/images/files)
- `next.config.mjs` → Next config (currently minimal)
- `tsconfig.json` → strict TypeScript config

## `app/` breakdown
- `layout.tsx` → root HTML shell + global metadata + CSS import
- `page.tsx` → home route (`/`)
- `_components/` → reusable page sections and layout pieces
- `_data/home-content.ts` → central content arrays for the home/industry navigation
- `industries/[slug]/page.tsx` → dynamic industry route pages
- `globals.css` → imports all style layers from `app/styles/`
- `styles/` → separated CSS files:
  - `base.css` (tokens, typography, global element styles, animations)
  - `layout.css` (header/footer/nav shell styles)
  - `sections.css` (section-specific page styles)
  - `responsive.css` (breakpoints and mobile/tablet behavior)

---

## 3) Rendering and page flow

## Root flow
1. Next enters `app/layout.tsx`
2. Global metadata is applied
3. `globals.css` is loaded
4. Route component is rendered as `{children}`

## Home page flow (`/`)
1. `app/page.tsx` renders `<HomePage />`
2. `HomePage` composes this exact order:
   - `SiteHeader`
   - `HeroSection`
   - `AboutSection`
   - `ServicesSection`
   - `ProcessSection`
   - `EngageSection`
   - `ContactSection`
   - `SiteFooter`

This means home is a **single composed page** made of section components.

## Industry route flow (`/industries/[slug]`)
1. Route hits `app/industries/[slug]/page.tsx`
2. `generateStaticParams()` pre-builds pages from `industries` data
3. `generateMetadata()` creates per-industry page title
4. A `switch (slug)` chooses the matching industry component
5. Page wraps content with `SiteHeader` + `SiteFooter`
6. Unknown slug calls `notFound()`

---

## 4) Data flow and content pattern

Main content source is `app/_data/home-content.ts`.

It exports:
- Type definitions (`HeroSlide`, `Service`, `ProcessStep`, `Industry`)
- Content arrays:
  - `heroSlides`
  - `services`
  - `steps`
  - `industries`

### How components use data
- `HeroSection` reads `heroSlides`
- `ServicesSection` maps over `services`
- `ProcessSection` maps over `steps`
- `SiteHeader` uses `industries` for dropdown links
- `industries/[slug]/page.tsx` uses `industries` for static params + metadata matching

This is a good pattern: **page copy is mostly data-driven**, while components stay focused on rendering.

---

## 5) Client vs server component usage

- Most components are server components by default.
- Components using state/effects are marked with `"use client"`:
  - `HeroSection` (auto-rotating slides, dot controls)
  - `ProcessSection` (active step toggle)
  - `ContactSection` (local “message sent” UI state)

### Rule of thumb for new pages
Add `"use client"` only when you need browser-only behavior (`useState`, `useEffect`, event-driven UI state, etc.).

---

## 6) Styling architecture

Global style entry point: `app/globals.css`

It imports 4 layers in this order:
1. `base.css`
2. `layout.css`
3. `sections.css`
4. `responsive.css`

### Existing style conventions
- CSS custom properties for color tokens (`:root`)
- Section-level class names (`hero`, `process-section`, `contact-section`, etc.)
- Shared utility-ish classes (`reveal`, `delay-one`, `eyebrow`, `solid-button`, `outline-button`)
- Responsive overrides at `980px` and `640px`

When adding new sections/pages, prefer matching these naming patterns.

---

## 7) Reusable UI pieces you can extend

- `SiteHeader` + `SiteFooter` for consistent shell
- `.section` spacing pattern for full-width blocks
- Button styles:
  - `.solid-button`
  - `.outline-button`
- Animation classes:
  - `.reveal`
  - `.delay-one`

---

## 8) How to develop additional pages (recommended approach)

## A) Add a normal top-level page (example: `/careers`)
1. Create `app/careers/page.tsx`
2. Compose with existing shell:
   - `<SiteHeader />`
   - page-specific content/sections
   - `<SiteFooter />`
3. Add section/page styles in `app/styles/sections.css` (or create a new style file and import it in `globals.css`)
4. Add header links if needed

## B) Add another dynamic collection (example: `/services/[slug]`)
1. Create route folder: `app/services/[slug]/page.tsx`
2. Add data array in `app/_data/` (title, slug, content)
3. Implement `generateStaticParams()` + `generateMetadata()`
4. Render slug-specific content
5. Handle invalid slug with `notFound()`

## C) Add a new home section
1. Create component in `app/_components/`
2. Insert it into `HomePage` in intended order
3. Add corresponding CSS rules
4. If interactive, mark component with `"use client"`

---

## 9) Important current behavior notes

- Contact form currently only updates local UI state (`Thank You!`), no backend submission yet.
- Industry pages are currently simple placeholders with heading-only content.
- Header has a `Careers` anchor (`/#careers`) but no matching section in the home page right now.

These are good candidates for next development steps.

---

## 10) Suggested conventions for future consistency

- Keep reusable copy/data in `_data/` instead of hardcoding in multiple components.
- Keep route files (`page.tsx`) lightweight; move section UI into `_components/`.
- Reuse `SiteHeader` and `SiteFooter` for all major pages.
- Follow existing class naming and spacing rhythm before introducing new patterns.
- Prefer progressive enhancement: static-first, then add `"use client"` only where needed.

---

## 11) Quick developer checklist (for any new page)

- [ ] Route file created under `app/.../page.tsx`
- [ ] Metadata set (route-level if needed)
- [ ] Header/footer included for consistency
- [ ] Data moved to `_data/` when reusable
- [ ] Styles added in the correct CSS layer
- [ ] Mobile behavior checked at <=980px and <=640px
- [ ] Navigation links updated (if relevant)

---

If needed, this guide can be expanded next with:
- component-level API docs (props and usage)
- SEO/content checklist per page
- deployment/build notes
- coding standards for naming and folder conventions
