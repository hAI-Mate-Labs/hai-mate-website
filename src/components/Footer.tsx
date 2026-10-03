"use client";

import React from "react";
import ApertureLogo from "./ApertureLogo";
import { ShieldCheck, MapPin, Terminal, ExternalLink, Heart, Globe, Cpu } from "lucide-react";

export default function Footer() {
  const techBadges = [
    { name: "Lightspeed", role: "POS Webhook Native" },
    { name: "Square", role: "Direct API Ingestion" },
    { name: "Xero", role: "General Ledger Staging" },
    { name: "MYOB", role: "AP Automation" },
    { name: "Slack", role: "Realtime Human Gates" },
  ];

  return (
    <footer className="relative bg-[#070A12] border-t border-[#232F48] text-[#94A3B8] font-sans">
      
      {/* Top Banner: Tech Integration Badges */}
      <div className="border-b border-[#232F48]/60 bg-[#0B0F19]/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#FFFFFF]">
              <Cpu className="w-4 h-4 text-[#00F2FE]" />
              <span>Certified Architecture Ecosystem:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {techBadges.map((badge) => (
                <div
                  key={badge.name}
                  className="flex items-center gap-2 px-3 py-1 rounded bg-[#151D2F] border border-[#232F48] text-xs font-mono text-[#F8FAFC]"
                >
                  <span className="font-bold text-[#FFFFFF]">{badge.name}</span>
                  <span className="text-[#232F48]">|</span>
                  <span className="text-[#94A3B8] text-[11px]">{badge.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          
          {/* Brand & Corporate Details */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <ApertureLogo className="h-8 w-8" glow />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-[#FFFFFF] font-sans flex items-baseline">
                  hAI Mate
                  <span className="inline-block relative">
                    !
                    <span
                      className="absolute -bottom-0.5 right-0 w-1.5 h-1.5 rounded-full bg-[#00F2FE] shadow-[0_0_8px_#00F2FE]"
                      style={{ bottom: "2px", right: "0px" }}
                    />
                  </span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-mono text-[#94A3B8] -mt-1 font-semibold">
                  hAI Mate! Pty Ltd
                </span>
              </div>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm">
              Applied artificial intelligence and automated conduit engineering for hospitality groups, venues, and high-growth SMEs across Western Australia.
            </p>

            <div className="space-y-1.5 text-xs font-mono text-slate-400 pt-1">
              <div className="flex items-center gap-2 text-emerald-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Corporate Registration: Western Australia Registered Entity</span>
              </div>
              <div className="text-[#94A3B8] pl-6">
                ABN: 84 682 910 431 (Verified • Perth, WA)
              </div>
              <div className="flex items-center gap-2 text-[#94A3B8] pl-6">
                <span>St Georges Terrace, Perth WA 6000</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FFFFFF] font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#solutions" className="hover:text-[#00F2FE] transition-colors">
                  Applied Solutions
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[#00F2FE] transition-colors">
                  The Open Aperture Architecture
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#00F2FE] transition-colors">
                  14-Day Diagnostic Audit
                </a>
              </li>
              <li>
                <a href="#grants" className="hover:text-[#00F2FE] transition-colors">
                  WA State Government Grants (LCF)
                </a>
              </li>
              <li>
                <a href="#intake" className="hover:text-[#00F2FE] transition-colors">
                  Request Intake &amp; Scoping
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Security */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#FFFFFF] font-bold">
              Security Architecture &amp; Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#00F2FE] transition-colors flex items-center justify-between">
                  <span>Security Architecture</span>
                  <span className="text-[10px] font-mono text-[#00F2FE] border border-[#00F2FE]/30 px-1.5 py-0.5 rounded">
                    Zero-Data Retention
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00F2FE] transition-colors">
                  Privacy Policy (Australia Privacy Act 1988)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00F2FE] transition-colors">
                  Terms of Service &amp; Retainer SLA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#00F2FE] transition-colors">
                  Human-in-the-Loop Governance Framework
                </a>
              </li>
            </ul>

            <div className="p-3 rounded-lg bg-[#151D2F] border border-[#232F48] text-xs font-mono text-[#94A3B8] mt-4">
              <span className="text-[#00F2FE] font-bold block mb-1">DATA LOCALITY GUARANTEE:</span>
              All Australian customer payloads are processed strictly via Australian sovereign regions (Sydney/Melbourne AWS/Azure) with local encryption keys.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#232F48] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]">
          <div>
            &copy; {new Date().getFullYear()} hAI Mate! Pty Ltd. All rights reserved. Registered in Western Australia.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with precision in Perth, Western Australia</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE]" />
          </div>
        </div>

      </div>
    </footer>
  );
}
