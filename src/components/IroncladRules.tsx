"use client";

import React from "react";
import { ShieldCheck, Lock, Users, AlertCircle } from "lucide-react";
import ApertureLogo from "./ApertureLogo";

export default function IroncladRules() {
  const rules = [
    {
      number: "01",
      title: "We Never Make Unapproved Bank Payments or Ledger Posts",
      detail:
        "No money ever leaves your bank account automatically, and no invoice commits to Xero or MYOB without your say-so. Every bill is staged safely as a draft, waiting for your manager's 1-tap green light.",
      icon: Lock,
    },
    {
      number: "02",
      title: "We Never Alter Shifts Without Your Explicit Consent",
      detail:
        "Our models forecast trade deltas and weather squalls, but they never cut, cancel, or reassign a staff member on their own. We surface the recommendation—you make the final decision.",
      icon: ShieldCheck,
    },
    {
      number: "03",
      title: "We Never Replace Your Floor or Kitchen Team",
      detail:
        "Hospitality is about warmth, food, and human connection. We don't try to replace your chefs, bartenders, or floor runners—we simply take the repetitive back-office paperwork off your desk.",
      icon: Users,
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Box */}
        <div className="rounded-3xl bg-zinc-50/70 border border-zinc-200/90 p-8 sm:p-12 shadow-xs relative overflow-hidden">
          
          {/* Subtle logo watermark */}
          <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 opacity-[0.03] pointer-events-none">
            <ApertureLogo size={350} color="#0F172A" />
          </div>

          <div className="relative space-y-8">
            
            {/* Header */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-800 mb-3 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0096A3]" />
                <span>SAFETY, CONTROL &amp; PEACE OF MIND</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                What hAI Mate! Will <span className="underline decoration-[#00BFCC] decoration-2">NEVER</span> Do.
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-600">
                AI should eliminate back-office drag, not create anxiety. We operate under three non-negotiable hospitality rules:
              </p>
            </div>

            {/* 3 Rules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rules.map((rule) => {
                const Icon = rule.icon;
                return (
                  <div
                    key={rule.number}
                    className="p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-100 text-zinc-900">
                        <Icon className="w-4 h-4 text-[#0096A3]" />
                      </div>
                      <span className="text-xs font-black font-mono text-zinc-400">
                        RULE {rule.number}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#0F172A] leading-snug">
                      {rule.title}
                    </h3>

                    <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                      {rule.detail}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Trust Quote */}
            <div className="pt-4 border-t border-zinc-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-500">
              <span className="font-medium text-zinc-800">
                100% Australian cloud infrastructure • Strict confidentiality on all recipe and supplier costs.
              </span>
              <span className="text-[11px] text-zinc-400 font-mono">
                GUARANTEED BY SOVEREIGN DATA CONTROLS
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
