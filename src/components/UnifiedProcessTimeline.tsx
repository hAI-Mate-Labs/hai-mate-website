"use client";

import React from "react";
import Link from "next/link";
import {
  Clock,
  Zap,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  FileText,
  ExternalLink,
} from "lucide-react";
import ApertureLogo from "./ApertureLogo";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

interface UnifiedProcessTimelineProps {
  onOpenAuditModal: () => void;
  onOpenSampleAuditModal?: () => void;
}

export default function UnifiedProcessTimeline({
  onOpenAuditModal,
  onOpenSampleAuditModal,
}: UnifiedProcessTimelineProps) {
  const { language } = useLanguage();
  const t = translations[language];

  const steps = [
    {
      step: "01",
      duration: language === "en" ? "Days 1–14" : "Jours 1 à 14",
      tag: language === "en" ? "Free Diagnostic Audit" : "Audit Diagnostique Offert",
      title: language === "en" ? "Zero-Disruption Paperwork & Till Audit" : "Audit Paperasse & Caisse Sans Perturbation",
      description:
        language === "en"
          ? "Conducted during quiet morning prep hours before guests arrive. We observe your paperwork trail and map high-ROI automation targets."
          : "Réalisé le matin pendant la mise en place avant l'arrivée des clients. Nous analysons vos flux papier et identifions les gains immédiats.",
      icon: Clock,
      bullets:
        language === "en"
          ? [
              "In-person venue walk-through and manager interviews in WA",
              "OCR line-item test on 20+ of your historical delivery dockets",
              "Read-only review of POS till (Lightspeed, Square) & Xero/MYOB codes",
              "Pre-filled WA Government 50% co-funding grant application package",
            ]
          : [
              "Visite sur site de votre établissement et entretiens de cadrage en WA",
              "Test OCR ligne par ligne sur plus de 20 de vos bons de livraison récents",
              "Revue en lecture seule de votre caisse (Lightspeed, Square) et plan comptable Xero/MYOB",
              "Dossier de subvention d'État WA (50% de prise en charge) pré-rempli",
            ],
      deliverable:
        language === "en"
          ? "Executive Automation Roadmap with Guaranteed ROI"
          : "Rapport de Faisabilité Exécutif & ROI Garanti",
    },
    {
      step: "02",
      duration: language === "en" ? "Weeks 3–5" : "Semaines 3 à 5",
      tag: language === "en" ? "Custom Conduit Build" : "Développement du Conduit Sur-Mesure",
      title: language === "en" ? "Off-Site Engineering & Supplier Tuning" : "Ingénierie Hors-Site & Paramétrage Fournisseurs",
      description:
        language === "en"
          ? "Built completely off-site by Mallory. Your live tills and accounting ledgers remain untouched until fully verified."
          : "Développé entièrement hors-site par Mallory. Vos caisses et écritures comptables restent intactes jusqu'à vérification complète.",
      icon: Zap,
      bullets:
        language === "en"
          ? [
              "Quiet connection to your existing Xero, Lightspeed, and Deputy accounts",
              "Trained on your specific WA food, liquor, and produce supplier price agreements",
              "Zero new apps for staff: simple phone photos and email PDF forwarding",
              "Rigorous historical simulation testing before live activation",
            ]
          : [
              "Connexion discrète à vos comptes existants Xero, Lightspeed et Deputy",
              "Paramétré sur vos accords tarifaires spécifiques de marée, viande et boissons",
              "Zéro nouvelle application : simples photos sur smartphone ou transferts PDF par email",
              "Tests rigoureux de simulation historique avant activation définitive",
            ],
      deliverable:
        language === "en"
          ? "Working Private Conduit & Contract Price Guard"
          : "Passerelle Privée Opérationnelle & Surveillance des Prix Fournisseurs",
    },
    {
      step: "03",
      duration: language === "en" ? "Ongoing" : "Accompagnement Continu",
      tag: language === "en" ? "1-Tap Mobile Control" : "Contrôle Mobile en 1 Clic",
      title: language === "en" ? "Human-in-the-Loop Handover & Retainer" : "Déploiement Contrôlé & Suivi Personnalisé",
      description:
        language === "en"
          ? "No automated action runs unapproved. Managers review and green-light draft bills or roster trims with 1 tap on their phone."
          : "Aucune action automatisée ne s'exécute sans accord. Vos managers valident les factures brouillons ou ajustements en 1 clic sur mobile.",
      icon: Smartphone,
      bullets:
        language === "en"
          ? [
              "Direct mobile & WhatsApp line to Mallory during busy dinner shifts",
              "Draft bills staged in Xero ready for instant 1-tap review",
              "Continuous adjustments as menus, suppliers, and rosters change",
              "Monthly executive review of saved admin hours and protected wage dollars",
            ]
          : [
              "Ligne mobile & WhatsApp directe avec Mallory disponible pendant vos services",
              "Brouillons préparés dans Xero prêts pour validation instantanée en 1 clic",
              "Ajustements continus lors des changements de cartes, fournisseurs et équipes",
              "Bilan mensuel des heures administratives économisées et des marges protégées",
            ],
      deliverable:
        language === "en"
          ? "Direct Solo Engineer Retainer & Zero Maintenance Drag"
          : "Partenariat Direct avec l'Ingénieur & Zéro Charge de Maintenance",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 md:py-28 bg-white border-b border-zinc-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-semibold text-zinc-800 mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#00BFCC]" />
            <span>{language === "en" ? "PROVEN 3-STEP METHODOLOGY" : "MÉTHODOLOGIE ÉPROUVÉE EN 3 ÉTAPES"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight leading-tight">
            {language === "en" ? "From Back-Office Chaos to 1-Tap Control in 14 Days." : "Du Chaos Administratif au Contrôle en 1 Clic en 14 Jours."}
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            {language === "en"
              ? "Zero disruption to your floor staff or kitchen prep. Everything is mapped and built in the background, tailored specifically to your venue."
              : "Zéro perturbation pour vos équipes de salle ou de cuisine. Tout est analysé et conçu en arrière-plan, sur-mesure pour votre établissement."}
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="rounded-3xl bg-white border border-zinc-200/90 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-300 transition-all shadow-xs relative group"
              >
                {/* Step pill & duration */}
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-2xl font-black text-[#0F172A] tracking-tight">
                      {s.step}
                    </span>
                    <span className="text-[11px] font-bold text-[#0096A3] bg-[#00BFCC]/10 px-2.5 py-0.5 rounded-full">
                      {s.tag}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-full">
                    {s.duration}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3 flex-1">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-zinc-50 border border-zinc-200/80 text-zinc-900 group-hover:text-[#0096A3] group-hover:border-[#00BFCC]/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#0F172A] leading-snug">
                      {s.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    {s.description}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-zinc-100">
                    {s.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0096A3] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverable badge */}
                <div className="mt-6 pt-4 border-t border-zinc-100 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
                    {language === "en" ? "Key Deliverable" : "Livrable Majeur"}
                  </span>
                  <div className="text-xs font-semibold text-zinc-900 bg-zinc-50 p-2.5 rounded-xl border border-zinc-100">
                    {s.deliverable}
                  </div>
                  {s.step === "01" && onOpenSampleAuditModal && (
                    <button
                      type="button"
                      onClick={onOpenSampleAuditModal}
                      className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#0096A3] hover:text-[#00818c] bg-[#00BFCC]/10 hover:bg-[#00BFCC]/20 py-2 rounded-xl transition-colors cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>{language === "en" ? "Inspect Sample Report Teardown →" : "Consulter l'Exemple de Rapport Exécutif →"}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Sample Teardown Trigger Banner */}
        {onOpenSampleAuditModal && (
          <div className="flex items-center justify-center mb-12">
            <button
              type="button"
              onClick={onOpenSampleAuditModal}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white border border-zinc-200 text-zinc-900 text-xs sm:text-sm font-bold hover:bg-zinc-50 hover:border-zinc-300 transition-all shadow-xs group cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#0096A3]" />
              <span>
                {language === "en"
                  ? "Inspect Sample 14-Day Audit Teardown Report (Confidential Executive Deliverable)"
                  : "Consulter l'Exemple de Rapport d'Audit de 14 Jours (Livrable Exécutif Confidentiel)"}
              </span>
              <ArrowRight className="w-4 h-4 text-[#00BFCC] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}

        {/* 100% Value Guarantee & Operator Covenant Banner */}
        <div className="rounded-3xl bg-zinc-50 border border-zinc-200/90 p-6 sm:p-8 relative overflow-hidden shadow-xs">
          <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-[0.03] pointer-events-none">
            <ApertureLogo size={320} color="#0F172A" />
          </div>

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#0096A3]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                  {language === "en" ? "The hAI Mate! 100% Value Guarantee & Covenant" : "L'Engagement hAI Mate! : Garantie de Valeur à 100%"}
                </span>
              </div>
              <p className="text-sm text-zinc-700 leading-relaxed">
                {language === "en" ? (
                  <>
                    If our 14-day diagnostic audit does not uncover at least <strong>3x its value in recoverable admin hours or supplier invoice discrepancies</strong>, you pay <span className="font-bold text-[#0F172A]">$0</span>. Zero lock-in. No automated action executes without your explicit 1-tap sign-off.
                  </>
                ) : (
                  <>
                    Si notre audit diagnostique de 14 jours n'identifie pas au minimum <strong>3x sa valeur en heures administratives récupérables ou surfacturations fournisseurs</strong>, vous payez <span className="font-bold text-[#0F172A]">0 $</span>. Zéro engagement. Aucune action automatisée ne s'exécute sans votre validation en 1 clic.
                  </>
                )}
              </p>
              <div className="pt-1">
                <Link
                  href="/mission"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0096A3] hover:text-[#00818c] transition-colors"
                >
                  <span>{language === "en" ? "Read our full Operational Philosophy & 2030 Mission" : "Découvrir notre Philosophie Opérationnelle & Mission 2030"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenAuditModal}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white font-semibold text-xs sm:text-sm hover:bg-zinc-800 transition-all shadow-sm shrink-0 w-full sm:w-auto"
            >
              <span>{t.process.title ? (language === "en" ? "Book Your 14-Day Audit" : "Réserver Votre Audit de 14 Jours") : ""}</span>
              <ArrowRight className="w-4 h-4 text-[#00BFCC]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
