"use client";

import React from "react";
import { ShieldCheck, Phone, Mail, Check, MessageSquare, ArrowRight } from "lucide-react";
import ApertureLogo from "./ApertureLogo";

interface FounderSpotlightProps {
  onOpenAuditModal: () => void;
}

export default function FounderSpotlight({ onOpenAuditModal }: FounderSpotlightProps) {
  return (
    <section className="relative py-20 md:py-28 bg-zinc-50/50 border-b border-zinc-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-white border border-zinc-200/90 p-8 sm:p-12 shadow-xs relative overflow-hidden">
          
          {/* Subtle brand vector mark watermark */}
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-[0.03] pointer-events-none">
            <ApertureLogo size={350} color="#0F172A" />
          </div>

          <div className="relative space-y-6">
            
            {/* Pill Header */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-semibold text-zinc-800">
              <span className="w-2 h-2 rounded-full bg-[#00BFCC]" />
              <span>DIRECT ENGINEERING PARTNERSHIP • SOVEREIGN INFRASTRUCTURE</span>
            </div>

            {/* Title & Message */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
              Direct Engineering Partnership • Sovereign Infrastructure with Direct Leadership Access
            </h2>

            <div className="space-y-4 text-base text-zinc-600 leading-relaxed font-normal">
              <p>
                In hospitality, operational downtime is not an option. You do not need bloated agencies passing support requests through junior account coordinators or overseas ticketing queues. At hAI Mate!, our infrastructure is engineered directly by technical leadership. You get battle-tested, sovereign automation pipelines with direct founder-level SLA access via private Slack Connect and WhatsApp whenever adjustments are required.
              </p>
              <p>
                Whether reviewing your prep line and paper dockets in person across Perth Metro (Cottesloe, Fremantle, CBD, Subiaco) and the South West or tuning your pipelines remotely, every conduit is tailored specifically to your venue’s unique till, suppliers, and menu rules.
              </p>
              <p className="text-[#0F172A] font-semibold border-l-2 border-[#00BFCC] pl-4 italic">
                “In hospitality, operational downtime is not an option. You do not need bloated agencies. At hAI Mate!, our infrastructure is engineered directly by technical leadership.”
              </p>
            </div>

            {/* Direct Guarantees */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-zinc-50/70 border border-zinc-100 space-y-1">
                <span className="text-xs font-bold text-[#0F172A] block">Direct Access</span>
                <p className="text-xs text-zinc-500">
                  You get my direct mobile and private Slack channel. No middle layers.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50/70 border border-zinc-100 space-y-1">
                <span className="text-xs font-bold text-[#0F172A] block">Proven &amp; Reliable</span>
                <p className="text-xs text-zinc-500">
                  Built on battle-tested pipelines that run quietly without staff headache.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-zinc-50/70 border border-zinc-100 space-y-1">
                <span className="text-xs font-bold text-[#0F172A] block">On-The-Ground in WA</span>
                <p className="text-xs text-zinc-500">
                  Applied AI automation practice operating on-the-ground in Perth & WA, serving venues nationally.
                </p>
              </div>
            </div>

            {/* Action Row */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-zinc-100">
              <div className="text-xs text-zinc-500">
                Want to discuss your venue before booking? Email{" "}
                <a
                  href="mailto:founder@haimate.com.au"
                  className="font-bold text-[#0F172A] underline hover:text-[#0096A3]"
                >
                  founder@haimate.com.au
                </a>
              </div>

              <button
                type="button"
                onClick={onOpenAuditModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0F172A] text-white font-semibold text-xs hover:bg-[#1E293B] transition-all shadow-xs"
              >
                <span>Book a 14-Day Walk-Through</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00BFCC]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
