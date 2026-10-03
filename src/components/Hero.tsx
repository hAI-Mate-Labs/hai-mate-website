"use client";

import React, { useState } from "react";
import {
  FileText,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Shield,
  RotateCcw,
  Utensils,
  Croissant,
  Beer
} from "lucide-react";
import ApertureLogo from "./ApertureLogo";

interface HeroProps {
  onOpenAuditModal: () => void;
}

type VenueType = "bakery" | "restaurant" | "pub";

export default function Hero({ onOpenAuditModal }: HeroProps) {
  const [selectedVenue, setSelectedVenue] = useState<VenueType>("restaurant");
  const [approvedState, setApprovedState] = useState<{ [key in VenueType]: boolean }>({
    bakery: false,
    restaurant: false,
    pub: false,
  });
  const [approving, setApproving] = useState(false);

  const handleApprove = () => {
    if (approving) return;
    setApproving(true);
    setTimeout(() => {
      setApprovedState((prev) => ({
        ...prev,
        [selectedVenue]: !prev[selectedVenue],
      }));
      setApproving(false);
    }, 250);
  };

  const handleReset = () => {
    setApprovedState((prev) => ({
      ...prev,
      [selectedVenue]: false,
    }));
  };

  const venueScenarios = {
    restaurant: {
      tag: "Bistro & Restaurant",
      name: "Cottesloe Beachside Bistro",
      icon: Utensils,
      till: "Lightspeed POS",
      books: "Xero Connected",
      target: "33.0% Wage Lock",
      step1Title: "Step 1: Supplier Invoice Scanned via OCR",
      step1Tag: "Fresh Seafood",
      step1Detail:
        "Seafood supplier docket parsed. 14 line items verified against contracted rate. Staged in Xero as ready-to-approve draft bill.",
      step2Title: "Step 2: POS Shift Discrepancy Flagged",
      step2Tag: "Rain Alert",
      step2Detail:
        "Saturday rain forecast + quiet lunch detected on Lightspeed POS. Roster auto-adjusted to preserve 33% wage target (-1 casual shift cut, saves $312).",
      step3Role: "Venue Manager",
      step3Detail:
        "No automated roster cut or ledger post executes without explicit operator signature.",
    },
    bakery: {
      tag: "Bakery & Wholesale Kitchen",
      name: "Mount Lawley Artisan Bakery",
      icon: Croissant,
      till: "Square Register",
      books: "Xero Connected",
      target: "Early Shift Guard",
      step1Title: "Step 1: Ingredient Invoices & Orders Parsed",
      step1Tag: "Flour & Dairy",
      step1Detail:
        "Butter and flour delivery dockets scanned. Catches unannounced $1.20/kg flour price creep. Wholesale cafe standing orders synced.",
      step2Title: "Step 2: Early Morning Penalty Shift Guard",
      step2Tag: "2 AM Shift Check",
      step2Detail:
        "Matches 2 AM baker roster against Saturday wholesale pastry orders. Flags 1.5 excess overtime hours before expensive early morning penalty rates kick in.",
      step3Role: "Head Baker / Owner",
      step3Detail:
        "Nothing enters your accounting ledgers or production batch sheets without owner approval.",
    },
    pub: {
      tag: "Pub & Craft Brewery",
      name: "Fremantle Taphouse & Brewery",
      icon: Beer,
      till: "OrderMate Till",
      books: "MYOB Connected",
      target: "Optus Stadium Surge",
      step1Title: "Step 1: Keg & Food Delivery Dockets Ingested",
      step1Tag: "Keg Discount Match",
      step1Detail:
        "Beer keg delivery matched against tiered volume rebates. Automatically catches $380 missing promotional credit from supplier.",
      step2Title: "Step 2: Event Crowd & Shift Optimization",
      step2Tag: "Event Footy Surge",
      step2Detail:
        "Detects Saturday afternoon footy crowds at Optus Stadium. Auto-suggests +2 casual bar staff from 17:00 to maximize evening beverage margin.",
      step3Role: "General Manager",
      step3Detail:
        "Manager confirms shift alert directly on their phone with a single tap.",
    },
  };

  const current = venueScenarios[selectedVenue];
  const isApproved = approvedState[selectedVenue];

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-white overflow-hidden">
      
      {/* Subtle background aperture watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.025] pointer-events-none">
        <ApertureLogo size={700} color="#0F172A" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-50 border border-zinc-200/80 mb-6 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#00BFCC]" />
          <span className="text-xs font-medium text-zinc-800">
            For Restaurants, Bakeries, Cafes &amp; Pubs Across WA
          </span>
        </div>

        {/* H1 Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.12] max-w-4xl mx-auto">
          Opening Up Operational Flow While Keeping{" "}
          <span className="relative inline-block text-[#0F172A]">
            Human Judgment
            <span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#00BFCC]/25 -z-10 rounded-sm" />
          </span>{" "}
          at the Center.
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed font-normal">
          We design, deploy, and manage embedded agentic workflows for hospitality groups and growing SMEs across WA. Eliminate manual back-office drag, protect your labor margins, and maintain complete operational control.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold rounded-full bg-zinc-900 text-white hover:bg-zinc-800 active:scale-[0.99] transition-all shadow-sm group"
          >
            <span>Get Your 14-Day AI Readiness Audit</span>
            <ArrowRight className="w-4 h-4 ml-2 text-[#00BFCC] transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-medium rounded-full bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50 transition-all shadow-2xs"
          >
            <span>Explore Applied Solutions</span>
          </a>
        </div>

        {/* Reassurance note */}
        <p className="mt-4 text-xs text-zinc-500 font-normal">
          Works with Lightspeed, Square, Xero, MYOB &amp; Deputy. No IT background or software installation needed.
        </p>

        {/* Interactive Venue Scenario Switcher */}
        <div className="mt-14 max-w-2xl mx-auto">
          
          {/* Switcher Pills */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xs text-zinc-400 mr-1 hidden sm:inline">See live example for:</span>
            <div className="inline-flex p-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setSelectedVenue("restaurant")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all ${
                  selectedVenue === "restaurant"
                    ? "bg-white text-zinc-950 shadow-xs"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                <Utensils className="w-3.5 h-3.5" />
                <span>Restaurant / Bistro</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedVenue("bakery")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all ${
                  selectedVenue === "bakery"
                    ? "bg-white text-zinc-950 shadow-xs"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                <Croissant className="w-3.5 h-3.5" />
                <span>Bakery &amp; Kitchen</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedVenue("pub")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all ${
                  selectedVenue === "pub"
                    ? "bg-white text-zinc-950 shadow-xs"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                <Beer className="w-3.5 h-3.5" />
                <span>Pub &amp; Brewery</span>
              </button>
            </div>
          </div>

          {/* Clean Live Preview Card */}
          <div className="rounded-3xl bg-zinc-50/70 border border-zinc-200/90 p-6 sm:p-8 shadow-xs text-left transition-all">
            
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-zinc-200/70 pb-4 mb-5">
              <div className="flex items-center gap-2.5">
                <ApertureLogo className="h-5 w-5" />
                <div>
                  <span className="text-xs font-bold text-zinc-900 block">
                    {current.name}
                  </span>
                  <span className="text-[11px] text-zinc-500">
                    Live Operational Assistant
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-[#0096A3] bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-100">
                {current.target}
              </span>
            </div>

            {/* 3 Step Workflow */}
            <div className="space-y-3">
              
              {/* Step 1 */}
              <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-md bg-emerald-50 text-emerald-700">
                      <FileText className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-zinc-900">
                      {current.step1Title}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {current.step1Tag}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 pl-6 leading-relaxed">
                  {current.step1Detail}
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-md bg-amber-50 text-amber-700">
                      <AlertTriangle className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-zinc-900">
                      {current.step2Title}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full">
                    {current.step2Tag}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 pl-6 leading-relaxed">
                  {current.step2Detail}
                </p>
              </div>

              {/* Step 3 (Center Anchor - Human Review Required) */}
              <div className="p-4.5 rounded-2xl bg-white border-2 border-zinc-900/10 shadow-xs relative">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-md bg-[#00BFCC]/15 text-[#0096A3]">
                      <Shield className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-zinc-950">
                      Step 3: Human Review Required (Center Anchor)
                    </span>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 pl-6 mb-3">
                  {current.step3Detail}
                </p>

                {/* Interactive Button Badge: "Approved by Venue Manager (0.4s)" */}
                <div className="pl-6 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={handleApprove}
                    disabled={approving}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isApproved
                        ? "bg-emerald-50 text-emerald-800 border border-emerald-300 shadow-xs"
                        : "bg-zinc-900 text-white hover:bg-zinc-800 shadow-sm"
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00BFCC]" />
                    <span>
                      {approving
                        ? "Verifying..."
                        : isApproved
                        ? `Approved by ${current.step3Role} (0.4s)`
                        : `Tap to Approve as ${current.step3Role}`}
                    </span>
                  </button>

                  {isApproved && (
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-zinc-400 hover:text-zinc-700 flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Reset
                    </button>
                  )}
                </div>
              </div>

            </div>

            {/* Reassurance footer inside preview */}
            <div className="mt-4 pt-3 border-t border-zinc-200/60 flex items-center justify-between text-[11px] text-zinc-500">
              <span>{current.till} • {current.books}</span>
              <span className="font-medium text-zinc-700">100% Human Controlled</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
