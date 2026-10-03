"use client";

import React, { useState } from "react";
import {
  FileText,
  Scan,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  RefreshCw,
  Sparkles,
  ShieldCheck,
  Send,
  Building,
  Utensils,
  Croissant,
  Beer,
} from "lucide-react";
import ApertureLogo from "./ApertureLogo";

interface DocketSimulatorProps {
  onOpenAuditModal: () => void;
}

type DocketType = "seafood" | "bakery" | "meat";

interface LineItem {
  name: string;
  qty: string;
  billedRate: number;
  contractRate: number;
  unit: string;
  isDiscrepancy: boolean;
}

interface DocketData {
  id: DocketType;
  venueName: string;
  supplierName: string;
  docketNumber: string;
  icon: any;
  tag: string;
  date: string;
  items: LineItem[];
}

export default function DocketSimulator({ onOpenAuditModal }: DocketSimulatorProps) {
  const [activeDocket, setActiveDocket] = useState<DocketType>("seafood");
  const [scanState, setScanState] = useState<"idle" | "scanning" | "scanned" | "staged">("idle");

  const dockets: Record<DocketType, DocketData> = {
    seafood: {
      id: "seafood",
      venueName: "Cottesloe Beachside Bistro",
      supplierName: "Fresh Ocean Catch Wholesalers",
      docketNumber: "DOC-89421",
      icon: Utensils,
      tag: "Seafood & Grill",
      date: "Today, 06:45 AM Delivery",
      items: [
        {
          name: "Local Barramundi Fillets (Skin-on)",
          qty: "25",
          unit: "kg",
          billedRate: 31.0,
          contractRate: 28.5,
          isDiscrepancy: true,
        },
        {
          name: "Spencer Gulf King Prawns (U10)",
          qty: "15",
          unit: "kg",
          billedRate: 38.0,
          contractRate: 38.0,
          isDiscrepancy: false,
        },
        {
          name: "Tasmanian Salmon Portions (200g)",
          qty: "20",
          unit: "kg",
          billedRate: 29.5,
          contractRate: 29.5,
          isDiscrepancy: false,
        },
        {
          name: "Fresh Sea Scallops (Roe-off)",
          qty: "10",
          unit: "kg",
          billedRate: 44.0,
          contractRate: 41.0,
          isDiscrepancy: true,
        },
      ],
    },
    bakery: {
      id: "bakery",
      venueName: "Mount Lawley Artisan Bakery",
      supplierName: "Heritage Mill & Dairy Co.",
      docketNumber: "DOC-41903",
      icon: Croissant,
      tag: "Bakery & Kitchen",
      date: "Today, 04:15 AM Delivery",
      items: [
        {
          name: "Organic Stoneground Wheat Flour",
          qty: "40",
          unit: "bags (25kg)",
          billedRate: 34.5,
          contractRate: 32.0,
          isDiscrepancy: true,
        },
        {
          name: "French Cultured Butter (82% Fat)",
          qty: "50",
          unit: "kg",
          billedRate: 14.8,
          contractRate: 14.8,
          isDiscrepancy: false,
        },
        {
          name: "Free Range Egg Yolks (Pasteurised)",
          qty: "12",
          unit: "cartons (5L)",
          billedRate: 42.0,
          contractRate: 42.0,
          isDiscrepancy: false,
        },
        {
          name: "Callebaut Dark Chocolate Drops (54%)",
          qty: "15",
          unit: "boxes (10kg)",
          billedRate: 118.0,
          contractRate: 110.0,
          isDiscrepancy: true,
        },
      ],
    },
    meat: {
      id: "meat",
      venueName: "Fremantle Craft Pub & Taphouse",
      supplierName: "WA Prime Wholesale Meats",
      docketNumber: "DOC-77290",
      icon: Beer,
      tag: "Pub & Smokehouse",
      date: "Today, 07:30 AM Delivery",
      items: [
        {
          name: "Black Angus Grain-Fed Sirloin (YG)",
          qty: "35",
          unit: "kg",
          billedRate: 36.5,
          contractRate: 33.5,
          isDiscrepancy: true,
        },
        {
          name: "Free Range Pork Belly (Skin Scored)",
          qty: "30",
          unit: "kg",
          billedRate: 16.5,
          contractRate: 16.5,
          isDiscrepancy: false,
        },
        {
          name: "Smoked Bacon Rasher Rib-Eye (Catering)",
          qty: "25",
          unit: "kg",
          billedRate: 18.0,
          contractRate: 18.0,
          isDiscrepancy: false,
        },
        {
          name: "Lamb Cutlets French Trimmed (Cap-on)",
          qty: "18",
          unit: "kg",
          billedRate: 49.0,
          contractRate: 45.0,
          isDiscrepancy: true,
        },
      ],
    },
  };

  const current = dockets[activeDocket];

  // Calculate totals
  const totalBilled = current.items.reduce(
    (acc, item) => acc + parseFloat(item.qty) * item.billedRate,
    0
  );

  const totalOvercharge = current.items.reduce((acc, item) => {
    if (item.isDiscrepancy) {
      const diff = item.billedRate - item.contractRate;
      return acc + parseFloat(item.qty) * diff;
    }
    return acc;
  }, 0);

  const annualizedImpact = totalOvercharge * 52;

  const handleStartScan = () => {
    setScanState("scanning");
    setTimeout(() => {
      setScanState("scanned");
    }, 1200);
  };

  const handleStageXero = () => {
    setScanState("staged");
  };

  const handleReset = () => {
    setScanState("idle");
  };

  const handleSwitchTab = (type: DocketType) => {
    setActiveDocket(type);
    setScanState("idle");
  };

  return (
    <section id="simulator" className="relative py-20 md:py-28 bg-white border-b border-zinc-100 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-50 border border-zinc-200/80 mb-3 shadow-2xs">
            <Scan className="w-3.5 h-3.5 text-[#0096A3]" />
            <span className="text-xs font-semibold text-zinc-800 tracking-wide uppercase">
              Live Interactive Simulator
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
            See the 5-Second Docket Audit in Action.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-zinc-600">
            Suppliers bump contracted prices by $1–$3/unit unannounced. Watch how hAI Mate! instantly
            reads crumpled paper delivery dockets, catches overcharges, and stages drafts in Xero.
          </p>
        </div>

        {/* Venue Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            type="button"
            onClick={() => handleSwitchTab("seafood")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeDocket === "seafood"
                ? "bg-zinc-950 text-white shadow-sm"
                : "bg-zinc-100 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/70"
            }`}
          >
            <Utensils className="w-3.5 h-3.5" />
            <span>Seafood Bistro Docket</span>
          </button>

          <button
            type="button"
            onClick={() => handleSwitchTab("bakery")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeDocket === "bakery"
                ? "bg-zinc-950 text-white shadow-sm"
                : "bg-zinc-100 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/70"
            }`}
          >
            <Croissant className="w-3.5 h-3.5" />
            <span>Bakery Flour &amp; Butter Docket</span>
          </button>

          <button
            type="button"
            onClick={() => handleSwitchTab("meat")}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
              activeDocket === "meat"
                ? "bg-zinc-950 text-white shadow-sm"
                : "bg-zinc-100 text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/70"
            }`}
          >
            <Beer className="w-3.5 h-3.5" />
            <span>Pub Prime Meat Docket</span>
          </button>
        </div>

        {/* Main Simulator Card */}
        <div className="rounded-3xl bg-zinc-50/70 border border-zinc-200/90 p-6 sm:p-10 shadow-xs relative overflow-hidden">
          
          {/* Subtle watermark */}
          <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 opacity-[0.025] pointer-events-none">
            <ApertureLogo size={400} color="#09090B" />
          </div>

          <div className="relative space-y-6">
            
            {/* Top Bar of the Docket */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 border-b border-zinc-200/80 gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-900 shadow-2xs">
                  <FileText className="w-5 h-5 text-[#0096A3]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-zinc-950">{current.supplierName}</span>
                    <span className="text-[10px] font-mono text-zinc-500 bg-white px-2 py-0.5 rounded border border-zinc-200">
                      {current.docketNumber}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500">{current.venueName} • {current.date}</p>
                </div>
              </div>

              {/* Status Badge */}
              <div>
                {scanState === "idle" && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Unchecked Paper Delivery Docket
                  </span>
                )}
                {scanState === "scanning" && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-semibold text-[#0096A3]">
                    <RefreshCw className="w-3 h-3 animate-spin" />
                    Running OCR &amp; Rate Verification...
                  </span>
                )}
                {scanState === "scanned" && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-800">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                    2 Rate Overcharges Detected
                  </span>
                )}
                {scanState === "staged" && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Staged in Xero with Credit Note Draft
                  </span>
                )}
              </div>
            </div>

            {/* Line Items Container */}
            <div className="space-y-3 relative">
              
              {/* Laser scanning line animation overlay */}
              {scanState === "scanning" && (
                <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden rounded-2xl">
                  <div className="w-full h-1 bg-[#00BFCC] shadow-[0_0_15px_#00BFCC] animate-bounce" />
                </div>
              )}

              {current.items.map((item, idx) => {
                const billedTotal = parseFloat(item.qty) * item.billedRate;
                const diffPerUnit = item.billedRate - item.contractRate;
                const totalItemDiff = parseFloat(item.qty) * diffPerUnit;

                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl bg-white border transition-all duration-300 ${
                      scanState === "scanned" && item.isDiscrepancy
                        ? "border-rose-300 bg-rose-50/20 shadow-xs"
                        : scanState === "scanned" && !item.isDiscrepancy
                        ? "border-emerald-200 bg-emerald-50/10 shadow-2xs"
                        : "border-zinc-200/80 shadow-2xs"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-bold text-zinc-950">
                            {item.name}
                          </span>
                          <span className="text-xs text-zinc-500 font-mono">
                            ({item.qty} {item.unit})
                          </span>
                        </div>
                        <div className="text-xs text-zinc-500 flex items-center gap-3">
                          <span>Billed: ${item.billedRate.toFixed(2)}/{item.unit.split(" ")[0]}</span>
                          {scanState !== "idle" && (
                            <span className="font-mono text-zinc-600">
                              Agreed Contract: ${item.contractRate.toFixed(2)}/{item.unit.split(" ")[0]}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Right column result */}
                      <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center">
                        <span className="text-sm font-bold font-mono text-zinc-950">
                          ${billedTotal.toLocaleString("en-AU", { minimumFractionDigits: 2 })}
                        </span>

                        {scanState === "idle" && (
                          <span className="text-[11px] text-zinc-400 font-mono">Pending Check</span>
                        )}

                        {scanState === "scanning" && (
                          <span className="text-[11px] text-[#0096A3] animate-pulse font-mono">
                            Verifying...
                          </span>
                        )}

                        {scanState !== "idle" && scanState !== "scanning" && (
                          <div>
                            {item.isDiscrepancy ? (
                              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-600 font-mono bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
                                Overcharge +${totalItemDiff.toFixed(2)} (+${diffPerUnit.toFixed(2)}/u)
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600 font-mono bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                                <CheckCircle2 className="w-3 h-3" /> Exact Rate Match
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Results & Action Footer */}
            <div className="pt-4 border-t border-zinc-200/80 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              
              {/* Financial Impact Metric */}
              <div className="flex items-center gap-6">
                <div>
                  <span className="text-[11px] text-zinc-400 font-mono uppercase block">Total Docket</span>
                  <span className="text-base sm:text-lg font-bold font-mono text-zinc-950">
                    ${totalBilled.toLocaleString("en-AU", { minimumFractionDigits: 2 })}
                  </span>
                </div>

                <div className="h-8 w-px bg-zinc-200" />

                <div>
                  <span className="text-[11px] text-zinc-400 font-mono uppercase block">Discrepancy Caught</span>
                  <span className={`text-base sm:text-lg font-extrabold font-mono ${
                    scanState === "scanned" || scanState === "staged"
                      ? "text-rose-600"
                      : "text-zinc-400"
                  }`}>
                    {scanState === "scanned" || scanState === "staged"
                      ? `-$${totalOvercharge.toFixed(2)}`
                      : "Run scan to detect"}
                  </span>
                </div>

                {(scanState === "scanned" || scanState === "staged") && (
                  <>
                    <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
                    <div className="hidden sm:block">
                      <span className="text-[11px] text-[#0096A3] font-mono uppercase block">Annualized Savings</span>
                      <span className="text-base font-extrabold font-mono text-[#0096A3]">
                        ~${annualizedImpact.toLocaleString("en-AU")}/yr
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {scanState === "idle" && (
                  <button
                    type="button"
                    onClick={handleStartScan}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-950 text-white text-xs sm:text-sm font-semibold hover:bg-zinc-800 transition-all shadow-sm cursor-pointer"
                  >
                    <Scan className="w-4 h-4 text-[#00BFCC]" />
                    <span>Run Instant OCR &amp; Rate Audit</span>
                  </button>
                )}

                {scanState === "scanning" && (
                  <button
                    disabled
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-100 text-zinc-400 text-xs sm:text-sm font-semibold cursor-not-allowed"
                  >
                    <RefreshCw className="w-4 h-4 animate-spin text-[#00BFCC]" />
                    <span>Scanning Docket Line Items...</span>
                  </button>
                )}

                {scanState === "scanned" && (
                  <div className="flex items-center gap-2 w-full md:w-auto">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="p-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 transition-colors"
                      title="Reset Simulator"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={handleStageXero}
                      className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-zinc-950 text-white text-xs sm:text-sm font-semibold hover:bg-zinc-800 transition-all shadow-sm cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-[#00BFCC]" />
                      <span>Stage Draft in Xero + Credit Note</span>
                    </button>
                  </div>
                )}

                {scanState === "staged" && (
                  <div className="flex items-center gap-2 w-full md:w-auto">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="p-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 transition-colors"
                      title="Test Another Docket"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={onOpenAuditModal}
                      className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#00BFCC] text-zinc-950 text-xs sm:text-sm font-bold hover:brightness-105 transition-all shadow-sm cursor-pointer"
                    >
                      <span>Deploy This on Your Dockets</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

            </div>

            {/* Bottom Guarantee Banner */}
            <div className="pt-3 border-t border-zinc-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-zinc-500 font-normal">
              <span className="flex items-center gap-1.5 text-zinc-700 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                No bill is committed to Xero or MYOB without your venue manager's 1-tap approval.
              </span>
              <span className="font-mono text-zinc-400">Works via phone camera photo or email forwarding</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
