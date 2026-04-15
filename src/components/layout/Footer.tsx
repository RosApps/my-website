// Footer.tsx - site footer with affiliation names and copyright.
// Consumes /data/siteConfig.ts and /data/affiliations.ts (affiliationNames export).

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { person, sections } from "@/data/siteConfig";
import { affiliationNames } from "@/data/affiliations";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-black/20">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {affiliationNames.map((name) => (
            <span
              key={name}
              className="inline-flex items-center rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 font-mono text-xs text-slate-500"
            >
              {name}
            </span>
          ))}
        </div>
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-4">
            {[
              { label: "Professional", href: "/professional" },
              { label: "Student", href: "/student" },
              { label: "Coach", href: "/coach" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base text-slate-500 transition hover:text-slate-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-base text-slate-500">{sections.footer.copyright}</p>
          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-base text-slate-400 transition hover:text-white"
          >
            <ExternalLink className="size-3.5" />
            {sections.footer.linkedinLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
