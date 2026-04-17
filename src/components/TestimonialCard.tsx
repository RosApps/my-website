"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const { quote, attribution, sourceUrl } = testimonial;

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="flex flex-col items-center"
    >
      <div className="relative w-full overflow-hidden rounded-xl border-l-4 border-gold bg-charcoal p-8 md:p-10">
        <span
          aria-hidden
          className="pointer-events-none absolute left-4 top-2 font-[Syne] text-[5rem] leading-none text-gold opacity-20"
        >
          &ldquo;
        </span>
        <p className="relative z-10 font-[Syne] text-[1.25rem] leading-[1.6] text-ivory">
          {quote}
        </p>
        <div className="my-6 h-px w-full bg-gold/40" />
        <div className="font-[DM_Sans]">
          <p className="font-bold text-ivory">{attribution.name}</p>
          <p className="text-ivory/70">
            {attribution.title}, {attribution.company}
          </p>
        </div>
      </div>

      <p className="mt-6 text-center font-[DM_Sans] text-base text-ivory-muted">
        See the original post on{" "}
        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold underline-offset-4 hover:underline"
        >
          LinkedIn
        </a>
      </p>
    </motion.div>
  );
}
