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

interface SolutionsHubProps {
  onOpenAuditModal: (solutionTitle?: string) => void;
}

export default function SolutionsHub({ onOpenAuditModal }: SolutionsHubProps) {
  const solutions = [
    {
      title: "BOH Procurement & Invoice Processing",
      category: "Back-of-House Automation",
      icon: Receipt,
      description:
        "Optical Character Recognition (OCR) combined with autonomous parsing agents. Automatically checks line-item supplier pricing against contracts and updates Xero/MYOB ledgers in real time.",
      highlights: [
        "Saves 4 to 8 hours of weekly manual docket and PDF data entry",
        "Flags price creep on meat, seafood, produce, and beverage contracts",
        "Staged as draft bills in Xero/MYOB ready for 1-tap manager approval",
      ],
      worksWith: ["Xero", "MYOB", "PDF / OCR", "Gmail"],
    },
    {
      title: "Dynamic Labor & Roster Optimization",
      category: "Margin & Wage Protection",
      icon: Users,
      description:
        "POS-integrated machine learning models predicting shift surges from local weather, reservations, and events. Protects hospitality profit margins against penalty-rate blowouts.",
      highlights: [
        "Protects your 33% wage target against quiet shifts and sudden weather shifts",
        "Integrates Bureau of Meteorology rain and heat alerts for your postcode",
        "Suggests shift trims before expensive weekend penalty rates commence",
      ],
      worksWith: ["Lightspeed", "Square", "Deputy", "Weather API"],
    },
    {
      title: "Front-of-House Communication Agents",
      category: "Table Bookings & Revenue",
      icon: PhoneCall,
      description:
        "Conversational text and voice booking agents capturing after-hours reservations and table inquiries, recapturing 10–15% in lost booking revenue.",
      highlights: [
        "Answers phone calls and SMS 24/7 with friendly, natural conversation",
        "Direct calendar synchronization with SevenRooms, OpenTable, and Resy",
        "Captures function pack inquiries, dietaries, and large group deposits",
      ],
      worksWith: ["SevenRooms", "OpenTable", "Resy", "Phone & SMS"],
    },
    {
      title: "Reputation & Review Sentinel",
      category: "Guest Satisfaction",
      icon: Star,
      description:
        "Multi-platform review aggregator with sentiment classification, drafting context-aware responses and surfacing service bottlenecks early.",
      highlights: [
        "Unifies Google Reviews, TripAdvisor, and OpenTable in one dashboard",
        "Instant text/Slack alerts for any rating under 4 stars with root-cause insights",
        "Pre-drafts polite, tailored manager responses ready for quick approval",
      ],
      worksWith: ["Google Reviews", "TripAdvisor", "OpenTable", "Slack"],
    },
  ];

  return (
    <section id="solutions" className="relative py-20 md:py-28 bg-white border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0096A3] block mb-2">
            Applied Agentic Workflows
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Four Applied Solutions Built for WA Venues.
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            We don’t replace your team; we eliminate the non-revenue-generating administrative drag so your managers can focus on the floor.
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
                    <span>Works with:</span>
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
                    className="inline-flex items-center gap-1 text-xs font-bold text-zinc-900 hover:text-[#0096A3] transition-colors whitespace-nowrap pl-2"
                  >
                    <span>Audit this</span>
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
