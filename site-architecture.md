# Site Architecture — Ro Panchmatia Personal Website

## Design Philosophy
Single-page feel with scroll-based navigation. Dark, professional aesthetic (charcoal + cream + a warm accent — e.g., amber or teal). Minimal copy, high information density. No stock imagery.

---

## Routing (Next.js App Router)

```
/                    → HomePage (single scrollable page, all sections)
/resume              → ResumePage (structured detail, print-optimized layout)
```

All content is sourced from static TypeScript data files under `src/data/`. No CMS, no external API calls at runtime.

---

## Component Tree

```
src/
├── app/
│   ├── layout.tsx              ← Root layout: font, metadata, <NavBar />, <Footer />
│   ├── page.tsx                ← HomePage: composes all section components in order
│   └── resume/
│       └── page.tsx            ← ResumePage: print-friendly linear layout
│
├── components/
│   ├── layout/
│   │   ├── NavBar.tsx          ← Sticky top nav with anchor links + /resume link
│   │   └── Footer.tsx          ← Minimal: name, social links, copyright
│   │
│   ├── sections/               ← Scroll sections rendered on HomePage
│   │   ├── Hero.tsx            ← Name, tagline, CTA buttons (Resume, LinkedIn)
│   │   ├── About.tsx           ← Three-pillar narrative block
│   │   ├── Experience.tsx      ← Timeline of professional roles
│   │   ├── Skills.tsx          ← Technical + analytical skills grid
│   │   ├── Coaching.tsx        ← Athletic coaching history + specializations
│   │   ├── Projects.tsx        ← Dev/AI projects card grid
│   │   ├── Credentials.tsx     ← Designations + education cards
│   │   └── Contact.tsx         ← Email link + LinkedIn + simple mailto CTA
│   │
│   └── ui/                     ← Reusable primitives
│       ├── SectionWrapper.tsx  ← Consistent padding, id anchor, fade-in motion
│       ├── TimelineItem.tsx    ← Role title, company, date, bullet list
│       ├── CredentialCard.tsx  ← Designation name, issuer, date, status badge
│       ├── ProjectCard.tsx     ← Tool name, description, tech tags
│       └── PillarBlock.tsx     ← Icon + heading + 2-line description
│
└── data/
    ├── experience.ts
    ├── skills.ts
    ├── coaching.ts
    ├── projects.ts
    ├── credentials.ts
    └── about.ts
```

---

## Data Mapping: Ronak/ Files → Components

### `src/data/about.ts` → `About.tsx`
Three narrative pillars drawn from `ro_website_reference.md § Positioning Narrative`:

| Pillar | Heading | Source |
|--------|---------|--------|
| 1 | Healthcare Roots | BHSc Western; Truscott I.D.A. Pharmacy |
| 2 | Operational Intensity | ShipNoble 3PL role; Bar Manager (youngest ever) |
| 3 | Leadership Through Sport | 11 seasons coaching, starting age 13 |

---

### `src/data/experience.ts` → `Experience.tsx`, `ResumePage`
Source: `ro_website_reference.md § Professional Experience`

```ts
type Role = {
  title: string
  company: string
  location: string
  type: string          // "Co-op" | "Part-time" | "Full-time"
  start: string
  end: string | "Present"
  bullets: string[]
}
```

| Role | Company | Period |
|------|---------|--------|
| Business Transformation Consultant | ShipNoble Inc. | Co-op |
| Bar Manager | The Banquet Bar | — |
| Pharmacy Assistant | Truscott I.D.A. Pharmacy | — |

Key bullets to surface on homepage (truncated list):
- ShipNoble Index (profitability scoring tool)
- Warehouse network redesign
- Freight pricing calculator (Claude Code)
- Mathematical models for driver efficiency

---

### `src/data/credentials.ts` → `Credentials.tsx`, `ResumePage`
Source: `ro_website_reference.md § Professional Designations` + `§ Education`

```ts
type Credential = {
  name: string
  acronym: string
  issuer: string
  date: string
  status: "Earned" | "In Progress"
  category: "Designation" | "Education"
}
```

