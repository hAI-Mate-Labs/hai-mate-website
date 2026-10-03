"use client";

import React from "react";
import ApertureLogo from "./ApertureLogo";
import { ShieldCheck, Cpu } from "lucide-react";

export default function Footer() {
  const techBadges = [
    { name: "Lightspeed", role: "POS Webhooks" },
    { name: "Square", role: "Direct API Sync" },
    { name: "Xero", role: "GL Draft Bills" },
    { name: "MYOB", role: "AP Ingestion" },
    { name: "Slack", role: "Human Review Gates" },
  ];

  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 text-slate-600 font-sans">
      
      {/* Ecosystem Badges Bar */}
      <div className="border-b border-slate-200/80 bg-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              <Cpu className="w-4 h-4 text-[#00BFCC]" />
              <span>Certified Integration Ecosystem:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {techBadges.map((badge) => (
                <div
                  key={badge.name}
                  className="flex items-center gap-2 px-3 py-1 rounded bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800"
                >
                  <span className="font-bold text-slate-900">{badge.name}</span>
                  <span className="text-slate-300">|</span>
                  <span className="text-slate-500 text-[11px]">{badge.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand & Corporate Details */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2.5">
              <ApertureLogo className="h-7 w-7" />
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight text-slate-900 font-sans flex items-baseline">
                  hAI Mate
                  <span className="inline-block relative">
                    !
                    <span
                      className="absolute -bottom-0.5 right-0 w-1.5 h-1.5 rounded-full bg-[#00BFCC]"
                      style={{ bottom: "2px", right: "0px" }}
                    />
                  </span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-mono text-slate-500 -mt-1 font-semibold">
                  Applied AI &amp; Automation
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              Applied artificial intelligence and automated conduit engineering for hospitality venues and growing SMEs. Direct solo practitioner delivery without agency overhead.
            </p>

            <div className="space-y-1 text-xs font-mono text-slate-600 pt-1">
              <div className="flex items-center gap-1.5 text-emerald-800 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Solo Trader • Registered in Sydney, NSW</span>
              </div>
              <div className="text-slate-500 pl-5">
                ABN Registered • Servicing Western Australia &amp; Nationally
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#solutions" className="hover:text-slate-900 transition-colors">
                  Applied Solutions
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-slate-900 transition-colors">
                  The Open Aperture Architecture
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-slate-900 transition-colors">
                  14-Day Diagnostic Audit
                </a>
              </li>
              <li>
                <a href="#grants" className="hover:text-slate-900 transition-colors">
                  WA State Grants (LCF)
                </a>
              </li>
              <li>
                <a href="#intake" className="hover:text-slate-900 transition-colors">
                  Intake &amp; Direct Scoping
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Security */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              Security Architecture &amp; Legal
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors flex items-center justify-between">
                  <span>Security Architecture</span>
                  <span className="text-[10px] font-mono text-slate-600 border border-slate-200 px-1.5 py-0.5 rounded bg-white">
                    Zero-Data Retention
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Privacy Policy (Australia Privacy Act 1988)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Terms of Service &amp; Retainer SLA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors">
                  Human-in-the-Loop Governance
                </a>
              </li>
            </ul>

            <div className="p-3 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-600 mt-3">
              <span className="text-slate-900 font-bold block mb-1">SOVEREIGN CLOUD PROCESSING:</span>
              All Australian customer payloads are routed through Australian sovereign cloud data centers with local encryption.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} hAI Mate! Sole Trader. Registered in Sydney, NSW.
          </div>
          <div className="flex items-center gap-2">
            <span>Delivering applied automation across Australia</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00BFCC]" />
          </div>
        </div>

      </div>
    </footer>
  );
}
