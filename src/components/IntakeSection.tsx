"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, Mail, Copy, Check, Sparkles, Terminal, Shield, ArrowRight } from "lucide-react";

export default function IntakeSection() {
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
    // Simulate API dispatch to local backend / Slack webhook
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("founder@haimate.com.au");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="intake" className="relative py-20 md:py-32 bg-[#0B0F19] border-b border-[#232F48]">
      
      {/* Background terminal ambiance */}
      <div className="absolute inset-0 terminal-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00F2FE]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#151D2F] border border-[#232F48] text-xs font-mono text-[#00F2FE] mb-3">
            <span>INTAKE CONSOLE // ON-BOARDING GATEWAY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#FFFFFF] tracking-tight">
            Ready to Cut Away Operational Friction?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#94A3B8]">
            Schedule your on-site 14-day diagnostic audit. We’ll map your workflows, inspect your POS/Xero pipelines, and calculate your exact ROI.
          </p>
        </div>

        {/* The Intake Card */}
        <div className="rounded-2xl bg-[#151D2F] border border-[#232F48] p-6 sm:p-10 shadow-2xl shadow-black/80 backdrop-blur-xl">
          
          {isSubmitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#00F2FE]/15 text-[#00F2FE] flex items-center justify-center mx-auto border border-[#00F2FE]/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#FFFFFF]">
                Audit Request Logged Successfully
              </h3>
              <p className="text-sm text-[#94A3B8] max-w-md mx-auto">
                Thank you, <span className="text-[#FFFFFF] font-bold">{formData.name}</span>. A principal automation engineer from Perth will review your bottleneck and contact you within 4 business hours to lock in your on-site diagnostic walk-through.
              </p>
              <div className="pt-4 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 rounded bg-[#0B0F19] text-xs font-mono text-[#00F2FE] border border-[#232F48] hover:border-[#00F2FE]"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8]">
                    Your Name <span className="text-[#00F2FE]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Liam Henderson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#0B0F19] border border-[#232F48] text-[#F8FAFC] placeholder-slate-600 focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors font-sans text-sm"
                  />
                </div>

                {/* Work Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8]">
                    Work Email <span className="text-[#00F2FE]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="e.g. liam@cottesloegroup.com.au"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#0B0F19] border border-[#232F48] text-[#F8FAFC] placeholder-slate-600 focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors font-sans text-sm"
                  />
                </div>
              </div>

              {/* Business Type */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8]">
                  Business Type <span className="text-[#00F2FE]">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    "Hospitality",
                    "Professional Services",
                    "Trade/Logistics",
                    "Other",
                  ].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, businessType: type })}
                      className={`px-3 py-2.5 rounded-lg text-xs font-mono font-medium border text-center transition-all ${
                        formData.businessType === type
                          ? "bg-[#00F2FE]/15 text-[#00F2FE] border-[#00F2FE] shadow-[0_0_12px_rgba(0,242,254,0.25)] font-bold"
                          : "bg-[#0B0F19] text-[#94A3B8] border-[#232F48] hover:border-slate-500"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Weekly Admin Bottleneck */}
              <div className="space-y-2">
                <label htmlFor="bottleneck" className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8]">
                  Current Weekly Admin Bottleneck
                </label>
                <textarea
                  id="bottleneck"
                  rows={3}
                  placeholder="e.g. Spending 6 hours every Monday entering supplier invoices into Xero and manually checking penalty rate rosters against weather."
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[#0B0F19] border border-[#232F48] text-[#F8FAFC] placeholder-slate-600 focus:outline-none focus:border-[#00F2FE] focus:ring-1 focus:ring-[#00F2FE] transition-colors font-sans text-sm"
                />
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg bg-[#00F2FE] text-[#04101A] font-bold text-base hover:brightness-110 shadow-[0_0_25px_rgba(0,242,254,0.35)] transition-all cursor-pointer font-sans border border-[#00F2FE]"
              >
                {isSubmitting ? (
                  <span className="font-mono">Processing Gateway Dispatch...</span>
                ) : (
                  <>
                    <span>Request 14-Day Diagnostic Audit</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs font-mono text-[#94A3B8] text-center pt-2">
                <Shield className="w-3.5 h-3.5 text-[#00F2FE]" />
                <span>Zero spam. Strict non-disclosure. SOC2 compliant pipeline assessment.</span>
              </div>
            </form>
          )}

          {/* Direct Contact Alternative */}
          <div className="mt-8 pt-6 border-t border-[#232F48] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#94A3B8]">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <MessageSquare className="w-4 h-4 text-[#00F2FE] flex-shrink-0" />
              <span>
                Prefer direct access? Reach us via Slack Connect or email{" "}
                <a
                  href="mailto:founder@haimate.com.au"
                  className="text-[#00F2FE] underline hover:text-[#FFFFFF]"
                >
                  founder@haimate.com.au
                </a>
              </span>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#0B0F19] text-[#94A3B8] border border-[#232F48] hover:text-[#00F2FE] hover:border-[#00F2FE] transition-colors"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Direct Email</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
