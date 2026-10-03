"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ApertureLogo from "./ApertureLogo";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

interface NavbarProps {
  onOpenAuditModal: () => void;
}

export default function Navbar({ onOpenAuditModal }: NavbarProps) {
  const { language, setLanguage } = useLanguage();
  const t = translations[language].nav;
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
    { name: t.liveDemo, href: "/#simulator" },
    { name: t.solutions, href: "/#solutions" },
    { name: t.grants, href: "/#grants" },
    { name: t.howItWorks, href: "/#how-it-works" },
    { name: t.founder, href: "/founder" },
    { name: t.mission, href: "/mission" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-zinc-200/80 shadow-xs"
          : "bg-white border-b border-zinc-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Mark + Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none shrink-0"
            aria-label="hAI Mate! Home"
          >
            <ApertureLogo
              className="h-8 w-8 group-hover:scale-105 transition-transform duration-200"
              glow
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#0F172A] font-sans flex items-baseline">
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
                {t.brandSub}
              </span>
            </div>
          </Link>

          {/* Center Links - Limova Floating Pill Dock */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-100/80 border border-zinc-200/90 p-1.5 rounded-full shadow-2xs backdrop-blur-xs">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-zinc-600 hover:text-[#0F172A] hover:bg-white hover:shadow-2xs rounded-full transition-all"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Bilingual Segmented Toggle */}
            <div className="inline-flex items-center p-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold shadow-2xs">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  language === "en"
                    ? "bg-white text-[#0F172A] shadow-xs font-bold"
                    : "text-zinc-500 hover:text-[#0F172A]"
                }`}
                aria-label="Switch to English"
              >
                🇦🇺 EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("fr")}
                className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                  language === "fr"
                    ? "bg-white text-[#0F172A] shadow-xs font-bold"
                    : "text-zinc-500 hover:text-[#0F172A]"
                }`}
                aria-label="Passer en français"
              >
                🇫🇷 FR
              </button>
            </div>

            <a
              href="tel:0402472262"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-zinc-900 transition-colors pr-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#0096A3]" />
              <span>0402 472 262</span>
            </a>

            <button
              type="button"
              onClick={onOpenAuditModal}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold rounded-full bg-[#0F172A] text-white hover:bg-zinc-800 transition-all cursor-pointer shadow-xs group"
            >
              <span>{t.bookAudit}</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 text-[#00BFCC] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile language switch */}
            <div className="inline-flex items-center p-0.5 rounded-full bg-zinc-100 border border-zinc-200 text-[11px] font-semibold">
              <button
                type="button"
                onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                className="px-2 py-0.5 rounded-full bg-white text-[#0F172A] shadow-xs font-bold"
              >
                {language === "en" ? "🇦🇺 EN" : "🇫🇷 FR"}
              </button>
            </div>

            <button
              type="button"
              onClick={onOpenAuditModal}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-[#0F172A] text-white"
            >
              {t.bookAuditMobile}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-600 hover:text-[#0F172A] hover:bg-zinc-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-100 bg-white px-5 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl bg-zinc-50 border border-zinc-100 text-sm font-semibold text-zinc-800 hover:text-[#0F172A] hover:bg-zinc-100 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Language selection in mobile drawer */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-zinc-50 border border-zinc-200">
            <span className="text-xs font-semibold text-zinc-600">Language / Langue :</span>
            <div className="inline-flex items-center p-1 rounded-full bg-zinc-200/80 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-full transition-all ${
                  language === "en"
                    ? "bg-white text-[#0F172A] font-bold shadow-xs"
                    : "text-zinc-600"
                }`}
              >
                🇦🇺 English
              </button>
              <button
                type="button"
                onClick={() => setLanguage("fr")}
                className={`px-3 py-1 rounded-full transition-all ${
                  language === "fr"
                    ? "bg-white text-[#0F172A] font-bold shadow-xs"
                    : "text-zinc-600"
                }`}
              >
                🇫🇷 Français
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-zinc-100 space-y-2">
            <a
              href="tel:0402472262"
              className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-bold text-zinc-800"
            >
              <Phone className="w-3.5 h-3.5 text-[#0096A3]" />
              <span>{t.callMallory}</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="w-full py-3 rounded-full bg-[#0F172A] text-white text-xs font-bold hover:bg-zinc-800 shadow-sm"
            >
              {t.book14DayReview}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
