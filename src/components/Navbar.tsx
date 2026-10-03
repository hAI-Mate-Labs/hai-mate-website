"use client";

import React, { useState, useEffect } from "react";
import ApertureLogo from "./ApertureLogo";
import { Menu, X, ArrowUpRight, ShieldCheck, Check, Terminal } from "lucide-react";

interface NavbarProps {
  onOpenAuditModal: () => void;
}

export default function Navbar({ onOpenAuditModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Solutions", href: "#solutions" },
    { name: "The Human-in-the-Loop", href: "#philosophy" },
    { name: "14-Day Audit", href: "#process" },
    { name: "Grant Co-Funding", href: "#grants" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-slate-200 shadow-xs"
            : "bg-white/80 backdrop-blur-sm border-slate-200/80"
        }`}
      >
        {/* Minimalist Top System Status Bar */}
        <div className="hidden lg:flex items-center justify-between px-6 py-1.5 bg-slate-50 border-b border-slate-200/70 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-slate-800 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00BFCC] animate-pulse" />
              Applied Automation Architecture
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600">Western Australia Client Engagements</span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-600">Registered in Sydney (NSW)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-emerald-700 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              WA Local Capability Fund: Round Open
            </span>
            <span className="text-slate-300">|</span>
            <a
              href="mailto:founder@haimate.com.au"
              className="text-slate-600 hover:text-[#00BFCC] transition-colors"
            >
              founder@haimate.com.au
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Left: Brand Mark SVG + Wordmark */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#00BFCC]/40 rounded-lg p-1"
              aria-label="hAI Mate! Home"
            >
              <ApertureLogo
                className="h-8 w-8 group-hover:scale-105 transition-transform duration-200"
                glow
              />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-slate-900 font-sans flex items-baseline">
                  hAI Mate
                  <span className="inline-block relative">
                    !
                    <span
                      className="absolute -bottom-0.5 right-0 w-1.5 h-1.5 rounded-full bg-[#00BFCC] shadow-[0_0_6px_#00BFCC]"
                      style={{ bottom: "2px", right: "0px" }}
                    />
                  </span>
                </span>
                <span className="text-[10px] tracking-widest uppercase font-mono text-slate-500 -mt-1 font-semibold">
                  Applied AI &amp; Automation
                </span>
              </div>
            </a>

            {/* Center: Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-1.5 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md transition-all duration-150"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="relative inline-flex items-center justify-center px-4.5 py-2 text-sm font-bold tracking-tight rounded-md bg-[#0F172A] text-white hover:bg-slate-800 active:scale-[0.98] transition-all cursor-pointer font-sans group shadow-xs border border-[#0F172A]"
              >
                <span>Book an Audit</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5 text-[#00BFCC] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="px-3 py-1.5 text-xs font-bold rounded bg-[#0F172A] text-white"
              >
                Book Audit
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-slate-900" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-1 duration-150 shadow-lg">
            <div className="px-3 py-1.5 text-xs font-mono text-slate-500 border-b border-slate-100 mb-2 flex items-center justify-between">
              <span>SYSTEM: NAVIGATION</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00BFCC]" />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-slate-800 hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuditModal();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold rounded-md bg-[#0F172A] text-white hover:bg-slate-800"
              >
                <Terminal className="w-4 h-4 text-[#00BFCC]" />
                <span>Book a 14-Day Audit</span>
              </button>
            </div>
            <div className="mt-3 pt-3 border-t border-slate-100 text-xs font-mono text-slate-500 text-center">
              Solo Practitioner • Registered in Sydney (NSW) • WA &amp; National Projects
            </div>
          </div>
        )}
      </header>
    </>
  );
}
