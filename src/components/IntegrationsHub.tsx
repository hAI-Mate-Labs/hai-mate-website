"use client";

import React, { useState } from "react";
import {
  Layers,
  CheckCircle2,
  Cpu,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Calendar,
  Users,
  MessageSquare,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import ApertureLogo from "./ApertureLogo";

interface IntegrationsHubProps {
  onOpenAuditModal: () => void;
}

type Category = "all" | "pos" | "accounting" | "rostering" | "reservations" | "comms";

interface IntegrationItem {
  id: string;
  name: string;
  category: Category;
  categoryLabel: string;
  badge: string;
  description: string;
  howItWorks: string;
  popularIn: string;
}

export default function IntegrationsHub({ onOpenAuditModal }: IntegrationsHubProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedToolId, setSelectedToolId] = useState<string>("lightspeed");

  const categories: { id: Category; label: string }[] = [
    { id: "all", label: "All Systems (15+)" },
    { id: "pos", label: "POS & Tills" },
    { id: "accounting", label: "Accounting" },
    { id: "rostering", label: "Rostering & Timesheets" },
    { id: "reservations", label: "Bookings & Tables" },
    { id: "comms", label: "Messaging & Flow" },
  ];

  const integrations: IntegrationItem[] = [
    {
      id: "lightspeed",
      name: "Lightspeed (Kounta)",
      category: "pos",
      categoryLabel: "POS & Tills",
      badge: "Hospitality Standard",
      description: "Direct hourly sales and item product mix sync.",
      howItWorks:
        "We sync your hourly covers and dollar revenue to our demand-forecasting model. When wet weather or quiet trade is predicted, it alerts your floor manager before penalty rates blow out.",
      popularIn: "Cafes, Bistros & Pubs across WA",
    },
    {
      id: "square",
      name: "Square POS",
      category: "pos",
      categoryLabel: "POS & Tills",
      badge: "Quick Service & Bakeries",
      description: "Fast sales extraction and retail tracking.",
      howItWorks:
        "Pulls daily product-mix sales (e.g. croissants vs coffee volume) to predict prep station load, helping head bakers optimize morning bake runs and reduce wastage.",
      popularIn: "Artisan Bakeries & Espresso Bars",
    },
    {
      id: "xero",
      name: "Xero",
      category: "accounting",
      categoryLabel: "Accounting",
      badge: "Primary Accounting Ledger",
      description: "Autonomous draft bill creation & line-item verification.",
      howItWorks:
        "Parsed supplier invoices are staged directly into Xero as draft bills with line-item codes, GST, and delivery docket scans attached—ready for your 1-tap approval. Zero manual data entry.",
      popularIn: "90% of Australian Hospitality SMEs",
    },
    {
      id: "myob",
      name: "MYOB Business",
      category: "accounting",
      categoryLabel: "Accounting",
      badge: "Australian Standard",
      description: "General ledger matching and supplier payment batches.",
      howItWorks:
        "Syncs verified delivery invoices directly against purchase orders and charts of accounts, flagging supplier price creep before end-of-month reconciliation.",
      popularIn: "Multi-site Venues & Hotel Groups",
    },
    {
      id: "deputy",
      name: "Deputy",
      category: "rostering",
      categoryLabel: "Rostering & Timesheets",
      badge: "Shift Management",
      description: "Dynamic labor schedule recommendations.",
      howItWorks:
        "Syncs weather-triggered roster adjustments directly into draft rosters. Alerts venue managers on their phone when wage costs approach 33% of forecasted sales.",
      popularIn: "Hospitality & Retail Groups",
    },
    {
      id: "tanda",
      name: "Tanda",
      category: "rostering",
      categoryLabel: "Rostering & Timesheets",
      badge: "Award & Time Clock",
      description: "Automated timesheet and penalty rate audit.",
      howItWorks:
        "Cross-references till clock-in stamps with scheduled shifts, detecting unauthorized overtime or missed meal breaks before payroll commitments are locked.",
      popularIn: "Pubs, Taverns & Large Kitchens",
    },
    {
      id: "sevenrooms",
      name: "SevenRooms",
      category: "reservations",
      categoryLabel: "Bookings & Tables",
      badge: "Guest Experience",
      description: "VIP guest sync and kitchen prep volume forecasting.",
      howItWorks:
        "Feeds reservation numbers and guest dietary notes into the head chef's prep sheet 24 hours in advance, ensuring optimal meat and seafood ordering.",
      popularIn: "Premium Dining & Coastal Bistros",
    },
    {
      id: "opentable",
      name: "OpenTable / Resy",
      category: "reservations",
      categoryLabel: "Bookings & Tables",
      badge: "Table Booking",
      description: "After-hours conversational booking agent.",
      howItWorks:
        "Captures after-hours phone calls and SMS inquiries, answering table availability, taking deposits, and booking guests directly into your diary without staff interruption.",
      popularIn: "Busy Urban Restaurants",
    },
    {
      id: "whatsapp",
      name: "WhatsApp & SMS",
      category: "comms",
      categoryLabel: "Messaging & Flow",
      badge: "1-Tap Human Approval",
      description: "Instant mobile approval alerts for venue managers.",
      howItWorks:
        "Delivers concise, 1-tap review cards to your phone: 'Barramundi docket parsed. $62.50 overcharge caught. Tap here to approve draft bill in Xero with credit note attached.'",
      popularIn: "Floor Managers & Head Chefs",
    },
    {
      id: "slack",
      name: "Slack Connect",
      category: "comms",
      categoryLabel: "Messaging & Flow",
      badge: "Direct Developer Access",
      description: "Private shared channel with our founder/engineer.",
      howItWorks:
        "Your venue gets a private Slack channel directly with Mallory. Ask questions, request new supplier parsing rules, or report till changes with immediate response.",
      popularIn: "All Managed Retainer Clients",
    },
  ];

  const filtered =
    activeCategory === "all"
      ? integrations
      : integrations.filter((item) => item.category === activeCategory);

  const selectedTool =
    integrations.find((item) => item.id === selectedToolId) || integrations[0];

  return (
    <section id="integrations" className="relative py-20 md:py-28 bg-zinc-50/50 border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-zinc-200/80 mb-3 shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-[#0096A3]" />
            <span className="text-xs font-semibold text-zinc-800 tracking-wide uppercase">
              Seamless Connectivity
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Works With Your Everyday Venue Tools.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600">
            <strong>Zero hardware changes.</strong> You don't need new iPads, new tills, or new accounting software.
            We connect directly into the tools your team already uses.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-[#0F172A] text-white shadow-sm"
                  : "bg-white text-zinc-600 border border-zinc-200 hover:text-[#0F172A] hover:bg-zinc-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Two-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Grid: Tool Selection Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {filtered.map((tool) => {
              const isSelected = tool.id === selectedTool.id;
              return (
                <div
                  key={tool.id}
                  onClick={() => setSelectedToolId(tool.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer text-left ${
                    isSelected
                      ? "bg-white border-[#0F172A] shadow-md ring-2 ring-[#0F172A]/5"
                      : "bg-white border-zinc-200/80 hover:border-zinc-300 shadow-2xs hover:shadow-xs"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-bold text-[#0F172A]">{tool.name}</span>
                    <span className="text-[10px] font-semibold text-zinc-500 bg-zinc-50 px-2 py-0.5 rounded border border-zinc-200/60">
                      {tool.categoryLabel}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                    {tool.description}
                  </p>
                  <div className="mt-3 pt-2 border-t border-zinc-100 flex items-center justify-between text-[11px]">
                    <span className="text-[#0096A3] font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Ready Conduit
                    </span>
                    <span className="text-zinc-400 font-mono text-[10px]">
                      {isSelected ? "Active View" : "Click to view"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Detail Spotlight */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-md space-y-6 relative overflow-hidden">
              
              {/* Subtle aperture watermark */}
              <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 opacity-[0.03] pointer-events-none">
                <ApertureLogo size={300} color="#0F172A" />
              </div>

              <div className="relative space-y-4">
                
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                      Integration Profile
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0F172A] mt-0.5">
                      {selectedTool.name}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold text-[#0096A3] bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-100">
                    {selectedTool.badge}
                  </span>
                </div>

                {/* How hAI Mate Works With It */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#0096A3]" />
                    How hAI Mate! Connects With {selectedTool.name}:
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal bg-zinc-50 p-4 rounded-2xl border border-zinc-200/60">
                    {selectedTool.howItWorks}
                  </p>
                </div>

                {/* Venue context */}
                <div className="pt-2 text-xs text-zinc-500 space-y-1">
                  <span className="font-semibold text-zinc-700">Common Venue Pairing:</span>
                  <p>{selectedTool.popularIn}</p>
                </div>

                {/* Security Guarantee Box */}
                <div className="p-3.5 rounded-2xl bg-[#0F172A] text-white space-y-1">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00BFCC]" />
                    <span className="text-xs font-bold">100% Read/Draft Scoped Access</span>
                  </div>
                  <p className="text-[11px] text-zinc-300 leading-relaxed">
                    We never require raw bank logins or admin passwords. API tokens are strictly scoped to draft
                    creation and reporting reads.
                  </p>
                </div>

                {/* Direct CTA */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onOpenAuditModal}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#0F172A] text-white text-xs sm:text-sm font-semibold hover:bg-[#1E293B] transition-all shadow-xs group cursor-pointer"
                  >
                    <span>Audit Your {selectedTool.name} Setup</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#00BFCC] transition-transform group-hover:translate-x-1" />
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Bottom Banner Reassurance */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-zinc-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-900 shrink-0">
              <Cpu className="w-5 h-5 text-[#0096A3]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0F172A]">Don't see your specific system?</h4>
              <p className="text-xs text-zinc-600">
                We support any system with an open REST API, webhook, or simple CSV/email export (Toast, Clover, QuickBooks, etc.).
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenAuditModal}
            className="px-5 py-2.5 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-semibold transition-colors shrink-0 cursor-pointer"
          >
            Check Compatibility
          </button>
        </div>

      </div>
    </section>
  );
}
