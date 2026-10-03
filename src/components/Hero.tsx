"use client";

import React, { useState } from "react";
import {
  FileText,
  AlertTriangle,
  CheckCircle2,
  RotateCcw,
  Terminal,
  Shield,
  ArrowRight,
  Cpu,
  Check
} from "lucide-react";

interface HeroProps {
  onOpenAuditModal: () => void;
}

type TabType = "pipeline" | "logs" | "payload";

export default function Hero({ onOpenAuditModal }: HeroProps) {
  const [activeTab, setActiveTab] = useState<TabType>("pipeline");
  const [approved, setApproved] = useState(false);
  const [approving, setApproving] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(2);
  const [latency, setLatency] = useState("0.4s");

  const handleApprove = () => {
    if (approving) return;
    setApproving(true);
    setTimeout(() => {
      setApproved(!approved);
      setApproving(false);
      setLatency(approved ? "Pending" : "0.4s");
    }, 300);
  };

  const handleReset = () => {
    setApproved(false);
    setActiveStepIndex(0);
    setTimeout(() => setActiveStepIndex(1), 600);
    setTimeout(() => setActiveStepIndex(2), 1200);
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-white border-b border-slate-200">
      {/* Minimal background grid */}
      <div className="absolute inset-0 minimal-grid opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Minimal Headline & Narrative */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00BFCC] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00BFCC]" />
              </span>
              <span className="text-xs font-mono font-medium text-slate-800">
                Western Australia’s Applied Automation Practice
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-200/80 text-slate-700 font-semibold">
                Solo Practitioner
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight text-slate-900 leading-[1.14]">
              Opening Up Operational Flow While Keeping{" "}
              <span className="relative inline-block text-slate-900">
                Human Judgment
                <span className="absolute bottom-1.5 left-0 w-full h-2 bg-[#00BFCC]/25 -z-10 rounded-sm" />
              </span>{" "}
              at the Center.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              We design, deploy, and manage embedded agentic workflows for hospitality groups and growing SMEs across WA. Eliminate manual back-office drag, protect your labor margins, and maintain complete operational control.
            </p>

            {/* Clean Value Bullets */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono text-slate-700">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-50 border border-slate-200">
                <Check className="w-3.5 h-3.5 text-[#00BFCC]" />
                Lightspeed &amp; Square Native
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-50 border border-slate-200">
                <Check className="w-3.5 h-3.5 text-[#00BFCC]" />
                Zero Unreviewed General Ledger Posts
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-50 border border-slate-200">
                <Check className="w-3.5 h-3.5 text-[#00BFCC]" />
                50% WA State Grant Eligible
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="relative inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold rounded-lg bg-[#0F172A] text-white hover:bg-slate-800 active:scale-[0.99] transition-all cursor-pointer font-sans group border border-[#0F172A] shadow-sm"
              >
                <span>Get Your 14-Day AI Readiness Audit</span>
                <ArrowRight className="w-4 h-4 ml-2 text-[#00BFCC] transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium rounded-lg bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all shadow-2xs"
              >
                <span>Explore Applied Solutions</span>
              </a>
            </div>

            {/* Solo Practitioner Local note */}
            <div className="pt-2 text-xs text-slate-500 font-mono flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Direct engineer access: Direct solo practitioner engagement without account manager bloat.</span>
            </div>
          </div>

          {/* Right Column: Minimalist Light Terminal Preview Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xl bg-white border border-slate-200 shadow-xl overflow-hidden">
              
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-50 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  </div>
                  <span className="text-xs font-mono text-slate-500 ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#00BFCC]" />
                    <span>hAI-flow::perth_hospo_gateway</span>
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 bg-white p-0.5 rounded border border-slate-200 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setActiveTab("pipeline")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === "pipeline"
                        ? "bg-slate-100 text-slate-900 font-semibold"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    Workflow
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("logs")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === "logs"
                        ? "bg-slate-100 text-slate-900 font-semibold"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    Telemetry
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("payload")}
                    className={`px-2 py-0.5 rounded transition-colors ${
                      activeTab === "payload"
                        ? "bg-slate-100 text-slate-900 font-semibold"
                        : "text-slate-500 hover:text-slate-800"
                    }`}
                  >
                    JSON
                  </button>
                </div>
              </div>

              {/* Sub-header telemetry stats */}
              <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50/50 px-4 py-2 text-xs font-mono text-slate-600">
                <div className="flex items-center gap-1.5">
                  <span>Status:</span>
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    HEALTHY
                  </span>
                </div>
                <div className="flex items-center gap-1.5 justify-center">
                  <span>Wage Target:</span>
                  <span className="text-slate-900 font-bold">33.0%</span>
                </div>
                <div className="flex items-center gap-1.5 justify-end">
                  <span>Approval:</span>
                  <span className="text-[#00BFCC] font-bold">{latency}</span>
                </div>
              </div>

              {/* Interactive Content View */}
              <div className="p-4 sm:p-5 space-y-3">
                {activeTab === "pipeline" && (
                  <div className="space-y-3">
                    
                    {/* Step 1 */}
                    <div
                      onClick={() => setActiveStepIndex(0)}
                      className={`p-3 rounded-lg border transition-all cursor-pointer ${
                        activeStepIndex === 0
                          ? "bg-slate-50 border-slate-400"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <div className="p-1 rounded bg-slate-100 text-slate-700">
                            <FileText className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                              Step 01 • Ingestion &amp; OCR
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                              Supplier Invoice Scanned via OCR
                            </h4>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                          100% Parsed
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 pl-6">
                        Fresh produce docket: 14 line items extracted and verified against weekly price agreement.
                      </p>
                      <div className="mt-1.5 pl-6 text-[11px] font-mono text-[#0096A3] font-medium">
                        → Line items parsed to Xero: Draft Bills
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div
                      onClick={() => setActiveStepIndex(1)}
                      className={`p-3 rounded-lg border transition-all cursor-pointer ${
                        activeStepIndex === 1
                          ? "bg-slate-50 border-slate-400"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <div className="p-1 rounded bg-amber-50 text-amber-700">
                            <AlertTriangle className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 font-bold">
                              Step 02 • ML Discrepancy Gate
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                              POS Shift Discrepancy Flagged
                            </h4>
                          </div>
                        </div>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200 font-medium">
                          Variance: +1.8%
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 pl-6">
                        Lightspeed POS sales trending down vs local rain forecast. Saturday wage cost trending to 34.8%.
                      </p>
                      <div className="mt-1.5 pl-6 text-[11px] font-mono text-amber-800 font-medium">
                        → Roster auto-adjusted to preserve 33% wage target
                      </div>
                    </div>

                    {/* Step 3 (Center Anchor - Human Review Required) */}
                    <div
                      onClick={() => setActiveStepIndex(2)}
                      className={`p-3.5 rounded-lg border-2 transition-all ${
                        activeStepIndex === 2
                          ? "bg-slate-50/70 border-[#00BFCC]"
                          : "bg-white border-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <div className="p-1 rounded bg-[#00BFCC]/15 text-[#0096A3]">
                            <Shield className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-wider text-[#0096A3] font-bold">
                              Step 03 • Center Anchor
                            </span>
                            <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                              Human Review Required
                            </h4>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 pl-6 mb-2.5">
                        No automated roster cut or ledger post executes without explicit operator signature.
                      </p>

                      {/* Interactive Button Badge: "Approved by Venue Manager (0.4s)" */}
                      <div className="pl-6 flex flex-wrap items-center gap-2.5">
                        <button
                          type="button"
                          onClick={handleApprove}
                          disabled={approving}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-xs font-bold transition-all cursor-pointer border ${
                            approved
                              ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                              : "bg-[#0F172A] text-white border-[#0F172A] hover:bg-slate-800 shadow-2xs"
                          }`}
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00BFCC]" />
                          <span>
                            {approving
                              ? "Verifying Token..."
                              : approved
                              ? "Approved by Venue Manager (0.4s)"
                              : "Approve as Venue Manager"}
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={handleReset}
                          className="text-xs font-mono text-slate-500 hover:text-slate-900 flex items-center gap-1 transition-colors"
                        >
                          <RotateCcw className="w-3 h-3" />
                          Reset
                        </button>
                      </div>

                      <div className="mt-2.5 pt-2 border-t border-slate-200 pl-6 flex items-center justify-between text-[10px] font-mono text-slate-500">
                        <span>Sign-off: Slack PIN / RSA-4096</span>
                        <span className="text-[#0096A3] font-semibold">
                          {approved ? "STATUS: COMMITTED TO XERO" : "STATUS: AWAITING_HUMAN"}
                        </span>
                      </div>
                    </div>

                  </div>
                )}

                {/* Telemetry Tab */}
                {activeTab === "logs" && (
                  <div className="bg-slate-50 rounded p-3 font-mono text-xs text-slate-700 space-y-1 border border-slate-200 max-h-56 overflow-y-auto">
                    <div>[11:42:01.002] INGEST: supplier_invoice_6691.pdf received</div>
                    <div className="text-emerald-700 font-medium">[11:42:01.341] OCR_SUCCESS: 14 line items extracted (Confidence 99.8%)</div>
                    <div>[11:42:01.390] XERO_SYNC: Draft bill staged. No ledger auto-commit.</div>
                    <div className="text-amber-700">[11:42:02.100] POS_ALERT: Lightspeed hourly delta -8.4% vs Saturday baseline</div>
                    <div className="text-[#0096A3] font-semibold">[11:42:02.210] MODEL_PREDICTION: Wage cost will peak at 34.8% (Target: 33.0%)</div>
                    <div className="p-1.5 rounded bg-white border border-slate-200 font-semibold text-slate-900">
                      [11:42:02.320] GATEWAY: HUMAN_REVIEW_REQUIRED dispatch sent to Venue Manager
                    </div>
                    {approved && (
                      <div className="text-emerald-800 font-bold bg-emerald-50 p-1.5 rounded border border-emerald-300">
                        [11:42:02.720] AUTH_SUCCESS: Approved by Venue Manager in 0.4s. Changes committed.
                      </div>
                    )}
                  </div>
                )}

                {/* JSON Tab */}
                {activeTab === "payload" && (
                  <div className="bg-slate-50 rounded p-3 font-mono text-[11px] text-slate-800 border border-slate-200 max-h-56 overflow-y-auto">
                    <pre>
{`{
  "conduit": "wa_hospo_gateway_09",
  "venue": "Cottesloe Bistro",
  "ocr_invoice": {
    "supplier": "Fremantle Produce Co",
    "total_aud": 2840.50,
    "pricing_variance": "0.00 AUD (Matched)"
  },
  "labor_target_pct": 33.0,
  "human_gate": {
    "status": "${approved ? "APPROVED" : "AWAITING_HUMAN"}",
    "latency_seconds": ${approved ? 0.4 : "null"}
  }
}`}
                    </pre>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="px-4 py-2.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-[#00BFCC]" />
                  <span>Lightspeed • Square • Xero • Slack</span>
                </div>
                <div className="text-slate-800 font-semibold flex items-center gap-1">
                  <span>Cryptographic Review Gate</span>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
