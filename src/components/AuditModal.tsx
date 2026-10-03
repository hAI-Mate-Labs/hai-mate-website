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
    selectedTech: ["Lightspeed", "Xero"] as string[],
    grantInterest: true,
    workflowFocus: initialSolution || "Full 14-Day Venue Review",
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
    "Paper / Pen",
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
      setAuditId(`WA-VENUE-${Math.floor(1000 + Math.random() * 9000)}`);
    }, 500);
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
        className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden z-10 my-8 animate-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ApertureLogo className="h-6 w-6" />
            <div>
              <span className="text-sm font-bold text-slate-900 block">
                hAI Mate! • 14-Day Venue Review
              </span>
              <span className="text-[11px] text-slate-500">
                On-site in Perth &amp; Western Australia
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {isSuccess ? (
            <div className="py-6 text-center space-y-3.5">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <span className="text-xs uppercase tracking-wider text-emerald-800 font-bold block">
                Review Request Received
              </span>
              <h3 className="text-2xl font-bold text-slate-900">
                Booking #{auditId} Confirmed
              </h3>
              <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="text-slate-900 font-bold">{formData.contactName}</span>. I have received your request for{" "}
                <span className="text-slate-900 font-bold">{formData.businessName}</span>. I will personally review your setup and contact you at{" "}
                <span className="font-semibold text-slate-900">{formData.email}</span> within 4 business hours to lock in our walk-through.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-left max-w-sm mx-auto space-y-1 text-slate-700">
                <div>• <strong>Venue Focus:</strong> {formData.workflowFocus}</div>
                <div>• <strong>Current Tools:</strong> {formData.selectedTech.join(", ")}</div>
                <div>• <strong>WA 50% Grant:</strong> {formData.grantInterest ? "Assistance Requested" : "Not Required"}</div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-5 py-2.5 rounded-xl bg-[#0F172A] text-white font-bold text-sm hover:bg-slate-800"
                >
                  Close &amp; Return
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-slate-600 border-b border-slate-100 pb-3 leading-relaxed">
                We'll visit your venue, look at where hours are being lost on dockets, rosters, and phone calls, and give you a simple action plan.
              </p>

              {/* Venue Name & Your Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700">
                    Venue or Restaurant Name <span className="text-[#0096A3]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Northbridge Taphouse"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700">
                    Your Name <span className="text-[#0096A3]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 text-sm"
                  />
                </div>
              </div>

              {/* Email & Mobile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700">
                    Email Address <span className="text-[#0096A3]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@venue.com.au"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 text-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-700">
                    Mobile Number (For SMS)
                  </label>
                  <input
                    type="tel"
                    placeholder="0412 345 678"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-900 text-sm"
                  />
                </div>
              </div>

              {/* Software Stack */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-700">
                  What till &amp; accounting tools do you currently use?
                </label>
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {techOptions.map((tech) => {
                    const isSelected = formData.selectedTech.includes(tech);
                    return (
                      <button
                        key={tech}
                        type="button"
                        onClick={() => handleToggleTech(tech)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                          isSelected
                            ? "bg-[#0F172A] text-white font-bold"
                            : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        {isSelected ? `✓ ${tech}` : tech}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* WA Grant Checkbox */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                <div className="space-y-0.5 pr-2">
                  <span className="text-xs font-bold text-slate-900 block">
                    Include WA Government Grant Scoping (50% Off)
                  </span>
                  <span className="text-[11px] text-slate-600 block">
                    We prepare the application paperwork for the Local Capability Fund round.
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
                className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl bg-[#0F172A] text-white font-bold text-sm hover:bg-slate-800 transition-all cursor-pointer font-sans shadow-xs"
              >
                {isSubmitting ? (
                  <span>Booking Your Review...</span>
                ) : (
                  <>
                    <span>Confirm 14-Day Venue Review Request</span>
                    <ArrowRight className="w-4 h-4 text-[#00BFCC]" />
                  </>
                )}
              </button>

              <div className="text-[11px] text-slate-500 text-center">
                100% confidential. No spam, no obligation.
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
