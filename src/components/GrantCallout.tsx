"use client";

import React, { useState } from "react";
import { Landmark, ArrowRight, Check, DollarSign, Calculator, Clock, Sparkles, ShieldCheck } from "lucide-react";
import ApertureLogo from "./ApertureLogo";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

interface GrantCalloutProps {
  onOpenAuditModal: () => void;
}

export default function GrantCallout({ onOpenAuditModal }: GrantCalloutProps) {
  const { language } = useLanguage();
  const t = translations[language];

  const [selectedStream, setSelectedStream] = useState<1 | 2>(1);
  const [scopeInvestment, setScopeInvestment] = useState<number>(15000);

  // Stream parameters
  const maxGrant = selectedStream === 1 ? 25000 : 50000;
  const grantAmount = Math.min(scopeInvestment * 0.5, maxGrant);
  const netOutOfPocket = scopeInvestment - grantAmount;

  // Estimated annualized savings based on venue automation (approx 2.8x investment)
  const annualSavings = Math.round(scopeInvestment * 2.8);
  const weeklySavings = annualSavings / 52;
  const paybackWeeks = (netOutOfPocket / weeklySavings).toFixed(1);

  const handleStreamChange = (stream: 1 | 2) => {
    setSelectedStream(stream);
    setScopeInvestment(stream === 1 ? 15000 : 30000);
  };

  return (
    <section id="grants" className="relative py-20 md:py-28 bg-white dark:bg-[#0F172A] border-b border-zinc-100 dark:border-[#232F48] transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean Callout Card */}
        <div className="relative rounded-3xl bg-zinc-50/70 dark:bg-[#151D2F] border border-zinc-200/90 dark:border-[#232F48] p-6 sm:p-10 lg:p-12 overflow-hidden shadow-xs transition-colors duration-200">
          
          {/* Subtle watermark */}
          <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 opacity-[0.025] dark:opacity-[0.04] pointer-events-none">
            <ApertureLogo size={400} color="#00BFCC" />
          </div>

          <div className="relative space-y-8">
            
            {/* Header */}
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#0F172A] border border-zinc-200 dark:border-[#232F48] text-xs font-semibold text-zinc-800 dark:text-[#F8FAFC] shadow-2xs">
                <Landmark className="w-3.5 h-3.5 text-[#0096A3] dark:text-[#00F2FE]" />
                <span>{language === "en" ? "WA STATE GOVERNMENT // LOCAL CAPABILITY FUND (LCF)" : "GOUVERNEMENT DU WA // LOCAL CAPABILITY FUND (LCF)"}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                {t.grant.title}
              </h2>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-[#94A3B8] leading-relaxed font-normal">
                {language === "en" ? (
                  <>
                    Eligible Western Australian SMEs can access up to <strong>50% matched funding</strong> through
                    the Local Capability Fund (LCF) Digital Transformation Round. We handle the complete
                    technical scoping, architecture blueprints, and ROI documentation for your application.
                  </>
                ) : (
                  <>
                    Les PME éligibles en Australie-Occidentale peuvent bénéficier d'une prise en charge allant jusqu'à <strong>50%</strong> via
                    le volet transformation numérique du Local Capability Fund (LCF). Nous prenons en charge l'ensemble
                    du cadrage technique, les plans d'architecture et les dossiers de ROI pour votre candidature.
                  </>
                )}
              </p>
            </div>

            {/* Interactive Grant & Payback Calculator */}
            <div className="rounded-3xl bg-white dark:bg-[#0B0F19] border border-zinc-200/90 dark:border-[#232F48] p-6 sm:p-8 shadow-sm space-y-6 transition-colors duration-200">
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-zinc-100 dark:border-[#232F48] gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-zinc-50 dark:bg-[#151D2F] border border-zinc-200 dark:border-[#232F48] text-zinc-900 dark:text-[#F8FAFC]">
                    <Calculator className="w-4 h-4 text-[#0096A3] dark:text-[#00F2FE]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                      {t.grant.calcTitle}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-[#94A3B8]">
                      {language === "en"
                        ? "Toggle grant streams and slide to see your exact net investment and payback speed."
                        : "Changez de volet et ajustez le curseur pour voir votre investissement net et délai de rentabilisation."}
                    </p>
                  </div>
                </div>

                {/* Stream Switcher */}
                <div className="inline-flex p-1 rounded-full bg-zinc-100 dark:bg-[#151D2F] border border-zinc-200 dark:border-[#232F48] text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => handleStreamChange(1)}
                    className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                      selectedStream === 1
                        ? "bg-[#0F172A] text-white dark:bg-[#00F2FE] dark:text-[#0B0F19] shadow-xs font-bold"
                        : "text-zinc-600 dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC]"
                    }`}
                  >
                    {language === "en" ? "Stream 1: Single Venue (Max $25k)" : "Volet 1 : Établissement Unique (Max 25k$)"}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleStreamChange(2)}
                    className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                      selectedStream === 2
                        ? "bg-[#0F172A] text-white dark:bg-[#00F2FE] dark:text-[#0B0F19] shadow-xs font-bold"
                        : "text-zinc-600 dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC]"
                    }`}
                  >
                    {language === "en" ? "Stream 2: Group (Max $50k)" : "Volet 2 : Groupe Multi-Sites (Max 50k$)"}
                  </button>
                </div>
              </div>

              {/* Slider for Project Scope */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="grant-slider" className="text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-[#94A3B8]">
                    {t.grant.sliderLabel}
                  </label>
                  <span className="text-lg font-black font-mono text-[#0F172A] dark:text-[#F8FAFC]">
                    ${scopeInvestment.toLocaleString("en-AU")}
                  </span>
                </div>

                <input
                  id="grant-slider"
                  type="range"
                  min={selectedStream === 1 ? 6000 : 15000}
                  max={selectedStream === 1 ? 40000 : 80000}
                  step={1000}
                  value={scopeInvestment}
                  onChange={(e) => setScopeInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-200 dark:bg-[#232F48] rounded-lg appearance-none cursor-pointer accent-[#0F172A] dark:accent-[#00F2FE]"
                />

                <div className="flex justify-between text-[11px] font-mono text-zinc-400 dark:text-[#64748B]">
                  <span>Min: ${selectedStream === 1 ? "6,000" : "15,000"}</span>
                  <span>{language === "en" ? "Typical Venue Project" : "Projet Restauration Type"}</span>
                  <span>Max: ${selectedStream === 1 ? "40,000" : "80,000"}</span>
                </div>
              </div>

              {/* 4 Outcome Columns - Perfectly Aligned Horizontally & Vertically */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                
                {/* Column 1: Total Scope */}
                <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50 dark:bg-[#151D2F] border border-zinc-200/70 dark:border-[#232F48] flex flex-col justify-between h-full transition-colors duration-200">
                  <div>
                    {/* Fixed Height Label Container to guarantee baseline alignment */}
                    <div className="h-9 sm:h-10 flex items-start">
                      <span className="text-[11px] font-mono text-zinc-500 dark:text-[#94A3B8] uppercase font-semibold leading-tight line-clamp-2">
                        {language === "en" ? "Total Scope:" : "Budget Total :"}
                      </span>
                    </div>
                    {/* Fixed Height Number Container */}
                    <div className="h-9 flex items-baseline">
                      <span className="text-xl sm:text-2xl font-black font-mono text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                        ${scopeInvestment.toLocaleString("en-AU")}
                      </span>
                    </div>
                  </div>
                  <p className="text-[10px] text-zinc-500 dark:text-[#94A3B8] mt-2">
                    {language === "en" ? "Fixed-price custom integration" : "Ingénierie sur-mesure forfaitaire"}
                  </p>
                </div>

                {/* Column 2: 50% Matched Rebate */}
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-500/30 flex flex-col justify-between h-full transition-colors duration-200">
                  <div>
                    {/* Fixed Height Label Container */}
                    <div className="h-9 sm:h-10 flex items-start">
                      <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 uppercase font-semibold leading-tight line-clamp-2">
                        {language === "en" ? "WA Gov 50% Rebate:" : "Subvention WA (50%) :"}
                      </span>
                    </div>
                    {/* Fixed Height Number Container */}
                    <div className="h-9 flex items-baseline">
                      <span className="text-xl sm:text-2xl font-black font-mono text-emerald-700 dark:text-emerald-400 tracking-tight">
                        -${grantAmount.toLocaleString("en-AU")}
                      </span>
                    </div>
                  </div>
                  <p className="text-[10px] text-emerald-800 dark:text-emerald-300 mt-2">
                    {language === "en" ? "State grant contribution" : "Prise en charge subvention d'État"}
                  </p>
                </div>

                {/* Column 3: Net Venue Investment */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#151D2F] border-2 border-[#0F172A] dark:border-[#00F2FE] shadow-2xs flex flex-col justify-between h-full transition-colors duration-200">
                  <div>
                    {/* Fixed Height Label Container */}
                    <div className="h-9 sm:h-10 flex items-start">
                      <span className="text-[11px] font-mono text-zinc-600 dark:text-[#94A3B8] uppercase font-semibold leading-tight line-clamp-2">
                        {language === "en" ? "Net Venue Investment:" : "Investissement Net Venue :"}
                      </span>
                    </div>
                    {/* Fixed Height Number Container */}
                    <div className="h-9 flex items-baseline">
                      <span className="text-xl sm:text-2xl font-black font-mono text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                        ${netOutOfPocket.toLocaleString("en-AU")}
                      </span>
                    </div>
                  </div>
                  <p className="text-[10px] text-zinc-600 dark:text-[#94A3B8] mt-2">
                    {language === "en" ? "Actual investment after grant" : "Investissement net après subvention"}
                  </p>
                </div>

                {/* Column 4: Payback Speed */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#00BFCC]/10 dark:bg-[#00BFCC]/15 border border-[#00BFCC]/30 dark:border-[#00BFCC]/40 flex flex-col justify-between h-full transition-colors duration-200">
                  <div>
                    {/* Fixed Height Label Container */}
                    <div className="h-9 sm:h-10 flex items-start">
                      <span className="text-[11px] font-mono text-[#0096A3] dark:text-[#00F2FE] uppercase font-bold flex items-center gap-1 leading-tight line-clamp-2">
                        <Sparkles className="w-3 h-3 shrink-0" />
                        <span>{language === "en" ? "Estimated Payback:" : "Délai Payback :"}</span>
                      </span>
                    </div>
                    {/* Fixed Height Number Container */}
                    <div className="h-9 flex items-baseline">
                      <span className="text-xl sm:text-2xl font-black font-mono text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                        ~{paybackWeeks} <span className="text-sm font-normal text-zinc-600 dark:text-[#94A3B8]">{t.grant.weeks}</span>
                      </span>
                    </div>
                  </div>
                  <p className="text-[10px] text-zinc-600 dark:text-[#94A3B8] mt-2">
                    {language === "en"
                      ? `Reclaims ~$${annualSavings.toLocaleString("en-AU")}/yr`
                      : `Économise ~$${annualSavings.toLocaleString("en-AU")}/an`}
                  </p>
                </div>

              </div>

              {/* LCF Client Eligibility & Engineering Blueprint Note */}
              <div className="rounded-2xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/90 dark:border-amber-500/30 p-4 text-xs text-amber-950 dark:text-amber-200 space-y-1.5 shadow-2xs transition-colors duration-200">
                <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-300">
                  <ShieldCheck className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0" />
                  <span>
                    {language === "en"
                      ? "LCF Matched Grant Eligibility & Scoping Architecture"
                      : "Éligibilité au Co-Financement LCF & Dossier de Cadrage"}
                  </span>
                </div>
                <p className="leading-relaxed text-amber-900/90 dark:text-amber-200/90 font-normal">
                  {language === "en" ? (
                    <>
                      <strong>Eligibility Note:</strong> The 50% matched co-funding rebate applies directly to eligible Western Australian client entities holding an <strong>active WA ABN</strong>, registered for <strong>GST</strong>, and employing <strong>&lt;200 staff</strong>. <strong>hAI Mate!</strong> acts as your specialized digital engineering provider, delivering complete technical scoping, architecture blueprints, and ROI documentation required for your grant application.
                    </>
                  ) : (
                    <>
                      <strong>Note d'éligibilité :</strong> La subvention de co-financement à hauteur de 50% s'applique directement aux entités clientes d'Australie-Occidentale éligibles détenant un <strong>ABN actif dans le WA</strong>, immatriculées à la <strong>GST</strong>, et comptant <strong>moins de 200 salariés</strong>. <strong>hAI Mate!</strong> intervient comme votre prestataire expert d'ingénierie numérique, vous fournissant le cadrage technique complet, les plans d'architecture et les dossiers de ROI requis pour votre candidature.
                    </>
                  )}
                </p>
              </div>

              {/* Action Strip */}
              <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-600 dark:text-[#94A3B8] font-medium">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> {language === "en" ? "Operating in WA" : "Activité en WA"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> {language === "en" ? "Active ABN" : "Numéro d'entreprise actif"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> {language === "en" ? "<200 Employees" : "< 200 Salariés"}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={onOpenAuditModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0F172A] dark:bg-[#00F2FE] text-white dark:text-[#0B0F19] font-bold text-xs sm:text-sm hover:bg-[#1E293B] dark:hover:bg-[#38bdf8] transition-all shadow-xs cursor-pointer"
                >
                  <span>{t.grant.cta}</span>
                  <ArrowRight className="w-4 h-4 text-[#00BFCC] dark:text-[#0B0F19]" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
