"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApertureLogo from "@/components/ApertureLogo";
import AuditModal from "@/components/AuditModal";
import FloatingContact from "@/components/FloatingContact";
import {
  Heart,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Flame,
  Target,
  CheckCircle2,
  Users,
  Compass,
  Coffee,
  Store,
  Layers,
  ArrowUpRight,
} from "lucide-react";

export default function MissionClient() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-[#00BFCC] selection:text-white font-sans antialiased">
      {/* Navigation */}
      <Navbar onOpenAuditModal={() => setAuditModalOpen(true)} />

      <main>
        {/* Hero Section */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 bg-white overflow-hidden border-b border-zinc-100">
          {/* Subtle watermark logo */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.025] pointer-events-none">
            <ApertureLogo size={700} color="#0F172A" />
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Breadcrumb / Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-50 border border-zinc-200/80 mb-6 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#00BFCC] animate-pulse" />
              <span className="text-xs font-semibold text-zinc-800 tracking-wide uppercase">
                Why We Exist • Vision &amp; Purpose
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.12] max-w-4xl mx-auto">
              Technology Should Quietly Serve the Human Craft—
              <span className="relative inline-block text-[#0F172A]">
                Never Displace It.
                <span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#00BFCC]/25 -z-10 rounded-sm" />
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed font-normal">
              Hospitality is fundamentally an art of generosity, sensory craft, and human connection.
              We started <strong className="font-semibold text-[#0F172A]">hAI Mate!</strong> to build
              invisible, reliable automation that strips away back-office paperwork—giving independent
              operators their time, peace of mind, and margins back.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setAuditModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold rounded-full bg-[#0F172A] text-white hover:bg-zinc-800 active:scale-[0.99] transition-all shadow-sm group cursor-pointer"
              >
                <span>Book a 14-Day Diagnostic Review</span>
                <ArrowRight className="w-4 h-4 ml-2 text-[#00BFCC] transition-transform group-hover:translate-x-1" />
              </button>
              <Link
                href="/#solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-medium rounded-full bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50 transition-all shadow-2xs"
              >
                <span>Explore Applied Solutions</span>
              </Link>
            </div>

            {/* Quick Guiding Principle Banner */}
            <div className="mt-14 max-w-3xl mx-auto p-6 sm:p-7 rounded-3xl bg-zinc-50/70 border border-zinc-200/90 text-left shadow-xs">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-2xl bg-white border border-zinc-200/80 text-[#0096A3] shadow-2xs shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A]">The Core Conviction</h4>
                  <p className="mt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    “A head chef should be at the pass perfecting flavour, not squinting at crumpled
                    delivery dockets at midnight. A venue manager should be on the floor inspiring
                    their team, not battling spreadsheet penalty forecasts. We build conduits through
                    administrative friction so people can do what only humans can do.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Reality: Why Hospitality Back-Offices Are Hurting */}
        <section className="py-20 md:py-24 bg-zinc-50/50 border-b border-zinc-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0096A3] block mb-2">
                The Ground Reality
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                The Silent Weight Crushing Independent Venues.
              </h2>
              <p className="mt-3 text-base text-zinc-600 leading-relaxed">
                Operating a restaurant, bakery, or cafe in Australia has never been harder.
                Between inflationary food costs, tight margins, and complex award structures,
                owners are caught in a vise between delivering exceptional service and surviving
                paperwork.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Problem 1 */}
              <div className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    The 70-Hour Week Trap
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Most venue owners work 60 to 80 hours every single week. But 10 to 15 of those
                    grueling hours are spent after close—typing delivery dockets into Xero,
                    matching clock-in stamps, and answering emails.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-100 text-xs font-medium text-rose-700">
                  Result: Severe burnout, lost family time &amp; exhaustion.
                </div>
              </div>

              {/* Problem 2 */}
              <div className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                    <Store className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    Unnoticed Supplier Price Creep
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Meat, seafood, dairy, and flour suppliers bump contracted rates by 3% to 8%
                    unannounced. On busy delivery days, crumpled dockets are signed in a rush.
                    Overcharges go unnoticed until quarterly P&amp;L shocks arrive.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-100 text-xs font-medium text-amber-700">
                  Result: $1,200 to $3,500/month silently leaking from profit margins.
                </div>
              </div>

              {/* Problem 3 */}
              <div className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    The Silicon Valley Hype Gap
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Big tech promises conversational bots that write poetry, but they can't cross-reference
                    a fresh barramundi delivery against a signed rate card or check if Saturday rain
                    will trigger overtime penalty rates on the floor.
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-100 text-xs font-medium text-blue-700">
                  Result: Cynicism toward tech &amp; wasted software subscriptions.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Three Pillars of Our Mission */}
        <section className="py-20 md:py-28 bg-white border-b border-zinc-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0096A3] block mb-2">
                Our Operating Manifesto
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                The Three Pillars of hAI Mate!
              </h2>
              <p className="mt-3 text-base text-zinc-600">
                Every automation we design, deploy, and maintain is held accountable to three
                uncompromising principles:
              </p>
            </div>

            <div className="space-y-8">
              {/* Pillar 01 */}
              <div className="p-8 sm:p-10 rounded-3xl bg-zinc-50/70 border border-zinc-200/90 shadow-xs flex flex-col md:flex-row items-start gap-8">
                <div className="flex md:flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-[#0096A3] shadow-2xs shrink-0">
                    <Heart className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-black text-zinc-400">PILLAR 01</span>
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                    Human Dignity &amp; Sovereignty at the Center
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                    We categorically reject the narrative that artificial intelligence should replace
                    human hospitality workers. A machine will never replicate the hospitality of a
                    friendly greeting, the intuitive palate of a chef, or the craft of a morning baker.
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    Our automation serves strictly as an applied conduit. We route messy data, draft
                    accurate entries, and forecast demand—but <strong>the human operator always makes
                    the final call with a 1-tap green light</strong>. No action executes in the dark.
                  </p>
                </div>
              </div>

              {/* Pillar 02 */}
              <div className="p-8 sm:p-10 rounded-3xl bg-zinc-50/70 border border-zinc-200/90 shadow-xs flex flex-col md:flex-row items-start gap-8">
                <div className="flex md:flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-[#0096A3] shadow-2xs shrink-0">
                    <Clock className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-black text-zinc-400">PILLAR 02</span>
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                    Reclaiming 4 to 8 Hours Every Single Week
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                    Time is the single most valuable resource in hospitality. Our performance metric
                    is not vanity AI tokens, complex charts, or technical jargon—it is simple:
                    <strong> how many hours did we give back to the venue owner this week?</strong>
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    4 to 8 hours a week means 200 to 400 hours each year. That’s time to trial new
                    seasonal menus, mentor apprentices, improve service standards, or simply be home
                    for dinner with your children on a Wednesday night.
                  </p>
                </div>
              </div>

              {/* Pillar 03 */}
              <div className="p-8 sm:p-10 rounded-3xl bg-zinc-50/70 border border-zinc-200/90 shadow-xs flex flex-col md:flex-row items-start gap-8">
                <div className="flex md:flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-[#0096A3] shadow-2xs shrink-0">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-black text-zinc-400">PILLAR 03</span>
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                    Radical Simplicity &amp; Sovereign Data Privacy
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                    Hospitality staff do not have time to sit through two-week IT onboarding sessions
                    or learn another dashboard with 50 menus. If an automation requires a training
                    manual, it has failed.
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    We embed our workflows directly into tools you already use: snapping phone photos
                    of dockets, checking text messages, and approving drafts with one touch. Your
                    recipes, supplier contracts, and sales data stay 100% confidential on Australian
                    cloud infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Open Aperture: Our Philosophy in Symbol */}
        <section className="py-20 md:py-24 bg-zinc-50/50 border-b border-zinc-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Visual Geometry */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative p-12 rounded-3xl bg-white border border-zinc-200/80 shadow-md flex items-center justify-center">
                  <ApertureLogo size={240} color="#0F172A" glow />
                </div>
              </div>

              {/* Right Column: Narrative Breakdown */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#0096A3] block mb-1">
                    Brand Symbolism
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                    The Geometry of The Open Aperture.
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
                    Our mark is not decorative artwork. Every curve and line mathematically depicts
                    our approach to applied automation:
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white border border-zinc-200/70 shadow-2xs">
                    <h4 className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0F172A]" />
                      The Outer White &amp; Dark Circle (The Whole Venue)
                    </h4>
                    <p className="mt-1 text-xs text-zinc-600 leading-relaxed pl-4.5">
                      Represents your complete business ecosystem operating in balance: kitchen,
                      floor team, suppliers, reservations, and till sales.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-zinc-200/70 shadow-2xs">
                    <h4 className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00BFCC]" />
                      The 45° Conduit (Cutting Administrative Weight)
                    </h4>
                    <p className="mt-1 text-xs text-zinc-600 leading-relaxed pl-4.5">
                      The clean, angled conduit slicing through the weight of manual paperwork. It
                      transforms unstructured paper into structured, margin-protecting flow.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-zinc-200/70 shadow-2xs">
                    <h4 className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00BFCC] animate-pulse" />
                      The Central Cyan Node (Human Judgment)
                    </h4>
                    <p className="mt-1 text-xs text-zinc-600 leading-relaxed pl-4.5">
                      The human operator at the exact focal point. The aperture opens flow only when
                      the human grants permission.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Long-term Company Goals: The 2030 Horizon */}
        <section className="py-20 md:py-28 bg-white border-b border-zinc-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0096A3] block mb-2">
                Our Long-Term Horizon
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                Where We Are Heading by 2030.
              </h2>
              <p className="mt-3 text-base text-zinc-600">
                We measure our company's success by the tangible freedom and profitability we deliver
                to the Australian food and beverage community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Goal 1 */}
              <div className="p-8 rounded-3xl bg-zinc-50/70 border border-zinc-200/90 shadow-2xs space-y-4">
                <div className="text-3xl sm:text-4xl font-black text-[#0F172A] font-sans flex items-baseline gap-1">
                  100,000<span className="text-lg text-[#0096A3] font-bold">hrs</span>
                </div>
                <h3 className="text-base font-bold text-[#0F172A]">
                  Unpaid Admin Burden Eliminated
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  Our target is to systematically return over 100,000 hours of administrative drudgery
                  back to Australian chefs, bakers, and operators—allowing them to focus on creativity,
                  mentorship, and work-life balance.
                </p>
              </div>

              {/* Goal 2 */}
              <div className="p-8 rounded-3xl bg-zinc-50/70 border border-zinc-200/90 shadow-2xs space-y-4">
                <div className="text-3xl sm:text-4xl font-black text-[#0F172A] font-sans flex items-baseline gap-1">
                  500<span className="text-lg text-[#0096A3] font-bold">Venues</span>
                </div>
                <h3 className="text-base font-bold text-[#0F172A]">
                  Independent Venues Protected
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  Independent cafes, neighbourhood bistros, and bakeries are the cultural lifeblood of
                  our suburbs. We aim to equip 500 independent venues with the same operational superpowers
                  previously reserved for multi-million-dollar chains.
                </p>
              </div>

              {/* Goal 3 */}
              <div className="p-8 rounded-3xl bg-zinc-50/70 border border-zinc-200/90 shadow-2xs space-y-4">
                <div className="text-3xl sm:text-4xl font-black text-[#0F172A] font-sans flex items-baseline gap-1">
                  100%<span className="text-lg text-[#0096A3] font-bold">HITL</span>
                </div>
                <h3 className="text-base font-bold text-[#0F172A]">
                  Human-in-the-Loop Standard
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  Setting the gold standard for applied automation in Australia: proving that businesses
                  can achieve massive operational efficiency while upholding strict human judgment,
                  ethical AI guardrails, and data sovereignty.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Commitment from the Founder */}
        <section className="py-20 md:py-24 bg-zinc-50/50 border-b border-zinc-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200/90 shadow-sm space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0F172A] flex items-center justify-center p-2 shadow-xs">
                  <ApertureLogo size={24} color="#FFFFFF" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0F172A]">
                    A Solo Practice by Design
                  </h3>
                  <p className="text-xs text-zinc-500">
                    Personal note from the Founder • Registered in Sydney, NSW
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                <p>
                  “I deliberately structured <strong>hAI Mate!</strong> as an applied solo practice.
                  In corporate agencies, clients are pitched by experienced partners, only to be
                  passed off to junior coordinators or outsourced ticket queues who have never set foot
                  in a commercial kitchen or seen a Friday night dinner rush.
                </p>
                <p>
                  When you work with hAI Mate!, you work directly with me. I personally conduct your
                  14-day diagnostic audit, inspect your till exports, build your OCR invoice pipelines,
                  and tune your roster forecasting models. You have my direct mobile phone number and
                  a private Slack channel.
                </p>
                <p>
                  My goal isn’t to build an agency empire with hundreds of junior staff. My goal is to
                  be the trusted, high-craft automation partner for operators who take pride in what
                  they put on the plate.”
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs text-zinc-500">
                  <span className="font-semibold text-zinc-800">Direct Founder Access:</span>{" "}
                  <a
                    href="mailto:founder@haimate.com.au"
                    className="text-[#0096A3] font-medium hover:underline"
                  >
                    founder@haimate.com.au
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                  <span>Sydney HQ • Serving WA &amp; Australia</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00BFCC]" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-20 md:py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Ready to Partner with Someone Who Values Your Craft?
            </h2>
            <p className="text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              Schedule your 14-day diagnostic audit. We’ll map your administrative bottlenecks,
              calculate your exact margin impact, and show you a working prototype on your phone.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setAuditModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-[#0F172A] text-white hover:bg-zinc-800 transition-all shadow-md group cursor-pointer"
              >
                <span>Book a 14-Day Diagnostic Review</span>
                <ArrowRight className="w-4 h-4 ml-2 text-[#00BFCC] transition-transform group-hover:translate-x-1" />
              </button>
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-zinc-50 border border-zinc-200 text-zinc-800 hover:bg-zinc-100 transition-colors shadow-2xs"
              >
                <span>Back to Main Landing Page</span>
              </Link>
            </div>
            <p className="text-xs text-zinc-400 font-normal pt-2">
              50% matched funding available for eligible WA businesses via the Local Capability Fund (LCF).
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Founder Contact Pill */}
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
