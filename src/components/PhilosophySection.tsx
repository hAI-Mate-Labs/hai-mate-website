"use client";

import React, { useState } from "react";
import ApertureLogo from "./ApertureLogo";
import { ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";

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
        "Represents your entire venue in harmony—kitchen, front of house, suppliers, till, and bank accounts. Technology should protect and stabilize your team, never complicate service.",
      color: "#0F172A",
    },
    {
      id: "conduit" as const,
      name: "The 45° Conduit",
      title: "Cutting through administrative weight to drive positive margin uplift.",
      detail:
        "The angled cut slicing through the heavy pile of back-office paperwork. It turns messy delivery dockets and shift changes into hours saved and protected profit margins.",
      color: "#00BFCC",
    },
    {
      id: "node" as const,
      name: "The Central Cyan Node",
      title: "The operator at the center. No automated action runs unapproved.",
      detail:
        "You, the venue owner or manager, are always at the heart of every decision. No bill is paid, no roster is posted, and no guest message is dispatched without your simple 1-tap sign-off.",
      color: "#00BFCC",
    },
  ];

  return (
    <section id="philosophy" className="relative py-20 md:py-28 bg-white border-b border-slate-200 overflow-hidden">
      
      {/* Background brand element */}
      <div className="absolute left-0 bottom-0 -translate-x-1/3 translate-y-1/3 opacity-[0.03] pointer-events-none">
        <ApertureLogo size={700} color="#0F172A" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 mb-4">
          <span>THE OPEN APERTURE // OUR PHILOSOPHY</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Most AI Tools Add Clutter. We Build Applied, Reliable Conduits Through Repetitive Back-Office Drag.
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <p>
                Generic chatbots often make more noise than help. You don’t need an AI bot writing poetry or making confusing guesses about your food orders.
              </p>
              <p>
                In a busy venue, you need quiet, reliable tools that do one thing brilliantly: take the boring paperwork off your desk so your team can focus on looking after guests.
              </p>
              <p className="text-slate-900 font-semibold border-l-2 border-[#00BFCC] pl-4 italic">
                “We believe technology should do the heavy lifting in the background while keeping human judgment strictly in control.”
              </p>
            </div>

            {/* Reassuring Pillars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-[#0096A3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Zero Surprises in Your Accounts</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Nothing is committed to Xero or MYOB until your manager taps approval. No accidental charges, ever.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-800">
                  <HeartHandshake className="w-4 h-4 text-[#0096A3]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Partner, No Agency Layers</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    As a solo practitioner, I personally visit your venue, configure your workflows, and remain your direct contact via phone or Slack.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-[#0096A3] transition-colors"
              >
                <span>Book a walk-through for your venue</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Breakdown of Logo Geometry */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-sm">
              
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00BFCC]" />
                  <span className="text-xs font-bold text-slate-700">
                    OUR BRAND MARK: THE OPEN APERTURE
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveSegment("all")}
                  className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                    activeSegment === "all"
                      ? "bg-slate-900 text-white font-bold"
                      : "bg-slate-100 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Show All
                </button>
              </div>

              {/* Central Vector Canvas */}
              <div className="flex flex-col items-center justify-center py-4 relative">
                <div className="relative p-6 rounded-full bg-slate-50 border border-slate-200 shadow-2xs">
                  <ApertureLogo
                    className="h-40 w-40 sm:h-48 sm:w-48 transition-transform duration-200"
                    activeSegment={activeSegment}
                    glow={activeSegment !== "all"}
                  />
                </div>
                <span className="mt-3 text-xs text-slate-500">
                  Tap any part of the mark below to understand what it means for your business:
                </span>
              </div>

              {/* 3 Interactive Points */}
              <div className="space-y-2.5 mt-4">
                {geometryPoints.map((pt) => {
                  const isActive = activeSegment === pt.id;
                  return (
                    <div
                      key={pt.id}
                      onClick={() => setActiveSegment(pt.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isActive
                          ? "bg-slate-50 border-slate-900 shadow-2xs"
                          : "bg-white border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: pt.color }}
                          />
                          <h4 className="text-sm font-bold text-slate-900">{pt.name}</h4>
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                          {isActive ? "SELECTED" : "TAP TO VIEW"}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-800 mb-0.5">{pt.title}</p>
                      <p className="text-xs text-slate-600 leading-relaxed">{pt.detail}</p>
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
