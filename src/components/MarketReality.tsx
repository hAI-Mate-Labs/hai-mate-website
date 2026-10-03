"use client";

import React, { useState } from "react";
import { ShieldCheck, Clock, TrendingUp, Calculator, ArrowRight, ChevronDown } from "lucide-react";

interface MarketRealityProps {
  onOpenAuditModal: () => void;
}

export default function MarketReality({ onOpenAuditModal }: MarketRealityProps) {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [venues, setVenues] = useState(1);
  const [weeklyWages, setWeeklyWages] = useState(16000);

  const annualWageBill = weeklyWages * 52;
  const annualLaborSavings = Math.round(annualWageBill * 0.04);
  const hoursRecoveredWeekly = venues * 6;
  const annualHoursRecovered = hoursRecoveredWeekly * 52;

  const metrics = [
    {
      stat: "65%",
      label: "Trust Deficit Solved",
      headline: "Strict Human-in-the-Loop Review Gates",
      description:
        "65% of businesses delay AI adoption over fears of losing control. We build strict human-in-the-loop review gates by default.",
      icon: ShieldCheck,
    },
    {
      stat: "4–8 Hrs",
      label: "Recovered / Week",
      headline: "Weekly Admin Eliminated",
      description:
        "Average weekly administrative time eliminated from paper dockets, supplier invoices, and accounting entry.",
      icon: Clock,
    },
    {
      stat: "3%–5%",
      label: "Labor Savings",
      headline: "Automated Demand Forecasting",
      description:
        "Automated demand-forecasting models matching POS trends, weather, and reservations to dynamic staff rostering.",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="relative py-20 md:py-24 bg-zinc-50/50 border-y border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0096A3] block mb-2">
            Market Reality &amp; Real Outcomes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Built for Hospitality Operators Who Value Control.
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            No complicated gimmicks. We automate the repetitive back-office tasks that pull you away from your venue floor.
          </p>
        </div>

        {/* 3-Column Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="rounded-3xl bg-white border border-zinc-200/80 p-8 shadow-xs hover:border-zinc-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-100 w-fit text-zinc-900 mb-6">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="text-4xl sm:text-5xl font-black text-zinc-950 tracking-tight font-sans mb-1">
                    {metric.stat}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#0096A3] font-bold mb-3">
                    {metric.label}
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 mb-2">
                    {metric.headline}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    {metric.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Margin Calculator */}
        <div className="mt-12 max-w-3xl mx-auto rounded-3xl bg-white border border-zinc-200/80 shadow-xs overflow-hidden">
          <button
            type="button"
            onClick={() => setCalculatorOpen(!calculatorOpen)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-zinc-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-zinc-100 text-zinc-800">
                <Calculator className="w-4 h-4" />
              </div>
              <div>
                <span className="text-sm font-bold text-zinc-900 block">
                  Quick Calculator: See Your Venue's Drag &amp; Savings
                </span>
                <span className="text-xs text-zinc-500">
                  Estimate hours and labor costs recovered per year
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-700">
              <span>{calculatorOpen ? "Close" : "Calculate"}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  calculatorOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>

          {calculatorOpen && (
            <div className="p-6 sm:p-8 border-t border-zinc-100 bg-zinc-50/50 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center animate-in fade-in duration-150">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-zinc-700 mb-1.5">
                    <span>Venues:</span>
                    <span className="text-zinc-950 font-bold">{venues}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    step="1"
                    value={venues}
                    onChange={(e) => setVenues(Number(e.target.value))}
                    className="w-full accent-zinc-900 h-2 bg-zinc-200 rounded cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-zinc-700 mb-1.5">
                    <span>Weekly Wages:</span>
                    <span className="text-zinc-950 font-bold">${weeklyWages.toLocaleString()} / wk</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="60000"
                    step="2500"
                    value={weeklyWages}
                    onChange={(e) => setWeeklyWages(Number(e.target.value))}
                    className="w-full accent-zinc-900 h-2 bg-zinc-200 rounded cursor-pointer"
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-zinc-200 p-5 space-y-3">
                <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                  Estimated Annual Recovery
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-xs text-zinc-500 block">Wage Lift</span>
                    <span className="text-2xl font-black text-zinc-950">${annualLaborSavings.toLocaleString()}</span>
                  </div>
                  <div>
                    <span className="text-xs text-zinc-500 block">Hours Saved</span>
                    <span className="text-2xl font-black text-[#0096A3]">{annualHoursRecovered} hrs</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={onOpenAuditModal}
                  className="w-full pt-2 text-xs font-bold text-zinc-900 hover:text-[#0096A3] flex items-center justify-between border-t border-zinc-100"
                >
                  <span>Verify in 14-Day Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