| Credential | Issuer | Date | Status |
|-----------|--------|------|--------|
| FMVA | Corporate Finance Institute | Feb 2026 | Earned |
| BIDA | Corporate Finance Institute | — | Earned |
| FITP | Corporate Finance Institute | — | Earned |
| CAPM | PMI | May 2026 (target) | In Progress |
| MBA (Co-op) | DeGroote / McMaster | In progress | In Progress |
| BHSc Honours | Western University | — | Earned |

---

### `src/data/projects.ts` → `Projects.tsx`
Source: `ro_website_reference.md § Technical Skills & AI Development`

```ts
type Project = {
  name: string
  description: string
  tags: string[]        // e.g. ["Claude Code", "Next.js", "Internal Tool"]
  type: "App" | "Tool" | "AI System"
  highlight?: boolean
}
```

| Project | Tags | Description |
|---------|------|-------------|
| ShipNoble Freight Pricing Calculator | Claude Code, Logistics | Automates complex carrier pricing logic |
| Burlington Stampeders Scouting App | Claude Code, Base44 | Dual-interface: coaching portal + athlete view |
| Flex Shot Offense Playbook Diagrammer | Claude Projects, AI | Auto-diagrams football plays from structured syntax |
| MBA Golf Tournament Finance Tracker | Claude Projects, Finance | Budget tracking system for inaugural event |
| This Website | Next.js, TypeScript, Tailwind, Claude Code | Personal site |

---

### `src/data/skills.ts` → `Skills.tsx`
Source: `ro_website_reference.md § Technical Skills & AI Development`

Categories:
- **AI & Development**: Claude (Chat/Projects/Code), Base44, Gemini, Prompt Engineering, System Prompt Design
- **Data & Finance**: Financial Modelling, Valuation (FMVA), BI & Analytics (BIDA), Complex Spreadsheet Architecture
- **Strategy & Consulting**: Operations Transformation, Supply Chain, Finance Transformation, Competitor Analysis
- **Project Management**: CAPM (in progress), Documentation, Stakeholder Communication

---

### `src/data/coaching.ts` → `Coaching.tsx`
Source: `ro_website_reference.md § Athletic Coaching`

```ts
type CoachingRole = {
  role: string
  organization: string
  level: string
  period: string
  notes?: string
}
```

| Role | Org | Level | Period |
|------|-----|-------|--------|
| Running Backs Coach | Burlington Stampeders | U18 | Current (11th season overall) |
| Coaching Contributor | Western Women's Collegiate | University | Previous |
| Embedded Coach | London Jr. Mustangs | Youth | 6 seasons |

Coaching specialization bullets:
- Advanced offensive play design + coverage manipulation
- American and Canadian rule set optimization
- 7-on-7 playbook architecture
- AI-driven scouting app ("Film Room") design + development

---

## Page-Level Structure

### `app/page.tsx` (HomePage)
```
<Hero />              ← id="top"
<About />             ← id="about"
<Experience />        ← id="experience"
<Skills />            ← id="skills"
<Projects />          ← id="projects"
<Coaching />          ← id="coaching"
<Credentials />       ← id="credentials"
<Contact />           ← id="contact"
```

### `app/resume/page.tsx` (ResumePage)
Linear, print-ready layout using the same data files. No animations. Sections:
1. Header (name, contact, LinkedIn)
2. Education
3. Professional Experience (full bullets)
4. Designations
5. Technical Skills
6. Coaching

---

## NavBar Anchor Links
```
About | Experience | Skills | Projects | Coaching | Credentials | Resume ↗
```

---

## Metadata (`app/layout.tsx`)
```ts
export const metadata = {
  title: "Ro Panchmatia",
  description: "MBA candidate, consultant, and coach.",
  openGraph: { ... }
}
```

---

## Tech Stack Summary

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | CSS transitions + Tailwind `animate-*` (no heavy library) |
| Fonts | Inter (body) + a display font TBD |
| Hosting | Vercel (recommended) |
| Data | Static TypeScript objects — no DB, no CMS |

---

*Awaiting approval before UI code generation.*
