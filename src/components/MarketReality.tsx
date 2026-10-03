"use client";

import React, { useState } from "react";
import { ShieldCheck, Clock, TrendingUp, Calculator, ArrowRight, ChevronDown } from "lucide-react";

interface MarketRealityProps {
  onOpenAuditModal: () => void;
}

export default function MarketReality({ onOpenAuditModal }: MarketRealityProps) {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [venues, setVenues] = useState(1);
  const [weeklyWages, setWeeklyWages] = useState(15000);

  const annualWageBill = weeklyWages * 52;
  const annualLaborSavings = Math.round(annualWageBill * 0.04);
  const hoursRecoveredWeekly = venues * 6;
  const annualHoursRecovered = hoursRecoveredWeekly * 52;

  const metrics = [
    {
      stat: "65%",
      label: "Trust Deficit Solved",
      headline: "You Always Have the Final Say",
      description:
        "65% of businesses delay AI adoption over fears of losing control. We build strict human-in-the-loop review gates by default.",
      icon: ShieldCheck,
      badge: "Zero Accidental Entries",
      subtext: "Your manager approves every invoice and shift adjustment before it is saved.",
    },
    {
      stat: "4–8 Hrs",
      label: "Recovered / Week",
      headline: "No More Piles of Paper Dockets",
      description:
        "Average weekly administrative time eliminated from paper dockets, supplier invoices, and accounting entry.",
      icon: Clock,
      badge: "Direct Xero & MYOB Sync",
      subtext: "Simply snap a photo of delivery dockets on your phone or forward supplier emails.",
    },
    {
      stat: "3%–5%",
      label: "Labor Savings",
      headline: "Stop Weekend Wage Blowouts",
      description:
        "Automated demand-forecasting models matching POS trends, weather, and reservations to dynamic staff rostering.",
      icon: TrendingUp,
      badge: "33% Wage Target Guard",
      subtext: "Matches staff numbers to actual rain, reservations, and customer foot-traffic.",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 mb-3">
              <span>REAL-WORLD RESULTS FOR HOSPITALITY</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Practical Help For Busy Venue Owners.
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm sm:text-base text-slate-600 max-w-md">
            You got into hospitality to create great food and hospitality, not to spend your Mondays buried under delivery dockets and rostering spreadsheets.
          </p>
        </div>

        {/* 3-Column Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="group rounded-2xl bg-white border border-slate-200 p-6 lg:p-8 hover:border-slate-400 transition-all duration-200 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-slate-100 text-slate-900 group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {metric.badge}
                    </span>
                  </div>

                  <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight font-sans mb-1">
                    {metric.stat}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[#0096A3] font-bold mb-3">
                    {metric.label}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {metric.headline}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                  {metric.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Friendly Margin & Time Calculator */}
        <div className="mt-8 rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden">
          <button
            type="button"
            onClick={() => setCalculatorOpen(!calculatorOpen)}
            className="w-full px-6 py-4.5 flex items-center justify-between text-left hover:bg-slate-100/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700">
                <Calculator className="w-4 h-4" />
              </div>
              <div>
                <span className="text-sm font-bold text-slate-900 block">
                  Quick Calculator: See What Your Venue Can Save
                </span>
                <span className="text-xs text-slate-500">
                  Adjust your weekly payroll to estimate saved hours and wage margin recovery
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
              <span>{calculatorOpen ? "Hide Calculator" : "Try Calculator"}</span>
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
                  <div className="flex justify-between text-xs text-slate-700 font-medium mb-2">
                    <span>Number of Venues / Locations:</span>
                    <span className="font-bold text-slate-900">{venues} {venues === 1 ? "Venue" : "Venues"}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    step="1"
                    value={venues}
                    onChange={(e) => setVenues(Number(e.target.value))}
                    className="w-full accent-slate-900 h-2 bg-slate-200 rounded cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>Single Cafe / Bistro</span>
                    <span>Hospitality Group</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-700 font-medium mb-2">
                    <span>Estimated Weekly Total Wages (AUD):</span>
                    <span className="font-bold text-slate-900">${weeklyWages.toLocaleString()} / week</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="60000"
                    step="2500"
                    value={weeklyWages}
                    onChange={(e) => setWeeklyWages(Number(e.target.value))}
                    className="w-full accent-slate-900 h-2 bg-slate-200 rounded cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>$5k / wk (Small team)</span>
                    <span>$25k / wk (Busy pub/restaurant)</span>
                    <span>$60k+ / wk</span>
                  </div>
                </div>
              </div>

              {/* Output */}
              <div className="lg:col-span-6 rounded-xl bg-slate-50 border border-slate-200 p-5 space-y-4">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Estimated Yearly Impact
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-lg bg-white border border-slate-200">
                    <div className="text-xs text-slate-500">Wage Costs Saved</div>
                    <div className="text-2xl font-black text-slate-900 mt-1">
                      ${annualLaborSavings.toLocaleString()}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">by matching shifts to actual trade</div>
                  </div>

                  <div className="p-3.5 rounded-lg bg-white border border-slate-200">
                    <div className="text-xs text-slate-500">Admin Hours Saved</div>
                    <div className="text-2xl font-black text-[#0096A3] mt-1">
                      {annualHoursRecovered} hrs
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">~{hoursRecoveredWeekly} hrs / week recovered</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1">
                  <span className="text-xs text-slate-500">
                    Eligible for 50% WA State Grant co-funding.
                  </span>
                  <button
                    type="button"
                    onClick={onOpenAuditModal}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-[#0096A3]"
                  >
                    Check my venue <ArrowRight className="w-3.5 h-3.5" />
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
