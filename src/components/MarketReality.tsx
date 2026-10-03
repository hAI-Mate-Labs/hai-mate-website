"use client";

import React from "react";
import { ShieldCheck, Clock, TrendingUp, Cpu, Award } from "lucide-react";

interface MarketRealityProps {
  onOpenAuditModal: () => void;
}

export default function MarketReality({ onOpenAuditModal }: MarketRealityProps) {
  const metrics = [
    {
      stat: "4–8 Hrs",
      label: "Saved Every Week",
      headline: "Weekly Admin Eliminated",
      description:
        "Time saved from manual paper dockets, supplier bill entry into Xero, and late-night roster fixes.",
      icon: Clock,
    },
    {
      stat: "100%",
      label: "Operator Control",
      headline: "Strict Human-in-the-Loop",
      description:
        "No automated bill payment, roster cut, or ledger post executes without your explicit 1-tap review.",
      icon: ShieldCheck,
    },
    {
      stat: "0",
      label: "Hardware Changes",
      headline: "Plugs Into Your Stack",
      description:
        "Zero new apps for chefs or floor staff. Plugs quietly into your existing Lightspeed, Square, and Xero.",
      icon: Cpu,
    },
    {
      stat: "50%",
      label: "WA Gov Co-Funded",
      headline: "Local Capability Grant",
      description:
        "Eligible WA venues can claim up to 50% matched funding ($25k–$50k) under the state digital fund.",
      icon: Award,
    },
  ];

  return (
    <section className="relative py-12 md:py-16 bg-zinc-50/60 border-y border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="rounded-3xl bg-white border border-zinc-200/80 p-6 shadow-2xs hover:border-zinc-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-100 text-zinc-900">
                      <Icon className="w-4 h-4 text-[#0096A3]" />
                    </div>
                    <span className="text-[11px] font-bold text-[#0096A3] bg-[#00BFCC]/10 px-2 py-0.5 rounded-full">
                      {metric.label}
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight font-sans mb-1">
                    {metric.stat}
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 mb-1.5">
                    {metric.headline}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                    {metric.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
