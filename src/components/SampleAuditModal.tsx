"use client";

import React, { useState } from "react";
import {
  X,
  FileText,
  Clock,
  DollarSign,
  AlertTriangle,
  CheckCircle2,
  Landmark,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  Download,
  Building,
  Utensils,
  Share2,
} from "lucide-react";
import ApertureLogo from "./ApertureLogo";

interface SampleAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookAudit: () => void;
}

type TabType = "overview" | "heatmap" | "priceCreep" | "grantRoi";

export default function SampleAuditModal({
  isOpen,
  onClose,
  onBookAudit,
}: SampleAuditModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-zinc-950/70 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/70 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white border border-zinc-200/80 text-zinc-900 shadow-2xs">
              <FileText className="w-4 h-4 text-[#0096A3]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-zinc-950">
                  Sample Executive Audit Teardown
                </span>
                <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                  CONFIDENTIAL DE-IDENTIFIED
                </span>
              </div>
              <p className="text-[11px] text-zinc-500">
                Cottesloe Beachside Bistro &amp; Kitchen (120 Seats • WA) • Scoped by Mallory Antomarchi
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-zinc-900 rounded-full hover:bg-zinc-100 transition-colors"
              aria-label="Close sample audit report"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Selector */}
        <div className="px-6 py-2.5 border-b border-zinc-100 flex items-center gap-2 overflow-x-auto bg-white shrink-0 scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === "overview"
                ? "bg-zinc-950 text-white shadow-xs"
                : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
            }`}
          >
            1. Executive Scorecard
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("heatmap")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === "heatmap"
                ? "bg-zinc-950 text-white shadow-xs"
                : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
            }`}
          >
            2. Admin Bottleneck Heatmap
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("priceCreep")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === "priceCreep"
                ? "bg-zinc-950 text-white shadow-xs"
                : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
            }`}
          >
            3. Caught Supplier Price-Creep ($17.4k/yr)
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("grantRoi")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              activeTab === "grantRoi"
                ? "bg-zinc-950 text-white shadow-xs"
                : "text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100"
            }`}
          >
            4. WA Grant Dossier &amp; 3-Year ROI
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 text-zinc-800">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                    14-Day Diagnostic Summary
                  </span>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    Audited Stack: Lightspeed POS + Xero + Deputy
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-zinc-950">
                  Total Identified Annual Leakage: $48,660 / Year
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  During our 14-day observation period, we observed zero disruption to kitchen prep or floor service. We reviewed 45 historical seafood and produce dockets, matched POS hourly sales against weather, and analyzed after-hours reservation drop-offs.
                </p>
              </div>

              {/* 3 Metric Summary Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl border border-zinc-200 bg-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
                    Admin Hours Recovered
                  </span>
                  <div className="text-2xl font-black text-zinc-950">
                    12.0 Hrs <span className="text-xs font-normal text-zinc-500">/ week</span>
                  </div>
                  <p className="text-xs text-zinc-600">
                    $31,200/yr in recovered general manager time away from back-office paperwork.
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-red-200 bg-red-50/30 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block">
                    Supplier Rate Overcharges
                  </span>
                  <div className="text-2xl font-black text-red-600">
                    $17,460 <span className="text-xs font-normal text-red-500">/ year</span>
                  </div>
                  <p className="text-xs text-zinc-600">
                    Caught unannounced price creep across 3 contracted suppliers (seafood, meats, dairy).
                  </p>
                </div>

                <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/30 space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                    WA Grant Co-Funding
                  </span>
                  <div className="text-2xl font-black text-emerald-700">
                    50% ($11,000)
                  </div>
                  <p className="text-xs text-zinc-600">
                    Local Capability Fund (LCF) co-funding pre-scoped. Net payback in 11.8 weeks.
                  </p>
                </div>
              </div>

              {/* Action Recommendation */}
              <div className="p-4 rounded-2xl bg-zinc-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#00BFCC] block">
                    Recommended Implementation Path
                  </span>
                  <p className="text-xs text-zinc-300">
                    Deploy Conduit 1 (OCR Docket Parser into Xero) &amp; Conduit 2 (Lightspeed Weather Wage Lock).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onBookAudit}
                  className="px-4 py-2 rounded-full bg-white text-zinc-950 font-bold text-xs hover:bg-zinc-100 transition-colors shrink-0"
                >
                  Book Audit for My Venue
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: HEATMAP */}
          {activeTab === "heatmap" && (
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-zinc-950">
                  Weekly Back-Office Paperwork Drag Breakdown
                </h3>
                <p className="text-xs text-zinc-500">
                  Time lost by venue manager and head chef during a typical Monday to Sunday cycle:
                </p>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-zinc-950">
                        1. Delivery Docket Line-Item Entry &amp; Price Checks
                      </span>
                      <span className="text-[10px] font-semibold text-red-700 bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                        High Friction
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600">
                      Typing messy, oil-stained paper receipts from 4 produce and seafood suppliers into Xero bills every Monday morning.
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-base font-black text-zinc-950">5.5 hrs / wk</span>
                    <span className="text-[11px] text-zinc-400 block">$14,300/yr cost</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-zinc-950">
                        2. Sunday Penalty Rate Restructuring &amp; Weather Guesswork
                      </span>
                      <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                        Margin Leakage
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600">
                      Floor overstaffed on rainy Tuesday lunches and understaffed on sunny beach weekends, causing overtime blowout.
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-base font-black text-zinc-950">2.5 hrs / wk</span>
                    <span className="text-[11px] text-zinc-400 block">$6,500/yr cost</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-zinc-950">
                        3. Missed Table Calls &amp; Group Function Deposit Chasing
                      </span>
                      <span className="text-[10px] font-semibold text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded-full">
                        Lost Revenue
                      </span>
                    </div>
                    <p className="text-xs text-zinc-600">
                      Unanswered calls during slammed Friday and Saturday dinner services leading to lost group bookings.
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-base font-black text-zinc-950">4.0 hrs / wk</span>
                    <span className="text-[11px] text-zinc-400 block">$10,400/yr cost</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#00BFCC]/10 border border-[#00BFCC]/30 flex items-center justify-between text-xs text-zinc-900 font-medium">
                <span>Total Identified Administrative Drag:</span>
                <span className="font-bold text-zinc-950 text-sm">12.0 Hours / Week ($31,200 / Year)</span>
              </div>
            </div>
          )}

          {/* TAB 3: PRICE CREEP */}
          {activeTab === "priceCreep" && (
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-zinc-950">
                  Caught Supplier Discrepancies &amp; Overcharges
                </h3>
                <p className="text-xs text-zinc-500">
                  Line-item rate analysis from 45 delivery dockets sampled over 60 days:
                </p>
              </div>

              <div className="border border-zinc-200 rounded-2xl overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-500 uppercase tracking-wider font-semibold">
                    <tr>
                      <th className="p-3">Item Description</th>
                      <th className="p-3">Agreed Rate</th>
                      <th className="p-3 text-red-600">Billed Rate</th>
                      <th className="p-3">Overcharge / Mo</th>
                      <th className="p-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-100">
                    <tr>
                      <td className="p-3 font-medium text-zinc-900">
                        Local Barramundi Fillets (Skin-on)
                        <span className="block text-[10px] text-zinc-400">Supplier: Fresh Ocean Wholesalers</span>
                      </td>
                      <td className="p-3 text-zinc-600">$28.50 / kg</td>
                      <td className="p-3 font-bold text-red-600">$31.00 / kg (+$2.50)</td>
                      <td className="p-3 font-semibold text-zinc-950">$520 / mo</td>
                      <td className="p-3 text-right">
                        <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-700 font-bold text-[10px]">
                          Caught
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-zinc-900">
                        Black Angus Grain-Fed Sirloin (YG)
                        <span className="block text-[10px] text-zinc-400">Supplier: WA Prime Wholesale</span>
                      </td>
                      <td className="p-3 text-zinc-600">$33.50 / kg</td>
                      <td className="p-3 font-bold text-red-600">$36.50 / kg (+$3.00)</td>
                      <td className="p-3 font-semibold text-zinc-950">$495 / mo</td>
                      <td className="p-3 text-right">
                        <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-700 font-bold text-[10px]">
                          Caught
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-zinc-900">
                        Pure Dairy Whipping Cream (2L Jugs)
                        <span className="block text-[10px] text-zinc-400">Supplier: Heritage Mill Co</span>
                      </td>
                      <td className="p-3 text-zinc-600">$10.50 / jug</td>
                      <td className="p-3 font-bold text-red-600">$11.80 / jug (+$1.30)</td>
                      <td className="p-3 font-semibold text-zinc-950">$280 / mo</td>
                      <td className="p-3 text-right">
                        <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-700 font-bold text-[10px]">
                          Caught
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-zinc-900">
                        Single Malt Craft Kegs (Promotional Rebate)
                        <span className="block text-[10px] text-zinc-400">Supplier: Local Brewery Dist</span>
                      </td>
                      <td className="p-3 text-zinc-600">$290 / keg (after rebate)</td>
                      <td className="p-3 font-bold text-red-600">$330 / keg (Rebate dropped)</td>
                      <td className="p-3 font-semibold text-zinc-950">$160 / mo</td>
                      <td className="p-3 text-right">
                        <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-700 font-bold text-[10px]">
                          Caught
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-red-900 block">
                    Net Unnoticed Supplier Creep Recoverable:
                  </span>
                  <span className="text-[11px] text-red-700">
                    Every future delivery will be checked line-by-line against agreed contract prices.
                  </span>
                </div>
                <div className="text-xl font-black text-red-700">
                  $17,460 / year
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: GRANT & ROI */}
          {activeTab === "grantRoi" && (
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-zinc-950">
                  WA State Government Grant Scoping &amp; 3-Year Financial Model
                </h3>
                <p className="text-xs text-zinc-500">
                  Local Capability Fund (LCF) Digital Round matched co-funding structure:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl border border-zinc-200 bg-white space-y-3">
                  <span className="text-xs font-bold text-zinc-950 block border-b border-zinc-100 pb-2">
                    Implementation Investment
                  </span>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-zinc-600">Total Scoped Engineering:</span>
                      <span className="font-semibold text-zinc-950">$22,000</span>
                    </div>
                    <div className="flex justify-between text-emerald-700 font-semibold">
                      <span>WA Gov 50% LCF Grant Rebate:</span>
                      <span>-$11,000</span>
                    </div>
                    <div className="pt-2 border-t border-zinc-100 flex justify-between font-bold text-sm text-zinc-950">
                      <span>Net Venue Investment:</span>
                      <span>$11,000</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl border border-zinc-200 bg-white space-y-3">
                  <span className="text-xs font-bold text-zinc-950 block border-b border-zinc-100 pb-2">
                    Payback &amp; Returns
                  </span>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-zinc-600">Admin Hours Recovered:</span>
                      <span className="font-semibold text-zinc-950">$31,200 / yr</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-600">Supplier Overcharges Caught:</span>
                      <span className="font-semibold text-zinc-950">$17,460 / yr</span>
                    </div>
                    <div className="pt-2 border-t border-zinc-100 flex justify-between font-bold text-sm text-emerald-700">
                      <span>Payback Speed:</span>
                      <span>11.8 Weeks</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dossier status */}
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-[#0096A3]" />
                  <span className="text-zinc-700">
                    <strong>LCF Scoping Dossier:</strong> Architecture diagrams, vendor compliance, and financial projection ready for submission.
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold shrink-0">
                  Pre-Filled
                </span>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-zinc-100 bg-zinc-50/70 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-zinc-500">
            <ShieldCheck className="w-4 h-4 text-[#0096A3]" />
            <span>Backed by our 100% Value Guarantee: 3x ROI or $0.</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-full border border-zinc-200 text-xs font-semibold text-zinc-700 hover:bg-zinc-100 w-full sm:w-auto"
            >
              Close Preview
            </button>
            <button
              type="button"
              onClick={onBookAudit}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-zinc-900 text-white text-xs font-bold hover:bg-zinc-800 transition-all shadow-xs w-full sm:w-auto"
            >
              <span>Book Audit for My Venue</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#00BFCC]" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
