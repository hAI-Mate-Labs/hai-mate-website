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
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-white dark:bg-[#0F172A] overflow-hidden transition-colors duration-200">
      
      {/* Subtle background aperture watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.025] dark:opacity-[0.04] pointer-events-none">
        <ApertureLogo size={700} color="#00BFCC" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-50 dark:bg-[#151D2F] border border-zinc-200/80 dark:border-[#232F48] mb-6 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#00BFCC]" />
          <span className="text-xs font-medium text-zinc-800 dark:text-[#F8FAFC]">
            {t.badge}
          </span>
        </div>

        {/* H1 Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0F172A] dark:text-[#F8FAFC] leading-[1.12] max-w-4xl mx-auto">
          {t.titleStart}{" "}
          <span className="relative inline-block text-[#0096A3] dark:text-[#00F2FE]">
            {t.titleAccent}
            <span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#00BFCC]/20 -z-10 rounded-sm" />
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-600 dark:text-[#94A3B8] max-w-3xl mx-auto leading-relaxed font-normal">
          {t.subtitle}
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenAuditModal}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold rounded-full bg-[#0F172A] dark:bg-[#00F2FE] text-white dark:text-[#0B0F19] hover:bg-zinc-800 dark:hover:bg-[#38bdf8] active:scale-[0.99] transition-all shadow-sm group cursor-pointer"
          >
            <span>{t.bookAuditBtn}</span>
            <ArrowRight className="w-4 h-4 ml-2 text-[#00BFCC] dark:text-[#0B0F19] transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href="#simulator"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-medium rounded-full bg-white dark:bg-[#151D2F] text-zinc-700 dark:text-[#F8FAFC] border border-zinc-200 dark:border-[#232F48] hover:bg-zinc-50 dark:hover:bg-[#1E293B] transition-all shadow-2xs"
          >
            <span>{t.testScannerBtn}</span>
          </a>
        </div>

        {/* Trust Badges Strip */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-zinc-600 dark:text-[#94A3B8]">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {language === "en"
              ? "Lightspeed • Square • Xero • MYOB • Deputy • Slack"
              : "Compatible Lightspeed • Square • Xero • MYOB • Deputy • Slack"}
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
              ? "50% WA Government co-funding + Federal Tax Boost"
              : "50% subventionné par l'État du WA + Déduction Fiscale"}
          </span>
        </div>

        {/* Interactive Venue Scenario Switcher */}
        <div className="mt-14 max-w-2xl mx-auto">
          
          {/* Switcher Pills */}
          <div className="flex items-center justify-center gap-2 mb-4 max-w-full px-2">
            <span className="text-xs text-zinc-400 dark:text-[#94A3B8] mr-1 hidden sm:inline">
              {language === "en" ? "See live example for:" : "Voir l'exemple en direct :"}
            </span>
            <div className="inline-flex p-1 rounded-full bg-zinc-100 dark:bg-[#151D2F] border border-zinc-200 dark:border-[#232F48] text-xs font-semibold max-w-full overflow-x-auto scrollbar-none">
              <button
                type="button"
                onClick={() => setSelectedVenue("restaurant")}
                className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedVenue === "restaurant"
                    ? "bg-white dark:bg-[#00F2FE] text-[#0F172A] dark:text-[#0B0F19] shadow-xs font-bold"
                    : "text-zinc-600 dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC]"
                }`}
              >
                <Utensils className="w-3.5 h-3.5 shrink-0" />
                <span>Restaurant</span>
                <span className="hidden sm:inline">{language === "en" ? " / Bistro" : " / Bistrot"}</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedVenue("bakery")}
                className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedVenue === "bakery"
                    ? "bg-white dark:bg-[#00F2FE] text-[#0F172A] dark:text-[#0B0F19] shadow-xs font-bold"
                    : "text-zinc-600 dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC]"
                }`}
              >
                <Croissant className="w-3.5 h-3.5 shrink-0" />
                <span>{language === "en" ? "Bakery" : "Boulangerie"}</span>
                <span className="hidden sm:inline">{language === "en" ? " & Kitchen" : " & Fournil"}</span>
              </button>
              <button
                type="button"
                onClick={() => setSelectedVenue("pub")}
                className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                  selectedVenue === "pub"
                    ? "bg-white dark:bg-[#00F2FE] text-[#0F172A] dark:text-[#0B0F19] shadow-xs font-bold"
                    : "text-zinc-600 dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC]"
                }`}
              >
                <Beer className="w-3.5 h-3.5 shrink-0" />
                <span>Pub</span>
                <span className="hidden sm:inline">{language === "en" ? " & Brewery" : " & Brasserie"}</span>
              </button>
            </div>
          </div>

          {/* Clean Live Preview Card */}
          <div className="rounded-3xl bg-zinc-50/70 dark:bg-[#151D2F] border border-zinc-200/90 dark:border-[#232F48] p-6 sm:p-8 shadow-xs text-left transition-all">
            
            {/* Card Header */}
            <div className="flex items-center justify-between border-b border-zinc-200/70 dark:border-[#232F48] pb-4 mb-5">
              <div className="flex items-center gap-2.5">
                <ApertureLogo className="h-5 w-5" />
                <div>
                  <span className="text-xs font-bold text-[#0F172A] dark:text-[#F8FAFC] block">
                    {current.name}
                  </span>
                  <span className="text-[11px] text-zinc-500 dark:text-[#94A3B8]">
                    {language === "en" ? "Live Operational Assistant" : "Assistant Opérationnel en Direct"}
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-[#0096A3] dark:text-[#00F2FE] bg-cyan-50 dark:bg-cyan-950/30 px-2.5 py-0.5 rounded-full border border-cyan-100 dark:border-cyan-800/40">
                {current.target}
              </span>
            </div>

            {/* 3 Step Workflow */}
            <div className="space-y-3">
              
              {/* Step 1 */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#0F172A] border border-zinc-200/80 dark:border-[#232F48] shadow-2xs">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400">
                      <FileText className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                      {current.step1Title}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full">
                    {current.step1Tag}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-[#94A3B8] pl-6 leading-relaxed">
                  {current.step1Detail}
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-2xl bg-white dark:bg-[#0F172A] border border-zinc-200/80 dark:border-[#232F48] shadow-2xs">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400">
                      <AlertTriangle className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                      {current.step2Title}
                    </span>
                  </div>
                  <span className="text-[10px] font-semibold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded-full">
                    {current.step2Tag}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-[#94A3B8] pl-6 leading-relaxed">
                  {current.step2Detail}
                </p>
              </div>

              {/* Step 3 (Center Anchor - Human Review Required) */}
              <div className="p-4.5 rounded-2xl bg-white dark:bg-[#0F172A] border-2 border-zinc-900/10 dark:border-[#00F2FE]/30 shadow-xs relative">
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <div className="p-1 rounded-md bg-[#00BFCC]/15 text-[#0096A3] dark:text-[#00F2FE]">
                      <Shield className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                      {language === "en"
                        ? "Step 3: Human Review Required (Center Anchor)"
                        : "Étape 3 : Validation Humaine Requise (Ancrage Central)"}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-zinc-600 dark:text-[#94A3B8] pl-6 mb-3">
                  {current.step3Detail}
                </p>

                {/* Interactive Button Badge: "Approved by Venue Manager (0.4s)" */}
                <div className="pl-0 sm:pl-6 flex flex-wrap items-center gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={handleApprove}
                    disabled={approving}
                    className={`inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      isApproved
                        ? "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 shadow-xs"
                        : "bg-[#0F172A] dark:bg-[#00F2FE] text-white dark:text-[#0B0F19] hover:bg-zinc-800 dark:hover:bg-[#38bdf8] shadow-sm"
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#00BFCC] dark:text-[#0B0F19] shrink-0" />
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
                      className="text-xs text-zinc-400 hover:text-zinc-700 dark:hover:text-[#F8FAFC] flex items-center gap-1 cursor-pointer py-1"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      {language === "en" ? "Reset" : "Réinitialiser"}
                    </button>
                  )}
                </div>
              </div>

            </div>

            {/* Reassurance footer inside preview */}
            <div className="mt-4 pt-3 border-t border-zinc-200/60 dark:border-[#232F48] flex items-center justify-between text-[11px] text-zinc-500 dark:text-[#94A3B8]">
              <span>{current.till} • {current.books}</span>
              <span className="font-medium text-zinc-700 dark:text-[#F8FAFC]">
                {language === "en" ? "100% Human Controlled" : "100% Contrôlé par l'Humain"}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
