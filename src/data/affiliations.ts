// affiliations.ts - organizational affiliations with full detail for clickable cards.
// v5: Each affiliation is an object. Codex task: "Update [org] in affiliations.ts"
// Note: recreational sports appear in the Student section only - not listed here.

export type Affiliation = {
  id: string;
  name: string;
  role: string;
  dates: string;
  contributions: string[];
  relevance: string;
  imagePath: string | null;
};

export const affiliations: Affiliation[] = [
  {
    id: "beertown",
    name: "Beertown Public House",
    role: "Server",
    dates: "January 2021 - May 2023",
    contributions: [
      "Ranked #1 in upsold product value across the location",
      "Consistently top 3 in tip percentage and Google review mentions",
      "High-volume hospitality service across a large restaurant format",
      "Built interpersonal and communication skills under pressure",
      "Managed concurrent orders and time-sensitive coordination",
    ],
    relevance:
      "Client-facing presence and composure under pressure are skills that transfer directly to consulting delivery.",
    imagePath: "/images/BTlogo.png",
  },
  {
    id: "burlington-stampeders",
    name: "Burlington Stampeders",
    role: "Defensive Line Coach · AAA U18",
    dates: "2025 - Present",
    contributions: [
      "Player development and scheme installation for a competitive AAA programme",
      "Game film review and opponent scouting",
      "Play design and personnel management",
      "Running concurrently with MBA Co-op #1",
    ],
    relevance:
      "Leadership under sustained commitment, managing a high-performance team while delivering on a full-time professional role.",
    imagePath: "/images/BMFA.png",
  },
  {
    id: "bmfa",
    name: "Burlington Minor Football Association",
    role: "Member Coaching Staff",
    dates: "2025 - Present",
    contributions: [
      "Affiliated through Burlington Stampeders U18 programme",
      "Participates in league governance and player eligibility processes",
    ],
    relevance: "Community sports administration experience.",
    imagePath: "/images/BMFA.png",
  },
  {
    id: "cibc-wood-gundy",
    name: "CIBC Wood Gundy",
    role: "Client & Portfolio Associate",
    dates: "April 2023 - February 2024",
    contributions: [
      "Supported client portfolio administration and reporting",
      "Built familiarity with wealth management and investment products",
      "Prepared client-facing materials and documentation",
      "Developed direct exposure to banking and financial services operations",
    ],
    relevance:
      "Near-year banking experience informs the Banking Technology consulting track: real industry context, not just theory.",
    imagePath: "/images/CIBCWG.png",
  },
  {
    id: "capital-fund",
    name: "DeGroote MBA Capital Fund",
    role: "Fund Member",
    dates: "September 2024 - Present",
    contributions: [
      "Active participation in fund investment decisions",
      "Applied financial analysis and valuation frameworks to real portfolio positions",
    ],
    relevance:
      "Live investment fund experience reinforces the financial modelling and banking technology tracks.",
    imagePath: "/images/DMCF.png",
  },
  {
    id: "mba-golf",
    name: "DeGroote MBA Golf Tournament",
    role: "Budget Manager",
    dates: "September 2024 - April 2025",
    contributions: [
      "Built the financial tracking system for the inaugural tournament using Claude Projects",
      "Managed income and expenditure across sponsorship revenue and vendor contracts",
      "Coordinated with Alumni Committee on financial targets",
    ],
    relevance:
      "Financial management of a live event with real stakeholders and real money: applied project management and financial ops.",
    imagePath: "/images/SticksLogo.png",
  },
  {
    id: "degroote",
    name: "DeGroote School of Business, McMaster University",
    role: "MBA Candidate (Co-op)",
    dates: "September 2024 - Expected December 2027",
    contributions: [
      "Full-time MBA co-op programme",
      "Four designations earned during Co-op #1",
      "Budget Manager, inaugural MBA Golf Tournament",
      "Regional Coordinator, Alumni Committee (Marketing & Communications, Sponsorships)",
      "Dean's List 2026 Candidate",
    ],
    relevance: "The credential and the network for a consulting career.",
    imagePath: "/images/DSB.png",
  },
  {
    id: "jack-astors",
    name: "Jack Astor's Bar and Grill",
    role: "Lead Bartender",
    dates: "April 2024 - September 2025",
    contributions: [
      "High-volume bar operations at a flagship location",
      "Staff training and service leadership",
    ],
    relevance: "Lead Bartender role following the Banquet Bar Bar Manager tenure.",
    imagePath: "/images/Astors.png",
  },
  {
    id: "london-jm",
    name: "London Jr. Mustangs",
    role: "Running Backs Coach → Defensive Line Coach · AAA U16",
    dates: "2023 - 2025",
    contributions: [
      "3 All-Pro player selections across two seasons",
      "Championship Berth; defeated both #1 conference seeds",
      "Produced the league leader in Kickoff/Punt Return Touchdowns",
      "Playoff berth in second season",
    ],
    relevance:
      "Competitive amateur programme alongside Western Women's Football, demonstrating the ability to manage multiple high-commitment coaching roles simultaneously.",
    imagePath: "/images/LJM-logo.png",
  },
  {
    id: "shipnoble",
    name: "ShipNoble Inc.",
    role: "Business Transformation Consultant · Co-op #1",
    dates: "January 2026 - Present",
    contributions: [
      "Built the ShipNoble Index, a proprietary profitability scoring tool",
      "Redesigned warehouse network for optimised fulfilment geography",
      "Created Ontario Delivery Zone Model mapping tiered per-case pricing across hundreds of cities",
      "Produced executive-facing reporting tools and market evaluations for the CEO",
      "Earned four professional designations (FMVA, CAPM, BIDA, FITP) during the engagement",
    ],
    relevance:
      "The anchor of the professional positioning: live end-to-end consulting delivery at a real 3PL business.",
    imagePath: "/images/SNlogo.png",
  },
  {
    id: "banquet-bar",
    name: "The Banquet Bar",
    role: "Bar Manager & Head of Security",
    dates: "August 2023 - April 2024",
    contributions: [
      "Became the youngest Bar Manager in the establishment's history",
      "Held dual role: Bar Manager and Head of Security",
      "Managed high-volume hospitality operations including staffing, inventory, and service delivery",
      "Responsible for full bar P&L during shifts",
      "Ran concurrently with CIBC Wood Gundy and Western Women's Football (the 85-hour period)",
    ],
    relevance:
      "Youngest Bar Manager in the establishment's history. Dual operational leadership under sustained pressure at peak concurrency.",
    imagePath: "/images/Banquet.png",
  },
  {
    id: "truscott",
    name: "Truscott I.D.A. Pharmacy",
    role: "Pharmacy Assistant",
    dates: "April 2015 - February 2020",
    contributions: [
      "Patient-facing home health care delivery",
      "Prescription processing and compounding support",
      "Built direct familiarity with healthcare delivery systems",
    ],
    relevance:
      "Five-year pharmacy role provides authentic healthcare domain knowledge for the Healthcare consulting track.",
    imagePath: "/images/IDA.png",
  },
  {
    id: "wmcc",
    name: "Western Management Consulting Club",
    role: "Vice President",
    dates: "September 2019 - April 2021",
    contributions: [
      "Led club operations and member programming",
      "Organised case workshops and consulting-focused events",
      "Recruited and onboarded new members",
    ],
    relevance: "First formal consulting exposure, building the foundation for the MBA and professional career.",
    imagePath: "/images/WMC.png",
  },
  {
    id: "western",
    name: "Western University",
    role: "BHSc (Honours)",
    dates: "September 2015 - April 2020",
    contributions: [
      "Bachelor of Health Sciences (Honours)",
      "Dean's List with Distinction",
      "IRHS Integrity Award (2019)",
      "A+ in Financial & Managerial Accounting",
      "Started coaching football while completing undergraduate degree",
    ],
    relevance: "Health sciences foundation, academic rigour, and early leadership; the base layer for everything else.",
    imagePath: "/images/UWO.gif",
  },
  {
    id: "western-women",
    name: "Western Women's Football Club",
    role: "DLine Coach → Line Coordinator",
    dates: "2021 - 2025",
    contributions: [
      "3 Championships across 4 seasons",
      "14 All-Pro player selections",
      "Coach of the Year in rookie season",
      "Led league in every statistical defensive line category",
      "Developed 2 rookie coaches in Line Coordinator role",
    ],
    relevance:
      "Four seasons of collegiate-level coaching alongside full-time employment and academic commitments; sustained high performance under real constraint.",
    imagePath: "/images/WWFB-logo.png",
  },
];

// Flat name array for legacy use (AffiliationsStrip marquee)
export const affiliationNames: string[] = affiliations.map((a) => a.name);
