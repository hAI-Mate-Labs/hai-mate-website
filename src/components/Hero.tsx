"use client";

import React, { useState, useEffect } from "react";
import {
  FileText,
  AlertTriangle,
  CheckCircle2,
  Play,
  RotateCcw,
  Terminal,
  Clock,
  Shield,
  ArrowRight,
  Sparkles,
  Cpu,
  Layers,
  ChevronRight,
  ExternalLink,
  DollarSign,
  TrendingDown,
  Check,
  Code2
} from "lucide-react";

interface HeroProps {
  onOpenAuditModal: () => void;
}

type TabType = "pipeline" | "logs" | "payload";

export default function Hero({ onOpenAuditModal }: HeroProps) {
  const [activeTab, setActiveTab] = useState<TabType>("pipeline");
  const [approved, setApproved] = useState(false);
  const [approving, setApproving] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(2); // Step 3 (Center Anchor)
  const [latency, setLatency] = useState("0.4s");
  const [pulseLive, setPulseLive] = useState(true);

  // Simulated live execution timer
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
    setTimeout(() => setActiveStepIndex(1), 800);
    setTimeout(() => setActiveStepIndex(2), 1600);
  };

  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden border-b border-[#232F48]">
      {/* Background canvas effects */}
      <div className="absolute inset-0 terminal-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00F2FE]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#151D2F]/60 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151D2F] border border-[#232F48] shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F2FE] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F2FE]" />
              </span>
              <span className="text-xs font-mono font-semibold tracking-wide text-[#F8FAFC]">
                Western Australia’s Applied Automation Agency
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-[#00F2FE]/15 text-[#00F2FE] border border-[#00F2FE]/30 font-bold ml-1">
                Perth • WA
              </span>
            </div>

            {/* H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight text-[#FFFFFF] leading-[1.12]">
              Opening Up Operational Flow While Keeping{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#E2E8F0] to-[#00F2FE] underline decoration-[#00F2FE]/50 decoration-wavy decoration-2">
                Human Judgment
              </span>{" "}
              at the Center.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
              We design, deploy, and manage embedded agentic workflows for hospitality groups and growing SMEs across WA. Eliminate manual back-office drag, protect your labor margins, and maintain complete operational control.
            </p>

            {/* Key Value Micro-Chips */}
            <div className="flex flex-wrap gap-2.5 pt-1 text-xs font-mono text-[#F8FAFC]">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#151D2F]/80 border border-[#232F48]">
                <Check className="w-3.5 h-3.5 text-[#00F2FE]" />
                Lightspeed & Square Native
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#151D2F]/80 border border-[#232F48]">
                <Check className="w-3.5 h-3.5 text-[#00F2FE]" />
                Zero Unreviewed General Ledger Posts
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#151D2F]/80 border border-[#232F48]">
                <Check className="w-3.5 h-3.5 text-[#00F2FE]" />
                Eligible for 50% WA State Grant
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="relative inline-flex items-center justify-center px-6 py-4 text-base font-bold rounded-md bg-[#00F2FE] text-[#04101A] shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer font-sans group border border-[#00F2FE]"
              >
                <span>Get Your 14-Day AI Readiness Audit</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-6 py-4 text-base font-medium rounded-md bg-[#151D2F] text-[#F8FAFC] border border-[#232F48] hover:border-[#00F2FE]/60 hover:bg-[#1A243A] transition-all"
              >
                <span>Explore Applied Solutions</span>
              </a>
            </div>

            {/* Real-time local status proof */}
            <div className="pt-2 flex items-center gap-3 text-xs text-[#94A3B8]">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
              <span>Available for on-site diagnostic audits across Perth CBD, Fremantle, Subiaco, and South West.</span>
            </div>
          </div>

          {/* Right Column: Interactive UI Preview Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xl bg-[#151D2F] border border-[#232F48] shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl">
              
              {/* Glassmorphic border glow */}
              <div className="absolute inset-0 pointer-events-none rounded-xl border border-[#00F2FE]/20" />

              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0F172A] border-b border-[#232F48]">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-[#94A3B8] ml-2 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#00F2FE]" />
                    <span>hAI-conduit::live_session_flow_v2.4</span>
                  </span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 bg-[#0B0F19] p-1 rounded-md border border-[#232F48] text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setActiveTab("pipeline")}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === "pipeline"
                        ? "bg-[#151D2F] text-[#00F2FE] font-semibold"
                        : "text-[#94A3B8] hover:text-[#F8FAFC]"
                    }`}
                  >
                    Workflow
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("logs")}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === "logs"
                        ? "bg-[#151D2F] text-[#00F2FE] font-semibold"
                        : "text-[#94A3B8] hover:text-[#F8FAFC]"
                    }`}
                  >
                    Telemetry
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("payload")}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTab === "payload"
                        ? "bg-[#151D2F] text-[#00F2FE] font-semibold"
                        : "text-[#94A3B8] hover:text-[#F8FAFC]"
                    }`}
                  >
                    JSON
                  </button>
                </div>
              </div>

              {/* Sub-header telemetry stats */}
              <div className="grid grid-cols-3 border-b border-[#232F48] bg-[#0B0F19]/60 px-4 py-2 text-xs font-mono">
                <div className="flex items-center gap-1.5 text-[#94A3B8]">
                  <span>Status:</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    CONDUIT_HEALTHY
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[#94A3B8] justify-center">
                  <span>Target Wage:</span>
                  <span className="text-[#00F2FE] font-bold">33.0%</span>
                </div>
                <div className="flex items-center gap-1.5 text-[#94A3B8] justify-end">
                  <span>Approval Latency:</span>
                  <span className="text-[#FFFFFF] font-bold">{latency}</span>
                </div>
              </div>

              {/* Interactive Content View */}
              <div className="p-5 space-y-4">
                {activeTab === "pipeline" && (
                  <div className="space-y-3.5">
                    {/* Step 1 */}
                    <div
                      onClick={() => setActiveStepIndex(0)}
                      className={`relative p-3.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                        activeStepIndex === 0
                          ? "bg-[#1A243A] border-[#00F2FE]/70 shadow-[0_0_15px_rgba(0,242,254,0.15)]"
                          : "bg-[#0F172A]/70 border-[#232F48] hover:border-slate-600"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold">
                              Step 01 • Ingestion & OCR
                            </span>
                            <h4 className="text-sm font-semibold text-[#F8FAFC]">
                              Supplier Invoice Scanned via OCR
                            </h4>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0B0F19] text-emerald-400 border border-emerald-900/60 font-medium">
                          100% Parsed
                        </span>
                      </div>
                      <p className="text-xs text-[#94A3B8] pl-8">
                        Seafood supplier docket: 14 line items extracted. Unit pricing verified against weekly price-cap schedule.
                      </p>
                      <div className="mt-2 pl-8 flex items-center gap-2 text-[11px] font-mono text-[#00F2FE]">
                        <span>→ Parsed to Xero General Ledger: Draft Bills</span>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div
                      onClick={() => setActiveStepIndex(1)}
                      className={`relative p-3.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                        activeStepIndex === 1
                          ? "bg-[#1A243A] border-[#00F2FE]/70 shadow-[0_0_15px_rgba(0,242,254,0.15)]"
                          : "bg-[#0F172A]/70 border-[#232F48] hover:border-slate-600"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            <AlertTriangle className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold">
                              Step 02 • ML Discrepancy Gate
                            </span>
                            <h4 className="text-sm font-semibold text-[#F8FAFC]">
                              POS Shift Discrepancy Flagged
                            </h4>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#0B0F19] text-amber-400 border border-amber-900/60 font-medium">
                          Variance: +1.8%
                        </span>
                      </div>
                      <p className="text-xs text-[#94A3B8] pl-8">
                        Lightspeed POS real-time sales trending down 8% vs BOM rainfall surge. Predicted Saturday labor ratio exceeded threshold (34.8%).
                      </p>
                      <div className="mt-2 pl-8 flex items-center gap-2 text-[11px] font-mono text-amber-300">
                        <span>→ Roster auto-adjusted to preserve 33% wage target (-1 floor shift suggested)</span>
                      </div>
                    </div>

                    {/* Step 3 (Center Anchor - Human Review Required) */}
                    <div
                      onClick={() => setActiveStepIndex(2)}
                      className={`relative p-4 rounded-lg border-2 transition-all duration-200 ${
                        activeStepIndex === 2
                          ? "bg-[#121E33] border-[#00F2FE] shadow-[0_0_20px_rgba(0,242,254,0.25)]"
                          : "bg-[#0F172A] border-[#00F2FE]/50"
                      }`}
                    >
                      {/* Pulse beacon */}
                      <div className="absolute -top-2.5 right-4 px-2 py-0.5 rounded-full bg-[#00F2FE] text-[#04101A] text-[10px] font-mono font-black tracking-wider uppercase flex items-center gap-1 shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#04101A] animate-ping" />
                        Center Anchor • Human Control Gate
                      </div>

                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded bg-[#00F2FE]/15 text-[#00F2FE] border border-[#00F2FE]/30">
                            <Shield className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[11px] font-mono uppercase tracking-wider text-[#00F2FE] font-bold">
                              Step 03 • The Operator Checkpoint
                            </span>
                            <h4 className="text-sm font-bold text-[#FFFFFF]">
                              Human Review Required
                            </h4>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 pl-8 mb-3">
                        No automated roster cut or ledger post executes without explicit operator signature. Dispatch push sent to Venue Manager via Slack.
                      </p>

                      {/* Interactive Button Badge: "Approved by Venue Manager (0.4s)" */}
                      <div className="pl-8 flex flex-wrap items-center gap-3">
                        <button
                          type="button"
                          onClick={handleApprove}
                          disabled={approving}
                          className={`relative inline-flex items-center gap-2 px-3.5 py-2 rounded-md font-mono text-xs font-bold transition-all cursor-pointer border ${
                            approved
                              ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/60 shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                              : "bg-[#00F2FE] text-[#04101A] border-[#00F2FE] hover:brightness-110 active:scale-95 shadow-[0_0_15px_rgba(0,242,254,0.4)]"
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          <span>
                            {approving
                              ? "Verifying Token..."
                              : approved
                              ? "Approved by Venue Manager (0.4s)"
                              : "Click to Approve as Venue Manager"}
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={handleReset}
                          className="text-xs font-mono text-[#94A3B8] hover:text-[#00F2FE] flex items-center gap-1 transition-colors"
                        >
                          <RotateCcw className="w-3 h-3" />
                          Reset flow
                        </button>
                      </div>

                      {/* Live verification token signature */}
                      <div className="mt-3 pt-2.5 border-t border-[#232F48] pl-8 flex items-center justify-between text-[10px] font-mono text-[#94A3B8]">
                        <span>Auth: RSA-4096 / Slack PIN</span>
                        <span className="text-[#00F2FE]">
                          {approved ? "STATE: COMMITTED_TO_LIGHTSPEED_XERO" : "STATE: AWAITING_OPERATOR_GATE"}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Telemetry / Raw Logs View */}
                {activeTab === "logs" && (
                  <div className="bg-[#0B0F19] rounded-lg p-3.5 font-mono text-xs text-slate-300 space-y-1.5 border border-[#232F48] max-h-64 overflow-y-auto">
                    <div className="text-[#94A3B8]">[11:42:01.002] INGEST: supplier_invoice_6691.pdf received via webhook</div>
                    <div className="text-emerald-400">[11:42:01.341] OCR_SUCCESS: 14 line items extracted (Confidence 99.8%)</div>
                    <div className="text-[#94A3B8]">[11:42:01.390] XERO_SYNC: Draft bill #BILL-8891 staged. No ledger auto-commit.</div>
                    <div className="text-amber-400">[11:42:02.100] POS_ALERT: Lightspeed hourly delta -8.4% vs Saturday baseline</div>
                    <div className="text-amber-400">[11:42:02.140] BOM_METEOROLOGY: Rain event 14mm detected for Perth Metro (6000)</div>
                    <div className="text-[#00F2FE]">[11:42:02.210] MODEL_PREDICTION: Wage cost will peak at 34.8% (Target: 33.0%)</div>
                    <div className="text-cyan-200">[11:42:02.280] ROSTER_PROPOSAL: -1 Casual Floor shift (18:00 - 22:00)</div>
                    <div className="text-[#FFFFFF] bg-[#151D2F] px-2 py-1 rounded border border-[#00F2FE]/40">
                      [11:42:02.320] GATEWAY: HUMAN_REVIEW_REQUIRED dispatch sent to Venue Manager Slack channel #management
                    </div>
                    {approved && (
                      <div className="text-emerald-300 font-bold bg-emerald-950/40 px-2 py-1 rounded border border-emerald-500/50">
                        [11:42:02.720] AUTH_SUCCESS: Operator token verified. Approved in 0.4s. Changes executed.
                      </div>
                    )}
                  </div>
                )}

                {/* JSON Payload View */}
                {activeTab === "payload" && (
                  <div className="bg-[#0B0F19] rounded-lg p-3.5 font-mono text-[11px] text-cyan-200 border border-[#232F48] max-h-64 overflow-y-auto">
                    <pre className="text-slate-300">
{`{
  "conduit_id": "wa_hospo_gateway_09",
  "venue": "Cottesloe Beachside Bistro",
  "postcode": 6011,
  "timestamp": "2026-10-03T11:42:02+08:00",
  "ocr_invoice": {
    "supplier": "Kailis Bros Fremantle",
    "invoice_no": "INV-4921",
    "total_aud": 2840.50,
    "discrepancies": []
  },
  "labor_guard": {
    "wage_target_pct": 33.0,
    "predicted_without_adjustment": 34.8,
    "suggested_saving_aud": 312.00,
    "roster_delta": "Cut 1x Casual Runner (18:00-22:00)"
  },
  "review_gate": {
    "required": true,
    "approver": "Venue Manager (Slack #ops)",
    "status": "${approved ? "APPROVED" : "AWAITING_HUMAN"}",
    "latency_seconds": ${approved ? 0.4 : "null"}
  }
}`}
                    </pre>
                  </div>
                )}
              </div>

              {/* Terminal Bottom Action Bar */}
              <div className="px-5 py-3 bg-[#0F172A] border-t border-[#232F48] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-[#94A3B8]">
                  <Cpu className="w-3.5 h-3.5 text-[#00F2FE]" />
                  <span>Xero • Lightspeed • Square • Slack Connect</span>
                </div>
                <div className="text-[#00F2FE] flex items-center gap-1 font-semibold">
                  <span>Audit Trail Guaranteed</span>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
