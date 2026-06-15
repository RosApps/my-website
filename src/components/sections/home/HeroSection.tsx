// HeroSection.tsx - full-viewport hero with animated name, subtitle, headshot, and driving philosophy.
// Consumes /data/siteConfig.ts (person). Uses framer-motion for entrance animation.
// v5.2: No CTA buttons (persona cards handle navigation). Tagline + subtitle enlarged.

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { person } from "@/data/siteConfig";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: "easeOut" as const },
});

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Animated background */}
      <div aria-hidden className="mesh-gradient absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.10)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 py-24 text-center lg:flex-row lg:text-left lg:gap-16">
        {/* Text block */}
        <div className="flex-1 space-y-5">
          <motion.p
            {...fadeUp(0)}
            className="text-2xl font-semibold text-blue-300 sm:text-3xl"
          >
            {person.tagline}
          </motion.p>

          <motion.h1
            {...fadeUp(0.12)}
            className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl"
          >
            {person.name}
          </motion.h1>

          <motion.p
            {...fadeUp(0.22)}
            className="text-xl text-slate-300 sm:text-2xl lg:text-3xl"
          >
            {person.subtitleLine2}
          </motion.p>

          <motion.p
            {...fadeUp(0.34)}
            className="max-w-xl text-base leading-8 text-slate-400"
          >
            {person.drivingPhilosophy}
          </motion.p>
        </div>

        {/* Headshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative shrink-0"
        >
          <div className="relative h-72 w-56 overflow-hidden rounded-[2rem] border border-white/[0.10] bg-[#0a0e17] shadow-[0_0_60px_rgba(59,130,246,0.18)] sm:h-80 sm:w-64 lg:h-96 lg:w-72">
            <Image
              src="/images/Ronak-headshot-web.webp"
              alt="Ronak Panchmatia"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 50vw, 400px"
              className="object-cover object-top"
            />
            {/* Radial vignette - blends teal background into site palette */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 55% at 50% 30%, transparent 22%, rgba(10,14,23,0.70) 48%, rgba(10,14,23,0.92) 68%, #0a0e17 85%)",
              }}
            />
            {/* Bottom fade - reinforces bottom edge */}
            <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#0a0e17] to-transparent" />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-4 -right-4 rounded-xl border border-blue-500/30 bg-[#0d1422]/90 px-3 py-2 backdrop-blur-sm">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-blue-300">
              94-14-1
            </p>
            <p className="font-mono text-[0.56rem] text-slate-500">
              Coaching Record
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.24em] text-slate-600">
            Scroll
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-slate-600 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
