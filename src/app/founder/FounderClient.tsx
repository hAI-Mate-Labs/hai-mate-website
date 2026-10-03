"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApertureLogo from "@/components/ApertureLogo";
import AuditModal from "@/components/AuditModal";
import FloatingContact from "@/components/FloatingContact";
import {
  Sparkles,
  ArrowRight,
  Heart,
  Clock,
  Compass,
  Code2,
  Cpu,
  GraduationCap,
  Globe,
  Award,
  CheckCircle2,
  Mail,
  Phone,
  Terminal,
  Layers,
  ChevronRight,
} from "lucide-react";

export default function FounderClient() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-[#00BFCC] selection:text-white font-sans antialiased">
      {/* Navigation */}
      <Navbar onOpenAuditModal={() => setAuditModalOpen(true)} />

      <main>
        {/* Hero Section - Poetic, Visionary, Jobs/Altman Cadence */}
        <section className="relative pt-16 pb-20 md:pt-28 md:pb-32 bg-white overflow-hidden border-b border-zinc-100">
          {/* Subtle Aperture Watermark */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.02] pointer-events-none">
            <ApertureLogo size={800} color="#09090B" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-50 border border-zinc-200/80 mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#00BFCC] animate-pulse" />
              <span className="text-xs font-semibold text-zinc-800 tracking-wide uppercase">
                The Founder • Mallory Antomarchi
              </span>
            </div>

            {/* Visionary Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.12] max-w-3xl mx-auto">
              We were not put on this earth to spend our lives{" "}
              <span className="relative inline-block text-zinc-950">
                filing paperwork.
                <span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#00BFCC]/25 -z-10 rounded-sm" />
              </span>
            </h1>

            {/* Poetic Subheadline */}
            <p className="mt-7 text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-normal">
              A 10-year journey from the Mediterranean coast of France to Sydney and Western Australia.
              Driven by a simple, radical conviction: that artificial intelligence exists to liberate
              human time for the things that truly matter.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setAuditModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold rounded-full bg-zinc-900 text-white hover:bg-zinc-800 active:scale-[0.99] transition-all shadow-sm group cursor-pointer"
              >
                <span>Book a 14-Day Diagnostic Review</span>
                <ArrowRight className="w-4 h-4 ml-2 text-[#00BFCC] transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="mailto:founder@haimate.com.au"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-medium rounded-full bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50 transition-all shadow-2xs"
              >
                <span>Contact Mallory Directly</span>
              </a>
            </div>

            {/* Identity Strip */}
            <div className="mt-14 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-zinc-500 font-mono">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#0096A3]" /> Born in France
              </span>
              <span className="hidden sm:inline text-zinc-300">•</span>
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#0096A3]" /> Based in Sydney, NSW
              </span>
              <span className="hidden sm:inline text-zinc-300">•</span>
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#0096A3]" /> Applied AI &amp; Operations
              </span>
            </div>
          </div>
        </section>

        {/* The Personal Essay / Narrative (Jobs / Altman Style) */}
        <section className="py-20 md:py-28 bg-white border-b border-zinc-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Opening Manifest */}
            <div className="space-y-6 text-base sm:text-lg text-zinc-700 leading-relaxed font-normal">
              <p className="text-xl sm:text-2xl font-serif italic text-zinc-950 leading-snug">
                “Ever since I can remember, I have been a dreamer. I have always looked at the world
                not merely as it is, but as it could be when we remove friction and unlock human potential.”
              </p>
              
              <p>
                I grew up in France, where food, conversation, and artisan craftsmanship are treated
                almost as sacred acts. There is an unspoken understanding that gathering around a table,
                sharing freshly baked bread, or enjoying a slow dinner with the people you love is what
                gives life its texture.
              </p>

              <p>
                Yet, for ten years working in operations, administration, and data coordination in
                Villefranche-sur-Mer on the French Riviera, I witnessed the opposite side of that reality:
                the crushing, invisible weight of administrative friction.
              </p>

              <p>
                I saw passionate, hardworking people—the ones who keep our communities functioning,
                who run local services and manage venues—drowning in paper trails, disjointed spreadsheets,
                and repetitive clerical tasks. They were working 70 hours a week, not because they loved
                typing invoices or matching timesheets, but because existing tools failed them.
              </p>
            </div>

            {/* Highlight Callout Box: The Turning Point */}
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-50 border border-zinc-200/90 text-left shadow-2xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-[#0096A3] shadow-2xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-zinc-950">
                  The Catalyst: A Bicycle for the Modern Mind
                </h3>
              </div>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Steve Jobs famously referred to the computer as a <em>“bicycle for our minds”</em>—a tool
                that dramatically amplified human locomotion. When modern artificial intelligence and
                autonomous agents emerged, I recognized something even deeper:
              </p>
              <p className="text-sm sm:text-base font-medium text-zinc-900 leading-relaxed">
                AI is an engine for human time. It is humanity’s greatest opportunity to automate the
                robotic, mundane parts of our lives so that we can finally return to being fully human.
              </p>
            </div>

            {/* Chapter 2: The Australian Chapter */}
            <div className="space-y-6 text-base sm:text-lg text-zinc-700 leading-relaxed font-normal">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight font-sans">
                The Journey to Australia &amp; The Birth of hAI Mate!
              </h2>

              <p>
                I moved to Australia with a singular purpose: to take deep, technical AI research and
                translate it into tangible, everyday relief for real business owners.
              </p>

              <p>
                Too much of the AI conversation today is hijacked by corporate Silicon Valley hype—endless
                chatbots that generate generic text, or enterprise software companies selling six-figure
                contracts that overwhelm small operators. Nobody was building simple, applied, reliable
                conduits for the neighborhood bakery, the coastal bistro, or the suburban pub.
              </p>

              <p>
                That is why I created <strong className="font-semibold text-zinc-950">hAI Mate!</strong> as an applied
                solo practice registered in Sydney. I didn’t want to build an ivory tower agency with
                account managers and sales reps. I wanted to sit directly across the table from venue
                owners, understand their till systems, look at their supplier dockets, and build systems
                that quietly reclaim 4 to 8 hours of their life every single week.
              </p>
            </div>

            {/* Chapter 3: What I Deeply Believe (Jobs/Altman Credo) */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight font-sans">
                The Four Tenets I Live By
              </h2>

              <div className="grid grid-cols-1 gap-5">
                {/* Tenet 1 */}
                <div className="p-6 rounded-2xl bg-zinc-50/70 border border-zinc-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#00BFCC]" />
                    <h3 className="text-base font-bold text-zinc-950 font-sans">
                      1. Time Is Non-Renewable
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed pl-4.5">
                    You can always earn another dollar, test another menu, or pour another coffee. But you
                    can never buy back a missed Sunday dinner with your family. Any tool that gives hours
                    back to a human being is a moral imperative.
                  </p>
                </div>

                {/* Tenet 2 */}
                <div className="p-6 rounded-2xl bg-zinc-50/70 border border-zinc-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#00BFCC]" />
                    <h3 className="text-base font-bold text-zinc-950 font-sans">
                      2. Humans at the Center, Always
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed pl-4.5">
                    We must never use AI to diminish human craft or displace the soul of hospitality.
                    Machines should do the repetitive, invisible heavy lifting in the background—under
                    the strict, deliberate control and judgment of human operators.
                  </p>
                </div>

                {/* Tenet 3 */}
                <div className="p-6 rounded-2xl bg-zinc-50/70 border border-zinc-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#00BFCC]" />
                    <h3 className="text-base font-bold text-zinc-950 font-sans">
                      3. Simplicity Is the Ultimate Sophistication
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed pl-4.5">
                    If an automation requires a 50-page manual or forces a busy chef to learn a new
                    software dashboard, it has failed. True engineering elegance is invisible: a photo
                    snapped on your phone, a 1-tap green light, and complete peace of mind.
                  </p>
                </div>

                {/* Tenet 4 */}
                <div className="p-6 rounded-2xl bg-zinc-50/70 border border-zinc-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#00BFCC]" />
                    <h3 className="text-base font-bold text-zinc-950 font-sans">
                      4. High Craft &amp; Personal Responsibility
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed pl-4.5">
                    I treat every single pipeline I build with the exact same rigor and pride that a master
                    baker brings to their sourdough. No shortcuts. No unvetted algorithms. Total personal
                    accountability.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Qualifications, Technical Toolkit & Background */}
        <section className="py-20 md:py-24 bg-zinc-50/50 border-b border-zinc-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0096A3] block mb-2">
                Proven Foundation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
                Operational Rigor Meets Modern AI Engineering.
              </h2>
              <p className="mt-3 text-base text-zinc-600">
                10+ years of operational administration, data validation, and emergency command logistics,
                paired with formal computer science and generative AI specialisations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Card 1: Experience & Track Record */}
              <div className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900">
                    <Layers className="w-5 h-5 text-[#0096A3]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-950">10+ Years in Operations</h3>
                    <p className="text-xs text-zinc-500">Government &amp; Enterprise Logistics</p>
                  </div>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-600">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Operations &amp; Data Coordinator (10 years):</strong> Managed operational
                      administration, data cleaning, asset registers, and municipal infrastructure records
                      for the City of Villefranche-sur-Mer, France.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Crisis Command Logistics:</strong> Coordinated high-pressure resource tracking
                      and logistics for Municipal Crisis Command Centre emergency exercises (2021–2023).
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Operations Team Lead:</strong> Led remote analyst teams, designing workflows
                      and enforcing data validation standards for international client deliverables.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Card 2: AI Engineering & Formal Education */}
              <div className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xs space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-2xl bg-zinc-50 border border-zinc-200 text-zinc-900">
                    <GraduationCap className="w-5 h-5 text-[#0096A3]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-950">Technical &amp; AI Credentials</h3>
                    <p className="text-xs text-zinc-500">Computer Science &amp; Specialisations</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/60">
                    <p className="text-xs font-bold text-zinc-950">
                      Bachelor of Science in Computer Science
                    </p>
                    <p className="text-[11px] text-zinc-500">University of the People</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/60">
                    <p className="text-xs font-bold text-zinc-950">
                      AI Agent Developer Specialisation
                    </p>
                    <p className="text-[11px] text-zinc-500">Vanderbilt University</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/60">
                    <p className="text-xs font-bold text-zinc-950">
                      IBM Generative AI Engineering &amp; Data Science Certificates
                    </p>
                    <p className="text-[11px] text-zinc-500">IBM Professional Certificates</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/60">
                    <p className="text-xs font-bold text-zinc-950">
                      Google Data Analytics Professional Certificate
                    </p>
                    <p className="text-[11px] text-zinc-500">Google</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Technical Tooling Badge Strip */}
            <div className="mt-8 p-6 rounded-3xl bg-white border border-zinc-200/80 shadow-2xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-900 block">
                  Core Technical Capability
                </span>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Applied Agentic Workflows • Python &amp; SQL Pipelines • OCR Document Extraction • POS/Xero Integrations
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-600 bg-zinc-50 px-3 py-1.5 rounded-xl border border-zinc-200">
                <Terminal className="w-3.5 h-3.5 text-[#0096A3]" />
                <span>Deterministic • Auditable • 100% Secure</span>
              </div>
            </div>

          </div>
        </section>

        {/* Direct Contact & Founder Guarantee */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-zinc-950 text-white shadow-xl relative overflow-hidden space-y-8">
              
              {/* Subtle background glow */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#00BFCC]/10 blur-3xl pointer-events-none" />

              <div className="space-y-4 max-w-2xl relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-[#00BFCC]">
                  <span>DIRECT FOUNDER DESK</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  Let’s Talk About What’s Stealing Your Time.
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                  Whether you operate an artisan bakery in Mount Lawley, a seafood bistro in Cottesloe,
                  or a group of venues in Sydney, I would love to hear your story. No sales presentations,
                  no obligation—just an honest conversation between operators.
                </p>
              </div>

              {/* Direct channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 relative">
                <a
                  href="mailto:founder@haimate.com.au"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-3.5 group"
                >
                  <div className="p-2.5 rounded-xl bg-white/10 text-[#00BFCC] group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 block font-mono">Email Me Directly</span>
                    <span className="text-sm font-semibold text-white">founder@haimate.com.au</span>
                  </div>
                </a>

                <a
                  href="tel:0402472262"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-3.5 group"
                >
                  <div className="p-2.5 rounded-xl bg-white/10 text-[#00BFCC] group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 block font-mono">Call / SMS Mobile</span>
                    <span className="text-sm font-semibold text-white">0402 472 262</span>
                  </div>
                </a>
              </div>

              {/* Footer row */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-400 relative">
                <button
                  type="button"
                  onClick={() => setAuditModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#00BFCC] text-zinc-950 font-bold text-xs hover:brightness-110 transition-all shadow-sm cursor-pointer"
                >
                  <span>Book 14-Day Readiness Audit</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="font-mono text-[11px] text-zinc-400">
                  Mallory Antomarchi • Solo Trader • Sydney, NSW
                </div>
              </div>

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
        initialSolution="14-Day Diagnostic Readiness Audit"
      />
    </div>
  );
}
