"use client";

import React, { useState } from "react";
import { CheckCircle2, MessageSquare, Copy, Check, Shield, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function IntakeSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "Hospitality",
    bottleneck: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("founder@haimate.com.au");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="intake" className="relative py-20 md:py-28 bg-white dark:bg-[#0F172A] border-b border-zinc-100 dark:border-[#232F48] transition-colors duration-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0096A3] dark:text-[#00F2FE] block mb-2">
            {t.intake.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
            {t.intake.title}
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-[#94A3B8]">
            {t.intake.subtitle}
          </p>
        </div>

        {/* Clean Form Card */}
        <div className="rounded-3xl bg-zinc-50/50 dark:bg-[#151D2F] border border-zinc-200/90 dark:border-[#232F48] p-8 sm:p-10 shadow-xs transition-colors duration-200">
          
          {isSubmitted ? (
            <div className="py-8 text-center space-y-3 animate-in fade-in duration-200">
              <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                {t.intake.successTitle}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-[#94A3B8] max-w-md mx-auto leading-relaxed">
                {language === "en" ? (
                  <>
                    Thank you, <span className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">{formData.name}</span>. I have received your request. I will personally review your operational bottleneck and reach out to <span className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">{formData.email}</span> within 4 hours to coordinate our walk-through.
                  </>
                ) : (
                  <>
                    Merci, <span className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">{formData.name}</span>. Votre demande a bien été reçue. J'examinerai personnellement votre point de friction opérationnel et recontacterai <span className="font-semibold text-[#0F172A] dark:text-[#F8FAFC]">{formData.email}</span> sous 4 heures pour organiser notre visite.
                  </>
                )}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2 rounded-full bg-white dark:bg-[#0B0F19] text-xs font-semibold text-zinc-800 dark:text-[#F8FAFC] border border-zinc-200 dark:border-[#232F48] hover:bg-zinc-100 dark:hover:bg-[#1E293B] cursor-pointer"
                >
                  {t.intake.submitAnother}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-[#94A3B8]">
                    {t.intake.formName} <span className="text-[#0096A3] dark:text-[#00F2FE]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder={language === "en" ? "Liam Henderson" : "Julien Mercier"}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-[#0B0F19] border border-zinc-200 dark:border-[#232F48] text-zinc-900 dark:text-[#F8FAFC] placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-[#0F172A] dark:focus:border-[#00F2FE] text-sm shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-[#94A3B8]">
                    {t.intake.formEmail} <span className="text-[#0096A3] dark:text-[#00F2FE]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder={language === "en" ? "liam@venue.com.au" : "julien@restaurant.com.au"}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-[#0B0F19] border border-zinc-200 dark:border-[#232F48] text-zinc-900 dark:text-[#F8FAFC] placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-[#0F172A] dark:focus:border-[#00F2FE] text-sm shadow-2xs"
                  />
                </div>
              </div>

              {/* Business Type */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-[#94A3B8]">
                  {language === "en" ? "Business Type" : "Secteur d'Activité"} <span className="text-[#0096A3] dark:text-[#00F2FE]">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: "Hospitality", label: language === "en" ? "Hospitality" : "Restauration" },
                    { id: "Professional Services", label: language === "en" ? "Professional Services" : "Services & Conseil" },
                    { id: "Trade/Logistics", label: language === "en" ? "Trade/Logistics" : "Commerce / Fret" },
                    { id: "Other", label: language === "en" ? "Other" : "Autre" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, businessType: item.id })}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all text-center cursor-pointer ${
                        formData.businessType === item.id
                          ? "bg-[#0F172A] dark:bg-[#00F2FE] text-white dark:text-[#0B0F19] font-bold shadow-xs"
                          : "bg-white dark:bg-[#0B0F19] text-zinc-700 dark:text-[#94A3B8] border border-zinc-200 dark:border-[#232F48] hover:border-zinc-300 dark:hover:border-[#00F2FE]/50"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Weekly Admin Bottleneck */}
              <div className="space-y-1.5">
                <label htmlFor="bottleneck" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-[#94A3B8]">
                  {t.intake.formBottleneck}
                </label>
                <textarea
                  id="bottleneck"
                  rows={3}
                  placeholder={
                    language === "en"
                      ? "e.g. Entering supplier invoices into Xero manually every Monday, or managing staff rosters when the weather turns bad."
                      : "Ex. Saisie manuelle des factures fournisseurs dans Xero le lundi matin, ou ajustement des plannings et heures majorées en cas d'intempéries."
                  }
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white dark:bg-[#0B0F19] border border-zinc-200 dark:border-[#232F48] text-zinc-900 dark:text-[#F8FAFC] placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-[#0F172A] dark:focus:border-[#00F2FE] text-sm shadow-2xs"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#0F172A] dark:bg-[#00F2FE] text-white dark:text-[#0B0F19] font-bold text-sm hover:bg-[#1E293B] dark:hover:bg-[#38bdf8] transition-all cursor-pointer shadow-sm"
              >
                {isSubmitting ? (
                  <span>{t.intake.submitting}</span>
                ) : (
                  <>
                    <span>{t.intake.submitBtn}</span>
                    <ArrowRight className="w-4 h-4 text-[#00BFCC] dark:text-[#0B0F19]" />
                  </>
                )}
              </button>

              <div className="text-center text-xs text-zinc-400 dark:text-[#64748B] pt-1">
                {language === "en" ? "Zero spam. Strict non-disclosure." : "Zéro spam. Confidentialité et secret d'affaires garantis."}
              </div>
            </form>
          )}

          {/* Direct Contact Alternative */}
          <div className="mt-8 pt-6 border-t border-zinc-200/80 dark:border-[#232F48] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600 dark:text-[#94A3B8]">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <MessageSquare className="w-4 h-4 text-zinc-400 dark:text-[#64748B] flex-shrink-0" />
              <span>
                {language === "en" ? "Prefer direct access? Reach us via Slack Connect or email " : "Vous préférez un accès direct ? Écrivez-nous par Slack Connect ou email "}
                <a
                  href="mailto:founder@haimate.com.au"
                  className="text-zinc-900 dark:text-[#F8FAFC] font-bold underline hover:text-[#0096A3] dark:hover:text-[#00F2FE]"
                >
                  founder@haimate.com.au
                </a>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://wa.me/61402472262?text=Hi%20Mallory%2C%20I%20run%20a%20venue%20in%20WA%20and%20want%20to%20chat%20about%20automating%20dockets%20and%20admin."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors shadow-2xs text-xs font-semibold"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>WhatsApp (+61 402 472 262)</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#0B0F19] text-zinc-700 dark:text-[#F8FAFC] border border-zinc-200 dark:border-[#232F48] hover:bg-zinc-100 dark:hover:bg-[#1E293B] transition-colors shadow-2xs text-xs font-medium cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-medium">{language === "en" ? "Copied" : "Copié"}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{language === "en" ? "Copy Email" : "Copier l'Email"}</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
