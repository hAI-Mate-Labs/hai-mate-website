"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  Clock,
  DollarSign,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  Building,
  Utensils,
  Croissant,
  Beer,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";
import ApertureLogo from "./ApertureLogo";

interface VenueDiagnosticQuizProps {
  onOpenAuditModalWithDetails?: (details: string) => void;
}

interface Question {
  id: number;
  title: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    hoursRisk: number;
    dollarRisk: number;
    icon?: any;
  }[];
}

export default function VenueDiagnosticQuiz({
  onOpenAuditModalWithDetails,
}: VenueDiagnosticQuizProps) {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<number[]>([-1, -1, -1, -1]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const questions: Question[] = [
    {
      id: 1,
      title: "What type of venue do you operate?",
      subtitle: "Helps us calibrate typical supplier delivery volume and penalty shift patterns.",
      options: [
        {
          label: "Bistro / Restaurant / Fine Dining",
          description: "Fresh seafood, meat delivery dockets, dinner surges & wine lists.",
          hoursRisk: 6.0,
          dollarRisk: 22000,
          icon: Utensils,
        },
        {
          label: "Artisan Bakery / Cafe / Kitchen",
          description: "Bulk flour, butter, 2 AM bake shifts, morning coffee rush & wholesale.",
          hoursRisk: 5.5,
          dollarRisk: 26000,
          icon: Croissant,
        },
        {
          label: "Pub / Craft Brewery / Taphouse",
          description: "Keg delivery line items, high casual weekend penalty shifts & food.",
          hoursRisk: 7.5,
          dollarRisk: 34000,
          icon: Beer,
        },
        {
          label: "Multi-Site Hospitality Group",
          description: "2 to 5+ venues with distributed managers and high weekly docket volume.",
          hoursRisk: 14.0,
          dollarRisk: 65000,
          icon: Building,
        },
      ],
    },
    {
      id: 2,
      title: "How do you verify supplier delivery prices on dockets?",
      subtitle: "Meat, seafood, and dairy suppliers regularly bump prices by $1–$3/unit unannounced.",
      options: [
        {
          label: "We don't have time—we trust the bill or spot-check occasionally",
          description: "Highest risk of silent 3%–8% unannounced supplier rate creep over time.",
          hoursRisk: 1.0,
          dollarRisk: 18500,
        },
        {
          label: "Head chef / manager spends 4–6 hours typing line items into Xero/MYOB",
          description: "Catches some discrepancies, but wastes 20+ hours of executive chef time each month.",
          hoursRisk: 5.0,
          dollarRisk: 9000,
        },
        {
          label: "Paper dockets sit in a box until month-end bookkeeping day",
          description: "Discrepancies discovered weeks late when supplier credit notes are hardest to claim.",
          hoursRisk: 3.5,
          dollarRisk: 14000,
        },
      ],
    },
    {
      id: 3,
      title: "How do you adjust rosters when weather or slow trade hits?",
      subtitle: "Hospitality profit margins evaporate when wage costs cross 35% on slow shifts.",
      options: [
        {
          label: "Rosters are based on last week's sheet or gut-feel",
          description: "Frequent penalty-rate blowouts when wet weather or quiet lunches strike unexpectedly.",
          hoursRisk: 2.0,
          dollarRisk: 16000,
        },
        {
          label: "Managers scramble on the day to cut casual shifts",
          description: "Stressful, reactive, and often too late once the minimum 2-hour shift call-in applies.",
          hoursRisk: 1.5,
          dollarRisk: 8500,
        },
        {
          label: "Fixed rosters with minimal dynamic adjustments",
          description: "Predictable, but sacrifices up to 3%–5% of potential bottom-line margin savings.",
          hoursRisk: 0.5,
          dollarRisk: 12000,
        },
      ],
    },
    {
      id: 4,
      title: "What happens to phone calls during dinner rush or after hours?",
      subtitle: "Unanswered table booking calls cost Australian venues 10%–15% in lost guest revenue.",
      options: [
        {
          label: "Goes to voicemail—most callers hang up and book elsewhere",
          description: "Losing 5–15 weekend table bookings and high-value group celebrations each week.",
          hoursRisk: 1.5,
          dollarRisk: 21000,
        },
        {
          label: "Staff rush to answer mid-service, interrupting dining guests",
          description: "Breaks front-of-house service rhythm and risks taking down reservation details incorrectly.",
          hoursRisk: 2.5,
          dollarRisk: 6000,
        },
        {
          label: "Online booking only, but we miss large group inquiries",
          description: "Standard bookings work, but missed private dining and 10+ person inquiries leak revenue.",
          hoursRisk: 1.0,
          dollarRisk: 11000,
        },
      ],
    },
  ];

  const handleSelectOption = (optionIndex: number) => {
    const updated = [...answers];
    updated[currentStep] = optionIndex;
    setAnswers(updated);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleReset = () => {
    setAnswers([-1, -1, -1, -1]);
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Compute calculated metrics
  const selectedVenue = questions[0].options[answers[0] >= 0 ? answers[0] : 0];
  const selectedInvoice = questions[1].options[answers[1] >= 0 ? answers[1] : 0];
  const selectedRoster = questions[2].options[answers[2] >= 0 ? answers[2] : 0];
  const selectedComms = questions[3].options[answers[3] >= 0 ? answers[3] : 0];

  const calculatedHours =
    (answers[0] >= 0 ? selectedVenue.hoursRisk : 6) +
    (answers[1] >= 0 ? selectedInvoice.hoursRisk : 3) +
    (answers[2] >= 0 ? selectedRoster.hoursRisk : 1.5) +
    (answers[3] >= 0 ? selectedComms.hoursRisk : 1.5);

  const calculatedDollars =
    (answers[0] >= 0 ? selectedVenue.dollarRisk : 20000) * 0.4 +
    (answers[1] >= 0 ? selectedInvoice.dollarRisk : 12000) +
    (answers[2] >= 0 ? selectedRoster.dollarRisk : 9000) +
    (answers[3] >= 0 ? selectedComms.dollarRisk : 8000) * 0.5;

  const handleBookWithDetails = () => {
    const details = `Venue Diagnostic Score: ~${calculatedHours.toFixed(1)} hrs/wk recoverable | ~$${Math.round(
      calculatedDollars
    ).toLocaleString("en-AU")}/yr estimated leakage | Venue: ${selectedVenue.label}`;
    if (onOpenAuditModalWithDetails) {
      onOpenAuditModalWithDetails(details);
    }
  };

  const currentQ = questions[currentStep];

  return (
    <section id="quiz" className="relative py-20 md:py-28 bg-white border-b border-zinc-100 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-50 border border-zinc-200/80 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#0096A3]" />
            <span className="text-xs font-semibold text-zinc-800 tracking-wide uppercase">
              60-Second Venue Assessment
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            How Much Time &amp; Margin Is Your Venue Leaking?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600">
            Answer 4 quick operational questions to receive a tailored estimate of your weekly
            administrative drag and unverified supplier price creep.
          </p>
        </div>

        {/* Quiz Box */}
        <div className="rounded-3xl bg-zinc-50/70 border border-zinc-200/90 p-6 sm:p-10 shadow-sm relative overflow-hidden">
          
          {/* Watermark logo */}
          <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 opacity-[0.025] pointer-events-none">
            <ApertureLogo size={350} color="#09090B" />
          </div>

          {!isCompleted ? (
            <div className="relative space-y-8">
              
              {/* Progress Bar & Counter */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>QUESTION {currentStep + 1} OF {questions.length}</span>
                  <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% COMPLETE</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-zinc-950 transition-all duration-300 rounded-full"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Current Question */}
              <div className="space-y-1 text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight">
                  {currentQ.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600">
                  {currentQ.subtitle}
                </p>
              </div>

              {/* Options */}
              <div className="grid grid-cols-1 gap-3">
                {currentQ.options.map((opt, idx) => {
                  const isSelected = answers[currentStep] === idx;
                  const Icon = opt.icon;

                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectOption(idx)}
                      className={`p-4 sm:p-5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-4 group ${
                        isSelected
                          ? "bg-white border-zinc-950 shadow-md ring-2 ring-zinc-950/5"
                          : "bg-white border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50/50 shadow-2xs"
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        {Icon ? (
                          <div className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 group-hover:scale-105 transition-transform shrink-0">
                            <Icon className="w-4 h-4 text-[#0096A3]" />
                          </div>
                        ) : (
                          <div className="w-6 h-6 rounded-full border border-zinc-300 flex items-center justify-center text-xs font-mono text-zinc-500 shrink-0 mt-0.5">
                            {String.fromCharCode(65 + idx)}
                          </div>
                        )}
                        <div>
                          <div className="text-sm font-bold text-zinc-950 group-hover:text-black">
                            {opt.label}
                          </div>
                          <div className="text-xs text-zinc-500 mt-0.5 leading-relaxed">
                            {opt.description}
                          </div>
                        </div>
                      </div>

                      <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 group-hover:text-zinc-950 transition-all shrink-0" />
                    </button>
                  );
                })}
              </div>

              {/* Back / Step Controls */}
              {currentStep > 0 && (
                <div className="pt-2 flex justify-start">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs font-semibold text-zinc-500 hover:text-zinc-950 transition-colors"
                  >
                    ← Back to Previous Question
                  </button>
                </div>
              )}

            </div>
          ) : (
            /* Results View */
            <div className="relative space-y-8 animate-in fade-in zoom-in-95 duration-200">
              
              <div className="text-center space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Assessment Complete
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
                  Your Venue's Diagnostic Score
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 max-w-lg mx-auto">
                  Based on your responses for <strong>{selectedVenue.label}</strong>, here is the
                  quantifiable friction currently impacting your margins:
                </p>
              </div>

              {/* 3 Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                
                {/* Metric 1 */}
                <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-500 font-mono">RECOVERABLE TIME</span>
                    <Clock className="w-4 h-4 text-[#0096A3]" />
                  </div>
                  <div className="text-3xl font-black text-zinc-950 font-sans">
                    ~{calculatedHours.toFixed(1)} <span className="text-sm font-normal text-zinc-500">hrs/wk</span>
                  </div>
                  <p className="text-[11px] text-zinc-600 leading-snug">
                    Unpaid admin hours lost to paper dockets, shift calls, and manual spreadsheet entries.
                  </p>
                </div>

                {/* Metric 2 */}
                <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-500 font-mono">PRICE CREEP RISK</span>
                    <DollarSign className="w-4 h-4 text-rose-600" />
                  </div>
                  <div className="text-3xl font-black text-rose-600 font-sans">
                    ~${Math.round(calculatedDollars).toLocaleString("en-AU")} <span className="text-sm font-normal text-zinc-500">/yr</span>
                  </div>
                  <p className="text-[11px] text-zinc-600 leading-snug">
                    Estimated annual margin leakage from unverified wholesale price increases and penalty blowouts.
                  </p>
                </div>

                {/* Metric 3 */}
                <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-2xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-zinc-500 font-mono">AUTOMATION FIT</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="text-3xl font-black text-zinc-950 font-sans">
                    96% <span className="text-sm font-normal text-emerald-600 font-bold">High Fit</span>
                  </div>
                  <p className="text-[11px] text-zinc-600 leading-snug">
                    Immediate compatibility with your POS and accounting tools. Zero hardware changes required.
                  </p>
                </div>

              </div>

              {/* Action Banner */}
              <div className="p-6 rounded-2xl bg-zinc-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div>
                  <h4 className="text-base font-bold text-white">
                    Eliminate this drag in your next 14 days.
                  </h4>
                  <p className="text-xs text-zinc-300 mt-0.5">
                    We will review your real dockets, inspect your till feeds, and guarantee at least 4 hrs/wk reclaimed.
                  </p>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    title="Retest Quiz"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleBookWithDetails}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#00BFCC] text-zinc-950 font-bold text-xs sm:text-sm hover:brightness-105 transition-all shadow-sm cursor-pointer"
                  >
                    <span>Apply to My 14-Day Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="text-center">
                <span className="text-[11px] text-zinc-400 font-mono">
                  100% Value Guarantee • 50% WA State Grant (LCF) eligible
                </span>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
