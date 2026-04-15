// PersonaCards.tsx - journey/skill picker with two prominent selection cards.
// v6: Big heading, two picker cards, both grids always rendered with opacity-based fade.
// Initial state: nothing selected → both grids at opacity-30.
// Selected: chosen grid → opacity-100; other → opacity-10 + pointer-events-none.

"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Users, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { skillCategories } from "@/data/skillCategories";

const personas = [
  {
    id: "professional",
    persona: "The Professional",
    name: "Ronak Panchmatia",
    teaser:
      "MBA Candidate at DeGroote. Business Transformation Consultant at ShipNoble. Four designations earned during Co-op #1. Available Fall 2026.",
    cta: "Meet the Consultant",
    href: "/professional",
    highlights: ["FMVA · CAPM · BIDA · FITP", "ShipNoble Index", "Fall 2026 Co-op"],
    gradient: "from-blue-950/40 via-slate-900/80 to-slate-950",
    border: "border-blue-500/20 hover:border-blue-500/50",
    accentClass: "text-blue-300",
    dotClass: "bg-blue-400",
  },
  {
    id: "student",
    persona: "The Student",
    name: "Ro",
    teaser:
      "The person behind the resume. Why the MBA, why consulting, and what drives the work beyond the credentials.",
    cta: "Meet Ro",
    href: "/student",
    highlights: ["Dean's List", "Toronto Sports Fan", "Mississauga Monarchs AAA Basketball"],
    gradient: "from-violet-950/30 via-slate-900/80 to-slate-950",
    border: "border-violet-500/20 hover:border-violet-500/50",
    accentClass: "text-violet-300",
    dotClass: "bg-violet-400",
  },
  {
    id: "coach",
    persona: "The Coach",
    name: "Coach Ro",
    teaser:
      "Currently in his 11th season. 93-10-1 combined record. Six championships. Two three-peats. Four programmes.",
    cta: "Meet the Coach",
    href: "/coach",
    highlights: ["93-10-1 Record", "6 Championships", "Two Three-Peats"],
    gradient: "from-emerald-950/30 via-slate-900/80 to-slate-950",
    border: "border-emerald-500/20 hover:border-emerald-500/50",
    accentClass: "text-emerald-300",
    dotClass: "bg-emerald-400",
  },
];

const skillAccent: Record<string, { border: string; accent: string; dot: string; gradient: string }> = {
  blue:    { border: "border-blue-500/20 hover:border-blue-500/50",    accent: "text-blue-300",    dot: "bg-blue-400",    gradient: "from-blue-950/30 via-slate-900/80 to-slate-950" },
  violet:  { border: "border-violet-500/20 hover:border-violet-500/50", accent: "text-violet-300",  dot: "bg-violet-400",  gradient: "from-violet-950/30 via-slate-900/80 to-slate-950" },
  emerald: { border: "border-emerald-500/20 hover:border-emerald-500/50", accent: "text-emerald-300", dot: "bg-emerald-400", gradient: "from-emerald-950/30 via-slate-900/80 to-slate-950" },
  amber:   { border: "border-amber-500/20 hover:border-amber-500/50",   accent: "text-amber-300",   dot: "bg-amber-400",   gradient: "from-amber-950/30 via-slate-900/80 to-slate-950" },
};

