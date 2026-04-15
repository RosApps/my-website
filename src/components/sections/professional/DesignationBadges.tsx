// DesignationBadges.tsx - interactive designation badges, each opening a detail card.
// Consumes /data/designations.ts. Codex task: "Update designations.ts with [designation] card"

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { designations, type Designation } from "@/data/designations";

const tagColors: Record<string, string> = {
  Healthcare: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  "Banking Technology": "border-blue-500/30 bg-blue-500/10 text-blue-300",
  "Supply Chain & Logistics": "border-amber-500/30 bg-amber-500/10 text-amber-300",
  Sports: "border-violet-500/30 bg-violet-500/10 text-violet-300",
};

// Maps designation id → PNG image path (converted from PDF)
const certImagePath: Record<string, string> = {
  fmva: "/images/FMVA_Certificate.png",
  bida: "/images/BIDA_Certificate.png",
  fitp: "/images/FITP_Certificate.png",
};

function DesignationCard({ d, onClose }: { d: Designation; onClose: () => void }) {
  const imgPath = certImagePath[d.id] ?? null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative rounded-2xl border border-blue-500/20 bg-[#0d1422]/95 p-7 shadow-[0_0_40px_rgba(59,130,246,0.12)]"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 inline-flex size-8 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.04] text-slate-400 transition hover:text-white"
      >
        <X className="size-3.5" />
      </button>

      <div className="mb-1 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-blue-400">
        {d.issuer}
      </div>
      <h3 className="text-2xl font-bold text-white">{d.fullName}</h3>
      <div className="mt-0.5 flex items-center gap-3">
        <p className="font-mono text-[0.65rem] text-slate-500">{d.earned}</p>
        {d.issueDate && (
          <span className="font-mono text-[0.6rem] text-slate-600">· Issued {d.issueDate}</span>
        )}
      </div>

      <p className="mt-5 text-sm leading-7 text-slate-300">{d.learning}</p>

      <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-slate-500 mb-1">
          Applied at
        </p>
        <p className="text-sm text-slate-400">{d.appliedAt}</p>
      </div>

      <div className="mt-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-slate-500 mb-1">
          Consulting approach
        </p>
        <p className="text-sm italic text-slate-300">&ldquo;{d.consultingApproach}&rdquo;</p>
      </div>

      {/* Certificate - image or in-progress badge */}
      <div className="mt-4">
        <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-slate-500 mb-2">
          Certificate
        </p>
        {imgPath ? (
          <div className="relative w-full overflow-hidden rounded-xl border border-white/[0.08]">
            <Image
              src={imgPath}
              alt={`${d.acronym} Certificate`}
              width={900}
              height={700}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        ) : (
          <div className="flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/[0.06] px-4 py-3">
            <span className="size-1.5 rounded-full bg-amber-400 animate-pulse" />
            <p className="font-mono text-[0.62rem] text-amber-300">In Progress: certificate pending</p>
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {d.tags.map((tag) => (
          <span
            key={tag}
            className={`rounded-full border px-3 py-1 font-mono text-[0.62rem] ${tagColors[tag] ?? ""}`}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function DesignationBadges() {
  const [active, setActive] = useState<string | null>(null);
  const activeDesignation = designations.find((d) => d.id === active) ?? null;

  return (
    <div>
      <p className="mb-4 font-mono text-[0.63rem] uppercase tracking-[0.28em] text-slate-500">
        Professional Designations, Co-op #1
      </p>
      <div className="flex flex-wrap gap-3 mb-6">
        {designations.map((d) => (
          <motion.button
            key={d.id}
            type="button"
            onClick={() => setActive(active === d.id ? null : d.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`rounded-full border h-12 px-6 font-mono text-lg font-bold transition-colors ${
              active === d.id
                ? "border-blue-500/60 bg-blue-500/15 text-white shadow-[0_0_20px_rgba(59,130,246,0.30)]"
                : "border-white/[0.12] bg-white/[0.03] text-slate-300 hover:border-blue-500/30 hover:text-white"
            }`}
            aria-expanded={active === d.id}
          >
            {d.acronym}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {activeDesignation && (
          <DesignationCard
            key={activeDesignation.id}
            d={activeDesignation}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
