"use client";

import React, { useState } from "react";
import ApertureLogo from "./ApertureLogo";
import { ShieldCheck, Compass, GitCommit, Check, Sparkles, Terminal, ArrowRight, Lock } from "lucide-react";

interface PhilosophySectionProps {
  onOpenAuditModal: () => void;
}

export default function PhilosophySection({ onOpenAuditModal }: PhilosophySectionProps) {
  const [activeSegment, setActiveSegment] = useState<"all" | "outer" | "conduit" | "node">("all");

  const geometryPoints = [
    {
      id: "outer" as const,
      name: "The Outer Circle",
      title: "The Complete Business Ecosystem Operating in Balance",
      detail:
        "Represents your entire enterprise—kitchen, floor staff, suppliers, point-of-sale, and accounting ledgers. Automation must never rupture the ecosystem; it harmonizes and stabilizes operations.",
      techSpec: "System Boundary: Lightspeed • Square • Xero • MYOB • Deputy",
      color: "#FFFFFF",
    },
    {
      id: "conduit" as const,
      name: "The 45° Conduit",
      title: "Cutting Through Administrative Weight",
      detail:
        "The angled diagonal channel cuts directly through the repetitive manual drag of back-office operations. It funnels unstructured dockets and shift fluctuations into structured, actionable intelligence.",
      techSpec: "Throughput: 0.2s OCR • Sub-1s ML Demand Forecasting",
      color: "#00F2FE",
    },
    {
      id: "node" as const,
      name: "The Central Cyan Node",
      title: "The Operator at the Center",
      detail:
        "The human is not bypassed; the human is empowered. The central node is the venue manager or operator holding complete veto power. No automated action runs unapproved.",
      techSpec: "Security: Cryptographic Human Review Gate • Slack Connect PIN",
      color: "#00F2FE",
    },
  ];

  return (
    <section id="philosophy" className="relative py-20 md:py-32 bg-[#0B0F19] border-b border-[#232F48] overflow-hidden">
      
      {/* Background terminal grid */}
      <div className="absolute inset-0 terminal-grid opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#151D2F] border border-[#232F48] text-xs font-mono text-[#00F2FE] mb-4">
          <span>OPERATIONAL PHILOSOPHY // THE OPEN APERTURE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] tracking-tight leading-tight">
              Why Generic Chatbots Fail: Most AI Tools Add Clutter. We Build Applied Conduits.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#94A3B8] leading-relaxed">
              <p>
                In 2024–2026, the market was flooded with conversational wrappers that generate polite text but can’t balance a weekly roster or catch a supplier overcharge.
              </p>
              <p>
                Hospitality groups and regional WA businesses don’t need an AI chatbot arguing about table reservations or hallucinating into General Ledger accounts.
              </p>
              <p className="text-[#F8FAFC] font-medium border-l-2 border-[#00F2FE] pl-4 italic">
                “We believe true artificial intelligence in operations should be silent, deterministic, and ruthlessly accountable to human judgment.”
              </p>
            </div>

            {/* Core Architectural Tenets */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#151D2F] border border-[#232F48]">
                <div className="p-1 rounded bg-[#00F2FE]/10 text-[#00F2FE]">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#FFFFFF]">Deterministic Boundary Enforcement</h4>
                  <p className="text-xs text-[#94A3B8]">
                    Generative models only parse and structure data; financial ledger writes and roster publishes run through strict deterministic logic gates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#151D2F] border border-[#232F48]">
                <div className="p-1 rounded bg-[#00F2FE]/10 text-[#00F2FE]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#FFFFFF]">Zero Unapproved Mutations</h4>
                  <p className="text-xs text-[#94A3B8]">
                    Every automated suggestion is staged as a draft. Venue managers approve via one tap on their existing Slack or mobile device.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-lg bg-[#151D2F] border border-[#232F48]">
                <div className="p-1 rounded bg-[#00F2FE]/10 text-[#00F2FE]">
                  <GitCommit className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#FFFFFF]">100% Local WA Engineering</h4>
                  <p className="text-xs text-[#94A3B8]">
                    Our engineers live in Western Australia, understand modern award wage penalty structures, and configure custom integrations tailored to your venue.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-2 text-sm font-mono font-bold text-[#00F2FE] hover:text-[#FFFFFF] transition-colors"
              >
                <span>Read our Security &amp; Control Whitepaper</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Logo Geometry Breakdown */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-[#151D2F] border border-[#232F48] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              {/* Terminal badge top right */}
              <div className="flex items-center justify-between border-b border-[#232F48] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00F2FE] animate-pulse" />
                  <span className="text-xs font-mono text-[#94A3B8]">
                    ARCHITECTURAL BLUEPRINT // SYMBOLIC GEOMETRY
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveSegment("all")}
                  className={`text-[11px] font-mono px-2 py-0.5 rounded transition-colors ${
                    activeSegment === "all"
                      ? "bg-[#00F2FE] text-[#04101A] font-bold"
                      : "bg-[#0B0F19] text-[#94A3B8] hover:text-[#FFFFFF]"
                  }`}
                >
                  View Full Schema
                </button>
              </div>

              {/* Central Vector Canvas */}
              <div className="flex flex-col items-center justify-center py-6 relative">
                <div className="relative p-6 rounded-full bg-[#0B0F19] border border-[#232F48] shadow-inner shadow-black/80">
                  <ApertureLogo
                    className="h-44 w-44 sm:h-52 sm:w-52 transition-transform duration-300"
                    activeSegment={activeSegment}
                    glow={activeSegment !== "all"}
                  />
                </div>
                <span className="mt-4 text-xs font-mono text-[#94A3B8]">
                  Click or hover any geometric layer below to isolate its operational function
                </span>
              </div>

              {/* Interactive Geometry Breakdown Tabs */}
              <div className="space-y-3 mt-4">
                {geometryPoints.map((pt) => {
                  const isActive = activeSegment === pt.id;
                  return (
                    <div
                      key={pt.id}
                      onClick={() => setActiveSegment(pt.id)}
                      onMouseEnter={() => setActiveSegment(pt.id)}
                      className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-[#1A243A] border-[#00F2FE] shadow-[0_0_15px_rgba(0,242,254,0.2)]"
                          : "bg-[#0B0F19]/80 border-[#232F48] hover:border-slate-500"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{
                              backgroundColor: pt.color,
                              boxShadow: isActive ? `0 0 8px ${pt.color}` : "none",
                            }}
                          />
                          <h4 className="text-sm font-bold text-[#FFFFFF]">{pt.name}</h4>
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#00F2FE] font-bold">
                          {isActive ? "ACTIVE LAYER" : "INSPECT"}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-[#E2E8F0] mb-1">{pt.title}</p>
                      <p className="text-xs text-[#94A3B8] leading-relaxed">{pt.detail}</p>
                      <div className="mt-2 pt-2 border-t border-[#232F48]/80 text-[10px] font-mono text-[#00F2FE]">
                        {pt.techSpec}
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
