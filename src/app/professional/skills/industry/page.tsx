import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Knowledge",
};

const industries = [
  {
    id: "healthcare",
    title: "Healthcare",
    color: "emerald",
    signal: "BHSc Honours, Western University. Patient-facing pharmacy work. Five years of direct healthcare delivery.",
    depth:
      "A Bachelor of Health Sciences from Western University provides rigorous grounding in healthcare systems and research methodology. Pharmacy experience at Truscott I.D.A. added patient-facing service delivery context across nearly five years. Healthcare remains a genuine area of interest with a credible base, not a declared vertical, but a lane where the background is real.",
    applications: [
      "Healthcare operations and delivery system design",
      "Patient-facing service and client experience",
      "Research methodology and evidence-based frameworks",
    ],
  },
  {
    id: "banking-tech",
    title: "Banking Technology",
    color: "blue",
    signal: "FITP Designation. CIBC Wood Gundy, April 2023 to February 2024. DeGroote MBA Capital Fund.",
    depth:
      "FITP-certified through the Corporate Finance Institute, covering fintech, digital payments, blockchain, and the intersection of finance and technology. The CIBC Wood Gundy placement added nearly a year of direct banking operations exposure. The MBA Capital Fund keeps the investment lens active. Banking technology is an active area of interest with a useful technical and commercial lens. Incoming EY Banking Technology co-op evidences the banking-technology affinity.",
    applications: [
      "Fintech, digital payments, and blockchain",
      "Wealth management operations",
      "Investment analysis and portfolio support",
    ],
  },
  {
    id: "supply-chain",
    title: "Supply Chain & Logistics",
    color: "amber",
    signal: "ShipNoble Co-op #1, live 3PL consulting. Warehouse network redesign. Ontario Delivery Zone Model.",
    depth:
      "Hands-on operational consulting at ShipNoble covered warehouse network design, carrier pricing logic, driver efficiency modelling, and zone mapping across hundreds of Ontario delivery zones. The ShipNoble Index surfaced recoverable margin across the client portfolio. This was live delivery work for a real business, not a case study; it underpins the strongest consulting positioning.",
    applications: [
      "3PL operations and fulfilment network design",
      "Carrier pricing and coverage modelling",
      "Operational profitability analysis",
    ],
  },
  {
    id: "sports",
    title: "Sports",
    color: "violet",
    signal: "Currently in his 11th season of coaching. Scouting app. Playbook Diagrammer. 94-14-1 combined record across four programmes, six championships.",
    depth:
      "More than a decade of competitive football coaching across four programmes, six championships. The sports vertical is unique because it combines genuine domain expertise with concrete business assets: a scouting application, an AI-powered playbook diagrammer, and a coaching track record with quantifiable outcomes. The people development and high-performance team dynamics translate directly to consulting and leadership.",
    applications: [
      "Sports management and team operations",
      "AI-powered tools for athlete development",
      "Leadership and performance frameworks from competitive sport",
    ],
  },
];

const colorMap: Record<string, { accent: string; border: string; bg: string }> = {
  emerald: { accent: "text-emerald-300", border: "border-emerald-500/20", bg: "bg-emerald-950/10" },
  blue: { accent: "text-blue-300", border: "border-blue-500/20", bg: "bg-blue-950/10" },
  amber: { accent: "text-amber-300", border: "border-amber-500/20", bg: "bg-amber-950/10" },
  violet: { accent: "text-violet-300", border: "border-violet-500/20", bg: "bg-violet-950/10" },
};

export default function IndustrySkillsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/professional"
        className="mb-8 inline-flex items-center gap-2 font-mono text-[0.63rem] uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-300"
      >
        <ArrowLeft className="size-3.5" />
        Back to Professional
      </Link>

      <p className="font-mono text-[0.63rem] uppercase tracking-[0.28em] text-emerald-300">
        Industry Knowledge
      </p>
      <h1 className="mt-3 text-3xl font-bold text-white sm:text-5xl">
        Four domains. Real signal.
      </h1>
      <p className="mt-4 text-base leading-8 text-slate-400 max-w-2xl">
        Healthcare, banking technology, supply chain & logistics, and sports; each grounded in
        authentic experience, not declared interest.
      </p>

      <div className="mt-12 space-y-6">
        {industries.map((ind) => {
          const c = colorMap[ind.color];
          return (
            <div key={ind.id} className={`rounded-2xl border ${c.border} ${c.bg} p-7`}>
              <h3 className={`text-2xl font-bold ${c.accent} mb-2`}>{ind.title}</h3>
              <p className="font-mono text-[0.63rem] text-slate-500 mb-4">{ind.signal}</p>
              <p className="text-sm leading-7 text-slate-300 mb-5">{ind.depth}</p>
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-slate-600 mb-2">
                  Applications
                </p>
                <ul className="space-y-1.5">
                  {ind.applications.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-sm text-slate-400">
                      <span className={`size-1 shrink-0 rounded-full ${c.accent.replace("text-", "bg-")}`} />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
