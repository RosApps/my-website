"use client";

import Link from "next/link";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

type ContactState = "idle" | "loading" | "success" | "error";

function ContactForm() {
  const [state, setState] = useState<ContactState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    try {
      const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      if (!formId) throw new Error("Formspree ID not configured");

      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _replyto: form.email,
          _subject: `Site Contact: ${form.name}`,
        }),
      });

      if (res.ok) {
        setState("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  const inputClass =
    "w-full mb-3 bg-surface border border-surface-light rounded-lg px-4 py-3 text-ivory placeholder:text-ivory-muted/50 focus:border-gold focus:outline-none transition";

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        required
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
        className={inputClass}
      />
      <input
        type="email"
        required
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        className={inputClass}
      />
      <textarea
        required
        rows={4}
        placeholder="Message"
        value={form.message}
        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
        className={inputClass}
      />
      <button
        type="submit"
        disabled={state === "loading"}
        className="bg-gold text-charcoal font-semibold px-6 py-3 rounded-lg hover:bg-gold-light transition w-full"
      >
        {state === "loading"
          ? "Sending..."
          : state === "success"
            ? "Thank you"
            : "Send Message"}
      </button>
      {state === "error" && (
        <p className="mt-3 text-xs text-ivory-muted">
          Something went wrong. Please email directly.
        </p>
      )}
    </form>
  );
}

export function Footer() {
  return (
    <footer className="w-full border-t border-surface-light bg-charcoal py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <h4 className="mb-1 text-lg font-semibold text-ivory">Feedback & Get in Touch</h4>
            <p className="text-ivory-muted text-xs mb-4">Your feedback helps me grow. As a coach, I know its value.</p>
            <ContactForm />
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-ivory">Explore</h4>
            <Link
              href="/professional"
              className="mb-2 block text-ivory-muted transition hover:text-gold"
            >
              Professional
            </Link>
            <Link
              href="/student"
              className="mb-2 block text-ivory-muted transition hover:text-gold"
            >
              Student
            </Link>
            <Link
              href="/coach"
              className="mb-2 block text-ivory-muted transition hover:text-gold"
            >
              Coach
            </Link>
            <Link
              href="/#resume"
              className="mb-2 block text-gold transition hover:text-gold-light"
            >
              Request Resume
            </Link>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-ivory">Connect</h4>
            <a
              href="mailto:ronakpanch66@gmail.com"
              className="mb-2 block text-ivory-muted transition hover:text-gold"
            >
              ronakpanch66@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/ronakpanchmatia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ivory-muted transition hover:text-gold"
            >
              LinkedIn
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-surface-light pt-6 text-center text-xs text-ivory-muted/50">
          Ronak Panchmatia © 2026
        </div>
      </div>
    </footer>
  );
}
