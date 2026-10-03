"use client";

import React from "react";
import { Landmark, ArrowRight, Check } from "lucide-react";
import ApertureLogo from "./ApertureLogo";

interface GrantCalloutProps {
  onOpenAuditModal: () => void;
}

export default function GrantCallout({ onOpenAuditModal }: GrantCalloutProps) {
  return (
    <section id="grants" className="relative py-20 md:py-24 bg-white border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Callout Card */}
        <div className="relative rounded-3xl bg-zinc-50/70 border border-zinc-200/90 p-8 sm:p-12 overflow-hidden shadow-xs">
          
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-800">
                <Landmark className="w-3.5 h-3.5 text-[#0096A3]" />
                <span>WA STATE GOVERNMENT GRANTS // LOCAL CAPABILITY FUND (LCF)</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-zinc-950 tracking-tight">
                Co-Fund Your Transformation with WA State Grants
              </h2>

              <p className="text-base text-zinc-600 leading-relaxed font-normal">
                Eligible Western Australian SMEs can access up to 50% matched funding through the Local Capability Fund (LCF) Digital Transformation Round (Stream 1 up to $25,000; Stream 2 up to $50,000). We assist with the technical scoping and application readiness.
              </p>

              {/* Streams Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-2xl bg-white border border-zinc-200/80 p-5 shadow-2xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-zinc-900">STREAM 1: SINGLE VENUES</span>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      50% Matched
                    </span>
                  </div>
                  <div className="text-2xl font-black text-zinc-950">Up to $25,000</div>
                  <p className="text-xs text-zinc-500 mt-1">
                    For individual restaurants, cafes, and pubs automating dockets, rostering, and phone bookings.
                  </p>
                </div>

                <div className="rounded-2xl bg-white border border-zinc-200/80 p-5 shadow-2xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-zinc-900">STREAM 2: GROUPS &amp; HOTELS</span>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                      50% Matched
                    </span>
                  </div>
                  <div className="text-2xl font-black text-zinc-950">Up to $50,000</div>
                  <p className="text-xs text-zinc-500 mt-1">
                    For multi-site hospitality groups and regional venues deploying broader operational pipelines.
                  </p>
                </div>
              </div>

              {/* Checkpoints */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-600 pt-2 font-medium">
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Operating in WA
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Active ABN
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> &lt;200 Employees
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> Free Technical Scoping Support
                </span>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4 rounded-3xl bg-white border border-zinc-200/90 p-7 text-center space-y-4 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
                Government Grant Support
              </span>
              <div className="text-4xl font-black text-zinc-950">
                50% <span className="text-sm font-normal text-zinc-500">Co-Funded</span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                We handle the complete technical scoping, architecture blueprints, and ROI documentation required for your grant application.
              </p>
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-zinc-900 text-white font-semibold text-sm hover:bg-zinc-800 transition-all shadow-xs"
              >
                <span>Check Eligibility in Audit</span>
                <ArrowRight className="w-4 h-4 text-[#00BFCC]" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
