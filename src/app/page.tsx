"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/animations";
import { Footer } from "@/components/Footer";

const NOISE_SVG =
  "data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/></svg>";

const ribbonStats = [
  { value: "85", label: "Hour Weeks" },
  { value: "$300K", label: "Recovered" },
  { value: "4", label: "Designations" },
  { value: "2", label: "Degrees" },
  { value: "93-10-1", label: "Coaching Record" },
  { value: "6", label: "Championships" },
];

const journeyPanels = [
  {
    href: "/professional",
    image: "/images/Ronaks-headshot.png",
    label: "PROFESSIONAL",
    title: "From 85-Hour Weeks to $300K Recovery",
    stat: "$300K margin recovery across 12 shipping zones",
  },
  {
    href: "/student",
    image: "/images/HeadshotRo.png",
    label: "STUDENT",
    title: "BHSc Honours to DeGroote MBA",
    stat: "MBA (Co-op) - Expected December 2027",
    objectPosition: "center 35%",
  },
  {
    href: "/coach",
    image: "/images/CoachRoHeadshot.jpeg",
    label: "COACH",
    title: "93-10-1. Six Championships.",
    stat: "2 Coach of the Year Awards",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-x-hidden">
      {/* STATS RIBBON */}
      <section
        id="stats"
        className="w-full scroll-mt-20 border-b border-gold-muted/30 bg-surface py-12"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 text-center md:grid-cols-3 lg:grid-cols-6"
        >
          {ribbonStats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <div className="whitespace-nowrap font-[Syne] text-3xl font-bold text-gold md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-ivory-muted">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* HERO */}
      <section className="relative flex min-h-[75vh] w-full items-center overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--color-surface) 0%, var(--color-charcoal) 75%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage: `url("${NOISE_SVG}")`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        />

        <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          {/* Left column */}
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg font-light italic text-gold"
            >
              A student to the game of life
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="font-[Syne] text-5xl font-bold tracking-tight text-ivory md:text-7xl"
            >
              Ronak Panchmatia
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-2 text-lg font-normal tracking-wide text-gold"
            >
              MBA, CAPM, FMVA
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mt-4 text-xl font-light text-ivory-muted"
            >
              MBA Candidate. Consultant. Teammate. Leader.
            </motion.p>
          </div>

          {/* Right column: headshot */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="relative mx-auto aspect-square w-full max-w-[350px] overflow-hidden rounded-2xl bg-charcoal"
          >
            <Image
              src="/images/Ronaks-headshot.png"
              alt="Ronak Panchmatia"
              fill
              priority
              sizes="(max-width: 768px) 80vw, 350px"
              className="object-cover object-top"
            />
          </motion.div>
        </div>

      </section>

      {/* SCROLL INDICATOR */}
      <button
        type="button"
        onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
        className="w-full py-6 flex flex-col items-center bg-charcoal"
      >
        <span className="text-xs tracking-[0.3em] text-ivory-muted/40 uppercase">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={16} className="text-ivory-muted/40" />
        </motion.div>
      </button>

      {/* JOURNEY PANELS */}
      <section id="journey" className="w-full bg-charcoal py-16">
        <p className="mb-8 text-center text-xs uppercase tracking-[0.3em] text-gold-muted">
          MY JOURNEY
        </p>
        <p className="mb-8 text-base text-ivory-muted text-center font-medium">
          Select a chapter below to explore my journey.
        </p>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
          {journeyPanels.map((panel) => (
            <Link key={panel.href} href={panel.href}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative flex min-h-[400px] cursor-pointer flex-col justify-end overflow-hidden rounded-2xl border-2 border-gold-muted/30 shadow-lg shadow-gold/5 transition-all duration-300 hover:border-gold"
              >
                <Image
                  src={panel.image}
                  alt={panel.label}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="absolute inset-0 object-cover"
                  style={panel.objectPosition ? { objectPosition: panel.objectPosition } : undefined}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/20" />
                <div className="relative z-10 p-6">
                  <span className="mb-3 inline-block rounded-full bg-gold/10 px-3 py-1 text-xs uppercase tracking-widest text-gold">
                    {panel.label}
                  </span>
                  <h3 className="mb-2 font-[Syne] text-xl font-bold text-ivory md:text-2xl">
                    {panel.title}
                  </h3>
                  <p className="text-base font-medium text-gold">{panel.stat}</p>
                  <p className="mt-4 text-base font-medium uppercase tracking-wide text-ivory-muted/60 transition group-hover:text-gold">
                    Explore →
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="w-full bg-surface py-10">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-5xl px-6 text-center"
        >
          <div className="mb-2 font-serif text-5xl text-gold/30">&ldquo;</div>
          <p className="font-[Syne] text-2xl font-light italic leading-snug text-ivory md:text-3xl">
            Driven by making people smile while making a difference alongside my team.
          </p>
          <p className="mt-4 text-base text-gold">- Ronak Panchmatia</p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
