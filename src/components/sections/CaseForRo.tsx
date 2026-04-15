// CaseForRo.tsx - situation/complication/resolution positioning section.
// Consumes /data/siteConfig.ts (sections.caseForRo) and /data/caseForRo.ts.
// Codex task: "Update the Case for Ronak closing line" - edit /data/caseForRo.ts.

import { sections } from "@/data/siteConfig";
import { caseForRo, resolutionBody } from "@/data/caseForRo";

export function CaseForRo() {
  return (
    <div>
      <div className="max-w-3xl mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {sections.caseForRo.title}
        </h2>
        <p className="mt-3 badge-label text-xs uppercase tracking-[0.28em] text-blue-300">
          {sections.caseForRo.subtitle}
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <article className="card-base bg-slate-950/50 p-8">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-blue-300">
              Situation
            </p>
            <p className="mt-4 text-base leading-8 text-slate-100 sm:text-lg sm:leading-9">
              {caseForRo.situation}
            </p>
          </article>

          <article className="card-base bg-slate-950/50 p-8">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-blue-300">
              Complication
            </p>
            <p className="mt-4 text-base leading-8 text-slate-200">
              {caseForRo.complication}
            </p>
          </article>

          <article className="card-base bg-slate-950/50 p-8">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-blue-300">
              Resolution
            </p>
            <p className="mt-4 text-base leading-8 text-slate-200">
              {resolutionBody}
            </p>
          </article>
        </div>

        <div className="space-y-4">
          {caseForRo.resolution.map((item, index) => (
            <article
              key={item.pillar}
              className="card-base bg-slate-950/50 p-6"
            >
              <div className="flex items-start gap-4">
                <span className="badge-label inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-sm text-blue-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">{item.pillar}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{item.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
