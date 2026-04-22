"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import type { TimelineItem } from "@/data/timelineData";

type TimelineProps = {
  data: TimelineItem[];
};

export function Timeline({ data }: TimelineProps) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute left-1.5 top-0 bottom-0 w-0.5 bg-gold-muted/30"
      />
      <div className="space-y-10">
        {data.map((item) => {
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
                    <span className="text-base text-ivory-muted">{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
