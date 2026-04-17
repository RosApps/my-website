"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { fadeUp, fadeIn, pageTransition, staggerContainer } from "@/lib/animations";
import { Footer } from "@/components/Footer";
import { statusBar } from "@/data/statusBar";
import { designations, type Designation } from "@/data/designations";
import { timeline } from "@/data/timelineData";
import { skillCategories } from "@/data/skillCategories";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/TestimonialCard";

const NOISE_SVG =
  "data:image/svg+xml;utf8,<svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/></svg>";

const availability = [
  "Fall 2026 Co-op",
  "Summer 2027 Co-op",
  "New Graduate Jan 2028",
];

const hourCards = [
  {
    time: "6:00 AM",
    title: "Western Women's Football",
    role: "Defensive Coordinator",
  },
  {
    time: "9:00 AM - 5:00 PM",
    title: "CIBC Wood Gundy",
    role: "Investment Operations",
  },
  {
    time: "5:00 PM - 2:00 AM",
    title: "The Banquet Bar",
    role: "Hospitality Management",
  },
];

const designationFullNames: Record<string, string> = {
  fmva: "Financial Modelling and Valuations Analyst",
  capm: "Certified Associate in Project Management",
  bida: "Business Intelligence and Data Analyst",
  fitp: "Financial Technology Industry Professional",
};

const caseStudy = [
  {
    label: "Situation",
    body: "ShipNoble, a 3PL and e-commerce fulfilment provider, was scaling across Ontario with tiered per-case pricing across hundreds of cities and limited visibility into which clients, lanes, and zones were actually profitable.",
  },
  {
    label: "Complication",
    body: "Margin leakage was spread across 12 delivery zones and hidden inside a pricing structure built from 85+ variables. Without a profitability lens that tied operations to commercials, the leadership team could not confidently reprice, renegotiate, or reshape the warehouse network.",
  },
  {
    label: "Resolution",
    body: "Built the ShipNoble Index, a profitability scoring tool that surfaced recoverable margin across the client portfolio. Redesigned the Ontario Delivery Zone Model, restructured warehouse geography, and delivered executive-facing reporting directly to the CEO. The work recovered $300K in margin on a $4M base and identified $85K in additional leakage ready for pricing action.",
  },
];

const caseMetrics = [
  { value: "85+", label: "Variables Mapped" },
  { value: "$300K", label: "Margin Recovered" },
  { value: "7%", label: "Margin Increase on $4M Base" },
  { value: "$85K", label: "Leakage Identified" },
];

type SkillItem = { title: string; description?: string };

const skillDetails: Record<string, SkillItem[]> = {
  technical: [
    {
      title: "Financial models and profitability indices",
      description:
        "Built the ShipNoble Index, a custom scoring tool translating 85+ pricing variables into recoverable margin.",
    },
    {
      title: "SQL, Excel, and Power Query",
      description:
        "Wrangled multi-source client and operations data into clean datasets ready for analysis and reporting.",
    },
    {
      title: "Full-stack app builds (React, Next.js, TypeScript)",
      description:
        "Shipped production-grade internal tools, including a searchable football scouting application.",
    },
    {
      title: "Dashboards and data visualisation",
      description:
        "Translated dense operational data into executive-facing reporting delivered directly to the CEO.",
    },
  ],
  consulting: [
    {
      title: "Live client engagements end-to-end",
      description:
        "Owned scope, research, and delivery at ShipNoble and through the Western Management Consulting Club.",
    },
    {
      title: "Executive-facing reporting and board decks",
      description:
        "Produced C-suite materials that framed complex analyses into clear, actionable decisions.",
    },
    {
      title: "Situation / Complication / Resolution framing",
      description:
        "Structured every recommendation around the core narrative: the why, the risk, and the path forward.",
    },
    {
      title: "Stakeholder interviews and workshop facilitation",
      description:
        "Ran discovery sessions with operators, advisors, and franchise ownership to surface the real constraints.",
    },
  ],
  industry: [
    {
      title: "Healthcare",
      description:
        "BHSc Honours foundation with hands-on compliance under PHIPA, PIPEDA, and Health Canada regulations.",
    },
    {
      title: "Banking Technology",
      description:
        "Fintech fluency through FITP and CRM transformation delivered for two advisors at CIBC Wood Gundy.",
    },
    {
      title: "Supply Chain and Logistics",
      description:
        "3PL pricing, delivery zone modelling, and warehouse redesign during the ShipNoble engagement.",
    },
    {
      title: "Sports",
      description:
        "Scouting, film review, and coaching operations across four programmes and eleven seasons.",
    },
  ],
  leadership: [
    {
      title: "Coaching across four programmes",
      description:
        "Translating strategy into execution across Rotherglen, WWFB, London Jr. Mustangs, and Burlington Stampeders.",
    },
    {
      title: "Sideline to boardroom communication",
      description:
        "Switching register between locker-room directness and executive polish without losing the signal.",
    },
    {
      title: "Training, hiring, and managing teams",
      description:
        "Hired, trained, and managed bar and security staff at The Banquet Bar as the youngest Manager in company history.",
    },
    {
      title: "Translating complexity into action",
      description:
        "Reducing dense analyses into three things a stakeholder can own, measure, and execute.",
    },
  ],
};

