"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  X,
  Mail,
  Phone,
  Calendar,
  Check,
  ArrowRight,
  Bot,
  Send,
  RotateCcw,
  ShieldCheck,
  Landmark,
  Scan,
  Layers,
  Sparkles,
  Key,
  Eye,
  EyeOff,
  ExternalLink,
} from "lucide-react";
import ApertureLogo from "./ApertureLogo";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";
import {
  queryMallo,
  getRemainingDailyQueries,
  MAX_INPUT_CHARS,
  MAX_OUTPUT_TOKENS,
} from "@/lib/malloGemma";

interface FloatingContactProps {
  onOpenAuditModal: () => void;
}

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
  tokensUsed?: number;
  modelUsed?: string;
  action?: {
    label: string;
    onClick: () => void;
    icon?: any;
  };
}

const MAX_TOKENS = MAX_OUTPUT_TOKENS;

export default function FloatingContact({ onOpenAuditModal }: FloatingContactProps) {
  const { language } = useLanguage();
  const t = translations[language];

  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"ai" | "founder">("ai");
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Mallo (AI Assistant) State
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "assistant",
      text: t.mallo.welcome,
      tokensUsed: 44,
    },
  ]);

  // Update welcome message if user switches language and hasn't started chatting
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === "welcome") {
        return [
          {
            id: "welcome",
            sender: "assistant",
            text: t.mallo.welcome,
            tokensUsed: 44,
          },
        ];
      }
      return prev;
    });
  }, [language, t.mallo.welcome]);

  const [inputValue, setInputValue] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickQuestions = t.mallo.quickPrompts;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && activeTab === "ai") {
      scrollToBottom();
    }
  }, [messages, streamingText, isOpen, activeTab]);

  useEffect(() => {
    if (isOpen && activeTab === "ai") {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, activeTab]);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText("founder@haimate.com.au");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const [remainingQueries, setRemainingQueries] = useState<number>(3);

  useEffect(() => {
    setRemainingQueries(getRemainingDailyQueries());
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const rawQuery = (textToSend || inputValue).trim();
    if (!rawQuery || isStreaming) return;

    // Strict input length constraint (~45 tokens max)
    const query = rawQuery.slice(0, MAX_INPUT_CHARS);

    const userMsgId = `user-${Date.now()}`;
    const newMessages: Message[] = [
      ...messages,
      { id: userMsgId, sender: "user", text: query },
    ];
    setMessages(newMessages);
    setInputValue("");
    setIsStreaming(true);

    try {
      const history = messages
        .filter((m) => m.id !== "welcome")
        .map((m) => ({ sender: m.sender, text: m.text }));

      const result = await queryMallo(query, language, history);

      let actionObj: Message["action"] | undefined = undefined;
      if (result.actionType === "audit") {
        actionObj = {
          label: language === "en" ? "Book 14-Day Audit" : "Réserver l'Audit (14 Jours)",
          onClick: onOpenAuditModal,
          icon: Calendar,
        };
      } else if (result.actionType === "grants") {
        actionObj = {
          label: language === "en" ? "Explore WA Grant Calculator" : "Calculateur de Subvention WA",
          onClick: () => {
            const el = document.getElementById("grants");
            el?.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
          },
          icon: Landmark,
        };
      } else if (result.actionType === "covenant") {
        actionObj = {
          label: language === "en" ? "Read Operator Covenant" : "Lire l'Engagement Valeur",
          onClick: () => {
            const el = document.getElementById("how-it-works");
            el?.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
          },
          icon: ShieldCheck,
        };
      } else if (result.actionType === "integrations") {
        actionObj = {
          label: language === "en" ? "View All Integrations" : "Voir Toutes les Intégrations",
          onClick: () => {
            const el = document.getElementById("integrations");
            el?.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
          },
          icon: Layers,
        };
      } else if (result.actionType === "simulator") {
        actionObj = {
          label: language === "en" ? "Try Live Docket Simulator" : "Tester le Simulateur de Bons",
          onClick: () => {
            const el = document.getElementById("simulator");
            el?.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
          },
          icon: Scan,
        };
      } else if (result.actionType === "whatsapp") {
        actionObj = {
          label: language === "en" ? "WhatsApp (+61 402 472 262)" : "WhatsApp (+61 402 472 262)",
          onClick: () => {
            window.open(
              "https://wa.me/61402472262?text=Hi%20Mallory%2C%20I%20run%20a%20venue%20and%20want%20to%20streamline%20our%20dockets%20and%20back-office%20admin.",
              "_blank",
              "noopener,noreferrer"
            );
          },
          icon: MessageSquare,
        };
      }

      // Stream words smoothly into UI
      const words = result.text.split(" ");
      let currentIdx = 0;
      setStreamingText("");

      const interval = setInterval(() => {
        currentIdx += 1;
        const partial = words.slice(0, currentIdx).join(" ");
        setStreamingText(partial);

        if (currentIdx >= words.length) {
          clearInterval(interval);
          setIsStreaming(false);
          setStreamingText("");
          setRemainingQueries(result.remainingDailyQueries);
          setMessages([
            ...newMessages,
            {
              id: `assistant-${Date.now()}`,
              sender: "assistant",
              text: result.text,
              tokensUsed: result.tokensUsed,
              modelUsed: result.modelUsed,
              action: actionObj,
            },
          ]);
        }
      }, 20);
    } catch {
      setIsStreaming(false);
      setRemainingQueries(getRemainingDailyQueries());
      setMessages([
        ...newMessages,
        {
          id: `assistant-${Date.now()}`,
          sender: "assistant",
          text:
            language === "en"
              ? "I am Mallo, your hospitality margin assistant. To review your dockets or book a 14-day audit, message Mallory directly on WhatsApp."
              : "Je suis Mallo, votre assistant en marges restauration. Pour vos bons ou réserver un audit de 14 jours, écrivez directement à Mallory sur WhatsApp.",
          tokensUsed: 30,
          modelUsed: "Offline Engine",
        },
      ]);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "welcome",
        sender: "assistant",
        text: t.mallo.welcome,
        tokensUsed: 44,
      },
    ]);
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 select-none print:hidden">
      
      {/* Expanded Floating Concierge Widget */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2.5rem)] max-w-sm sm:max-w-md rounded-3xl bg-white dark:bg-[#151D2F] border border-zinc-200 dark:border-[#232F48] shadow-2xl transition-all duration-200 animate-in fade-in slide-in-from-bottom-3 overflow-hidden flex flex-col h-[540px] max-h-[82dvh]">
          
          {/* Header Bar with Mode Switcher */}
          <div className="px-4 py-3 bg-[#0F172A] dark:bg-[#0B0F19] text-white flex items-center justify-between shrink-0 border-b border-white/10 dark:border-[#232F48]">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center p-1 shadow-xs">
                <ApertureLogo size={18} color="#00BFCC" glow />
              </div>
              <div className="flex rounded-full bg-white/10 p-0.5 border border-white/10 text-[11px] font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveTab("ai")}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === "ai"
                      ? "bg-white text-[#0F172A] shadow-xs font-bold"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  <Bot className="w-3.5 h-3.5 text-[#00BFCC]" />
                  <span>{language === "en" ? "Mallo (AI)" : "Mallo (IA)"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("founder")}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                    activeTab === "founder"
                      ? "bg-white text-[#0F172A] shadow-xs font-bold"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{language === "en" ? "Mallory (Direct)" : "Mallory (Direct)"}</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {activeTab === "ai" && (
                <button
                  type="button"
                  onClick={handleResetChat}
                  className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                  title={t.mallo.reset}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close concierge"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* TAB 1: MALLO (AI ASSISTANT) */}
          {activeTab === "ai" && (
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Mallo Architecture Banner with Gemma 4 & Daily Quota */}
              <div className="px-3.5 py-1.5 bg-zinc-100/90 dark:bg-[#0B0F19] border-b border-zinc-200 dark:border-[#232F48] flex items-center justify-between text-[10px] text-zinc-600 dark:text-[#94A3B8] font-mono shrink-0">
                <div className="flex items-center gap-2">
                  <span className="flex items-center gap-1 text-[#0096A3] dark:text-[#00F2FE] font-bold">
                    <Sparkles className="w-3 h-3" /> {t.mallo.title}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold text-[10px] shadow-2xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{t.mallo.gemmaEngine}</span>
                  </span>
                </div>
                <div>
                  {remainingQueries > 0 ? (
                    <span className="px-2 py-0.5 rounded-full bg-zinc-200/80 dark:bg-[#1E293B] text-[10px] font-mono text-zinc-600 dark:text-[#94A3B8] font-semibold">
                      {t.mallo.dailyQuota.replace("{remaining}", String(remainingQueries))}
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-[10px] font-mono text-amber-600 dark:text-amber-400 font-bold">
                      {t.mallo.dailyLimitReached}
                    </span>
                  )}
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-3.5 overflow-y-auto flex-1 space-y-3 bg-zinc-50/50 dark:bg-[#0B0F19] text-xs">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex flex-col ${
                      m.sender === "user" ? "items-end" : "items-start"
                    }`}
                  >
                    <div
                      className={`max-w-[88%] p-3 rounded-2xl leading-relaxed shadow-2xs ${
                        m.sender === "user"
                          ? "bg-[#0F172A] dark:bg-[#00F2FE] text-white dark:text-[#0B0F19] rounded-br-xs font-medium"
                          : "bg-white dark:bg-[#1E293B] text-zinc-800 dark:text-[#F8FAFC] border border-zinc-200/90 dark:border-[#232F48] rounded-bl-xs"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{m.text}</p>

                      {/* Action Button */}
                      {m.action && (
                        <div className="mt-2 pt-2 border-t border-zinc-100 dark:border-[#232F48]">
                          <button
                            type="button"
                            onClick={m.action.onClick}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F172A] dark:bg-[#00F2FE] text-white dark:text-[#0B0F19] font-bold text-[10px] hover:bg-[#1E293B] transition-colors shadow-2xs cursor-pointer"
                          >
                            {m.action.icon && <m.action.icon className="w-3 h-3 text-[#00BFCC] dark:text-[#0B0F19]" />}
                            <span>{m.action.label}</span>
                            <ArrowRight className="w-3 h-3 text-zinc-400 dark:text-[#0B0F19]" />
                          </button>
                        </div>
                      )}
                    </div>

                    {m.sender === "assistant" && (
                      <span className="text-[9px] text-zinc-400 dark:text-[#64748B] font-mono mt-1 px-1 flex items-center gap-1.5">
                        <span className="font-semibold text-zinc-500 dark:text-zinc-400">
                          {m.modelUsed || "Mallo AI"}
                        </span>
                        <span>•</span>
                        <span>
                          {language === "en"
                            ? `${m.tokensUsed || 35} / ${MAX_TOKENS} tokens`
                            : `${m.tokensUsed || 35} / ${MAX_TOKENS} jetons`}
                        </span>
                      </span>
                    )}
                  </div>
                ))}

                {/* Streaming Message */}
                {isStreaming && (
                  <div className="flex flex-col items-start animate-in fade-in duration-100">
                    <div className="max-w-[88%] p-3 rounded-2xl bg-white dark:bg-[#1E293B] text-zinc-800 dark:text-[#F8FAFC] border border-[#00BFCC]/40 shadow-2xs rounded-bl-xs">
                      <p className="whitespace-pre-wrap">{streamingText}</p>
                      <span className="inline-block w-1.5 h-3 bg-[#00BFCC] animate-pulse ml-1 -mb-0.5" />
                    </div>
                    <span className="text-[9px] text-[#0096A3] dark:text-[#00F2FE] font-mono mt-1 px-1 animate-pulse">
                      {t.mallo.typing}
                    </span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions Chips */}
              <div className="px-3 py-2 bg-white dark:bg-[#151D2F] border-t border-zinc-100 dark:border-[#232F48] shrink-0">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
                  {quickQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      type="button"
                      disabled={isStreaming}
                      onClick={() => handleSendMessage(q)}
                      className="px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-[#0B0F19] hover:bg-zinc-200 dark:hover:bg-[#1E293B] text-zinc-700 dark:text-[#94A3B8] text-[10px] font-medium whitespace-nowrap transition-colors cursor-pointer shrink-0 disabled:opacity-50"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Form with Token Counter & Rate Limiter */}
              <div className="p-3 bg-white dark:bg-[#151D2F] border-t border-zinc-200 dark:border-[#232F48] shrink-0">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <div className="relative flex-1">
                    <input
                      ref={inputRef}
                      type="text"
                      maxLength={MAX_INPUT_CHARS}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder={remainingQueries > 0 ? t.mallo.placeholder : t.mallo.placeholderLimit}
                      disabled={isStreaming || remainingQueries <= 0}
                      className="w-full pl-3.5 pr-14 py-2 text-xs rounded-full border border-zinc-200 dark:border-[#232F48] focus:outline-none focus:border-[#0F172A] dark:focus:border-[#00F2FE] bg-zinc-50 dark:bg-[#0B0F19] text-zinc-900 dark:text-[#F8FAFC] focus:bg-white dark:focus:bg-[#0B0F19] transition-all placeholder:text-zinc-400 dark:placeholder-zinc-600 disabled:opacity-60"
                    />
                    {inputValue.length > 90 && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] font-mono text-zinc-400 dark:text-zinc-500 pointer-events-none">
                        {inputValue.length}/{MAX_INPUT_CHARS}
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isStreaming || remainingQueries <= 0}
                    className="p-2 rounded-full bg-[#0F172A] dark:bg-[#00F2FE] text-white dark:text-[#0B0F19] disabled:opacity-30 hover:bg-[#1E293B] transition-colors shrink-0 shadow-xs cursor-pointer"
                    aria-label={language === "en" ? "Send query to Mallo" : "Envoyer la question à Mallo"}
                  >
                    <Send className="w-3.5 h-3.5 text-[#00BFCC] dark:text-[#0B0F19]" />
                  </button>
                </form>

                <div className="mt-1.5 flex items-center justify-between text-[10px] text-zinc-400 dark:text-[#64748B] px-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#0096A3] dark:text-[#00F2FE]" />
                    {language === "en" ? "Non-Training AI Covenant" : "Engagement Confidentialité IA"}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveTab("founder")}
                    className="text-zinc-700 dark:text-[#94A3B8] font-semibold hover:underline cursor-pointer"
                  >
                    {language === "en" ? "Talk with Mallory directly →" : "Échanger directement avec Mallory →"}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DIRECT FOUNDER DESK (MALLORY) */}
          {activeTab === "founder" && (
            <div className="p-5 flex-1 flex flex-col justify-between overflow-y-auto space-y-4 dark:bg-[#151D2F]">
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-100 dark:border-[#232F48]">
                  <div className="w-10 h-10 rounded-full bg-[#0F172A] dark:bg-[#0B0F19] border border-transparent dark:border-[#232F48] flex items-center justify-center p-2 shadow-xs">
                    <ApertureLogo size={22} color="#00BFCC" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0F172A] dark:text-[#F8FAFC] flex items-center gap-1.5">
                      Mallory Antomarchi
                      <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                        {language === "en" ? "Online" : "En Ligne"}
                      </span>
                    </h4>
                    <p className="text-[11px] text-zinc-500 dark:text-[#94A3B8]">
                      {language === "en"
                        ? "Founder & Applied AI Engineer • Perth & WA"
                        : "Fondateur & Ingénieur IA Appliquée • Perth & WA"}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 dark:text-[#94A3B8] leading-relaxed">
                  {language === "en"
                    ? "No sales reps or ticket queues. You connect directly with the engineer who walks your floor and builds your pipelines."
                    : "Aucun commercial ni ticket d'attente. Vous échangez directement avec l'ingénieur qui audite votre établissement et conçoit vos flux."}
                </p>

                {/* Direct Options */}
                <div className="space-y-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      onOpenAuditModal();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#0F172A] dark:bg-[#00F2FE] text-white dark:text-[#0B0F19] text-xs font-semibold hover:bg-[#1E293B] transition-all shadow-xs group cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#00BFCC] dark:text-[#0B0F19]" />
                      {t.mallo.bookAuditBtn}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-400 dark:text-[#0B0F19] group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <a
                    href="https://wa.me/61402472262?text=Hi%20Mallory%2C%20I%20run%20a%20venue%20and%20want%20to%20streamline%20our%20dockets%20and%20back-office%20admin."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-300 text-xs font-semibold hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      {t.mallo.whatsappBtn}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href="tel:+61402472262"
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-zinc-50 dark:bg-[#0B0F19] border border-zinc-200 dark:border-[#232F48] text-zinc-800 dark:text-[#F8FAFC] text-xs font-medium hover:bg-zinc-100 dark:hover:bg-[#1E293B] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#0096A3] dark:text-[#00F2FE]" />
                      <span>{t.mallo.callBtn}</span>
                    </span>
                    <span className="text-[10px] text-zinc-500 dark:text-[#94A3B8] font-mono">
                      {language === "en" ? "2:30–4:30 PM Priority" : "14h30–16h30 Prioritaire"}
                    </span>
                  </a>

                  <div className="w-full flex items-center justify-between p-2.5 rounded-xl bg-zinc-50 dark:bg-[#0B0F19] border border-zinc-200 dark:border-[#232F48] text-zinc-800 dark:text-[#F8FAFC] text-xs font-medium">
                    <a
                      href="mailto:founder@haimate.com.au?subject=Quick%20Hospitality%20Question"
                      className="flex items-center gap-2 hover:text-[#0096A3] dark:hover:text-[#00F2FE] transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-zinc-600 dark:text-[#94A3B8]" />
                      <span>founder@haimate.com.au</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="text-[10px] text-zinc-500 dark:text-[#94A3B8] hover:text-zinc-900 dark:hover:text-[#F8FAFC] bg-white dark:bg-[#151D2F] px-2 py-0.5 rounded border border-zinc-200 dark:border-[#232F48] transition-colors cursor-pointer"
                    >
                      {copiedEmail ? (
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">{language === "en" ? "Copied" : "Copié"}</span>
                      ) : (
                        language === "en" ? "Copy" : "Copier"
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-100 dark:border-[#232F48] flex items-center justify-between text-[10px] text-zinc-500 dark:text-[#94A3B8]">
                <span>
                  {language === "en"
                    ? "Between-Service Priority (2:30–4:30 PM AWST)"
                    : "Créneau Entre-Services (14h30–16h30 AWST)"}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveTab("ai")}
                  className="text-[#0096A3] dark:text-[#00F2FE] font-bold hover:underline cursor-pointer"
                >
                  {language === "en" ? "← Ask Mallo (AI)" : "← Demander à Mallo (IA)"}
                </button>
              </div>
            </div>
          )}

        </div>
      )}

      {/* Floating Concierge Trigger Pill */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0F172A] text-white shadow-xl hover:shadow-2xl hover:bg-[#1E293B] transition-all cursor-pointer group active:scale-95 border border-white/20"
        aria-label="Open Mallo AI Assistant & Mallory's Desk"
      >
        <div className="relative flex items-center justify-center">
          <ApertureLogo size={16} color="#00BFCC" glow />
          <span className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 border border-zinc-950" />
        </div>
        <span className="text-xs font-bold text-white flex items-center gap-1.5">
          <span>{language === "en" ? "Ask Mallo" : "Demander à Mallo"}</span>
          <span className="hidden sm:inline text-zinc-400 font-normal">
            {language === "en" ? "• Mallory's AI" : "• IA de Mallory"}
          </span>
        </span>
      </button>

    </div>
  );
}
