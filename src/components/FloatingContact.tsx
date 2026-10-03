"use client";

import React, { useState } from "react";
import { MessageSquare, X, Mail, Phone, Calendar, Check, ArrowRight } from "lucide-react";
import ApertureLogo from "./ApertureLogo";

interface FloatingContactProps {
  onOpenAuditModal: () => void;
}

export default function FloatingContact({ onOpenAuditModal }: FloatingContactProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText("founder@haimate.com.au");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 select-none">
      {/* Expanded Quick Contact Card */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2.5rem)] max-w-sm rounded-2xl bg-white border border-zinc-200 p-5 shadow-xl transition-all duration-200 animate-in fade-in slide-in-from-bottom-3">
          <div className="flex items-start justify-between pb-3 border-b border-zinc-100">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-zinc-950 flex items-center justify-center p-1.5 shadow-xs">
                  <ApertureLogo size={24} color="#FFFFFF" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white" />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-950 flex items-center gap-1.5">
                  Direct Founder Desk
                  <span className="text-[10px] font-normal text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-200">
                    Online
                  </span>
                </p>
                <p className="text-[11px] text-zinc-500">Solo Operator • Sydney &amp; WA</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
              aria-label="Close message card"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-3 space-y-2">
            <p className="text-xs text-zinc-600 leading-relaxed">
              No sales reps or automated triage. Send a direct question about your venue's POS, supplier invoices, or roster flow.
            </p>
          </div>

          {/* Action options */}
          <div className="space-y-2 pt-1">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenAuditModal();
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-zinc-950 text-white text-xs font-semibold hover:bg-zinc-800 transition-all shadow-xs group"
            >
              <span className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#00BFCC]" />
                Book 14-Day Readiness Audit
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* WhatsApp Direct Action */}
            <a
              href="https://wa.me/61402472262?text=Hi%20Mallory,%20I'm%20a%20venue%20operator%20interested%20in%20applied%20automation%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs font-semibold hover:bg-emerald-100 transition-colors group"
            >
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Chat on WhatsApp (+61 402 472 262)
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-700 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Direct Phone / Between-Service */}
            <a
              href="tel:0402472262"
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-800 text-xs font-medium hover:bg-zinc-100 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-zinc-600" />
                <span>Call 0402 472 262 <span className="text-[10px] text-zinc-400 font-mono">(Between-Service: 2:30–4:30 PM)</span></span>
              </span>
              <span className="text-[10px] font-mono text-zinc-500">Call/SMS</span>
            </a>

            {/* Email Option */}
            <a
              href="mailto:founder@haimate.com.au?subject=Quick%20Hospitality%20Question"
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-800 text-xs font-medium hover:bg-zinc-100 transition-colors"
            >
              <span className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-zinc-600" />
                Email founder@haimate.com.au
              </span>
              <button
                onClick={handleCopyEmail}
                className="text-[11px] text-zinc-500 hover:text-zinc-900 bg-white px-2 py-0.5 rounded border border-zinc-200 transition-colors cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? (
                  <span className="text-emerald-600 flex items-center gap-1 font-semibold">
                    <Check className="w-3 h-3" /> Copied
                  </span>
                ) : (
                  "Copy"
                )}
              </button>
            </a>
          </div>

          <div className="mt-3 pt-2 border-t border-zinc-100 flex items-center justify-between text-[10px] text-zinc-400 font-mono">
            <span>Direct to Founder</span>
            <span className="text-[#0096A3]">Between-Service Priority (2:30–4:30 PM)</span>
          </div>
        </div>
      )}

      {/* Floating Pill Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-zinc-200/90 text-zinc-900 shadow-md hover:shadow-lg hover:border-zinc-300 transition-all cursor-pointer group active:scale-95"
        aria-label="Open direct founder contact"
      >
        <div className="relative flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-[#00BFCC] animate-pulse" />
          <span className="absolute w-3.5 h-3.5 rounded-full bg-[#00BFCC]/30 animate-ping" />
        </div>
        <span className="text-xs font-semibold text-zinc-800 group-hover:text-zinc-950 flex items-center gap-1.5">
          <MessageSquare className="w-3.5 h-3.5 text-zinc-600 group-hover:text-[#0096A3] transition-colors" />
          <span>Quick Question? <span className="hidden sm:inline font-normal text-zinc-500">Ask the Founder</span></span>
        </span>
      </button>
    </div>
  );
}
