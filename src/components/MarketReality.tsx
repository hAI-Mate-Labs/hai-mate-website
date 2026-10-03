"use client";

import React, { useState } from "react";
import { ShieldCheck, Clock, TrendingUp, Calculator, ArrowRight, CheckCircle, ChevronDown } from "lucide-react";

interface MarketRealityProps {
  onOpenAuditModal: () => void;
}

export default function MarketReality({ onOpenAuditModal }: MarketRealityProps) {
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [venues, setVenues] = useState(2);
  const [weeklyWages, setWeeklyWages] = useState(18000); // AUD

  // Calculations:
  // 4% labor savings average
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
    <section className="relative py-16 md:py-24 bg-[#0B0F19] border-b border-[#232F48]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#151D2F] border border-[#232F48] text-xs font-mono text-[#00F2FE] mb-3">
              <span>MARKET REALITY // PROBLEM-SOLUTION BENCHMARK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FFFFFF] tracking-tight">
              Why Applied Automation Beats Generic AI Wrappers.
            </h2>
          </div>
          <p className="mt-3 md:mt-0 text-sm sm:text-base text-[#94A3B8] max-w-md font-sans">
            Western Australian operators don’t need another conversational toy. You need deterministic pipelines that protect your P&amp;L every single week.
          </p>
        </div>

        {/* 3-Column Data Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="group relative rounded-xl bg-[#151D2F] border border-[#232F48] p-6 lg:p-8 hover:border-[#00F2FE]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,242,254,0.12)] flex flex-col justify-between"
              >
                {/* Subtle top indicator */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-lg bg-[#0B0F19] border border-[#232F48] text-[#00F2FE] group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-[#0B0F19] text-[#94A3B8] border border-[#232F48]">
                    {metric.badge}
                  </span>
                </div>

                {/* Big Stat */}
                <div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#FFFFFF] tracking-tight font-mono mb-2 group-hover:text-[#00F2FE] transition-colors">
                    {metric.stat}
                  </div>
                  <div className="text-sm font-mono uppercase tracking-wider text-[#00F2FE] font-bold mb-3">
                    {metric.label}
                  </div>
                  <h3 className="text-lg font-bold text-[#F8FAFC] mb-2 font-sans">
                    {metric.headline}
                  </h3>
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {metric.description}
                  </p>
                </div>

                {/* Card Subtext / Footnote */}
                <div className="mt-6 pt-4 border-t border-[#232F48] flex items-center justify-between text-xs font-mono text-[#94A3B8]">
                  <span>{metric.subtext}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive WA Operator Drag Calculator Drawer */}
        <div className="mt-10 rounded-xl bg-[#151D2F] border border-[#232F48] overflow-hidden">
          <button
            type="button"
            onClick={() => setCalculatorOpen(!calculatorOpen)}
            className="w-full px-6 py-4 flex items-center justify-between text-left bg-[#101625] hover:bg-[#151D2F] transition-colors"
          >
            <div className="flex items-center gap-3">
              <Calculator className="w-5 h-5 text-[#00F2FE]" />
              <div>
                <span className="text-sm font-bold text-[#FFFFFF] block">
                  WA Hospitality &amp; SME Drag Calculator
                </span>
                <span className="text-xs text-[#94A3B8] font-mono">
                  Input your weekly wage run to project annual margin recovery
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#00F2FE]">
              <span>{calculatorOpen ? "Collapse Calculator" : "Calculate My Venue's Upside"}</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  calculatorOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>

          {calculatorOpen && (
            <div className="p-6 lg:p-8 border-t border-[#232F48] bg-[#0B0F19]/60 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-mono text-[#94A3B8] mb-2">
                    <span>Number of Venues / Operating Sites:</span>
                    <span className="text-[#00F2FE] font-bold">{venues} Sites</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={venues}
                    onChange={(e) => setVenues(Number(e.target.value))}
                    className="w-full accent-[#00F2FE] bg-[#151D2F] h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-[#64748B] mt-1">
                    <span>1 Single Venue</span>
                    <span>5 Multi-Site</span>
                    <span>10 Group Operations</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-[#94A3B8] mb-2">
                    <span>Estimated Total Weekly Wages (AUD):</span>
                    <span className="text-[#00F2FE] font-bold">${weeklyWages.toLocaleString()} / week</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="80000"
                    step="2500"
                    value={weeklyWages}
                    onChange={(e) => setWeeklyWages(Number(e.target.value))}
                    className="w-full accent-[#00F2FE] bg-[#151D2F] h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-[#64748B] mt-1">
                    <span>$5k (Boutique Cafe)</span>
                    <span>$25k (Busy Pub/Restaurant)</span>
                    <span>$80k (Hospitality Group)</span>
                  </div>
                </div>
              </div>

              {/* Output Results */}
              <div className="lg:col-span-6 rounded-lg bg-[#151D2F] border border-[#232F48] p-5 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-[#00F2FE]">
                  Estimated Annual Yield (4% Labor Savings + Docket Recovery)
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 rounded bg-[#0B0F19] border border-[#232F48]">
                    <div className="text-[11px] font-mono text-[#94A3B8]">Est. Labor Margin Saved</div>
                    <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono mt-1">
                      ${annualLaborSavings.toLocaleString()}
                    </div>
                    <div className="text-[10px] font-mono text-[#94A3B8] mt-1">per year directly to EBITDA</div>
                  </div>

                  <div className="p-3.5 rounded bg-[#0B0F19] border border-[#232F48]">
                    <div className="text-[11px] font-mono text-[#94A3B8]">Admin Time Eliminated</div>
                    <div className="text-2xl sm:text-3xl font-black text-[#00F2FE] font-mono mt-1">
                      {annualHoursRecovered} hrs
                    </div>
                    <div className="text-[10px] font-mono text-[#94A3B8] mt-1">~{hoursRecoveredWeekly} hrs / week saved</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-[#94A3B8]">
                    Includes WA Local Capability Fund 50% co-funding eligibility.
                  </span>
                  <button
                    type="button"
                    onClick={onOpenAuditModal}
                    className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-[#00F2FE] hover:underline"
                  >
                    Lock in Audit Scoping <ArrowRight className="w-3.5 h-3.5" />
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
