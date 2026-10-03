"use client";

import React from "react";
import { Landmark, ArrowRight, Check } from "lucide-react";
import ApertureLogo from "./ApertureLogo";

interface GrantCalloutProps {
  onOpenAuditModal: () => void;
}

export default function GrantCallout({ onOpenAuditModal }: GrantCalloutProps) {
  return (
    <section id="grants" className="relative py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner with brand subtle cyan accent */}
        <div className="relative rounded-3xl bg-slate-50 border-2 border-slate-200/90 p-8 sm:p-12 overflow-hidden shadow-xs">
          
          {/* Subtle brand vector watermark in the corner */}
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-[0.04] pointer-events-none">
            <ApertureLogo size={400} color="#0F172A" />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-800">
                <Landmark className="w-3.5 h-3.5 text-[#0096A3]" />
                <span>WA STATE GOVERNMENT GRANTS // LOCAL CAPABILITY FUND (LCF)</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Co-Fund Your Transformation with WA State Grants
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Eligible Western Australian SMEs can access up to 50% matched funding through the Local Capability Fund (LCF) Digital Transformation Round (Stream 1 up to $25,000; Stream 2 up to $50,000). We assist with the technical scoping and application readiness.
              </p>

              {/* Streams Breakdown Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-2xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-slate-900">STREAM 1: SINGLE VENUES</span>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      50% Matched
                    </span>
                  </div>
                  <div className="text-2xl font-black text-slate-900 font-sans">Up to $25,000</div>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Ideal for individual restaurants, pubs, and cafes wanting to automate kitchen dockets, rostering, and phone bookings.
                  </p>
                </div>

                <div className="rounded-xl bg-white border border-slate-200 p-5 shadow-2xs">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-slate-900">STREAM 2: GROUPS &amp; HOTELS</span>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      50% Matched
                    </span>
                  </div>
                  <div className="text-2xl font-black text-slate-900 font-sans">Up to $50,000</div>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                    Designed for multi-site hospitality groups and regional venues executing broader operational automation.
                  </p>
                </div>
              </div>

              {/* Checkpoints */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700 pt-2">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Operating in WA
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Active ABN
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Under 200 staff
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Application Paperwork Done For You
                </span>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4 rounded-2xl bg-white border border-slate-200 p-7 text-center space-y-4 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Government Co-Funding
              </div>
              <div className="text-4xl font-black text-slate-900">
                50% <span className="text-sm font-normal text-slate-500">Covered</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                We handle the technical documentation, quotes, and expected savings metrics required by the Department of Jobs, Tourism, Science and Innovation (JTSI).
              </p>
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0F172A] text-white font-bold text-sm hover:bg-slate-800 transition-all cursor-pointer font-sans shadow-xs"
              >
                <span>Check My Venue's Eligibility</span>
                <ArrowRight className="w-4 h-4 text-[#00BFCC]" />
              </button>
              <div className="text-[11px] text-slate-500">
                No extra charge for grant scoping during your audit.
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
