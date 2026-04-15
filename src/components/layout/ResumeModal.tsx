// ResumeModal.tsx - resume request form modal. Fields: Full Name, Email, Company.
// v5: No PDF download. Form submission POSTs to Formspree and only shows success on 200.
// Requires: NEXT_PUBLIC_FORMSPREE_ID env var set to the Formspree form ID.
// Consumes: no data file (self-contained form).

"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onClose: () => void;
};

type FormState = "idle" | "loading" | "success" | "error";

export function ResumeModal({ open, onClose }: Props) {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", company: "" });

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
          company: form.company,
          _replyto: form.email,
          _subject: `Resume Request: ${form.name}, ${form.company}`,
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

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setState("idle");
      setForm({ name: "", email: "", company: "" });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={(v: boolean) => { if (!v) handleClose(); }}>
      <DialogContent className="border-white/[0.08] bg-[#0d1120]/98 shadow-[0_0_40px_rgba(59,130,246,0.15)] max-w-md">
        {state === "success" ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <CheckCircle className="size-12 text-blue-400" />
            <h3 className="text-xl font-bold text-white">Request sent</h3>
            <p className="text-sm leading-6 text-slate-400">
              Your request has been sent. Ronak will follow up directly. If you need
              to reach him immediately, email{" "}
              <a
                href="mailto:ronakpanch66@gmail.com"
                className="text-blue-300 underline underline-offset-2"
              >
                ronakpanch66@gmail.com
              </a>
              .
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-2 rounded-full border border-white/[0.12] bg-white/[0.04] px-5 py-2 text-sm text-white transition hover:bg-white/[0.08]"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-white">
                Request Resume
              </DialogTitle>
              <DialogDescription className="text-sm text-slate-400">
                Fill in your details and Ronak will follow up directly.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="resume-name">Full Name</Label>
                <Input
                  id="resume-name"
                  required
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="resume-email">Email</Label>
                <Input
                  id="resume-email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="resume-company">Company</Label>
                <Input
                  id="resume-company"
                  required
                  placeholder="Accenture, KPMG, etc."
                  value={form.company}
                  onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                />
              </div>

              {state === "error" && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please email directly at ronakpanch66@gmail.com.
                </p>
              )}

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className={cn(
                    "flex-1 accent-glow rounded-full border border-blue-500/50 bg-blue-500 py-2.5 text-sm font-medium text-white transition hover:bg-blue-400 disabled:opacity-60",
                  )}
                >
                  {state === "loading" ? "Sending…" : "Send Request"}
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="rounded-full border border-white/[0.12] bg-white/[0.04] px-4 py-2.5 text-sm text-slate-300 transition hover:bg-white/[0.08]"
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
