"use client";

import React from "react";
import Link from "next/link";
import ApertureLogo from "./ApertureLogo";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  const techBadges = ["Lightspeed", "Square", "Xero", "MYOB", "Slack"];

  return (
    <footer className="relative bg-white dark:bg-[#0F172A] text-zinc-600 dark:text-[#94A3B8] font-sans border-t border-zinc-100 dark:border-[#232F48] transition-colors duration-200">
      
      {/* Ecosystem Logos Row */}
      <div className="border-b border-zinc-100 dark:border-[#232F48] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-[#94A3B8]">
              {language === "en" ? "Integrates with your existing tech:" : "S'intègre à vos outils existants :"}
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {techBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-3.5 py-1 rounded-full bg-zinc-50 dark:bg-[#151D2F] border border-zinc-200/80 dark:border-[#232F48] text-xs font-medium text-zinc-800 dark:text-[#F8FAFC]"
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
                <span className="text-xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] font-sans flex items-baseline">
                  hAI Mate
                  <span className="inline-block relative">
                    !
                    <span
                      className="absolute -bottom-0.5 right-0 w-1.5 h-1.5 rounded-full bg-[#00BFCC]"
                      style={{ bottom: "2px", right: "0px" }}
                    />
                  </span>
                </span>
                <span className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-[#94A3B8] font-medium -mt-1">
                  {t.footer.tagline}
                </span>
              </div>
            </Link>

            <p className="text-sm text-zinc-500 dark:text-[#94A3B8] max-w-sm leading-relaxed">
              {t.footer.disclaimer}
            </p>

            <div className="text-xs text-zinc-500 dark:text-[#94A3B8] space-y-2 pt-1">
              <p className="font-semibold text-zinc-800 dark:text-[#F8FAFC]">
                {t.footer.legalEntity}
              </p>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-50 dark:bg-[#151D2F] border border-zinc-200/80 dark:border-[#232F48] text-[11px] font-medium text-zinc-700 dark:text-[#F8FAFC]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BFCC]" />
                <span>{t.footer.sovereignBadge}</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#solutions" className="hover:text-[#0F172A] dark:hover:text-[#00F2FE] transition-colors">
                  {t.nav.solutions}
                </Link>
              </li>
              <li>
                <Link href="/mission" className="hover:text-[#0F172A] dark:hover:text-[#00F2FE] transition-colors">
                  {t.nav.mission}
                </Link>
              </li>
              <li>
                <Link href="/founder" className="hover:text-[#0F172A] dark:hover:text-[#00F2FE] transition-colors text-[#0F172A] dark:text-[#F8FAFC] font-medium">
                  {t.nav.founder}
                </Link>
              </li>
              <li>
                <Link href="/#how-it-works" className="hover:text-[#0F172A] dark:hover:text-[#00F2FE] transition-colors">
                  {t.nav.howItWorks}
                </Link>
              </li>
              <li>
                <Link href="/#grants" className="hover:text-[#0F172A] dark:hover:text-[#00F2FE] transition-colors">
                  {t.nav.grants}
                </Link>
              </li>
              <li>
                <Link href="/#intake" className="hover:text-[#0F172A] dark:hover:text-[#00F2FE] transition-colors">
                  {language === "en" ? "Contact & Scoping" : "Contact & Cadrage"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] dark:text-[#F8FAFC]">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-[#0F172A] dark:hover:text-[#00F2FE] transition-colors">
                  {language === "en" ? "Security & Architecture" : "Sécurité & Architecture"}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#0F172A] dark:hover:text-[#00F2FE] transition-colors">
                  {language === "en" ? "Privacy Policy (AU & GDPR)" : "Politique de Confidentialité (AU & RGPD)"}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#0F172A] dark:hover:text-[#00F2FE] transition-colors">
                  {language === "en" ? "Terms of Service (ACL)" : "Conditions Générales (ACL)"}
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-zinc-100 dark:border-[#232F48] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 dark:text-[#94A3B8]">
          <div>
            &copy; {new Date().getFullYear()} hAI Mate! {language === "en" ? "All rights reserved." : "Tous droits réservés."}
          </div>
          <div className="flex items-center gap-2">
            <span>{language === "en" ? "Perth, WA & National Engagements" : "Interventions à Perth, dans le WA & à l'Échelle Nationale"}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00BFCC]" />
          </div>
        </div>

      </div>
    </footer>
  );
}
