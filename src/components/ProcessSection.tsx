"use client";

import React, { useState } from "react";
import { Search, GitPullRequest, Headphones, Check, Clock, Calendar, ArrowRight, ShieldCheck, Terminal, FileCode } from "lucide-react";

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
      title: "Managed Retainer & Slack Connect",
      duration: "Ongoing Partnership",
      icon: Headphones,
      summary:
        "Direct, real-time developer access via Slack Connect, continuous model tuning, and proactive uptime monitoring.",
      deliverables: [
        "Direct Slack Connect channel with dedicated Perth-based automation engineers",
        "Sub-15 minute developer response SLA during high-volume shift windows",
        "Continuous prompt and schema adjustments as POS or menus evolve",
        "Monthly executive review of hours saved, margin shifts, and recovered dollars",
        "Proactive 24/7 uptime and webhook heartbeat monitoring",
      ],
      deliverableTag: "Deliverable: Zero Maintenance Burden on Venue Management",
    },
  ];

  return (
    <section id="process" className="relative py-20 md:py-32 bg-[#0B0F19] border-b border-[#232F48]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#151D2F] border border-[#232F48] text-xs font-mono text-[#00F2FE] mb-3">
            <span>ENGAGEMENT METHODOLOGY // 3-STEP ROADMAP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] tracking-tight">
            From Audit to Autonomous Guardrails in 3 Structured Steps.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            No open-ended consulting hours or vague milestones. Every step has fixed deliverables, defined security parameters, and quantifiable margin impact.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line across cards for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#232F48] to-transparent -translate-y-12 pointer-events-none" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isHovered = selectedStep === index;

            return (
              <div
                key={step.number}
                onMouseEnter={() => setSelectedStep(index)}
                className={`relative rounded-xl bg-[#151D2F] border p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? "border-[#00F2FE] shadow-[0_0_25px_rgba(0,242,254,0.18)] -translate-y-1"
                    : "border-[#232F48] hover:border-slate-500"
                }`}
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-black font-mono text-[#00F2FE]">
                      {step.number}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0B0F19] text-xs font-mono text-[#94A3B8] border border-[#232F48]">
                      <Clock className="w-3.5 h-3.5 text-[#00F2FE]" />
                      {step.duration}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#0B0F19] border border-[#232F48] text-[#00F2FE] w-fit mb-4">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#FFFFFF] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#94A3B8] leading-relaxed mb-6 font-normal">
                    {step.summary}
                  </p>

                  {/* Deliverables Bullet List */}
                  <div className="space-y-2.5 pt-2 border-t border-[#232F48]">
                    <span className="text-xs font-mono uppercase text-[#00F2FE] tracking-wider font-semibold block mb-2">
                      Key Activities:
                    </span>
                    {step.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-[#F8FAFC]">
                        <Check className="w-3.5 h-3.5 text-[#00F2FE] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Bottom Tag */}
                <div className="mt-8 pt-4 border-t border-[#232F48] text-xs font-mono text-cyan-300 flex items-center justify-between">
                  <span>{step.deliverableTag}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA banner below steps */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onOpenAuditModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold font-mono rounded-md bg-[#00F2FE] text-[#04101A] hover:brightness-110 shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all cursor-pointer"
          >
            <span>Book Your 14-Day Diagnostic Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
