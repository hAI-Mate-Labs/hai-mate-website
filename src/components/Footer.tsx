"use client";

import React from "react";
import Link from "next/link";
import ApertureLogo from "./ApertureLogo";

export default function Footer() {
  const techBadges = ["Lightspeed", "Square", "Xero", "MYOB", "Slack"];

  return (
    <footer className="relative bg-white text-zinc-600 font-sans border-t border-zinc-100">
      
      {/* Ecosystem Logos Row */}
      <div className="border-b border-zinc-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Integrates with your existing tech:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {techBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-3.5 py-1 rounded-full bg-zinc-50 border border-zinc-200/80 text-xs font-medium text-zinc-800"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <Link href="/" className="flex items-center gap-3 inline-flex">
              <ApertureLogo className="h-7 w-7" />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-zinc-950 font-sans flex items-baseline">
                  hAI Mate
                  <span className="inline-block relative">
                    !
                    <span
                      className="absolute -bottom-0.5 right-0 w-1.5 h-1.5 rounded-full bg-[#00BFCC]"
                      style={{ bottom: "2px", right: "0px" }}
                    />
                  </span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-medium -mt-1">
                  Applied Automation Agency
                </span>
              </div>
            </Link>

            <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
              Applied artificial intelligence and automated back-office workflows for hospitality groups and growing businesses.
            </p>

            <div className="text-xs text-zinc-500 space-y-1 pt-1">
              <p className="font-medium text-zinc-700">Solo Trader • Registered in Sydney, NSW</p>
              <p>Operating across Western Australia &amp; Nationally</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-950">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#solutions" className="hover:text-zinc-950 transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/#philosophy" className="hover:text-zinc-950 transition-colors">
                  The Open Aperture
                </Link>
              </li>
              <li>
                <Link href="/mission" className="hover:text-zinc-950 transition-colors">
                  Our Mission &amp; Vision
                </Link>
              </li>
              <li>
                <Link href="/founder" className="hover:text-zinc-950 transition-colors text-zinc-950 font-medium">
                  The Founder (Mallory)
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-zinc-950 transition-colors">
                  14-Day Audit
                </Link>
              </li>
              <li>
                <Link href="/#grants" className="hover:text-zinc-950 transition-colors">
                  WA State Grants
                </Link>
              </li>
              <li>
                <Link href="/#intake" className="hover:text-zinc-950 transition-colors">
                  Contact &amp; Scoping
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-950">
              Legal &amp; Trust
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-zinc-950 transition-colors">
                  Security &amp; Architecture
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-zinc-950 transition-colors">
                  Privacy Policy (AU &amp; GDPR)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-zinc-950 transition-colors">
                  Terms of Service (ACL)
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            &copy; {new Date().getFullYear()} hAI Mate! Solo Trader. Registered in Sydney, NSW.
          </div>
          <div className="flex items-center gap-2">
            <span>Western Australia &amp; National Engagements</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00BFCC]" />
          </div>
        </div>

      </div>
    </footer>
  );
}
