"use client";

import React, { useState } from "react";
import { XCircle, CheckCircle2, ArrowRight, Clock, DollarSign, Sparkles } from "lucide-react";

interface BeforeAfterProps {
  onOpenAuditModal: () => void;
}

export default function BeforeAfter({ onOpenAuditModal }: BeforeAfterProps) {
  const [viewMode, setViewMode] = useState<"sideBySide" | "before" | "after">("sideBySide");

  const comparisonItems = [
    {
      area: "Supplier Invoices",
      before: "Stacks of sauce-stained dockets on the kitchen desk. 4 to 8 hours lost every Monday manually typing line items into Xero.",
      after: "Snap a quick photo on your phone or forward supplier emails. Line items are verified and staged in Xero as ready-to-approve drafts.",
    },
    {
      area: "Shift Rostering & Wages",
      before: "Floor overstaffed on a rainy Tuesday. Wage costs blow past 35% without warning before the weekend even starts.",
      after: "Connects till sales with local rain and booking forecasts. Alerts managers before penalty rates hit and protects your 33% target.",
    },
    {
      area: "Table & Function Inquiries",
      before: "Phone rings during a slammed dinner service or after hours. Unanswered calls lead to 10%–15% in lost guest bookings.",
      after: "24/7 friendly phone and SMS assistant answers questions, takes table bookings, and captures large group deposits into your diary.",
    },
    {
      area: "Supplier Price Creeps",
      before: "Meat and seafood suppliers raise prices by $1–$2/kg without notification. Goes unnoticed until quarterly P&L reviews.",
      after: "Every single delivery line item is automatically checked against your contracted rate. Overcharges are flagged instantly.",
    },
    {
      area: "Manager Control",
      before: "General managers spend hours stuck in the back office away from guests and staff.",
      after: "Everything runs quietly in the background. Managers review and approve requests with a simple 1-tap phone prompt in seconds.",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-white border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0096A3] block mb-2">
            The Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            How Your Week Changes With hAI Mate!
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            From chaotic paper piles and guessing shifts, to a smooth, automated back-office flow where you remain in complete control.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Before Card */}
          <div className="rounded-3xl bg-zinc-50/70 border border-zinc-200/80 p-8 shadow-xs">
            <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-zinc-200/80">
              <div className="p-1.5 rounded-full bg-rose-50 text-rose-600">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-950">
                  The Old Way (Manual Drag)
                </h3>
                <span className="text-xs text-zinc-500">
                  Hours lost on repetitive paperwork every week
                </span>
              </div>
            </div>

            <div className="space-y-5">
              {comparisonItems.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
                    {item.area}
                  </span>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {item.before}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* After Card (With hAI Mate!) */}
          <div className="rounded-3xl bg-white border-2 border-zinc-900/10 p-8 shadow-md relative overflow-hidden">
            
            {/* Subtle top indicator */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-100">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-full bg-cyan-50 text-[#0096A3]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-950">
                    With hAI Mate! (Automated Flow)
                  </h3>
                  <span className="text-xs text-zinc-500">
                    Quiet, automated support with 1-tap human approval
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                Saves 4–8 Hrs / Wk
              </span>
            </div>

            <div className="space-y-5">
              {comparisonItems.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0096A3] block">
                    {item.area}
                  </span>
                  <p className="text-sm text-zinc-800 leading-relaxed font-medium">
                    {item.after}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-100 flex items-center justify-between">
              <span className="text-xs text-zinc-500">
                Setup connects seamlessly into your existing till and books.
              </span>
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-950 hover:text-[#0096A3] transition-colors"
              >
                <span>Audit my venue</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00BFCC]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
