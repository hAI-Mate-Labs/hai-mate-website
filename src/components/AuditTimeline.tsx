"use client";

import React from "react";
import {
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  FileText,
  Smartphone,
  Award,
  Zap,
} from "lucide-react";
import ApertureLogo from "./ApertureLogo";

interface AuditTimelineProps {
  onOpenAuditModal: () => void;
}

export default function AuditTimeline({ onOpenAuditModal }: AuditTimelineProps) {
  const steps = [
    {
      step: "01",
      days: "Days 1 – 2",
      title: "Zero-Disruption Observation (90 Mins)",
      subtitle: "Conducted during quiet morning prep hours before service begins.",
      icon: Clock,
      bullets: [
        "We review your recent supplier delivery dockets, messy paper receipts, and invoice filing habits.",
        "We inspect your POS till exports (Lightspeed, Square) and payroll templates (Deputy, Xero).",
        "Zero disruption to chefs, floor staff, or dining guests. We simply observe the paperwork trail.",
      ],
      deliverable: "Bottleneck Diagnostic Map & Software Stack Audit",
    },
    {
      step: "02",
      days: "Days 3 – 10",
      title: "Off-Site Prototyping & Pipeline Tuning",
      subtitle: "Built completely off-site by our founder. Your live systems remain untouched.",
      icon: Zap,
      bullets: [
        "We calibrate our private document ingestion pipeline against 20+ of your historical seafood, meat, and produce dockets.",
        "We train a custom shift demand model connecting your till's hourly sales to local weather patterns.",
        "Zero changes to your live till, bank accounts, or accounting ledgers during this stage.",
      ],
      deliverable: "Working Private Conduit Prototypes & Contract Price Tests",
    },
    {
      step: "03",
      days: "Day 14",
      title: "The Live Phone Demo & Margin Blueprint",
      subtitle: "Executive presentation with working mobile approval demonstration.",
      icon: Smartphone,
      bullets: [
        "You test a working 1-tap phone review prompt tailored specifically to your venue manager's phone.",
        "You receive an executive dollar-ROI audit showing exact supplier overcharges caught and hours saved.",
        "Transparent fixed-fee implementation quote + WA State Government grant application paperwork pre-filled.",
      ],
      deliverable: "Comprehensive Venue Margin Blueprint & Ready-to-Deploy Blueprints",
    },
  ];

  return (
    <section id="audit-timeline" className="relative py-20 md:py-28 bg-zinc-50/50 border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/80 mb-3 shadow-2xs">
            <Calendar className="w-3.5 h-3.5 text-[#0096A3]" />
            <span className="text-xs font-semibold text-zinc-800 tracking-wide uppercase">
              The 14-Day Diagnostic Audit
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Inside the Audit: Exactly What Happens.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600">
            No endless discovery meetings or disruptive IT consultants. A clear, fixed 14-day review
            that proves quantifiable margin uplift before you commit to anything.
          </p>
        </div>

        {/* 3 Step Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-xs flex flex-col justify-between space-y-6 relative group hover:border-zinc-300 transition-all"
              >
                <div className="space-y-4">
                  
                  {/* Top Row: Icon + Day Badge */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-900 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-[#0096A3]" />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-xs font-bold text-[#0F172A] font-mono">
                        {item.days}
                      </span>
                      <span className="text-[10px] text-zinc-400 font-mono">
                        PHASE {item.step}
                      </span>
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2.5 pt-2 border-t border-zinc-100 text-xs text-zinc-600">
                    {item.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Deliverable Badge */}
                <div className="pt-4 border-t border-zinc-100">
                  <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-mono block mb-1">
                    Key Deliverable
                  </span>
                  <span className="text-xs font-semibold text-zinc-900 block leading-tight">
                    {item.deliverable}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* 100% Value Guarantee Box */}
        <div className="rounded-3xl bg-white border-2 border-[#0F172A] p-8 sm:p-10 shadow-sm relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative">
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0F172A] text-[#00BFCC] flex items-center justify-center shrink-0 p-3 shadow-2xs">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold text-emerald-700">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>THE 100% VALUE GUARANTEE</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
                  Find at Least 4 Hours/Week, or Pay Nothing.
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-2xl font-normal">
                  If our 14-day diagnostic audit does not identify at least <strong>4 hours/week of recoverable
                  back-office admin drag</strong> or a clear pathway to a <strong>3x return on your audit fee</strong>,
                  the audit fee is completely waived. No questions asked.
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#0F172A] text-white text-xs sm:text-sm font-semibold hover:bg-[#1E293B] transition-all shadow-sm cursor-pointer group"
              >
                <span>Book 14-Day Venue Review</span>
                <ArrowRight className="w-4 h-4 text-[#00BFCC] transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-zinc-500 font-mono">
            <span>Fixed Fee • Zero Lock-In • 100% Transparent Scoping</span>
            <span className="text-[#0096A3] font-semibold">Eligible for 50% WA State Government Matched Funding</span>
          </div>

        </div>

      </div>
    </section>
  );
}
