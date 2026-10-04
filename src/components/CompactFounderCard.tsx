"use client";

import React from "react";
import Link from "next/link";
import { MessageSquare, Phone, ArrowRight, ShieldCheck, Award } from "lucide-react";
import ApertureLogo from "./ApertureLogo";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

interface CompactFounderCardProps {
  onOpenAuditModal: () => void;
}

export default function CompactFounderCard({ onOpenAuditModal }: CompactFounderCardProps) {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="founder" className="relative py-20 md:py-24 bg-zinc-50/50 border-b border-zinc-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-white border border-zinc-200/90 p-8 sm:p-12 shadow-xs relative overflow-hidden">
          
          {/* Subtle watermark */}
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-[0.025] pointer-events-none">
            <ApertureLogo size={360} color="#0F172A" />
          </div>

          <div className="relative space-y-6">
            
            {/* Pill Header */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-semibold text-zinc-800">
                <span className="w-2 h-2 rounded-full bg-[#00BFCC]" />
                <span>🇦🇺 🇫🇷 {t.founderCard.badge.toUpperCase()}</span>
              </div>
              <span className="text-xs text-zinc-500 font-medium">
                {t.founderCard.location}
              </span>
            </div>

            {/* Founder Headline & Bio Snippet */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight leading-snug">
                  {t.founderCard.title}
                </h2>
                
                <p className="text-base text-zinc-600 leading-relaxed font-normal">
                  {t.founderCard.p1}
                </p>

                <p className="text-[#0F172A] font-medium border-l-2 border-[#00BFCC] pl-4 italic text-sm sm:text-base leading-relaxed">
                  {t.founderCard.quote}
                </p>
                <div className="text-xs text-zinc-500 font-semibold">
                  {t.founderCard.signature}
                </div>
              </div>

              {/* Direct Access Badges */}
              <div className="lg:col-span-4 space-y-3 bg-zinc-50/70 p-5 rounded-2xl border border-zinc-100">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white border border-zinc-200/80 text-zinc-900 shrink-0">
                    <Phone className="w-4 h-4 text-[#0096A3]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0F172A] block">{t.founderCard.phoneLabel}</span>
                    <a
                      href="tel:+61402472262"
                      className="text-xs font-semibold text-[#0096A3] hover:underline"
                    >
                      0402 472 262
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-zinc-200/50">
                  <div className="p-2 rounded-xl bg-white border border-zinc-200/80 text-zinc-900 shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#0096A3]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0F172A] block">{t.founderCard.humanSignoff}</span>
                    <p className="text-[11px] text-zinc-500">
                      {t.founderCard.humanSignoffDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-zinc-200/50">
                  <div className="p-2 rounded-xl bg-white border border-zinc-200/80 text-zinc-900 shrink-0">
                    <Award className="w-4 h-4 text-[#0096A3]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#0F172A] block">{t.founderCard.grantSupport}</span>
                    <p className="text-[11px] text-zinc-500">
                      {t.founderCard.grantSupportDesc}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Action Row */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-zinc-100">
              <div className="flex items-center gap-3">
                <Link
                  href="/founder"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0F172A] hover:text-[#0096A3] transition-colors group"
                >
                  <span>{language === "en" ? "Read Mallory’s Vision & Story (🇦🇺 EN | 🇫🇷 FR)" : "Découvrir la Vision & le Parcours de Mallory (🇦🇺 EN | 🇫🇷 FR)"}</span>
                  <ArrowRight className="w-4 h-4 text-[#00BFCC] group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://wa.me/61402472262?text=Hi%20Mallory%2C%20I%20run%20a%20venue%20in%20WA%20and%20want%20to%20chat%20about%20automating%20dockets%20and%20admin."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold hover:bg-emerald-100 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{language === "en" ? "Chat on WhatsApp" : "Discuter sur WhatsApp"}</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenAuditModal}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-zinc-900 text-white font-semibold text-xs hover:bg-zinc-800 transition-all shadow-xs"
                >
                  <span>{language === "en" ? "Book 14-Day Audit" : "Réserver l'Audit 14 Jours"}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00BFCC]" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
