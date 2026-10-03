"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";

interface FaqSectionProps {
  onOpenAuditModal: () => void;
}

export default function FaqSection({ onOpenAuditModal }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Will my kitchen or floor staff need to learn complicated new software?",
      answer:
        "No. We deliberately do not add more screens, dashboards, or logins for your team to juggle. Chefs simply take a photo of paper dockets on their phone or forward supplier email PDFs. Floor managers receive a simple prompt to approve rosters or invoices directly on their phone with a single tap in seconds.",
    },
    {
      question: "What happens if a supplier invoice has an overcharge or pricing mistake?",
      answer:
        "That is one of the main reasons venue owners work with us. When an invoice arrives, line items are automatically checked against your contracted pricing agreement. If your seafood supplier charged $19.50/kg instead of your agreed $17.00/kg, the discrepancy is flagged immediately and held for your review before anything touches Xero or MYOB.",
    },
    {
      question: "How does the WA Government 50% matched funding grant work?",
      answer:
        "Eligible Western Australian businesses can access up to 50% co-funding through the Local Capability Fund (LCF) Digital Transformation Round (Stream 1 up to $25,000; Stream 2 up to $50,000). During our 14-day diagnostic audit, we prepare the complete technical scoping package, architecture plan, and ROI documentation so your application is ready for submission.",
    },
    {
      question: "Which point-of-sale and accounting systems work out of the box?",
      answer:
        "We support Lightspeed, Square, OrderMate, Toast, Xero, MYOB, Deputy, SevenRooms, OpenTable, and Resy. If your venue uses a different till system, spreadsheet workflow, or bespoke software, we inspect it during the initial walk-through and connect it smoothly.",
    },
    {
      question: "Is our supplier pricing and financial data kept strictly confidential?",
      answer:
        "100% confidential. All data is processed securely through Australian sovereign cloud infrastructure. Your supplier agreements, recipe costs, and financial numbers are never shared, sold, or used for public training models. Strict non-disclosure is guaranteed.",
    },
    {
      question: "How much of my time will the 14-Day Diagnostic Audit take?",
      answer:
        "Very little. We typically need a 45-minute on-site floor walk-through with you or your venue manager, followed by read-only access to your till and accounting feeds. We do all the mapping in the background and deliver a concise, plain-English roadmap showing exactly which automations will save you the most hours and dollars.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 md:py-28 bg-white border-b border-zinc-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#0096A3] block mb-2">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            Clear Answers for Busy Venue Owners.
          </h2>
          <p className="mt-3 text-base text-zinc-600">
            Everything you need to know about how our automation works, what it costs, and why you maintain 100% control.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-zinc-50/60 border border-zinc-200/80 overflow-hidden transition-all duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-zinc-100/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-zinc-950 pr-4">
                    {faq.question}
                  </span>
                  <div className="p-1 rounded-full bg-white border border-zinc-200 text-zinc-600 flex-shrink-0">
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-zinc-950" : ""
                      }`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-zinc-600 leading-relaxed font-normal border-t border-zinc-100 bg-white animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Helper */}
        <div className="mt-12 text-center text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>Have a specific question about your venue's till or setup?</span>
          <button
            type="button"
            onClick={onOpenAuditModal}
            className="font-bold text-zinc-950 underline hover:text-[#0096A3]"
          >
            Ask during your 14-day review
          </button>
        </div>

      </div>
    </section>
  );
}
