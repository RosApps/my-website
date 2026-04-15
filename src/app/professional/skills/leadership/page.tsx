import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { bento } from "@/data/bentoCards";

export const metadata: Metadata = {
  title: "Leadership & Communication Skills",
};

export default function LeadershipSkillsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/professional"
        className="mb-8 inline-flex items-center gap-2 font-mono text-[0.63rem] uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-300"
      >
        <ArrowLeft className="size-3.5" />
        Back to Professional
      </Link>

      <p className="font-mono text-[0.63rem] uppercase tracking-[0.28em] text-amber-300">
        Leadership & Communication
      </p>
      <h1 className="mt-3 text-3xl font-bold text-white sm:text-5xl">
        Eleven seasons of sustained people development.
      </h1>
      <p className="mt-4 text-base leading-8 text-slate-400 max-w-2xl">
        From pre-game briefings to boardroom presentations, translating complexity into action,
        and developing people in high-pressure environments.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {bento.leadership.map((item) => (
          <div key={item.id} className="card-base bg-card/80 p-6">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-amber-300">
              {item.tag}
            </p>
            <h3 className="mt-3 text-xl font-bold text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.blurb}</p>
            <p className="mt-3 text-xs italic leading-5 text-slate-500">{item.proof}</p>
            <p className="mt-4 text-sm leading-7 text-slate-400">{item.detail}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
