// CoachingTimeline.tsx - full coaching career vertical timeline with expandable programme nodes.
// Consumes /data/coachingTimeline.ts. Codex task: "Update coachingTimeline.ts with new season"

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Trophy } from "lucide-react";
import { coachingTimeline } from "@/data/coachingTimeline";
import { images } from "@/data/images";
import { cn } from "@/lib/utils";

export function CoachingTimeline() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <div>
      <p className="mb-2 font-mono text-[0.63rem] uppercase tracking-[0.28em] text-emerald-400">
        Coaching Timeline
      </p>
      <h3 className="mb-10 text-2xl font-bold text-white sm:text-3xl">
        Four programmes. Currently in his 11th season.
      </h3>

      <div className="relative">
        {/* Vertical spine */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-800" />

        <div className="space-y-6">
          {coachingTimeline.map((program, programIndex) => {
            const isOpen = expanded.has(program.id);

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: programIndex * 0.1 }}
                className="relative pl-14"
              >
                {/* Icon node */}
                <div className="absolute left-0 top-4 inline-flex size-10 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-950/30 text-emerald-300">
                  <Trophy className="size-4" />
                </div>

                {/* Program card */}
                <div
                  className="card-base cursor-pointer bg-card/80 p-6"
                  onClick={() => toggle(program.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && toggle(program.id)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="text-lg font-bold text-white">{program.name}</h4>
                        <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[0.58rem] text-emerald-400">
                          {program.level}
                        </span>
                      </div>
                      <p className="font-mono text-[0.63rem] text-slate-500">
                        {program.years} · {program.totalSeasons} Season{program.totalSeasons !== 1 ? "s" : ""}
                      </p>

                      {/* Surface stat */}
                      <p className="mt-3 font-mono text-[0.65rem] leading-5 text-slate-400">
                        {program.surfaceStat}
                      </p>
                    </div>
                    <div className="shrink-0 text-slate-600">
                      {isOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                    </div>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        {/* Background note */}
                        {program.backgroundNote && (
                          <div className="mt-5 rounded-xl border border-blue-500/15 bg-blue-950/10 p-4">
                            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-blue-400 mb-2">
                              Context
                            </p>
                            <p className="text-sm leading-6 text-slate-400">{program.backgroundNote}</p>
                          </div>
                        )}

                        {/* London Jr. Mustangs - action shots (Year 1 passion shot + Year 2 group) */}
                        {program.id === "london-jm" && (
                          <div className="mt-5 space-y-3">
                            <div className="relative h-56 w-full overflow-hidden rounded-xl border border-white/[0.06]">
                              <Image
                                src={images.photos.coachAction1}
                                alt="Coach Ro on the sideline, London Jr. Mustangs Year 1"
                                fill
                                className="object-cover object-center"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/60 to-transparent" />
                              <p className="absolute bottom-3 left-3 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-emerald-300">
                                London Jr. Mustangs · Year 1
                              </p>
                            </div>
                            <div className="relative h-40 w-full overflow-hidden rounded-xl border border-white/[0.06]">
                              <Image
                                src={images.photos.coachAction2}
                                alt="London Jr. Mustangs Running Backs group"
                                fill
                                className="object-cover object-center"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e17]/60 to-transparent" />
                              <p className="absolute bottom-3 left-3 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-emerald-300">
                                London Jr. Mustangs · Running Backs Group, Year 2
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Season groups */}
                        <div className="mt-5 space-y-4">
                          {program.seasonGroups.map((group, gi) => (
                            <div
                              key={group.id}
                              className={cn(
                                "rounded-xl border border-white/[0.06] bg-white/[0.02] p-4",
                                gi > 0 && "border-t-emerald-500/10",
                              )}
                            >
                              <div className="flex items-center gap-3 mb-3">
                                {gi > 0 && (
                                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 font-mono text-[0.56rem] uppercase tracking-wider text-emerald-400">
                                    Promoted
                                  </span>
                                )}
                                <p className="font-bold text-sm text-white">{group.role}</p>
                                <span className="text-slate-600 font-mono text-[0.6rem]">
                                  {group.seasons} Season{group.seasons !== 1 ? "s" : ""}
                                </span>
                              </div>
                              <ul className="space-y-1.5">
                                {group.highlights.map((h) => (
                                  <li key={h} className="flex items-start gap-2 text-sm text-slate-300">
                                    <span className="mt-2 size-1 shrink-0 rounded-full bg-emerald-400" />
                                    {h}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Photo placeholder - Rotherglen era */}
                {program.id === "rotherglen" && (
                  <div className="mt-4 flex h-28 w-full items-center justify-center gap-2 rounded-xl border border-dashed border-white/[0.08] bg-white/[0.015] text-slate-700">
                    <span className="text-lg leading-none">+</span>
                    <span className="font-mono text-[0.56rem] uppercase tracking-widest">
                      Rotherglen Ravens · 2015-2018
                    </span>
                  </div>
                )}

                {/* COVID break divider between Rotherglen and Western Women's */}
                {program.id === "rotherglen" && (
                  <div className="mt-6 flex items-center gap-4 py-3">
                    <div className="h-px flex-1 bg-slate-800" />
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-slate-600">
                      COVID-19 · 2018 - 2021
                    </span>
                    <div className="h-px flex-1 bg-slate-800" />
                  </div>
                )}

                {/* Photo placeholder - Western Women's era */}
                {program.id === "western-women" && (
                  <div className="mt-4 flex h-28 w-full items-center justify-center gap-2 rounded-xl border border-dashed border-white/[0.08] bg-white/[0.015] text-slate-700">
                    <span className="text-lg leading-none">+</span>
                    <span className="font-mono text-[0.56rem] uppercase tracking-widest">
                      Western Women&apos;s Football · 6 AM Sessions
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
