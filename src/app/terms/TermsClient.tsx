"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuditModal from "@/components/AuditModal";
import FloatingContact from "@/components/FloatingContact";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Scale,
  Lock,
  ArrowRight,
  UserCheck,
  Building,
} from "lucide-react";

export default function TermsClient() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-[#00BFCC] selection:text-white font-sans antialiased">
      {/* Navigation */}
      <Navbar onOpenAuditModal={() => setAuditModalOpen(true)} />

      <main>
        {/* Header Section */}
        <section className="relative pt-16 pb-16 md:pt-24 md:pb-20 bg-white border-b border-zinc-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-50 border border-zinc-200/80 mb-6 shadow-2xs">
              <Scale className="w-3.5 h-3.5 text-[#0096A3]" />
              <span className="text-xs font-semibold text-zinc-800 tracking-wide uppercase">
                Terms of Service • Australian Consumer Law &amp; Commercial Terms
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight">
              Terms of Service &amp; Client Agreement
            </h1>

            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              Commercial engagement terms for applied automation audits, pipeline integrations, and managed
              retainers provided by <strong className="font-semibold text-zinc-900">hAI Mate!</strong> (Mallory Antomarchi t/a hAI Mate!).
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 pt-2 border-t border-zinc-100">
              <span>Effective Date: October 2026</span>
              <span>•</span>
              <span>Governed by the Laws of New South Wales &amp; Australia</span>
              <span>•</span>
              <span className="text-[#0096A3] font-semibold">Strict Human-in-the-Loop Covenant</span>
            </div>
          </div>
        </section>

        {/* The Human-in-the-Loop Covenant Callout */}
        <section className="py-10 bg-zinc-50/70 border-b border-zinc-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border-2 border-zinc-900/10 shadow-sm space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#00BFCC]/15 text-[#0096A3]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-zinc-950">
                  The Non-Negotiable Human-in-the-Loop (HITL) Covenant
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                hAI Mate! engineers applied decision-support automation. Under this agreement, our software
                is architected to draft, stage, parse, and recommend. <strong>The Client (via its authorized venue
                manager, head chef, or business owner) remains the sole final authority</strong> who must provide
                explicit 1-tap green light authorization prior to any payment disbursement, general ledger commitment
                (Xero/MYOB), or staff shift cancellation.
              </p>
            </div>
          </div>
        </section>

        {/* Main Terms Sections */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
            
            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight flex items-center gap-2">
                <span className="text-xs font-mono text-[#0096A3] font-bold">01.</span>
                <span>Engagement &amp; Parties</span>
              </h2>
              <p>
                These Terms of Service ("Terms") constitute a legally binding agreement between{" "}
                <strong>Mallory Antomarchi</strong> trading as <strong>hAI Mate!</strong> (applied AI automation practice operating on-the-ground in Perth & Western Australia, serving venues nationally) and the client entity or individual venue operator ("Client", "you",
                or "your") engaging our diagnostic readiness audits, pipeline integrations, or managed support services.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight flex items-center gap-2">
                <span className="text-xs font-mono text-[#0096A3] font-bold">02.</span>
                <span>Scope of Services</span>
              </h2>
              <p>hAI Mate! provides three core tiers of professional automation services:</p>
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/70">
                  <h4 className="text-sm font-bold text-zinc-950">14-Day Diagnostic Readiness Audit:</h4>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                    Fixed-fee review evaluating venue bottlenecks, testing OCR line-item accuracy on historical
                    supplier dockets, auditing POS sales feeds, and providing an executive margin ROI blueprint.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/70">
                  <h4 className="text-sm font-bold text-zinc-950">Custom Pipeline Deployment:</h4>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                    Bespoke integration of optical character recognition (OCR), demand-forecasting models,
                    reservation agents, and review aggregators connecting directly with your till (Lightspeed, Square),
                    accounting (Xero, MYOB), and scheduling tools (Deputy).
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/70">
                  <h4 className="text-sm font-bold text-zinc-950">Managed Slack Connect Retainer:</h4>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                    Ongoing continuous model tuning, proactive webhook monitoring, direct developer access
                    via private Slack channel, and maintenance of third-party API connectivity.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight flex items-center gap-2">
                <span className="text-xs font-mono text-[#0096A3] font-bold">03.</span>
                <span>Client Access &amp; Security Credentials</span>
              </h2>
              <p>
                To enable automated integrations, the Client agrees to grant scoped, least-privilege API
                keys or webhook permissions to their software environments (e.g., Xero organisation, Lightspeed POS,
                Deputy roster). The Client is responsible for maintaining the security of their primary login credentials.
              </p>
              <p>
                hAI Mate! will never request or store raw banking passwords or unencrypted credit card details.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight flex items-center gap-2">
                <span className="text-xs font-mono text-[#0096A3] font-bold">04.</span>
                <span>Intellectual Property &amp; Data Ownership</span>
              </h2>
              <ul className="list-disc pl-5 space-y-2 text-zinc-600">
                <li>
                  <strong>Client Data Ownership:</strong> The Client retains 100% exclusive ownership of all
                  financial records, recipe costs, menu item pricing, supplier contracts, and guest data.
                </li>
                <li>
                  <strong>Bespoke Integrations:</strong> Upon full payment of engagement fees, custom workflows
                  and webhook endpoints developed specifically for the Client become the operational property of the Client.
                </li>
                <li>
                  <strong>Pre-Existing Tools &amp; Libraries:</strong> hAI Mate! retains ownership of its underlying
                  proprietary orchestration templates, diagnostic scripts, and generic workflow libraries.
                </li>
              </ul>
            </div>

            {/* Section 5 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight flex items-center gap-2">
                <span className="text-xs font-mono text-[#0096A3] font-bold">05.</span>
                <span>Fees, Invoicing &amp; WA Government Grants</span>
              </h2>
              <p>
                All fees are quoted in Australian Dollars (AUD). Audits are billed on a fixed-fee milestone basis.
                Managed retainers are billed monthly in advance with zero lock-in contracts (cancel with 30 days written notice).
              </p>
              <p>
                <strong>WA State Government Grants:</strong> Where Clients seek up to 50% co-funding through
                the Western Australian Local Capability Fund (LCF), hAI Mate! provides technical scoping and quotation
                documentation. Final grant approval is subject to Western Australian Department of Jobs, Tourism, Science
                and Innovation criteria and cannot be guaranteed by hAI Mate!.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight flex items-center gap-2">
                <span className="text-xs font-mono text-[#0096A3] font-bold">06.</span>
                <span>Australian Consumer Law (ACL) Guarantees</span>
              </h2>
              <p>
                Our services come with guarantees that cannot be excluded under the <em>Australian Consumer Law</em>,
                contained in Schedule 2 of the <em>Competition and Consumer Act 2010 (Cth)</em>. You are entitled to
                have services supplied with due care and skill, fit for any specified purpose, and supplied within a
                reasonable time.
              </p>
              <p>
                Nothing in these Terms excludes, restricts, or modifies any condition, warranty, right, or remedy
                conferred on you by the ACL that cannot be lawfully excluded.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight flex items-center gap-2">
                <span className="text-xs font-mono text-[#0096A3] font-bold">07.</span>
                <span>Limitation of Liability</span>
              </h2>
              <p>
                To the maximum extent permitted by Australian law:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-600">
                <li>
                  hAI Mate! shall not be liable for indirect, incidental, or consequential losses, including loss
                  of profits, venue downtime, or third-party platform outages (e.g., unexpected outages of Xero,
                  Lightspeed, or telecommunication providers).
                </li>
                <li>
                  Because hAI Mate! enforces human-in-the-loop review, the Client accepts operational responsibility
                  for verifying the accuracy of staged draft records prior to providing final approval.
                </li>
                <li>
                  Our total aggregate liability under any claim arising out of these Terms shall not exceed the total
                  fees paid by the Client to hAI Mate! in the preceding three (3) months.
                </li>
              </ul>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight flex items-center gap-2">
                <span className="text-xs font-mono text-[#0096A3] font-bold">08.</span>
                <span>Termination &amp; Orderly Off-Boarding</span>
              </h2>
              <p>
                Either party may terminate a monthly managed retainer upon thirty (30) days written notice.
                Upon termination, hAI Mate! will conduct an orderly off-boarding: removing API tokens, exporting
                workflow logs, and providing the Client with full export archives of their integration endpoints.
              </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight flex items-center gap-2">
                <span className="text-xs font-mono text-[#0096A3] font-bold">09.</span>
                <span>Governing Law &amp; Dispute Resolution</span>
              </h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of the State of{" "}
                <strong>New South Wales, Australia</strong>. The parties agree to resolve any dispute in good faith
                through direct discussion with the founder before commencing formal mediation or legal proceedings.
              </p>
            </div>

            {/* Section 10 */}
            <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200/90 text-left space-y-3">
              <h3 className="text-base font-bold text-zinc-950">10. Contact Information</h3>
              <p className="text-xs sm:text-sm text-zinc-600">
                For commercial enquiries, contract clarification, or audit agreements:
              </p>
              <div className="text-xs sm:text-sm text-zinc-800 space-y-1 font-mono">
                <p>Mallory Antomarchi (t/a hAI Mate!)</p>
                <p>Email: <a href="mailto:founder@haimate.com.au" className="text-[#0096A3] hover:underline">founder@haimate.com.au</a></p>
                <p>Phone: +61 402 472 262</p>
                <p>Perth, Western Australia, Australia</p>
              </div>
            </div>

          </div>
        </section>

        {/* Bottom Navigation Strip */}
        <section className="py-12 bg-zinc-50/50 border-t border-zinc-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="text-xs font-semibold text-zinc-700 hover:text-zinc-950 transition-colors flex items-center gap-1.5"
            >
              <span>← Return to Home Landing Page</span>
            </Link>
            <div className="flex items-center gap-4 text-xs font-medium text-zinc-500">
              <Link href="/privacy" className="hover:text-zinc-950 transition-colors">
                View Privacy Policy →
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Direct Contact */}
      <FloatingContact onOpenAuditModal={() => setAuditModalOpen(true)} />

      {/* Audit Modal */}
      <AuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
        initialSolution="Commercial Terms & Audit Engagement"
      />
    </div>
  );
}
