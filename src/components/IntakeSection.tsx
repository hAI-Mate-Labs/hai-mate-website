"use client";

import React, { useState } from "react";
import { CheckCircle2, MessageSquare, Copy, Check, Shield, ArrowRight } from "lucide-react";

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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("founder@haimate.com.au");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="intake" className="relative py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800 mb-3">
            <span>INTAKE // DIRECT TECHNICAL ENGAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Ready to Cut Away Operational Friction?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Schedule your on-site 14-day diagnostic audit. We’ll map your workflows, inspect your POS/Xero pipelines, and calculate your exact ROI.
          </p>
        </div>

        {/* The Intake Card */}
        <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-10 shadow-sm">
          
          {isSubmitted ? (
            <div className="py-10 text-center space-y-4 animate-in fade-in duration-200">
              <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center mx-auto border border-slate-300">
                <CheckCircle2 className="w-7 h-7 text-[#0096A3]" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Audit Request Logged
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. As a solo practitioner, I will personally review your operational bottleneck and email you at <span className="font-semibold text-slate-900">{formData.email}</span> within 4 hours to coordinate our diagnostic walk-through.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 rounded bg-slate-100 text-xs font-mono text-slate-800 border border-slate-200 hover:bg-slate-200"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-700">
                    Your Name <span className="text-[#0096A3]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Liam Henderson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm"
                  />
                </div>

                {/* Work Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-700">
                    Work Email <span className="text-[#0096A3]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="liam@cottesloegroup.com.au"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm"
                  />
                </div>
              </div>

              {/* Business Type */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700">
                  Business Type <span className="text-[#0096A3]">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
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
                      className={`px-3 py-2 rounded-lg text-xs font-mono transition-all text-center ${
                        formData.businessType === type
                          ? "bg-[#0F172A] text-white font-bold border border-[#0F172A]"
                          : "bg-white text-slate-700 border border-slate-300 hover:border-slate-400"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Weekly Admin Bottleneck */}
              <div className="space-y-1.5">
                <label htmlFor="bottleneck" className="block text-xs font-mono uppercase tracking-wider text-slate-700">
                  Current Weekly Admin Bottleneck
                </label>
                <textarea
                  id="bottleneck"
                  rows={3}
                  placeholder="e.g. Spending 6 hours every Monday entering supplier invoices into Xero and checking staff penalty rates against weekend weather shifts."
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#0F172A] text-white font-bold text-sm hover:bg-slate-800 transition-all cursor-pointer font-sans shadow-sm"
              >
                {isSubmitting ? (
                  <span className="font-mono">Logging Audit Request...</span>
                ) : (
                  <>
                    <span>Request 14-Day Diagnostic Audit</span>
                    <ArrowRight className="w-4 h-4 text-[#00BFCC]" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs font-mono text-slate-500 text-center pt-1">
                <Shield className="w-3.5 h-3.5 text-slate-500" />
                <span>Confidential diagnostic review. Zero spam. Strict non-disclosure.</span>
              </div>
            </form>
          )}

          {/* Direct Contact Alternative */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-600">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <MessageSquare className="w-4 h-4 text-slate-500 flex-shrink-0" />
              <span>
                Prefer direct access? Reach us via Slack Connect or email{" "}
                <a
                  href="mailto:founder@haimate.com.au"
                  className="text-slate-900 font-bold underline hover:text-[#0096A3]"
                >
                  founder@haimate.com.au
                </a>
              </span>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-100 text-slate-700 border border-slate-200 hover:text-slate-900 hover:bg-slate-200 transition-colors"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied to Clipboard</span>
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
