"use client";

import React, { useState } from "react";
import ApertureLogo from "./ApertureLogo";
import { ShieldCheck, GitCommit, ArrowRight, Lock } from "lucide-react";

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
      color: "#0F172A",
    },
    {
      id: "conduit" as const,
      name: "The 45° Conduit",
      title: "Cutting Through Administrative Weight",
      detail:
        "The angled diagonal channel cuts directly through the repetitive manual drag of back-office operations. It funnels unstructured dockets and shift fluctuations into structured, actionable intelligence.",
      techSpec: "Throughput: 0.2s OCR • Sub-1s ML Demand Forecasting",
      color: "#00BFCC",
    },
    {
      id: "node" as const,
      name: "The Central Cyan Node",
      title: "The Operator at the Center",
      detail:
        "The human is not bypassed; the human is empowered. The central node is the venue manager or operator holding complete veto power. No automated action runs unapproved.",
      techSpec: "Security: Cryptographic Human Review Gate • Slack Connect PIN",
      color: "#00BFCC",
    },
  ];

  return (
    <section id="philosophy" className="relative py-20 md:py-28 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800 mb-4">
          <span>OPERATIONAL PHILOSOPHY // THE OPEN APERTURE</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Why Generic Chatbots Fail: Most AI Tools Add Clutter. We Build Applied Conduits.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              <p>
                In 2024–2026, the market was flooded with conversational wrappers that generate polite text but can’t balance a weekly roster or catch a supplier overcharge.
              </p>
              <p>
                Hospitality groups and regional WA businesses don’t need an AI chatbot arguing about table reservations or hallucinating into General Ledger accounts.
              </p>
              <p className="text-slate-900 font-medium border-l-2 border-[#00BFCC] pl-4 italic">
                “We believe true artificial intelligence in operations should be silent, deterministic, and ruthlessly accountable to human judgment.”
              </p>
            </div>

            {/* Core Architectural Tenets */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="p-1 rounded bg-slate-200 text-slate-800">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Deterministic Boundary Enforcement</h4>
                  <p className="text-xs text-slate-600">
                    Generative models only parse and structure data; financial ledger writes and roster publishes run through strict deterministic logic gates.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="p-1 rounded bg-slate-200 text-slate-800">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Zero Unapproved Mutations</h4>
                  <p className="text-xs text-slate-600">
                    Every automated suggestion is staged as a draft. Venue managers approve via one tap on their existing Slack or mobile device.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-slate-50 border border-slate-200">
                <div className="p-1 rounded bg-slate-200 text-slate-800">
                  <GitCommit className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Senior Practitioner Delivery</h4>
                  <p className="text-xs text-slate-600">
                    Registered in Sydney with active boots-on-the-ground client work in WA. You deal directly with the engineer building your architecture.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-1.5 text-sm font-mono font-bold text-slate-900 hover:text-[#0096A3] transition-colors"
              >
                <span>Read our Security &amp; Control Whitepaper</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Logo Geometry Breakdown */}
          <div className="lg:col-span-6">
            <div className="rounded-xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
              
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00BFCC]" />
                  <span className="text-xs font-mono text-slate-600 font-medium">
                    ARCHITECTURAL BLUEPRINT // SYMBOLIC GEOMETRY
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveSegment("all")}
                  className={`text-[11px] font-mono px-2 py-0.5 rounded transition-colors ${
                    activeSegment === "all"
                      ? "bg-slate-900 text-white font-bold"
                      : "bg-slate-100 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Full Schema
                </button>
              </div>

              {/* Central Vector Canvas */}
              <div className="flex flex-col items-center justify-center py-4 relative">
                <div className="relative p-6 rounded-full bg-slate-50 border border-slate-200">
                  <ApertureLogo
                    className="h-40 w-40 sm:h-48 sm:w-48 transition-transform duration-200"
                    activeSegment={activeSegment}
                    glow={activeSegment !== "all"}
                  />
                </div>
                <span className="mt-3 text-xs font-mono text-slate-500">
                  Select any geometric layer below to isolate its operational function
                </span>
              </div>

              {/* Geometry Points */}
              <div className="space-y-2.5 mt-4">
                {geometryPoints.map((pt) => {
                  const isActive = activeSegment === pt.id;
                  return (
                    <div
                      key={pt.id}
                      onClick={() => setActiveSegment(pt.id)}
                      onMouseEnter={() => setActiveSegment(pt.id)}
                      className={`p-3.5 rounded-lg border transition-all cursor-pointer ${
                        isActive
                          ? "bg-slate-50 border-slate-900 shadow-xs"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: pt.color }}
                          />
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900">{pt.name}</h4>
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold">
                          {isActive ? "ACTIVE LAYER" : "INSPECT"}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-800 mb-0.5">{pt.title}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{pt.detail}</p>
                      <div className="mt-2 pt-1.5 border-t border-slate-200/80 text-[10px] font-mono text-slate-500">
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
