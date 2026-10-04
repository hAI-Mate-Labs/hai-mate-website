"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CompanyOverview from "@/components/CompanyOverview";
import DocketSimulator from "@/components/DocketSimulator";
import GrantCallout from "@/components/GrantCallout";
import UnifiedProcessTimeline from "@/components/UnifiedProcessTimeline";
import CompactFounderCard from "@/components/CompactFounderCard";
import IntakeSection from "@/components/IntakeSection";
import Footer from "@/components/Footer";
import AuditModal from "@/components/AuditModal";
import SampleAuditModal from "@/components/SampleAuditModal";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const [sampleAuditModalOpen, setSampleAuditModalOpen] = useState(false);
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
        {/* 1. Hero Section: Clean, punchy headline + trust badges + interactive scenario */}
        <Hero onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 2. Company at a Glance: Purpose • Mission • Value • What We Offer */}
        <CompanyOverview onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 3. Live Interactive Proof: Docket Scanner & Price Creep Simulator */}
        <DocketSimulator onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 4. WA Government Grant & Payback Calculator */}
        <GrantCallout onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 5. The 3-Step Process & 100% Value Guarantee */}
        <UnifiedProcessTimeline
          onOpenAuditModal={() => handleOpenAuditModal()}
          onOpenSampleAuditModal={() => setSampleAuditModalOpen(true)}
        />

        {/* 6. Direct Engineering Partnership Trust Card */}
        <CompactFounderCard onOpenAuditModal={() => handleOpenAuditModal()} />

        {/* 7. Direct Booking Intake & WhatsApp Line */}
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

      {/* Sample 14-Day Audit Executive Teardown Modal */}
      <SampleAuditModal
        isOpen={sampleAuditModalOpen}
        onClose={() => setSampleAuditModalOpen(false)}
        onBookAudit={() => {
          setSampleAuditModalOpen(false);
          handleOpenAuditModal("Sample Audit Review");
        }}
      />
    </div>
  );
}
