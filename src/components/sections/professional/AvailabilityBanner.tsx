// AvailabilityBanner.tsx - availability slots displayed at the top of the Professional section.
// Consumes /data/availability.ts. Codex task: "Update availability.ts"

"use client";

import { motion } from "framer-motion";
import { availability } from "@/data/availability";

export function AvailabilityBanner() {
  return (
    <div className="border-b border-blue-500/10 bg-blue-950/15 px-6 py-4">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3">
        <span className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-slate-500">
          Available for
        </span>
        {availability.map((slot, i) => (
          <motion.span
            key={slot}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-blue-300"
          >
            <span className="size-1.5 rounded-full bg-blue-400 animate-pulse" />
            {slot}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
