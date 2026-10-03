"use client";

import React from "react";
import ApertureLogo from "./ApertureLogo";
import { ShieldCheck, Check } from "lucide-react";

export default function Footer() {
  const techBadges = [
    { name: "Lightspeed", role: "Till & POS" },
    { name: "Square", role: "Till & POS" },
    { name: "Xero", role: "Draft Invoices" },
    { name: "MYOB", role: "Bookkeeping" },
    { name: "Deputy", role: "Staff Rostering" },
    { name: "Slack", role: "1-Tap Approvals" },
  ];

  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 text-slate-600 font-sans">
      
      {/* Ecosystem Badges Bar */}
      <div className="border-b border-slate-200/80 bg-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
              <span className="w-2 h-2 rounded-full bg-[#00BFCC]" />
              <span>Works seamlessly with your existing tools:</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {techBadges.map((badge) => (
                <div
                  key={badge.name}
                  className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800"
                >
                  <span className="font-bold text-slate-900">{badge.name}</span>
                  <span className="text-slate-300">•</span>
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
                <span className="text-[10px] tracking-wider uppercase font-sans text-slate-500 -mt-1 font-semibold">
                  Hospitality &amp; Venue Automation
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              Practical automation for restaurants, pubs, cafes, and hotels. Eliminating repetitive back-office paperwork so venue managers can stay on the floor.
            </p>

            <div className="space-y-1 text-xs text-slate-600 pt-1">
              <div className="flex items-center gap-1.5 text-slate-900 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Solo Trader • Registered in Sydney, NSW</span>
              </div>
              <div className="text-slate-500 pl-5">
                ABN Registered • Servicing Western Australia &amp; Nationally
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#solutions" className="hover:text-slate-900 transition-colors">
                  Solutions for Venues
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-slate-900 transition-colors">
                  The Open Aperture Philosophy
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-slate-900 transition-colors">
                  14-Day Diagnostic Audit
                </a>
              </li>
              <li>
                <a href="#grants" className="hover:text-slate-900 transition-colors">
                  WA State Grants (50% Off)
                </a>
              </li>
              <li>
                <a href="#intake" className="hover:text-slate-900 transition-colors">
                  Book a Venue Review
                </a>
              </li>
            </ul>
          </div>

          {/* Reassurance & Privacy */}
          <div className="lg:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Security &amp; Guarantee
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#" className="hover:text-slate-900 transition-colors flex items-center justify-between">
                  <span>Security Architecture</span>
                  <span className="text-[10px] font-semibold text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full bg-emerald-50">
                    100% Human Approved
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
                  Terms of Service &amp; Support SLA
                </a>
              </li>
            </ul>

            <div className="p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-600 mt-3">
              <span className="text-slate-900 font-bold block mb-1">AUSTRALIAN DATA GUARANTEE:</span>
              Your business and financial data never leaves secure Australian servers. We never sell your data or share your supplier pricing.
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} hAI Mate! Solo Trader. Registered in Sydney, NSW.
          </div>
          <div className="flex items-center gap-2">
            <span>Delivering practical automation for hospitality across WA and Australia</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00BFCC]" />
          </div>
        </div>

      </div>
    </footer>
  );
}
