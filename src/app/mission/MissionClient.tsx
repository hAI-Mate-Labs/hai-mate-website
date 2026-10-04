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
import { useLanguage } from "@/context/LanguageContext";

export default function MissionClient() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const { language } = useLanguage();

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
                {language === "en" ? "Why We Exist • Vision & Purpose" : "Pourquoi Nous Existons • Vision & Raison d'Être"}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.12] max-w-4xl mx-auto">
              {language === "en" ? (
                <>
                  Technology Should Quietly Serve the Human Craft—
                  <span className="relative inline-block text-[#0F172A]">
                    Never Displace It.
                    <span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#00BFCC]/25 -z-10 rounded-sm" />
                  </span>
                </>
              ) : (
                <>
                  La Technologie Doit Servir le Savoir-Faire Humain—
                  <span className="relative inline-block text-[#0F172A]">
                    Jamais le Remplacer.
                    <span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#00BFCC]/25 -z-10 rounded-sm" />
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed font-normal">
              {language === "en" ? (
                <>
                  Hospitality is fundamentally an art of generosity, sensory craft, and human connection.
                  We started <strong className="font-semibold text-[#0F172A]">hAI Mate!</strong> to build
                  invisible, reliable automation that strips away back-office paperwork—giving independent
                  operators their time, peace of mind, and margins back.
                </>
              ) : (
                <>
                  L'art de recevoir et la gastronomie sont fondamentalement des actes de générosité, de précision sensorielle et de lien humain.
                  Nous avons fondé <strong className="font-semibold text-[#0F172A]">hAI Mate!</strong> pour bâtir des automatisations
                  invisibles et fiables qui éliminent la paperasserie de back-office—redonnant aux exploitants indépendants
                  leur temps, leur sérénité et leurs marges.
                </>
              )}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setAuditModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold rounded-full bg-[#0F172A] text-white hover:bg-zinc-800 active:scale-[0.99] transition-all shadow-sm group cursor-pointer"
              >
                <span>{language === "en" ? "Book a 14-Day Diagnostic Review" : "Réserver l'Audit Diagnostique (14 Jours)"}</span>
                <ArrowRight className="w-4 h-4 ml-2 text-[#00BFCC] transition-transform group-hover:translate-x-1" />
              </button>
              <Link
                href="/#solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-medium rounded-full bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-50 transition-all shadow-2xs"
              >
                <span>{language === "en" ? "Explore Applied Solutions" : "Découvrir les Solutions Appliquées"}</span>
              </Link>
            </div>

            {/* Quick Guiding Principle Banner */}
            <div className="mt-14 max-w-3xl mx-auto p-6 sm:p-7 rounded-3xl bg-zinc-50/70 border border-zinc-200/90 text-left shadow-xs">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-2xl bg-white border border-zinc-200/80 text-[#0096A3] shadow-2xs shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0F172A]">
                    {language === "en" ? "The Core Conviction" : "La Conviction Fondatrice"}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {language === "en"
                      ? "“A head chef should be at the pass perfecting flavour, not squinting at crumpled delivery dockets at midnight. A venue manager should be on the floor inspiring their team, not battling spreadsheet penalty forecasts. We build conduits through administrative friction so people can do what only humans can do.”"
                      : "« Un chef de cuisine doit être au passe à sublimer les saveurs, pas à déchiffrer des bons de livraison froissés à minuit. Un responsable de salle doit être au contact de ses clients et de ses équipes, pas enfermé dans des tableurs d'heures majorées. Nous ouvrons des conduits à travers la friction administrative pour que chacun se consacre à ce que seuls les humains savent faire. »"}
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
                {language === "en" ? "The Ground Reality" : "La Réalité du Terrain"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                {language === "en" ? "The Silent Weight Crushing Independent Venues." : "Le Poids Silencieux qui Étouffe les Établissements Indépendants."}
              </h2>
              <p className="mt-3 text-base text-zinc-600 leading-relaxed">
                {language === "en"
                  ? "Operating a restaurant, bakery, or cafe in Australia has never been harder. Between inflationary food costs, tight margins, and complex award structures, owners are caught in a vise between delivering exceptional service and surviving paperwork."
                  : "Exploiter un restaurant, une boulangerie ou un café en Australie n'a jamais été aussi difficile. Entre l'inflation des matières premières, la tension sur les marges et la complexité des grilles salariales, les gérants sont pris en étau entre l'excellence en salle et la paperasse administrative."}
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
                    {language === "en" ? "The 70-Hour Week Trap" : "Le Piège de la Semaine de 70 Heures"}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {language === "en"
                      ? "Most venue owners work 60 to 80 hours every single week. But 10 to 15 of those grueling hours are spent after close—typing delivery dockets into Xero, matching clock-in stamps, and answering emails."
                      : "La plupart des gérants travaillent 60 à 80 heures chaque semaine. Mais 10 à 15 de ces heures éprouvantes sont passées après la fermeture—à saisir des bons dans Xero, rapprocher les pointages et répondre aux emails."}
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-100 text-xs font-medium text-rose-700">
                  {language === "en" ? "Result: Severe burnout, lost family time & exhaustion." : "Résultat : Épuisement, vie de famille sacrifiée et fatigue accumulée."}
                </div>
              </div>

              {/* Problem 2 */}
              <div className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600">
                    <Store className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    {language === "en" ? "Unnoticed Supplier Price Creep" : "Les Hausses de Prix Fournisseurs Invisibles"}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {language === "en"
                      ? "Meat, seafood, dairy, and flour suppliers bump contracted rates by 3% to 8% unannounced. On busy delivery days, crumpled dockets are signed in a rush. Overcharges go unnoticed until quarterly P&L shocks arrive."
                      : "Les fournisseurs de marée, viande, crèmerie et farine augmentent leurs tarifs contractuels de 3% à 8% sans préavis. Dans le feu des réceptions, les bons sont signés à la hâte. Les surfacturations passent inaperçues jusqu'au bilan trimestriel."}
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-100 text-xs font-medium text-amber-700">
                  {language === "en" ? "Result: $1,200 to $3,500/month silently leaking from profit margins." : "Résultat : 1 200 $ à 3 500 $/mois de marge nette qui fuient silencieusement."}
                </div>
              </div>

              {/* Problem 3 */}
              <div className="p-8 rounded-3xl bg-white border border-zinc-200/80 shadow-xs flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A]">
                    {language === "en" ? "The Silicon Valley Hype Gap" : "Le Fossé de la Tech Théorique"}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {language === "en"
                      ? "Big tech promises conversational bots that write poetry, but they can't cross-reference a fresh barramundi delivery against a signed rate card or check if Saturday rain will trigger overtime penalty rates on the floor."
                      : "Les géants de la tech vantent des robots qui écrivent des poèmes, mais incapables de rapprocher un arrivage de marée fraîche d'une grille tarifaire négociée ou d'anticiper les pénalités d'heures majorées du weekend."}
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-100 text-xs font-medium text-blue-700">
                  {language === "en" ? "Result: Cynicism toward tech & wasted software subscriptions." : "Résultat : Scepticisme envers la tech & abonnements logiciels gaspillés."}
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
                {language === "en" ? "Our Operating Manifesto" : "Notre Manifeste Opérationnel"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                {language === "en" ? "The Three Pillars of hAI Mate!" : "Les Trois Piliers Fondateurs de hAI Mate!"}
              </h2>
              <p className="mt-3 text-base text-zinc-600">
                {language === "en"
                  ? "Every automation we design, deploy, and maintain is held accountable to three uncompromising principles:"
                  : "Chaque automatisation que nous concevons, déployons et maintenons répond rigoureusement à trois principes intransigeants :"}
              </p>
            </div>

            <div className="space-y-8">
              {/* Pillar 01 */}
              <div className="p-8 sm:p-10 rounded-3xl bg-zinc-50/70 border border-zinc-200/90 shadow-xs flex flex-col md:flex-row items-start gap-8">
                <div className="flex md:flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-[#0096A3] shadow-2xs shrink-0">
                    <Heart className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-black text-zinc-400">
                    {language === "en" ? "PILLAR 01" : "PILIER 01"}
                  </span>
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                    {language === "en" ? "Human Dignity & Sovereignty at the Center" : "Dignité Humaine & Souveraineté Décisionnelle au Centre"}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                    {language === "en"
                      ? "We categorically reject the narrative that artificial intelligence should replace human hospitality workers. A machine will never replicate the hospitality of a friendly greeting, the intuitive palate of a chef, or the craft of a morning baker."
                      : "Nous rejetons catégoriquement l'idée que l'intelligence artificielle doive remplacer les professionnels de la restauration. Une machine ne remplacera jamais la chaleur d'un accueil sincère, le palais intuitif d'un chef ou le geste d'un artisan boulanger à l'aube."}
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    {language === "en" ? (
                      <>
                        Our automation serves strictly as an applied conduit. We route messy data, draft
                        accurate entries, and forecast demand—but <strong>the human operator always makes
                        the final call with a 1-tap green light</strong>. No action executes in the dark.
                      </>
                    ) : (
                      <>
                        Nos automatisations agissent uniquement comme des conduits appliqués. Nous structurons les données, préparons
                        les écritures et anticipons les flux—mais <strong>l'opérateur humain garde toujours
                        le contrôle absolu en 1 clic</strong>. Aucune action ne s'exécute à l'aveugle.
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Pillar 02 */}
              <div className="p-8 sm:p-10 rounded-3xl bg-zinc-50/70 border border-zinc-200/90 shadow-xs flex flex-col md:flex-row items-start gap-8">
                <div className="flex md:flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-[#0096A3] shadow-2xs shrink-0">
                    <Clock className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-black text-zinc-400">
                    {language === "en" ? "PILLAR 02" : "PILIER 02"}
                  </span>
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                    {language === "en" ? "Reclaiming 4 to 8 Hours Every Single Week" : "Récupérer 4 à 8 Heures Chaque Semaine"}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                    {language === "en" ? (
                      <>
                        Time is the single most valuable resource in hospitality. Our performance metric
                        is not vanity AI tokens, complex charts, or technical jargon—it is simple:
                        <strong> how many hours did we give back to the venue owner this week?</strong>
                      </>
                    ) : (
                      <>
                        Le temps est la ressource la plus précieuse en restauration. Notre indicateur de réussite
                        n'est pas le nombre de jetons IA consommés ou de graphiques savants, mais une mesure concrète :
                        <strong> combien d'heures avons-nous restituées au restaurateur cette semaine ?</strong>
                      </>
                    )}
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    {language === "en"
                      ? "4 to 8 hours a week means 200 to 400 hours each year. That’s time to trial new seasonal menus, mentor apprentices, improve service standards, or simply be home for dinner with your children on a Wednesday night."
                      : "4 à 8 heures par semaine représentent 200 à 400 heures par an. C'est du temps pour tester une nouvelle carte, former un apprenti, élever le niveau de service ou simplement dîner en famille le mercredi soir."}
                  </p>
                </div>
              </div>

              {/* Pillar 03 */}
              <div className="p-8 sm:p-10 rounded-3xl bg-zinc-50/70 border border-zinc-200/90 shadow-xs flex flex-col md:flex-row items-start gap-8">
                <div className="flex md:flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-[#0096A3] shadow-2xs shrink-0">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-black text-zinc-400">
                    {language === "en" ? "PILLAR 03" : "PILIER 03"}
                  </span>
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                    {language === "en" ? "Radical Simplicity & Sovereign Data Privacy" : "Simplicité Radicale & Souveraineté des Données"}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
                    {language === "en"
                      ? "Hospitality staff do not have time to sit through two-week IT onboarding sessions or learn another dashboard with 50 menus. If an automation requires a training manual, it has failed."
                      : "Les équipes de cuisine et de salle n'ont pas de temps à consacrer à des formations informatiques de deux semaines ou à de nouveaux tableaux de bord à 50 menus. Si une automatisation requiert un manuel d'instruction, c'est un échec."}
                  </p>
                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    {language === "en"
                      ? "We embed our workflows directly into tools you already use: snapping phone photos of dockets, checking text messages, and approving drafts with one touch. Your recipes, supplier contracts, and sales data stay 100% confidential on Australian cloud infrastructure."
                      : "Nous intégrons nos flux directement dans les habitudes de votre brigade : photos de bons sur smartphone, notifications SMS et validation en 1 clic. Vos recettes, contrats d'achat et chiffres de vente demeurent 100% confidentiels sur infrastructure australienne."}
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
                    {language === "en" ? "Brand Symbolism" : "Symbolisme de Marque"}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                    {language === "en" ? "The Geometry of The Open Aperture." : "La Géométrie de l'Ouverture (The Open Aperture)."}
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
                    {language === "en"
                      ? "Our mark is not decorative artwork. Every curve and line mathematically depicts our approach to applied automation:"
                      : "Notre emblème n'est pas une simple illustration décorative. Chaque courbe et chaque angle figure précisément notre philosophie de l'automatisation :"}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-white border border-zinc-200/70 shadow-2xs">
                    <h4 className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0F172A]" />
                      {language === "en" ? "The Outer White & Dark Circle (The Whole Venue)" : "Le Cercle Extérieur (L'Établissement dans son Ensemble)"}
                    </h4>
                    <p className="mt-1 text-xs text-zinc-600 leading-relaxed pl-4.5">
                      {language === "en"
                        ? "Represents your complete business ecosystem operating in balance: kitchen, floor team, suppliers, reservations, and till sales."
                        : "Figure l'écosystème global de votre établissement en équilibre : cuisine, équipe de salle, fournisseurs, réservations et recettes de caisse."}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-zinc-200/70 shadow-2xs">
                    <h4 className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00BFCC]" />
                      {language === "en" ? "The 45° Conduit (Cutting Administrative Weight)" : "Le Conduit à 45° (Traverser la Charge Administrative)"}
                    </h4>
                    <p className="mt-1 text-xs text-zinc-600 leading-relaxed pl-4.5">
                      {language === "en"
                        ? "The clean, angled conduit slicing through the weight of manual paperwork. It transforms unstructured paper into structured, margin-protecting flow."
                        : "Le conduit précis et biseauté qui traverse l'épaisseur de la paperasse manuelle. Il transforme des papiers désordonnés en un flux structuré protecteur de vos marges."}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-zinc-200/70 shadow-2xs">
                    <h4 className="text-sm font-bold text-[#0F172A] flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00BFCC] animate-pulse" />
                      {language === "en" ? "The Central Cyan Node (Human Judgment)" : "Le Nœud Central Cyan (Le Jugement Humain)"}
                    </h4>
                    <p className="mt-1 text-xs text-zinc-600 leading-relaxed pl-4.5">
                      {language === "en"
                        ? "The human operator at the exact focal point. The aperture opens flow only when the human grants permission."
                        : "L'opérateur humain placé au point focal exact. L'ouverture ne libère le passage que lorsque l'humain accorde son autorisation explicite."}
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
                {language === "en" ? "Our Long-Term Horizon" : "Notre Cap pour 2030"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                {language === "en" ? "Where We Are Heading by 2030." : "Notre Trajectoire à l'Horizon 2030."}
              </h2>
              <p className="mt-3 text-base text-zinc-600">
                {language === "en"
                  ? "We measure our company's success by the tangible freedom and profitability we deliver to the Australian food and beverage community."
                  : "Nous mesurons notre succès à la liberté et à la rentabilité concrètes que nous apportons aux artisans et exploitants de la restauration en Australie."}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Goal 1 */}
              <div className="p-8 rounded-3xl bg-zinc-50/70 border border-zinc-200/90 shadow-2xs space-y-4">
                <div className="text-3xl sm:text-4xl font-black text-[#0F172A] font-sans flex items-baseline gap-1">
                  100,000<span className="text-lg text-[#0096A3] font-bold">{language === "en" ? "hrs" : "heures"}</span>
                </div>
                <h3 className="text-base font-bold text-[#0F172A]">
                  {language === "en" ? "Unpaid Admin Burden Eliminated" : "Heures d'Administratif Non Payé Éliminées"}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  {language === "en"
                    ? "Our target is to systematically return over 100,000 hours of administrative drudgery back to Australian chefs, bakers, and operators—allowing them to focus on creativity, mentorship, and work-life balance."
                    : "Notre objectif est de restituer plus de 100 000 heures de corvées administratives aux chefs, boulangers et gérants australiens—leur permettant de se recentrer sur la création, la transmission et l'équilibre de vie."}
                </p>
              </div>

              {/* Goal 2 */}
              <div className="p-8 rounded-3xl bg-zinc-50/70 border border-zinc-200/90 shadow-2xs space-y-4">
                <div className="text-3xl sm:text-4xl font-black text-[#0F172A] font-sans flex items-baseline gap-1">
                  500<span className="text-lg text-[#0096A3] font-bold">{language === "en" ? "Venues" : "Lieux"}</span>
                </div>
                <h3 className="text-base font-bold text-[#0F172A]">
                  {language === "en" ? "Independent Venues Protected" : "Établissements Indépendants Protégés"}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  {language === "en"
                    ? "Independent cafes, neighbourhood bistros, and bakeries are the cultural lifeblood of our suburbs. We aim to equip 500 independent venues with the same operational superpowers previously reserved for multi-million-dollar chains."
                    : "Les cafés indépendants, bistrots de quartier et boulangeries sont le cœur vivant de nos villes. Nous voulons doter 500 établissements indépendants des mêmes superpouvoirs opérationnels jusqu'ici réservés aux grands groupes."}
                </p>
              </div>

              {/* Goal 3 */}
              <div className="p-8 rounded-3xl bg-zinc-50/70 border border-zinc-200/90 shadow-2xs space-y-4">
                <div className="text-3xl sm:text-4xl font-black text-[#0F172A] font-sans flex items-baseline gap-1">
                  100%<span className="text-lg text-[#0096A3] font-bold">HITL</span>
                </div>
                <h3 className="text-base font-bold text-[#0F172A]">
                  {language === "en" ? "Human-in-the-Loop Standard" : "Standard de Contrôle Humain Inviolable"}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  {language === "en"
                    ? "Setting the gold standard for applied automation in Australia: proving that businesses can achieve massive operational efficiency while upholding strict human judgment, ethical AI guardrails, and data sovereignty."
                    : "Établir la référence de l'automatisation appliquée en Australie : prouver qu'une entreprise peut atteindre une efficacité redoutable tout en maintenant le discernement humain, l'éthique et la souveraineté des données."}
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
                    {language === "en" ? "Direct Technical Leadership by Design" : "Direction Technique Directe par Choix"}
                  </h3>
                  <p className="text-xs text-zinc-500">
                    {language === "en"
                      ? "Personal note from the Founder • Sovereign Infrastructure in Perth & WA"
                      : "Note personnelle du Fondateur • Infrastructure Souveraine à Perth & dans le WA"}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                {language === "en" ? (
                  <>
                    <p>
                      “In hospitality, operational downtime is not an option. You do not need bloated agencies passing support requests through junior account coordinators or overseas ticketing queues. At <strong>hAI Mate!</strong>, our infrastructure is engineered directly by technical leadership. You get battle-tested, sovereign automation pipelines with direct founder-level SLA access via private Slack Connect and WhatsApp whenever adjustments are required.
                    </p>
                    <p>
                      When you work with hAI Mate!, you work directly with me. I personally conduct your
                      14-day diagnostic audit, inspect your till exports, build your private docket ingestion pipelines,
                      and tune your Dynamic Margin Guard. You have my direct mobile phone number and
                      a private Slack channel.
                    </p>
                    <p>
                      My goal isn’t to build a bloated agency empire with junior overhead. My goal is to
                      deliver institutional, sovereign margin infrastructure for operators who take pride in what
                      they put on the plate.”
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      « En restauration, les interruptions opérationnelles sont inacceptables. Vous n'avez pas besoin d'agences pléthoriques transmettant vos demandes à des coordinateurs débutants ou à des services clients délocalisés. Chez <strong>hAI Mate!</strong>, notre infrastructure est directement conçue par notre direction technique. Vous bénéficiez de pipelines d'automatisation souverains et éprouvés, avec un accès SLA direct au fondateur via un canal privé Slack Connect et WhatsApp pour tout ajustement.
                    </p>
                    <p>
                      Lorsque vous travaillez avec hAI Mate!, vous traitez directement avec moi. C'est moi qui réalise
                      personnellement votre audit de 14 jours, inspecte vos données de caisse, conçois vos pipelines privés d'ingestion documentaire
                      et ajuste votre Dynamic Margin Guard. Vous disposez de mon numéro de mobile direct et
                      d'un canal direct.
                    </p>
                    <p>
                      Mon objectif n'est pas de bâtir un empire d'agence avec des centaines de stagiaires. Mon but est
                      d'être le partenaire technologique de confiance, rigoureux et sur-mesure, des professionnels fiers
                      de ce qu'ils dressent dans l'assiette. »
                    </p>
                  </>
                )}
              </div>

              <div className="pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="text-xs text-zinc-500">
                  <span className="font-semibold text-zinc-800">
                    {language === "en" ? "Direct Founder Access:" : "Ligne Directe du Fondateur :"}
                  </span>{" "}
                  <a
                    href="mailto:founder@haimate.com.au"
                    className="text-[#0096A3] font-medium hover:underline"
                  >
                    founder@haimate.com.au
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                  <span>{language === "en" ? "Perth, WA • Serving Venues Nationally" : "Perth, WA • Au service des établissements à l'échelle nationale"}</span>
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
              {language === "en"
                ? "Ready to Partner with Someone Who Values Your Craft?"
                : "Prêt à Collaborer avec Quelqu'un qui Respecte Votre Métier ?"}
            </h2>
            <p className="text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed">
              {language === "en"
                ? "Schedule your 14-day diagnostic audit. We’ll map your administrative bottlenecks, calculate your exact margin impact, and show you a working prototype on your phone."
                : "Programmez votre audit diagnostique de 14 jours. Nous identifierons vos goulets d'étranglement administratifs, calculerons l'impact exact sur vos marges et vous présenterons un prototype fonctionnel sur votre téléphone."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setAuditModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full bg-[#0F172A] text-white hover:bg-zinc-800 transition-all shadow-md group cursor-pointer"
              >
                <span>{language === "en" ? "Book a 14-Day Diagnostic Review" : "Réserver l'Audit Diagnostique (14 Jours)"}</span>
                <ArrowRight className="w-4 h-4 ml-2 text-[#00BFCC] transition-transform group-hover:translate-x-1" />
              </button>
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full bg-zinc-50 border border-zinc-200 text-zinc-800 hover:bg-zinc-100 transition-colors shadow-2xs"
              >
                <span>{language === "en" ? "Back to Main Landing Page" : "Retour à l'Accueil"}</span>
              </Link>
            </div>
            <p className="text-xs text-zinc-400 font-normal pt-2">
              {language === "en"
                ? "50% matched funding available for eligible WA businesses via the Local Capability Fund (LCF)."
                : "Prise en charge à 50% possible pour les entreprises éligibles du WA via le Local Capability Fund (LCF)."}
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
