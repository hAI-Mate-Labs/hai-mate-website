"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight, Calendar, MessageSquare, Mail, Phone, ExternalLink } from "lucide-react";
import ApertureLogo from "./ApertureLogo";
import { useLanguage } from "@/context/LanguageContext";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSolution?: string;
}

export default function AuditModal({ isOpen, onClose, initialSolution }: AuditModalProps) {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"form" | "cal">("form");

  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    selectedTech: ["Lightspeed", "Xero"] as string[],
    grantInterest: true,
    workflowFocus: initialSolution || "14-Day Diagnostic Readiness Audit",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [auditId, setAuditId] = useState("");

  if (!isOpen) return null;

  const techOptions = [
    "Lightspeed",
    "Square",
    "Xero",
    "MYOB",
    "Deputy",
    "SevenRooms",
    "OpenTable",
  ];

  const handleToggleTech = (tech: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedTech: prev.selectedTech.includes(tech)
        ? prev.selectedTech.filter((t) => t !== tech)
        : [...prev.selectedTech, tech],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.contactName || !formData.email || !formData.businessName) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setAuditId(`WA-AUDIT-${Math.floor(1000 + Math.random() * 9000)}`);
    }, 500);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  const whatsappHref =
    "https://wa.me/61402472262?text=Hi%20Mallory%2C%20I%20run%20a%20venue%20and%20want%20to%20streamline%20our%20dockets%20and%20back-office%20admin.";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={handleResetAndClose}
        className="fixed inset-0 bg-zinc-900/40 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-zinc-200 shadow-xl overflow-hidden z-10 my-8 animate-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-zinc-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ApertureLogo className="h-6 w-6" />
            <div>
              <span className="text-sm font-bold text-[#0F172A] block">
                {t.auditModal.headerTitle}
              </span>
              <span className="text-xs text-zinc-500">
                {t.auditModal.headerSubtitle}
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="p-1 rounded-full text-zinc-400 hover:text-zinc-900 hover:bg-zinc-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher: Intake Form vs Instant Cal.com Discovery */}
        <div className="flex border-b border-zinc-100 bg-zinc-50/70 px-6 py-2.5 gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("form")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === "form"
                ? "bg-[#0F172A] text-white shadow-xs"
                : "text-zinc-600 hover:text-zinc-900 bg-white border border-zinc-200"
            }`}
          >
            {language === "en" ? "14-Day Audit Intake" : "Formulaire d'Audit 14 Jours"}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("cal")}
            className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
              activeTab === "cal"
                ? "bg-[#0F172A] text-white shadow-xs"
                : "text-zinc-600 hover:text-zinc-900 bg-white border border-zinc-200"
            }`}
          >
            <Calendar className="w-3.5 h-3.5 text-[#00BFCC]" />
            <span>{language === "en" ? "Instant Discovery (Cal.com)" : "Réserver sur Cal.com"}</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {activeTab === "cal" ? (
            <div className="py-2 space-y-5">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-[#00BFCC]/10 text-[#0096A3] flex items-center justify-center mx-auto border border-[#00BFCC]/20">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A]">
                  {language === "en" ? "15-Minute Operational Discovery" : "Échange Opérationnel de 15 Minutes"}
                </h3>
                <p className="text-xs text-zinc-600 max-w-sm mx-auto leading-relaxed">
                  {language === "en"
                    ? "Pick an exact time during your quiet afternoon kitchen break (2:30 PM – 4:30 PM). Mallory will review your POS and docket workflows directly."
                    : "Choisissez un créneau pendant le calme de l'après-midi (14h30 – 16h30). Mallory étudiera vos flux de caisse et de bons en direct."}
                </p>
              </div>

              {/* Cal.com Direct Action */}
              <a
                href="https://cal.com/haimate/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-[#0F172A] text-white font-semibold text-sm hover:bg-zinc-800 transition-all shadow-xs cursor-pointer group"
              >
                <Calendar className="w-4 h-4 text-[#00BFCC]" />
                <span>{language === "en" ? "Open Cal.com Discovery Calendar" : "Ouvrir l'Agenda Cal.com"}</span>
                <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Direct Alternative channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs font-semibold hover:bg-emerald-100 transition-colors flex items-center gap-2.5"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>WhatsApp (+61 402 472 262)</span>
                </a>
                <a
                  href="mailto:founder@haimate.com.au?subject=Venue%20Discovery%20Inquiry"
                  className="p-3 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-800 text-xs font-semibold hover:bg-zinc-100 transition-colors flex items-center gap-2.5"
                >
                  <Mail className="w-4 h-4 text-[#0096A3] shrink-0" />
                  <span>founder@haimate.com.au</span>
                </a>
              </div>

              <div className="text-[11px] text-zinc-400 text-center">
                {language === "en"
                  ? "Direct engineer access • No salespeople or account coordinators."
                  : "Accès direct ingénieur • Sans commerciaux ni intermédiaires."}
              </div>
            </div>
          ) : isSuccess ? (
            <div className="py-6 text-center space-y-3.5">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A]">
                {t.auditModal.reservedTitle.replace("{auditId}", auditId)}
              </h3>
              <p className="text-sm text-zinc-600 max-w-sm mx-auto leading-relaxed">
                {language === "fr" ? (
                  <>
                    Merci, <span className="text-[#0F172A] font-bold">{formData.contactName}</span>. Le diagnostic opérationnel pour{" "}
                    <span className="text-[#0F172A] font-bold">{formData.businessName}</span> a été pris en compte. J&apos;examinerai personnellement votre configuration et vous contacterai à{" "}
                    <span className="font-semibold text-[#0F172A]">{formData.email}</span> sous 4 heures.
                  </>
                ) : (
                  <>
                    Thank you, <span className="text-[#0F172A] font-bold">{formData.contactName}</span>. Your venue diagnostic walk-through for{" "}
                    <span className="text-[#0F172A] font-bold">{formData.businessName}</span> has been assigned. I will personally review your setup and contact you at{" "}
                    <span className="font-semibold text-[#0F172A]">{formData.email}</span> within 4 hours.
                  </>
                )}
              </p>

              <div className="pt-3">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 rounded-full bg-[#0F172A] text-white font-semibold text-sm hover:bg-zinc-800 cursor-pointer transition-colors"
                >
                  {t.auditModal.closeReturn}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-zinc-500 border-b border-zinc-100 pb-3">
                {t.auditModal.description}
              </p>

              {/* Venue Name & Your Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-zinc-700">
                    {t.auditModal.businessLabel} <span className="text-[#0096A3]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.auditModal.businessPlaceholder}
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 text-sm shadow-2xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-zinc-700">
                    {t.auditModal.nameLabel} <span className="text-[#0096A3]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t.auditModal.namePlaceholder}
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 text-sm shadow-2xs"
                  />
                </div>
              </div>

              {/* Email & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-zinc-700">
                    {t.auditModal.emailLabel} <span className="text-[#0096A3]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder={t.auditModal.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 text-sm shadow-2xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-zinc-700">
                    {t.auditModal.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    placeholder={t.auditModal.phonePlaceholder}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-zinc-950 text-sm shadow-2xs"
                  />
                </div>
              </div>

              {/* Software Stack */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-zinc-700">
                  {t.auditModal.stackLabel}
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {techOptions.map((tech) => {
                    const isSelected = formData.selectedTech.includes(tech);
                    return (
                      <button
                        key={tech}
                        type="button"
                        onClick={() => handleToggleTech(tech)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                          isSelected
                            ? "bg-[#0F172A] text-white font-bold"
                            : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                        }`}
                      >
                        {isSelected ? `✓ ${tech}` : tech}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* WA Grant Checkbox */}
              <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between">
                <div className="space-y-0.5 pr-2">
                  <span className="text-xs font-bold text-[#0F172A] block">
                    {t.auditModal.grantLabel}
                  </span>
                  <span className="text-[11px] text-zinc-500 block">
                    {t.auditModal.grantSub}
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={formData.grantInterest}
                  onChange={(e) => setFormData({ ...formData, grantInterest: e.target.checked })}
                  className="w-4 h-4 accent-[#0F172A] rounded cursor-pointer"
                />
              </div>

              {/* Between-Service Call Window */}
              <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between">
                <div className="space-y-0.5 pr-2">
                  <span className="text-xs font-bold text-[#0F172A] block">
                    {t.auditModal.serviceWindowLabel}
                  </span>
                  <span className="text-[11px] text-zinc-500 block">
                    {t.auditModal.serviceWindowSub}
                  </span>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 accent-[#0F172A] rounded cursor-pointer"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-[#0F172A] text-white font-semibold text-sm hover:bg-zinc-800 transition-all cursor-pointer shadow-xs"
              >
                {isSubmitting ? (
                  <span>{t.auditModal.submitting}</span>
                ) : (
                  <>
                    <span>{t.auditModal.submitBtn}</span>
                    <ArrowRight className="w-4 h-4 text-[#00BFCC]" />
                  </>
                )}
              </button>

              {/* Or switch to Cal.com */}
              <div className="pt-1 text-center">
                <button
                  type="button"
                  onClick={() => setActiveTab("cal")}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0096A3] hover:underline cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>
                    {language === "en"
                      ? "Prefer to pick a 15-min call slot? Book on Cal.com →"
                      : "Vous préférez choisir un créneau de 15 min ? Réserver sur Cal.com →"}
                  </span>
                </button>
              </div>

              {/* Direct WhatsApp Alternative */}
              <div className="pt-0.5 text-center">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>{t.auditModal.whatsappDirect}</span>
                </a>
              </div>

              <div className="text-[11px] text-zinc-400 text-center">
                {t.auditModal.confidential}
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
