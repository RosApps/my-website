// timelineData.ts - professional career timeline with corrected dates and concurrent Gantt data.
// v5: Vertical layout, no horizontal scroll. Fixed CIBC Wood Gundy duration, WMCC start date.
// Codex task: "Update timelineData.ts with new role or corrected dates"

export type TimelineIconName =
  | "GraduationCap"
  | "Briefcase"
  | "Trophy"
  | "BookOpen"
  | "TrendingUp"
  | "Bot"
  | "Landmark";

export type CardWeight = "compact" | "expanded";

export type TimelineItem = {
  id: string;
  label: string;
  icon: TimelineIconName;
  period: string;
  dateRange: { start: [number, number]; end: [number, number] | "present" };
  summary: string;
  detail: string;
  weight: CardWeight;
  imagePath?: string | null;
  linkedTo?: string; // e.g. "shipnoble-mindmap"
};

export type ConcurrentRole = {
  id: string;
  label: string;
  start: [number, number]; // [year, month 1-12]
  end: [number, number] | "present";
};

export type ConcurrentTrack = {
  id: string;
  label: string;
  /** Inline RGB string, e.g. "52,211,153" - used to build rgba() values */
  rgb: string;
  roles: ConcurrentRole[];
};

export const timeline: TimelineItem[] = [
  {
    id: "shipnoble",
    label: "ShipNoble Inc.",
    icon: "TrendingUp",
    period: "January 2026 - April 2026",
    dateRange: { start: [2026, 1], end: [2026, 4] },
    summary:
      "Business Transformation Consultant · Co-op #1 of 3. 3PL and e-commerce fulfilment. Built the ShipNoble Index. Redesigned warehouse and pricing models. Supported C-suite.",
    detail:
      "Full-time business transformation consulting engagement at ShipNoble Inc., a 3PL and e-commerce fulfilment business. Built the ShipNoble Index, a proprietary profitability scoring tool that surfaced recoverable margin across the client portfolio. Redesigned the warehouse network to optimise fulfilment geography and cost structure. Created the Ontario Delivery Zone Model mapping tiered per-case pricing across hundreds of cities. Produced executive-facing reporting tools and market evaluations directly for the CEO. Earned four professional designations (FMVA, CAPM, BIDA, and FITP) while delivering this engagement.",
    weight: "expanded",
    imagePath: "/images/SNlogo.png",
    linkedTo: "shipnoble-mindmap",
  },
  {
    id: "jack-astors",
    label: "Jack Astor's Bar and Grill",
    icon: "Briefcase",
    period: "April 2024 - September 2025",
    dateRange: { start: [2024, 4], end: [2025, 9] },
    summary:
      "Lead Bartender. Ranked 3rd of 40 staff across five KPIs. Highest per-shift revenue at the location.",
    detail:
      "Ranked 3rd of 40 staff (top 7%) across five KPIs including average cheque size, table turnover rate, and guest satisfaction. Generated the highest per-shift revenue at the location. Held a standing promotion offer to Bar Manager but chose to pursue the MBA instead.",
    weight: "expanded",
    imagePath: "/images/Astors.png",
  },
  {
    id: "banquet-bar",
    label: "The Banquet Bar",
    icon: "Briefcase",
    period: "August 2023 - April 2024",
    dateRange: { start: [2023, 8], end: [2024, 4] },
    summary:
      "Bar Manager & Head of Security. Youngest Manager in company history.",
    detail:
      "Bar Manager and Head of Security. Youngest Manager in company history. Only employee to hold multiple management positions simultaneously. Operated Student Nights averaging over $20,000 in weekly sales, approximately 35% of total weekly revenue. Hired, trained, and managed both bar and security staff.",
    weight: "expanded",
    imagePath: "/images/Banquet.png",
  },
  {
    id: "cibc",
    label: "CIBC Wood Gundy",
    icon: "Landmark",
    period: "April 2023 - February 2024",
    dateRange: { start: [2023, 4], end: [2024, 2] },
    summary:
      "Client & Portfolio Associate. Salesforce migration. Co-presented to HNW clients across 50+ meetings.",
    detail:
      "Led a CRM transformation for a 500+ household book of business, migrating legacy data into Salesforce and conducting one-on-one advisor walkthroughs to improve pipeline visibility and client follow-up cadence for two senior advisors. Redesigned portfolio pitch books and co-presented investment positioning to high-net-worth clients alongside two senior advisors across 50+ meetings, contributing to improved prospect conversion.",
    weight: "expanded",
    imagePath: "/images/CIBCWG.png",
  },
  {
    id: "rotherglen-camp",
    label: "Rotherglen School Summer Camps",
    icon: "Briefcase",
    period: "April 2021 - September 2022",
    dateRange: { start: [2021, 4], end: [2022, 9] },
    summary: "Head Camp Counsellor. Oakville, Ontario.",
    detail:
      "Promoted from seasonal Camp Counsellor to Head Camp Counsellor, leading the recreation arm of the camp with all sports and physical activity programming routed through this role. Coordinated daily recreation scheduling across 7 camp groups in direct partnership with each group's lead counsellor, sequencing access to shared spaces to keep cohorts separated and minimise cross-contact. Designed and delivered structured sports sessions for groups of varying ages and skill levels, applying a coaching lens to manage participation, behaviour, and group dynamics across concurrent activities.",
    weight: "expanded",
    imagePath: null,
  },
  {
    id: "beertown",
    label: "Beertown Public House",
    icon: "Briefcase",
    period: "January 2021 - May 2023",
    dateRange: { start: [2021, 1], end: [2023, 5] },
    summary:
      "Server & Lead Bartender. Ranked first in upsold product value across the location.",
    detail:
      "Ranked first in upsold product value across the location. Consistently top three in tip percentage and Google review mentions, both tracked as operational KPIs.",
    weight: "expanded",
    imagePath: "/images/BTlogo.png",
  },
  {
    id: "aw-oakville",
    label: "A&W, Oakville",
    icon: "Briefcase",
    period: "April 2017 - September 2019",
    dateRange: { start: [2017, 4], end: [2019, 9] },
    summary: "Lead Expediter. Oakville, Ontario.",
    detail:
      "Promoted from Cashier to Lead Expediter, coordinating order flow between kitchen and service stations during peak volume to maintain ticket times and order accuracy. Cross-trained across all kitchen and front-of-house stations including drive-through, grill, fryer, line cook, prep, and cashier, building full operational fluency in a high-volume quick-service environment.",
    weight: "expanded",
    imagePath: null,
  },
  {
    id: "truscott",
    label: "Truscott I.D.A. Pharmacy",
    icon: "Briefcase",
    period: "April 2015 - February 2020",
    dateRange: { start: [2015, 4], end: [2020, 2] },
    summary:
      "Home Health Care Equipment Technician. Zero compliance incidents across five years.",
    detail:
      "Delivered home health care equipment to 50+ recurring patients, reducing care delays through same-day fittings and installations. Zero compliance incidents across five years under PHIPA, PIPEDA, and Health Canada Medical Devices Regulations. Conducted in-home needs assessments coordinating with prescribers to develop individualised care plans.",
    weight: "expanded",
    imagePath: "/images/IDA.png",
  },
];

