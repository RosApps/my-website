// FeedbackForm.tsx - "Help Me Get Better" feedback form section.
// POSTs to Formspree (NEXT_PUBLIC_FORMSPREE_ID). Success state on 200 only.

"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type FormState = "idle" | "loading" | "success" | "error";

export function FeedbackForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", feedback: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");

    try {
      const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      if (!formId) throw new Error("Formspree ID not configured");

      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          feedback: form.feedback,
          _replyto: form.email,
          _subject: `Site Feedback: ${form.name}`,
        }),
      });

      if (res.ok) {
        setState("success");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <Card className="border-white/[0.08] bg-card/80">
        <CardContent className="flex flex-col items-center gap-4 py-12 text-center">
          <CheckCircle className="size-10 text-blue-400" />
          <h3 className="text-lg font-bold text-white">Thank you</h3>
          <p className="max-w-sm text-sm leading-6 text-slate-400">
            Your feedback has been received. I genuinely appreciate you taking the time.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setState("idle");
              setForm({ name: "", email: "", feedback: "" });
            }}
          >
            Submit another
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-white/[0.08] bg-card/80">
      <CardHeader className="pb-2">
        <p className="font-mono text-[0.63rem] uppercase tracking-[0.28em] text-blue-300">
          Feedback
        </p>
        <CardTitle className="mt-1 text-2xl font-bold text-white">
          Help Me Get Better
        </CardTitle>
        <CardDescription className="mt-2 max-w-xl text-sm leading-7 text-slate-400">
          Coaching taught me that growth comes from honest feedback. If you have worked with me,
          watched me present, or read my work, I would value your input.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="mt-2 space-y-4 max-w-lg">
          <div className="space-y-1.5">
            <Label htmlFor="fb-name">Full Name</Label>
            <Input
              id="fb-name"
              required
              placeholder="Jane Smith"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="fb-email">Email Address</Label>
            <Input
              id="fb-email"
              type="email"
              required
              placeholder="jane@company.com"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="fb-feedback">Feedback</Label>
            <Textarea
              id="fb-feedback"
              required
              placeholder="What went well? What could be sharper? Anything helps."
              rows={5}
              value={form.feedback}
              onChange={(e) => setForm((f) => ({ ...f, feedback: e.target.value }))}
            />
          </div>

          {state === "error" && (
            <p className="text-sm text-red-400">
              Something went wrong. Please email directly at{" "}
              <a
                href="mailto:ronakpanch66@gmail.com"
                className="underline underline-offset-2"
              >
                ronakpanch66@gmail.com
              </a>
              .
            </p>
          )}

          <Button
            type="submit"
            disabled={state === "loading"}
            className="accent-glow rounded-full border-blue-500/50 bg-blue-500 px-6 text-white hover:bg-blue-400"
          >
            {state === "loading" ? "Sending…" : "Send Feedback"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
