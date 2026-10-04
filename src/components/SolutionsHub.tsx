"use client";

import React from "react";
import {
  Receipt,
  Users,
  PhoneCall,
  Star,
  Check,
  ArrowRight
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

interface SolutionsHubProps {
  onOpenAuditModal: (solutionTitle?: string) => void;
}

export default function SolutionsHub({ onOpenAuditModal }: SolutionsHubProps) {
  const { language } = useLanguage();
  const t = translations[language].solutions;

  const solutions = [
    {
      title: t.card1.title,
      category: t.card1.category,
      icon: Receipt,
      description: t.card1.desc,
      highlights: [t.card1.h1, t.card1.h2, t.card1.h3],
      worksWith: ["Xero", "MYOB", "PDF & Paper Dockets", "Gmail"],
    },
    {
      title: t.card2.title,
      category: t.card2.category,
      icon: Users,
      description: t.card2.desc,
      highlights: [t.card2.h1, t.card2.h2, t.card2.h3],
      worksWith: ["Lightspeed", "Square", "Deputy", "Weather API"],
    },
    {
      title: t.card3.title,
      category: t.card3.category,
      icon: PhoneCall,
      description: t.card3.desc,
      highlights: [t.card3.h1, t.card3.h2, t.card3.h3],
      worksWith: ["SevenRooms", "OpenTable", "Resy", "Phone & SMS"],
    },
    {
      title: t.card4.title,
      category: t.card4.category,
      icon: Star,
      description: t.card4.desc,
      highlights: [t.card4.h1, t.card4.h2, t.card4.h3],
      worksWith: ["Google Reviews", "TripAdvisor", "OpenTable", "Slack"],
    },
  ];

  return (
    <section id="solutions" className="relative py-20 md:py-28 bg-white border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0096A3] block mb-2">
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            {t.title}
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            {t.subtitle}
          </p>
        </div>

        {/* 2x2 Grid of Clean White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white border border-zinc-200/90 p-8 shadow-xs hover:border-zinc-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="p-3 rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-900">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#0096A3] font-bold block">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold text-[#0F172A]">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {item.highlights.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700">
                        <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-zinc-100 text-zinc-800 flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                        </div>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-zinc-500">
                    <span>{language === "en" ? "Works with:" : "Compatible avec :"}</span>
                    {item.worksWith.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-700 font-medium text-[11px]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => onOpenAuditModal(item.title)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0F172A] hover:text-[#0096A3] transition-colors whitespace-nowrap pl-2 cursor-pointer"
                  >
                    <span>{language === "en" ? "Audit this" : "Auditer ceci"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
