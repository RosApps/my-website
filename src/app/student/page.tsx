"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { fadeUp, pageTransition, staggerContainer } from "@/lib/animations";
import { Footer } from "@/components/Footer";
import { Timeline } from "@/components/Timeline";
import { Card, CardContent } from "@/components/ui/card";
import { studentTimelineData } from "@/data/studentTimelineData";

const whyMBA = [
  {
    title: "My Father's Unfinished Degree",
    body: "My family immigrated from Uganda escaping Idi Amin. My father started an MBA but tuition ran out before he could complete the degree. Finishing what he started is personal.",
  },
  {
    title: "A Dual Lens",
    body: "When I accepted my Health Sciences offer, I already knew the MBA was next. I wanted to see the world through both a health and a business lens in combination. Five years of operational experience confirmed the path.",
  },
  {
    title: "Generalist by Design",
    body: "Healthcare, banking technology (incoming EY co-op), supply chain, and sports. Four genuine affinities developed through real experience, not classroom interest. The MBA is the framework to apply them all.",
  },
];

const academics = [
  {
    school: "Western University",
    degree: "Bachelor of Health Sciences (BHSc), Honours",
    detail:
      "Foundation in healthcare science, research methodology, and regulatory compliance. PHIPA, PIPEDA, and Health Canada frameworks.",
  },
  {
    school: "McMaster University",
    degree: "Master of Business Administration (Co-op)",
    detail:
      "DeGroote School of Business. Three co-op rotations. Expected December 2027.",
  },
];

type MiddleInterest = {
  title: string;
  body?: string;
  subhead?: string;
  bullets?: string[];
  icon?: typeof Award;
};

const middleInterests: MiddleInterest[] = [
  {
    title: "Duke of Edinburgh's Award, Silver",
    body: "Royal-patronage international youth award earned by completing twelve-month concurrent commitments across volunteering, skill development, and physical recreation, capped by a multi-day wilderness expedition. Recognised in 130+ countries as a credential for self-direction and sustained execution.",
  },
  {
    title: "Golf & ClubLink",
    body: "ClubLink Premium Advantage Member with access across the network. Golf is the default off-season reset, and the course is where some of the best conversations happen.",
  },
  {
    title: "Psychology & Reading",
    body: "Avid reader of behavioural science and business strategy. Traction by Gino Wickman and David and Goliath by Malcolm Gladwell are two that reshaped how I think about systems and underdogs.",
  },
  {
    title: "Languages",
    body: "Fluent in English and conversational in Gujarati. Growing up in a bilingual household shaped how I listen before I speak and taught me to communicate across cultures.",
  },
];

