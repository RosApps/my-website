"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, pageTransition, staggerContainer } from "@/lib/animations";
import { Footer } from "@/components/Footer";
import { coachingTimeline } from "@/data/coachingTimeline";
import { footballGlossary } from "@/data/footballGlossary";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/TestimonialCard";
import stampeders2026 from "@/data/stampeders2026.json";

type GameResult = {
  opponent: string;
  result: "W" | "L" | "T";
  score: string;
};

type SeasonData = {
  games?: GameResult[];
};

const careerStats: { value: string; label: string; nowrap?: boolean }[] = [
  { value: "94-14-1", label: "Record All-Time", nowrap: true },
  { value: "6", label: "Championships" },
  { value: "4", label: "Programmes" },
  { value: "2", label: "COTY" },
  { value: "2", label: "Three-Peats" },
  { value: "2", label: "League MVPs" },
  { value: "17+", label: "All-Pro Selections" },
];

const scoutingCaseStudy = [
  {
    label: "Situation",
    body: "Game film review across multiple opponents required manual tracking of personnel, formations, and tendencies. Coaches spent hours on spreadsheets that could not scale.",
  },
  {
    label: "Complication",
    body: "Without a structured scouting tool, defensive game plans relied on memory and incomplete data. Tendency identification was inconsistent and time-consuming.",
  },
  {
    label: "Resolution",
    body: "Built a full-stack scouting application enabling coaches to log opponent tendencies by down, distance, formation, and personnel. Delivered searchable, filterable reports that reduced game-plan preparation time and improved defensive play-calling accuracy.",
  },
];

const timelineOrder = ["burlington", "london-jm", "western-women", "rotherglen"];
const orderedTimeline = timelineOrder
  .map((id) => coachingTimeline.find((p) => p.id === id))
  .filter((p): p is (typeof coachingTimeline)[number] => Boolean(p));

function GlossaryPill({
  term,
  definition,
}: {
  term: string;
  definition: string;
}) {
  return (
    <div className="relative group">
      <div className="cursor-default rounded-lg border border-surface-light bg-charcoal px-4 py-3 text-left transition group-hover:border-gold-muted/50">
        <div className="text-sm font-medium text-ivory">{term}</div>
      </div>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-charcoal border border-gold-muted/30 rounded-lg px-4 py-3 text-ivory-muted text-sm w-64 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 shadow-lg">
        {definition}
        <span
          aria-hidden
          className="absolute left-1/2 top-full -translate-x-1/2 -mt-px h-2 w-2 rotate-45 border-b border-r border-gold-muted/30 bg-charcoal"
        />
      </div>
    </div>
  );
}

