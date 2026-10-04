"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ApertureLogo from "./ApertureLogo";
import { Menu, X, ArrowUpRight, Phone, Sun, Moon, Monitor } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme, type ThemePreference } from "@/context/ThemeContext";
import { translations } from "@/lib/translations";

interface NavbarProps {
  onOpenAuditModal: () => void;
}

export default function Navbar({ onOpenAuditModal }: NavbarProps) {
  const { language, setLanguage } = useLanguage();
  const { theme, themePreference, setThemePreference, toggleTheme } = useTheme();
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

  // Close the drawer if the viewport grows past the mobile breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1280px)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMobileMenuOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const navLinks = [
    { name: t.overview, href: "/#overview" },
    { name: t.liveDemo, href: "/#simulator" },
    { name: t.solutions, href: "/#solutions" },
    { name: t.grants, href: "/#grants" },
    { name: t.howItWorks, href: "/#how-it-works" },
    { name: t.founder, href: "/founder" },
  ];

  const themeOptions: { id: ThemePreference; label: string; icon: typeof Sun }[] = [
    { id: "light", label: language === "en" ? "Light" : "Clair", icon: Sun },
    { id: "dark", label: language === "en" ? "Dark" : "Sombre", icon: Moon },
    { id: "system", label: language === "en" ? "Auto" : "Auto", icon: Monitor },
  ];

  const segmentBtn = (active: boolean) =>
    `flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-full text-xs transition-all cursor-pointer ${
      active
        ? "bg-white dark:bg-[#00F2FE] text-[#0F172A] dark:text-[#0B0F19] font-bold shadow-xs"
        : "text-zinc-600 dark:text-[#94A3B8] font-semibold hover:text-[#0F172A] dark:hover:text-[#F8FAFC]"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled || mobileMenuOpen
          ? "bg-white/95 dark:bg-[#0F172A]/95 backdrop-blur-md border-b border-zinc-200/80 dark:border-[#232F48] shadow-xs"
          : "bg-white dark:bg-[#0F172A] border-b border-zinc-100 dark:border-[#232F48]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 h-16 sm:h-20">

          {/* Brand Mark + Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0 min-w-0"
            aria-label="hAI Mate! Home"
          >
            <ApertureLogo
              className="h-7 w-7 sm:h-8 sm:w-8 group-hover:scale-105 transition-transform duration-200 shrink-0"
              glow
            />
            <div className="flex flex-col min-w-0">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] font-sans flex items-baseline">
                hAI Mate
                <span className="inline-block relative">
                  !
                  <span
                    className="absolute -bottom-0.5 right-0 w-1.5 h-1.5 rounded-full bg-[#00BFCC]"
                    style={{ bottom: "2px", right: "0px" }}
                  />
                </span>
              </span>
              <span className="hidden sm:block text-[10px] uppercase tracking-wider text-zinc-400 dark:text-[#94A3B8] font-medium -mt-1 truncate">
                {t.brandSub}
              </span>
            </div>
          </Link>

          {/* Center Links - Floating Pill Dock (desktop only) */}
          <nav className="hidden xl:flex items-center gap-1 bg-zinc-100/80 dark:bg-[#151D2F] border border-zinc-200/90 dark:border-[#232F48] p-1.5 rounded-full shadow-2xs backdrop-blur-xs shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-semibold text-zinc-600 dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC] hover:bg-white dark:hover:bg-[#1E293B] hover:shadow-2xs rounded-full transition-all whitespace-nowrap shrink-0"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions (desktop only) */}
          <div className="hidden xl:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={toggleTheme}
              title={
                themePreference === "system"
                  ? language === "en"
                    ? `Following device theme (${theme})`
                    : `Thème de l'appareil (${theme === "dark" ? "sombre" : "clair"})`
                  : language === "en"
                  ? "Toggle light / dark mode"
                  : "Basculer mode clair / sombre"
              }
              className="p-2 rounded-full bg-zinc-100 dark:bg-[#151D2F] border border-zinc-200 dark:border-[#232F48] text-zinc-600 dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#00F2FE] transition-colors cursor-pointer"
              aria-label={language === "en" ? "Toggle dark mode" : "Basculer le mode sombre"}
            >
              {theme === "dark" ? (
                <Moon className="w-3.5 h-3.5 text-[#00F2FE]" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-amber-500" />
              )}
            </button>

            {/* Bilingual Segmented Toggle */}
            <div className="inline-flex items-center p-1 rounded-full bg-zinc-100 dark:bg-[#151D2F] border border-zinc-200 dark:border-[#232F48] text-xs font-semibold shadow-2xs shrink-0">
              {(["en", "fr"] as const).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`px-2.5 py-1 rounded-full transition-all cursor-pointer whitespace-nowrap ${
                    language === lang
                      ? "bg-white dark:bg-[#00F2FE] text-[#0F172A] dark:text-[#0B0F19] shadow-xs font-bold"
                      : "text-zinc-500 dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC]"
                  }`}
                  aria-label={lang === "en" ? "Switch to English" : "Passer en français"}
                  aria-pressed={language === lang}
                >
                  {lang === "en" ? "🇦🇺 EN" : "🇫🇷 FR"}
                </button>
              ))}
            </div>

            <a
              href="tel:+61402472262"
              className="hidden 2xl:inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 dark:text-[#94A3B8] hover:text-zinc-900 dark:hover:text-[#F8FAFC] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#0096A3] dark:text-[#00F2FE]" />
              <span>0402 472 262</span>
            </a>

            <button
              type="button"
              onClick={onOpenAuditModal}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-bold rounded-full bg-[#0F172A] dark:bg-[#00F2FE] text-white dark:text-[#0B0F19] hover:bg-zinc-800 dark:hover:bg-[#38bdf8] transition-all cursor-pointer shadow-xs group whitespace-nowrap"
            >
              <span>{t.bookAudit}</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 text-[#00BFCC] dark:text-[#0B0F19] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile / tablet: primary CTA + hamburger only */}
          <div className="flex xl:hidden items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={onOpenAuditModal}
              className="px-3.5 py-2 text-xs font-bold rounded-full bg-[#0F172A] dark:bg-[#00F2FE] text-white dark:text-[#0B0F19] whitespace-nowrap cursor-pointer"
            >
              {t.bookAuditMobile}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-700 dark:text-[#F8FAFC] hover:bg-zinc-100 dark:hover:bg-[#151D2F] cursor-pointer"
              aria-label={mobileMenuOpen ? (language === "en" ? "Close menu" : "Fermer le menu") : (language === "en" ? "Open menu" : "Ouvrir le menu")}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="xl:hidden border-t border-zinc-100 dark:border-[#232F48] bg-white dark:bg-[#0F172A] px-4 sm:px-6 py-5 space-y-5 shadow-lg max-h-[calc(100dvh-4rem)] overflow-y-auto"
        >
          {/* Links */}
          <nav className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 rounded-xl bg-zinc-50 dark:bg-[#151D2F] border border-zinc-100 dark:border-[#232F48] text-sm font-semibold text-zinc-800 dark:text-[#F8FAFC] hover:bg-zinc-100 dark:hover:bg-[#1E293B] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Preferences: language + theme */}
          <div className="space-y-3 pt-4 border-t border-zinc-100 dark:border-[#232F48]">
            <div className="space-y-1.5">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-[#94A3B8]">
                {language === "en" ? "Language" : "Langue"}
              </span>
              <div className="flex p-1 rounded-full bg-zinc-100 dark:bg-[#151D2F] border border-zinc-200 dark:border-[#232F48]">
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={segmentBtn(language === "en")}
                  aria-pressed={language === "en"}
                >
                  🇦🇺 English
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("fr")}
                  className={segmentBtn(language === "fr")}
                  aria-pressed={language === "fr"}
                >
                  🇫🇷 Français
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-[#94A3B8]">
                {language === "en" ? "Appearance" : "Apparence"}
              </span>
              <div className="flex p-1 rounded-full bg-zinc-100 dark:bg-[#151D2F] border border-zinc-200 dark:border-[#232F48]">
                {themeOptions.map(({ id, label, icon: Icon }) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setThemePreference(id)}
                    className={segmentBtn(themePreference === id)}
                    aria-pressed={themePreference === id}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact + CTA */}
          <div className="pt-4 border-t border-zinc-100 dark:border-[#232F48] space-y-2">
            <a
              href="tel:+61402472262"
              className="flex items-center justify-center gap-2 py-3 rounded-full bg-zinc-50 dark:bg-[#151D2F] border border-zinc-200 dark:border-[#232F48] text-xs font-bold text-zinc-800 dark:text-[#F8FAFC]"
            >
              <Phone className="w-3.5 h-3.5 text-[#0096A3] dark:text-[#00F2FE]" />
              <span>{t.callMallory}</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="w-full py-3 rounded-full bg-[#0F172A] dark:bg-[#00F2FE] text-white dark:text-[#0B0F19] text-xs font-bold hover:bg-zinc-800 dark:hover:bg-[#38bdf8] shadow-sm cursor-pointer"
            >
              {t.book14DayReview}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
