"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Printer,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Landmark,
  Building,
  Phone,
  MessageSquare,
} from "lucide-react";
import ApertureLogo from "@/components/ApertureLogo";
import AuditModal from "@/components/AuditModal";

export default function SampleAuditPage() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-zinc-50/50 text-zinc-900 font-sans antialiased">
      {/* Top Action Bar (hidden on print) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200/80 px-4 sm:px-8 py-3.5 flex items-center justify-between print:hidden">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 hover:text-[#0F172A] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to hAI Mate!</span>
          </Link>
          <span className="text-zinc-300">|</span>
          <span className="text-xs font-bold text-zinc-900 hidden sm:inline">
            Executive Audit Teardown Dossier
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-zinc-200 text-xs font-bold text-zinc-800 hover:bg-zinc-100 transition-colors shadow-2xs cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-[#0096A3]" />
            <span>Print / Save as PDF</span>
          </button>

          <button
            type="button"
            onClick={() => setAuditModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#0F172A] text-white text-xs font-bold hover:bg-[#1E293B] transition-all shadow-xs cursor-pointer"
          >
            <span>Book Audit for My Venue</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#00BFCC]" />
          </button>
        </div>
      </header>

      {/* Screen View */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8 print:hidden">
        {/* Document Header Card */}
        <div className="rounded-3xl bg-white border border-zinc-200/90 p-8 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                CONFIDENTIAL DE-IDENTIFIED
              </span>
              <span className="text-xs text-zinc-500 font-mono">
                REF: AUD-WA-2026-COTT
              </span>
            </div>
            <span className="text-xs text-zinc-500 font-semibold">
              Scoped by Mallory Antomarchi • Western Australia
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight">
              14-Day Diagnostic Automation Teardown &amp; WA Grant Scoping
            </h1>
            <p className="text-sm text-zinc-600 leading-relaxed">
              <strong>Target Client:</strong> Cottesloe Beachside Bistro &amp; Kitchen (120 Seats • Bistro &amp; Bar)<br />
              <strong>Audited Stack:</strong> Lightspeed POS • Xero Accounting • Deputy Rostering
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 space-y-1">
              <span className="text-[10px] font-bold uppercase text-zinc-400 block">Identified Annual Drag</span>
              <span className="text-2xl font-black text-red-600">$48,660 / yr</span>
              <p className="text-[11px] text-zinc-500">Recoverable back-office admin &amp; price-creep</p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-100 space-y-1">
              <span className="text-[10px] font-bold uppercase text-zinc-400 block">Weekly Admin Recovered</span>
              <span className="text-2xl font-black text-[#0F172A]">12.0 Hours</span>
              <p className="text-[11px] text-zinc-500">Returned to general manager floor service</p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 space-y-1">
              <span className="text-[10px] font-bold uppercase text-emerald-700 block">Net Payback Speed</span>
              <span className="text-2xl font-black text-emerald-700">11.8 Weeks</span>
              <p className="text-[11px] text-emerald-800">After 50% WA State Government grant rebate</p>
            </div>
          </div>
        </div>

        {/* Section 1: Drag Heatmap */}
        <div className="rounded-3xl bg-white border border-zinc-200/90 p-8 shadow-xs space-y-6">
          <div className="border-b border-zinc-100 pb-3">
            <h2 className="text-lg font-bold text-[#0F172A]">
              1. Back-Office Administrative Drag Heatmap
            </h2>
            <p className="text-xs text-zinc-500">
              Breakdown of manual paperwork hours logged during typical 7-day operating cycle:
            </p>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50/50 flex flex-col sm:flex-row justify-between gap-3">
              <div>
                <span className="text-sm font-bold text-[#0F172A] block">Delivery Docket Line-Item Entry &amp; Price Checks</span>
                <p className="text-xs text-zinc-600">Typing messy sauce-stained receipts into Xero bills every Monday morning.</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-base font-black text-[#0F172A]">5.5 hrs / wk</span>
                <span className="text-xs text-red-600 block font-semibold">$14,300/yr cost</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50/50 flex flex-col sm:flex-row justify-between gap-3">
              <div>
                <span className="text-sm font-bold text-[#0F172A] block">Sunday Penalty Roster Restructuring &amp; Weather Guesswork</span>
                <p className="text-xs text-zinc-600">Floor overstaffed during rain and understaffed during beach weather surges.</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-base font-black text-[#0F172A]">2.5 hrs / wk</span>
                <span className="text-xs text-red-600 block font-semibold">$6,500/yr cost</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50/50 flex flex-col sm:flex-row justify-between gap-3">
              <div>
                <span className="text-sm font-bold text-[#0F172A] block">Unanswered Dinner Reservation Calls &amp; Large Group Chasing</span>
                <p className="text-xs text-zinc-600">Unanswered calls during slammed dinner services leading to lost table bookings.</p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-base font-black text-[#0F172A]">4.0 hrs / wk</span>
                <span className="text-xs text-red-600 block font-semibold">$10,400/yr cost</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Supplier Rate Overcharges Caught */}
        <div className="rounded-3xl bg-white border border-zinc-200/90 p-8 shadow-xs space-y-6">
          <div className="border-b border-zinc-100 pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-[#0F172A]">
                2. Itemized Supplier Rate Overcharges Caught ($17,460 / yr)
              </h2>
              <p className="text-xs text-zinc-500">
                Cross-checking 45 sampled dockets against contracted agreed price schedules:
              </p>
            </div>
            <span className="text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
              4 Discrepancies Caught
            </span>
          </div>

          <div className="border border-zinc-200 rounded-2xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-500 uppercase tracking-wider font-semibold">
                <tr>
                  <th className="p-3">Item Description</th>
                  <th className="p-3">Contract Rate</th>
                  <th className="p-3 text-red-600">Billed Rate</th>
                  <th className="p-3">Monthly Overcharge</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                <tr>
                  <td className="p-3 font-medium text-zinc-900">Local Barramundi Fillets (Skin-on)</td>
                  <td className="p-3 text-zinc-600">$28.50 / kg</td>
                  <td className="p-3 font-bold text-red-600">$31.00 / kg (+$2.50)</td>
                  <td className="p-3 font-bold text-[#0F172A]">$520 / mo</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-zinc-900">Black Angus Grain-Fed Sirloin (YG)</td>
                  <td className="p-3 text-zinc-600">$33.50 / kg</td>
                  <td className="p-3 font-bold text-red-600">$36.50 / kg (+$3.00)</td>
                  <td className="p-3 font-bold text-[#0F172A]">$495 / mo</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-zinc-900">Pure Dairy Whipping Cream (2L Jugs)</td>
                  <td className="p-3 text-zinc-600">$10.50 / jug</td>
                  <td className="p-3 font-bold text-red-600">$11.80 / jug (+$1.30)</td>
                  <td className="p-3 font-bold text-[#0F172A]">$280 / mo</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-zinc-900">Single Malt Craft Kegs (Promotional Rebate)</td>
                  <td className="p-3 text-zinc-600">$290 / keg</td>
                  <td className="p-3 font-bold text-red-600">$330 / keg (Rebate dropped)</td>
                  <td className="p-3 font-bold text-[#0F172A]">$160 / mo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: WA Government Grant Scoping & ROI */}
        <div className="rounded-3xl bg-white border border-zinc-200/90 p-8 shadow-xs space-y-6">
          <div className="border-b border-zinc-100 pb-3">
            <h2 className="text-lg font-bold text-[#0F172A]">
              3. WA State Government (LCF) Grant Co-Funding &amp; Payback Blueprint
            </h2>
            <p className="text-xs text-zinc-500">
              Local Capability Fund Digital Transformation Round co-funding model:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2 text-xs">
              <span className="font-bold text-[#0F172A] block text-sm">Engineering Investment</span>
              <div className="flex justify-between">
                <span className="text-zinc-600">Total Scoped Pipelines:</span>
                <span className="font-semibold text-[#0F172A]">$22,000</span>
              </div>
              <div className="flex justify-between text-emerald-700 font-semibold">
                <span>WA Gov LCF Matched Rebate (50%):</span>
                <span>-$11,000</span>
              </div>
              <div className="pt-2 border-t border-zinc-200 flex justify-between font-bold text-sm text-[#0F172A]">
                <span>Net Venue Investment:</span>
                <span>$11,000</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2 text-xs">
              <span className="font-bold text-[#0F172A] block text-sm">Recovered Value &amp; Payback</span>
              <div className="flex justify-between">
                <span className="text-zinc-600">Admin Hours Recovered:</span>
                <span className="font-semibold text-[#0F172A]">$31,200 / yr</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-600">Supplier Overcharges Caught:</span>
                <span className="font-semibold text-[#0F172A]">$17,460 / yr</span>
              </div>
              <div className="pt-2 border-t border-zinc-200 flex justify-between font-bold text-sm text-emerald-700">
                <span>Projected Net Payback Speed:</span>
                <span>11.8 Weeks</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final Covenant & Action Box */}
        <div className="rounded-3xl bg-[#0F172A] text-white p-8 space-y-6 shadow-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#00BFCC]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#00BFCC]">
                The hAI Mate! 100% Value Guarantee
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Ready to Run a 14-Day Audit for Your Venue?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl">
              If our 14-day diagnostic audit doesn’t uncover at least <strong>3x its value in recoverable paperwork drag or supplier overcharges</strong>, you pay $0. We walk your floor during prep hours—zero disruption to service.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setAuditModalOpen(true)}
              className="px-6 py-3 rounded-full bg-white text-[#0F172A] font-bold text-xs hover:bg-zinc-100 transition-colors shadow-xs"
            >
              Book Audit for My Venue
            </button>

            <a
              href="https://wa.me/61402472262?text=Hi%20Mallory,%20I%20reviewed%20the%20sample%20audit%20report%20and%20want%20to%20discuss%20an%20audit%20for%20my%20venue."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-50 text-emerald-800 font-bold text-xs hover:bg-emerald-100 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Chat on WhatsApp (0402 472 262)</span>
            </a>

            <button
              type="button"
              onClick={handlePrint}
              className="px-5 py-3 rounded-full border border-zinc-700 text-zinc-300 font-semibold text-xs hover:bg-zinc-800 transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Download PDF</span>
            </button>
          </div>
        </div>
      </main>

      {/* Audit Booking Modal */}
      <AuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
        initialSolution="Sample Audit Review"
      />
    </div>
  );
}
