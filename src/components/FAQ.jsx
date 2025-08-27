import React from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  return (
    <section className="relative z-10 bg-[#0A0A11]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-semibold text-white tracking-tight">Questions, answered</h3>
          <p className="mt-2 text-zinc-400 text-sm">Everything you need to know about grading with AI.</p>
        </div>

        <div className="divide-y divide-white/5 rounded-2xl ring-1 ring-white/10 bg-white/5 backdrop-blur">
          <details className="group open:bg-white/5 p-5" open>
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="text-white text-sm sm:text-base font-medium">Is Assesium allowed under our assessment policy?</span>
              <span className="rounded-md bg-white/5 ring-1 ring-white/10 p-1.5 text-slate-300 group-open:rotate-180 transition">
                <ChevronDown className="h-3.5 w-3.5" />
              </span>
            </summary>
            <p className="mt-3 text-sm text-zinc-300">
              Yes. Assesium provides explainable scoring, human‑in‑the‑loop review, full audit logs, and release controls—aligned with common institutional policies.
            </p>
          </details>

          <details className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="text-white text-sm sm:text-base font-medium">How do you handle similarity and AI‑generated content?</span>
              <span className="rounded-md bg-white/5 ring-1 ring-white/10 p-1.5 text-slate-300 group-open:rotate-180 transition">
                <ChevronDown className="h-3.5 w-3.5" />
              </span>
            </summary>
            <p className="mt-3 text-sm text-zinc-300">
              We integrate with similarity and proctoring vendors, surface indicators in context, and never auto‑penalize—humans decide, with clear evidence trails.
            </p>
          </details>

          <details className="group p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="text-white text-sm sm:text-base font-medium">Can I export marks and feedback to my LMS?</span>
              <span className="rounded-md bg-white/5 ring-1 ring-white/10 p-1.5 text-slate-300 group-open:rotate-180 transition">
                <ChevronDown className="h-3.5 w-3.5" />
              </span>
            </summary>
            <p className="mt-3 text-sm text-zinc-300">
              Yes—Canvas, Moodle, Blackboard and more. Sync grades, comments, and rubrics, or export CSVs and PDFs for external systems.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

