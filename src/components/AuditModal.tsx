"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ShieldCheck, ArrowRight, Terminal, Sparkles, Building2, Layers } from "lucide-react";
import ApertureLogo from "./ApertureLogo";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSolution?: string;
}

export default function AuditModal({ isOpen, onClose, initialSolution }: AuditModalProps) {
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    venuesCount: "1-2 Venues",
    selectedTech: ["Lightspeed", "Xero"] as string[],
    grantInterest: true,
    workflowFocus: initialSolution || "Full 14-Day Diagnostic Readiness Audit",
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
    "Slack",
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
    }, 700);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={handleResetAndClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#151D2F] border-2 border-[#232F48] shadow-2xl shadow-black overflow-hidden z-10 my-8 animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-[#0F172A] border-b border-[#232F48] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ApertureLogo className="h-6 w-6" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#FFFFFF] font-mono">
                hAI Mate! // 14-DAY AUDIT DISPATCH
              </span>
              <span className="text-[10px] font-mono text-[#00F2FE]">
                Perth &amp; WA On-Site Readiness Scope
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-[#94A3B8] hover:text-[#FFFFFF] hover:bg-[#1A243A] border border-transparent hover:border-[#232F48] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#00F2FE]/15 text-[#00F2FE] flex items-center justify-center mx-auto border border-[#00F2FE]/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#00F2FE] block font-bold">
                DIAGNOSTIC QUEUE COMMITTED
              </span>
              <h3 className="text-2xl font-bold text-[#FFFFFF]">
                Audit Docket #{auditId} Reserved
              </h3>
              <p className="text-sm text-[#94A3B8] max-w-md mx-auto leading-relaxed">
                We have registered your venue walk-through request for{" "}
                <span className="text-[#FFFFFF] font-bold">{formData.businessName}</span>. A principal engineer will reach out to{" "}
                <span className="text-[#00F2FE]">{formData.email}</span> within 4 hours to coordinate dates and dispatch the grant pre-qualification checklist.
              </p>

              <div className="p-4 rounded-lg bg-[#0B0F19] border border-[#232F48] text-xs font-mono text-left max-w-md mx-auto space-y-1.5 text-slate-300">
                <div className="text-[#00F2FE] font-bold mb-1">STAGED AUDIT PARAMETERS:</div>
                <div>• Target Scope: {formData.workflowFocus}</div>
                <div>• Connected Stack: {formData.selectedTech.join(", ")}</div>
                <div>• WA Grant Co-Funding: {formData.grantInterest ? "Assistance Requested (50% Matched)" : "Self-Funded"}</div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-6 py-3 rounded-md bg-[#00F2FE] text-[#04101A] font-bold text-sm hover:brightness-110 shadow-[0_0_20px_rgba(0,242,254,0.35)]"
                >
                  Return to Console
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="text-xs font-mono text-[#94A3B8] border-b border-[#232F48] pb-3">
                Lock in an on-site technical inspection of your back-office &amp; POS workflow. No obligation. Fixed scope.
              </div>

              {/* Business Name & Contact Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8]">
                    Venue or Business Name <span className="text-[#00F2FE]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Cottesloe Beach Club"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border border-[#232F48] text-[#F8FAFC] placeholder-slate-600 focus:outline-none focus:border-[#00F2FE] text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8]">
                    Your Name <span className="text-[#00F2FE]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border border-[#232F48] text-[#F8FAFC] placeholder-slate-600 focus:outline-none focus:border-[#00F2FE] text-sm"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8]">
                    Work Email <span className="text-[#00F2FE]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@venue.com.au"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border border-[#232F48] text-[#F8FAFC] placeholder-slate-600 focus:outline-none focus:border-[#00F2FE] text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8]">
                    Mobile / Phone (For SMS Confirmation)
                  </label>
                  <input
                    type="tel"
                    placeholder="0412 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border border-[#232F48] text-[#F8FAFC] placeholder-slate-600 focus:outline-none focus:border-[#00F2FE] text-sm"
                  />
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#94A3B8]">
                  Existing Software Stack (Select All That Apply)
                </label>
                <div className="flex flex-wrap gap-2 pt-1">
                  {techOptions.map((tech) => {
                    const isSelected = formData.selectedTech.includes(tech);
                    return (
                      <button
                        key={tech}
                        type="button"
                        onClick={() => handleToggleTech(tech)}
                        className={`px-3 py-1.5 rounded text-xs font-mono transition-colors ${
                          isSelected
                            ? "bg-[#00F2FE] text-[#04101A] font-bold border border-[#00F2FE]"
                            : "bg-[#0B0F19] text-[#94A3B8] border border-[#232F48] hover:border-slate-500"
                        }`}
                      >
                        {isSelected ? `✓ ${tech}` : tech}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* WA Grant Checkbox */}
              <div className="p-3 rounded-lg bg-[#0B0F19] border border-[#232F48] flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-xs font-mono font-bold text-[#FFFFFF] block">
                    Include WA Government Grant Scoping (LCF Round)
                  </span>
                  <span className="text-[11px] text-[#94A3B8] block">
                    Check if you want our team to prepare the 50% matched funding application paperwork.
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={formData.grantInterest}
                  onChange={(e) => setFormData({ ...formData, grantInterest: e.target.checked })}
                  className="w-4 h-4 accent-[#00F2FE] rounded cursor-pointer"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg bg-[#00F2FE] text-[#04101A] font-bold text-sm hover:brightness-110 shadow-[0_0_20px_rgba(0,242,254,0.35)] transition-all cursor-pointer font-sans"
              >
                {isSubmitting ? (
                  <span className="font-mono">Assigning Diagnostic Docket...</span>
                ) : (
                  <>
                    <span>Confirm 14-Day Diagnostic Audit Intake</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-[11px] font-mono text-[#64748B] text-center">
                Strict Non-Disclosure. All audit discoveries remain 100% confidential.
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
