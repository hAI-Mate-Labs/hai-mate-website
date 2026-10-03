"use client";

import React, { useState } from "react";
import {
  FileSpreadsheet,
  Users,
  MessageSquare,
  Star,
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  Clock,
  Shield,
  Layers,
  Terminal,
  Activity,
  Receipt,
  PhoneCall,
  Flame,
  ChevronRight
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
        "Answers phone calls and SMS 24/7 with Perth-accented natural voice",
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
    <section id="solutions" className="relative py-20 md:py-32 bg-[#0B0F19] border-b border-[#232F48]">
      
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#00F2FE]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#151D2F] border border-[#232F48] text-xs font-mono text-[#00F2FE] mb-3">
            <span>CORE SOLUTIONS HUB // EMBEDDED CONDUITS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] tracking-tight">
            Applied Agentic Workflows Engineered for Western Australian Venues.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            We don’t replace your team; we eliminate the non-revenue-generating administrative friction so your venue managers can be on the floor delivering hospitality.
          </p>
        </div>

        {/* Grid of 4 Interactive Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((item) => {
            const Icon = item.icon;
            const currentView = activeCardView[item.id] || "spec";

            return (
              <div
                key={item.id}
                className="group rounded-xl bg-[#151D2F] border border-[#232F48] overflow-hidden hover:border-[#00F2FE]/70 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                {/* Card Header */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-[#0B0F19] border border-[#232F48] text-[#00F2FE] group-hover:scale-105 group-hover:border-[#00F2FE]/50 transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#00F2FE] font-bold block">
                          {item.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#FFFFFF]">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Core Description */}
                  <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>

                  {/* Interactive Sub-Tabs: Spec vs Flow vs Payload */}
                  <div className="flex items-center justify-between border-y border-[#232F48] py-2 mb-4 bg-[#0B0F19]/40 -mx-6 sm:-mx-8 px-6 sm:px-8">
                    <span className="text-xs font-mono text-[#94A3B8]">Inspection View:</span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => toggleCardView(item.id, "spec")}
                        className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                          currentView === "spec"
                            ? "bg-[#151D2F] text-[#00F2FE] border border-[#232F48] font-bold"
                            : "text-[#94A3B8] hover:text-[#FFFFFF]"
                        }`}
                      >
                        Feature Spec
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleCardView(item.id, "flow")}
                        className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                          currentView === "flow"
                            ? "bg-[#151D2F] text-[#00F2FE] border border-[#232F48] font-bold"
                            : "text-[#94A3B8] hover:text-[#FFFFFF]"
                        }`}
                      >
                        Workflow Steps
                      </button>
                      <button
                        type="button"
                        onClick={() => toggleCardView(item.id, "payload")}
                        className={`px-2.5 py-1 text-xs font-mono rounded transition-colors ${
                          currentView === "payload"
                            ? "bg-[#151D2F] text-[#00F2FE] border border-[#232F48] font-bold"
                            : "text-[#94A3B8] hover:text-[#FFFFFF]"
                        }`}
                      >
                        JSON Telemetry
                      </button>
                    </div>
                  </div>

                  {/* Tab Body */}
                  <div className="min-h-[140px]">
                    {currentView === "spec" && (
                      <div className="space-y-2.5 animate-in fade-in duration-150">
                        {item.highlights.map((bullet, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F8FAFC]">
                            <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-[#00F2FE]/10 text-[#00F2FE] flex items-center justify-center border border-[#00F2FE]/30">
                              <Check className="w-2.5 h-2.5" />
                            </div>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {currentView === "flow" && (
                      <div className="space-y-2 animate-in fade-in duration-150">
                        {item.flowSteps.map((step, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-mono bg-[#0B0F19] p-2 rounded border border-[#232F48]">
                            <span className="text-[#00F2FE] font-bold w-5">{idx + 1}.</span>
                            <span className="text-[#FFFFFF] font-semibold">{step.label}:</span>
                            <span className="text-[#94A3B8] truncate">{step.detail}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {currentView === "payload" && (
                      <div className="bg-[#0B0F19] rounded p-3 text-[11px] font-mono text-cyan-200 border border-[#232F48] overflow-x-auto animate-in fade-in duration-150">
                        <pre className="text-slate-300">{item.samplePayload}</pre>
                      </div>
                    )}
                  </div>

                  {/* Integration Tags */}
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-[#94A3B8] mr-1">Integrates:</span>
                    {item.integrations.map((badge) => (
                      <span
                        key={badge}
                        className="text-xs font-mono px-2.5 py-1 rounded bg-[#0B0F19] text-[#F8FAFC] border border-[#232F48]"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Metric & Direct Action */}
                <div className="px-6 sm:px-8 py-4 bg-[#0F172A] border-t border-[#232F48] flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <Activity className="w-3.5 h-3.5 text-[#00F2FE]" />
                    <span>{item.metric}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenAuditModal(item.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-[#00F2FE] hover:text-[#FFFFFF] transition-colors"
                  >
                    <span>Audit This Workflow</span>
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
