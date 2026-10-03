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
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

interface HeroProps {
  onOpenAuditModal: () => void;
}

type VenueType = "bakery" | "restaurant" | "pub";

export default function Hero({ onOpenAuditModal }: HeroProps) {
  const { language } = useLanguage();
  const t = translations[language].hero;
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
      ...t.venues.restaurant,
      icon: Utensils,
      till: t.venues.restaurant.till,
      books: t.venues.restaurant.books,
      target: t.venues.restaurant.target,
    },
    bakery: {
      ...t.venues.bakery,
      icon: Croissant,
      till: t.venues.bakery.till,
      books: t.venues.bakery.books,
      target: t.venues.bakery.target,
    },
    pub: {
      ...t.venues.pub,
      icon: Beer,
      till: t.venues.pub.till,
      books: t.venues.pub.books,
      target: t.venues.pub.target,
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
            {t.badge}
          </span>
        </div>

        {/* H1 Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0F172A] leading-[1.12] max-w-4xl mx-auto">
          {t.titleStart}{" "}
          <span className="relative inline-block text-[#0096A3]">
            {t.titleAccent}
            <span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#00BFCC]/20 -z-10 rounded-sm" />
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed font-normal">
          {t.subtitle}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold rounded-full bg-[#0F172A] text-white hover:bg-zinc-800 active:scale-[0.99] transition-all shadow-sm group cursor-pointer"
          >
            <span>{t.bookAuditBtn}</span>
            <ArrowRight className="w-4 h-4 ml-2 text-[#00BFCC] transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#simulator"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-medium rounded-full bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50 transition-all shadow-2xs"
          >
            <span>{t.testScannerBtn}</span>
          </a>
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-zinc-600">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {language === "en"
              ? "Plugs into Lightspeed, Square, Xero & MYOB"
              : "Compatible Lightspeed, Square, Xero & MYOB"}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {language === "en"
              ? "Zero new apps for floor staff"
              : "Zéro nouvelle application pour l'équipe"}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {language === "en"
              ? "100% human sign-off on every action"
              : "Validation humaine à 100% sur chaque action"}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {language === "en"
              ? "50% WA Government co-funding"
              : "50% subventionné par l'État du WA"}
          </span>
        </div>

        {/* Interactive Venue Scenario Switcher */}
        <div className="mt-14 max-w-2xl mx-auto">
          
          {/* Switcher Pills */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xs text-zinc-400 mr-1 hidden sm:inline">
              {language === "en" ? "See live example for:" : "Voir l'exemple en direct :"}
            </span>
            <div className="inline-flex p-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setSelectedVenue("restaurant")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  selectedVenue === "restaurant"
                    ? "bg-white text-[#0F172A] shadow-xs"
                    : "text-zinc-600 hover:text-[#0F172A]"
                }`}
              >
                <Utensils className="w-3.5 h-3.5" />
                <span>{language === "en" ? "Restaurant / Bistro" : "Restaurant / Bistrot"}</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedVenue("bakery")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  selectedVenue === "bakery"
                    ? "bg-white text-[#0F172A] shadow-xs"
                    : "text-zinc-600 hover:text-[#0F172A]"
                }`}
              >
                <Croissant className="w-3.5 h-3.5" />
                <span>{language === "en" ? "Bakery & Kitchen" : "Boulangerie & Fournil"}</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedVenue("pub")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                  selectedVenue === "pub"
                    ? "bg-white text-[#0F172A] shadow-xs"
                    : "text-zinc-600 hover:text-[#0F172A]"
                }`}
              >
                <Beer className="w-3.5 h-3.5" />
                <span>{language === "en" ? "Pub & Brewery" : "Pub & Brasserie"}</span>
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
                  <span className="text-xs font-bold text-[#0F172A] block">
                    {current.name}
                  </span>
                  <span className="text-[11px] text-zinc-500">
                    {language === "en" ? "Live Operational Assistant" : "Assistant Opérationnel en Direct"}
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
                    <span className="text-xs font-bold text-[#0F172A]">
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
                    <span className="text-xs font-bold text-[#0F172A]">
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
                    <span className="text-xs font-bold text-[#0F172A]">
                      {language === "en"
                        ? "Step 3: Human Review Required (Center Anchor)"
                        : "Étape 3 : Validation Humaine Requise (Ancrage Central)"}
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
                        : "bg-[#0F172A] text-white hover:bg-zinc-800 shadow-sm"
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00BFCC]" />
                    <span>
                      {approving
                        ? language === "en" ? "Verifying..." : "Vérification..."
                        : isApproved
                        ? language === "en" ? `Approved by ${current.step3Role} (0.4s)` : `Validé par ${current.step3Role} (0.4s)`
                        : language === "en" ? `Tap to Approve as ${current.step3Role}` : `Valider en 1 clic (${current.step3Role})`}
                    </span>
                  </button>

                  {isApproved && (
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs text-zinc-400 hover:text-zinc-700 flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      {language === "en" ? "Reset" : "Réinitialiser"}
                    </button>
                  )}
                </div>
              </div>

            </div>

            {/* Reassurance footer inside preview */}
            <div className="mt-4 pt-3 border-t border-zinc-200/60 flex items-center justify-between text-[11px] text-zinc-500">
              <span>{current.till} • {current.books}</span>
              <span className="font-medium text-zinc-700">
                {language === "en" ? "100% Human Controlled" : "100% Contrôlé par l'Humain"}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
