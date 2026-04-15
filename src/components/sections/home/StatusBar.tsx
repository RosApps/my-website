// StatusBar.tsx - Bloomberg-terminal-style status bar showing "Currently Working On" and "Recently Completed".
// Replaces StockTicker. Consumes /data/statusBar.ts.
// Codex task: "Update statusBar.ts with new current activity"

"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { statusBar } from "@/data/statusBar";

export function StatusBar() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080c14]">
      {/* Terminal header bar */}
      <div className="border-b border-white/[0.05] px-6 py-2">
        <div className="mx-auto flex max-w-7xl items-center gap-3">
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
          <span className="font-mono text-base uppercase tracking-[0.3em] text-emerald-500">
            Live
          </span>
          <span className="font-mono text-base text-slate-500">·</span>
          <span className="font-mono text-base uppercase tracking-[0.22em] text-slate-400">
            Status Feed
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-10 sm:grid-cols-2">
          {/* Currently working on */}
          <div>
            <p className="mb-5 font-mono text-base uppercase tracking-[0.3em] text-emerald-500">
              ▶ Currently Working On
            </p>
            <ul className="space-y-3">
              {statusBar.currentlyWorkingOn.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <span className="relative flex size-2 shrink-0">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="font-mono text-base text-slate-200">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Recently completed */}
          <div>
            <p className="mb-5 font-mono text-base uppercase tracking-[0.3em] text-emerald-500">
              ✓ Recently Completed
            </p>
            <ul className="space-y-3">
              {statusBar.recentlyCompleted.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <Check className="size-3.5 shrink-0 text-emerald-500" />
                  <span className="font-mono text-base text-slate-400">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
