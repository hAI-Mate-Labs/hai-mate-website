"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface FaqSectionProps {
  onOpenAuditModal: () => void;
}

export default function FaqSection({ onOpenAuditModal }: FaqSectionProps) {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = language === "fr" ? [
    {
      question: "Nos équipes en cuisine ou en salle devront-elles apprendre un nouveau logiciel ?",
      answer:
        "Absolument pas. Notre règle d'or est de n'ajouter aucun écran, dashboard ou mot de passe supplémentaire. Vos chefs prennent simplement une photo du bon de livraison papier sur leur téléphone ou transfèrent les factures reçues par email. Les responsables reçoivent une notification claire pour valider les factures ou les plannings en 1 clic sur WhatsApp ou mobile en quelques secondes.",
    },
    {
      question: "Que se passe-t-il si un fournisseur applique une hausse de prix imprévue ?",
      answer:
        "C'est la force centrale de notre pipeline d'ingestion. Chaque ligne d'article est automatiquement confrontée à votre grille tarifaire contractuelle négociée. Si un grossiste facture le bar de ligne à 24,50 $/kg au lieu des 21,00 $/kg convenus, l'anomalie est surlignée en rouge avec le montant exact de l'écart (+70 $) et mise en attente pour validation humaine avant tout enregistrement comptable dans Xero ou MYOB.",
    },
    {
      question: "Comment fonctionne la subvention de 50% de l'État du WA (Local Capability Fund) ?",
      answer:
        "Les entreprises opérant en Australie-Occidentale (WA) avec un ABN actif et moins de 200 employés peuvent bénéficier d'une prise en charge à 50% à fonds perdus via le Local Capability Fund (Stream 1 jusqu'à 25 000 $, Stream 2 jusqu'à 50 000 $). Lors de notre audit de 14 jours, nous rédigeons l'intégralité du dossier technique, l'architecture des flux et les calculs de retour sur investissement requis.",
    },
    {
      question: "Quels systèmes de caisse (POS) et de comptabilité sont compatibles ?",
      answer:
        "Nous nous connectons nativement en lecture seule via API à Lightspeed (Kounta), Square, OrderMate, Toast, Xero, MYOB, Deputy, Tanda, SevenRooms et OpenTable. Si votre établissement utilise un autre système de caisse ou des tableurs sur mesure, nous les auditons lors du diagnostic initial pour concevoir un connecteur dédié.",
    },
    {
      question: "Nos données de marge et nos accords fournisseurs restent-ils confidentiels ?",
      answer:
        "Confidentialité absolue et souveraine. Toutes les données sont traitées sur une infrastructure cloud souveraine chiffrée en Australie (OAuth 2.0). Vos accords commerciaux, fiches techniques et données financières ne sont jamais partagés, vendus ou utilisés pour entraîner des modèles publics.",
    },
    {
      question: "Quel temps notre équipe doit-elle consacrer à l'Audit Diagnostique de 14 jours ?",
      answer:
        "Moins d'une heure. Nous réalisons une visite de 45 minutes sur place pendant le calme de la préparation matinale (ou une connexion cloud sécurisée hors WA), suivie de la configuration des flux en lecture seule. Nous effectuons toute la cartographie en arrière-plan sans perturber votre service et vous livrons un plan chiffré clair.",
    },
  ] : [
    {
      question: "Will my kitchen or floor staff need to learn complicated new software?",
      answer:
        "No. We deliberately do not add more screens, dashboards, or logins for your team to juggle. Chefs simply take a photo of paper dockets on their phone or forward supplier email PDFs. Floor managers receive a simple prompt to approve rosters or invoices directly on their phone with a single tap in seconds.",
    },
    {
      question: "What happens if a supplier invoice has an overcharge or pricing mistake?",
      answer:
        "That is one of the main reasons venue owners work with us. When an invoice arrives, line items are automatically checked against your contracted pricing agreement. If your seafood supplier charged $19.50/kg instead of your agreed $17.00/kg, the discrepancy is flagged immediately in amber/red and held for manager review before anything touches Xero or MYOB.",
    },
    {
      question: "How does the WA Government 50% matched funding grant work?",
      answer:
        "Eligible Western Australian businesses can access up to 50% co-funding through the Local Capability Fund (LCF) Digital Transformation Round (Stream 1 up to $25,000; Stream 2 up to $50,000). During our 14-day diagnostic audit, we prepare the complete technical scoping package, architecture plan, and ROI documentation so your application is submission-ready.",
    },
    {
      question: "Which point-of-sale and accounting systems work out of the box?",
      answer:
        "We connect quietly via read-only OAuth with Lightspeed (Kounta), Square, OrderMate, Toast, Xero, MYOB, Deputy, Tanda, SevenRooms, OpenTable, and Resy. If your venue uses a custom till system or spreadsheet workflow, we inspect it during the initial walk-through and connect it smoothly.",
    },
    {
      question: "Is our supplier pricing and financial data kept strictly confidential?",
      answer:
        "100% confidential. All data is processed securely through sovereign Australian cloud infrastructure under encrypted OAuth 2.0 governance. Your supplier agreements, recipe costs, and financial figures are never shared, sold, or used for public model training. Strict NDA guaranteed.",
    },
    {
      question: "How much of my team's time will the 14-Day Diagnostic Audit take?",
      answer:
        "Very little. We typically need a 45-minute on-site floor walk-through with you or your venue manager during quiet morning prep hours (or asynchronous cloud OAuth setup outside Sydney & Perth), followed by read-only feed reviews. We do all the mapping in the background and deliver a concise, plain-English executive roadmap.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 md:py-28 bg-zinc-50/60 dark:bg-[#0F172A] border-y border-zinc-200/80 dark:border-[#232F48] transition-colors duration-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#151D2F] border border-zinc-200 dark:border-[#232F48] text-xs font-bold text-[#0F172A] dark:text-[#F8FAFC] shadow-2xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#0096A3] dark:text-[#00F2FE]" />
            <span>{language === "fr" ? "QUESTIONS FRÉQUEMMENT POSÉES" : "FREQUENTLY ASKED QUESTIONS"}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] dark:text-[#F8FAFC] tracking-tight leading-tight">
            {language === "fr" ? (
              <>
                Réponses Claires pour{" "}
                <span className="relative inline-block text-[#0096A3] dark:text-[#00F2FE]">
                  Exploitants Exigeants.
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-[#00BFCC]/20 -z-10 rounded-xs" />
                </span>
              </>
            ) : (
              <>
                Clear Answers for{" "}
                <span className="relative inline-block text-[#0096A3] dark:text-[#00F2FE]">
                  Busy Venue Owners.
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-[#00BFCC]/20 -z-10 rounded-xs" />
                </span>
              </>
            )}
          </h2>

          <p className="text-base text-zinc-600 dark:text-[#94A3B8] font-normal leading-relaxed">
            {language === "fr"
              ? "Tout ce que vous devez savoir sur le fonctionnement de nos automatisations, le contrôle humain garanti et les aides gouvernementales."
              : "Everything you need to know about how our margin conduits work, what they cost, and why you maintain 100% human control."}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white dark:bg-[#151D2F] border border-zinc-200/90 dark:border-[#232F48] overflow-hidden transition-all duration-200 shadow-2xs hover:border-zinc-300 dark:hover:border-[#00F2FE]/40"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-zinc-50/80 dark:hover:bg-[#1E293B]/50 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold text-[#0F172A] dark:text-[#F8FAFC] pr-4 leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full border transition-transform duration-200 shrink-0 ${
                    isOpen
                      ? "bg-[#0096A3]/10 dark:bg-[#00F2FE]/10 border-[#0096A3]/30 dark:border-[#00F2FE]/40 text-[#0096A3] dark:text-[#00F2FE] rotate-180"
                      : "bg-zinc-100 dark:bg-[#0B0F19] border-zinc-200 dark:border-[#232F48] text-zinc-500 dark:text-[#94A3B8]"
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-zinc-600 dark:text-[#94A3B8] leading-relaxed font-normal border-t border-zinc-100 dark:border-[#232F48] bg-zinc-50/50 dark:bg-[#0B0F19]/50 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Helper Bar */}
        <div className="mt-12 text-center text-xs text-zinc-500 dark:text-[#94A3B8] flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>
            {language === "fr"
              ? "Une question spécifique sur votre caisse ou vos fournisseurs ?"
              : "Have a specific question about your venue's till or suppliers?"}
          </span>
          <button
            type="button"
            onClick={onOpenAuditModal}
            className="font-bold text-[#0096A3] dark:text-[#00F2FE] underline hover:opacity-80 cursor-pointer"
          >
            {language === "fr"
              ? "Posez-la directement pendant votre diagnostic de 14 jours →"
              : "Ask during your 14-day diagnostic review →"}
          </button>
        </div>

      </div>
    </section>
  );
}
