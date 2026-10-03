"use client";

import React, { useState } from "react";
import ApertureLogo from "./ApertureLogo";
import { ShieldCheck, Lock, ArrowRight } from "lucide-react";

interface PhilosophySectionProps {
  onOpenAuditModal: () => void;
}

export default function PhilosophySection({ onOpenAuditModal }: PhilosophySectionProps) {
  const [activeSegment, setActiveSegment] = useState<"all" | "outer" | "conduit" | "node">("all");

  const geometryPoints = [
    {
      id: "outer" as const,
      name: "The Outer Circle",
      title: "The complete business ecosystem operating in balance.",
      detail:
        "Represents your entire venue—kitchen, floor staff, suppliers, POS till, and accounting ledgers. Technology should stabilize your team, never complicate service.",
      color: "#09090B",
    },
    {
      id: "conduit" as const,
      name: "The 45° Conduit",
      title: "Cutting through administrative weight to drive positive margin uplift.",
      detail:
        "The angled conduit cutting cleanly through back-office paperwork. It turns unstructured paper dockets and shift surges into structured, margin-protecting workflows.",
      color: "#00BFCC",
    },
    {
      id: "node" as const,
      name: "The Central Cyan Node",
      title: "The operator at the center. No automated action runs unapproved.",
      detail:
        "You, the venue owner or general manager, are always at the center. No bill is paid, no roster is cut, and no message is sent without your explicit 1-tap green light.",
      color: "#00BFCC",
    },
  ];

  return (
    <section id="philosophy" className="relative py-20 md:py-28 bg-zinc-50/50 border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0096A3] block">
              Operational Philosophy
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight">
              Most AI Tools Add Clutter. We Build Applied, Reliable Conduits Through Repetitive Back-Office Drag.
            </h2>

            <div className="space-y-4 text-base text-zinc-600 leading-relaxed font-normal">
              <p>
                Generic conversational chatbots generate polite paragraphs, but they can't cross-check fresh produce pricing or protect your Saturday night labor margins.
              </p>
              <p>
                In hospitality, you don't need a novelty conversational bot. You need deterministic, reliable conduits that do the boring administrative work quietly in the background.
              </p>
              <p className="text-zinc-950 font-semibold border-l-2 border-[#00BFCC] pl-4 italic">
                “We believe artificial intelligence in hospitality should be silent, accurate, and completely accountable to human judgment.”
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-950 hover:text-[#0096A3] transition-colors"
              >
                <span>Book a walk-through for your venue</span>
                <ArrowRight className="w-4 h-4 text-[#00BFCC]" />
              </button>
            </div>
          </div>

          {/* Right Column: Clean Logo Breakdown */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-white border border-zinc-200/90 p-8 shadow-xs">
              
              <div className="flex items-center justify-between border-b border-zinc-100 pb-4 mb-6">
                <span className="text-xs font-bold text-zinc-800">
                  OUR LOGO: THE OPEN APERTURE
                </span>
                <button
                  type="button"
                  onClick={() => setActiveSegment("all")}
                  className={`text-xs px-2.5 py-1 rounded-full transition-colors ${
                    activeSegment === "all"
                      ? "bg-zinc-900 text-white font-semibold"
                      : "bg-zinc-100 text-zinc-600 hover:text-zinc-900"
                  }`}
                >
                  View All
                </button>
              </div>

              {/* Central Vector Canvas */}
              <div className="flex flex-col items-center justify-center py-4">
                <div className="relative p-6 rounded-full bg-zinc-50 border border-zinc-100">
                  <ApertureLogo
                    className="h-36 w-36 sm:h-44 sm:w-44 transition-transform duration-200"
                    activeSegment={activeSegment}
                    glow={activeSegment !== "all"}
                  />
                </div>
                <span className="mt-3 text-xs text-zinc-400">
                  Click any segment below to understand the geometry:
                </span>
              </div>

              {/* 3 Geometry Cards */}
              <div className="space-y-2.5 mt-4">
                {geometryPoints.map((pt) => {
                  const isActive = activeSegment === pt.id;
                  return (
                    <div
                      key={pt.id}
                      onClick={() => setActiveSegment(pt.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                        isActive
                          ? "bg-zinc-50 border-zinc-900 shadow-2xs"
                          : "bg-white border-zinc-100 hover:border-zinc-200"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: pt.color }}
                          />
                          <h4 className="text-sm font-bold text-zinc-900">{pt.name}</h4>
                        </div>
                        <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
                          {isActive ? "ACTIVE" : "VIEW"}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-zinc-800 mb-0.5">{pt.title}</p>
                      <p className="text-xs text-zinc-600 leading-relaxed">{pt.detail}</p>
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
