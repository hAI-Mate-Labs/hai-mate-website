"use client";

import React, { useState } from "react";
import { ShieldCheck, Clock, TrendingUp, Calculator, ArrowRight, ChevronDown } from "lucide-react";

interface MarketRealityProps {
  onOpenAuditModal: () => void;
}

export default function MarketReality({ onOpenAuditModal }: MarketRealityProps) {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [venues, setVenues] = useState(2);
  const [weeklyWages, setWeeklyWages] = useState(18000);

  const annualWageBill = weeklyWages * 52;
  const annualLaborSavings = Math.round(annualWageBill * 0.04);
  const hoursRecoveredWeekly = venues * 6;
  const annualHoursRecovered = hoursRecoveredWeekly * 52;

  const metrics = [
    {
      stat: "65%",
      label: "Trust Deficit Solved",
      headline: "Strict Human-in-the-Loop Gates",
      description:
        "65% of businesses delay AI adoption over fears of losing control. We build strict human-in-the-loop review gates by default.",
      icon: ShieldCheck,
      badge: "Zero Unapproved Posts",
      subtext: "Cryptographic confirmation tokens on every high-stakes write operation.",
    },
    {
      stat: "4–8 Hrs",
      label: "Recovered / Week",
      headline: "Paper & Docket Drag Eliminated",
      description:
        "Average weekly administrative time eliminated from paper dockets, supplier invoices, and accounting entry.",
      icon: Clock,
      badge: "Direct Xero & MYOB Sync",
      subtext: "Line-item reconciliation directly from camera or email attachments.",
    },
    {
      stat: "3%–5%",
      label: "Labor Savings",
      headline: "Margin Protection Against Surges",
      description:
        "Automated demand-forecasting models matching POS trends, weather, and reservations to dynamic staff rostering.",
      icon: TrendingUp,
      badge: "33% Wage Ratio Lock",
      subtext: "Eliminate penalty rate blowouts and quiet-shift overstaffing.",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800 mb-3">
              <span>MARKET REALITY // PROBLEM-SOLUTION FIT</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Why Applied Automation Beats Generic AI Wrappers.
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm sm:text-base text-slate-600 max-w-md font-sans">
            Western Australian operators don’t need another chatbot. You need deterministic conduits that protect your P&amp;L every single week.
          </p>
        </div>

        {/* 3-Column Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="group rounded-xl bg-white border border-slate-200 p-6 lg:p-8 hover:border-slate-400 transition-all duration-200 hover:shadow-md flex flex-col justify-between"
              >
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-lg bg-slate-100 text-slate-900 group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-medium">
                    {metric.badge}
                  </span>
                </div>

                {/* Big Stat */}
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-mono mb-1">
                    {metric.stat}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#0096A3] font-bold mb-3">
                    {metric.label}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                    {metric.headline}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                {/* Footnote */}
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono text-slate-500">
                  {metric.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimalist Savings Calculator Drawer */}
        <div className="mt-8 rounded-xl bg-slate-50 border border-slate-200 overflow-hidden">
          <button
            type="button"
            onClick={() => setCalculatorOpen(!calculatorOpen)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-100/70 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Calculator className="w-4 h-4 text-slate-700" />
              <div>
                <span className="text-sm font-bold text-slate-900 block">
                  WA Operator Drag &amp; Margin Calculator
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  Calculate estimated annual savings and recovered admin hours
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-700 font-semibold">
              <span>{calculatorOpen ? "Close Calculator" : "Estimate Upside"}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  calculatorOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>

          {calculatorOpen && (
            <div className="p-6 border-t border-slate-200 bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-200">
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-700 mb-2">
                    <span>Number of Venues / Sites:</span>
                    <span className="font-bold text-slate-900">{venues} Sites</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={venues}
                    onChange={(e) => setVenues(Number(e.target.value))}
                    className="w-full accent-slate-900 h-1.5 bg-slate-200 rounded cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-700 mb-2">
                    <span>Estimated Weekly Wages (AUD):</span>
                    <span className="font-bold text-slate-900">${weeklyWages.toLocaleString()} / week</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="80000"
                    step="2500"
                    value={weeklyWages}
                    onChange={(e) => setWeeklyWages(Number(e.target.value))}
                    className="w-full accent-slate-900 h-1.5 bg-slate-200 rounded cursor-pointer"
                  />
                </div>
              </div>

              <div className="lg:col-span-6 rounded-lg bg-slate-50 border border-slate-200 p-5 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                  Estimated Annual Recovery (4% Margin Lift)
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 rounded bg-white border border-slate-200">
                    <div className="text-[11px] font-mono text-slate-500">Est. Wage Cost Saved</div>
                    <div className="text-2xl font-black text-slate-900 font-mono mt-1">
                      ${annualLaborSavings.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">per year directly to margin</div>
                  </div>

                  <div className="p-3 rounded bg-white border border-slate-200">
                    <div className="text-[11px] font-mono text-slate-500">Admin Eliminated</div>
                    <div className="text-2xl font-black text-[#0096A3] font-mono mt-1">
                      {annualHoursRecovered} hrs
                    </div>
                    <div className="text-[10px] text-slate-500 mt-1">~{hoursRecoveredWeekly} hrs / week</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-slate-500">
                    WA Local Capability Fund 50% co-funding eligible.
                  </span>
                  <button
                    type="button"
                    onClick={onOpenAuditModal}
                    className="inline-flex items-center gap-1 text-xs font-bold font-mono text-slate-900 hover:text-[#0096A3]"
                  >
                    Scope in Audit <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
