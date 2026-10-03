"use client";

import React from "react";
import { Landmark, ArrowRight, Check } from "lucide-react";

interface GrantCalloutProps {
  onOpenAuditModal: () => void;
}

export default function GrantCallout({ onOpenAuditModal }: GrantCalloutProps) {
  return (
    <section id="grants" className="relative py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Highlighted Banner with Subtle Cyan Border */}
        <div className="relative rounded-2xl bg-slate-50/70 border border-slate-300 p-8 sm:p-12 overflow-hidden shadow-xs">
          
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-800">
                <Landmark className="w-3.5 h-3.5 text-[#0096A3]" />
                <span>WA STATE GOVERNMENT ACCELERATOR // LOCAL CAPABILITY FUND (LCF)</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Co-Fund Your Transformation with WA State Grants
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Eligible Western Australian SMEs can access up to 50% matched funding through the Local Capability Fund (LCF) Digital Transformation Round (Stream 1 up to $25,000; Stream 2 up to $50,000). We assist with the technical scoping and application readiness.
              </p>

              {/* Streams Breakdown Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-lg bg-white border border-slate-200 p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-slate-900">STREAM 1</span>
                    <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">50% Matched</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-slate-900">Up to $25,000</div>
                  <p className="text-xs text-slate-600 mt-1">
                    Ideal for single venues, boutique cafes, and SMEs ready for the 14-Day Audit and initial BOH/FOH agent deployment.
                  </p>
                </div>

                <div className="rounded-lg bg-white border border-slate-200 p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-slate-900">STREAM 2</span>
                    <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">50% Matched</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-slate-900">Up to $50,000</div>
                  <p className="text-xs text-slate-600 mt-1">
                    Multi-site hospitality groups, regional hotel operators, and mid-sized enterprises executing comprehensive operational AI pipelines.
                  </p>
                </div>
              </div>

              {/* Eligibility Checkpoints */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 pt-2">
                <span className="flex items-center gap-1.5 text-slate-800">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Operating in WA
                </span>
                <span className="flex items-center gap-1.5 text-slate-800">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Active ABN
                </span>
                <span className="flex items-center gap-1.5 text-slate-800">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> &lt;200 Employees
                </span>
                <span className="flex items-center gap-1.5 text-slate-800">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Technical Scoping Included
                </span>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4 rounded-xl bg-white border border-slate-200 p-6 text-center space-y-4 shadow-sm">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-500">
                Grant Technical Readiness
              </div>
              <div className="text-3xl font-black text-slate-900 font-mono">
                50% <span className="text-sm font-sans font-normal text-slate-500">Co-Funded</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We prepare the detailed engineering architecture, vendor quotes, and ROI payback metrics required by the Department of Jobs, Tourism, Science and Innovation (JTSI).
              </p>
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0F172A] text-white font-bold text-sm hover:bg-slate-800 transition-all cursor-pointer font-sans"
              >
                <span>Check Grant Eligibility in Audit</span>
                <ArrowRight className="w-4 h-4 text-[#00BFCC]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
