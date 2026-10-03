"use client";

import React from "react";
import { Search, Wrench, PhoneCall, Check, Clock, ArrowRight } from "lucide-react";

interface ProcessSectionProps {
  onOpenAuditModal: () => void;
}

export default function ProcessSection({ onOpenAuditModal }: ProcessSectionProps) {
  const steps = [
    {
      number: "01",
      title: "14-Day Diagnostic Readiness Audit",
      subtitle: "On-site review of your manual bottlenecks",
      duration: "Days 1–14",
      icon: Search,
      summary:
        "Fixed-fee on-site review mapping manual bottlenecks, existing software stacks (Lightspeed, Square, Xero), and high-ROI automation targets.",
      plainSummary:
        "We visit your venue, walk your floor, and look at how invoices, rosters, and bookings currently get handled. We calculate your exact hours lost and show you a plain-English roadmap with guaranteed ROI.",
      deliverables: [
        "In-person visit to your Perth / WA venue or hotel",
        "Full review of your till (Lightspeed / Square) and books (Xero / MYOB)",
        "Calculation of hours lost every week to manual paperwork",
        "Prioritized list of automations that save money immediately",
        "WA Government 50% grant application assistance included",
      ],
      deliverableTag: "Outcome: Clear Action Plan & Grant Paperwork Ready",
    },
    {
      number: "02",
      title: "Embedded Pipeline Deployment",
      subtitle: "Done-for-you connection into your daily tools",
      duration: "Weeks 3–6",
      icon: Wrench,
      summary:
        "Rapid custom integration connecting APIs, webhooks, and prompt agents into your daily tools.",
      plainSummary:
        "We connect everything quietly behind the scenes. Your staff don't have to learn new complicated software—invoices simply flow into Xero, and rosters match your busy times automatically.",
      deliverables: [
        "Direct connection to your existing Lightspeed, Square, and Xero accounts",
        "Trained on your specific WA meat, seafood, produce, and wine supplier dockets",
        "Simple 1-tap phone approval buttons set up for your managers",
        "Tested thoroughly with your past records before going live",
        "Short, friendly briefing for your floor and kitchen managers",
      ],
      deliverableTag: "Outcome: Live Automation With 1-Tap Manager Approvals",
    },
    {
      number: "03",
      title: "Managed Retainer & Slack Connect",
      subtitle: "Direct access to your dedicated automation partner",
      duration: "Ongoing Partnership",
      icon: PhoneCall,
      summary:
        "Direct, real-time developer access via Slack Connect, continuous model tuning, and proactive uptime monitoring.",
      plainSummary:
        "You get my direct phone number and a private Slack channel. If your menu changes, suppliers update their docket formats, or you need adjustments before a big public holiday, I take care of it immediately.",
      deliverables: [
        "Direct mobile & Slack access to your solo automation engineer",
        "Fast response during busy weekend and dinner shifts",
        "Continuous adjustments as menus, suppliers, and rosters evolve",
        "Monthly summary of hours saved and wage dollars protected",
        "24/7 background monitoring so everything runs seamlessly",
      ],
      deliverableTag: "Outcome: Total Peace of Mind & Zero Maintenance Work for You",
    },
  ];

  return (
    <section id="process" className="relative py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 mb-3">
            <span>HOW WE WORK WITH YOU</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            From First Chat to Running Smoothly in 3 Simple Steps.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            No confusing IT jargon, no unexpected hourly bills. Every step has clear deliverables, fixed pricing, and immediate returns for your venue.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 transition-all duration-200 hover:border-slate-400 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-3xl sm:text-4xl font-black text-slate-900 font-sans">
                      {step.number}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold text-slate-700">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      {step.duration}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-100 text-slate-900 w-fit mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {step.plainSummary}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <span className="text-xs uppercase text-slate-900 font-bold tracking-wider block mb-2">
                      What's Included:
                    </span>
                    {step.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-[#0096A3] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-700">
                  {step.deliverableTag}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onOpenAuditModal}
            className="inline-flex items-center gap-2 px-6 py-4 text-sm font-bold rounded-lg bg-[#0F172A] text-white hover:bg-slate-800 transition-all shadow-sm cursor-pointer"
          >
            <span>Book a 14-Day Review for Your Venue</span>
            <ArrowRight className="w-4 h-4 text-[#00BFCC]" />
          </button>
        </div>

      </div>
    </section>
  );
}
