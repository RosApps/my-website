// caseForRo.ts - situation/complication/resolution for The ShipNoble Case Study section.
// Codex task: "Update the ShipNoble Case Study closing line" - edit the resolution array below.

export const resolutionBody =
  "Designed and deployed the ShipNoble Index (SNI), a proprietary profitability scoring system operating across two divisions (Delivery and Transportation) with more than 85 variables. The SNI architecture includes: a core formula calibrated to a 40% target margin where each 0.1 increment represents a 10 percentage-point margin movement; three temporal evaluation states (Predicted, True, and Dynamic SNI for live route loading); a Capacity SNI measuring physical van utilisation against a 150 Case Equivalent baseline; a Quality Modifier producing a separate Quality-Adjusted SNI that accounts for delivery errors, damage, and customer reviews; and a multi-level hierarchy spanning product, job, route, client, and driver efficiency (ROE) analytics. The system surfaced approximately $300K in annual recoverable margin, increased company-wide margin by 7%, and identified $85K in previously undetected leakage across 12 fulfilment zones. Additionally, developed a three-tiered SaaS pricing model projecting $900K to $1.5M in incremental ARR from external licensing.";

export const caseForRo = {
  situation:
    "ShipNoble, a growing 3PL and e-commerce fulfilment company operating cargo van delivery and LTL freight divisions, lacked a unified system for measuring profitability at the job, route, client, and driver level. Leadership relied on fragmented operational data and manual analysis, with no standardised method to determine whether individual shipments, routes, or client relationships were profitable.",
  complication:
    "With a $4M revenue base, margin erosion was occurring across multiple dimensions but was invisible in standard reporting. The company had no mechanism to measure real-time profitability during route loading, no framework for comparing predicted versus actual performance, and no quality-adjusted metric to account for operational errors. Pricing decisions, dispatch thresholds, and client retention were all made without reliable unit economics.",
  resolution: [
    {
      pillar: "ShipNoble Index",
      detail:
        "Proprietary profitability scoring system with 85+ variables, three temporal states (Predicted, True, Dynamic), and a Quality Modifier producing dual financial and quality-adjusted scores.",
    },
    {
      pillar: "Margin Recovery",
      detail:
        "Surfaced $300K in annual recoverable margin. Identified $85K in leakage across 12 fulfilment zones. Increased company-wide margin by 7% on a $4M base.",
    },
    {
      pillar: "SaaS Commercialisation",
      detail:
        "Three-tiered external licensing model. Built the client-facing quoting portal, internal dispatch command centre, and executive analytics dashboard. Projected $900K to $1.5M incremental ARR.",
    },
  ],
};
