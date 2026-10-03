"use client";

import React, { useState } from "react";
import { Search, GitPullRequest, Headphones, Check, Clock, ArrowRight } from "lucide-react";

interface ProcessSectionProps {
  onOpenAuditModal: () => void;
}

export default function ProcessSection({ onOpenAuditModal }: ProcessSectionProps) {
  const [selectedStep, setSelectedStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "14-Day Diagnostic Readiness Audit",
      duration: "Days 1–14",
      icon: Search,
      summary:
        "Fixed-fee on-site review mapping manual bottlenecks, existing software stacks (Lightspeed, Square, Xero), and high-ROI automation targets.",
      deliverables: [
        "On-site venue walk-through and manager interviews in Perth/WA",
        "Full API audit of POS, accounting, payroll, and reservation feeds",
        "P&L bottleneck heat-map calculating exact annual administrative drag",
        "Executive Automation Blueprint with prioritized ROI timeline",
        "WA State Grant (LCF) technical co-funding scoping documentation",
      ],
      deliverableTag: "Deliverable: Executive Roadmap & Grant Application Pack",
    },
    {
      number: "02",
      title: "Embedded Pipeline Deployment",
      duration: "Weeks 3–6",
      icon: GitPullRequest,
      summary:
        "Rapid custom integration connecting APIs, webhooks, and prompt agents into your daily tools.",
      deliverables: [
        "Direct webhook bridges between Lightspeed/Square and Xero/MYOB",
        "OCR calibration on specific WA supplier dockets and fresh produce formats",
        "Custom human review gate setup in Slack, email, or manager portal",
        "End-to-end sandbox testing with historic data before production cutover",
        "Staff onboarding and floor manager briefing session",
      ],
      deliverableTag: "Deliverable: Production Gateways with 99.8% Test Verification",
    },
    {
      number: "03",
      title: "Managed Retainer & Direct Slack Connect",
      duration: "Ongoing Partnership",
      icon: Headphones,
      summary:
        "Direct, real-time developer access via Slack Connect, continuous model tuning, and proactive uptime monitoring.",
      deliverables: [
        "Direct Slack Connect channel with dedicated solo automation engineer",
        "Sub-15 minute direct response SLA during high-volume shift windows",
        "Continuous prompt and schema adjustments as POS or menus evolve",
        "Monthly review of hours saved, margin shifts, and recovered dollars",
        "Proactive 24/7 uptime and webhook heartbeat monitoring",
      ],
      deliverableTag: "Deliverable: Zero Maintenance Burden on Venue Management",
    },
  ];

  return (
    <section id="process" className="relative py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800 mb-3">
            <span>ENGAGEMENT METHODOLOGY // 3-STEP ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            From Audit to Autonomous Guardrails in 3 Structured Steps.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            No open-ended consulting hours or vague milestones. Every step has fixed deliverables, defined security parameters, and quantifiable margin impact.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isHovered = selectedStep === index;

            return (
              <div
                key={step.number}
                onMouseEnter={() => setSelectedStep(index)}
                className={`relative rounded-xl bg-white border p-6 sm:p-8 transition-all duration-200 flex flex-col justify-between ${
                  isHovered
                    ? "border-slate-900 shadow-md"
                    : "border-slate-200 hover:border-slate-400"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl sm:text-4xl font-black font-mono text-slate-900">
                      {step.number}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 text-xs font-mono text-slate-700 border border-slate-200">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      {step.duration}
                    </span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-100 text-slate-900 w-fit mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {step.summary}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <span className="text-xs font-mono uppercase text-slate-900 tracking-wider font-semibold block mb-2">
                      Key Deliverables:
                    </span>
                    {step.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#0096A3] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-600">
                  {step.deliverableTag}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onOpenAuditModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold font-mono rounded-lg bg-[#0F172A] text-white hover:bg-slate-800 transition-all shadow-sm"
          >
            <span>Book Your 14-Day Diagnostic Audit</span>
            <ArrowRight className="w-4 h-4 text-[#00BFCC]" />
          </button>
        </div>

      </div>
    </section>
  );
}
