"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarketReality from "@/components/MarketReality";
import DocketSimulator from "@/components/DocketSimulator";
import SolutionsHub from "@/components/SolutionsHub";
import IntegrationsHub from "@/components/IntegrationsHub";
import GrantCallout from "@/components/GrantCallout";
import UnifiedProcessTimeline from "@/components/UnifiedProcessTimeline";
import CompactFounderCard from "@/components/CompactFounderCard";
import IntakeSection from "@/components/IntakeSection";
import Footer from "@/components/Footer";
import AuditModal from "@/components/AuditModal";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [selectedSolutionForAudit, setSelectedSolutionForAudit] = useState<string | undefined>(undefined);

  const handleOpenAuditModal = (solutionTitle?: string) => {
    setSelectedSolutionForAudit(solutionTitle);
    setAuditModalOpen(true);
  };

  const handleCloseAuditModal = () => {
    setAuditModalOpen(false);
    setSelectedSolutionForAudit(undefined);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-[#00BFCC] selection:text-white font-sans antialiased">
      {/* 1. Sticky Navigation Header */}
      <Navbar onOpenAuditModal={() => handleOpenAuditModal()} />

      <main>
        {/* 1. Hero Section with Interactive Scenario Switcher */}
        <Hero onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 2. Streamlined Trust Metric Strip (4-8 Hrs, 100% Control, Zero Hardware, 50% Grant) */}
        <MarketReality onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 3. Live Interactive Docket Scanner & Price Creep Simulator */}
        <DocketSimulator onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 4. Core Solutions Hub & Connectivity */}
        <SolutionsHub onOpenAuditModal={(solution) => handleOpenAuditModal(solution)} />
        <IntegrationsHub onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 5. WA Government Grant & Payback Calculator */}
        <GrantCallout onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 6. The 3-Step Process & 100% Value Guarantee */}
        <UnifiedProcessTimeline onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 7. Direct Solo Practitioner Trust Card */}
        <CompactFounderCard onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 8. Direct Booking Intake & WhatsApp Line */}
        <IntakeSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Direct Contact Pill (WhatsApp + Between-Service Hours) */}
      <FloatingContact onOpenAuditModal={() => handleOpenAuditModal()} />

      {/* Interactive Booking & Diagnostic Audit Modal */}
      <AuditModal
        isOpen={auditModalOpen}
        onClose={handleCloseAuditModal}
        initialSolution={selectedSolutionForAudit}
      />
    </div>
  );
}
