"use client";

import React from "react";
import { Check, X, ArrowRight, ShieldCheck } from "lucide-react";
import ApertureLogo from "./ApertureLogo";

interface ComparisonTableProps {
  onOpenAuditModal: () => void;
}

export default function ComparisonTable({ onOpenAuditModal }: ComparisonTableProps) {
  const comparisons = [
    {
      feature: "Setup & Deployment",
      apps: "You spend weeks reading documentation and configuring it yourself",
      agencies: "2–4 months of endless discovery meetings and high overhead",
      haimate: "100% done-for-you and live in your venue within 14 days",
    },
    {
      feature: "Pricing & Grant Eligibility",
      apps: "Hidden per-user fees and costly monthly software subscriptions",
      agencies: "$15,000–$30,000+ upfront retainer fees with ongoing hourly charges",
      haimate: "Transparent fixed fee + 50% WA State Government grant eligible",
    },
    {
      feature: "WA Supplier & Till Fit",
      apps: "Rigid templates that can't read messy food and meat delivery dockets",
      agencies: "Over-engineered systems with features your team will never use",
      haimate: "Trained specifically on your till, Xero codes, and supplier agreements",
    },
    {
      feature: "Who You Deal With",
      apps: "Automated support chatbots and unhelpful ticket queues",
      agencies: "Pitched by senior directors, then handed to junior coordinators",
      haimate: "Direct mobile & private Slack channel with the founder/engineer",
    },
    {
      feature: "Staff Learning Curve",
      apps: "Another app and login for busy chefs and floor managers to juggle",
      agencies: "Mandatory training manuals and disruptive staff workshops",
      haimate: "Zero new software for staff. Simple phone photos & 1-tap approvals",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-white border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0096A3] block mb-2">
            Why a Solo Partner Beats the Alternatives
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            The Right Fit for Independent Venues.
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            Compare how hAI Mate! stacks up against generic off-the-shelf software and bloated agency retainers.
          </p>
        </div>

        {/* Comparison Grid / Table */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Column 1: Generic Apps */}
          <div className="rounded-3xl bg-zinc-50/60 border border-zinc-200/80 p-7 flex flex-col justify-between">
            <div>
              <div className="border-b border-zinc-200/80 pb-4 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  Option 01
                </span>
                <h3 className="text-lg font-bold text-zinc-950">
                  Off-The-Shelf SaaS Apps
                </h3>
                <span className="text-xs text-zinc-500">
                  Rigid, DIY software tools
                </span>
              </div>

              <div className="space-y-5">
                {comparisons.map((c, i) => (
                  <div key={i} className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                      {c.feature}
                    </span>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {c.apps}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-200/60 text-xs text-zinc-400 text-center">
              Requires your time to build &amp; troubleshoot
            </div>
          </div>

          {/* Column 2: Big Agencies */}
          <div className="rounded-3xl bg-zinc-50/60 border border-zinc-200/80 p-7 flex flex-col justify-between">
            <div>
              <div className="border-b border-zinc-200/80 pb-4 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  Option 02
                </span>
                <h3 className="text-lg font-bold text-zinc-950">
                  Big Digital Agencies
                </h3>
                <span className="text-xs text-zinc-500">
                  Expensive corporate retainers
                </span>
              </div>

              <div className="space-y-5">
                {comparisons.map((c, i) => (
                  <div key={i} className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                      {c.feature}
                    </span>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {c.agencies}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-200/60 text-xs text-zinc-400 text-center">
              High overhead &amp; slow delivery
            </div>
          </div>

          {/* Column 3: hAI Mate! (Solo Partner Highlighted) */}
          <div className="rounded-3xl bg-white border-2 border-zinc-950 p-7 shadow-lg relative flex flex-col justify-between">
            
            {/* Top Recommended Tag */}
            <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-zinc-950 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00BFCC]" />
              Dedicated Solo Partner
            </div>

            <div>
              <div className="border-b border-zinc-100 pb-4 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <ApertureLogo className="h-5 w-5" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0096A3]">
                    hAI Mate!
                  </span>
                </div>
                <h3 className="text-lg font-bold text-zinc-950">
                  Applied Solo Partnership
                </h3>
                <span className="text-xs text-zinc-500">
                  Direct senior engineer delivery
                </span>
              </div>

              <div className="space-y-5">
                {comparisons.map((c, i) => (
                  <div key={i} className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0096A3] block">
                      {c.feature}
                    </span>
                    <p className="text-xs text-zinc-900 leading-relaxed font-semibold">
                      {c.haimate}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-zinc-100">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="w-full py-3 px-4 rounded-full bg-zinc-900 text-white font-semibold text-xs hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Book 14-Day Audit</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00BFCC]" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
