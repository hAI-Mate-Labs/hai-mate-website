"use client";

import React from "react";
import Link from "next/link";
import {
  Clock,
  Zap,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  FileText,
  ExternalLink,
} from "lucide-react";
import ApertureLogo from "./ApertureLogo";

interface UnifiedProcessTimelineProps {
  onOpenAuditModal: () => void;
  onOpenSampleAuditModal?: () => void;
}

export default function UnifiedProcessTimeline({
  onOpenAuditModal,
  onOpenSampleAuditModal,
}: UnifiedProcessTimelineProps) {
  const steps = [
    {
      step: "01",
      duration: "Days 1–14",
      tag: "Free Diagnostic Audit",
      title: "Zero-Disruption Paperwork & Till Audit",
      description:
        "Conducted during quiet morning prep hours before guests arrive. We observe your paperwork trail and map high-ROI automation targets.",
      icon: Clock,
      bullets: [
        "In-person venue walk-through and manager interviews in WA",
        "OCR line-item test on 20+ of your historical delivery dockets",
        "Read-only review of POS till (Lightspeed, Square) & Xero/MYOB codes",
        "Pre-filled WA Government 50% co-funding grant application package",
      ],
      deliverable: "Executive Automation Roadmap with Guaranteed ROI",
    },
    {
      step: "02",
      duration: "Weeks 3–5",
      tag: "Custom Conduit Build",
      title: "Off-Site Engineering & Supplier Tuning",
      description:
        "Built completely off-site by Mallory. Your live tills and accounting ledgers remain untouched until fully verified.",
      icon: Zap,
      bullets: [
        "Quiet connection to your existing Xero, Lightspeed, and Deputy accounts",
        "Trained on your specific WA food, liquor, and produce supplier price agreements",
        "Zero new apps for staff: simple phone photos and email PDF forwarding",
        "Rigorous historical simulation testing before live activation",
      ],
      deliverable: "Working Private Conduit & Contract Price Guard",
    },
    {
      step: "03",
      duration: "Ongoing",
      tag: "1-Tap Mobile Control",
      title: "Human-in-the-Loop Handover & Retainer",
      description:
        "No automated action runs unapproved. Managers review and green-light draft bills or roster trims with 1 tap on their phone.",
      icon: Smartphone,
      bullets: [
        "Direct mobile & WhatsApp line to Mallory during busy dinner shifts",
        "Draft bills staged in Xero ready for instant 1-tap review",
        "Continuous adjustments as menus, suppliers, and rosters change",
        "Monthly executive review of saved admin hours and protected wage dollars",
      ],
      deliverable: "Direct Solo Engineer Retainer & Zero Maintenance Drag",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 md:py-28 bg-white border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-semibold text-zinc-800 mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#00BFCC]" />
            <span>PROVEN 3-STEP METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            From Back-Office Chaos to 1-Tap Control in 14 Days.
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            Zero disruption to your floor staff or kitchen prep. Everything is mapped and built in the background, tailored specifically to your venue.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="rounded-3xl bg-white border border-zinc-200/90 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-300 transition-all shadow-xs relative group"
              >
                {/* Step pill & duration */}
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-2xl font-black text-[#0F172A] tracking-tight">
                      {s.step}
                    </span>
                    <span className="text-[11px] font-bold text-[#0096A3] bg-[#00BFCC]/10 px-2.5 py-0.5 rounded-full">
                      {s.tag}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-full">
                    {s.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-zinc-50 border border-zinc-200/80 text-zinc-900 group-hover:text-[#0096A3] group-hover:border-[#00BFCC]/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A] leading-snug">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {s.description}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-zinc-100">
                    {s.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0096A3] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverable badge */}
                <div className="mt-6 pt-4 border-t border-zinc-100 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
                    Key Deliverable
                  </span>
                  <div className="text-xs font-semibold text-zinc-900 bg-zinc-50 p-2.5 rounded-xl border border-zinc-100">
                    {s.deliverable}
                  </div>
                  {s.step === "01" && onOpenSampleAuditModal && (
                    <button
                      type="button"
                      onClick={onOpenSampleAuditModal}
                      className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#0096A3] hover:text-[#00818c] bg-[#00BFCC]/10 hover:bg-[#00BFCC]/20 py-2 rounded-xl transition-colors cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Inspect Sample Report Teardown →</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Sample Teardown Trigger Banner */}
        {onOpenSampleAuditModal && (
          <div className="flex items-center justify-center mb-12">
            <button
              type="button"
              onClick={onOpenSampleAuditModal}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white border border-zinc-200 text-zinc-900 text-xs sm:text-sm font-bold hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-xs group cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#0096A3]" />
              <span>Inspect Sample 14-Day Audit Teardown Report (Confidential Executive Deliverable)</span>
              <ArrowRight className="w-4 h-4 text-[#00BFCC] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {/* 100% Value Guarantee & Operator Covenant Banner */}
        <div className="rounded-3xl bg-zinc-50 border border-zinc-200/90 p-6 sm:p-8 relative overflow-hidden shadow-xs">
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-[0.03] pointer-events-none">
            <ApertureLogo size={320} color="#0F172A" />
          </div>

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#0096A3]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                  The hAI Mate! 100% Value Guarantee &amp; Covenant
                </span>
              </div>
              <p className="text-sm text-zinc-700 leading-relaxed">
                If our 14-day diagnostic audit does not uncover at least <strong>3x its value in recoverable admin hours or supplier invoice discrepancies</strong>, you pay <span className="font-bold text-[#0F172A]">$0</span>. Zero lock-in. No automated action executes without your explicit 1-tap sign-off.
              </p>
              <div className="pt-1">
                <Link
                  href="/mission"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0096A3] hover:text-[#00818c] transition-colors"
                >
                  <span>Read our full Operational Philosophy &amp; 2030 Mission</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenAuditModal}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white font-semibold text-xs sm:text-sm hover:bg-zinc-800 transition-all shadow-sm shrink-0 w-full sm:w-auto"
            >
              <span>Book Your 14-Day Audit</span>
              <ArrowRight className="w-4 h-4 text-[#00BFCC]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
