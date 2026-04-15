// designations.ts - designation badge cards with learnings, tags, consulting approach,
// certificate image paths, and issue dates.
// v5.2: Certificate paths and issue dates filled in. ShipNoble references removed from cards.
// Codex task: "Update designations.ts with [designation] card content"

export type IndustryTag =
  | "Healthcare"
  | "Banking Technology"
  | "Supply Chain & Logistics"
  | "Sports";

export type Designation = {
  id: string;
  acronym: string;
  fullName: string;
  issuer: string;
  earned: string;
  issueDate: string | null;
  certPath: string | null; // URL-encoded path to PDF in /public/images/
  learning: string;
  appliedAt: string;
  tags: IndustryTag[];
  consultingApproach: string;
};

export const designations: Designation[] = [
  {
    id: "fmva",
    acronym: "FMVA",
    fullName: "Financial Modelling & Valuation Analyst",
    issuer: "Corporate Finance Institute",
    earned: "Co-op #1 · 2026",
    issueDate: "February 3, 2026",
    certPath: "/images/FMVA%20Certificate.pdf",
    learning:
      "Taught me to build models that surface hidden value, not just report what is already visible. The framework became the lens for every financial model and profitability analysis built during the consulting engagement: if you cannot model the impact, the analysis is unfinished.",
    appliedAt:
      "Profitability Scoring Index · Delivery Zone Coverage Model · Driver Efficiency Analysis",
    tags: ["Supply Chain & Logistics", "Banking Technology"],
    consultingApproach:
      "Every recommendation needs a number behind it. If you cannot model the impact, you have not finished the analysis.",
  },
  {
    id: "capm",
    acronym: "CAPM",
    fullName: "Certified Associate in Project Management",
    issuer: "Project Management Institute (PMI)",
    earned: "Co-op #1 · 2026",
    issueDate: null,
    certPath: null,
    learning:
      "Formalised what I had been doing in practice: coordinating cross-functional workstreams, managing stakeholder deliverables, and keeping multiple concurrent tracks on schedule. The CAPM gave the framework; the engagement gave it real meaning.",
    appliedAt:
      "Live consulting engagement · MBA Golf Tournament (Budget Manager) · Scouting app build",
    tags: ["Supply Chain & Logistics", "Healthcare"],
    consultingApproach:
      "Projects do not fail at delivery. They fail at scope. Locking the scope and managing the change is the job.",
  },
  {
    id: "bida",
    acronym: "BIDA",
    fullName: "Business Intelligence & Data Analyst",
    issuer: "Corporate Finance Institute",
    earned: "Co-op #1 · 2026",
    issueDate: "April 9, 2026",
    certPath: "/images/BIDA%C2%AE%20Certificate.pdf",
    learning:
      "Data tells a story only if the model asks the right question. The BIDA pushed me to think about governance and structure first, then analysis; a sequence most people reverse.",
    appliedAt:
      "Ontario Delivery Zone Coverage Model · Competitor Benchmarking · Pricing Analytics",
    tags: ["Supply Chain & Logistics", "Banking Technology", "Healthcare"],
    consultingApproach:
      "Structured data before visualised data. A clean dataset with a clear question beats a polished dashboard with a murky one.",
  },
  {
    id: "fitp",
    acronym: "FITP",
    fullName: "Financial Technology Industry Professional",
    issuer: "Corporate Finance Institute",
    earned: "Co-op #1 · 2026",
    issueDate: "March 18, 2026",
    certPath: "/images/FTIP%20Certificate.pdf",
    learning:
      "Fintech, digital payments, blockchain, and the intersection of finance and technology. The FITP gave me the commercial vocabulary to engage credibly in banking technology conversations, and the lens to see where technology creates and destroys financial value.",
    appliedAt:
      "Industry intelligence work · DeGroote MBA Capital Fund · Coffee chat preparation across KPMG, EY, Deloitte, Accenture",
    tags: ["Banking Technology"],
    consultingApproach:
      "Technology is not a strategy. Understanding which technology problems map to financial value is the work.",
  },
];
