"use client";

import React, { useState } from "react";
import {
  FileText,
  AlertTriangle,
  CheckCircle2,
  RotateCcw,
  Shield,
  ArrowRight,
  Check,
  Smartphone,
  Sparkles,
  TrendingDown,
  DollarSign
} from "lucide-react";
import ApertureLogo from "./ApertureLogo";

interface HeroProps {
  onOpenAuditModal: () => void;
}

type TabType = "pipeline" | "message" | "savings";

export default function Hero({ onOpenAuditModal }: HeroProps) {
  const [activeTab, setActiveTab] = useState<TabType>("pipeline");
  const [approved, setApproved] = useState(false);
  const [approving, setApproving] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(2);

  const handleApprove = () => {
    if (approving) return;
    setApproving(true);
    setTimeout(() => {
      setApproved(!approved);
      setApproving(false);
    }, 250);
  };

  const handleReset = () => {
    setApproved(false);
    setActiveStepIndex(0);
    setTimeout(() => setActiveStepIndex(1), 500);
    setTimeout(() => setActiveStepIndex(2), 1000);
  };

  return (
    <section className="relative pt-10 pb-20 md:pt-16 md:pb-28 bg-white border-b border-slate-200 overflow-hidden">
      
      {/* Subtle brand vector mark watermark in the background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-[0.03] pointer-events-none">
        <ApertureLogo size={800} color="#0F172A" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Non-technical Hospitality Narrative */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00BFCC] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00BFCC]" />
              </span>
              <span className="text-xs font-semibold text-slate-800">
                Western Australia’s Applied Automation Agency
              </span>
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                For Hospitality &amp; SMEs
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight text-slate-900 leading-[1.12]">
              Opening Up Operational Flow While Keeping{" "}
              <span className="relative inline-block text-slate-900">
                Human Judgment
                <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#00BFCC]/30 -z-10 rounded-sm" />
              </span>{" "}
              at the Center.
            </h1>

            {/* Subheadline tailored for hospitality */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We design, deploy, and manage embedded agentic workflows for hospitality groups and growing SMEs across WA. Eliminate manual back-office drag, protect your labor margins, and maintain complete operational control.
            </p>

            {/* Non-technical value highlights */}
            <div className="space-y-2 pt-1 text-sm text-slate-700">
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#00BFCC]/15 text-[#0096A3] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>
                  <strong>Connects with what you already use:</strong> Lightspeed, Square, Xero, MYOB &amp; Deputy.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#00BFCC]/15 text-[#0096A3] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>
                  <strong>Zero tech skills required:</strong> Done-for-you setup with zero complicated menus for staff.
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#00BFCC]/15 text-[#0096A3] flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <span>
                  <strong>You stay in control:</strong> No bill is paid and no roster is altered without your 1-tap approval.
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="relative inline-flex items-center justify-center px-6 py-4 text-base font-bold rounded-lg bg-[#0F172A] text-white hover:bg-slate-800 active:scale-[0.99] transition-all cursor-pointer font-sans group shadow-sm"
              >
                <span>Get Your 14-Day AI Readiness Audit</span>
                <ArrowRight className="w-4 h-4 ml-2 text-[#00BFCC] transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-6 py-4 text-base font-semibold rounded-lg bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-all shadow-2xs"
              >
                <span>Explore Applied Solutions</span>
              </a>
            </div>

            {/* Friendly reassurance */}
            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>We walk your venue floor with you in Perth, Fremantle, or South West WA.</span>
            </div>
          </div>

          {/* Right Column: Friendly Venue Manager UI Preview Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden">
              
              {/* Card Header: Friendly Venue Manager View */}
              <div className="flex items-center justify-between px-5 py-3.5 bg-slate-50 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-md bg-white border border-slate-200">
                    <ApertureLogo className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-900">
                      Cottesloe Beachside Bistro • Live Venue Assistant
                    </h3>
                    <span className="text-[11px] text-slate-500">
                      Saturday Shift Protection
                    </span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 text-xs">
                  <button
                    type="button"
                    onClick={() => setActiveTab("pipeline")}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === "pipeline"
                        ? "bg-slate-100 text-slate-900 font-bold"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    Live Workflow
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("message")}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === "message"
                        ? "bg-slate-100 text-slate-900 font-bold"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    Manager View
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("savings")}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === "savings"
                        ? "bg-slate-100 text-slate-900 font-bold"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    Wage Target
                  </button>
                </div>
              </div>

              {/* Status bar */}
              <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50/60 px-5 py-2 text-xs text-slate-600">
                <div>
                  <span className="text-slate-400">Till:</span>{" "}
                  <span className="font-semibold text-slate-800">Lightspeed POS</span>
                </div>
                <div className="text-center">
                  <span className="text-slate-400">Books:</span>{" "}
                  <span className="font-semibold text-slate-800">Xero Connected</span>
                </div>
                <div className="text-right">
                  <span className="text-slate-400">Wage Target:</span>{" "}
                  <span className="font-bold text-[#0096A3]">33.0%</span>
                </div>
              </div>

              {/* Main Content */}
              <div className="p-5 space-y-3.5">
                {activeTab === "pipeline" && (
                  <div className="space-y-3">
                    
                    {/* Step 1 */}
                    <div
                      onClick={() => setActiveStepIndex(0)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                        activeStepIndex === 0
                          ? "bg-slate-50 border-slate-400 shadow-2xs"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-md bg-emerald-50 text-emerald-700">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-700">
                              Step 01 • Kitchen Invoices
                            </span>
                            <h4 className="text-sm font-bold text-slate-900">
                              Supplier Invoice Scanned via OCR
                            </h4>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                          Matched Contract
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 pl-7">
                        Seafood supplier invoice: 14 line items checked. Price per kg matched to your agreed rate. Staged in Xero ready for approval.
                      </p>
                    </div>

                    {/* Step 2 */}
                    <div
                      onClick={() => setActiveStepIndex(1)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                        activeStepIndex === 1
                          ? "bg-slate-50 border-slate-400 shadow-2xs"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-md bg-amber-50 text-amber-700">
                            <AlertTriangle className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[10px] uppercase font-bold tracking-wider text-amber-700">
                              Step 02 • Wage Guard
                            </span>
                            <h4 className="text-sm font-bold text-slate-900">
                              POS Shift Discrepancy Flagged
                            </h4>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                          Rain Warning
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 pl-7">
                        Rain alert from Bureau of Meteorology + quiet Saturday lunch detected on till. Roster auto-adjusted to preserve 33% wage target.
                      </p>
                    </div>

                    {/* Step 3 (Center Anchor - Human Review Required) */}
                    <div
                      onClick={() => setActiveStepIndex(2)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        activeStepIndex === 2
                          ? "bg-slate-50 border-[#00BFCC] shadow-xs"
                          : "bg-white border-slate-200"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-md bg-[#00BFCC]/15 text-[#0096A3]">
                            <Shield className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#0096A3]">
                              Step 03 • You're Always in Control
                            </span>
                            <h4 className="text-sm font-bold text-slate-900">
                              Human Review Required
                            </h4>
                          </div>
                        </div>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                          Center Anchor
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 pl-7 mb-3">
                        Nothing changes in your books or roster without you. Your venue manager receives a simple prompt on their phone to approve with 1 tap.
                      </p>

                      {/* Interactive Button Badge */}
                      <div className="pl-7 flex flex-wrap items-center gap-2.5">
                        <button
                          type="button"
                          onClick={handleApprove}
                          disabled={approving}
                          className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                            approved
                              ? "bg-emerald-50 text-emerald-800 border-emerald-300 shadow-xs"
                              : "bg-[#0F172A] text-white border-[#0F172A] hover:bg-slate-800 shadow-sm"
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#00BFCC]" />
                          <span>
                            {approving
                              ? "Processing..."
                              : approved
                              ? "Approved by Venue Manager (0.4s)"
                              : "Tap to Simulate Approval"}
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={handleReset}
                          className="text-xs text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"
                        >
                          <RotateCcw className="w-3 h-3" />
                          Reset
                        </button>
                      </div>

                      <div className="mt-3 pt-2 border-t border-slate-200 pl-7 flex items-center justify-between text-[11px] text-slate-500">
                        <span>Venue Manager Sign-off</span>
                        <span className="font-semibold text-emerald-700">
                          {approved ? "✓ Safe: Updated in Xero & Deputy" : "Waiting for manager 1-tap sign-off"}
                        </span>
                      </div>
                    </div>

                  </div>
                )}

                {/* Manager Message View */}
                {activeTab === "message" && (
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <Smartphone className="w-4 h-4 text-[#00BFCC]" />
                      <span>Phone Notification Sent to Manager:</span>
                    </div>
                    <div className="bg-white p-3.5 rounded-lg border border-slate-200 text-xs text-slate-800 space-y-2 shadow-2xs">
                      <p className="font-bold text-slate-900">
                        hAI Mate! Roster &amp; Invoice Summary:
                      </p>
                      <p>
                        • <strong>Kailis Bros Invoice #4921:</strong> $2,840.50 matched. Staged in Xero drafts.
                      </p>
                      <p>
                        • <strong>Rain Alert:</strong> Shift labor trending to 34.8%. Suggested cutting 1 floor runner from 18:00 to save $312 and maintain 33% target.
                      </p>
                      <div className="pt-1">
                        <span className="inline-block px-2 py-1 bg-slate-100 rounded text-slate-700 font-semibold">
                          Status: {approved ? "Approved via Phone (0.4s)" : "Tap 'Approve' to confirm"}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Savings View */}
                {activeTab === "savings" && (
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                    <div className="text-xs font-bold text-slate-700">
                      Shift Impact Summary:
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="bg-white p-3 rounded-lg border border-slate-200">
                        <span className="text-[11px] text-slate-500 block">Wage Target Locked</span>
                        <span className="text-xl font-black text-slate-900">33.0%</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg border border-slate-200">
                        <span className="text-[11px] text-slate-500 block">Tonight's Saved Wages</span>
                        <span className="text-xl font-black text-emerald-700">$312 AUD</span>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 text-center">
                      Calculated automatically from your till sales and local weather forecast.
                    </p>
                  </div>
                )}
              </div>

              {/* Bottom Reassurance */}
              <div className="px-5 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span>Works with Lightspeed, Square, Xero, MYOB &amp; Deputy</span>
                <span className="font-bold text-slate-800">100% Human Approved</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
