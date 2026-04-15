import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { bento } from "@/data/bentoCards";

export const metadata: Metadata = {
  title: "Consulting & Strategy Skills",
};

export default function ConsultingSkillsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/professional"
        className="mb-8 inline-flex items-center gap-2 font-mono text-[0.63rem] uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-300"
      >
        <ArrowLeft className="size-3.5" />
        Back to Professional
      </Link>

      <p className="font-mono text-[0.63rem] uppercase tracking-[0.28em] text-violet-300">
        Consulting & Strategy
      </p>
      <h1 className="mt-3 text-3xl font-bold text-white sm:text-5xl">
        Live engagements, real clients.
      </h1>
      <p className="mt-4 text-base leading-8 text-slate-400 max-w-2xl">
        Operations transformation, healthcare domain knowledge, banking technology, and stakeholder management; every item backed by a real engagement.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {bento.consulting.map((item) => (
          <div key={item.id} className="card-base bg-card/80 p-6">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-violet-300">
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
