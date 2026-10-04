"use client";

import React from "react";
import {
  Target,
  Compass,
  TrendingUp,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Receipt,
  Users,
  PhoneCall,
  CalendarCheck,
  Network,
  CreditCard,
} from "lucide-react";
import ApertureLogo from "./ApertureLogo";
import { useLanguage } from "@/context/LanguageContext";

interface CompanyOverviewProps {
  onOpenAuditModal: () => void;
}

export default function CompanyOverview({ onOpenAuditModal }: CompanyOverviewProps) {
  const { t, language } = useLanguage();
  const c = t.companyOverview;

  const serviceIcons = [Receipt, Users, PhoneCall, CalendarCheck];

  return (
    <section id="overview" className="relative py-20 md:py-28 bg-zinc-50/60 dark:bg-[#0F172A] border-y border-zinc-200/80 dark:border-[#232F48] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#151D2F] border border-zinc-200 dark:border-[#232F48] text-xs font-bold text-[#0F172A] dark:text-[#F8FAFC] shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#0096A3] dark:bg-[#00F2FE]" />
            <span>{c.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#0F172A] dark:text-[#F8FAFC] leading-tight">
            {c.titleStart}{" "}
            <span className="relative inline-block text-[#0096A3] dark:text-[#00F2FE]">
              {c.titleAccent}
              <span className="absolute bottom-1 left-0 w-full h-2.5 bg-[#00BFCC]/20 -z-10 rounded-xs" />
            </span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-600 dark:text-[#94A3B8] font-normal leading-relaxed">
            {c.subtitle}
          </p>
        </div>

        {/* 4 Pillars Grid (2x2 on desktop, 1 col on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* 1. PURPOSE */}
          <div className="rounded-3xl bg-white dark:bg-[#151D2F] border border-zinc-200/90 dark:border-[#232F48] p-7 sm:p-9 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200/80 dark:border-amber-700/50">
                    <Target className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC] block">
                      {c.purpose.tag}
                    </span>
                    <span className="text-[11px] text-zinc-500 dark:text-[#94A3B8] font-medium">
                      {c.purpose.subtag}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-800">
                  {language === "en" ? "Why We Exist" : "Notre Raison d'Être"}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] dark:text-[#F8FAFC] leading-snug">
                {c.purpose.headline}
              </h3>

              <p className="text-sm text-zinc-600 dark:text-[#94A3B8] leading-relaxed font-normal">
                {c.purpose.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-[#232F48] space-y-2.5">
              {c.purpose.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-[#F8FAFC]">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. MISSION */}
          <div className="rounded-3xl bg-white dark:bg-[#151D2F] border border-zinc-200/90 dark:border-[#232F48] p-7 sm:p-9 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-[#00F2FE] border border-cyan-200/80 dark:border-cyan-700/50">
                    <Compass className="w-5 h-5 text-[#0096A3] dark:text-[#00F2FE]" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC] block">
                      {c.mission.tag}
                    </span>
                    <span className="text-[11px] text-zinc-500 dark:text-[#94A3B8] font-medium">
                      {c.mission.subtag}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-cyan-800 dark:text-cyan-300 bg-cyan-50 dark:bg-cyan-950/50 px-2.5 py-1 rounded-full border border-cyan-200 dark:border-cyan-800">
                  {language === "en" ? "How We Do It" : "Notre Méthode"}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] dark:text-[#F8FAFC] leading-snug">
                {c.mission.headline}
              </h3>

              <p className="text-sm text-zinc-600 dark:text-[#94A3B8] leading-relaxed font-normal">
                {c.mission.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-[#232F48] space-y-2.5">
              {c.mission.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-[#F8FAFC]">
                  <CheckCircle2 className="w-4 h-4 text-[#0096A3] dark:text-[#00F2FE] shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. VALUE */}
          <div className="rounded-3xl bg-white dark:bg-[#151D2F] border border-zinc-200/90 dark:border-[#232F48] p-7 sm:p-9 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-700/50">
                    <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC] block">
                      {c.value.tag}
                    </span>
                    <span className="text-[11px] text-zinc-500 dark:text-[#94A3B8] font-medium">
                      {c.value.subtag}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                  {language === "en" ? "What You Gain" : "Votre Retour sur Investissement"}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] dark:text-[#F8FAFC] leading-snug">
                {c.value.headline}
              </h3>

              <p className="text-sm text-zinc-600 dark:text-[#94A3B8] leading-relaxed font-normal">
                {c.value.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-[#232F48] space-y-2.5">
              {c.value.bullets.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-[#F8FAFC]">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4. WHAT WE OFFER */}
          <div id="solutions" className="rounded-3xl bg-white dark:bg-[#151D2F] border border-zinc-200/90 dark:border-[#232F48] p-7 sm:p-9 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between scroll-mt-28">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border border-indigo-200/80 dark:border-indigo-700/50">
                    <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC] block">
                      {c.offer.tag}
                    </span>
                    <span className="text-[11px] text-zinc-500 dark:text-[#94A3B8] font-medium">
                      {c.offer.subtag}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-indigo-800 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/50 px-2.5 py-1 rounded-full border border-indigo-200 dark:border-indigo-800">
                  {language === "en" ? "4 Turnkey Services" : "4 Conduits Clés en Main"}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] dark:text-[#F8FAFC] leading-snug">
                {c.offer.headline}
              </h3>

              {/* 4 Services List */}
              <div className="space-y-2.5 pt-1">
                {c.offer.services.map((service, idx) => {
                  const SIcon = serviceIcons[idx] || Layers;
                  return (
                    <div
                      key={service.num}
                      className="p-3 rounded-2xl bg-zinc-50/80 dark:bg-[#0B0F19] border border-zinc-200/70 dark:border-[#232F48] flex items-start gap-3 hover:bg-zinc-100/70 dark:hover:bg-[#1E293B] transition-colors"
                    >
                      <div className="p-1.5 rounded-lg bg-white dark:bg-[#151D2F] border border-zinc-200 dark:border-[#232F48] text-[#0F172A] dark:text-[#F8FAFC] shadow-2xs shrink-0 mt-0.5">
                        <SIcon className="w-3.5 h-3.5 text-[#0096A3] dark:text-[#00F2FE]" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-xs font-bold text-[#0F172A] dark:text-[#F8FAFC] block">
                          {service.title}
                        </span>
                        <p className="text-[11px] text-zinc-500 dark:text-[#94A3B8] leading-snug">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-100 dark:border-[#232F48] flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0F172A] dark:bg-[#00F2FE] text-white dark:text-[#0B0F19] text-xs font-bold hover:bg-zinc-800 dark:hover:bg-[#38bdf8] transition-all shadow-2xs cursor-pointer"
              >
                <span>{c.quickAuditCta}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00BFCC] dark:text-[#0B0F19]" />
              </button>

              <a
                href="#simulator"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-white dark:bg-[#151D2F] border border-zinc-200 dark:border-[#232F48] text-xs font-semibold text-zinc-700 dark:text-[#F8FAFC] hover:bg-zinc-50 dark:hover:bg-[#1E293B] transition-colors text-center shadow-2xs"
              >
                <span>{c.quickScannerCta}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Platform Defensibility & Future Scale Blocks */}
        <div className="mt-8 rounded-3xl bg-white dark:bg-[#151D2F] border border-zinc-200/90 dark:border-[#232F48] p-7 sm:p-9 shadow-xs transition-colors duration-200">
          <div className="max-w-2xl mb-6">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0096A3] dark:text-[#00F2FE] block mb-1">
              {c.offer.defensibilityTitle}
            </span>
            <p className="text-sm text-zinc-600 dark:text-[#94A3B8] font-normal">
              {c.offer.defensibilitySubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 1. Wholesale Benchmark Network */}
            <div className="p-6 rounded-2xl bg-zinc-50/80 dark:bg-[#0B0F19] border border-zinc-200/80 dark:border-[#232F48] flex flex-col justify-between hover:border-[#00BFCC]/40 transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0096A3] dark:text-[#00F2FE] bg-[#00BFCC]/10 px-2.5 py-1 rounded-full border border-[#00BFCC]/20">
                    {c.offer.benchmarkNetwork.tag}
                  </span>
                  <Network className="w-4 h-4 text-[#0096A3] dark:text-[#00F2FE]" />
                </div>
                <h4 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                  {c.offer.benchmarkNetwork.title}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-[#94A3B8] leading-relaxed font-normal">
                  {c.offer.benchmarkNetwork.desc}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-zinc-200/60 dark:border-[#232F48] flex items-center justify-between text-[11px] text-zinc-500 dark:text-[#94A3B8] font-medium">
                <span>{language === "en" ? "Data Moat • Continuous Ingestion" : "Moat Données • Ingestion Continue"}</span>
                <span className="text-[#0096A3] dark:text-[#00F2FE] font-semibold">{language === "en" ? "Active Defense" : "Défense Active"}</span>
              </div>
            </div>

            {/* 2. One-Tap Accounts Payable */}
            <div className="p-6 rounded-2xl bg-zinc-50/80 dark:bg-[#0B0F19] border border-zinc-200/80 dark:border-[#232F48] flex flex-col justify-between hover:border-[#00BFCC]/40 transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
                    {c.offer.instantSettlement.tag}
                  </span>
                  <CreditCard className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h4 className="text-lg font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                  {c.offer.instantSettlement.title}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-[#94A3B8] leading-relaxed font-normal">
                  {c.offer.instantSettlement.desc}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-zinc-200/60 dark:border-[#232F48] flex items-center justify-between text-[11px] text-zinc-500 dark:text-[#94A3B8] font-medium">
                <span>{language === "en" ? "Fintech Multiple Ready • B2B Settlement" : "Prêt Fintech • Règlement B2B"}</span>
                <span className="text-emerald-700 dark:text-emerald-400 font-semibold">{language === "en" ? "Instant Execution" : "Exécution Immédiate"}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