function certImagePath(d: Designation): string | null {
  if (!d.certPath) return null;
  const map: Record<string, string> = {
    fmva: "/images/FMVA_Certificate.png",
    bida: "/images/BIDA_Certificate.png",
    fitp: "/images/FITP_Certificate.png",
  };
  return map[d.id] ?? null;
}

function CertificateModal({
  designation,
  onClose,
}: {
  designation: Designation;
  onClose: () => void;
}) {
  const image = certImagePath(designation);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-surface-light bg-charcoal p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-surface-light bg-surface text-ivory-muted transition hover:border-gold hover:text-gold"
        >
          <X size={16} />
        </button>
        <h3 className="mb-1 font-[Syne] text-xl font-bold text-ivory">
          {designation.acronym}
        </h3>
        <p className="mb-4 text-base text-ivory-muted">
          {designation.fullName} · {designation.issuer}
          {designation.issueDate ? ` · ${designation.issueDate}` : ""}
        </p>
        <div className="relative max-h-[65vh] w-full overflow-auto rounded-lg border border-surface-light bg-surface">
          {image ? (
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={image}
                alt={`${designation.acronym} certificate`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 720px"
              />
            </div>
          ) : (
            <p className="px-6 py-10 text-center text-base text-ivory-muted">
              Certificate in progress. Earning {designation.acronym} through{" "}
              {designation.issuer}.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function SkillsTabs() {
  const [active, setActive] = useState(skillCategories[0].id);
  const current = skillCategories.find((c) => c.id === active) ?? skillCategories[0];
  const items = skillDetails[current.id] ?? [];

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2 border-b border-surface-light">
        {skillCategories.map((cat) => {
          const isActive = cat.id === active;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActive(cat.id)}
              className={`px-4 py-2 text-base transition ${
                isActive
                  ? "border-b-2 border-gold bg-gold/10 text-gold"
                  : "border-b-2 border-transparent text-ivory-muted hover:text-ivory"
              }`}
            >
              {cat.title}
            </button>
          );
        })}
      </div>
      <p className="mb-4 text-base text-ivory-muted">{current.teaser}</p>
      <div className="flex flex-col">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex items-start gap-3 border-b border-surface-light py-3"
          >
            <span
              aria-hidden
              className="w-1 self-stretch rounded-full bg-gold"
            />
            <div>
              <p className="text-base text-ivory">{item.title}</p>
              {item.description && (
                <p className="mt-1 text-base text-ivory-muted">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProfessionalPage() {
  const [selected, setSelected] = useState<Designation | null>(null);
  const currentStatus = statusBar.currentlyWorkingOn[0];

  return (
    <motion.main
      key="professional"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="overflow-x-hidden"
    >
      {/* HEADER */}
      <section className="w-full bg-charcoal py-12">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 items-start gap-12 md:grid-cols-3"
          >
            {/* Headshot */}
            <div className="relative mx-auto w-full max-w-xs md:col-span-1">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 rounded-full bg-gold/10 blur-3xl"
              />
              <div className="relative aspect-[4/5] max-h-[350px] overflow-hidden rounded-2xl border border-surface-light bg-charcoal">
                <Image
                  src="/images/Ronaks-headshot.png"
                  alt="Ronak Panchmatia"
                  fill
                  priority
                  sizes="(max-width: 768px) 80vw, 280px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Right column */}
            <div className="md:col-span-2 md:max-h-[350px] md:overflow-hidden">
              <h1 className="font-[Syne] text-3xl font-bold text-ivory md:text-4xl">
                Ronak Panchmatia
              </h1>
              <p className="mt-1 text-base text-ivory-muted">
                MBA Candidate (Co-op) | DeGroote School of Business
              </p>

              {/* Status */}
              <div className="mt-3">
                <span className="inline-flex items-center rounded-full border border-surface-light bg-surface px-3 py-1 text-sm text-ivory-muted">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500" />
                  {currentStatus}
                </span>
              </div>

              {/* Availability */}
              <div className="mt-3">
                <p className="mb-1.5 text-sm font-medium text-ivory">
                  Pursuing Roles for:
                </p>
                <div className="flex flex-wrap gap-2">
                  {availability.map((a) => (
                    <span
                      key={a}
                      className="rounded-full border border-gold-muted/30 bg-gold/10 px-3 py-1 text-sm text-gold"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              {/* Designations */}
              <div className="mt-3 flex flex-col gap-0">
                {designations.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setSelected(d)}
                    className="mb-1.5 flex w-full max-w-md cursor-pointer items-center gap-3 rounded-lg border border-surface-light bg-surface px-4 py-2 text-left transition hover:border-gold"
                  >
                    <span className="text-sm font-bold text-gold">
                      {d.acronym}®
                    </span>
                    <span className="text-sm text-ivory-muted">
                      {designationFullNames[d.id] ?? d.fullName}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 85-HOUR WEEK */}
      <section className="w-full bg-surface py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-gold-muted">
            OPERATIONAL INTENSITY
          </p>
          <h2 className="mb-2 font-[Syne] text-3xl font-bold text-ivory">
            The 85-Hour Week
          </h2>
          <p className="mb-4 text-ivory-muted">August 2023 to February 2024</p>
          <p className="mb-6 text-base leading-relaxed text-ivory-muted">
            For six months, I held three roles simultaneously across football
            coaching, investment banking operations, and hospitality management.
            This period defined my capacity for operational intensity.
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {hourCards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="rounded-xl border border-surface-light bg-charcoal p-6"
              >
                <div className="font-[Syne] text-2xl font-bold text-gold">
                  {card.time}
                </div>
                <div className="mt-2 font-semibold text-ivory">{card.title}</div>
                <div className="mt-1 text-base text-ivory-muted">{card.role}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CAREER TIMELINE */}
      <section className="w-full bg-charcoal py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-gold-muted">
            CAREER TIMELINE
          </p>

          <div className="relative">
            <div
              aria-hidden
              className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-gold-muted/30"
            />
            <div className="space-y-10">
              {timeline.map((item) => {
                const isWmcc = item.id === "wmcc";
                const label = isWmcc
                  ? "Western Management Consulting Club"
                  : item.label;
                const bullets = item.detail
                  .split(/\.(?:\s+|$)/)
                  .map((s) => s.trim())
                  .filter(Boolean)
                  .map((s) => (s.endsWith(".") ? s : `${s}.`));
                return (
                  <motion.div
                    key={item.id}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="relative pl-8"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-gold"
                    />
                    <h3 className="text-xl font-bold text-ivory">{label}</h3>
                    <p className="text-base text-gold">
                      {item.summary.split(".")[0].trim()}
                    </p>
                    <p className="text-base text-ivory-muted">{item.period}</p>
                    <ul className="mt-2 list-none space-y-1">
                      {bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-gold">•</span>
                          <span className="text-base text-ivory-muted">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS TABS */}
      <section className="w-full bg-surface py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-gold-muted">
            SKILLS & COMPETENCIES
          </p>
          <p className="text-ivory-muted text-base mb-6">
            Four domains of competence developed through real experience.
          </p>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <SkillsTabs />
          </motion.div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="w-full bg-charcoal py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-gold-muted">
            CASE STUDY
          </p>
          <h2 className="mb-4 font-[Syne] text-3xl font-bold text-ivory">
            Plugging the Leak: How a Profitability Index Recovered $300K in a
            Craft Beer & Wine 3PL
          </h2>
          <p className="mb-8 text-base leading-relaxed text-ivory-muted">
            ShipNoble ships craft beer and wine across Ontario through a network
            of 12 delivery zones. With 85+ pricing variables buried in
            contracts, no one knew which routes were profitable and which were
            bleeding margin. I built the ShipNoble Index to find out.
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            {caseStudy.map((block) => (
              <motion.div key={block.label} variants={fadeUp}>
                <p className="mb-2 text-base font-semibold uppercase tracking-wide text-gold">
                  {block.label}
                </p>
                <p className="text-base leading-relaxed text-ivory-muted">
                  {block.body}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {caseMetrics.map((m) => (
              <div
                key={m.label}
                className="rounded-xl border border-gold-muted/30 bg-surface p-6 text-center"
              >
                <div className="font-[Syne] text-3xl font-bold text-gold">
                  {m.value}
                </div>
                <div className="mt-2 text-base text-ivory-muted">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP VOICE */}
      <section id="leadership-voice" className="w-full bg-surface py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-gold-muted">
            LEADERSHIP VOICE
          </p>
          <h2 className="mb-2 font-[Syne] text-3xl font-bold text-ivory">
            What Leadership Says
          </h2>
          <p className="mb-8 font-[DM_Sans] text-base text-ivory/70">
            Unsolicited feedback from the executive leadership I worked with.
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 gap-6 lg:grid-cols-2"
          >
            {testimonials
              .filter((t) => t.scope === "professional")
              .map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
          </motion.div>
        </div>
      </section>

      {/* Grain overlay noise: kept for design parity */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("${NOISE_SVG}")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      <Footer />

      {selected && (
        <CertificateModal
          designation={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </motion.main>
  );
}
