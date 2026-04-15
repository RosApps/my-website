// AffiliationsSection.tsx - scrolling strip of clickable affiliations with detail modals.
// v5: Each org opens a detail card. Consumes /data/affiliations.ts.

"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { affiliations, type Affiliation } from "@/data/affiliations";
import Image from "next/image";

function AffiliationDetail({ a, onClose }: { a: Affiliation; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="relative w-full max-w-lg rounded-2xl border border-white/[0.08] bg-[#0d1120]/98 p-7 shadow-[0_0_40px_rgba(59,130,246,0.12)]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex size-8 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-slate-400 transition hover:text-white"
        >
          <X className="size-3.5" />
        </button>

        <div className="flex items-start gap-4 mb-5">
          {a.imagePath && (
            <div className="relative size-12 shrink-0 overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.04]">
              <Image src={a.imagePath} alt={a.name} fill className="object-contain p-1" />
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold text-white">{a.name}</h3>
            <p className="font-mono text-[0.63rem] uppercase tracking-[0.16em] text-blue-300">
              {a.role}
            </p>
            <p className="font-mono text-[0.6rem] text-slate-500">{a.dates}</p>
          </div>
        </div>

        <div className="space-y-5">
          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-slate-500 mb-2">
              Contributions
            </p>
            <ul className="space-y-1.5">
              {a.contributions.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-slate-300">
                  <span className="mt-2 size-1 shrink-0 rounded-full bg-blue-400" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-slate-500 mb-1">
              Consulting relevance
            </p>
            <p className="text-sm leading-6 text-slate-400">{a.relevance}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AffiliationsSection() {
  const [active, setActive] = useState<string | null>(null);
  const activeAff = affiliations.find((a) => a.id === active) ?? null;

  return (
    <div>
      <p className="mb-4 font-mono text-[0.63rem] uppercase tracking-[0.28em] text-slate-500">
        Affiliations
      </p>
      <div className="flex flex-wrap items-center gap-6">
        {affiliations.map((a) => (
          <button
            key={a.id}
            type="button"
            onClick={() => setActive(a.id)}
            title={a.name}
            aria-label={a.name}
            className="group flex items-center justify-center"
          >
            {a.imagePath ? (
              <Image
                src={a.imagePath}
                alt={a.name}
                width={120}
                height={30}
                unoptimized
                className="h-[30px] w-auto object-contain brightness-0 invert opacity-[0.55] transition-opacity duration-200 group-hover:opacity-[0.85]"
              />
            ) : (
              <span className="rounded-full border border-white/[0.08] bg-card px-4 py-1.5 font-mono text-sm text-slate-400 transition hover:border-blue-500/30 hover:text-slate-200">
                {a.name}
              </span>
            )}
          </button>
        ))}
      </div>

      {activeAff && (
        <AffiliationDetail a={activeAff} onClose={() => setActive(null)} />
      )}
    </div>
  );
}
