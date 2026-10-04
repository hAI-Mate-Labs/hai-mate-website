"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Printer,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Landmark,
  Building,
  Phone,
  MessageSquare,
} from "lucide-react";
import ApertureLogo from "@/components/ApertureLogo";
import AuditModal from "@/components/AuditModal";
import { useLanguage } from "@/context/LanguageContext";

export default function SampleAuditPage() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const handlePrint = () => {
    window.print();
  };

  const isFr = language === "fr";

  const whatsappHref =
    "https://wa.me/61402472262?text=Hi%20Mallory%2C%20I%20run%20a%20venue%20and%20want%20to%20streamline%20our%20dockets%20and%20back-office%20admin.";

  return (
    <div className="min-h-screen bg-zinc-50/50 dark:bg-[#0F172A] text-zinc-900 dark:text-zinc-100 font-sans antialiased">
      {/* Top Action Bar (hidden on print) */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0F172A]/90 backdrop-blur-md border-b border-zinc-200/80 dark:border-[#232F48] px-4 sm:px-8 py-3.5 flex items-center justify-between print:hidden">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-[#0F172A] dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isFr ? "Retour à hAI Mate!" : "Back to hAI Mate!"}</span>
          </Link>
          <span className="text-zinc-300 dark:text-zinc-700">|</span>
          <span className="text-xs font-bold text-[#0F172A] dark:text-white hidden sm:inline">
            {isFr ? "Dossier d'Audit Exécutif" : "Executive Audit Teardown Dossier"}
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Language Switcher */}
          <div className="inline-flex items-center p-1 rounded-full bg-zinc-100 dark:bg-[#151D2F] border border-zinc-200 dark:border-[#232F48] text-xs font-semibold">
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === "en"
                  ? "bg-[#0F172A] text-white shadow-2xs font-bold dark:bg-[#00BFCC] dark:text-[#0F172A]"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-[#0F172A] dark:hover:text-white"
              }`}
            >
              🇦🇺 EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage("fr")}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${
                language === "fr"
                  ? "bg-[#0F172A] text-white shadow-2xs font-bold dark:bg-[#00BFCC] dark:text-[#0F172A]"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-[#0F172A] dark:hover:text-white"
              }`}
            >
              🇫🇷 FR
            </button>
          </div>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white dark:bg-[#151D2F] border border-zinc-200 dark:border-[#232F48] text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-[#232F48] transition-colors shadow-2xs cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-[#0096A3] dark:text-[#00BFCC]" />
            <span className="hidden sm:inline">{isFr ? "Imprimer / PDF" : "Print / Save as PDF"}</span>
          </button>

          <button
            type="button"
            onClick={() => setAuditModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#0F172A] dark:bg-[#00BFCC] text-white dark:text-[#0F172A] text-xs font-bold hover:bg-[#1E293B] dark:hover:bg-[#00E5FF] transition-all shadow-xs cursor-pointer"
          >
            <span>{t.sampleAudit.bookAuditBtn}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#00BFCC] dark:text-[#0F172A]" />
          </button>
        </div>
      </header>

      {/* Screen View */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8 print:hidden">
        {/* Document Header Card */}
        <div className="rounded-3xl bg-white dark:bg-[#151D2F] border border-zinc-200/90 dark:border-[#232F48] p-8 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 dark:border-[#232F48] pb-4">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold text-amber-700 bg-amber-50 dark:bg-amber-950/40 dark:text-amber-300 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-800">
                {t.sampleAudit.badge}
              </span>
              <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                REF: AUD-WA-2026-COTT
              </span>
            </div>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-semibold">
              {isFr
                ? "Cadré par Mallory Antomarchi • Australie-Occidentale"
                : "Scoped by Mallory Antomarchi • Western Australia"}
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-black text-[#0F172A] dark:text-white tracking-tight">
              {isFr
                ? "Audit Diagnostique d'Automatisation (14 Jours) & Cadrage Subvention WA"
                : "14-Day Diagnostic Automation Teardown & WA Grant Scoping"}
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <strong>{isFr ? "Établissement Cible : " : "Target Client: "}</strong>
              {isFr
                ? "Bistrot & Cuisine de Bord de Mer Cottesloe (120 Couverts • Bistrot & Bar)"
                : "Cottesloe Beachside Bistro & Kitchen (120 Seats • Bistro & Bar)"}
              <br />
              <strong>{isFr ? "Systèmes Audités : " : "Audited Stack: "}</strong>
              {isFr
                ? "Caisse Lightspeed POS • Comptabilité Xero • Plannings Deputy"
                : "Lightspeed POS • Xero Accounting • Deputy Rostering"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-[#0F172A]/70 border border-zinc-100 dark:border-[#232F48] space-y-1">
              <span className="text-[10px] font-bold uppercase text-zinc-400 dark:text-zinc-400 block">
                {isFr ? "Friction Annuelle Détectée" : "Identified Annual Drag"}
              </span>
              <span className="text-2xl font-black text-red-600 dark:text-red-400">$48,660 / {isFr ? "an" : "yr"}</span>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                {isFr
                  ? "Paperasse administrative et hausses récupérables"
                  : "Recoverable back-office admin & price-creep"}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-[#0F172A]/70 border border-zinc-100 dark:border-[#232F48] space-y-1">
              <span className="text-[10px] font-bold uppercase text-zinc-400 dark:text-zinc-400 block">
                {isFr ? "Temps Admin Récupéré" : "Weekly Admin Recovered"}
              </span>
              <span className="text-2xl font-black text-[#0F172A] dark:text-white">12.0 Hours</span>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                {isFr
                  ? "Réinvesti sur le plancher en salle par la direction"
                  : "Returned to general manager floor service"}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/40 space-y-1">
              <span className="text-[10px] font-bold uppercase text-emerald-700 dark:text-emerald-300 block">
                {isFr ? "Délai de Rentabilité Net" : "Net Payback Speed"}
              </span>
              <span className="text-2xl font-black text-emerald-700 dark:text-emerald-300">11.8 Weeks</span>
              <p className="text-[11px] text-emerald-800 dark:text-emerald-300/80">
                {isFr
                  ? "Après déduction de la subvention de 50% du WA"
                  : "After 50% WA State Government grant rebate"}
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: Drag Heatmap */}
        <div className="rounded-3xl bg-white dark:bg-[#151D2F] border border-zinc-200/90 dark:border-[#232F48] p-8 shadow-xs space-y-6">
          <div className="border-b border-zinc-100 dark:border-[#232F48] pb-3">
            <h2 className="text-lg font-bold text-[#0F172A] dark:text-white">
              {isFr
                ? "1. Cartographie de la Friction Administrative en Arrière-Boutique"
                : "1. Back-Office Administrative Drag Heatmap"}
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {isFr
                ? "Détail des heures de gestion manuelle sur un cycle typique de 7 jours :"
                : "Breakdown of manual paperwork hours logged during typical 7-day operating cycle:"}
            </p>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-2xl border border-zinc-200 dark:border-[#232F48] bg-zinc-50/50 dark:bg-[#0F172A]/60 flex flex-col sm:flex-row justify-between gap-3">
              <div>
                <span className="text-sm font-bold text-[#0F172A] dark:text-white block">
                  {isFr
                    ? "Saisie des Lignes de Bons & Contrôle des Prix"
                    : "Delivery Docket Line-Item Entry & Price Checks"}
                </span>
                <p className="text-xs text-zinc-600 dark:text-zinc-300">
                  {isFr
                    ? "Saisie manuelle des factures papier tachées dans Xero tous les lundis matin."
                    : "Typing messy sauce-stained receipts into Xero bills every Monday morning."}
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-base font-black text-[#0F172A] dark:text-white">5.5 hrs / wk</span>
                <span className="text-xs text-red-600 dark:text-red-400 block font-semibold">
                  {isFr ? "Coût : 14 300 $/an" : "$14,300/yr cost"}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-zinc-200 dark:border-[#232F48] bg-zinc-50/50 dark:bg-[#0F172A]/60 flex flex-col sm:flex-row justify-between gap-3">
              <div>
                <span className="text-sm font-bold text-[#0F172A] dark:text-white block">
                  {isFr
                    ? "Heures Majorées du Dimanche & Estimations Météo"
                    : "Sunday Penalty Roster Restructuring & Weather Guesswork"}
                </span>
                <p className="text-xs text-zinc-600 dark:text-zinc-300">
                  {isFr
                    ? "Sur-effectif sous la pluie et sous-effectif en cas d'affluence ensoleillée à la plage."
                    : "Floor overstaffed during rain and understaffed during beach weather surges."}
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-base font-black text-[#0F172A] dark:text-white">2.5 hrs / wk</span>
                <span className="text-xs text-red-600 dark:text-red-400 block font-semibold">
                  {isFr ? "Coût : 6 500 $/an" : "$6,500/yr cost"}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl border border-zinc-200 dark:border-[#232F48] bg-zinc-50/50 dark:bg-[#0F172A]/60 flex flex-col sm:flex-row justify-between gap-3">
              <div>
                <span className="text-sm font-bold text-[#0F172A] dark:text-white block">
                  {isFr
                    ? "Appels de Réservation Manqués & Relance de Banquets"
                    : "Unanswered Dinner Reservation Calls & Large Group Chasing"}
                </span>
                <p className="text-xs text-zinc-600 dark:text-zinc-300">
                  {isFr
                    ? "Appels non pris pendant le service du soir menant à des réservations perdues."
                    : "Unanswered calls during slammed dinner services leading to lost table bookings."}
                </p>
              </div>
              <div className="text-right shrink-0">
                <span className="text-base font-black text-[#0F172A] dark:text-white">4.0 hrs / wk</span>
                <span className="text-xs text-red-600 dark:text-red-400 block font-semibold">
                  {isFr ? "Coût : 10 400 $/an" : "$10,400/yr cost"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Supplier Rate Overcharges Caught */}
        <div className="rounded-3xl bg-white dark:bg-[#151D2F] border border-zinc-200/90 dark:border-[#232F48] p-8 shadow-xs space-y-6">
          <div className="border-b border-zinc-100 dark:border-[#232F48] pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-[#0F172A] dark:text-white">
                {isFr
                  ? "2. Hausses de Tarifs Fournisseurs Relevées (17 460 $ / an)"
                  : "2. Itemized Supplier Rate Overcharges Caught ($17,460 / yr)"}
              </h2>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {isFr
                  ? "Comparaison de 45 bons échantillonnés avec les barèmes négociés sous contrat :"
                  : "Cross-checking 45 sampled dockets against contracted agreed price schedules:"}
              </p>
            </div>
            <span className="text-xs font-bold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/40 px-2.5 py-1 rounded-full border border-rose-200 dark:border-rose-800">
              {isFr ? "4 Anomalies Détectées" : "4 Discrepancies Caught"}
            </span>
          </div>

          <div className="border border-zinc-200 dark:border-[#232F48] rounded-2xl overflow-x-auto">
            <table className="w-full text-left text-xs min-w-[500px]">
              <thead className="bg-zinc-50 dark:bg-[#0F172A]/80 border-b border-zinc-200 dark:border-[#232F48] text-zinc-500 dark:text-zinc-400 uppercase tracking-wider font-semibold">
                <tr>
                  <th className="p-3">{isFr ? "Désignation" : "Item Description"}</th>
                  <th className="p-3">{isFr ? "Tarif Sous Contrat" : "Contract Rate"}</th>
                  <th className="p-3 text-red-600 dark:text-red-400">{isFr ? "Tarif Facturé" : "Billed Rate"}</th>
                  <th className="p-3">{isFr ? "Surcoût Mensuel" : "Monthly Overcharge"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-[#232F48]">
                <tr>
                  <td className="p-3 font-medium text-zinc-900 dark:text-white">
                    {isFr ? "Filets de Barramundi Local (avec peau)" : "Local Barramundi Fillets (Skin-on)"}
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-300">$28.50 / kg</td>
                  <td className="p-3 font-bold text-red-600 dark:text-red-400">$31.00 / kg (+$2.50)</td>
                  <td className="p-3 font-bold text-[#0F172A] dark:text-white">$520 / mo</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-zinc-900 dark:text-white">
                    {isFr ? "Faux-Filet Black Angus Grain-Fed (YG)" : "Black Angus Grain-Fed Sirloin (YG)"}
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-300">$33.50 / kg</td>
                  <td className="p-3 font-bold text-red-600 dark:text-red-400">$36.50 / kg (+$3.00)</td>
                  <td className="p-3 font-bold text-[#0F172A] dark:text-white">$495 / mo</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-zinc-900 dark:text-white">
                    {isFr ? "Crème Entière Pâtissière (Bidons 2L)" : "Pure Dairy Whipping Cream (2L Jugs)"}
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-300">$10.50 / jug</td>
                  <td className="p-3 font-bold text-red-600 dark:text-red-400">$11.80 / jug (+$1.30)</td>
                  <td className="p-3 font-bold text-[#0F172A] dark:text-white">$280 / mo</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-zinc-900 dark:text-white">
                    {isFr ? "Fûts de Bière Artisanale (Remise Promo)" : "Single Malt Craft Kegs (Promotional Rebate)"}
                  </td>
                  <td className="p-3 text-zinc-600 dark:text-zinc-300">$290 / keg</td>
                  <td className="p-3 font-bold text-red-600 dark:text-red-400">
                    $330 / keg {isFr ? "(Remise oubliée)" : "(Rebate dropped)"}
                  </td>
                  <td className="p-3 font-bold text-[#0F172A] dark:text-white">$160 / mo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 3: WA Government Grant Scoping & ROI */}
        <div className="rounded-3xl bg-white dark:bg-[#151D2F] border border-zinc-200/90 dark:border-[#232F48] p-8 shadow-xs space-y-6">
          <div className="border-b border-zinc-100 dark:border-[#232F48] pb-3">
            <h2 className="text-lg font-bold text-[#0F172A] dark:text-white">
              {isFr
                ? "3. Co-Financement Subvention WA (LCF) & Plan de Rentabilité"
                : "3. WA State Government (LCF) Grant Co-Funding & Payback Blueprint"}
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              {isFr
                ? "Modèle de financement partagé du volet transition numérique du Local Capability Fund :"
                : "Local Capability Fund Digital Transformation Round co-funding model:"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#0F172A]/70 border border-zinc-200 dark:border-[#232F48] space-y-2 text-xs">
              <span className="font-bold text-[#0F172A] dark:text-white block text-sm">
                {isFr ? "Investissement d'Ingénierie" : "Engineering Investment"}
              </span>
              <div className="flex justify-between">
                <span className="text-zinc-600 dark:text-zinc-400">
                  {isFr ? "Total des Conduits Cadrés :" : "Total Scoped Pipelines:"}
                </span>
                <span className="font-semibold text-[#0F172A] dark:text-white">$22,000</span>
              </div>
              <div className="flex justify-between text-emerald-700 dark:text-emerald-400 font-semibold">
                <span>{isFr ? "Remboursement Subvention WA (50%) :" : "WA Gov LCF Matched Rebate (50%):"}</span>
                <span>-$11,000</span>
              </div>
              <div className="pt-2 border-t border-zinc-200 dark:border-[#232F48] flex justify-between font-bold text-sm text-[#0F172A] dark:text-white">
                <span>{isFr ? "Investissement Net de l'Établissement :" : "Net Venue Investment:"}</span>
                <span>$11,000</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-[#0F172A]/70 border border-zinc-200 dark:border-[#232F48] space-y-2 text-xs">
              <span className="font-bold text-[#0F172A] dark:text-white block text-sm">
                {isFr ? "Valeur Récupérée & Rentabilité" : "Recovered Value & Payback"}
              </span>
              <div className="flex justify-between">
                <span className="text-zinc-600 dark:text-zinc-400">
                  {isFr ? "Heures Admin Récupérées :" : "Admin Hours Recovered:"}
                </span>
                <span className="font-semibold text-[#0F172A] dark:text-white">$31,200 / {isFr ? "an" : "yr"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-600 dark:text-zinc-400">
                  {isFr ? "Surfacturations Récupérées :" : "Supplier Overcharges Caught:"}
                </span>
                <span className="font-semibold text-[#0F172A] dark:text-white">$17,460 / {isFr ? "an" : "yr"}</span>
              </div>
              <div className="pt-2 border-t border-zinc-200 dark:border-[#232F48] flex justify-between font-bold text-sm text-emerald-700 dark:text-emerald-400">
                <span>{isFr ? "Délai de Rentabilité Projeté :" : "Projected Net Payback Speed:"}</span>
                <span>11.8 Weeks</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final Covenant & Action Box */}
        <div className="rounded-3xl bg-[#0F172A] text-white p-8 space-y-6 shadow-sm border dark:border-[#232F48]">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#00BFCC]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#00BFCC]">
                {isFr ? "L'Engagement 100% Valeur hAI Mate!" : "The hAI Mate! 100% Value Guarantee"}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              {isFr
                ? "Prêt à Lancer un Audit de 14 Jours pour Votre Établissement ?"
                : "Ready to Run a 14-Day Audit for Your Venue?"}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-2xl">
              {isFr ? (
                <>
                  Si notre diagnostic de 14 jours ne met pas en évidence au minimum <strong>3x sa valeur en friction administrative récupérable ou en surfacturations fournisseurs</strong>, vous payez 0 $. Nous passons pendant les heures de mise en place — zéro interruption du service.
                </>
              ) : (
                <>
                  If our 14-day diagnostic audit doesn’t uncover at least <strong>3x its value in recoverable paperwork drag or supplier overcharges</strong>, you pay $0. We walk your floor during prep hours—zero disruption to service.
                </>
              )}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setAuditModalOpen(true)}
              className="px-6 py-3 rounded-full bg-white dark:bg-[#00BFCC] text-[#0F172A] dark:text-[#0F172A] font-bold text-xs hover:bg-zinc-100 dark:hover:bg-[#00E5FF] transition-colors shadow-xs cursor-pointer"
            >
              {t.sampleAudit.bookAuditBtn}
            </button>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-bold text-xs hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>{isFr ? "Discuter sur WhatsApp (0402 472 262)" : "Chat on WhatsApp (0402 472 262)"}</span>
            </a>

            <button
              type="button"
              onClick={handlePrint}
              className="px-5 py-3 rounded-full border border-zinc-700 dark:border-[#232F48] text-zinc-300 font-semibold text-xs hover:bg-zinc-800 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{isFr ? "Imprimer / Télécharger en PDF" : "Print / Download PDF"}</span>
            </button>
          </div>
        </div>
      </main>

      {/* Audit Booking Modal */}
      <AuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
        initialSolution="Sample Audit Review"
      />
    </div>
  );
}
