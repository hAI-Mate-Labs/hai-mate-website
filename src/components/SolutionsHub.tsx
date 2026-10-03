"use client";

import React, { useState } from "react";
import {
  Users,
  Star,
  Check,
  ArrowRight,
  Activity,
  Receipt,
  PhoneCall
} from "lucide-react";

interface SolutionsHubProps {
  onOpenAuditModal: (solutionTitle?: string) => void;
}

export default function SolutionsHub({ onOpenAuditModal }: SolutionsHubProps) {
  const [activeCardView, setActiveCardView] = useState<{ [key: string]: "spec" | "flow" | "payload" }>({
    boh: "spec",
    labor: "spec",
    foh: "spec",
    sentinel: "spec",
  });

  const toggleCardView = (cardId: string, view: "spec" | "flow" | "payload") => {
    setActiveCardView((prev) => ({ ...prev, [cardId]: view }));
  };

  const solutions = [
    {
      id: "boh",
      title: "BOH Procurement & Invoice Processing",
      category: "Back-of-House Automation",
      icon: Receipt,
      description:
        "Optical Character Recognition (OCR) combined with autonomous parsing agents. Automatically checks line-item supplier pricing against contracts and updates Xero/MYOB ledgers in real time.",
      highlights: [
        "Eliminates 100% of manual paper docket and PDF invoice data entry",
        "Flags stealth price creeps on fresh produce, seafood, and liquor contracts",
        "Staged drafts in Xero/MYOB requiring single-click manager sign-off",
      ],
      integrations: ["Xero", "MYOB", "PDF / OCR", "Gmail / Outlook"],
      metric: "0.2s Parsing Latency • 99.8% Field Extraction",
      flowSteps: [
        { label: "Docket Ingestion", detail: "Scan from mobile camera or supplier PDF email" },
        { label: "Line-Item Match", detail: "Cross-checks prices vs Master Supplier Contract" },
        { label: "Draft Generation", detail: "Creates balanced draft AP bill with account codes" },
        { label: "Approval Gate", detail: "Manager approves via Slack or web console" },
      ],
      samplePayload: `{
  "supplier": "Bannister Downs Dairy",
  "docket_id": "DOCK-10492",
  "contract_variance": "0.00 AUD (Compliant)",
  "xero_bill_status": "DRAFT_READY_FOR_APPROVAL",
  "gl_account": "310 - Cost of Goods: Dairy"
}`,
    },
    {
      id: "labor",
      title: "Dynamic Labor & Roster Optimization",
      category: "Margin & Wage Control",
      icon: Users,
      description:
        "POS-integrated machine learning models predicting shift surges from local weather, reservations, and events. Protects hospitality profit margins against penalty-rate blowouts.",
      highlights: [
        "Guards the 33% hospitality wage ratio in real time",
        "Ingests Bureau of Meteorology (BOM) rainfall/heat alerts for WA postcodes",
        "Predicts trade volume deltas before costly penalty-rate shifts commence",
      ],
      integrations: ["Lightspeed", "Square", "Deputy", "BOM Weather API"],
      metric: "3%–5% Direct Labor Cost Protection",
      flowSteps: [
        { label: "Hourly POS Pull", detail: "Pulls sales cadence directly from Lightspeed or Square" },
        { label: "Weather & Event ML", detail: "Correlates Optus Stadium events & BOM weather" },
        { label: "Shift Threshold Warning", detail: "Alerts when labor exceeds 33% target threshold" },
        { label: "Roster Recommendation", detail: "Suggests floor adjustments with 1-click execution" },
      ],
      samplePayload: `{
  "venue": "Northbridge Taphouse",
  "current_labor_pct": "34.6% (Surge Warning)",
  "bom_forecast": "Rain squall 17:00-21:00 (Perth)",
  "recommended_action": "Trim 1 floor runner from 18:00",
  "projected_savings": "$348.00 AUD tonight"
}`,
    },
    {
      id: "foh",
      title: "Front-of-House Communication Agents",
      category: "Revenue & Guest Inquiries",
      icon: PhoneCall,
      description:
        "Conversational text and voice booking agents capturing after-hours reservations and table inquiries, recapturing 10–15% in lost booking revenue.",
      highlights: [
        "Answers phone calls and SMS 24/7 with natural conversational flow",
        "Direct calendar synchronization with SevenRooms, OpenTable, and Resy",
        "Handles function pack inquiries, dietary questions, and large table deposits",
      ],
      integrations: ["SevenRooms", "OpenTable", "Twilio Voice", "SMS Gateway"],
      metric: "10%–15% Recaptured Booking Revenue",
      flowSteps: [
        { label: "After-Hours Call/SMS", detail: "Guest calls during prep or late night after close" },
        { label: "Intelligent Booking Concierge", detail: "Answers instant availability and seating zones" },
        { label: "Dietary & Deposit Protocol", detail: "Captures card pre-authorizations securely" },
        { label: "Confirmation & Diary Lock", detail: "Direct commit to booking system + SMS confirmation" },
      ],
      samplePayload: `{
  "caller": "+61 412 *** 890",
  "intent": "Function Inquiry / 14 Guests",
  "status": "TENTATIVE_HOLD_CREATED",
  "system": "SevenRooms API v2",
  "action": "Sent private dining brochure & deposit link"
}`,
    },
    {
      id: "sentinel",
      title: "Reputation & Review Sentinel",
      category: "Brand Protection & Feedback",
      icon: Star,
      description:
        "Multi-platform review aggregator with sentiment classification, drafting context-aware responses and surfacing service bottlenecks early.",
      highlights: [
        "Unifies Google Reviews, TripAdvisor, OpenTable, and Facebook in one stream",
        "Instant Slack notification for any rating below 4 stars with Root-Cause analysis",
        "Pre-drafts human-voiced responses referencing specific dishes and staff members",
      ],
      integrations: ["Google Business", "TripAdvisor", "OpenTable", "Slack Alerts"],
      metric: "Sub-2 min Alert on Detractor Reviews",
      flowSteps: [
        { label: "Cross-Platform Listen", detail: "Aggregates new public reviews every 5 minutes" },
        { label: "Sentiment & Category Tag", detail: "Isolates issues: Kitchen delay, Sound levels, Service" },
        { label: "Manager Intervention", detail: "Surfaces critical reviews immediately to Slack #alerts" },
        { label: "Human-Approved Response", detail: "GM approves tailored response with 1 click" },
      ],
      samplePayload: `{
  "platform": "Google Reviews (Perth CBD)",
  "rating": 2,
  "issue_detected": "Steak temperature & 35min wait time",
  "slack_channel": "#venue-alerts",
  "ai_draft": "Ready for GM review with comp offer code"
}`,
    },
  ];

  return (
    <section id="solutions" className="relative py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800 mb-3">
            <span>CORE SOLUTIONS // APPLIED CONDUITS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Applied Agentic Workflows Engineered for Western Australian Venues.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            We don’t replace your team; we eliminate the non-revenue-generating administrative friction so your venue managers can be on the floor delivering hospitality.
          </p>
        </div>

        {/* Grid of 4 Minimalist White Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((item) => {
            const Icon = item.icon;
            const currentView = activeCardView[item.id] || "spec";

            return (
              <div
                key={item.id}
                className="group rounded-xl bg-white border border-slate-200 overflow-hidden hover:border-slate-400 transition-all duration-200 shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                {/* Card Header */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-slate-100 text-slate-900 border border-slate-200 group-hover:bg-[#0F172A] group-hover:text-white transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[#0096A3] font-bold block">
                          {item.category}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Core Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Sub-Tabs: Spec vs Flow vs Payload */}
                  <div className="flex items-center justify-between border-y border-slate-100 py-2 mb-4 bg-slate-50/70 -mx-6 sm:-mx-8 px-6 sm:px-8">
                    <span className="text-xs font-mono text-slate-500">View:</span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => toggleCardView(item.id, "spec")}
                        className={`px-2 py-0.5 text-xs font-mono rounded transition-colors ${
                          currentView === "spec"
                            ? "bg-white text-slate-900 border border-slate-200 font-bold shadow-2xs"
                            : "text-slate-500 hover:text-slate-900"
                        }`}
                      >
                        Feature Spec
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleCardView(item.id, "flow")}
                        className={`px-2 py-0.5 text-xs font-mono rounded transition-colors ${
                          currentView === "flow"
                            ? "bg-white text-slate-900 border border-slate-200 font-bold shadow-2xs"
                            : "text-slate-500 hover:text-slate-900"
                        }`}
                      >
                        Workflow Steps
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleCardView(item.id, "payload")}
                        className={`px-2 py-0.5 text-xs font-mono rounded transition-colors ${
                          currentView === "payload"
                            ? "bg-white text-slate-900 border border-slate-200 font-bold shadow-2xs"
                            : "text-slate-500 hover:text-slate-900"
                        }`}
                      >
                        JSON Telemetry
                      </button>
                    </div>
                  </div>

                  {/* Tab Body */}
                  <div className="min-h-[130px]">
                    {currentView === "spec" && (
                      <div className="space-y-2 animate-in fade-in duration-150">
                        {item.highlights.map((bullet, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <div className="mt-0.5 flex-shrink-0 w-4 h-4 rounded bg-slate-100 text-slate-700 flex items-center justify-center">
                              <Check className="w-2.5 h-2.5" />
                            </div>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {currentView === "flow" && (
                      <div className="space-y-1.5 animate-in fade-in duration-150">
                        {item.flowSteps.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-mono bg-slate-50 p-2 rounded border border-slate-200">
                            <span className="text-slate-900 font-bold w-4">{idx + 1}.</span>
                            <span className="text-slate-900 font-semibold">{step.label}:</span>
                            <span className="text-slate-600 truncate">{step.detail}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {currentView === "payload" && (
                      <div className="bg-slate-50 rounded p-3 text-[11px] font-mono text-slate-800 border border-slate-200 overflow-x-auto animate-in fade-in duration-150">
                        <pre>{item.samplePayload}</pre>
                      </div>
                    )}
                  </div>

                  {/* Integration Tags */}
                  <div className="mt-5 flex flex-wrap items-center gap-1.5">
                    <span className="text-xs font-mono text-slate-500 mr-1">Integrates:</span>
                    {item.integrations.map((badge) => (
                      <span
                        key={badge}
                        className="text-xs font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 sm:px-8 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-700">
                    <Activity className="w-3.5 h-3.5 text-[#00BFCC]" />
                    <span>{item.metric}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenAuditModal(item.title)}
                    className="inline-flex items-center gap-1 text-xs font-bold font-mono text-slate-900 hover:text-[#0096A3]"
                  >
                    <span>Audit Workflow</span>
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
