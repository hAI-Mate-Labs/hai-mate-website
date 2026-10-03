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
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("founder@haimate.com.au");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="intake" className="relative py-20 md:py-28 bg-white border-b border-zinc-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0096A3] block mb-2">
            Get Started
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
            Ready to Cut Away Operational Friction?
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            Schedule your on-site 14-day diagnostic audit. We’ll map your workflows, inspect your POS/Xero pipelines, and calculate your exact ROI.
          </p>
        </div>

        {/* Clean Form Card */}
        <div className="rounded-3xl bg-zinc-50/50 border border-zinc-200/90 p-8 sm:p-10 shadow-xs">
          
          {isSubmitted ? (
            <div className="py-8 text-center space-y-3 animate-in fade-in duration-200">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#0F172A]">
                Audit Request Logged
              </h3>
              <p className="text-sm text-zinc-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-[#0F172A]">{formData.name}</span>. I have received your request. I will personally review your operational bottleneck and reach out to <span className="font-semibold text-[#0F172A]">{formData.email}</span> within 4 hours to coordinate our walk-through.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2 rounded-full bg-white text-xs font-semibold text-zinc-800 border border-zinc-200 hover:bg-zinc-100"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                    Your Name <span className="text-[#0096A3]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Liam Henderson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#0F172A] text-sm shadow-2xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                    Work Email <span className="text-[#0096A3]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="liam@venue.com.au"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#0F172A] text-sm shadow-2xs"
                  />
                </div>
              </div>

              {/* Business Type */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                  Business Type <span className="text-[#0096A3]">*</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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
                      className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all text-center ${
                        formData.businessType === type
                          ? "bg-zinc-900 text-white font-bold"
                          : "bg-white text-zinc-700 border border-zinc-200 hover:border-zinc-300"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Current Weekly Admin Bottleneck */}
              <div className="space-y-1.5">
                <label htmlFor="bottleneck" className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                  Current Weekly Admin Bottleneck
                </label>
                <textarea
                  id="bottleneck"
                  rows={3}
                  placeholder="e.g. Entering supplier invoices into Xero manually every Monday, or managing staff rosters when the weather turns bad."
                  value={formData.bottleneck}
                  onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-zinc-200 text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-[#0F172A] text-sm shadow-2xs"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#0F172A] text-white font-semibold text-sm hover:bg-[#1E293B] transition-all cursor-pointer shadow-sm"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>Request 14-Day Diagnostic Audit</span>
                    <ArrowRight className="w-4 h-4 text-[#00BFCC]" />
                  </>
                )}
              </button>

              <div className="text-center text-xs text-zinc-400 pt-1">
                Zero spam. Strict non-disclosure.
              </div>
            </form>
          )}

          {/* Direct Contact Alternative */}
          <div className="mt-8 pt-6 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <MessageSquare className="w-4 h-4 text-zinc-400 flex-shrink-0" />
              <span>
                Prefer direct access? Reach us via Slack Connect or email{" "}
                <a
                  href="mailto:founder@haimate.com.au"
                  className="text-zinc-900 font-bold underline hover:text-[#0096A3]"
                >
                  founder@haimate.com.au
                </a>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://wa.me/61402472262?text=Hi%20Mallory,%20I'm%20interested%20in%20applied%20automation%20for%20my%20venue."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 hover:bg-emerald-100 transition-colors shadow-2xs text-xs font-semibold"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>WhatsApp (+61 402 472 262)</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100 transition-colors shadow-2xs text-xs font-medium cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-medium">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
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
