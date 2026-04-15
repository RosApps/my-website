"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Briefcase, GraduationCap, Trophy, FileText } from "lucide-react";
import { ResumeModal } from "@/components/layout/ResumeModal";
import { cn } from "@/lib/utils";

const desktopLinks = [
  { href: "/professional", label: "Professional" },
  { href: "/student", label: "Student" },
  { href: "/coach", label: "Coach" },
];

const mobileTabs = [
  { href: "/professional", label: "Professional", icon: Briefcase },
  { href: "/student", label: "Student", icon: GraduationCap },
  { href: "/coach", label: "Coach", icon: Trophy },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Desktop + mobile top bar */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b border-surface-light transition-colors duration-300",
          scrolled
            ? "bg-charcoal/95 backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Desktop wordmark */}
          <Link
            href="/"
            className="hidden md:block font-[family:var(--font-display)] text-sm uppercase tracking-[0.2em] text-ivory"
          >
            RONAK PANCHMATIA
          </Link>

          {/* Mobile monogram */}
          <Link
            href="/"
            className="md:hidden font-[family:var(--font-display)] text-sm uppercase tracking-[0.2em] text-gold"
          >
            RP
          </Link>

          {/* Desktop right */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            {desktopLinks.map((link) => {
              const active = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-gold",
                    active ? "text-gold" : "text-ivory-muted",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="border border-gold text-gold px-5 py-2 rounded text-base font-semibold hover:bg-gold hover:text-charcoal transition-colors"
            >
              Request Resume
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile bottom tab bar */}
      <nav
        className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-charcoal border-t border-surface-light pb-6"
        aria-label="Mobile"
      >
        <div className="flex items-stretch justify-around">
          {mobileTabs.map((tab) => {
            const active = pathname.startsWith(tab.href);
            const Icon = tab.icon;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                className={cn(
                  "flex flex-1 flex-col items-center justify-center gap-1 py-2 transition-colors",
                  active ? "text-gold" : "text-ivory-muted",
                )}
              >
                <Icon className="size-5" />
                <span className="text-xs">{tab.label}</span>
              </Link>
            );
          })}
          <button
            type="button"
            onClick={() => setResumeOpen(true)}
            className="flex flex-1 flex-col items-center justify-center gap-1 py-2 text-ivory-muted hover:text-gold transition-colors"
          >
            <FileText className="size-5" />
            <span className="text-xs">Resume</span>
          </button>
        </div>
      </nav>

      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
