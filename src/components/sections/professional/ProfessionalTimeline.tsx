// ProfessionalTimeline.tsx - vertical professional career timeline with expandable cards.
// Features the 85-hour period visual. Consumes /data/timelineData.ts.
// v5: No horizontal scroll. Compact cards for early roles, expanded for recent.

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BookOpen,
  Bot,
  Briefcase,
  GraduationCap,
  TrendingUp,
  Trophy,
  Landmark,
  ChevronDown,
  ChevronUp,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { timeline, concurrentTimeline, type TimelineIconName } from "@/data/timelineData";
import { eightyFiveHourPeriod } from "@/data/coachingTimeline";

const iconMap: Record<TimelineIconName, LucideIcon> = {
  GraduationCap,
  Briefcase,
  Trophy,
  BookOpen,
  TrendingUp,
  Bot,
  Landmark,
};

const colorForTime = (color: string) => {
  const map: Record<string, string> = {
    emerald: "text-emerald-400 bg-emerald-400/10 border-emerald-400/30",
    blue: "text-blue-400 bg-blue-400/10 border-blue-400/30",
    amber: "text-amber-400 bg-amber-400/10 border-amber-400/30",
  };
  return map[color] ?? "text-slate-400";
};

export function EightyFiveHourVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="my-8 rounded-2xl border border-amber-500/20 bg-amber-950/10 p-6"
    >
      <p className="mb-1 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-amber-400">
        The 85-Hour Period
      </p>
      <p className="text-sm text-slate-400 mb-5">{eightyFiveHourPeriod.dateRange}</p>

      <div className="space-y-3">
        {eightyFiveHourPeriod.schedule.map((block) => (
          <div
            key={block.time}
            className={`flex items-start gap-4 rounded-xl border p-4 ${colorForTime(block.color)}`}
          >
            <div className="shrink-0 rounded-lg border px-2 py-1 font-mono text-[0.6rem] uppercase tracking-wider">
              {block.time}
            </div>
            <p className="text-sm leading-6">{block.commitment}</p>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs leading-6 text-slate-500">
        {eightyFiveHourPeriod.note}
      </p>
    </motion.div>
  );
}

export function ProfessionalTimeline() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div>
      <div className="mb-8">
        <p className="badge-label text-[0.63rem] uppercase tracking-[0.28em] text-blue-300">
          Career Timeline
        </p>
        <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          The professional record.
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-400">
          Compact cards for early roles. Full detail on recent engagements. Click any card to expand.
        </p>
      </div>

      {/* Show 85-hour callout before CIBC node */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-800 md:left-8" />

        <div className="space-y-4">
          {timeline.map((item) => {
            const Icon = iconMap[item.icon];
            const isExpanded = expanded.has(item.id);
            const isCompact = item.weight === "compact";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="relative pl-14 md:pl-20"
              >
                {/* Icon node */}
                <div className="absolute left-0 top-4 inline-flex size-10 items-center justify-center rounded-full border border-blue-500/30 bg-card text-blue-300 md:left-3 md:size-11">
                  <Icon className="size-4 md:size-5" />
                </div>

                {/* Card */}
                <div
                  className={cn(
                    "card-base bg-card/80 p-5 cursor-pointer",
                    isCompact && "opacity-80 hover:opacity-100",
                  )}
                  onClick={() => toggle(item.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && toggle(item.id)}
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        {item.imagePath && (
                          <div className="size-7 shrink-0 overflow-hidden rounded-md">
                            <Image
                              src={item.imagePath}
                              alt=""
                              width={28}
                              height={28}
                              unoptimized
                              className="h-7 w-7 object-contain brightness-0 invert opacity-60"
                            />
                          </div>
                        )}
                        <h4 className="text-base font-bold text-white">{item.label}</h4>
                      </div>
                      <p className="mt-0.5 font-mono text-sm uppercase tracking-[0.18em] text-slate-500">
                        {item.period}
                      </p>
                      <p className="mt-3 text-base leading-7 text-slate-300">
                        {item.summary}
                      </p>

                      {isExpanded && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-4 text-base leading-8 text-slate-400"
                        >
                          {item.detail}
                        </motion.p>
                      )}
                    </div>

                    <div className="shrink-0 text-slate-600">
                      {isExpanded ? (
                        <ChevronUp className="size-4" />
                      ) : (
                        <ChevronDown className="size-4" />
                      )}
                    </div>
                  </div>
                </div>

                {/* 85-hour callout moved to page-level standalone section */}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
