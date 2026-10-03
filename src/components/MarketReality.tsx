"use client";

import React from "react";
import { ShieldCheck, Clock, TrendingUp, Cpu, Award } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

interface MarketRealityProps {
  onOpenAuditModal: () => void;
}

export default function MarketReality({ onOpenAuditModal }: MarketRealityProps) {
  const { language } = useLanguage();
  const t = translations[language].marketReality;

  const metrics = [
    {
      stat: t.stat1,
      label: t.label1,
      headline: t.headline1,
      description: t.desc1,
      icon: Clock,
    },
    {
      stat: t.stat2,
      label: t.label2,
      headline: t.headline2,
      description: t.desc2,
      icon: ShieldCheck,
    },
    {
      stat: t.stat3,
      label: t.label3,
      headline: t.headline3,
      description: t.desc3,
      icon: Cpu,
    },
    {
      stat: t.stat4,
      label: t.label4,
      headline: t.headline4,
      description: t.desc4,
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
