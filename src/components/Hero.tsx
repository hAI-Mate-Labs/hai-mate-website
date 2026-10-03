"use client";

import React, { useState } from "react";
import {
  FileText,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Check,
  Shield,
  RotateCcw,
  Sparkles
} from "lucide-react";
import ApertureLogo from "./ApertureLogo";

interface HeroProps {
  onOpenAuditModal: () => void;
}

export default function Hero({ onOpenAuditModal }: HeroProps) {
  const [approved, setApproved] = useState(false);
  const [approving, setApproving] = useState(false);

  const handleApprove = () => {
    if (approving) return;
    setApproving(true);
    setTimeout(() => {
      setApproved(!approved);
      setApproving(false);
    }, 250);
  };

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-white overflow-hidden">
      
      {/* Subtle background aperture watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.025] pointer-events-none">
        <ApertureLogo size={700} color="#09090B" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-50 border border-zinc-200/80 mb-6 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#00BFCC]" />
          <span className="text-xs font-medium text-zinc-800">
            Western Australia’s Applied Automation Agency
          </span>
        </div>

        {/* H1 Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.12] max-w-4xl mx-auto">
          Opening Up Operational Flow While Keeping{" "}
          <span className="relative inline-block text-zinc-950">
            Human Judgment
            <span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#00BFCC]/25 -z-10 rounded-sm" />
          </span>{" "}
          at the Center.
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed font-normal">
          We design, deploy, and manage embedded agentic workflows for hospitality groups and growing SMEs across WA. Eliminate manual back-office drag, protect your labor margins, and maintain complete operational control.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold rounded-full bg-zinc-900 text-white hover:bg-zinc-800 active:scale-[0.99] transition-all shadow-sm group"
          >
            <span>Get Your 14-Day AI Readiness Audit</span>
            <ArrowRight className="w-4 h-4 ml-2 text-[#00BFCC] transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-medium rounded-full bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50 transition-all shadow-2xs"
          >
            <span>Explore Applied Solutions</span>
          </a>
        </div>

        {/* Reassurance note */}
        <p className="mt-4 text-xs text-zinc-500 font-normal">
          Works with your existing till and books: Lightspeed, Square, Xero &amp; MYOB. No technical setup required.
        </p>

        {/* Simple & Clean Live Preview Card */}
        <div className="mt-14 max-w-2xl mx-auto">
          <div className="rounded-3xl bg-zinc-50/60 border border-zinc-200/90 p-6 sm:p-8 shadow-xs text-left">
            
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-zinc-200/70 pb-4 mb-5">
              <div className="flex items-center gap-2.5">
                <ApertureLogo className="h-5 w-5" />
                <span className="text-xs font-semibold text-zinc-800">
                  Live Shift Workflow • Cottesloe Bistro
                </span>
              </div>
              <span className="text-[11px] font-semibold text-[#0096A3] bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-100">
                Target Wage: 33.0%
              </span>
            </div>

            {/* 3 Step Workflow */}
            <div className="space-y-3">
              
              {/* Step 1 */}
              <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-md bg-emerald-50 text-emerald-700">
                      <FileText className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-zinc-900">
                      Step 1: Supplier Invoice Scanned via OCR
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Matched Contract
                  </span>
                </div>
                <p className="text-xs text-zinc-600 pl-6">
                  Seafood supplier docket parsed. 14 line items checked. Line items parsed to Xero draft bills.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-md bg-amber-50 text-amber-700">
                      <AlertTriangle className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-zinc-900">
                      Step 2: POS Shift Discrepancy Flagged
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                    Rain Alert
                  </span>
                </div>
                <p className="text-xs text-zinc-600 pl-6">
                  Saturday rain forecast + quiet lunch on Lightspeed POS. Roster auto-adjusted to preserve 33% wage target (-1 shift cut, saves $312).
                </p>
              </div>

              {/* Step 3 (Center Anchor - Human Review Required) */}
              <div className="p-4.5 rounded-2xl bg-white border-2 border-zinc-900/10 shadow-xs relative">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-md bg-[#00BFCC]/15 text-[#0096A3]">
                      <Shield className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-zinc-950">
                      Step 3: Human Review Required (Center Anchor)
                    </span>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 pl-6 mb-3">
                  No automated roster cut or ledger post executes without explicit operator signature.
                </p>

                {/* Interactive Button Badge: "Approved by Venue Manager (0.4s)" */}
                <div className="pl-6 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleApprove}
                    disabled={approving}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      approved
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-300 shadow-xs"
                        : "bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm"
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00BFCC]" />
                    <span>
                      {approving
                        ? "Verifying..."
                        : approved
                        ? "Approved by Venue Manager (0.4s)"
                        : "Tap to Approve as Venue Manager"}
                    </span>
                  </button>

                  {approved && (
                    <button
                      type="button"
                      onClick={() => setApproved(false)}
                      className="text-xs text-zinc-400 hover:text-zinc-700 flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Reset
                    </button>
                  )}
                </div>
              </div>

            </div>

            {/* Reassurance footer inside preview */}
            <div className="mt-4 pt-3 border-t border-zinc-200/60 flex items-center justify-between text-[11px] text-zinc-500">
              <span>Lightspeed • Square • Xero • Deputy</span>
              <span className="font-medium text-zinc-700">100% Human Controlled</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
