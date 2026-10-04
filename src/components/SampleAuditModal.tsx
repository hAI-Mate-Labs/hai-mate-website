"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  X,
  FileText,
  Clock,
  DollarSign,
  AlertTriangle,
  CheckCircle2,
  Landmark,
  ShieldCheck,
  ArrowRight,
  TrendingUp,
  Download,
  Building,
  Utensils,
  Share2,
  Printer,
  ExternalLink,
} from "lucide-react";
import ApertureLogo from "./ApertureLogo";
import { useLanguage } from "@/context/LanguageContext";

interface SampleAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookAudit: () => void;
}

type TabType = "overview" | "heatmap" | "priceCreep" | "grantRoi";

export default function SampleAuditModal({
  isOpen,
  onClose,
  onBookAudit,
}: SampleAuditModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const isFr = language === "fr";

  return (
    <>
      {/* 1. Modal View for Screen Display */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-zinc-950/70 backdrop-blur-md animate-in fade-in duration-200 print:hidden">
        
        {/* Modal Container */}
        <div
          className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="px-6 py-4 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/70 shrink-0">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white border border-zinc-200/80 text-zinc-900 shadow-2xs">
                <FileText className="w-4 h-4 text-[#0096A3]" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#0F172A]">
                    {t.sampleAudit.modalTitle}
                  </span>
                  <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                    {t.sampleAudit.badge}
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500">
                  {t.sampleAudit.modalSubtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-700 hover:text-zinc-950 hover:bg-zinc-50 shadow-2xs transition-colors cursor-pointer"
                title={t.sampleAudit.printBtn}
              >
                <Printer className="w-3.5 h-3.5 text-[#0096A3]" />
                <span className="hidden sm:inline">{t.sampleAudit.printBtn}</span>
              </button>

              <Link
                href="/sample-audit"
                target="_blank"
                className="p-2 text-zinc-400 hover:text-zinc-900 rounded-full hover:bg-zinc-100 transition-colors"
                title={t.sampleAudit.openStandalone}
              >
                <ExternalLink className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={onClose}
                className="p-2 text-zinc-400 hover:text-zinc-900 rounded-full hover:bg-zinc-100 transition-colors cursor-pointer"
                aria-label={t.sampleAudit.closeAria}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Tab Selector */}
          <div className="px-6 py-2.5 border-b border-zinc-100 flex items-center gap-2 overflow-x-auto bg-white shrink-0 scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveTab("overview")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === "overview"
                  ? "bg-[#0F172A] text-white shadow-xs"
                  : "text-zinc-600 hover:text-[#0F172A] hover:bg-zinc-100"
              }`}
            >
              {t.sampleAudit.tab1}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("heatmap")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === "heatmap"
                  ? "bg-[#0F172A] text-white shadow-xs"
                  : "text-zinc-600 hover:text-[#0F172A] hover:bg-zinc-100"
              }`}
            >
              {t.sampleAudit.tab2}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("priceCreep")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === "priceCreep"
                  ? "bg-[#0F172A] text-white shadow-xs"
                  : "text-zinc-600 hover:text-[#0F172A] hover:bg-zinc-100"
              }`}
            >
              {t.sampleAudit.tab3}
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("grantRoi")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === "grantRoi"
                  ? "bg-[#0F172A] text-white shadow-xs"
                  : "text-zinc-600 hover:text-[#0F172A] hover:bg-zinc-100"
              }`}
            >
              {t.sampleAudit.tab4}
            </button>
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6 text-zinc-800">
            
            {/* TAB 1: OVERVIEW */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">
                      {isFr ? "Synthèse Diagnostique de 14 Jours" : "14-Day Diagnostic Summary"}
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      {isFr ? "Systèmes Audités : Lightspeed POS + Xero + Deputy" : "Audited Stack: Lightspeed POS + Xero + Deputy"}
                    </span>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0F172A]">
                    {isFr ? "Total des Pertes Annuelles Identifiées : 48 660 $ / an" : "Total Identified Annual Leakage: $48,660 / Year"}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {isFr
                      ? "Au cours de notre période d'observation de 14 jours, nous n'avons occasionné aucune interruption du service ni de la mise en place. Nous avons inspecté 45 bons de livraison de marée et primeurs, corrélé les ventes horaires avec la météo et analysé les réservations manquées en dehors des heures d'ouverture."
                      : "During our 14-day observation period, we observed zero disruption to kitchen prep or floor service. We reviewed 45 historical seafood and produce dockets, matched POS hourly sales against weather, and analyzed after-hours reservation drop-offs."}
                  </p>
                </div>

                {/* 3 Metric Summary Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl border border-zinc-200 bg-white space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
                      {isFr ? "Heures Admin Récupérées" : "Admin Hours Recovered"}
                    </span>
                    <div className="text-2xl font-black text-[#0F172A]">
                      12.0 Hrs <span className="text-xs font-normal text-zinc-500">{isFr ? "/ sem" : "/ week"}</span>
                    </div>
                    <p className="text-xs text-zinc-600">
                      {isFr
                        ? "31 200 $/an en temps de direction réinvesti en salle plutôt qu'en tâches administratives."
                        : "$31,200/yr in recovered general manager time away from back-office paperwork."}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl border border-red-200 bg-red-50/30 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 block">
                      {isFr ? "Surfacturations Fournisseurs" : "Supplier Rate Overcharges"}
                    </span>
                    <div className="text-2xl font-black text-red-600">
                      $17,460 <span className="text-xs font-normal text-red-500">{isFr ? "/ an" : "/ year"}</span>
                    </div>
                    <p className="text-xs text-zinc-600">
                      {isFr
                        ? "Dérive tarifaire non annoncée stoppée chez 3 fournisseurs sous contrat (marée, viandes, crèmerie)."
                        : "Caught unannounced price creep across 3 contracted suppliers (seafood, meats, dairy)."}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl border border-emerald-200 bg-emerald-50/30 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">
                      {isFr ? "Prise en Charge Subvention WA" : "WA Grant Co-Funding"}
                    </span>
                    <div className="text-2xl font-black text-emerald-700">
                      50% ($11,000)
                    </div>
                    <p className="text-xs text-zinc-600">
                      {isFr
                        ? "Co-financement Local Capability Fund (LCF) pré-cadré. Retour sur investissement net en 11,8 semaines."
                        : "Local Capability Fund (LCF) co-funding pre-scoped. Net payback in 11.8 weeks."}
                    </p>
                  </div>
                </div>

                {/* Action Recommendation */}
                <div className="p-4 rounded-2xl bg-[#0F172A] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#00BFCC] block">
                      {isFr ? "Plan de Déploiement Recommandé" : "Recommended Implementation Path"}
                    </span>
                    <p className="text-xs text-zinc-300">
                      {isFr
                        ? "Déployer le Conduit 1 (OCR Bons de Livraison vers Xero) & le Conduit 2 (Verrouillage Météo-Salaires Lightspeed)."
                        : "Deploy Conduit 1 (OCR Docket Parser into Xero) & Conduit 2 (Lightspeed Weather Wage Lock)."}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onBookAudit}
                    className="px-4 py-2 rounded-full bg-white text-[#0F172A] font-bold text-xs hover:bg-zinc-100 transition-colors shrink-0 cursor-pointer"
                  >
                    {t.sampleAudit.bookAuditBtn}
                  </button>
                </div>
              </div>
            )}

            {/* TAB 2: HEATMAP */}
            {activeTab === "heatmap" && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    {isFr
                      ? "Décomposition des Tâches Administratives Hebdomadaires"
                      : "Weekly Back-Office Paperwork Drag Breakdown"}
                  </h3>
                  <p className="text-xs text-zinc-500">
                    {isFr
                      ? "Temps perdu par la direction et le chef de cuisine sur un cycle typique du lundi au dimanche :"
                      : "Time lost by venue manager and head chef during a typical Monday to Sunday cycle:"}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#0F172A]">
                          {isFr
                            ? "1. Saisie des Lignes de Bons de Livraison & Contrôle des Prix"
                            : "1. Delivery Docket Line-Item Entry & Price Checks"}
                        </span>
                        <span className="text-[10px] font-semibold text-red-700 bg-red-50 px-2 py-0.5 rounded-full border border-red-200">
                          {isFr ? "Forte Friction" : "High Friction"}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-600">
                        {isFr
                          ? "Saisie manuelle des bons papier tachés de 4 fournisseurs de marée et primeurs dans Xero tous les lundis matin."
                          : "Typing messy, oil-stained paper receipts from 4 produce and seafood suppliers into Xero bills every Monday morning."}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-base font-black text-[#0F172A]">5.5 hrs / wk</span>
                      <span className="text-[11px] text-zinc-400 block">
                        {isFr ? "Coût : 14 300 $/an" : "$14,300/yr cost"}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#0F172A]">
                          {isFr
                            ? "2. Heures Majorées du Dimanche & Estimations Météo"
                            : "2. Sunday Penalty Rate Restructuring & Weather Guesswork"}
                        </span>
                        <span className="text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                          {isFr ? "Fuite de Marge" : "Margin Leakage"}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-600">
                        {isFr
                          ? "Sur-effectif les mardis midis pluvieux et sous-effectif les weekends ensoleillés en bord de mer, causant une explosion des heures supplémentaires."
                          : "Floor overstaffed on rainy Tuesday lunches and understaffed on sunny beach weekends, causing overtime blowout."}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-base font-black text-[#0F172A]">2.5 hrs / wk</span>
                      <span className="text-[11px] text-zinc-400 block">
                        {isFr ? "Coût : 6 500 $/an" : "$6,500/yr cost"}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl border border-zinc-200 bg-zinc-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#0F172A]">
                          {isFr
                            ? "3. Appels Manqués & Relances d'Acomptes pour Banquets"
                            : "3. Missed Table Calls & Group Function Deposit Chasing"}
                        </span>
                        <span className="text-[10px] font-semibold text-zinc-700 bg-zinc-100 px-2 py-0.5 rounded-full">
                          {isFr ? "Chiffre Perdu" : "Lost Revenue"}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-600">
                        {isFr
                          ? "Appels non pris pendant le rush du vendredi et samedi soir entraînant des pertes de réservations de grands groupes."
                          : "Unanswered calls during slammed Friday and Saturday dinner services leading to lost group bookings."}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-base font-black text-[#0F172A]">4.0 hrs / wk</span>
                      <span className="text-[11px] text-zinc-400 block">
                        {isFr ? "Coût : 10 400 $/an" : "$10,400/yr cost"}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#00BFCC]/10 border border-[#00BFCC]/30 flex items-center justify-between text-xs text-zinc-900 font-medium">
                  <span>{isFr ? "Friction Administrative Totale Identifiée :" : "Total Identified Administrative Drag:"}</span>
                  <span className="font-bold text-[#0F172A] text-sm">
                    {isFr ? "12,0 Heures / Semaine (31 200 $ / An)" : "12.0 Hours / Week ($31,200 / Year)"}
                  </span>
                </div>
              </div>
            )}

            {/* TAB 3: PRICE CREEP */}
            {activeTab === "priceCreep" && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    {isFr
                      ? "Anomalies & Surfacturations Fournisseurs Détectées"
                      : "Caught Supplier Discrepancies & Overcharges"}
                  </h3>
                  <p className="text-xs text-zinc-500">
                    {isFr
                      ? "Analyse ligne par ligne de 45 bons de livraison échantillonnés sur 60 jours :"
                      : "Line-item rate analysis from 45 delivery dockets sampled over 60 days:"}
                  </p>
                </div>

                <div className="border border-zinc-200 rounded-2xl overflow-hidden">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-zinc-50 border-b border-zinc-200 text-zinc-500 uppercase tracking-wider font-semibold">
                      <tr>
                        <th className="p-3">{isFr ? "Désignation" : "Item Description"}</th>
                        <th className="p-3">{isFr ? "Tarif Négocié" : "Agreed Rate"}</th>
                        <th className="p-3 text-red-600">{isFr ? "Tarif Facturé" : "Billed Rate"}</th>
                        <th className="p-3">{isFr ? "Surcoût / Mois" : "Overcharge / Mo"}</th>
                        <th className="p-3 text-right">{isFr ? "Statut" : "Status"}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100">
                      <tr>
                        <td className="p-3 font-medium text-zinc-900">
                          {isFr ? "Filets de Barramundi Local (avec peau)" : "Local Barramundi Fillets (Skin-on)"}
                          <span className="block text-[10px] text-zinc-400">
                            {isFr ? "Fournisseur : Grossiste Marée Océan" : "Supplier: Fresh Ocean Wholesalers"}
                          </span>
                        </td>
                        <td className="p-3 text-zinc-600">$28.50 / kg</td>
                        <td className="p-3 font-bold text-red-600">$31.00 / kg (+$2.50)</td>
                        <td className="p-3 font-semibold text-zinc-950">$520 / mo</td>
                        <td className="p-3 text-right">
                          <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-700 font-bold text-[10px]">
                            {isFr ? "Détecté" : "Caught"}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-zinc-900">
                          {isFr ? "Faux-Filet Black Angus Grain-Fed (YG)" : "Black Angus Grain-Fed Sirloin (YG)"}
                          <span className="block text-[10px] text-zinc-400">
                            {isFr ? "Fournisseur : Viandes WA Prime" : "Supplier: WA Prime Wholesale"}
                          </span>
                        </td>
                        <td className="p-3 text-zinc-600">$33.50 / kg</td>
                        <td className="p-3 font-bold text-red-600">$36.50 / kg (+$3.00)</td>
                        <td className="p-3 font-semibold text-zinc-950">$495 / mo</td>
                        <td className="p-3 text-right">
                          <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-700 font-bold text-[10px]">
                            {isFr ? "Détecté" : "Caught"}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-zinc-900">
                          {isFr ? "Crème Entière Pâtissière (Bidons 2L)" : "Pure Dairy Whipping Cream (2L Jugs)"}
                          <span className="block text-[10px] text-zinc-400">
                            {isFr ? "Fournisseur : Laiterie Heritage" : "Supplier: Heritage Mill Co"}
                          </span>
                        </td>
                        <td className="p-3 text-zinc-600">$10.50 / jug</td>
                        <td className="p-3 font-bold text-red-600">$11.80 / jug (+$1.30)</td>
                        <td className="p-3 font-semibold text-zinc-950">$280 / mo</td>
                        <td className="p-3 text-right">
                          <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-700 font-bold text-[10px]">
                            {isFr ? "Détecté" : "Caught"}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium text-zinc-900">
                          {isFr ? "Fûts de Bière Artisanale (Remise Promo)" : "Single Malt Craft Kegs (Promotional Rebate)"}
                          <span className="block text-[10px] text-zinc-400">
                            {isFr ? "Fournisseur : Brasserie Locale" : "Supplier: Local Brewery Dist"}
                          </span>
                        </td>
                        <td className="p-3 text-zinc-600">
                          {isFr ? "$290 / fût (après remise)" : "$290 / keg (after rebate)"}
                        </td>
                        <td className="p-3 font-bold text-red-600">
                          {isFr ? "$330 / fût (Remise oubliée)" : "$330 / keg (Rebate dropped)"}
                        </td>
                        <td className="p-3 font-semibold text-zinc-950">$160 / mo</td>
                        <td className="p-3 text-right">
                          <span className="px-2 py-0.5 rounded-full bg-red-50 text-red-700 font-bold text-[10px]">
                            {isFr ? "Détecté" : "Caught"}
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-4 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-red-900 block">
                      {isFr ? "Surcoût Fournisseur Invisible Récupérable :" : "Net Unnoticed Supplier Creep Recoverable:"}
                    </span>
                    <span className="text-[11px] text-red-700">
                      {isFr
                        ? "Chaque livraison future sera vérifiée ligne par ligne par rapport aux tarifs négociés."
                        : "Every future delivery will be checked line-by-line against agreed contract prices."}
                    </span>
                  </div>
                  <div className="text-xl font-black text-red-700">
                    $17,460 / {isFr ? "an" : "year"}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: GRANT & ROI */}
            {activeTab === "grantRoi" && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    {isFr
                      ? "Cadrage Subvention Gouvernement du WA & Modèle Financier sur 3 Ans"
                      : "WA State Government Grant Scoping & 3-Year Financial Model"}
                  </h3>
                  <p className="text-xs text-zinc-500">
                    {isFr
                      ? "Structure de co-financement du volet transformation digitale du Local Capability Fund (LCF) :"
                      : "Local Capability Fund (LCF) Digital Round matched co-funding structure:"}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl border border-zinc-200 bg-white space-y-3">
                    <span className="text-xs font-bold text-[#0F172A] block border-b border-zinc-100 pb-2">
                      {isFr ? "Investissement d'Ingénierie" : "Implementation Investment"}
                    </span>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-zinc-600">
                          {isFr ? "Ingénierie Totale Cadrée :" : "Total Scoped Engineering:"}
                        </span>
                        <span className="font-semibold text-zinc-950">$22,000</span>
                      </div>
                      <div className="flex justify-between text-emerald-700 font-semibold">
                        <span>{isFr ? "Prise en charge Subvention WA 50% :" : "WA Gov 50% LCF Grant Rebate:"}</span>
                        <span>-$11,000</span>
                      </div>
                      <div className="pt-2 border-t border-zinc-100 flex justify-between font-bold text-sm text-[#0F172A]">
                        <span>{isFr ? "Investissement Net de l'Établissement :" : "Net Venue Investment:"}</span>
                        <span>$11,000</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl border border-zinc-200 bg-white space-y-3">
                    <span className="text-xs font-bold text-[#0F172A] block border-b border-zinc-100 pb-2">
                      {isFr ? "Retour sur Investissement" : "Payback & Returns"}
                    </span>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-zinc-600">
                          {isFr ? "Heures Admin Récupérées :" : "Admin Hours Recovered:"}
                        </span>
                        <span className="font-semibold text-zinc-950">$31,200 / {isFr ? "an" : "yr"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-600">
                          {isFr ? "Surfacturations Récupérées :" : "Supplier Overcharges Caught:"}
                        </span>
                        <span className="font-semibold text-zinc-950">$17,460 / {isFr ? "an" : "yr"}</span>
                      </div>
                      <div className="pt-2 border-t border-zinc-100 flex justify-between font-bold text-sm text-emerald-700">
                        <span>{isFr ? "Délai de Rentabilité :" : "Payback Speed:"}</span>
                        <span>{isFr ? "11,8 Semaines" : "11.8 Weeks"}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dossier status */}
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#0096A3]" />
                    <span className="text-zinc-700">
                      <strong>{isFr ? "Dossier de Candidature LCF : " : "LCF Scoping Dossier: "}</strong>
                      {isFr
                        ? "Schémas d'architecture, conformité prestataires et projections financières prêts au dépôt."
                        : "Architecture diagrams, vendor compliance, and financial projection ready for submission."}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold shrink-0">
                    {isFr ? "Pré-Rempli" : "Pre-Filled"}
                  </span>
                </div>
              </div>
            )}

          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-5 border-t border-zinc-100 bg-zinc-50/70 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2 text-xs text-zinc-500">
              <ShieldCheck className="w-4 h-4 text-[#0096A3]" />
              <span>{t.sampleAudit.guarantee}</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-zinc-200 bg-white text-xs font-bold text-zinc-800 hover:bg-zinc-100 transition-colors w-full sm:w-auto cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-[#0096A3]" />
                <span>{t.sampleAudit.printBtn}</span>
              </button>

              <button
                type="button"
                onClick={onBookAudit}
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#0F172A] text-white text-xs font-bold hover:bg-zinc-800 transition-all shadow-xs w-full sm:w-auto cursor-pointer"
              >
                <span>{t.sampleAudit.bookAuditBtn}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00BFCC]" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* 2. Dedicated Hidden Container Printed Exclusively via window.print() */}
      <div id="printable-audit-report" className="hidden">
        {/* Letterhead Header */}
        <div style={{ borderBottom: "2px solid #0F172A", paddingBottom: "12px", marginBottom: "16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <h1 style={{ fontSize: "20px", fontWeight: "900", letterSpacing: "-0.5px", margin: 0, color: "#0F172A" }}>
                hAI Mate! <span style={{ fontSize: "12px", fontWeight: "600", color: "#0096A3" }}>// {isFr ? "IA APPLIQUÉE POUR LA RESTAURATION" : "APPLIED AI FOR HOSPITALITY"}</span>
              </h1>
              <p style={{ fontSize: "11px", color: "#52525B", margin: "2px 0 0 0" }}>
                {isFr
                  ? "Pratique d'Automatisation IA Appliquée • Sur le terrain à Perth & dans le WA • Au service des établissements à l'échelle nationale"
                  : "Applied AI Automation Practice • Operating on-the-ground in Perth & WA • Serving Venues Nationally"}
              </p>
            </div>
            <div style={{ textAlign: "right" }}>
              <span style={{ fontSize: "10px", fontWeight: "700", textTransform: "uppercase", background: "#F4F4F5", padding: "3px 8px", borderRadius: "4px" }}>
                {isFr ? "RAPPORT D'AUDIT CONFIDENTIEL" : "CONFIDENTIAL AUDIT TEARDOWN"}
              </span>
              <p style={{ fontSize: "10px", color: "#71717A", margin: "4px 0 0 0" }}>
                Ref: AUD-WA-2026-COTT • Scoped: October 2026
              </p>
            </div>
          </div>
        </div>

        {/* Client & Engagement Overview */}
        <div style={{ background: "#FAFAFA", border: "1px solid #E4E4E7", borderRadius: "8px", padding: "12px", marginBottom: "16px" }}>
          <table style={{ width: "100%", fontSize: "11px", borderCollapse: "collapse" }}>
            <tbody>
              <tr>
                <td style={{ width: "25%", color: "#71717A", fontWeight: "600" }}>{isFr ? "Établissement :" : "Client Reference:"}</td>
                <td style={{ width: "35%", fontWeight: "700", color: "#0F172A" }}>Cottesloe Beachside Bistro &amp; Kitchen (WA)</td>
                <td style={{ width: "20%", color: "#71717A", fontWeight: "600" }}>{isFr ? "Capacité :" : "Venue Capacity:"}</td>
                <td style={{ width: "20%", fontWeight: "700", color: "#0F172A" }}>{isFr ? "120 Couverts • Bistrot & Bar" : "120 Seats • Bistro & Bar"}</td>
              </tr>
              <tr>
                <td style={{ color: "#71717A", fontWeight: "600", paddingTop: "4px" }}>{isFr ? "Praticien Responsable :" : "Lead Practitioner:"}</td>
                <td style={{ fontWeight: "700", color: "#0F172A", paddingTop: "4px" }}>Mallory Antomarchi ({isFr ? "Fondateur" : "Founder"})</td>
                <td style={{ color: "#71717A", fontWeight: "600", paddingTop: "4px" }}>{isFr ? "Systèmes Audités :" : "Audited Systems:"}</td>
                <td style={{ fontWeight: "700", color: "#0F172A", paddingTop: "4px" }}>Lightspeed POS • Xero • Deputy</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 1: Executive Scorecard */}
        <div style={{ marginBottom: "16px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "800", textTransform: "uppercase", color: "#0F172A", borderBottom: "1px solid #E4E4E7", paddingBottom: "4px", marginBottom: "8px" }}>
            {isFr ? "1. Synthèse Exécutive : Pertes Opérationnelles Annuelles Détectées" : "1. Executive Scorecard: Identified Annual Operational Leakage"}
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "11px" }}>
            <thead>
              <tr style={{ background: "#F4F4F5", textAlign: "left" }}>
                <th style={{ padding: "6px", border: "1px solid #E4E4E7" }}>{isFr ? "Tâche Administrative" : "Identified Area of Drag"}</th>
                <th style={{ padding: "6px", border: "1px solid #E4E4E7" }}>{isFr ? "Perte Hebdomadaire" : "Weekly Leakage"}</th>
                <th style={{ padding: "6px", border: "1px solid #E4E4E7" }}>{isFr ? "Coût Annuel" : "Annual Dollar Cost"}</th>
                <th style={{ padding: "6px", border: "1px solid #E4E4E7" }}>{isFr ? "Solution Déployée" : "Automation Solution"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "6px", border: "1px solid #E4E4E7", fontWeight: "600" }}>
                  {isFr ? "Saisie Manuelle des Bons de Livraison" : "Manual Delivery Docket Line Entry"}
                </td>
                <td style={{ padding: "6px", border: "1px solid #E4E4E7" }}>5.5 Hours / Wk</td>
                <td style={{ padding: "6px", border: "1px solid #E4E4E7", color: "#DC2626", fontWeight: "700" }}>$14,300 / {isFr ? "An" : "Year"}</td>
                <td style={{ padding: "6px", border: "1px solid #E4E4E7" }}>
                  {isFr ? "Scan OCR Mobile en 5s → Factures Brouillons Xero" : "5-Sec Phone OCR Scan → Draft Xero Bills"}
                </td>
              </tr>
              <tr>
                <td style={{ padding: "6px", border: "1px solid #E4E4E7", fontWeight: "600" }}>
                  {isFr ? "Dérive des Prix Fournisseurs Sous Contrat" : "Supplier Contract Price-Creep"}
                </td>
                <td style={{ padding: "6px", border: "1px solid #E4E4E7" }}>{isFr ? "4 Fournisseurs Vérifiés" : "4 Suppliers Checked"}</td>
                <td style={{ padding: "6px", border: "1px solid #E4E4E7", color: "#DC2626", fontWeight: "700" }}>$17,460 / {isFr ? "An" : "Year"}</td>
                <td style={{ padding: "6px", border: "1px solid #E4E4E7" }}>
                  {isFr ? "Contrôle Automatique des Tarifs Négociés" : "Autonomous Contract Rate Cross-Check"}
                </td>
              </tr>
              <tr>
                <td style={{ padding: "6px", border: "1px solid #E4E4E7", fontWeight: "600" }}>
                  {isFr ? "Heures Majorées du Dimanche & Météo" : "Penalty Roster Restructuring & Weather Drag"}
                </td>
                <td style={{ padding: "6px", border: "1px solid #E4E4E7" }}>2.5 Hours / Wk</td>
                <td style={{ padding: "6px", border: "1px solid #E4E4E7", color: "#DC2626", fontWeight: "700" }}>$6,500 / {isFr ? "An" : "Year"}</td>
                <td style={{ padding: "6px", border: "1px solid #E4E4E7" }}>
                  {isFr ? "Verrouillage Salaires Lightspeed POS + Météo" : "Lightspeed POS + Rain Forecast Wage Lock"}
                </td>
              </tr>
              <tr>
                <td style={{ padding: "6px", border: "1px solid #E4E4E7", fontWeight: "600" }}>
                  {isFr ? "Appels de Réservation Manqués" : "Unanswered Dinner Table Reservation Calls"}
                </td>
                <td style={{ padding: "6px", border: "1px solid #E4E4E7" }}>4.0 Hours / Wk</td>
                <td style={{ padding: "6px", border: "1px solid #E4E4E7", color: "#DC2626", fontWeight: "700" }}>$10,400 / {isFr ? "An" : "Year"}</td>
                <td style={{ padding: "6px", border: "1px solid #E4E4E7" }}>
                  {isFr ? "Agent Vocal & SMS 24/7 pour Réservations" : "24/7 Natural Phone & SMS Booking Agent"}
                </td>
              </tr>
              <tr style={{ background: "#FAFAFA", fontWeight: "800" }}>
                <td style={{ padding: "8px 6px", border: "1px solid #E4E4E7" }} colSpan={2}>
                  {isFr ? "TOTAL ANNUEL DE FRICTION OPÉRATIONNELLE RÉCUPÉRABLE :" : "TOTAL ANNUAL OPERATIONAL DRAG RECOVERABLE:"}
                </td>
                <td style={{ padding: "8px 6px", border: "1px solid #E4E4E7", color: "#DC2626", fontSize: "13px" }}>
                  $48,660 / {isFr ? "AN" : "YEAR"}
                </td>
                <td style={{ padding: "8px 6px", border: "1px solid #E4E4E7", color: "#0096A3" }}>
                  {isFr ? "12,0 Heures Admin / Semaine Récupérées" : "12.0 Admin Hours / Week Recovered"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 2: Caught Price Creep Breakdown */}
        <div style={{ marginBottom: "16px" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "800", textTransform: "uppercase", color: "#0F172A", borderBottom: "1px solid #E4E4E7", paddingBottom: "4px", marginBottom: "8px" }}>
            {isFr
              ? "2. Détail des Hausses Fournisseurs Détectées (Échantillon de 45 Bons)"
              : "2. Itemized Caught Supplier Price-Creep Audit (Sample of 45 Dockets)"}
          </h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "10px" }}>
            <thead>
              <tr style={{ background: "#F4F4F5", textAlign: "left" }}>
                <th style={{ padding: "5px", border: "1px solid #E4E4E7" }}>{isFr ? "Désignation Fournisseur" : "Wholesale Line Item"}</th>
                <th style={{ padding: "5px", border: "1px solid #E4E4E7" }}>{isFr ? "Tarif Négocié" : "Contract Rate"}</th>
                <th style={{ padding: "5px", border: "1px solid #E4E4E7" }}>{isFr ? "Tarif Facturé" : "Billed Rate"}</th>
                <th style={{ padding: "5px", border: "1px solid #E4E4E7" }}>{isFr ? "Hausse Détectée" : "Unannounced Increase"}</th>
                <th style={{ padding: "5px", border: "1px solid #E4E4E7" }}>{isFr ? "Surcoût Mensuel" : "Monthly Leakage"}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: "5px", border: "1px solid #E4E4E7" }}>
                  {isFr ? "Filets de Barramundi Local (avec peau)" : "Local Barramundi Fillets (Skin-on)"}
                </td>
                <td style={{ padding: "5px", border: "1px solid #E4E4E7" }}>$28.50 / kg</td>
                <td style={{ padding: "5px", border: "1px solid #E4E4E7", color: "#DC2626", fontWeight: "700" }}>$31.00 / kg</td>
                <td style={{ padding: "5px", border: "1px solid #E4E4E7", color: "#DC2626" }}>+$2.50 / kg (+8.7%)</td>
                <td style={{ padding: "5px", border: "1px solid #E4E4E7", fontWeight: "700" }}>$520 / {isFr ? "mois" : "month"}</td>
              </tr>
              <tr>
                <td style={{ padding: "5px", border: "1px solid #E4E4E7" }}>
                  {isFr ? "Faux-Filet Black Angus Grain-Fed (YG)" : "Black Angus Grain-Fed Sirloin (YG)"}
                </td>
                <td style={{ padding: "5px", border: "1px solid #E4E4E7" }}>$33.50 / kg</td>
                <td style={{ padding: "5px", border: "1px solid #E4E4E7", color: "#DC2626", fontWeight: "700" }}>$36.50 / kg</td>
                <td style={{ padding: "5px", border: "1px solid #E4E4E7", color: "#DC2626" }}>+$3.00 / kg (+8.9%)</td>
                <td style={{ padding: "5px", border: "1px solid #E4E4E7", fontWeight: "700" }}>$495 / {isFr ? "mois" : "month"}</td>
              </tr>
              <tr>
                <td style={{ padding: "5px", border: "1px solid #E4E4E7" }}>
                  {isFr ? "Crème Entière Pâtissière (Bidons 2L)" : "Pure Dairy Whipping Cream (2L Jugs)"}
                </td>
                <td style={{ padding: "5px", border: "1px solid #E4E4E7" }}>$10.50 / jug</td>
                <td style={{ padding: "5px", border: "1px solid #E4E4E7", color: "#DC2626", fontWeight: "700" }}>$11.80 / jug</td>
                <td style={{ padding: "5px", border: "1px solid #E4E4E7", color: "#DC2626" }}>+$1.30 / jug (+12.4%)</td>
                <td style={{ padding: "5px", border: "1px solid #E4E4E7", fontWeight: "700" }}>$280 / {isFr ? "mois" : "month"}</td>
              </tr>
              <tr>
                <td style={{ padding: "5px", border: "1px solid #E4E4E7" }}>
                  {isFr ? "Fûts de Bière Artisanale (Remise Promo)" : "Single Malt Craft Kegs (Promotional Rebate)"}
                </td>
                <td style={{ padding: "5px", border: "1px solid #E4E4E7" }}>$290 / keg (net)</td>
                <td style={{ padding: "5px", border: "1px solid #E4E4E7", color: "#DC2626", fontWeight: "700" }}>$330 / keg</td>
                <td style={{ padding: "5px", border: "1px solid #E4E4E7", color: "#DC2626" }}>
                  {isFr ? "Remise promo oubliée sans préavis" : "Rebate dropped unannounced"}
                </td>
                <td style={{ padding: "5px", border: "1px solid #E4E4E7", fontWeight: "700" }}>$160 / {isFr ? "mois" : "month"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 3: WA Government Grant Co-Funding & ROI */}
        <div style={{ marginBottom: "16px", pageBreakInside: "avoid" }}>
          <h2 style={{ fontSize: "13px", fontWeight: "800", textTransform: "uppercase", color: "#0F172A", borderBottom: "1px solid #E4E4E7", paddingBottom: "4px", marginBottom: "8px" }}>
            {isFr
              ? "3. Cadrage Subvention Gouvernement du WA (LCF) & Modèle de Retour sur Investissement"
              : "3. WA State Government (LCF) Grant Co-Funding & Payback Model"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", fontSize: "11px" }}>
            <div style={{ border: "1px solid #E4E4E7", borderRadius: "6px", padding: "10px", background: "#FAFAFA" }}>
              <div style={{ fontWeight: "700", marginBottom: "6px", borderBottom: "1px solid #E4E4E7", paddingBottom: "4px" }}>
                {isFr ? "Investissement & Subvention 50%" : "Investment & 50% Grant Co-Funding"}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <span>{isFr ? "Ingénierie Personnalisée :" : "Custom Engineering Scope:"}</span>
                <span style={{ fontWeight: "600" }}>$22,000</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px", color: "#059669", fontWeight: "700" }}>
                <span>{isFr ? "Prise en charge Subvention WA (50%) :" : "WA Gov LCF Grant Matched Rebate (50%):"}</span>
                <span>-$11,000</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "4px", borderTop: "1px solid #E4E4E7", fontWeight: "800", fontSize: "12px" }}>
                <span>{isFr ? "Investissement Net de l'Établissement :" : "Net Venue Investment:"}</span>
                <span>$11,000</span>
              </div>
            </div>

            <div style={{ border: "1px solid #E4E4E7", borderRadius: "6px", padding: "10px", background: "#FAFAFA" }}>
              <div style={{ fontWeight: "700", marginBottom: "6px", borderBottom: "1px solid #E4E4E7", paddingBottom: "4px" }}>
                {isFr ? "Gains Annuels & Délai de Rentabilité" : "Annual Return & Payback Speed"}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <span>{isFr ? "Valeur des Heures Admin Récupérées :" : "Recovered Admin Hours Value:"}</span>
                <span style={{ fontWeight: "600" }}>$31,200 / {isFr ? "an" : "yr"}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                <span>{isFr ? "Surfacturations Récupérées :" : "Recovered Supplier Overcharges:"}</span>
                <span style={{ fontWeight: "600" }}>$17,460 / {isFr ? "an" : "yr"}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "4px", borderTop: "1px solid #E4E4E7", fontWeight: "800", fontSize: "12px", color: "#059669" }}>
                <span>{isFr ? "Délai de Rentabilité Net Projeté :" : "Projected Net Payback Speed:"}</span>
                <span>{isFr ? "11,8 Semaines" : "11.8 Weeks"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: Covenant & Guarantee */}
        <div style={{ border: "1.5px solid #0F172A", borderRadius: "8px", padding: "10px", fontSize: "10px", background: "#FFFFFF", pageBreakInside: "avoid" }}>
          <div style={{ fontWeight: "800", textTransform: "uppercase", marginBottom: "4px", color: "#0F172A" }}>
            {isFr
              ? "L'Engagement 100% Valeur hAI Mate! & la Charte de Contrôle Humain"
              : "The hAI Mate! 100% Value Guarantee & Human-in-the-Loop Covenant"}
          </div>
          <p style={{ margin: 0, color: "#3F3F46", lineHeight: 1.5 }}>
            {isFr ? (
              <>
                1. <strong>Contrôle Humain Strict :</strong> Aucune action automatisée ne s&apos;exécute sans accord explicite. Les directeurs d&apos;établissement conservent l&apos;autorité exclusive de validation en 1 tap pour chaque écriture comptable, paiement de facture et modification de planning.<br />
                2. <strong>Garantie 3x le ROI :</strong> Si notre audit diagnostique de 14 jours n&apos;identifie pas au minimum 3x sa valeur en friction administrative récupérable ou en surfacturations fournisseurs, vous payez 0 $.<br />
                3. <strong>Zéro Verrouillage Propriétaire :</strong> Tous les conduits se connectent via des API standards. Vous conservez l&apos;entière propriété de toutes vos données historiques, instructions et flux.
              </>
            ) : (
              <>
                1. <strong>Strict Human-in-the-Loop:</strong> No automated action runs unapproved. Venue managers retain sole 1-tap approval authority over every ledger post, invoice payment, and shift modification.<br />
                2. <strong>3x ROI Guarantee:</strong> If our 14-day diagnostic audit does not identify at least 3x its value in recoverable paperwork drag or supplier overcharges, you pay $0.<br />
                3. <strong>Zero Lock-in:</strong> All pipelines connect via standard APIs. You retain complete ownership of all historical data, prompts, and workflows.
              </>
            )}
          </p>
          <div style={{ marginTop: "8px", paddingTop: "6px", borderTop: "1px solid #E4E4E7", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span><strong>{isFr ? "Contact Praticien :" : "Practitioner Contact:"}</strong> Mallory Antomarchi • Mobile &amp; WhatsApp: 0402 472 262</span>
            <span>Email: founder@haimate.com.au • Web: haimate.com.au</span>
          </div>
        </div>
      </div>
    </>
  );
}
