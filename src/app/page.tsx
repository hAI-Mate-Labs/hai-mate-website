"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MarketReality from "@/components/MarketReality";
import SolutionsHub from "@/components/SolutionsHub";
import PhilosophySection from "@/components/PhilosophySection";
import ProcessSection from "@/components/ProcessSection";
import GrantCallout from "@/components/GrantCallout";
import IntakeSection from "@/components/IntakeSection";
import Footer from "@/components/Footer";
import AuditModal from "@/components/AuditModal";

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
    <div className="min-h-screen bg-[#0B0F19] text-[#F8FAFC] selection:bg-[#00F2FE] selection:text-[#04101A] font-sans antialiased">
      {/* 1. Sticky Navigation Header */}
      <Navbar onOpenAuditModal={() => handleOpenAuditModal()} />

      <main>
        {/* 2. Hero Section */}
        <Hero onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 3. Market Reality & Trust Metric Bar */}
        <MarketReality onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 4. Core Solutions Hub (Grid of 4 Interactive Cards) */}
        <SolutionsHub onOpenAuditModal={(solution) => handleOpenAuditModal(solution)} />

        {/* 5. "The Open Aperture" Architecture (Why hAI Mate!) */}
        <PhilosophySection onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 6. The 3-Step Go-To-Market Process */}
        <ProcessSection onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 7. WA Government Grant Accelerator (Callout Banner) */}
        <GrantCallout onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 8. Final CTA & Contact Intake Form */}
        <IntakeSection />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Interactive Booking & Diagnostic Audit Modal */}
      <AuditModal
        isOpen={auditModalOpen}
        onClose={handleCloseAuditModal}
        initialSolution={selectedSolutionForAudit}
      />
    </div>
  );
}
