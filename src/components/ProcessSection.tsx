"use client";

import React from "react";
import { Check, Clock, ArrowRight } from "lucide-react";

interface ProcessSectionProps {
  onOpenAuditModal: () => void;
}

export default function ProcessSection({ onOpenAuditModal }: ProcessSectionProps) {
  const steps = [
    {
      number: "01",
      title: "14-Day Diagnostic Readiness Audit",
      duration: "Days 1–14",
      summary:
        "Fixed-fee on-site review mapping manual bottlenecks, existing software stacks (Lightspeed, Square, Xero), and high-ROI automation targets.",
      deliverables: [
        "In-person venue walk-through and manager interviews in WA",
        "Full review of POS till, accounting, and staff roster setups",
        "Heat-map of weekly admin hours lost to paperwork",
        "Clear Executive Automation Roadmap with guaranteed ROI",
        "WA State Grant (LCF) 50% co-funding application assistance",
      ],
    },
    {
      number: "02",
      title: "Embedded Pipeline Deployment",
      duration: "Weeks 3–6",
      summary:
        "Rapid custom integration connecting APIs, webhooks, and prompt agents into your daily tools.",
      deliverables: [
        "Quiet connection into your existing Lightspeed, Square, and Xero accounts",
        "Trained on your specific WA food, liquor, and produce supplier formats",
        "Simple 1-tap phone review approvals configured for venue managers",
        "Thorough historic simulation testing before go-live",
        "Short, friendly manager walk-through—no complex staff training",
      ],
    },
    {
      number: "03",
      title: "Managed Retainer & Slack Connect",
      duration: "Ongoing",
      summary:
        "Direct, real-time developer access via Slack Connect, continuous model tuning, and proactive uptime monitoring.",
      deliverables: [
        "Direct mobile & Slack Connect channel with your dedicated solo engineer",
        "Fast response during busy weekend and dinner shifts",
        "Continuous adjustments as menus, suppliers, and rosters evolve",
        "Monthly executive review of saved hours and protected wage dollars",
        "24/7 background uptime monitoring for zero maintenance drag",
      ],
    },
  ];

  return (
    <section id="process" className="relative py-20 md:py-28 bg-white border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0096A3] block mb-2">
            Engagement Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            The 3-Step Go-To-Market Process.
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            No open-ended consulting hours or vague milestones. Every step has fixed deliverables, defined security parameters, and quantifiable margin impact.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl bg-white border border-zinc-200/90 p-8 shadow-xs hover:border-zinc-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-zinc-950 font-sans">
                    {step.number}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 text-xs font-semibold text-zinc-700">
                    <Clock className="w-3.5 h-3.5 text-zinc-500" />
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-950 mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-normal">
                  {step.summary}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-zinc-100">
                  <span className="text-xs uppercase text-zinc-900 font-bold tracking-wider block mb-2">
                    Key Deliverables:
                  </span>
                  {step.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-zinc-700">
                      <Check className="w-3.5 h-3.5 text-[#0096A3] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button
            type="button"
            onClick={onOpenAuditModal}
            className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-all shadow-sm group"
          >
            <span>Book Your 14-Day Diagnostic Audit</span>
            <ArrowRight className="w-4 h-4 ml-2 text-[#00BFCC] transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
}
