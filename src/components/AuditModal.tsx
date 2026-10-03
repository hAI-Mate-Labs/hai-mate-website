"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
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
    }, 600);
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
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden z-10 my-8 animate-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ApertureLogo className="h-6 w-6" />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-900 font-mono">
                hAI Mate! // 14-DAY AUDIT INTAKE
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                Direct Solo Practitioner Scoping
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="p-1 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {isSuccess ? (
            <div className="py-6 text-center space-y-3.5">
              <div className="w-14 h-14 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center mx-auto border border-slate-300">
                <CheckCircle2 className="w-7 h-7 text-[#0096A3]" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#0096A3] block font-bold">
                DIAGNOSTIC QUEUE COMMITTED
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Docket #{auditId} Confirmed
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-slate-900 font-bold">{formData.contactName}</span>. Your venue diagnostic request for{" "}
                <span className="text-slate-900 font-bold">{formData.businessName}</span> has been assigned. I will reach out to{" "}
                <span className="font-semibold text-slate-900">{formData.email}</span> within 4 hours.
              </p>

              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono text-left max-w-md mx-auto space-y-1 text-slate-700">
                <div className="text-slate-900 font-bold mb-1">AUDIT SUMMARY:</div>
                <div>• Target: {formData.workflowFocus}</div>
                <div>• Connected Stack: {formData.selectedTech.join(", ")}</div>
                <div>• WA Grant Co-Funding: {formData.grantInterest ? "Assistance Requested (50% Matched)" : "Self-Funded"}</div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-5 py-2.5 rounded-lg bg-[#0F172A] text-white font-bold text-sm hover:bg-slate-800"
                >
                  Return to Page
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-xs font-mono text-slate-500 border-b border-slate-100 pb-2.5">
                Lock in an on-site technical inspection of your back-office &amp; POS workflow. Fixed scope.
              </div>

              {/* Business Name & Contact Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700">
                    Business / Venue <span className="text-[#0096A3]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Cottesloe Beach Bistro"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700">
                    Your Name <span className="text-[#0096A3]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Sarah Jenkins"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 text-sm"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700">
                    Work Email <span className="text-[#0096A3]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@venue.com.au"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700">
                    Mobile / Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="0412 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 text-sm"
                  />
                </div>
              </div>

              {/* Software Stack Chips */}
              <div className="space-y-1">
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-700">
                  Software Stack
                </label>
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {techOptions.map((tech) => {
                    const isSelected = formData.selectedTech.includes(tech);
                    return (
                      <button
                        key={tech}
                        type="button"
                        onClick={() => handleToggleTech(tech)}
                        className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                          isSelected
                            ? "bg-[#0F172A] text-white font-bold border border-[#0F172A]"
                            : "bg-white text-slate-700 border border-slate-300 hover:border-slate-400"
                        }`}
                      >
                        {isSelected ? `✓ ${tech}` : tech}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* WA Grant Checkbox */}
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="space-y-0.5 pr-2">
                  <span className="text-xs font-mono font-bold text-slate-900 block">
                    Include WA Government Grant Scoping (50% Matched LCF)
                  </span>
                  <span className="text-[11px] text-slate-600 block">
                    Check if you want technical scoping documents prepared for the grant round.
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={formData.grantInterest}
                  onChange={(e) => setFormData({ ...formData, grantInterest: e.target.checked })}
                  className="w-4 h-4 accent-slate-900 rounded cursor-pointer"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-lg bg-[#0F172A] text-white font-bold text-sm hover:bg-slate-800 transition-all cursor-pointer font-sans shadow-sm"
              >
                {isSubmitting ? (
                  <span className="font-mono">Assigning Diagnostic Docket...</span>
                ) : (
                  <>
                    <span>Confirm 14-Day Diagnostic Audit Intake</span>
                    <ArrowRight className="w-4 h-4 text-[#00BFCC]" />
                  </>
                )}
              </button>

              <div className="text-[11px] font-mono text-slate-500 text-center">
                Confidential solo practitioner review. Non-disclosure guaranteed.
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
