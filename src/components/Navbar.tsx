"use client";

import React, { useState, useEffect } from "react";
import ApertureLogo from "./ApertureLogo";
import { Menu, X, ArrowUpRight, ShieldCheck, Terminal, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenAuditModal: () => void;
}

export default function Navbar({ onOpenAuditModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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
            ? "bg-[#0B0F19]/90 backdrop-blur-md border-[#232F48] shadow-lg shadow-black/40"
            : "bg-[#0B0F19]/70 backdrop-blur-sm border-[#232F48]/60"
        }`}
      >
        {/* Terminal status bar above header */}
        <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-[#0F172A]/80 border-b border-[#232F48]/40 text-xs font-mono text-[#94A3B8]">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[#00F2FE]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE]" />
              WA Agent Gateway: Perth (UTC+8) Active
            </span>
            <span className="text-[#232F48]">|</span>
            <span className="text-slate-400">SOC2 Type II Controls</span>
            <span className="text-[#232F48]">|</span>
            <span className="text-slate-400">Strict Human-in-the-Loop</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              LCF Grant Application Window: Open
            </span>
            <span className="text-[#232F48]">|</span>
            <a
              href="#intake"
              className="text-[#94A3B8] hover:text-[#00F2FE] transition-colors"
            >
              founder@haimate.com.au
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left: Brand Mark SVG + Wordmark */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#00F2FE]/50 rounded-lg p-1"
              aria-label="hAI Mate! Home"
            >
              <div className="relative">
                <ApertureLogo
                  className="h-9 w-9 group-hover:scale-105 transition-transform duration-200"
                  glow
                />
              </div>
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
                  Applied AI • Western Australia
                </span>
              </div>
            </a>

            {/* Center: Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3.5 py-2 text-sm font-medium text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#151D2F] rounded-md transition-all duration-150 border border-transparent hover:border-[#232F48]"
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
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold tracking-tight rounded-md bg-[#00F2FE] text-[#04101A] shadow-[0_0_20px_rgba(0,242,254,0.35)] hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer font-sans group border border-[#00F2FE]"
              >
                <span>Book an Audit</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="px-3 py-1.5 text-xs font-bold rounded bg-[#00F2FE] text-[#04101A] hover:brightness-110"
              >
                Audit
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#151D2F] border border-[#232F48]"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#00F2FE]" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#232F48] bg-[#0B0F19]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
            <div className="px-3 py-2 text-xs font-mono text-[#00F2FE] border-b border-[#232F48] mb-2 flex items-center justify-between">
              <span>SYSTEM: APPLIED_NAV_CONSOLE</span>
              <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse" />
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-[#F8FAFC] hover:bg-[#151D2F] hover:text-[#00F2FE] border border-transparent hover:border-[#232F48] transition-colors"
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
                className="w-full flex items-center justify-center gap-2 px-5 py-3 text-base font-bold rounded-md bg-[#00F2FE] text-[#04101A] hover:brightness-110 shadow-[0_0_15px_rgba(0,242,254,0.3)]"
              >
                <Terminal className="w-4 h-4" />
                <span>Book a 14-Day Audit</span>
              </button>
            </div>
            <div className="mt-4 pt-3 border-t border-[#232F48] text-xs font-mono text-[#94A3B8] text-center">
              Perth, Western Australia • Local Capability Fund Partner
            </div>
          </div>
        )}
      </header>
    </>
  );
}
