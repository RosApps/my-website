// studentTimelineData.ts - extracurricular and leadership journey timeline for the /student page.
// Matches the TimelineItem shape exported by /data/timelineData.ts so the shared <Timeline /> component
// can render this data without modification. Ordered newest to oldest by start date.

import type { TimelineItem } from "./timelineData";

export const studentTimelineData: TimelineItem[] = [
  {
    id: "mba-capital-fund",
    label: "DeGroote MBA Capital Fund",
    icon: "TrendingUp",
    period: "January 2026 - Present",
    dateRange: { start: [2026, 1], end: "present" },
    summary: "Equity Research Analyst. Hamilton, Ontario.",
    detail:
      "Conducted structured company and sector-level analysis across three investment theses, synthesising competitive positioning, financial modelling, and market dynamics into stock allocation proposals. Presented and defended all three theses to the Fund President, Director, and portfolio managers; one proposal adopted into the active portfolio.",
    weight: "expanded",
    imagePath: null,
  },
  {
    id: "mba-golf-tournament",
    label: "DeGroote MBA Golf Tournament",
    icon: "Briefcase",
    period: "January 2026 - Present",
    dateRange: { start: [2026, 1], end: "present" },
    summary: "Founding Financial Manager. Hamilton, Ontario.",
    detail:
      "Sole financial lead for the inaugural MBA golf tournament, building end-to-end budgeting, sponsor revenue allocation, and vendor cost controls to deliver within target margins. Secured budget approval from the MBA Association and DeGroote administration, navigating multiple rounds of stakeholder feedback and revised financial projections to align with institutional requirements.",
    weight: "expanded",
    imagePath: null,
  },
  {
    id: "wmcc",
    label: "Western Management Consulting Club",
    icon: "TrendingUp",
    period: "September 2019 - April 2021",
    dateRange: { start: [2019, 9], end: [2021, 4] },
    summary: "Vice President. London, Ontario.",
    detail:
      "Managed a team of student consultants through a live client engagement for Chatime (QSR), mapping the end-to-end customer journey and identifying mobile order congestion as the primary fulfilment bottleneck. Presented a store remodel proposal to franchise ownership, securing buy-in and delivering a 37% reduction in consumer complaints.",
    weight: "expanded",
    imagePath: null,
  },
  {
    id: "western-hs-council",
    label: "Faculty of Health Sciences Student Council, Western University",
    icon: "GraduationCap",
    period: "September 2019 - August 2020",
    dateRange: { start: [2019, 9], end: [2020, 8] },
    summary: "First Year Representative. London, Ontario.",
    detail:
      "Served as the dedicated voice for the incoming first-year cohort, surfacing student concerns and feedback to the broader Council and faculty leadership. Supported planning and execution of Council-run academic, social, and orientation programming targeting the first-year student body.",
    weight: "expanded",
    imagePath: null,
  },
  {
    id: "irhs-minister-records",
    label: "Student Council, Iroquois Ridge High School",
    icon: "BookOpen",
    period: "July 2018 - July 2019",
    dateRange: { start: [2018, 7], end: [2019, 7] },
    summary: "Minister of Records. Oakville, Ontario.",
    detail:
      "Recorded and circulated minutes for all Student Council meetings and events under the IRHS umbrella, serving as institutional memory for a council representing 1,300+ students. Oversaw and executed the Council's financial budget alongside school-wide event organisation across the academic year. Hired and trained the incoming President, Vice President, and direct successor, formalising a leadership transition process for the role.",
    weight: "expanded",
    imagePath: null,
  },
  {
    id: "irhs-bridge-day",
    label: "BRidge Day, Iroquois Ridge High School",
    icon: "Trophy",
    period: "September 2018 - June 2019",
    dateRange: { start: [2018, 9], end: [2019, 6] },
    summary: "BRidge Day Leader and Master of Ceremonies. Oakville, Ontario.",
    detail:
      "Master of Ceremonies for BRidge Day, the annual Grade 8 transition event introducing prospective students to high school. Led three separate full-day assemblies running 300 attendees each, managing programme flow, audience engagement, and live transitions across the day.",
    weight: "expanded",
    imagePath: null,
  },
  {
    id: "irhs-golf-captain",
    label: "Golf Team, Iroquois Ridge High School",
    icon: "Trophy",
    period: "September 2017 - June 2019",
    dateRange: { start: [2017, 9], end: [2019, 6] },
    summary: "Team Captain. Oakville, Ontario.",
    detail:
      "Two-year team captain leading practice coordination, match-day logistics, and team representation at inter-school competition.",
    weight: "expanded",
    imagePath: null,
  },
  {
    id: "irhs-link-crew",
    label: "Link Crew, Iroquois Ridge High School",
    icon: "BookOpen",
    period: "September 2017 - June 2019",
    dateRange: { start: [2017, 9], end: [2019, 6] },
    summary: "Leader and Planning Committee Member. Oakville, Ontario.",
    detail:
      "Two-year involvement with Link Crew, beginning as a Grade 9 Orientation Leader running peer mentorship, Welcome Week activities, and ongoing transition support for incoming students. Selected to the senior Planning Committee in the second year, designing and delivering Welcome Week programming for the incoming Grade 9 cohort.",
    weight: "expanded",
    imagePath: null,
  },
  {
    id: "oslc-delegate",
    label: "Ontario Student Leadership Conference",
    icon: "Trophy",
    period: "2017 and 2018",
    dateRange: { start: [2017, 9], end: [2018, 9] },
    summary: "Delegate. Niagara Falls, Ontario.",
    detail:
      "Two-time delegate to OSLC, Canada's largest and longest-running multi-day student leadership conference, hosted annually in Niagara Falls and bringing together 2,000+ student leaders and educators from across the province.",
    weight: "expanded",
    imagePath: null,
  },
  {
    id: "me-to-we-conference",
    label: "ME to WE",
    icon: "BookOpen",
    period: "2015 - 2017",
    dateRange: { start: [2015, 9], end: [2017, 9] },
    summary: "Conference Delegate. Ontario, Canada.",
    detail:
      "Three-time delegate to ME to WE youth leadership conferences across consecutive years in high school. Programming focused on social impact, global citizenship, and youth-led community action.",
    weight: "expanded",
    imagePath: null,
  },
  {
    id: "me-to-we-ecuador",
    label: "ME to WE",
    icon: "Trophy",
    period: "Summer 2014",
    dateRange: { start: [2014, 7], end: [2014, 7] },
    summary:
      "Service Trip Volunteer. Rural community outside Quito, Ecuador.",
    detail:
      "One-week international service trip with ME to WE, contributing to the construction of a school, hospital, and daycare alongside local builders in a rural community outside Quito, Ecuador. Moved 75,000+ lbs of cinder blocks across the build week as part of the volunteer delegation, supporting foundational and structural work across all three facilities. Engaged directly with the host community through cultural exchange and recreational activities with local children, broadening perspective on global development and community-led infrastructure.",
    weight: "expanded",
    imagePath: null,
  },
  {
    id: "mississauga-monarchs",
    label: "Mississauga Monarchs (Ontario Basketball Association)",
    icon: "Trophy",
    period: "June 2013 - September 2017",
    dateRange: { start: [2013, 6], end: [2017, 9] },
    summary: "AAA Basketball Player. Mississauga, Ontario.",
    detail:
      "Four seasons in the Ontario Basketball Association at the AAA level with the Mississauga Monarchs. Competed in OBA Playoffs alongside teammates who progressed to professional basketball careers including the NBA.",
    weight: "expanded",
    imagePath: null,
  },
];
