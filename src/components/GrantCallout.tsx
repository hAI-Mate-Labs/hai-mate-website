"use client";

import React, { useState } from "react";
import { Landmark, ArrowRight, Check, DollarSign, Calculator, Clock, Sparkles } from "lucide-react";
import ApertureLogo from "./ApertureLogo";

interface GrantCalloutProps {
  onOpenAuditModal: () => void;
}

export default function GrantCallout({ onOpenAuditModal }: GrantCalloutProps) {
  const [selectedStream, setSelectedStream] = useState<1 | 2>(1);
  const [scopeInvestment, setScopeInvestment] = useState<number>(12000);

  // Stream parameters
  const maxGrant = selectedStream === 1 ? 25000 : 50000;
  const grantAmount = Math.min(scopeInvestment * 0.5, maxGrant);
  const netOutOfPocket = scopeInvestment - grantAmount;

  // Estimated annualized savings based on venue automation (approx 2.8x investment)
  const annualSavings = Math.round(scopeInvestment * 2.8);
  const weeklySavings = annualSavings / 52;
  const paybackWeeks = (netOutOfPocket / weeklySavings).toFixed(1);

  const handleStreamChange = (stream: 1 | 2) => {
    setSelectedStream(stream);
    setScopeInvestment(stream === 1 ? 12000 : 28000);
  };

  return (
    <section id="grants" className="relative py-20 md:py-28 bg-white border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Callout Card */}
        <div className="relative rounded-3xl bg-zinc-50/70 border border-zinc-200/90 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xs">
          
          {/* Subtle watermark */}
          <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 opacity-[0.025] pointer-events-none">
            <ApertureLogo size={400} color="#09090B" />
          </div>

          <div className="relative space-y-8">
            
            {/* Header */}
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-800 shadow-2xs">
                <Landmark className="w-3.5 h-3.5 text-[#0096A3]" />
                <span>WA STATE GOVERNMENT // LOCAL CAPABILITY FUND (LCF)</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight">
                Co-Fund 50% of Your Automation with WA State Grants.
              </h2>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                Eligible Western Australian SMEs can access up to <strong>50% matched funding</strong> through
                the Local Capability Fund (LCF) Digital Transformation Round. We handle the complete
                technical scoping, architecture blueprints, and ROI documentation for your application.
              </p>
            </div>

            {/* Interactive Grant & Payback Calculator */}
            <div className="rounded-3xl bg-white border border-zinc-200/90 p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-zinc-100 gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900">
                    <Calculator className="w-4 h-4 text-[#0096A3]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-950">
                      Grant &amp; Out-of-Pocket Payback Calculator
                    </h3>
                    <p className="text-xs text-zinc-500">
                      Toggle grant streams and slide to see your exact net investment and payback speed.
                    </p>
                  </div>
                </div>

                {/* Stream Switcher */}
                <div className="inline-flex p-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => handleStreamChange(1)}
                    className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                      selectedStream === 1
                        ? "bg-zinc-950 text-white shadow-xs"
                        : "text-zinc-600 hover:text-zinc-950"
                    }`}
                  >
                    Stream 1: Single Venue (Max $25k)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStreamChange(2)}
                    className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                      selectedStream === 2
                        ? "bg-zinc-950 text-white shadow-xs"
                        : "text-zinc-600 hover:text-zinc-950"
                    }`}
                  >
                    Stream 2: Group (Max $50k)
                  </button>
                </div>
              </div>

              {/* Slider for Project Scope */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="grant-slider" className="text-xs font-bold uppercase tracking-wider text-zinc-700">
                    Total Estimated Automation Project Scope:
                  </label>
                  <span className="text-lg font-black font-mono text-zinc-950">
                    ${scopeInvestment.toLocaleString("en-AU")}
                  </span>
                </div>

                <input
                  id="grant-slider"
                  type="range"
                  min={selectedStream === 1 ? 6000 : 15000}
                  max={selectedStream === 1 ? 40000 : 80000}
                  step={1000}
                  value={scopeInvestment}
                  onChange={(e) => setScopeInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-zinc-950"
                />

                <div className="flex justify-between text-[11px] font-mono text-zinc-400">
                  <span>Min: ${selectedStream === 1 ? "6,000" : "15,000"}</span>
                  <span>Typical Venue Project</span>
                  <span>Max: ${selectedStream === 1 ? "40,000" : "80,000"}</span>
                </div>
              </div>

              {/* 4 Outcome Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                
                {/* Column 1 */}
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/70 space-y-1">
                  <span className="text-[11px] font-mono text-zinc-400 uppercase">Total Scope</span>
                  <div className="text-xl font-bold font-mono text-zinc-950">
                    ${scopeInvestment.toLocaleString("en-AU")}
                  </div>
                  <p className="text-[10px] text-zinc-500">Fixed-price custom integration</p>
                </div>

                {/* Column 2 */}
                <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-1">
                  <span className="text-[11px] font-mono text-emerald-700 uppercase font-semibold">
                    WA Govt 50% Co-Funding
                  </span>
                  <div className="text-xl font-extrabold font-mono text-emerald-700">
                    -${grantAmount.toLocaleString("en-AU")}
                  </div>
                  <p className="text-[10px] text-emerald-800">State grant contribution</p>
                </div>

                {/* Column 3 */}
                <div className="p-4 rounded-2xl bg-white border-2 border-zinc-950 shadow-2xs space-y-1">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase font-semibold">
                    Your Net Out-of-Pocket
                  </span>
                  <div className="text-xl font-black font-mono text-zinc-950">
                    ${netOutOfPocket.toLocaleString("en-AU")}
                  </div>
                  <p className="text-[10px] text-zinc-600">Actual investment after grant</p>
                </div>

                {/* Column 4 - Payback Speed */}
                <div className="p-4 rounded-2xl bg-[#00BFCC]/10 border border-[#00BFCC]/30 space-y-1">
                  <span className="text-[11px] font-mono text-[#0096A3] uppercase font-bold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Estimated Payback
                  </span>
                  <div className="text-xl font-black font-mono text-zinc-950">
                    ~{paybackWeeks} <span className="text-sm font-normal text-zinc-600">weeks</span>
                  </div>
                  <p className="text-[10px] text-zinc-600">Reclaims ~${annualSavings.toLocaleString("en-AU")}/yr</p>
                </div>

              </div>

              {/* Action Strip */}
              <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-600 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" /> Operating in WA
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" /> Active ABN
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600" /> &lt;200 Employees
                  </span>
                </div>

                <button
                  type="button"
                  onClick={onOpenAuditModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-950 text-white font-semibold text-xs sm:text-sm hover:bg-zinc-800 transition-all shadow-xs cursor-pointer"
                >
                  <span>Apply With 50% WA Grant Support</span>
                  <ArrowRight className="w-4 h-4 text-[#00BFCC]" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
