# CLAUDE.md - Ronak Panchmatia Personal Website

## Project Overview
Personal portfolio website for Ronak Panchmatia, MBA candidate (Co-op) at DeGroote School of Business, McMaster University. The site serves recruitment, networking, and personal branding purposes across four verticals: healthcare, banking technology, supply chain/logistics, and sports.

## Tech Stack
- Framework: Next.js 16, TypeScript, Tailwind CSS
- Components: shadcn/ui (cards, buttons, modals, accordions, badges, tooltips, forms, tabs, navigation)
- Fonts: Syne (display) and DM Sans (body), loaded via next/font/google
- Forms: Formspree (POST to endpoint, env var NEXT_PUBLIC_FORMSPREE_ID)
- Images: All in public/images/. Headshots compressed to WebP. Logos rendered with monochrome filter (brightness-0 invert opacity-60)
- Version Control: Git, local repository

## Site Structure
- Home Page: Hero, status bar, philosophy statement, journey/skill picker, feedback form, affiliations strip
- Professional Page (/professional): Availability banner, designations, 85-hour section, career timeline, skills cards, ShipNoble case study, feedback form
- Student Page (/student): Headshot, Why MBA, Why DeGroote, BHSc Honours, personal cards, trophy cabinet, feedback form
- Coach Page (/coach): Headshot with background image, coaching philosophy, career totals bar, coaching timeline, OSFL live tracker, Scouting App case study, playbook diagrammer, football glossary, feedback form
- Skill Subpages: Technical & Analytical, Consulting & Strategy, Industry Knowledge, Leadership & Communication (accessed from Professional page)

## Data Architecture
All content lives in separate data files in src/data/ so edits target single files without touching components:
- statusBar.ts (currently working on / recently completed)
- timelineData.ts (professional career timeline)
- coachingTimeline.ts (full coaching career with accolades)
- designations.ts (designation cards with issue dates, learnings, certificate images)
- affiliations.ts (all orgs with roles, dates, contributions, logo paths)
- skillCategories.ts (category cards linking to subpages)
- availability.ts (co-op and new grad availability)
- footballGlossary.ts (terminology legend definitions)
- stampeders2026.json (OSFL live tracker data)
- images.ts (photo and logo manifest)
- siteConfig.ts (site-wide text, names, taglines)

## Hard Constraints - MUST Follow
- MUST use Canadian spelling: behaviour, analyse, colour, honour, programme, fulfil, defence, offence
- MUST NOT use em dashes anywhere in any content or code comments
- MUST NOT use American spelling variants under any circumstances
- MUST run `npm run build` after every set of changes to verify clean compile
- MUST NOT place a downloadable resume anywhere on the site
- MUST NOT refer to Ronak as a specialist in any single industry
- MUST NOT mention "MBjAys" by name in the Student section personal cards (use rec baseball instead)
- MUST NOT inflate language beyond evidence (e.g., "CEO-level decision-making" when "supported executive leadership" is accurate)
- MUST use shadcn/ui for all UI components
- MUST place all images in public/images/

## Key Content Facts - Use for Accuracy Checks
- Combined coaching record: 93-10-1 (Rotherglen 26-2, WWFB 54-2-1, OSFL 13-6)
- Currently in his 11th season (NOT "11 seasons" or "11+")
- 4 programmes: Rotherglen Ravens, Western Women's Football, London Jr. Mustangs, Burlington Stampeders
- Burlington Stampeders role: Defensive Line Coach (changed from Running Backs Coach, April 2026)
- 6 championships, 2 three-peats, 2 COTY awards (2021 rookie, 2022 DCOY), 2 league MVPs, 17+ All-Pro selections
- ShipNoble: Co-op #1 of 3, January 2026 to April 2026
- SNI metrics: 85+ variables, $300K margin recovery, 7% margin increase on $4M base, $85K leakage across 12 zones, SaaS projecting $900K to $1.5M ARR
- 85-hour period: August 2023 to February 2024 (WWFB 6AM, Wood Gundy 9-5, Banquet Bar 5PM-2AM)
- Designations: FMVA (Feb 2026), BIDA (Apr 2026), FITP (Mar 2026), CAPM (in progress)
- Father's MBA story: family immigrated from Uganda escaping Idi Amin, tuition ran out before completing degree
- Email: ronakpanch66@gmail.com
- LinkedIn: https://www.linkedin.com/in/ronakpanchmatia

## Workflow Rules
- Never bundle more than 5 to 7 discrete changes in a single session
- Always verify image paths exist in public/images/ before referencing them
- When editing content, target the specific data file in src/data/, not the component
- After completing changes, run `npm run build` to confirm clean compile
- If a build fails, fix the error before proceeding to any other task

## Writing Style for All Site Content
- Direct, professional tone appropriate for management consulting
- Lead with conclusion, then supporting reasoning
- No filler phrases ("Great question!", "Absolutely!", "Happy to help")
- Plain, professional language throughout
- Never use em dashes (use commas, colons, semicolons, or separate sentences instead)
