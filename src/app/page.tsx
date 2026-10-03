"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarketReality from "@/components/MarketReality";
import BeforeAfter from "@/components/BeforeAfter";
import DocketSimulator from "@/components/DocketSimulator";
import SolutionsHub from "@/components/SolutionsHub";
import IntegrationsHub from "@/components/IntegrationsHub";
import PhilosophySection from "@/components/PhilosophySection";
import IroncladRules from "@/components/IroncladRules";
import ComparisonTable from "@/components/ComparisonTable";
import FounderSpotlight from "@/components/FounderSpotlight";
import ProcessSection from "@/components/ProcessSection";
import GrantCallout from "@/components/GrantCallout";
import FaqSection from "@/components/FaqSection";
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
        {/* 2. Hero Section with Interactive Bakery, Restaurant & Pub Scenario Switcher */}
        <Hero onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 3. Market Reality & Trust Metric Bar */}
        <MarketReality onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 4. Before vs After Comparison */}
        <BeforeAfter onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 5. Live Interactive Docket Scanner & Price Creep Simulator */}
        <DocketSimulator onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 6. Core Solutions Hub (4 High-Contrast Cards) */}
        <SolutionsHub onOpenAuditModal={(solution) => handleOpenAuditModal(solution)} />

        {/* 7. Works With Your Setup (Interactive Integrations Hub) */}
        <IntegrationsHub onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 8. "The Open Aperture" Architecture (Why hAI Mate!) */}
        <PhilosophySection onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 7. Ironclad Rules: What hAI Mate! Will NEVER Do */}
        <IroncladRules />

        {/* 8. Comparison Table: Why a Dedicated Solo Partner Beats Apps & Agencies */}
        <ComparisonTable onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 9. Founder / Solo Practitioner Personal Spotlight */}
        <FounderSpotlight onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 10. The 3-Step Go-To-Market Process */}
        <ProcessSection onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 11. WA Government Grant Accelerator (Callout Banner) */}
        <GrantCallout onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 12. Hospitality FAQ Section */}
        <FaqSection onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 13. Final CTA & Contact Intake Form */}
        <IntakeSection />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* Floating Direct Contact Pill */}
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
