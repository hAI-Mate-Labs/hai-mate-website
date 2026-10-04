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
  Languages,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";

export default function FounderClient() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);
  const { language: lang, setLanguage: setLang } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-[#00BFCC] selection:text-white font-sans antialiased">
      {/* Navigation */}
      <Navbar onOpenAuditModal={() => setAuditModalOpen(true)} />

      <main>
        {/* Hero Section - Poetic, Visionary, Jobs/Altman Cadence */}
        <section className="relative pt-16 pb-20 md:pt-28 md:pb-32 bg-white overflow-hidden border-b border-zinc-100">
          {/* Subtle Aperture Watermark */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-[0.02] pointer-events-none">
            <ApertureLogo size={800} color="#0F172A" />
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            {/* Top Bar with Language Switcher */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-50 border border-zinc-200/80 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#00BFCC] animate-pulse" />
                <span className="text-xs font-semibold text-zinc-800 tracking-wide uppercase">
                  {lang === "en" ? "The Founder • Mallory Antomarchi" : "Le Fondateur • Mallory Antomarchi"}
                </span>
              </div>

              {/* Bilingual Toggle Button */}
              <div className="inline-flex items-center p-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-semibold shadow-2xs">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    lang === "en"
                      ? "bg-white text-[#0F172A] shadow-xs"
                      : "text-zinc-500 hover:text-[#0F172A]"
                  }`}
                >
                  🇦🇺 English
                </button>
                <button
                  type="button"
                  onClick={() => setLang("fr")}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    lang === "fr"
                      ? "bg-white text-[#0F172A] shadow-xs"
                      : "text-zinc-500 hover:text-[#0F172A]"
                  }`}
                >
                  🇫🇷 Français
                </button>
              </div>
            </div>

            {/* Visionary Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.12] max-w-3xl mx-auto">
              {lang === "en" ? (
                <>
                  We were not put on this earth to spend our lives{" "}
                  <span className="relative inline-block text-[#0F172A]">
                    filing paperwork.
                    <span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#00BFCC]/25 -z-10 rounded-sm" />
                  </span>
                </>
              ) : (
                <>
                  Nous ne sommes pas nés pour passer nos vies à{" "}
                  <span className="relative inline-block text-[#0F172A]">
                    remplir de la paperasse.
                    <span className="absolute bottom-1.5 left-0 w-full h-3 bg-[#00BFCC]/25 -z-10 rounded-sm" />
                  </span>
                </>
              )}
            </h1>

            {/* Poetic Subheadline */}
            <p className="mt-7 text-lg sm:text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-normal">
              {lang === "en" ? (
                "A 10-year journey from the Mediterranean coast of France to Western Australia. Driven by a simple, radical conviction: that artificial intelligence exists to liberate human time for the things that truly matter."
              ) : (
                "Un voyage de 10 ans depuis la Côte d'Azur (Villefranche-sur-Mer) jusqu'à l'Australie-Occidentale. Porté par une conviction radicale : l'intelligence artificielle doit libérer le temps humain pour ce qui compte vraiment."
              )}
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => setAuditModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold rounded-full bg-zinc-900 text-white hover:bg-zinc-800 active:scale-[0.99] transition-all shadow-sm group cursor-pointer"
              >
                <span>{lang === "en" ? "Book a 14-Day Diagnostic Review" : "Réserver un Audit Diagnostique"}</span>
                <ArrowRight className="w-4 h-4 ml-2 text-[#00BFCC] transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="https://wa.me/61402472262?text=Hi%20Mallory%2C%20I%20run%20a%20venue%20and%20want%20to%20streamline%20our%20dockets%20and%20back-office%20admin."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-medium rounded-full bg-emerald-50 text-emerald-950 border border-emerald-200 hover:bg-emerald-100 transition-all shadow-2xs"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>{lang === "en" ? "Chat on WhatsApp (+61 402 472 262)" : "Discuter sur WhatsApp"}</span>
              </a>
            </div>

            {/* Identity Strip */}
            <div className="mt-14 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-zinc-500 font-mono">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#0096A3]" /> {lang === "en" ? "Born in France" : "Né en France"}
              </span>
              <span className="hidden sm:inline text-zinc-300">•</span>
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#0096A3]" /> {lang === "en" ? "Operating on-the-ground in Perth & WA" : "Opérant sur le terrain à Perth & dans le WA"}
              </span>
              <span className="hidden sm:inline text-zinc-300">•</span>
              <span className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#0096A3]" /> {lang === "en" ? "Applied AI & Operations" : "IA Appliquée & Opérations"}
              </span>
            </div>
          </div>
        </section>

        {/* The Personal Essay / Narrative (Jobs / Altman Style) */}
        <section className="py-20 md:py-28 bg-white border-b border-zinc-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Opening Manifest */}
            <div className="space-y-6 text-base sm:text-lg text-zinc-700 leading-relaxed font-normal">
              <p className="text-xl sm:text-2xl font-serif italic text-[#0F172A] leading-snug">
                {lang === "en" ? (
                  "“Ever since I can remember, I have been a dreamer. I have always looked at the world not merely as it is, but as it could be when we remove friction and unlock human potential.”"
                ) : (
                  "« Depuis toujours, je suis un rêveur. J'ai toujours regardé le monde non pas tel qu'il est, mais tel qu'il pourrait être lorsque l'on supprime la friction et libère le potentiel humain. »"
                )}
              </p>
              
              {lang === "en" ? (
                <>
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
                </>
              ) : (
                <>
                  <p>
                    J'ai grandi en France, où la cuisine, le vin, l'échange et l'artisanat sont considérés
                    comme des actes essentiels. Il y a cette certitude partagée que se retrouver autour
                    d'une table, partager du pain artisanal ou savourer un dîner avec ceux qu'on aime est ce
                    qui donne sa texture et son sens à la vie.
                  </p>
                  <p>
                    Pendant dix ans, en travaillant dans les opérations, l'administration et la coordination
                    de données à Villefranche-sur-Mer sur la Côte d'Azur, j'ai constaté l'envers du décor :
                    le poids invisible et étouffant de la friction administrative.
                  </p>
                  <p>
                    J'ai vu des personnes passionnées et dévouées—celles qui font vivre nos villes et nos
                    quartiers—se noyer sous les formulaires, les tableurs disjoints et les vérifications
                    manuelles répétitives. Elles travaillaient 70 heures par semaine, non pas par amour des
                    factures, mais parce que les outils logiciels traditionnels les abandonnaient.
                  </p>
                </>
              )}
            </div>

            {/* Highlight Callout Box: The Turning Point */}
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-50 border border-zinc-200/90 text-left shadow-2xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-[#0096A3] shadow-2xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A]">
                  {lang === "en" ? "The Catalyst: A Bicycle for the Modern Mind" : "Le Déclic : Un Vélo pour l'Esprit Moderne"}
                </h3>
              </div>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                {lang === "en" ? (
                  <>
                    Steve Jobs famously referred to the computer as a <em>“bicycle for our minds”</em>—a tool
                    that dramatically amplified human locomotion. When modern artificial intelligence and
                    autonomous agents emerged, I recognized something even deeper:
                  </>
                ) : (
                  <>
                    Steve Jobs qualifiait l'ordinateur de <em>« vélo pour l'esprit »</em>—un outil qui
                    démultipliait de façon spectaculaire la locomotion humaine. Lorsque l'intelligence
                    artificielle moderne et les agents autonomes ont émergé, j'ai réalisé quelque chose
                    d'encore plus fondamental :
                  </>
                )}
              </p>
              <p className="text-sm sm:text-base font-medium text-zinc-900 leading-relaxed">
                {lang === "en" ? (
                  "AI is an engine for human time. It is humanity’s greatest opportunity to automate the robotic, mundane parts of our lives so that we can finally return to being fully human."
                ) : (
                  "L'IA est un moteur pour le temps humain. C'est la plus grande opportunité de notre époque d'automatiser les corvées robotiques de notre quotidien pour nous permettre de redevenir pleinement humains."
                )}
              </p>
            </div>

            {/* Chapter 2: The Australian Chapter */}
            <div className="space-y-6 text-base sm:text-lg text-zinc-700 leading-relaxed font-normal">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight font-sans">
                {lang === "en" ? "The Journey to Australia & The Birth of hAI Mate!" : "L'Arrivée en Australie & La Naissance de hAI Mate!"}
              </h2>

              {lang === "en" ? (
                <>
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
                    That is why I created <strong className="font-semibold text-[#0F172A]">hAI Mate!</strong> as an applied
                    AI automation practice operating on-the-ground in Perth & Western Australia, serving venues nationally. I didn’t want to build an ivory tower agency with
                    account managers and sales reps. I wanted to sit directly across the table from venue
                    owners across WA dining hubs—from Cottesloe and Fremantle to Perth CBD and the South West—understand their till systems, look at their supplier dockets, and build systems
                    that quietly reclaim 4 to 8 hours of their life every single week.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Je me suis installé en Australie avec une mission précise : prendre la recherche de pointe
                    en intelligence artificielle et la traduire en un soulagement tangible au quotidien pour
                    les artisans et restaurateurs indépendants.
                  </p>
                  <p>
                    Trop de discours actuels sur l'IA sont confisqués par le marketing de la Silicon Valley—des
                    chatbots qui rédigent du texte générique ou des logiciels d'entreprise hors de prix qui
                    complexifient encore la vie des gérants. Presque personne ne concevait de conduits
                    simples, fiables et appliqués pour la boulangerie de quartier, le bistrot de bord de mer
                    ou le pub artisanal.
                  </p>
                  <p>
                    C'est ainsi qu'est né <strong className="font-semibold text-[#0F172A]">hAI Mate!</strong>, sous forme
                    d'une pratique d'automatisation IA appliquée opérant sur le terrain à Perth & en Australie-Occidentale, au service des établissements à l'échelle nationale. Je ne voulais pas créer une agence
                    tentaculaire avec des intermédiaires. Je voulais m'asseoir directement en face des
                    propriétaires dans les pôles gastronomiques du WA—de Cottesloe et Fremantle au Perth CBD et au South West—comprendre leurs caisses enregistreuses, examiner leurs dockets de livraison
                    et concevoir des automatisations silencieuses qui leur redonnent 4 à 8 heures par semaine.
                  </p>
                </>
              )}
            </div>

            {/* Chapter 3: What I Deeply Believe (Jobs/Altman Credo) */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight font-sans">
                {lang === "en" ? "The Four Tenets I Live By" : "Les Quatre Principes Fondamentaux"}
              </h2>

              <div className="grid grid-cols-1 gap-5">
                {/* Tenet 1 */}
                <div className="p-6 rounded-2xl bg-zinc-50/70 border border-zinc-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#00BFCC]" />
                    <h3 className="text-base font-bold text-[#0F172A] font-sans">
                      {lang === "en" ? "1. Time Is Non-Renewable" : "1. Le Temps Ne Se Renouvelle Pas"}
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed pl-4.5">
                    {lang === "en" ? (
                      "You can always earn another dollar, test another menu, or pour another coffee. But you can never buy back a missed Sunday dinner with your family. Any tool that gives hours back to a human being is a moral imperative."
                    ) : (
                      "On peut toujours gagner un dollar de plus, tester une nouvelle recette ou servir un autre café. Mais on ne peut jamais racheter un dîner manqué en famille. Tout outil qui redonne du temps à un être humain est un impératif moral."
                    )}
                  </p>
                </div>

                {/* Tenet 2 */}
                <div className="p-6 rounded-2xl bg-zinc-50/70 border border-zinc-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#00BFCC]" />
                    <h3 className="text-base font-bold text-[#0F172A] font-sans">
                      {lang === "en" ? "2. Humans at the Center, Always" : "2. L'Humain au Centre, Toujours"}
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed pl-4.5">
                    {lang === "en" ? (
                      "We must never use AI to diminish human craft or displace the soul of hospitality. Machines should do the repetitive, invisible heavy lifting in the background—under the strict, deliberate control and judgment of human operators."
                    ) : (
                      "Nous ne devons jamais utiliser l'IA pour dénaturer le savoir-faire artisanal ou remplacer l'âme de l'hospitalité. Les machines doivent exécuter le travail lourd et invisible en arrière-plan—sous le contrôle et le jugement délibéré des opérateurs humains."
                    )}
                  </p>
                </div>

                {/* Tenet 3 */}
                <div className="p-6 rounded-2xl bg-zinc-50/70 border border-zinc-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#00BFCC]" />
                    <h3 className="text-base font-bold text-[#0F172A] font-sans">
                      {lang === "en" ? "3. Simplicity Is the Ultimate Sophistication" : "3. La Simplicité est la Sophistication Suprême"}
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed pl-4.5">
                    {lang === "en" ? (
                      "If an automation requires a 50-page manual or forces a busy chef to learn a new software dashboard, it has failed. True engineering elegance is invisible: a photo snapped on your phone, a 1-tap green light, and complete peace of mind."
                    ) : (
                      "Si une automatisation exige un manuel de 50 pages ou force un chef pressé à apprendre un nouveau tableau de bord complexe, elle a échoué. La véritable élégance d'ingénierie est invisible : une photo prise sur smartphone, un feu vert en un clic, et une totale sérénité."
                    )}
                  </p>
                </div>

                {/* Tenet 4 */}
                <div className="p-6 rounded-2xl bg-zinc-50/70 border border-zinc-200/80 shadow-2xs space-y-2">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#00BFCC]" />
                    <h3 className="text-base font-bold text-[#0F172A] font-sans">
                      {lang === "en" ? "4. High Craft & Personal Responsibility" : "4. Haute Exigence Artisanale & Responsabilité Personnelle"}
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed pl-4.5">
                    {lang === "en" ? (
                      "I treat every single pipeline I build with the exact same rigor and pride that a master baker brings to their sourdough. No shortcuts. No unvetted algorithms. Total personal accountability."
                    ) : (
                      "Je conçois chaque pipeline d'automatisation avec la même rigueur et la même fierté qu'un maître boulanger consacre à son levain. Pas de raccourcis. Pas d'algorithmes opaques. Une totale responsabilité personnelle."
                    )}
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
                {lang === "en" ? "Proven Foundation" : "Fondations & Expérience"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
                {lang === "en" ? "Operational Rigor Meets Modern AI Engineering." : "La Rigueur Opérationnelle au Service de l'IA Appliquée."}
              </h2>
              <p className="mt-3 text-base text-zinc-600">
                {lang === "en" ? (
                  "10+ years of operational administration, data validation, and emergency command logistics, paired with formal computer science and generative AI specialisations."
                ) : (
                  "10+ années d'administration opérationnelle, de validation de données et de logistique d'urgence, alliées à des études en informatique et des spécialisations en IA générative."
                )}
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
                    <h3 className="text-lg font-bold text-[#0F172A]">
                      {lang === "en" ? "10+ Years in Operations" : "10+ Ans en Opérations"}
                    </h3>
                    <p className="text-xs text-zinc-500">
                      {lang === "en" ? "Government & Enterprise Logistics" : "Administration Publique & Logistique"}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-600">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>{lang === "en" ? "Operations & Data Coordinator (10 years):" : "Coordonnateur Opérations & Données (10 ans) :"}</strong>{" "}
                      {lang === "en"
                        ? "Managed operational administration, data cleaning, asset registers, and municipal infrastructure records for the City of Villefranche-sur-Mer, France."
                        : "Gestion des opérations administratives, assainissement de bases de données, suivi d'équipements et registres d'infrastructures pour la Ville de Villefranche-sur-Mer (France)."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>{lang === "en" ? "Crisis Command Logistics:" : "Logistique du Poste de Commandement Communal :"}</strong>{" "}
                      {lang === "en"
                        ? "Coordinated high-pressure resource tracking and logistics for Municipal Crisis Command Centre emergency exercises (2021–2023)."
                        : "Coordination logistique et suivi des ressources en situation d'urgence pour le Poste de Commandement de Crise communal (2021–2023)."}
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>{lang === "en" ? "Operations Team Lead:" : "Responsable d'Équipe Opérationnelle Distante :"}</strong>{" "}
                      {lang === "en"
                        ? "Led remote analyst teams, designing workflows and enforcing data validation standards for international client deliverables."
                        : "Supervision d'équipes d'analystes à distance, structuration de flux de travail et contrôle rigoureux de la qualité des données."}
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
                    <h3 className="text-lg font-bold text-[#0F172A]">
                      {lang === "en" ? "Technical & AI Credentials" : "Titres & Certifications en IA"}
                    </h3>
                    <p className="text-xs text-zinc-500">
                      {lang === "en" ? "Computer Science & Specialisations" : "Informatique & Ingénierie d'Agents"}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/60">
                    <p className="text-xs font-bold text-[#0F172A]">
                      Bachelor of Science in Computer Science
                    </p>
                    <p className="text-[11px] text-zinc-500">University of the People</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/60">
                    <p className="text-xs font-bold text-[#0F172A]">
                      AI Agent Developer Specialisation
                    </p>
                    <p className="text-[11px] text-zinc-500">Vanderbilt University</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/60">
                    <p className="text-xs font-bold text-[#0F172A]">
                      IBM Generative AI Engineering &amp; Data Science Certificates
                    </p>
                    <p className="text-[11px] text-zinc-500">IBM Professional Certificates</p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200/60">
                    <p className="text-xs font-bold text-[#0F172A]">
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
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A] block">
                  {lang === "en" ? "Core Technical Capability" : "Capacité Technique Clé"}
                </span>
                <p className="text-xs text-zinc-500 mt-0.5">
                  Applied Autonomous Workflows • Private Ingestion Pipelines • Wholesale Margin Defense • POS &amp; Ledger Conduits
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
                  <span>{lang === "en" ? "DIRECT FOUNDER DESK" : "CONTACT DIRECT DU FONDATEUR"}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  {lang === "en" ? "Let’s Talk About What’s Stealing Your Time." : "Parlons de Ce Qui Vous Vole Votre Temps."}
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                  {lang === "en" ? (
                    "Whether you operate an artisan bakery in Mount Lawley, a seafood bistro in Cottesloe or Fremantle, a venue in Perth CBD or the South West, or a group nationally, I would love to hear your story. No sales presentations, no obligation—just an honest conversation between operators."
                  ) : (
                    "Que vous dirigiez une boulangerie artisanale à Mount Lawley, un bistrot côtier à Cottesloe ou Fremantle, un établissement dans le Perth CBD ou le South West, ou un groupe à l'échelle nationale, je serais ravi d'échanger avec vous. Sans présentation commerciale artificielle—une simple discussion directe entre professionnels du terrain."
                  )}
                </p>
              </div>

              {/* Direct channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 relative">
                
                {/* WhatsApp Channel */}
                <a
                  href="https://wa.me/61402472262?text=Hi%20Mallory%2C%20I%20run%20a%20venue%20and%20want%20to%20streamline%20our%20dockets%20and%20back-office%20admin."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors flex items-center gap-3.5 group"
                >
                  <div className="p-2.5 rounded-xl bg-emerald-500 text-zinc-950 group-hover:scale-105 transition-transform">
                    <span className="font-bold text-xs">WA</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-emerald-400 block font-mono">
                      {lang === "en" ? "WhatsApp Direct Desk" : "WhatsApp Direct"}
                    </span>
                    <span className="text-sm font-semibold text-white">+61 402 472 262</span>
                  </div>
                </a>

                {/* Direct Email */}
                <a
                  href="mailto:founder@haimate.com.au"
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-3.5 group"
                >
                  <div className="p-2.5 rounded-xl bg-white/10 text-[#00BFCC] group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-zinc-400 block font-mono">
                      {lang === "en" ? "Email Me Directly" : "Me Contacter par Email"}
                    </span>
                    <span className="text-sm font-semibold text-white">founder@haimate.com.au</span>
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
                  <span>{lang === "en" ? "Book 14-Day Readiness Audit" : "Réserver un Audit Diagnostique (14 Jours)"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <div className="font-mono text-[11px] text-zinc-400">
                  Mallory Antomarchi • Applied AI Automation Practice • Perth & WA • French / English Bilingual
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
