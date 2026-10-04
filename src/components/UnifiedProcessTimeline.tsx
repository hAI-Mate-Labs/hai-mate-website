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
      tag: language === "en" ? "Flexible 14-Day Audit" : "Audit Diagnostique Flexible",
      title: language === "en" ? "Digital Intake & Perth On-Site Audits" : "Intégration Numérique & Audits sur Place à Perth",
      description:
        language === "en"
          ? "Default remote intake via read-only OAuth connections to Lightspeed, Square & Xero, paired with a secure drag-and-drop link for 15–20 delivery dockets. Plus in-person morning prep audits across Perth."
          : "Intégration numérique sans friction via connexions OAuth en lecture seule (Lightspeed, Square, Xero) avec dépôt sécurisé de 15 à 20 bons. Et visites matinales sur place à Perth.",
      icon: Clock,
      bullets:
        language === "en"
          ? [
              "Zero-friction digital intake via read-only OAuth (Lightspeed, Square, Xero)",
              "Secure drag-and-drop link for 15–20 delivery dockets & price agreements",
              "In Perth? On-site morning prep audits and manager walk-throughs available across Perth Metro (Cottesloe, Fremantle, CBD, Subiaco) and the South West",
              "Pre-filled WA Government 50% matched co-funding grant application package",
            ]
          : [
              "Intégration numérique sans friction via OAuth en lecture seule (Lightspeed, Square, Xero)",
              "Lien de dépôt sécurisé pour 15 à 20 bons de livraison et accords tarifaires",
              "À Perth ? Audits sur place pendant la mise en place matinale disponibles sur toute la métropole de Perth (Cottesloe, Fremantle, CBD, Subiaco) et le South West",
              "Dossier de subvention d'État WA (50% de prise en charge) pré-rempli",
            ],
      deliverable:
        language === "en"
          ? "Executive Automation Roadmap with Guaranteed 3x ROI"
          : "Rapport de Faisabilité Exécutif & ROI 3x Garanti",
    },
    {
      step: "02",
      duration: language === "en" ? "Weeks 3–5" : "Semaines 3 à 5",
      tag: language === "en" ? "Asynchronous Cloud Engine" : "Moteur Cloud Asynchrone",
      title: language === "en" ? "Overnight Cloud Reconciliation & Zero Staff Apps" : "Rapprochement Cloud Nocturne & Zéro App Équipe",
      description:
        language === "en"
          ? "All background conduits execute continuously in the cloud with zero software downloads for floor staff. Invoices and till sales reconcile automatically overnight."
          : "Tous les conduits s'exécutent en continu dans le cloud sans aucun téléchargement d'application pour les équipes. Bons et ventes se réconcilient automatiquement la nuit.",
      icon: Zap,
      bullets:
        language === "en"
          ? [
              "Draft bills staged in Xero before the morning prep shift arrives",
              "Calibrated specifically for wholesale food, beverage, and produce delivery dockets",
              "Dynamic Margin Guard reconciling live till sales with Bureau of Meteorology telemetry",
              "Encrypted Australian cloud infrastructure operating under sovereign data controls",
            ]
          : [
              "Factures brouillons préparées dans Xero avant l'arrivée de la mise en place matinale",
              "Calibré pour les bons de livraison de gros en alimentation, boissons et primeurs",
              "Dynamic Margin Guard réconciliant les ventes de caisse avec la météo",
              "Infrastructure cloud australienne chiffrée sous contrôle souverain des données",
            ],
      deliverable:
        language === "en"
          ? "Staged Verified Draft Bills & Live 33% Wage Lock"
          : "Factures Brouillons Prêtes dans Xero & Verrou Salaires 33%",
    },
    {
      step: "03",
      duration: language === "en" ? "Ongoing" : "Accompagnement Continu",
      tag: language === "en" ? "1-Tap Mobile Governance" : "Gouvernance Mobile en 1 Clic",
      title: language === "en" ? "Zero Unapproved Commits & Direct Founder Line" : "Zéro Écriture Non Validée & Ligne Directe Fondateur",
      description:
        language === "en"
          ? "1-Tap Mobile Governance Conduits: zero unapproved commits to your ledger and zero shifts altered without explicit manager authorization."
          : "Conduits de Gouvernance Mobile en 1 Clic : zéro écriture non validée dans votre grand livre et zéro shift modifié sans accord explicite du responsable.",
      icon: Smartphone,
      bullets:
        language === "en"
          ? [
              "1-Tap green-light on mobile for staged wholesale bills and shift suggestions",
              "Direct engineering partnership with founder Mallory via mobile & private Slack",
              "Proprietary Supplier Price Guard flagging regional market overcharges",
              "Continuous pipeline tuning backed by personal mobile support",
            ]
          : [
              "Feu vert en 1 clic sur mobile pour les factures brouillons et suggestions de planning",
              "Partenariat d'ingénierie direct avec le fondateur Mallory via mobile & Slack privé",
              "Proprietary Supplier Price Guard signalant les surfacturations régionales",
              "Ajustements continus garantis par une ligne téléphonique directe",
            ],
      deliverable:
        language === "en"
          ? "Direct Founder Access • Cloud-Connected Globally, On-Site in Perth"
          : "Accès Direct au Fondateur • Connecté au Cloud, Sur Place à Perth",
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
