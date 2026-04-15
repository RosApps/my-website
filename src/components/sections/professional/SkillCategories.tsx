// SkillCategories.tsx - skill category cards linking to dedicated subpages.
// Replaces the bento grid. Consumes /data/skillCategories.ts.

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { skillCategories } from "@/data/skillCategories";

const accentMap: Record<string, { border: string; text: string; bg: string }> = {
  blue: { border: "border-blue-500/25 hover:border-blue-500/50", text: "text-blue-300", bg: "bg-blue-500/10" },
  violet: { border: "border-violet-500/25 hover:border-violet-500/50", text: "text-violet-300", bg: "bg-violet-500/10" },
  emerald: { border: "border-emerald-500/25 hover:border-emerald-500/50", text: "text-emerald-300", bg: "bg-emerald-500/10" },
  amber: { border: "border-amber-500/25 hover:border-amber-500/50", text: "text-amber-300", bg: "bg-amber-500/10" },
};

export function SkillCategories() {
  return (
    <div>
      <p className="mb-2 font-mono text-[0.63rem] uppercase tracking-[0.28em] text-slate-500">
        Skills
      </p>
      <h3 className="mb-8 text-2xl font-bold text-white sm:text-3xl">
        The range, the proof.
      </h3>

      <div className="grid gap-4 sm:grid-cols-2">
        {skillCategories.map((cat, i) => {
          const a = accentMap[cat.accent] ?? accentMap.blue;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={cat.href}
                className={`group flex items-center justify-between gap-4 rounded-2xl border ${a.border} bg-card/60 px-6 py-5 transition-all hover:bg-card/90 hover:-translate-y-0.5`}
              >
                <div className="min-w-0">
                  <p className={`font-mono text-[0.62rem] uppercase tracking-[0.18em] ${a.text} mb-1`}>
                    {cat.title}
                  </p>
                  <p className="text-sm text-slate-400 truncate">{cat.teaser}</p>
                </div>
                <ArrowRight className={`size-4 shrink-0 ${a.text} transition-transform group-hover:translate-x-1`} />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
