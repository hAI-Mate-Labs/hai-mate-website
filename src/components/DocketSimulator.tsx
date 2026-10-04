"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  FileText,
  Scan,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  RefreshCw,
  Upload,
  Camera,
  RotateCcw,
  ShieldCheck,
  Check,
  FileCheck2,
  Terminal,
} from "lucide-react";
import ApertureLogo from "./ApertureLogo";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

interface DocketSimulatorProps {
  onOpenAuditModal: () => void;
}

type DocketType = "seafood" | "meat" | "produce" | "custom";

interface LineItem {
  name: string;
  qty: string;
  unit: string;
  billedRate: number;
  contractRate: number;
  isDiscrepancy: boolean;
  varianceLabel?: string;
}

interface DocketData {
  id: DocketType;
  venueName: string;
  supplierName: string;
  docketNumber: string;
  tag: string;
  date: string;
  items: LineItem[];
}

export default function DocketSimulator({ onOpenAuditModal }: DocketSimulatorProps) {
  const { language } = useLanguage();
  const t = translations[language].docketSimulator;

  const [activeDocket, setActiveDocket] = useState<DocketType>("seafood");
  const [scanState, setScanState] = useState<"idle" | "scanning" | "scanned" | "staged">("scanned");
  const [scanStep, setScanStep] = useState<number>(3);
  const [isDragging, setIsDragging] = useState(false);
  const [customFile, setCustomFile] = useState<{
    name: string;
    size: string;
    previewUrl: string | null;
  } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  // Clear timers on unmount
  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(clearTimeout);
    };
  }, []);

  const dockets: Record<DocketType, DocketData> = {
    seafood: {
      id: "seafood",
      venueName: "Cottesloe Beachside Bistro",
      supplierName: "Fresh Ocean Catch Wholesalers",
      docketNumber: "DOC-89421",
      tag: "Wholesale Seafood",
      date: "Today, 06:45 AM Delivery",
      items: [
        {
          name: "Local Barramundi Fillets, 25 kg",
          qty: "25",
          unit: "kg",
          billedRate: 31.0,
          contractRate: 28.5,
          isDiscrepancy: true,
          varianceLabel: "+$62.50 Price Creep Detected",
        },
        {
          name: "Spencer Gulf King Prawns (U10), 15 kg",
          qty: "15",
          unit: "kg",
          billedRate: 38.0,
          contractRate: 38.0,
          isDiscrepancy: false,
        },
        {
          name: "Tasmanian Salmon Portions (200g), 20 kg",
          qty: "20",
          unit: "kg",
          billedRate: 29.5,
          contractRate: 29.5,
          isDiscrepancy: false,
        },
        {
          name: "Fresh Sea Scallops (Roe-off), 10 kg",
          qty: "10",
          unit: "kg",
          billedRate: 41.0,
          contractRate: 41.0,
          isDiscrepancy: false,
        },
      ],
    },
    meat: {
      id: "meat",
      venueName: "Fremantle Craft Grill & Smokehouse",
      supplierName: "WA Prime Meats & Poultry",
      docketNumber: "INV-40112",
      tag: "Butcher & Poultry",
      date: "Today, 07:15 AM Delivery",
      items: [
        {
          name: "Black Angus Grain-Fed Sirloin (YG), 35 kg",
          qty: "35",
          unit: "kg",
          billedRate: 36.5,
          contractRate: 33.5,
          isDiscrepancy: true,
          varianceLabel: "+$105.00 Price Creep Detected",
        },
        {
          name: "Free Range Chicken Breast Fillet, 30 kg",
          qty: "30",
          unit: "kg",
          billedRate: 12.8,
          contractRate: 12.8,
          isDiscrepancy: false,
        },
        {
          name: "WA Prime Lamb Cutlets (Cap-on), 15 kg",
          qty: "15",
          unit: "kg",
          billedRate: 48.0,
          contractRate: 48.0,
          isDiscrepancy: false,
        },
      ],
    },
    produce: {
      id: "produce",
      venueName: "Subiaco Dining Room & Garden",
      supplierName: "Wanneroo Regional Produce",
      docketNumber: "DEL-66290",
      tag: "Local Farm Produce",
      date: "Today, 05:30 AM Delivery",
      items: [
        {
          name: "Heirloom Medley Tomatoes, 20 kg",
          qty: "20",
          unit: "kg",
          billedRate: 14.8,
          contractRate: 12.0,
          isDiscrepancy: true,
          varianceLabel: "+$56.00 Price Creep Detected",
        },
        {
          name: "Hydroponic Baby Spinach Leaves, 15 kg",
          qty: "15",
          unit: "kg",
          billedRate: 18.5,
          contractRate: 18.5,
          isDiscrepancy: false,
        },
        {
          name: "Hass Avocados (Trays, Large), 8 trays",
          qty: "8",
          unit: "tray",
          billedRate: 34.0,
          contractRate: 34.0,
          isDiscrepancy: false,
        },
      ],
    },
    custom: {
      id: "custom",
      venueName: "Your Venue (Extracted Docket)",
      supplierName: customFile ? `Supplier • ${customFile.name.slice(0, 24)}` : "Your Uploaded Wholesale Docket",
      docketNumber: customFile ? `DOC-${customFile.name.replace(/[^a-zA-Z0-9]/g, "").slice(0, 5).toUpperCase()}` : "DOC-CUSTOM",
      tag: "Live Operator Ingestion",
      date: "Uploaded Today • Auto-Calibrated Pipeline",
      items: [
        {
          name: "Wholesale Fresh Produce / Protein (Extracted), 22 kg",
          qty: "22",
          unit: "kg",
          billedRate: 34.5,
          contractRate: 31.5,
          isDiscrepancy: true,
          varianceLabel: "+$66.00 Price Creep Detected",
        },
        {
          name: "Kitchen Pantry Dairy / Oil Stock (Extracted), 15 units",
          qty: "15",
          unit: "units",
          billedRate: 18.5,
          contractRate: 18.5,
          isDiscrepancy: false,
        },
        {
          name: "Specialty Supplier Delivery Line (Extracted), 12 kg",
          qty: "12",
          unit: "kg",
          billedRate: 38.0,
          contractRate: 38.0,
          isDiscrepancy: false,
        },
      ],
    },
  };

  const current = dockets[activeDocket];

  // Financial calculations
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

  // Execute the autonomous 2.5-second scan sequence
  const startScanSequence = () => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];

    setScanState("scanning");
    setScanStep(1);

    const step2Timer = setTimeout(() => {
      setScanStep(2);
    }, 850);

    const step3Timer = setTimeout(() => {
      setScanStep(3);
    }, 1700);

    const finishTimer = setTimeout(() => {
      setScanState("scanned");
    }, 2500);

    timeoutsRef.current = [step2Timer, step3Timer, finishTimer];
  };

  const handleSwitchTab = (type: DocketType) => {
    if (type === activeDocket && scanState === "scanned") return;
    setActiveDocket(type);
    if (type !== "custom" || customFile) {
      startScanSequence();
    } else {
      setScanState("idle");
    }
  };

  const handleStageInXero = () => {
    setScanState("staged");
  };

  const handleReset = () => {
    startScanSequence();
  };

  const processFile = (file: File) => {
    const url = URL.createObjectURL(file);
    const sizeKb = (file.size / 1024).toFixed(0);
    setCustomFile({
      name: file.name,
      size: `${sizeKb} KB`,
      previewUrl: url,
    });
    setActiveDocket("custom");
    startScanSequence();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleUseSampleCustom = () => {
    setCustomFile({
      name: "fremantle_butcher_delivery_sample.jpg",
      size: "480 KB",
      previewUrl: null,
    });
    setActiveDocket("custom");
    startScanSequence();
  };

  // Interpolated summary banner
  const formattedSummary = t.summaryBanner
    .replace("${amount}", totalOvercharge.toFixed(2))
    .replace("{amount}", totalOvercharge.toFixed(2));

  // Staged bill reference
  const stagedRef = current.docketNumber
    .replace("DOC-", "STG-")
    .replace("INV-", "STG-")
    .replace("DEL-", "STG-");

  const formattedStagedNotice = t.stagedConfirmation.replace("#{ref}", `#${stagedRef}`);

  return (
    <section
      id="simulator"
      className="relative py-20 md:py-28 bg-[#0F172A] border-y border-[#232F48] overflow-hidden text-[#F8FAFC] transition-colors duration-200"
    >
      {/* Background radial cyan glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#00F2FE]/10 via-[#00F2FE]/5 to-transparent blur-3xl pointer-events-none" />

      {/* Subtle Aperture Watermark */}
      <div className="absolute -right-20 -bottom-20 opacity-[0.03] pointer-events-none">
        <ApertureLogo size={550} color="#00F2FE" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hidden inputs for file browse and camera */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*,application/pdf"
          className="hidden"
          onChange={handleFileInputChange}
        />
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={handleFileInputChange}
        />

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#151D2F] border border-[#232F48] shadow-inner mb-4">
            <Scan className="w-3.5 h-3.5 text-[#00F2FE]" />
            <span className="text-xs font-semibold text-[#00F2FE] tracking-wide uppercase">
              {t.badge}
            </span>
          </div>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight"
            style={{ color: "#F8FAFC" }}
          >
            {t.title}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-[#94A3B8]">
            {t.subtitle}
          </p>
        </div>

        {/* Dual-Input Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8">
          {/* Tab 1: Seafood */}
          <button
            type="button"
            onClick={() => handleSwitchTab("seafood")}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeDocket === "seafood"
                ? "bg-[#00F2FE] text-[#0B0F19] shadow-[0_0_15px_rgba(0,242,254,0.35)]"
                : "bg-[#151D2F] text-[#94A3B8] border border-[#232F48] hover:border-[#00F2FE]/50 hover:text-[#F8FAFC]"
            }`}
          >
            <FileText className="w-3.5 h-3.5 shrink-0" />
            <span className="sm:hidden">{language === "en" ? "Seafood" : "Marée"}</span>
            <span className="hidden sm:inline">{t.tabSeafood}</span>
          </button>

          {/* Tab 2: Butcher & Poultry */}
          <button
            type="button"
            onClick={() => handleSwitchTab("meat")}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeDocket === "meat"
                ? "bg-[#00F2FE] text-[#0B0F19] shadow-[0_0_15px_rgba(0,242,254,0.35)]"
                : "bg-[#151D2F] text-[#94A3B8] border border-[#232F48] hover:border-[#00F2FE]/50 hover:text-[#F8FAFC]"
            }`}
          >
            <FileText className="w-3.5 h-3.5 shrink-0" />
            <span className="sm:hidden">{language === "en" ? "Butcher" : "Boucherie"}</span>
            <span className="hidden sm:inline">{t.tabMeat}</span>
          </button>

          {/* Tab 3: Local Farm Produce */}
          <button
            type="button"
            onClick={() => handleSwitchTab("produce")}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeDocket === "produce"
                ? "bg-[#00F2FE] text-[#0B0F19] shadow-[0_0_15px_rgba(0,242,254,0.35)]"
                : "bg-[#151D2F] text-[#94A3B8] border border-[#232F48] hover:border-[#00F2FE]/50 hover:text-[#F8FAFC]"
            }`}
          >
            <FileText className="w-3.5 h-3.5 shrink-0" />
            <span className="sm:hidden">{language === "en" ? "Produce" : "Primeurs"}</span>
            <span className="hidden sm:inline">{t.tabProduce}</span>
          </button>

          {/* Tab 4: Custom File Dropzone & Camera */}
          <button
            type="button"
            onClick={() => {
              setActiveDocket("custom");
              if (!customFile) {
                setScanState("idle");
              } else {
                startScanSequence();
              }
            }}
            className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeDocket === "custom"
                ? "bg-[#00F2FE] text-[#0B0F19] shadow-[0_0_15px_rgba(0,242,254,0.35)]"
                : "bg-[#151D2F] text-[#94A3B8] border border-[#232F48] hover:border-[#00F2FE]/50 hover:text-[#F8FAFC]"
            }`}
          >
            <Camera className="w-3.5 h-3.5 shrink-0" />
            <span className="sm:hidden">{language === "en" ? "Drop Photo" : "Photo"}</span>
            <span className="hidden sm:inline">{t.tabCustom}</span>
            {customFile && (
              <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse" />
            )}
          </button>
        </div>

        {/* Custom Dropzone View (when custom tab is selected and no file uploaded yet) */}
        {activeDocket === "custom" && !customFile && (
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`mb-8 rounded-3xl bg-[#151D2F] border-2 border-dashed p-8 sm:p-12 text-center max-w-2xl mx-auto space-y-4 transition-all ${
              isDragging
                ? "border-[#00F2FE] bg-[#00F2FE]/5 shadow-[0_0_20px_rgba(0,242,254,0.2)]"
                : "border-[#232F48] hover:border-[#00F2FE]/60"
            }`}
          >
            <div className="w-16 h-16 rounded-2xl bg-[#0B0F19] border border-[#232F48] flex items-center justify-center mx-auto text-[#00F2FE] shadow-inner">
              <Upload className="w-7 h-7 text-[#00F2FE]" />
            </div>

            <div className="space-y-1">
              <h3
                className="text-lg font-bold"
                style={{ color: "#F8FAFC" }}
              >
                {t.customUploadHeading}
              </h3>
              <p className="text-xs text-[#94A3B8] max-w-md mx-auto">
                {t.customUploadSub}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="px-5 py-2.5 rounded-full bg-[#00F2FE] text-[#0B0F19] text-xs font-bold hover:bg-[#38bdf8] transition-all shadow-[0_0_15px_rgba(0,242,254,0.3)] cursor-pointer"
              >
                {t.chooseFileBtn}
              </button>
              <button
                type="button"
                onClick={() => cameraInputRef.current?.click()}
                className="px-5 py-2.5 rounded-full bg-[#151D2F] border border-[#232F48] text-[#F8FAFC] text-xs font-bold hover:bg-[#1E293B] hover:border-[#00F2FE]/60 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Camera className="w-3.5 h-3.5 text-[#00F2FE]" />
                <span>{t.cameraBtn}</span>
              </button>
            </div>

            <div>
              <button
                type="button"
                onClick={handleUseSampleCustom}
                className="text-xs text-[#00F2FE] font-semibold hover:underline cursor-pointer"
              >
                {language === "en"
                  ? "Or test with pre-calibrated sample kitchen docket →"
                  : "Ou tester avec un exemple de bon de cuisine calibré →"}
              </button>
            </div>
          </div>
        )}

        {/* Main Terminal-Styled Simulation Card */}
        {!(activeDocket === "custom" && !customFile) && (
          <div className="rounded-3xl bg-[#151D2F] border border-[#232F48] p-5 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Terminal Top Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-5 border-b border-[#232F48] gap-3">
              <div className="flex items-center gap-3">
                {/* 3 Terminal Window Dots */}
                <div className="flex items-center gap-1.5 pr-2 border-r border-[#232F48]">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>

                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#00F2FE]" />
                  <span className="text-xs font-mono text-[#00F2FE] tracking-wider uppercase">
                    CONDUIT: INGESTION_V4.2 // AU_SOVEREIGN_NODE
                  </span>
                </div>
              </div>

              {/* Live Status Badge */}
              <div className="flex items-center gap-2">
                {activeDocket === "custom" && customFile && (
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="px-2.5 py-1 rounded-full border border-[#232F48] bg-[#0B0F19] text-[11px] font-mono text-[#94A3B8] hover:text-[#00F2FE] hover:border-[#00F2FE]/50 transition-colors cursor-pointer"
                  >
                    Replace Photo
                  </button>
                )}

                {scanState === "idle" && (
                  <button
                    type="button"
                    onClick={startScanSequence}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/40 border border-[#00F2FE]/40 text-xs font-mono text-[#00F2FE] cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00F2FE]" />
                    Run 2.5s Scan
                  </button>
                )}

                {scanState === "scanning" && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00F2FE]/10 border border-[#00F2FE]/40 text-xs font-mono text-[#00F2FE]">
                    <RefreshCw className="w-3 h-3 animate-spin text-[#00F2FE]" />
                    <span>AUTONOMOUS SCAN IN PROGRESS</span>
                  </span>
                )}

                {scanState === "scanned" && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-mono text-rose-400">
                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                    <span>1 OVERCHARGE DETECTED</span>
                  </span>
                )}

                {scanState === "staged" && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>STAGED IN XERO (VERIFIED)</span>
                  </span>
                )}

                {scanState !== "scanning" && (
                  <button
                    type="button"
                    onClick={handleReset}
                    title="Re-run 2.5s Scan Sequence"
                    className="p-1.5 rounded-lg bg-[#0B0F19] border border-[#232F48] text-[#94A3B8] hover:text-[#00F2FE] hover:border-[#00F2FE]/50 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Docket Metadata Banner */}
            <div className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs border-b border-[#232F48]/60">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#0B0F19] border border-[#232F48] flex items-center justify-center text-[#00F2FE]">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-[#F8FAFC] text-sm">
                      {current.supplierName}
                    </span>
                    <span className="font-mono text-[11px] text-[#00F2FE] bg-[#00F2FE]/10 px-2 py-0.5 rounded border border-[#00F2FE]/20">
                      {current.docketNumber}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] mt-0.5">
                    {current.venueName} • {current.date}
                    {customFile && ` • File: ${customFile.name} (${customFile.size})`}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-[11px] font-mono text-[#94A3B8]">
                <span>Ingestion: Calibrated</span>
                <span className="w-1 h-1 rounded-full bg-[#232F48]" />
                <span className="text-[#00F2FE]">HITL Governance: Active</span>
              </div>
            </div>

            {/* Uploaded File Preview Thumbnail (if custom) */}
            {activeDocket === "custom" && customFile?.previewUrl && (
              <div className="mt-4 p-3 bg-[#0B0F19] border border-[#232F48] rounded-2xl flex items-center gap-3">
                <img
                  src={customFile.previewUrl}
                  alt="Scanned invoice"
                  className="w-14 h-14 object-cover rounded-lg border border-[#232F48]"
                />
                <div className="text-xs">
                  <span className="font-bold text-[#F8FAFC] block">
                    {customFile.name}
                  </span>
                  <span className="text-[#94A3B8]">
                    Image ingested via private optical conduit • Layout mapped
                  </span>
                </div>
              </div>
            )}

            {/* Terminal Telemetry / Scanning Sequence State */}
            <div className="relative mt-5">
              {/* Vertical Animated Cyan Scanline Overlay */}
              {scanState === "scanning" && (
                <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-2xl">
                  {/* Glowing Laser Sweep */}
                  <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00F2FE] to-transparent shadow-[0_0_20px_#00F2FE] animate-scanline" />
                  <div className="absolute inset-0 bg-[#00F2FE]/5 backdrop-blur-[0.5px]" />
                </div>
              )}

              {/* Progress Telemetry Steps Box (Visible during scan) */}
              {scanState === "scanning" && (
                <div className="mb-5 p-4 rounded-2xl bg-[#0B0F19] border border-[#00F2FE]/40 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#00F2FE] font-bold flex items-center gap-2">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#00F2FE]" />
                      Autonomous 2.5s Scan Pipeline Executing...
                    </span>
                    <span className="text-[#94A3B8]">
                      {scanStep === 1 ? "33%" : scanStep === 2 ? "66%" : "99%"}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-1.5 bg-[#151D2F] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#00F2FE] transition-all duration-700 ease-out shadow-[0_0_10px_#00F2FE]"
                      style={{
                        width: scanStep === 1 ? "33%" : scanStep === 2 ? "66%" : "100%",
                      }}
                    />
                  </div>

                  {/* 3 Step Indicators */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 font-mono text-[11px]">
                    <div
                      className={`flex items-center gap-2 p-2 rounded-lg border ${
                        scanStep >= 1
                          ? "bg-[#151D2F] border-[#00F2FE]/40 text-[#00F2FE]"
                          : "border-[#232F48] text-[#94A3B8]"
                      }`}
                    >
                      {scanStep > 1 ? (
                        <Check className="w-3.5 h-3.5 text-[#00F2FE]" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse" />
                      )}
                      <span>{t.stepExtracting}</span>
                    </div>

                    <div
                      className={`flex items-center gap-2 p-2 rounded-lg border ${
                        scanStep >= 2
                          ? "bg-[#151D2F] border-[#00F2FE]/40 text-[#00F2FE]"
                          : "border-[#232F48] text-[#94A3B8]"
                      }`}
                    >
                      {scanStep > 2 ? (
                        <Check className="w-3.5 h-3.5 text-[#00F2FE]" />
                      ) : scanStep === 2 ? (
                        <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-[#232F48]" />
                      )}
                      <span>{t.stepComparing}</span>
                    </div>

                    <div
                      className={`flex items-center gap-2 p-2 rounded-lg border ${
                        scanStep >= 3
                          ? "bg-[#151D2F] border-[#00F2FE]/40 text-[#00F2FE]"
                          : "border-[#232F48] text-[#94A3B8]"
                      }`}
                    >
                      {scanStep === 3 ? (
                        <span className="w-2 h-2 rounded-full bg-[#00F2FE] animate-pulse" />
                      ) : (
                        <span className="w-2 h-2 rounded-full bg-[#232F48]" />
                      )}
                      <span>{t.stepDetecting}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Parsed Output & Discrepancy Detection Table */}
              <div className="overflow-x-auto rounded-2xl border border-[#232F48] bg-[#0B0F19] scrollbar-none">
                <table className="w-full min-w-[560px] text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#232F48] text-[11px] font-mono uppercase tracking-wider text-[#94A3B8] bg-[#151D2F]/50">
                      <th className="py-3 px-4 sm:px-5 font-semibold">
                        {t.colItem}
                      </th>
                      <th className="py-3 px-4 sm:px-5 font-semibold">
                        {t.colInvoiced}
                      </th>
                      <th className="py-3 px-4 sm:px-5 font-semibold">
                        {t.colBenchmark}
                      </th>
                      <th className="py-3 px-4 sm:px-5 font-semibold text-right">
                        {t.colVariance}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#232F48]/60 text-xs sm:text-sm">
                    {current.items.map((item, idx) => {
                      const billedTotal = parseFloat(item.qty) * item.billedRate;
                      const diffPerUnit = item.billedRate - item.contractRate;
                      const totalDiff = parseFloat(item.qty) * diffPerUnit;

                      return (
                        <tr
                          key={idx}
                          className={`transition-colors duration-200 ${
                            scanState === "scanned" && item.isDiscrepancy
                              ? "bg-rose-500/5 hover:bg-rose-500/10"
                              : "hover:bg-[#151D2F]/70"
                          }`}
                        >
                          {/* Item Description & Quantity */}
                          <td className="py-3.5 px-4 sm:px-5">
                            <div className="font-semibold text-[#F8FAFC]">
                              {item.name}
                            </div>
                            <div className="text-[11px] font-mono text-[#94A3B8] mt-0.5">
                              Line Total: ${billedTotal.toLocaleString("en-AU", { minimumFractionDigits: 2 })}
                            </div>
                          </td>

                          {/* Invoiced Unit Rate */}
                          <td className="py-3.5 px-4 sm:px-5 font-mono text-[#F8FAFC]">
                            <span className="font-bold">
                              ${item.billedRate.toFixed(2)}
                            </span>
                            <span className="text-xs text-[#94A3B8]"> / {item.unit}</span>
                          </td>

                          {/* Contract Benchmark */}
                          <td className="py-3.5 px-4 sm:px-5 font-mono text-[#94A3B8]">
                            <span className="text-[#F8FAFC]">
                              ${item.contractRate.toFixed(2)}
                            </span>
                            <span className="text-xs text-[#94A3B8]"> / {item.unit}</span>
                            <span className="ml-1.5 text-[10px] text-[#00F2FE] bg-[#00F2FE]/10 px-1.5 py-0.5 rounded border border-[#00F2FE]/20">
                              [{t.agreedRate}]
                            </span>
                          </td>

                          {/* Variance Alert */}
                          <td className="py-3.5 px-4 sm:px-5 text-right font-mono">
                            {scanState === "idle" && (
                              <span className="text-xs text-[#94A3B8]">
                                Pending Scan
                              </span>
                            )}

                            {scanState === "scanning" && (
                              <span className="text-xs text-[#00F2FE] animate-pulse">
                                Auditing...
                              </span>
                            )}

                            {(scanState === "scanned" || scanState === "staged") && (
                              <div>
                                {item.isDiscrepancy ? (
                                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 font-mono text-xs font-bold shadow-[0_0_10px_rgba(244,63,94,0.15)]">
                                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                                    <span>
                                      {item.varianceLabel || `+$${totalDiff.toFixed(2)} ${t.priceCreep}`}
                                    </span>
                                  </div>
                                ) : (
                                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-medium">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                    <span>{t.exactMatch}</span>
                                  </div>
                                )}
                              </div>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 1-Tap Governance Action Bar */}
            <div className="mt-6 pt-5 border-t border-[#232F48] space-y-4">
              {/* Discrepancy Summary Banner */}
              <div className="p-4 rounded-2xl bg-[#0B0F19] border border-[#232F48] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
                    <AlertTriangle className="w-5 h-5 text-rose-400" />
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-[#F8FAFC] block">
                      {formattedSummary}
                    </span>
                    <span className="text-xs text-[#94A3B8]">
                      Annualized overcharge if left unchecked:{" "}
                      <strong className="text-rose-400 font-mono">
                        ${annualizedImpact.toLocaleString("en-AU", { minimumFractionDigits: 0 })} / yr
                      </strong>
                    </span>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-[10px] font-mono text-[#94A3B8] uppercase block">
                    Total Invoiced
                  </span>
                  <span className="text-base font-extrabold font-mono text-[#F8FAFC]">
                    ${totalBilled.toLocaleString("en-AU", { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                {/* HITL Reassurance microtext */}
                <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
                  <ShieldCheck className="w-4 h-4 text-[#00F2FE] shrink-0" />
                  <span>{t.microText}</span>
                </div>

                {/* Primary CTA */}
                <div className="flex items-center gap-3 justify-end">
                  {scanState !== "staged" ? (
                    <button
                      type="button"
                      onClick={handleStageInXero}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#00F2FE] hover:bg-[#38bdf8] text-[#0B0F19] font-black text-xs sm:text-sm shadow-[0_0_20px_rgba(0,242,254,0.35)] transition-all cursor-pointer w-full sm:w-auto"
                    >
                      <FileCheck2 className="w-4 h-4 text-[#0B0F19]" />
                      <span>{t.approveBtn}</span>
                    </button>
                  ) : (
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                      {/* Confirmation Pill */}
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span>{formattedStagedNotice}</span>
                      </span>

                      {/* Diagnostic Audit Trigger */}
                      <button
                        type="button"
                        onClick={onOpenAuditModal}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#F8FAFC] text-[#0B0F19] font-bold text-xs hover:bg-white transition-all shadow-sm cursor-pointer w-full sm:w-auto"
                      >
                        <span>{t.reviewAllBtn}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#0096A3]" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Staged Confirmation Details (When Staged) */}
              {scanState === "staged" && (
                <div className="p-3.5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 text-xs text-[#94A3B8] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>
                      {language === "en"
                        ? "Zero unapproved commits to your ledger. Zero shifts altered without explicit authorization."
                        : "Zéro écriture non approuvée sur votre grand livre. Zéro modification de shift sans autorisation explicite."}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-[#00F2FE] hover:underline font-mono text-xs cursor-pointer ml-4"
                  >
                    {language === "en" ? "Test Another Docket" : "Tester un Autre Bon"}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