export default function CoachPage() {
  const season = stampeders2026 as SeasonData;
  const games = season.games ?? [];

  return (
    <motion.main
      key="coach"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="overflow-x-clip"
    >
      {/* HERO */}
      <section className="relative flex min-h-[60vh] w-full items-center overflow-hidden">
        <Image
          src="/images/group.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 25%" }}
        />
        <div aria-hidden className="absolute inset-0 bg-charcoal/70" />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 items-center gap-8 md:grid-cols-[200px_1fr]"
          >
            <div className="relative mx-auto w-full max-w-[200px] overflow-hidden rounded-2xl border border-gold-muted/30 md:mx-0">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/CoachRoHeadshot.jpeg"
                  alt="Coach Ro Panchmatia"
                  fill
                  priority
                  sizes="200px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div>
              <p className="font-[Syne] text-2xl font-bold italic text-ivory md:text-4xl">
                &ldquo;Diagnose on film. Remedy in practice. Execute on gameday.&rdquo;
              </p>
              <p className="mt-4 text-lg text-ivory-muted">
                Volunteer coach in the highest AAA league in Canada. Currently
                in his 11th season.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CAREER TOTALS */}
      <section className="w-full border-y border-gold-muted/30 bg-surface py-8">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-4 text-center md:grid-cols-4 lg:grid-cols-7"
          >
            {careerStats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <div className="font-[Syne] text-2xl font-bold text-gold md:text-3xl">
                  {stat.value}
                </div>
                <div
                  className={`mt-1 text-xs uppercase tracking-widest text-ivory-muted ${stat.nowrap ? "whitespace-nowrap" : ""}`}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* COACHING TIMELINE */}
      <section className="w-full bg-charcoal py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-gold-muted">
            COACHING CAREER
          </p>

          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[250px_1fr]">
            <div className="hidden h-full self-start lg:block">
              <div className="sticky top-24 max-w-[250px] self-start">
                <Image
                  src="/images/yelling.jpg"
                  alt="Coaching on the sideline"
                  width={333}
                  height={960}
                  sizes="250px"
                  className="h-auto w-full rounded-xl object-contain"
                />
              </div>
            </div>

            <div className="relative">
              <div
                aria-hidden
                className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-gold-muted/30"
              />
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="space-y-12"
              >
                {orderedTimeline.map((program) => {
                  const primaryRole =
                    program.seasonGroups[program.seasonGroups.length - 1]?.role ??
                    program.seasonGroups[0]?.role ??
                    "";
                  const isBurlington = program.id === "burlington";

                  const accolades: Record<string, string[]> = {
                    burlington: ["Current - DLine Coach - Season in Progress"],
                    "london-jm": [
                      "2 All-Pro Selections",
                      "Championship Berth",
                      "Defeated both #1 seeds en route to the championship",
                      "Produced the league leader in Kickoff/Punt Return Touchdowns",
                    ],
                    "western-women": [
                      "3 Provincial Championships",
                      "7 All-Pro Selections (4 First Team, 3 Second Team)",
                      "3 League Season Awards from players",
                      "2 Team Season Awards from players",
                      "Coach of the Year",
                    ],
                    rotherglen: [
                      "3 Championships",
                      "2 League MVPs",
                      "Built and ran the defensive game plan from first season",
                      "Led defence to championship victories in first three seasons",
                    ],
                  };

                  const images: Record<
                    string,
                    { src: string; width: number; height: number; alt: string }
                  > = {
                    burlington: {
                      src: "/images/sideline2.jpg",
                      width: 1064,
                      height: 1596,
                      alt: "Burlington Stampeders sideline",
                    },
                    "london-jm": {
                      src: "/images/point.jpg",
                      width: 1104,
                      height: 744,
                      alt: "London Jr. Mustangs coaching",
                    },
                    "western-women": {
                      src: "/images/wwfbgroup.jpg",
                      width: 716,
                      height: 479,
                      alt: "Western Women's Football Club",
                    },
                  };

                  const bullets = accolades[program.id] ?? [];
                  const image = images[program.id];

                  return (
                    <motion.div key={program.id} variants={fadeUp}>
                      <div
                        className={`relative ${isBurlington ? "border-l-2 border-gold pl-4" : "pl-8"}`}
                      >
                        <span
                          aria-hidden
                          className={`absolute top-1.5 h-3 w-3 rounded-full bg-gold ${isBurlington ? "-left-[7px]" : "left-0"}`}
                        />
                        <h3 className="text-xl font-bold text-ivory">
                          {program.name}
                        </h3>
                        <p className="text-base text-gold">{primaryRole}</p>
                        <p className="text-base text-ivory-muted">
                          {program.years}
                        </p>

                        {program.id === "burlington" && (
                          <p className="mt-2 text-base text-ivory-muted">
                            Coached by a current OUA and former CFL head coach.
                            Coaching alongside 5+ OUA All-Stars.
                          </p>
                        )}

                        {program.id === "london-jm" && (
                          <p className="mt-2 text-base text-ivory-muted">
                            Head coached by an OUA Defensive Player of the Year.
                            Coaching staff included multiple OUA athletes past
                            and present.
                          </p>
                        )}

                        {bullets.length > 0 && (
                          <ul className="mt-3 list-none space-y-1">
                            {bullets.map((line) => (
                              <li
                                key={line}
                                className="flex items-start gap-2"
                              >
                                <span className="text-gold">•</span>
                                <span className="text-base text-ivory-muted">
                                  {line}
                                </span>
                              </li>
                            ))}
                          </ul>
                        )}

                        {image && program.id === "western-women" && (
                          <div className="mt-6 w-full overflow-hidden rounded-xl">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={image.width}
                              height={image.height}
                              sizes="(min-width: 1024px) 50rem, 100vw"
                              className="h-auto w-full object-contain"
                            />
                          </div>
                        )}

                        {image && program.id === "burlington" && (
                          <div className="mt-6 w-full overflow-hidden rounded-xl">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={image.width}
                              height={image.height}
                              sizes="(min-width: 1024px) 50rem, 100vw"
                              className="h-auto w-full object-contain"
                            />
                          </div>
                        )}

                        {image && program.id === "london-jm" && (
                          <div className="mt-6 max-h-[350px] w-full overflow-hidden rounded-xl">
                            <Image
                              src={image.src}
                              alt={image.alt}
                              width={image.width}
                              height={image.height}
                              sizes="(min-width: 1024px) 50rem, 100vw"
                              className="h-full max-h-[350px] w-full object-cover object-top"
                            />
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
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
            Unsolicited feedback from the head coaches I&rsquo;ve worked
            alongside.
          </p>
          {testimonials
            .filter((t) => t.scope === "coach")
            .map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section className="relative h-[300px] w-full overflow-hidden">
        <Image
          src="/images/group2.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 20%" }}
        />
        <div aria-hidden className="absolute inset-0 bg-charcoal/50" />
      </section>

      {/* OSFL LIVE TRACKER */}
      <section className="w-full bg-surface py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-gold-muted">
            2026 SEASON TRACKER
          </p>

          <div className="overflow-hidden rounded-xl bg-charcoal">
            {games.length === 0 ? (
              <p className="py-12 text-center italic text-ivory-muted">
                Season in progress. Results will appear here as games are played.
              </p>
            ) : (
              <table className="w-full text-base">
                <thead className="bg-surface-light">
                  <tr className="text-left text-xs uppercase tracking-widest text-ivory-muted">
                    <th className="px-6 py-4">Opponent</th>
                    <th className="px-6 py-4">Result</th>
                    <th className="px-6 py-4">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {games.map((game, idx) => (
                    <tr
                      key={`${game.opponent}-${idx}`}
                      className="border-b border-surface-light last:border-0"
                    >
                      <td className="px-6 py-4 text-ivory">{game.opponent}</td>
                      <td
                        className={`px-6 py-4 font-semibold ${
                          game.result === "W"
                            ? "text-green-500"
                            : game.result === "L"
                              ? "text-red-400"
                              : "text-ivory-muted"
                        }`}
                      >
                        {game.result}
                      </td>
                      <td className="px-6 py-4 text-ivory-muted">
                        {game.score}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>

      {/* SCOUTING APP CASE STUDY */}
      <section className="w-full bg-charcoal py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-gold-muted">
            CASE STUDY
          </p>
          <h2 className="mb-4 font-[Syne] text-3xl font-bold text-ivory">
            From Spreadsheets to Searchable Scouting: Building a Defensive
            Game-Planning Tool
          </h2>
          <p className="mb-8 text-base leading-relaxed text-ivory-muted">
            Game film review across multiple opponents required hours of manual
            tracking in spreadsheets that could not scale. I built a full-stack
            scouting application that turned raw film data into searchable,
            filterable defensive game plans.
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            {scoutingCaseStudy.map((block) => (
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
        </div>
      </section>

      {/* FOOTBALL GLOSSARY */}
      <section className="w-full bg-surface py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold-muted">
            FOOTBALL TERMINOLOGY
          </p>
          <p className="mb-6 text-base text-ivory-muted">
            Hover over any term to learn more.
          </p>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {footballGlossary.map((item) => (
              <GlossaryPill
                key={item.term}
                term={item.term}
                definition={item.definition}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
