// CareerTotals.tsx - animated count-up career stats bar for the Coach section.
// Consumes /data/coachingTimeline.ts (coachingCareerTotals).

"use client";

import { motion } from "framer-motion";
import { coachingCareerTotals } from "@/data/coachingTimeline";

const stats = [
  { value: "11th", label: "Seasons", prefix: "Currently in his" },
  { value: coachingCareerTotals.record, label: "Record" },
  { value: coachingCareerTotals.championships, label: "Championships" },
  { value: coachingCareerTotals.allProSelections, label: "All-Pro Selections" },
  { value: String(coachingCareerTotals.programs), label: "Programmes" },
  { value: String(coachingCareerTotals.coachOfTheYear), label: "Coach of the Year", sub: "COTY '21 · DCotY '22" },
  { value: coachingCareerTotals.threePeats, label: "Three-Peats" },
  { value: coachingCareerTotals.leagueMVPs, label: "League MVPs" },
];

export function CareerTotals() {
  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/10 p-6 sm:p-8">
      <p className="mb-6 font-mono text-[0.63rem] uppercase tracking-[0.28em] text-emerald-400">
        Career Totals
      </p>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="text-center"
          >
            {"prefix" in stat && stat.prefix && (
              <p className="mb-0.5 font-mono text-[0.52rem] uppercase tracking-[0.14em] text-slate-600">
                {stat.prefix}
              </p>
            )}
            <p className="font-[family:var(--font-display)] text-3xl font-bold text-white sm:text-4xl whitespace-nowrap">
              {stat.value}
            </p>
            <p className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-slate-500">
              {stat.label}
            </p>
            {"sub" in stat && stat.sub && (
              <p className="mt-0.5 font-mono text-[0.5rem] tracking-[0.10em] text-slate-600">
                {stat.sub}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
