// FootballGlossary.tsx - compact hover-pill terminology widget for the Coach sidebar.
// Replaces the accordion: terms shown as pills, hovering highlights the active term
// and reveals the definition in a panel below the pill cloud.

"use client";

import { useState } from "react";
import { footballGlossary } from "@/data/footballGlossary";

export function FootballGlossary() {
  const [active, setActive] = useState<string | null>(null);
  const activeTerm = footballGlossary.find((t) => t.term === active) ?? null;

  return (
    <div className="rounded-2xl border border-white/[0.06] bg-card/40 p-5">
      <p className="mb-1 font-mono text-[0.58rem] uppercase tracking-[0.24em] text-slate-500">
        New to football?
      </p>
      <p className="mb-4 text-[0.68rem] text-slate-600">
        Hover a term for the definition.
      </p>

      <div className="flex flex-wrap gap-1.5">
        {footballGlossary.map((item) => (
          <button
            key={item.term}
            type="button"
            onMouseEnter={() => setActive(item.term)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(item.term)}
            onBlur={() => setActive(null)}
            className={`rounded-full border px-2.5 py-1 font-mono text-[0.58rem] transition-colors ${
              active === item.term
                ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                : "border-white/[0.07] bg-white/[0.02] text-slate-500 hover:border-emerald-500/25 hover:text-slate-300"
            }`}
          >
            {item.term}
          </button>
        ))}
      </div>

      <div
        className={`mt-4 overflow-hidden transition-all duration-200 ${
          activeTerm ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {activeTerm && (
          <div className="rounded-xl border border-emerald-500/15 bg-emerald-950/10 px-4 py-3">
            <p className="mb-1 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-emerald-400">
              {activeTerm.term}
            </p>
            <p className="text-xs leading-5 text-slate-400">{activeTerm.definition}</p>
          </div>
        )}
      </div>
    </div>
  );
}