// Corrected concurrent timeline data
export const concurrentTimeline: ConcurrentTrack[] = [
  {
    id: "career",
    label: "Operations & Industry",
    rgb: "245,158,11",
    roles: [
      { id: "truscott", label: "Truscott IDA Pharmacy", start: [2015, 4], end: [2020, 2] },
      { id: "beertown", label: "Beertown Public House", start: [2021, 1], end: [2023, 5] },
      { id: "cibc", label: "CIBC Wood Gundy", start: [2023, 4], end: [2024, 2] },
      { id: "banquet-bar", label: "The Banquet Bar", start: [2023, 8], end: [2024, 4] },
      { id: "jack-astors", label: "Jack Astor's Bar and Grill", start: [2024, 4], end: [2025, 9] },
      { id: "shipnoble", label: "ShipNoble Inc., Co-op #1 of 3", start: [2026, 1], end: [2026, 4] },
    ],
  },
  {
    id: "coaching",
    label: "Football Coaching",
    rgb: "52,211,153",
    roles: [
      { id: "rotherglen", label: "Rotherglen Ravens", start: [2015, 1], end: [2018, 12] },
      { id: "western-women", label: "Western Women's Football", start: [2021, 8], end: [2025, 3] },
      { id: "london-jm", label: "London Jr. Mustangs AAA", start: [2023, 1], end: [2025, 6] },
      { id: "burlington", label: "Burlington Stampeders AAA", start: [2025, 9], end: "present" },
    ],
  },
  {
    id: "education-consulting",
    label: "Education & Consulting",
    rgb: "59,130,246",
    roles: [
      { id: "bhsc", label: "Western University BHSc", start: [2015, 9], end: [2020, 4] },
      { id: "wmcc", label: "Western Management Consulting Club VP", start: [2019, 9], end: [2021, 4] },
      { id: "capital-fund", label: "DeGroote MBA Capital Fund", start: [2024, 9], end: "present" },
      { id: "mba", label: "DeGroote MBA Co-op", start: [2024, 9], end: [2027, 12] },
    ],
  },
];
