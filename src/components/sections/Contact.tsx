// Contact.tsx - contact section with availability pills and LinkedIn CTA.
// v5: No PDF download. Consumes /data/siteConfig.ts and /data/availability.ts.

import { person, sections } from "@/data/siteConfig";
import { availability } from "@/data/availability";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 border-t border-white/[0.06]">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <div className="card-base bg-card/90 px-8 py-14 text-center">
          <p className="badge-label text-xs uppercase tracking-[0.28em] text-blue-300">
            {sections.contact.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {sections.contact.title}
          </h2>

          {availability.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              {availability.map((slot) => (
                <span
                  key={slot}
                  className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-blue-300"
                >
                  <span className="size-1.5 rounded-full bg-blue-400" aria-hidden />
                  {slot}
                </span>
              ))}
            </div>
          )}

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="accent-glow inline-flex h-12 items-center justify-center rounded-full border border-blue-500/50 bg-blue-500 px-6 text-sm font-medium text-white transition hover:bg-blue-400"
            >
              {sections.contact.linkedinLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
