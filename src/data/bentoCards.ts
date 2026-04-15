// bentoCards.ts - bento grid card content across all four columns.
// Consumes: this file only. Codex task: "Add a new card to bentoCards.ts in the [section] section."

type BentoItem = {
  id: string;
  title: string;
  blurb: string;
  proof: string;
  detail: string;
  badge?: string;
  tag?: string;
};

export const bento: {
  technical: BentoItem[];
  consulting: BentoItem[];
  projects: BentoItem[];
  leadership: BentoItem[];
} = {
  technical: [
    {
      id: "financial-modelling",
      title: "Financial Modelling & Valuation",
      badge: "FMVA",
      blurb:
        "Business valuation, profitability modelling, and complex spreadsheet architecture.",
      proof:
        "ShipNoble Index surfaced significant recoverable margin across the client portfolio.",
      detail:
        "FMVA-certified through the Corporate Finance Institute. Applied financial modelling to real 3PL margin analysis, driver efficiency modelling, and valuation exercises at ShipNoble. Built mathematical models evaluating underlying business profitability and operational efficiency.",
    },
    {
      id: "data-bi",
      title: "Data & Business Intelligence",
      badge: "BIDA",
      blurb:
        "Pricing analytics, competitor benchmarking, and BI dashboard design.",
      proof:
        "Coverage mapping across hundreds of Ontario delivery zones with tiered pricing.",
      detail:
        "BIDA-certified. Conducted logistics pricing analytics and competitor evaluations with strict data governance. Designed coverage and pricing spreadsheets mapping tiered per-case wine pricing across Ontario delivery zones.",
    },
    {
      id: "ai-dev",
      title: "AI Application Development",
      badge: "Builder",
      blurb: "Claude Code, Base44, and advanced prompt engineering.",
      proof: "Three production applications built during the MBA.",
      detail:
        "Built a freight pricing calculator, a dual-interface scouting app for the Burlington Stampeders, and the Flex Shot Playbook Diagrammer using Claude Code and Base44. The common thread is straightforward: use software and AI to remove friction from real work.",
    },
    {
      id: "project-mgmt",
      title: "Project Management",
      badge: "CAPM",
      blurb:
        "Cross-functional coordination, documentation management, and client deliverables.",
      proof:
        "Managed deliverables and documentation across multiple active consulting engagements.",
      detail:
        "CAPM earned through PMI during the ShipNoble co-op engagement. The operating work shows up directly in practice: coordinated cross-functional work streams, managed documentation governance, and delivered client-facing outputs at ShipNoble, all concurrently.",
    },
  ],
  consulting: [
    {
      id: "ops-supply-chain",
      title: "Operations & Supply Chain",
      tag: "Transformation",
      blurb:
        "Warehouse network redesign, driver efficiency modelling, and profitability scoring.",
      proof:
        "Direct experience in the work that Operations Transformation and Supply Chain teams deliver.",
      detail:
        "Hands-on operational consulting at ShipNoble covered warehouse network design, carrier pricing logic, driver efficiency modelling, and zone mapping. This was live delivery work for a real business, not a case study.",
    },
    {
      id: "healthcare",
      title: "Healthcare",
      tag: "Domain",
      blurb: "BHSc foundation and patient-facing pharmacy experience.",
      proof:
        "Domain familiarity with health systems from both academic and service delivery perspectives.",
      detail:
        "A BHSc from Western University provides rigorous grounding in healthcare systems and research methodology. Pharmacy experience at Truscott IDA added patient-facing service delivery context. Healthcare remains a genuine area of interest with a credible base.",
    },
    {
      id: "banking-tech",
      title: "Banking & Technology",
      tag: "FITP",
      blurb:
        "FITP-certified. Live banking operations at CIBC Wood Gundy. Equity research at the DeGroote MBA Capital Fund. Two production applications bridging business requirements and technical execution.",
      proof:
        "Designated in Financial & Investment Technology Professional. CRM transformation across 500+ households.",
      detail:
        "Led a CRM transformation migrating 500+ households into Salesforce at CIBC Wood Gundy. Co-presented to HNW clients across 50+ meetings. Equity Research Analyst with the DeGroote MBA Capital Fund, one thesis adopted into the active portfolio. FITP-certified. Built two production applications bridging business requirements and technical execution.",
    },
    {
      id: "stakeholder",
      title: "Stakeholder Management",
      tag: "Executive Support",
      blurb:
        "Direct CEO support at ShipNoble through executive-facing deliverables and reporting.",
      proof:
        "15+ structured coffee chats across KPMG, EY, Deloitte, and Accenture.",
      detail:
        "Produced executive-facing reporting tools and market evaluations directly supporting the CEO at ShipNoble. Also conducted more than 15 structured coffee chats with professionals across KPMG, EY, Deloitte, and Accenture to sharpen industry knowledge and build relationships deliberately.",
    },
  ],
  projects: [
    {
      id: "sn-index",
      title: "ShipNoble Index",
      tag: "Strategy / Analytics",
      blurb:
        "Proprietary profitability scoring tool used in executive decision-making.",
      proof:
        "Used directly in pricing and strategic prioritisation discussions.",
      detail:
        "Built to surface recoverable margin across the ShipNoble client portfolio. The Index scored clients by underlying profitability and flagged opportunities for pricing correction and operational improvement. Its outputs informed CEO-level strategic conversations.",
    },
    {
      id: "freight-calc",
      title: "Freight Pricing Calculator",
      tag: "Operations / Dev",
      blurb:
        "Internal logistics tool automating complex carrier pricing logic.",
      proof:
        "Turned slow manual pricing work into a repeatable internal tool.",
      detail:
        "Built with Claude Code. Automates Ontario carrier pricing across delivery zones, removes manual calculation overhead, and enables faster scenario planning for freight decisions.",
    },
    {
      id: "scouting-app",
      title: "Burlington Stampeders Scouting App",
      tag: "AI / Dev",
      blurb:
        "Dual-interface build with a coaching portal and athlete-facing view.",
      proof:
        "Shipped for a live football programme with two distinct user groups.",
      detail:
        "Built with Claude Code for the Burlington Stampeders U18 programme. The coaching portal handles scouting reports and game preparation. The athlete-facing interface delivers individual feedback and play assignments.",
    },
    {
      id: "playbook",
      title: "Flex Shot Playbook Diagrammer",
      tag: "Prompt Systems",
      blurb:
        "AI system generating play diagrams from structured play call syntax.",
      proof:
        "Compressed diagramming work into a structured prompt workflow.",
      detail:
        "A prompt-based system that converts written play syntax into formatted football diagrams. It speeds up playbook design and makes tactical concepts easier to repeat and communicate.",
    },
    {
      id: "zone-model",
      title: "Ontario Delivery Zone Model",
      tag: "Analytics",
      blurb:
        "Coverage and pricing model spanning hundreds of Ontario cities.",
      proof:
        "Connected carrier coverage, city-level pricing, and market analysis in one model.",
      detail:
        "Spreadsheet model mapping tiered per-case wine pricing and carrier coverage across hundreds of Ontario delivery zones. Used for competitive analysis and pricing discussions at ShipNoble.",
    },
  ],
  leadership: [
    {
      id: "coaching-rotherglen",
      title: "Rotherglen Ravens",
      tag: "Coaching · 2015 - 2018",
      blurb:
        "4 seasons. Player Captain → Defensive Coordinator → Head Coach. 26-2 record. 3 Championships. 2 League MVPs.",
      proof:
        "The origin: started coaching at 13, not as a helper, but in a real defensive coordinator role.",
      detail:
        "Four seasons with the Rotherglen Ravens. Asked to join the coaching staff as Defensive Coordinator after serving as team captain and winning two championships as a player. Led the defence to back-to-back championships in his first two seasons, then was promoted to Head Coach. Went 26-2 across the tenure. Two League MVPs came out of the programme. This is where the coaching identity was built.",
    },
    {
      id: "coaching-london",
      title: "London Jr. Mustangs",
      tag: "Coaching · 2023 - 2025",
      blurb:
        "2 seasons. OSFL AAA U16. Running Backs Coach → Defensive Line Coach. 3 All-Pro selections. Championship berth.",
      proof:
        "Defeated both #1 conference seeds en route to the championship game in year one.",
      detail:
        "Two seasons with the London Jr. Mustangs AAA U16 programme. Started as Running Backs Coach, producing the league leader in Kickoff/Punt Return Touchdowns and earning two All-Pro selections. Transitioned to Defensive Line Coach the following season with a third All-Pro selection. Championship berth and playoff berth across both years.",
    },
    {
      id: "coaching-western",
      title: "Western Women's Football, Line Coordinator",
      tag: "Coaching · 2021 - 2025",
      blurb:
        "Line Coordinator. 6:00 AM field sessions. Winning record. National recognition.",
      proof:
        "Practices ran before sunrise while working evening bar shifts and attending classes full-time.",
      detail:
        "Line Coordinator for the Western University Women's Collegiate Football Club. Practices started at 6:00 AM, before class, before work, before anything else. This ran concurrently with bar management shifts and a full academic schedule from August 2021 to March 2025. The programme achieved a winning record and national recognition across the tenure.",
    },
    {
      id: "coaching-burlington",
      title: "Burlington Stampeders U18, Defensive Line Coach",
      tag: "Coaching · 2025 - Present",
      blurb:
        "Defensive Line Coach, OSFL AAA. Active coaching role under Burlington Minor Football Association.",
      proof:
        "Current. Running concurrently with the MBA co-op engagement at ShipNoble.",
      detail:
        "Defensive Line Coach for the Burlington Stampeders U18 programme under the Burlington Minor Football Association. Current role: active coaching while completing the MBA co-op. Player development, scheme installation, game film, and play design work all run in parallel with a full-time consulting engagement.",
    },
    {
      id: "golf-tournament",
      title: "MBA Golf Tournament: Budget Manager",
      tag: "Finance Ops",
      blurb:
        "Budget Manager for the inaugural DeGroote MBA Golf Tournament.",
      proof:
        "Built the finance system for a live school-wide event from the ground up.",
      detail:
        "Built a financial tracking system using Claude Projects to manage tournament income and expenditures. Managed vendor contracts and sponsorship revenue targets.",
    },
  ],
};
