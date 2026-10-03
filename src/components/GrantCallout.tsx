"use client";

import React, { useState } from "react";
import { Landmark, CheckCircle, ArrowRight, DollarSign, Sparkles, HelpCircle, Check } from "lucide-react";

interface GrantCalloutProps {
  onOpenAuditModal: () => void;
}

export default function GrantCallout({ onOpenAuditModal }: GrantCalloutProps) {
  const [eligibilityChecked, setEligibilityChecked] = useState(false);

  return (
    <section id="grants" className="relative py-16 md:py-24 bg-[#0B0F19] border-b border-[#232F48]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Highlighted Banner Styled with Subtle Cyan Border */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#151D2F] to-[#0F172A] border-2 border-[#00F2FE]/40 p-8 sm:p-12 shadow-[0_0_50px_rgba(0,242,254,0.15)] overflow-hidden">
          
          {/* Subtle Corner Cyan Flare */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00F2FE]/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#00F2FE]/5 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B0F19] border border-[#00F2FE]/40 text-xs font-mono text-[#00F2FE]">
                <Landmark className="w-3.5 h-3.5 text-[#00F2FE]" />
                <span>WA STATE GOVERNMENT ACCELERATOR // LOCAL CAPABILITY FUND (LCF)</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#FFFFFF] tracking-tight">
                Co-Fund Your Transformation with WA State Grants
              </h2>

              {/* Content specification */}
              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
                Eligible Western Australian SMEs can access up to 50% matched funding through the Local Capability Fund (LCF) Digital Transformation Round (Stream 1 up to $25,000; Stream 2 up to $50,000). We assist with the technical scoping and application readiness.
              </p>

              {/* Streams Breakdown Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="rounded-lg bg-[#0B0F19]/90 border border-[#232F48] p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-[#00F2FE]">STREAM 1</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">50% Matched</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-[#FFFFFF]">Up to $25,000</div>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    Ideal for single venues, boutique groups, and SMEs ready for the 14-Day Audit and initial BOH/FOH agent deployment.
                  </p>
                </div>

                <div className="rounded-lg bg-[#0B0F19]/90 border border-[#232F48] p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-[#00F2FE]">STREAM 2</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">50% Matched</span>
                  </div>
                  <div className="text-2xl font-bold font-mono text-[#FFFFFF]">Up to $50,000</div>
                  <p className="text-xs text-[#94A3B8] mt-1">
                    Multi-site hospitality groups, regional hotel operators, and mid-sized enterprises executing comprehensive operational AI pipelines.
                  </p>
                </div>
              </div>

              {/* Eligibility Checkpoints */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#94A3B8] pt-2">
                <span className="flex items-center gap-1.5 text-[#F8FAFC]">
                  <Check className="w-3.5 h-3.5 text-[#00F2FE]" /> WA Registered Entity
                </span>
                <span className="flex items-center gap-1.5 text-[#F8FAFC]">
                  <Check className="w-3.5 h-3.5 text-[#00F2FE]" /> Active ABN
                </span>
                <span className="flex items-center gap-1.5 text-[#F8FAFC]">
                  <Check className="w-3.5 h-3.5 text-[#00F2FE]" /> &lt;200 Employees
                </span>
                <span className="flex items-center gap-1.5 text-[#F8FAFC]">
                  <Check className="w-3.5 h-3.5 text-[#00F2FE]" /> Free Technical Scoping Support
                </span>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4 rounded-xl bg-[#0B0F19] border border-[#232F48] p-6 text-center space-y-4 shadow-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-[#94A3B8]">
                Grant Technical Readiness
              </div>
              <div className="text-3xl font-black text-[#FFFFFF] font-mono">
                50% <span className="text-sm font-sans font-normal text-[#94A3B8]">Co-Funded</span>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                We prepare the detailed engineering architecture, vendor quotes, and ROI payback metrics required by the Department of Jobs, Tourism, Science and Innovation (JTSI).
              </p>
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#00F2FE] text-[#04101A] font-bold text-sm hover:brightness-110 shadow-[0_0_20px_rgba(0,242,254,0.35)] transition-all cursor-pointer font-sans"
              >
                <span>Check Grant Eligibility in Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-[11px] font-mono text-[#64748B]">
                Applications open for 2026 funding rounds.
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
