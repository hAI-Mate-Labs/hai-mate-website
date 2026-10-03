"use client";

import React, { useState } from "react";
import {
  Users,
  Star,
  Check,
  ArrowRight,
  Receipt,
  PhoneCall,
  Clock,
  Sparkles,
  Smartphone
} from "lucide-react";
import ApertureLogo from "./ApertureLogo";

interface SolutionsHubProps {
  onOpenAuditModal: (solutionTitle?: string) => void;
}

export default function SolutionsHub({ onOpenAuditModal }: SolutionsHubProps) {
  const [activeCardTab, setActiveCardTab] = useState<{ [key: string]: "benefits" | "steps" | "example" }>({
    boh: "benefits",
    labor: "benefits",
    foh: "benefits",
    sentinel: "benefits",
  });

  const toggleTab = (id: string, tab: "benefits" | "steps" | "example") => {
    setActiveCardTab((prev) => ({ ...prev, [id]: tab }));
  };

  const solutions = [
    {
      id: "boh",
      title: "BOH Procurement & Invoice Processing",
      plainSubtitle: "Kitchen, Bar & Supplier Invoices Handled Automatically",
      category: "Back-of-House Support",
      icon: Receipt,
      description:
        "Optical Character Recognition (OCR) combined with autonomous parsing agents. Automatically checks line-item supplier pricing against contracts and updates Xero/MYOB ledgers in real time.",
      plainDescription:
        "Snap a photo of paper dockets or forward supplier PDFs. It reads every line item, catches unannounced price increases on meat, seafood or produce, and puts draft bills into Xero or MYOB ready for approval.",
      benefits: [
        "Saves 4 to 8 hours of tedious data entry every single week",
        "Flags price creeps: alerts you when a supplier charges more than contracted",
        "Nothing gets paid without your manager's 1-tap sign-off",
      ],
      steps: [
        "1. Snap docket photo on kitchen phone or forward supplier email",
        "2. System matches prices against your agreed supplier rates",
        "3. Draft bill is created in Xero/MYOB with proper tax & account codes",
        "4. Manager taps 'Approve' on their phone in 2 seconds",
      ],
      exampleTitle: "What you see on your phone:",
      exampleContent: "“Kailis Bros Invoice ($2,840.50): 14 line items verified. Price per kg matches contract. Draft created in Xero. [Tap to Approve]”",
      worksWith: ["Xero", "MYOB", "Email", "Phone Camera"],
      badge: "Saves ~6 Hours / Week",
    },
    {
      id: "labor",
      title: "Dynamic Labor & Roster Optimization",
      plainSubtitle: "Smart Rostering That Protects Your Profit Margins",
      category: "Wage & Profit Guard",
      icon: Users,
      description:
        "POS-integrated machine learning models predicting shift surges from local weather, reservations, and events. Protects hospitality profit margins against penalty-rate blowouts.",
      plainDescription:
        "Connects to your till (Lightspeed or Square) and checks local weather, reservations, and local events to forecast how busy you'll be. It warns managers before costly penalty-rate shifts get out of hand.",
      benefits: [
        "Locks in your 33% wage target so you don't overspend on quiet shifts",
        "Checks Bureau of Meteorology rain and heat forecasts automatically",
        "Helps managers make roster adjustments before penalty rates kick in",
      ],
      steps: [
        "1. Reads your hourly till sales directly from Lightspeed or Square",
        "2. Factors in local weather, table bookings, and stadium/weekend events",
        "3. Alerts manager if payroll is heading above your 33% target",
        "4. Suggests specific shift trims (e.g. cut 1 runner early) to save money",
      ],
      exampleTitle: "What you see on your phone:",
      exampleContent: "“Rain Alert for Saturday dinner: Bookings down 12%. Suggest cutting 1 casual floor runner at 18:00 to protect 33% wage target. Saves $312.”",
      worksWith: ["Lightspeed", "Square", "Deputy", "Weather API"],
      badge: "3%–5% Wage Savings",
    },
    {
      id: "foh",
      title: "Front-of-House Communication Agents",
      plainSubtitle: "24/7 Phone & SMS Table Booking Assistant",
      category: "Guest Bookings & Functions",
      icon: PhoneCall,
      description:
        "Conversational text and voice booking agents capturing after-hours reservations and table inquiries, recapturing 10–15% in lost booking revenue.",
      plainDescription:
        "Never miss a booking again because staff were slammed during dinner service or the venue was closed. Answers calls and SMS in a friendly, natural voice, handles dietary questions, and books tables directly into your diary.",
      benefits: [
        "Recaptures 10% to 15% in lost reservations from missed calls",
        "Takes table bookings 24/7 directly into SevenRooms, OpenTable, or Resy",
        "Answers common guest questions (parking, dress code, function packages)",
      ],
      steps: [
        "1. Guest calls or texts while staff are busy or after closing time",
        "2. Friendly automated voice answers instant questions & checks table availability",
        "3. Captures guest details, dietaries, and deposit pre-authorizations",
        "4. Books directly into your reservation book and sends guest an SMS confirmation",
      ],
      exampleTitle: "What a guest hears:",
      exampleContent: "“Hi there! Thanks for calling Cottesloe Beach Club. I can reserve a table for 4 this Friday at 7:30pm out on the deck. May I take your name?”",
      worksWith: ["SevenRooms", "OpenTable", "Resy", "Phone & SMS"],
      badge: "+10%–15% More Bookings",
    },
    {
      id: "sentinel",
      title: "Reputation & Review Sentinel",
      plainSubtitle: "Instant Review Alerts & Polite Response Helper",
      category: "Guest Satisfaction",
      icon: Star,
      description:
        "Multi-platform review aggregator with sentiment classification, drafting context-aware responses and surfacing service bottlenecks early.",
      plainDescription:
        "Brings Google, TripAdvisor, and social reviews together in one place. If a guest leaves a poor rating, your venue manager is notified immediately so you can fix the issue before other customers see it.",
      benefits: [
        "Immediate alert when someone rates your venue below 4 stars",
        "Pinpoints recurring kitchen or service bottlenecks early",
        "Pre-writes polite, helpful responses ready for your manager to review",
      ],
      steps: [
        "1. Monitors Google, TripAdvisor, and OpenTable automatically",
        "2. Identifies the issue (e.g. food wait time or noise level)",
        "3. Sends an immediate text or message to the general manager",
        "4. Manager approves a thoughtful response or reaches out to the guest",
      ],
      exampleTitle: "What you see on your phone:",
      exampleContent: "“Alert: 2-Star Google Review left 5 mins ago re: steak temperature. Pre-drafted response with manager apology ready for your sign-off.”",
      worksWith: ["Google Reviews", "TripAdvisor", "OpenTable", "SMS"],
      badge: "Under 2-Min Alerts",
    },
  ];

  return (
    <section id="solutions" className="relative py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 mb-3">
            <span>SOLUTIONS BUILT FOR VENUES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Applied Automation Engineered for Western Australian Venues.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We don’t replace your team; we eliminate the non-revenue-generating administrative friction so your venue managers can be on the floor delivering hospitality.
          </p>
        </div>

        {/* 4 Clean Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((item) => {
            const Icon = item.icon;
            const currentTab = activeCardTab[item.id] || "benefits";

            return (
              <div
                key={item.id}
                className="group rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 hover:border-slate-400 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-slate-100 text-slate-900 group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#0096A3] font-bold block">
                          {item.category}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 whitespace-nowrap">
                      {item.badge}
                    </span>
                  </div>

                  {/* Plain English Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                    {item.plainDescription}
                  </p>

                  {/* Sub-tabs */}
                  <div className="flex items-center gap-1.5 border-b border-slate-200 pb-2 mb-4 text-xs">
                    <button
                      type="button"
                      onClick={() => toggleTab(item.id, "benefits")}
                      className={`px-3 py-1 rounded-md transition-colors ${
                        currentTab === "benefits"
                          ? "bg-slate-100 text-slate-900 font-bold"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      Key Benefits
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleTab(item.id, "steps")}
                      className={`px-3 py-1 rounded-md transition-colors ${
                        currentTab === "steps"
                          ? "bg-slate-100 text-slate-900 font-bold"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      How It Works
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleTab(item.id, "example")}
                      className={`px-3 py-1 rounded-md transition-colors ${
                        currentTab === "example"
                          ? "bg-slate-100 text-slate-900 font-bold"
                          : "text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      Sample Alert
                    </button>
                  </div>

                  {/* Tab Body */}
                  <div className="min-h-[130px]">
                    {currentTab === "benefits" && (
                      <div className="space-y-2">
                        {item.benefits.map((b, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                            <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center">
                              <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                            </div>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {currentTab === "steps" && (
                      <div className="space-y-1.5">
                        {item.steps.map((s, i) => (
                          <div key={i} className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
                            {s}
                          </div>
                        ))}
                      </div>
                    )}

                    {currentTab === "example" && (
                      <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
                        <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-700">
                          <Smartphone className="w-3.5 h-3.5 text-[#0096A3]" />
                          <span>{item.exampleTitle}</span>
                        </div>
                        <p className="text-xs text-slate-700 italic">
                          {item.exampleContent}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Connects with */}
                  <div className="mt-6 flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-100">
                    <span className="text-xs text-slate-400 mr-1 font-medium">Works with:</span>
                    {item.worksWith.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Setup included in 14-Day Audit
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenAuditModal(item.title)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 hover:text-[#0096A3] transition-colors"
                  >
                    <span>Check this for my venue</span>
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