function PersonaCard({ persona, index }: { persona: (typeof personas)[number]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link
        href={persona.href}
        className={`group block h-full rounded-3xl border bg-gradient-to-br ${persona.gradient} ${persona.border} p-8 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.10)] hover:-translate-y-1`}
      >
        <div className="mb-6">
          <p className={`font-mono text-[0.63rem] uppercase tracking-[0.28em] ${persona.accentClass}`}>
            {persona.persona}
          </p>
          <h3 className="mt-2 text-3xl font-bold text-white">{persona.name}</h3>
        </div>
        <p className="text-base leading-7 text-slate-300">{persona.teaser}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {persona.highlights.map((h) => (
            <span
              key={h}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 font-mono text-[0.62rem] text-slate-400"
            >
              <span className={`size-1 rounded-full ${persona.dotClass}`} />
              {h}
            </span>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-2">
          <span className={`text-sm font-medium ${persona.accentClass}`}>{persona.cta}</span>
          <ArrowRight className={`size-4 ${persona.accentClass} transition-transform group-hover:translate-x-1`} />
        </div>
      </Link>
    </motion.div>
  );
}

function SkillCard({ skill, index }: { skill: (typeof skillCategories)[number]; index: number }) {
  const colors = skillAccent[skill.accent] ?? skillAccent.blue;
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.10, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link
        href={skill.href}
        className={`group block h-full rounded-3xl border bg-gradient-to-br ${colors.gradient} ${colors.border} p-8 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.10)] hover:-translate-y-1`}
      >
        <div className="mb-4">
          <p className={`font-mono text-[0.63rem] uppercase tracking-[0.28em] ${colors.accent}`}>
            Skill Domain
          </p>
          <h3 className="mt-2 text-2xl font-bold text-white">{skill.title}</h3>
        </div>
        <p className="text-base leading-7 text-slate-300">{skill.teaser}</p>
        <div className="mt-8 flex items-center gap-2">
          <span className={`text-sm font-medium ${colors.accent}`}>Explore</span>
          <ArrowRight className={`size-4 ${colors.accent} transition-transform group-hover:translate-x-1`} />
        </div>
      </Link>
    </motion.div>
  );
}

type Selection = null | "journey" | "skill";

export function PersonaCards() {
  const [selection, setSelection] = useState<Selection>(null);

  const toggle = (val: "journey" | "skill") =>
    setSelection((s) => (s === val ? null : val));

  const journeyClass = cn(
    "transition-all duration-500",
    selection === null && "opacity-30",
    selection === "journey" && "opacity-100",
    selection === "skill" && "opacity-10 pointer-events-none select-none",
  );

  const skillClass = cn(
    "transition-all duration-500",
    selection === null && "opacity-30",
    selection === "skill" && "opacity-100",
    selection === "journey" && "opacity-10 pointer-events-none select-none",
  );

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">

        {/* Big heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Where would you like to start?
          </h2>
        </motion.div>

        {/* Picker cards */}
        <div className="grid gap-4 sm:grid-cols-2 mb-16">
          {/* Journey picker */}
          <motion.button
            type="button"
            onClick={() => toggle("journey")}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={cn(
              "rounded-2xl border p-8 text-left transition-all duration-300 w-full",
              selection === "journey"
                ? "border-blue-500/50 bg-blue-500/10 shadow-[0_0_40px_rgba(59,130,246,0.15)]"
                : selection === "skill"
                  ? "border-white/[0.04] bg-white/[0.02] opacity-40"
                  : "border-white/[0.10] bg-white/[0.04] hover:border-blue-500/30 hover:bg-blue-500/5",
            )}
          >
            <div className="mb-4 inline-flex size-11 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10">
              <Users className="size-5 text-blue-300" />
            </div>
            <h3 className="text-xl font-bold text-white">Explore by Journey</h3>
            <p className="mt-2 text-base text-slate-400">
              The Professional · The Student · The Coach
            </p>
            {selection === "journey" && (
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-blue-400">
                Selected ↓
              </p>
            )}
          </motion.button>

          {/* Skill picker */}
          <motion.button
            type="button"
            onClick={() => toggle("skill")}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "rounded-2xl border p-8 text-left transition-all duration-300 w-full",
              selection === "skill"
                ? "border-violet-500/50 bg-violet-500/10 shadow-[0_0_40px_rgba(139,92,246,0.15)]"
                : selection === "journey"
                  ? "border-white/[0.04] bg-white/[0.02] opacity-40"
                  : "border-white/[0.10] bg-white/[0.04] hover:border-violet-500/30 hover:bg-violet-500/5",
            )}
          >
            <div className="mb-4 inline-flex size-11 items-center justify-center rounded-full border border-violet-500/30 bg-violet-500/10">
              <Wrench className="size-5 text-violet-300" />
            </div>
            <h3 className="text-xl font-bold text-white">Explore by Skill</h3>
            <p className="mt-2 text-base text-slate-400">
              Technical · Consulting · Industry · Leadership
            </p>
            {selection === "skill" && (
              <p className="mt-4 font-mono text-xs uppercase tracking-widest text-violet-400">
                Selected ↓
              </p>
            )}
          </motion.button>
        </div>

        {/* Journey grid - always rendered, opacity-controlled */}
        <div className={journeyClass}>
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-slate-500">
            By Journey
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {personas.map((persona, i) => (
              <PersonaCard key={persona.id} persona={persona} index={i} />
            ))}
          </div>
        </div>

        {/* Skill grid - always rendered, opacity-controlled */}
        <div className={cn(skillClass, "mt-16")}>
          <p className="mb-6 font-mono text-xs uppercase tracking-widest text-slate-500">
            By Skill
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {skillCategories.map((skill, i) => (
              <SkillCard key={skill.id} skill={skill} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