export default function StudentPage() {
  return (
    <motion.main
      key="student"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="overflow-x-hidden"
    >
      {/* HERO */}
      <section className="relative flex min-h-[60vh] w-full items-center overflow-hidden">
        <Image
          src="/images/mbagroup.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div aria-hidden className="absolute inset-0 bg-charcoal/60" />

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
                  src="/images/HeadshotRo.png"
                  alt="Ronak Panchmatia"
                  fill
                  priority
                  sizes="200px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div>
              <h1 className="font-[Syne] text-4xl font-bold text-ivory">
                Ronak Panchmatia
              </h1>
              <p className="mt-2 text-lg text-ivory-muted">
                BHSc Honours | MBA Candidate (Co-op)
              </p>
              <p className="mt-1 text-base text-gold">
                DeGroote School of Business, McMaster University
              </p>
              <p className="mt-1 text-base text-ivory-muted">
                Expected December 2027
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY THE MBA */}
      <section className="w-full bg-surface py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-gold-muted">
            WHY THE MBA
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {whyMBA.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="rounded-xl border border-surface-light bg-charcoal p-6"
              >
                <h3 className="mb-3 text-lg font-semibold text-ivory">
                  {card.title}
                </h3>
                <p className="text-base leading-relaxed text-ivory-muted">
                  {card.body}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY DEGROOTE */}
      <section className="w-full bg-charcoal py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-gold-muted">
            WHY DEGROOTE
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2 className="mb-4 font-[Syne] text-2xl font-bold text-ivory">
                The Right Programme
              </h2>
              <p className="mb-4 text-base leading-relaxed text-ivory-muted">
                When Ryan Shoot gave me the tour of campus, it felt like home. I
                felt like I stepped into the perfect place at the perfect time.
              </p>
              <p className="text-base leading-relaxed text-ivory-muted">
                The Ron Joyce Centre in Burlington put the programme minutes
                from Toronto&apos;s financial core while embedding students in
                the Hamilton-Burlington business community.
              </p>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative h-full min-h-[240px] overflow-hidden rounded-xl"
            >
              <Image
                src="/images/grad.jpeg"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                style={{ objectPosition: "center 50%" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ACADEMIC BACKGROUND */}
      <section className="w-full bg-surface py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-gold-muted">
            ACADEMIC BACKGROUND
          </p>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2"
          >
            {academics.map((a) => (
              <motion.div
                key={a.school}
                variants={fadeUp}
                className="rounded-xl border border-surface-light bg-charcoal p-6"
              >
                <h3 className="text-lg font-semibold text-ivory">{a.school}</h3>
                <p className="mt-1 text-base text-gold">{a.degree}</p>
                <p className="mt-3 text-base leading-relaxed text-ivory-muted">
                  {a.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EXTRACURRICULAR & LEADERSHIP JOURNEY */}
      <section className="w-full bg-charcoal py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-gold-muted">
            EXTRACURRICULAR & LEADERSHIP JOURNEY
          </p>
          <Card
            size="sm"
            className="mb-8 border border-gold-muted/30 bg-surface ring-0"
          >
            <CardContent>
              <p className="text-base italic leading-relaxed text-ivory-muted">
                Throughout these years, Ronak has been coaching competitively.
                Now in his 11th season at the AAA level, the full coaching
                journey lives{" "}
                <Link
                  href="/coach"
                  className="text-gold underline underline-offset-2 hover:text-gold-muted"
                >
                  here
                </Link>
                .
              </p>
            </CardContent>
          </Card>
          <Timeline data={studentTimelineData} />
        </div>
      </section>

      {/* BEYOND THE CLASSROOM */}
      <section className="w-full bg-charcoal py-12">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-gold-muted">
            BEYOND THE CLASSROOM
          </p>
          <div className="flex flex-col gap-6">
            {/* Row 1: Photo cards at 50/50 */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Toronto Sports Fan */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/bluejays.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="absolute inset-0 object-cover"
                  style={{ objectPosition: "center center" }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent p-6">
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    Toronto Sports Fan
                  </h3>
                  <p className="text-sm text-white/90">
                    Lifelong Blue Jays and Raptors loyalty passed down from my
                    father. This is my brother and me at World Series Game 1 in
                    2025. The allegiance predates any championship window and
                    outlasts every rebuild.
                  </p>
                </div>
              </div>

              {/* Green Bay Packers */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/images/packers.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="absolute inset-0 object-cover"
                  style={{ objectPosition: "center center" }}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent p-6">
                  <h3 className="mb-2 text-2xl font-bold text-white">
                    Green Bay Packers
                  </h3>
                  <p className="text-sm text-white/90">
                    A Packers fan since age four. Not a bandwagon, a birthright.
                    The kind of loyalty that survives cold January nights at
                    Lambeau and defines how I approach commitment.
                  </p>
                </div>
              </div>
            </div>

            {/* Row 2: Four text cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {middleInterests.map((item) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.title}
                    size="sm"
                    className="border border-surface-light bg-surface ring-0"
                  >
                    <CardContent>
                      <div className="flex items-start gap-2">
                        {Icon && (
                          <Icon className="mt-1 size-5 shrink-0 text-gold" />
                        )}
                        <h3 className="text-lg font-semibold text-ivory">
                          {item.title}
                        </h3>
                      </div>
                      {item.subhead && (
                        <p className="mt-2 text-base text-gold">
                          {item.subhead}
                        </p>
                      )}
                      {item.body && (
                        <p className="mt-2 text-base leading-relaxed text-ivory-muted">
                          {item.body}
                        </p>
                      )}
                      {item.bullets && (
                        <ul className="mt-2 list-none space-y-1">
                          {item.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-gold">•</span>
                              <span className="text-base leading-relaxed text-ivory-muted">
                                {b}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.main>
  );
}
