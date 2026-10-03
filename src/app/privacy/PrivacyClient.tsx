"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuditModal from "@/components/AuditModal";
import FloatingContact from "@/components/FloatingContact";
import {
  ShieldCheck,
  Lock,
  Globe,
  FileText,
  CheckCircle2,
  Clock,
  ArrowRight,
  Mail,
  Phone,
  Scale,
  Database,
  UserCheck,
} from "lucide-react";

export default function PrivacyClient() {
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
              <ShieldCheck className="w-3.5 h-3.5 text-[#0096A3]" />
              <span className="text-xs font-semibold text-zinc-800 tracking-wide uppercase">
                Privacy Policy • Dual AU &amp; GDPR Compliance
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight">
              Privacy Policy &amp; Data Governance
            </h1>

            <p className="mt-4 text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              How <strong className="font-semibold text-zinc-900">hAI Mate!</strong> collects, protects,
              and respects your personal and venue data under the <em>Australian Privacy Act 1988 (Cth)</em> and
              the <em>European Union General Data Protection Regulation (GDPR)</em>.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 pt-2 border-t border-zinc-100">
              <span>Last Updated: October 2026</span>
              <span>•</span>
              <span>Solo Trader Registered in Sydney, NSW</span>
              <span>•</span>
              <span className="text-[#0096A3] font-semibold">Strict Non-Training Guarantee</span>
            </div>
          </div>
        </section>

        {/* Core Principles Highlights */}
        <section className="py-12 bg-zinc-50/60 border-b border-zinc-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-2">
                <div className="p-2 w-fit rounded-xl bg-cyan-50 border border-cyan-100 text-[#0096A3]">
                  <Database className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-zinc-950">Zero Model Training</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Your recipes, wholesale invoices, and customer bookings are NEVER used to train public AI models.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-2">
                <div className="p-2 w-fit rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700">
                  <Lock className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-zinc-950">Bank-Grade Encryption</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  All transmissions encrypted via TLS 1.3 and stored on sovereign Australian infrastructure (AES-256).
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-zinc-200/80 shadow-2xs space-y-2">
                <div className="p-2 w-fit rounded-xl bg-blue-50 border border-blue-100 text-blue-700">
                  <Scale className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-zinc-950">Dual AU &amp; GDPR Rights</h3>
                <p className="text-xs text-zinc-600 leading-relaxed">
                  Full rights to access, rectify, port, or erase your data at any time with a single email.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Legal Content */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
            
            {/* Section 1 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight flex items-center gap-2">
                <span className="text-xs font-mono text-[#0096A3] font-bold">01.</span>
                <span>Data Controller &amp; Business Information</span>
              </h2>
              <p>
                This Privacy Policy is issued by <strong>Mallory Antomarchi</strong>, trading as{" "}
                <strong>hAI Mate!</strong> (referred to herein as "hAI Mate!", "we", "us", or "our"),
                a registered Australian Solo Trader based in Sydney, NSW, operating across Western Australia
                and nationally.
              </p>
              <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 text-xs sm:text-sm font-mono space-y-1 text-zinc-800">
                <p><strong>Entity Name:</strong> Mallory Antomarchi (t/a hAI Mate!)</p>
                <p><strong>Principal Place of Business:</strong> Sydney, New South Wales, Australia</p>
                <p><strong>Primary Privacy Contact:</strong> privacy@haimate.com.au / founder@haimate.com.au</p>
                <p><strong>Direct Phone:</strong> +61 402 472 262</p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight flex items-center gap-2">
                <span className="text-xs font-mono text-[#0096A3] font-bold">02.</span>
                <span>Dual Regulatory Compliance Framework</span>
              </h2>
              <p>
                Given our operational base in Australia and our founder’s European French background, we uphold
                the highest global privacy benchmarks by complying simultaneously with:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-600">
                <li>
                  <strong>The Australian Privacy Act 1988 (Cth)</strong>, including the 13 Australian Privacy
                  Principles (APPs), regulated by the Office of the Australian Information Commissioner (OAIC).
                </li>
                <li>
                  <strong>The European Union General Data Protection Regulation (Regulation (EU) 2016/679) ("GDPR")</strong>,
                  regulated across Europe including by the <em>Commission Nationale de l’Informatique et des Libertés (CNIL)</em> in France.
                </li>
              </ul>
            </div>

            {/* Section 3 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight flex items-center gap-2">
                <span className="text-xs font-mono text-[#0096A3] font-bold">03.</span>
                <span>Information We Collect</span>
              </h2>
              <p>
                We only collect information necessary to scope, implement, and operate applied automation
                workflows for your venue:
              </p>
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-zinc-50/80 border border-zinc-200/70">
                  <h4 className="text-sm font-bold text-zinc-950">A. Personal &amp; Contact Information</h4>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                    Your name, business email address, venue name, phone number, and administrative role
                    provided when submitting our intake form, booking an audit, or communicating via email/Slack.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-50/80 border border-zinc-200/70">
                  <h4 className="text-sm font-bold text-zinc-950">B. Venue Operational &amp; Financial Records (During Audits &amp; Engagements)</h4>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                    Supplier delivery dockets, wholesale invoices (meat, seafood, produce), POS till exports,
                    and anonymised roster schedules. These are processed strictly to calculate margin leakage
                    and configure OCR/forecasting pipelines.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-zinc-50/80 border border-zinc-200/70">
                  <h4 className="text-sm font-bold text-zinc-950">C. Technical &amp; System Logs</h4>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-1">
                    Anonymised IP addresses, browser types, and timestamp logs captured automatically for
                    server security and uptime monitoring.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight flex items-center gap-2">
                <span className="text-xs font-mono text-[#0096A3] font-bold">04.</span>
                <span>Lawful Bases for Processing (GDPR Art. 6 &amp; APPs)</span>
              </h2>
              <p>We process personal and business data strictly under lawful legal grounds:</p>
              <ul className="list-disc pl-5 space-y-2 text-zinc-600">
                <li><strong>Performance of a Contract:</strong> To deliver 14-day diagnostic readiness audits, configure OCR pipelines, and maintain managed Slack retainers.</li>
                <li><strong>Consent:</strong> When you voluntarily submit an intake enquiry or request direct contact from our founder.</li>
                <li><strong>Legitimate Interests:</strong> To protect venue clients from supplier overcharges, prevent penalty wage blowouts, and defend system uptime.</li>
                <li><strong>Legal Compliance:</strong> To satisfy Australian statutory record-keeping and taxation obligations under the Australian Taxation Office (ATO).</li>
              </ul>
            </div>

            {/* Section 5 - Crucial Non-Training Pledge */}
            <div className="p-6 sm:p-8 rounded-3xl bg-zinc-950 text-white space-y-3 shadow-md">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#00BFCC]">
                <span>CORE PRIVACY PLEDGE</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                05. Strict Artificial Intelligence Non-Training Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                We believe your business intelligence is your competitive advantage. Under no circumstances
                do we sell, license, or feed your supplier pricing, recipes, wage rosters, or customer records
                into public artificial intelligence foundation models.
              </p>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                All document parsing (OCR) and predictive calculations occur within dedicated, zero-data-retention
                enterprise API instances that guarantee client data is never used for model training or fine-tuning.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight flex items-center gap-2">
                <span className="text-xs font-mono text-[#0096A3] font-bold">06.</span>
                <span>Data Storage, Security &amp; Sovereign Hosting</span>
              </h2>
              <p>
                All data is encrypted in transit using <strong>TLS 1.3</strong> and at rest using <strong>AES-256</strong>.
                Our cloud infrastructure is hosted primarily in Australian sovereign data centres (Sydney, AWS/Google Cloud),
                ensuring complete compliance with Australian data sovereignty laws.
              </p>
              <p>
                Where data is processed in conjunction with European systems or cross-border tools, we enforce
                Standard Contractual Clauses (SCCs) to guarantee GDPR-equivalent protection.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight flex items-center gap-2">
                <span className="text-xs font-mono text-[#0096A3] font-bold">07.</span>
                <span>Your Legal Rights (Australian APPs &amp; GDPR)</span>
              </h2>
              <p>
                Regardless of where you are located, you possess comprehensive rights regarding your data:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                  <strong className="text-zinc-950 block mb-1">Right to Access &amp; Portability:</strong>
                  Request a complete, machine-readable copy of any personal or venue records we hold.
                </div>
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                  <strong className="text-zinc-950 block mb-1">Right to Erasure ("To Be Forgotten"):</strong>
                  Request immediate, permanent cryptographic deletion of your venue data and audit records.
                </div>
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                  <strong className="text-zinc-950 block mb-1">Right to Rectification:</strong>
                  Correct any inaccurate or incomplete records promptly upon notice.
                </div>
                <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                  <strong className="text-zinc-950 block mb-1">Right to Object &amp; Restrict:</strong>
                  Restrict processing or withdraw consent at any time without punitive consequences.
                </div>
              </div>
              <p className="text-xs text-zinc-500 pt-1">
                To exercise any of these rights, email <a href="mailto:privacy@haimate.com.au" className="text-[#0096A3] font-medium hover:underline">privacy@haimate.com.au</a>.
                We acknowledge and process all requests within 14 business days free of charge.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight flex items-center gap-2">
                <span className="text-xs font-mono text-[#0096A3] font-bold">08.</span>
                <span>Data Retention Policy</span>
              </h2>
              <p>
                We do not hoard data. Sample dockets and operational files gathered during a 14-day diagnostic
                audit are permanently purged 30 days following deliverable sign-off unless you actively engage us
                for a managed implementation retainer.
              </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-zinc-950 tracking-tight flex items-center gap-2">
                <span className="text-xs font-mono text-[#0096A3] font-bold">09.</span>
                <span>Supervisory Authorities &amp; Complaints</span>
              </h2>
              <p>
                If you have concerns about our handling of your data, please contact Mallory Antomarchi directly.
                You also have the legal right to lodge a formal complaint with supervisory authorities:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-zinc-600">
                <li><strong>Australia:</strong> Office of the Australian Information Commissioner (OAIC) — <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-[#0096A3] hover:underline">oaic.gov.au</a></li>
                <li><strong>France / EU:</strong> Commission Nationale de l'Informatique et des Libertés (CNIL) — <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#0096A3] hover:underline">cnil.fr</a></li>
              </ul>
            </div>

            {/* Section 10 */}
            <div className="p-6 rounded-3xl bg-zinc-50 border border-zinc-200/90 text-left space-y-3">
              <h3 className="text-base font-bold text-zinc-950">10. Contacting Our Privacy Officer</h3>
              <p className="text-xs sm:text-sm text-zinc-600">
                For questions regarding this policy, data deletion requests, or our security architecture, contact:
              </p>
              <div className="text-xs sm:text-sm text-zinc-800 space-y-1 font-mono">
                <p>Mallory Antomarchi (Founder &amp; Data Protection Lead)</p>
                <p>Email: <a href="mailto:privacy@haimate.com.au" className="text-[#0096A3] hover:underline">privacy@haimate.com.au</a> / <a href="mailto:founder@haimate.com.au" className="text-[#0096A3] hover:underline">founder@haimate.com.au</a></p>
                <p>Phone: +61 402 472 262</p>
                <p>Sydney, NSW, Australia</p>
              </div>
            </div>

          </div>
        </section>

        {/* Bottom CTA Strip */}
        <section className="py-12 bg-zinc-50/50 border-t border-zinc-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/"
              className="text-xs font-semibold text-zinc-700 hover:text-zinc-950 transition-colors flex items-center gap-1.5"
            >
              <span>← Return to Home Landing Page</span>
            </Link>
            <div className="flex items-center gap-4 text-xs font-medium text-zinc-500">
              <Link href="/terms" className="hover:text-zinc-950 transition-colors">
                View Terms of Service →
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
        initialSolution="Privacy & Security Architecture Inquiry"
      />
    </div>
  );
}
