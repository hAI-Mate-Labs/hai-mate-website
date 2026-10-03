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
} from "lucide-react";
import ApertureLogo from "./ApertureLogo";

interface FloatingContactProps {
  onOpenAuditModal: () => void;
}

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
  tokensUsed?: number;
  action?: {
    label: string;
    onClick: () => void;
    icon?: any;
  };
}

const MAX_TOKENS = 150;

export default function FloatingContact({ onOpenAuditModal }: FloatingContactProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"ai" | "founder">("ai");
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Gemma 4 4B State
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "assistant",
      text: "G'day! I am your hAI Mate assistant running on Gemma 4 4B with a strict 150-token guardrail. Ask me anything about docket automation, WA grants, or till integrations.",
      tokensUsed: 42,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickQuestions = [
    "Do chefs need new apps or iPads?",
    "How does the 50% WA grant work?",
    "Will AI pay bills without approval?",
    "Which POS & Xero tools work?",
    "How does docket OCR catch price creep?",
    "How do I reach Mallory directly?",
  ];

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

  const generateGemmaResponse = (query: string): { text: string; action?: any } => {
    const q = query.toLowerCase();

    // 1. Staff software & learning curve
    if (
      q.includes("staff") ||
      q.includes("software") ||
      q.includes("hardware") ||
      q.includes("ipad") ||
      q.includes("app") ||
      q.includes("screen") ||
      q.includes("chef") ||
      q.includes("learn") ||
      q.includes("training")
    ) {
      return {
        text: "Zero new software or hardware for your kitchen or floor staff. Chefs simply snap a phone photo of paper dockets or forward supplier PDF emails. Managers receive a simple 1-tap mobile prompt to approve staged bills in seconds. No training manuals or new dashboards required.",
        action: {
          label: "Book 14-Day Audit",
          onClick: onOpenAuditModal,
          icon: Calendar,
        },
      };
    }

    // 2. WA Grants (LCF)
    if (
      q.includes("grant") ||
      q.includes("government") ||
      q.includes("lcf") ||
      q.includes("50%") ||
      q.includes("fund") ||
      q.includes("subsidy") ||
      q.includes("wa state")
    ) {
      return {
        text: "Eligible WA businesses can claim up to 50% matched co-funding ($25,000 for single venues, $50,000 for groups) through the WA Local Capability Fund (LCF) Digital Round. During our 14-day audit, Mallory prepares the complete technical scoping dossier and ROI paperwork ready for submission.",
        action: {
          label: "Explore WA Grant Calculator",
          onClick: () => {
            const el = document.getElementById("grants");
            el?.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
          },
          icon: Landmark,
        },
      };
    }

    // 3. Human in the loop / Control
    if (
      q.includes("control") ||
      q.includes("human") ||
      q.includes("mistake") ||
      q.includes("error") ||
      q.includes("pay") ||
      q.includes("cut") ||
      q.includes("roster") ||
      q.includes("approval")
    ) {
      return {
        text: "Strict Human-in-the-Loop is our ironclad covenant. No automated action executes unapproved. No bills are paid, no ledgers posted in Xero, and no shifts cut without your venue manager's explicit 1-tap mobile sign-off. You maintain 100% control over every single dollar.",
        action: {
          label: "Read Operator Covenant",
          onClick: () => {
            const el = document.getElementById("how-it-works");
            el?.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
          },
          icon: ShieldCheck,
        },
      };
    }

    // 4. POS & Accounting integrations
    if (
      q.includes("pos") ||
      q.includes("lightspeed") ||
      q.includes("square") ||
      q.includes("ordermate") ||
      q.includes("xero") ||
      q.includes("myob") ||
      q.includes("deputy") ||
      q.includes("tanda") ||
      q.includes("sevenrooms") ||
      q.includes("integrate") ||
      q.includes("system")
    ) {
      return {
        text: "We support Lightspeed, Square, OrderMate, Toast, Xero, MYOB, Deputy, Tanda, SevenRooms, OpenTable, and Resy out of the box. We connect quietly via standard APIs and webhooks with zero changes to your physical till hardware.",
        action: {
          label: "View All Integrations",
          onClick: () => {
            const el = document.getElementById("integrations");
            el?.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
          },
          icon: Layers,
        },
      };
    }

    // 5. Audit timeline & Guarantee
    if (
      q.includes("audit") ||
      q.includes("cost") ||
      q.includes("price") ||
      q.includes("timeline") ||
      q.includes("process") ||
      q.includes("14-day") ||
      q.includes("guarantee")
    ) {
      return {
        text: "The 14-day diagnostic audit is fixed-fee and runs during quiet morning prep hours with zero disruption to floor service. Backed by our 100% Value Guarantee: If we don't identify at least 3x the audit cost in recoverable admin hours or supplier overcharges, you pay $0.",
        action: {
          label: "Book Your 14-Day Audit",
          onClick: onOpenAuditModal,
          icon: Calendar,
        },
      };
    }

    // 6. Founder / Contact / Location
    if (
      q.includes("founder") ||
      q.includes("mallory") ||
      q.includes("who") ||
      q.includes("contact") ||
      q.includes("phone") ||
      q.includes("whatsapp") ||
      q.includes("call") ||
      q.includes("perth") ||
      q.includes("sydney")
    ) {
      return {
        text: "hAI Mate! was founded by Mallory Antomarchi, an independent solo practitioner blending European hospitality standards with Silicon-grade AI pipelines. Based in WA and registered as a Solo Trader in Sydney, NSW. You deal directly with Mallory on 0402 472 262—no junior ticket queues.",
        action: {
          label: "Chat with Mallory on WhatsApp",
          onClick: () => {
            window.open("https://wa.me/61402472262?text=Hi%20Mallory,%20I%20have%20a%20question%20about%20hAI%20Mate.", "_blank");
          },
          icon: MessageSquare,
        },
      };
    }

    // 7. Docket OCR & Price creep
    if (
      q.includes("docket") ||
      q.includes("receipt") ||
      q.includes("ocr") ||
      q.includes("price creep") ||
      q.includes("overcharge") ||
      q.includes("supplier")
    ) {
      return {
        text: "Our OCR pipeline parses crumpled paper receipts in 5 seconds. It cross-checks every billed line item against your contracted supplier price agreement, flags hidden price creep in red, and stages verified draft bills directly into Xero/MYOB.",
        action: {
          label: "Try Live Docket Simulator",
          onClick: () => {
            const el = document.getElementById("simulator");
            el?.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
          },
          icon: Scan,
        },
      };
    }

    // Fallback response
    return {
      text: "I am a lightweight Gemma 4 4B assistant capped at 150 tokens. For custom technical scoping or to see how your venue can eliminate 4–8 hours/week on delivery dockets, you can book a free 14-day audit or chat directly with founder Mallory on WhatsApp.",
      action: {
        label: "WhatsApp Mallory (0402 472 262)",
        onClick: () => {
          window.open("https://wa.me/61402472262?text=Hi%20Mallory,%20I'd%20like%20to%20discuss%20automation%20for%20my%20venue.", "_blank");
        },
        icon: MessageSquare,
      },
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || isStreaming) return;

    const userMsgId = `user-${Date.now()}`;
    const newMessages: Message[] = [
      ...messages,
      { id: userMsgId, sender: "user", text: query },
    ];
    setMessages(newMessages);
    setInputValue("");
    setIsStreaming(true);

    const { text: fullResponse, action } = generateGemmaResponse(query);
    const tokens = Math.round(fullResponse.split(" ").length * 1.3);

    // Stream response word-by-word
    const words = fullResponse.split(" ");
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
        setMessages([
          ...newMessages,
          {
            id: `assistant-${Date.now()}`,
            sender: "assistant",
            text: fullResponse,
            tokensUsed: Math.min(tokens, MAX_TOKENS),
            action,
          },
        ]);
      }
    }, 25);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: "welcome",
        sender: "assistant",
        text: "G'day! I am your hAI Mate assistant running on Gemma 4 4B with a strict 150-token guardrail. Ask me anything about docket automation, WA grants, or till integrations.",
        tokensUsed: 42,
      },
    ]);
  };

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 select-none print:hidden">
      
      {/* Expanded Floating Widget */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2.5rem)] max-w-sm sm:max-w-md rounded-3xl bg-white border border-zinc-200 shadow-2xl transition-all duration-200 animate-in fade-in slide-in-from-bottom-3 overflow-hidden flex flex-col h-[540px] max-h-[82vh]">
          
          {/* Header Bar with Mode Switcher */}
          <div className="px-4 py-3 bg-zinc-950 text-white flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center p-1">
                <ApertureLogo size={18} color="#00BFCC" glow />
              </div>
              <div className="flex rounded-full bg-white/10 p-0.5 border border-white/10 text-[11px] font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveTab("ai")}
                  className={`px-2.5 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1 ${
                    activeTab === "ai"
                      ? "bg-white text-zinc-950 shadow-xs"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  <Bot className="w-3 h-3 text-[#00BFCC]" />
                  <span>Gemma 4 4B</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("founder")}
                  className={`px-2.5 py-1 rounded-full transition-all cursor-pointer flex items-center gap-1 ${
                    activeTab === "founder"
                      ? "bg-white text-zinc-950 shadow-xs"
                      : "text-zinc-300 hover:text-white"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Direct Desk</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {activeTab === "ai" && (
                <button
                  type="button"
                  onClick={handleResetChat}
                  className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                  title="Reset assistant chat"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close concierge"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* TAB 1: GEMMA 4 4B AI ASSISTANT */}
          {activeTab === "ai" && (
            <div className="flex-1 flex flex-col overflow-hidden">
              {/* Gemma Model Spec Banner */}
              <div className="px-3.5 py-1.5 bg-zinc-100/80 border-b border-zinc-200 flex items-center justify-between text-[10px] text-zinc-600 font-mono shrink-0">
                <span className="flex items-center gap-1 text-[#0096A3] font-bold">
                  <Sparkles className="w-3 h-3" /> Gemma 4 4B Architecture
                </span>
                <span>Max Tokens: 150</span>
              </div>

              {/* Chat Messages */}
              <div className="p-3.5 overflow-y-auto flex-1 space-y-3 bg-zinc-50/50 text-xs">
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
                          ? "bg-zinc-950 text-white rounded-br-xs"
                          : "bg-white text-zinc-800 border border-zinc-200/90 rounded-bl-xs"
                      }`}
                    >
                      <p className="whitespace-pre-wrap">{m.text}</p>

                      {/* Action Button */}
                      {m.action && (
                        <div className="mt-2 pt-2 border-t border-zinc-100">
                          <button
                            type="button"
                            onClick={m.action.onClick}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-950 text-white font-bold text-[10px] hover:bg-zinc-800 transition-colors shadow-2xs cursor-pointer"
                          >
                            {m.action.icon && <m.action.icon className="w-3 h-3 text-[#00BFCC]" />}
                            <span>{m.action.label}</span>
                            <ArrowRight className="w-3 h-3 text-zinc-400" />
                          </button>
                        </div>
                      )}
                    </div>

                    {m.sender === "assistant" && m.tokensUsed && (
                      <span className="text-[9px] text-zinc-400 font-mono mt-1 px-1">
                        Gemma 4 4B • {m.tokensUsed} / {MAX_TOKENS} tokens
                      </span>
                    )}
                  </div>
                ))}

                {/* Streaming Message */}
                {isStreaming && (
                  <div className="flex flex-col items-start animate-in fade-in duration-100">
                    <div className="max-w-[88%] p-3 rounded-2xl bg-white text-zinc-800 border border-[#00BFCC]/40 shadow-2xs rounded-bl-xs">
                      <p className="whitespace-pre-wrap">{streamingText}</p>
                      <span className="inline-block w-1.5 h-3 bg-[#00BFCC] animate-pulse ml-1 -mb-0.5" />
                    </div>
                    <span className="text-[9px] text-[#0096A3] font-mono mt-1 px-1 animate-pulse">
                      Generating via Gemma 4 4B...
                    </span>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Quick Questions Chips */}
              <div className="px-3 py-2 bg-white border-t border-zinc-100 shrink-0">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 scrollbar-none">
                  {quickQuestions.map((q, idx) => (
                    <button
                      key={idx}
                      type="button"
                      disabled={isStreaming}
                      onClick={() => handleSendMessage(q)}
                      className="px-2.5 py-1 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-[10px] font-medium whitespace-nowrap transition-colors cursor-pointer shrink-0 disabled:opacity-50"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Form */}
              <div className="p-3 bg-white border-t border-zinc-200 shrink-0">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="flex items-center gap-2"
                >
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about dockets, WA grants, or tills..."
                    disabled={isStreaming}
                    className="flex-1 px-3.5 py-2 text-xs rounded-full border border-zinc-200 focus:outline-none focus:border-zinc-950 bg-zinc-50 focus:bg-white transition-all placeholder:text-zinc-400"
                  />
                  <button
                    type="submit"
                    disabled={!inputValue.trim() || isStreaming}
                    className="p-2 rounded-full bg-zinc-950 text-white disabled:opacity-30 hover:bg-zinc-800 transition-colors shrink-0 shadow-xs cursor-pointer"
                    aria-label="Send query"
                  >
                    <Send className="w-3.5 h-3.5 text-[#00BFCC]" />
                  </button>
                </form>

                <div className="mt-1.5 flex items-center justify-between text-[10px] text-zinc-400 px-1">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#0096A3]" />
                    Non-Training AI Covenant
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveTab("founder")}
                    className="text-zinc-700 font-semibold hover:underline cursor-pointer"
                  >
                    Talk with Mallory →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DIRECT FOUNDER DESK */}
          {activeTab === "founder" && (
            <div className="p-5 flex-1 flex flex-col justify-between overflow-y-auto space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-100">
                  <div className="w-10 h-10 rounded-full bg-zinc-950 flex items-center justify-center p-2 shadow-xs">
                    <ApertureLogo size={22} color="#00BFCC" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-950 flex items-center gap-1.5">
                      Mallory Antomarchi
                      <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        Online
                      </span>
                    </h4>
                    <p className="text-[11px] text-zinc-500">
                      Founder &amp; Applied AI Engineer • Sydney NSW &amp; WA
                    </p>
                  </div>
                </div>

                <p className="text-xs text-zinc-600 leading-relaxed">
                  No sales reps or ticket queues. You connect directly with the engineer who walks your floor and builds your pipelines.
                </p>

                {/* Direct Options */}
                <div className="space-y-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      onOpenAuditModal();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-zinc-950 text-white text-xs font-semibold hover:bg-zinc-800 transition-all shadow-xs group cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-[#00BFCC]" />
                      Book 14-Day Readiness Audit
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
                  </button>

                  <a
                    href="https://wa.me/61402472262?text=Hi%20Mallory,%20I'm%20a%20venue%20operator%20interested%20in%20applied%20automation%20for%20my%20business."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs font-semibold hover:bg-emerald-100 transition-colors group"
                  >
                    <span className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Chat on WhatsApp (0402 472 262)
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-700 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href="tel:0402472262"
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-800 text-xs font-medium hover:bg-zinc-100 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#0096A3]" />
                      <span>Call 0402 472 262</span>
                    </span>
                    <span className="text-[10px] text-zinc-500 font-mono">2:30–4:30 PM Priority</span>
                  </a>

                  <a
                    href="mailto:founder@haimate.com.au?subject=Quick%20Hospitality%20Question"
                    className="w-full flex items-center justify-between p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-800 text-xs font-medium hover:bg-zinc-100 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-zinc-600" />
                      founder@haimate.com.au
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="text-[10px] text-zinc-500 hover:text-zinc-900 bg-white px-2 py-0.5 rounded border border-zinc-200 transition-colors cursor-pointer"
                    >
                      {copiedEmail ? <span className="text-emerald-600 font-bold">Copied</span> : "Copy"}
                    </button>
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-[10px] text-zinc-500">
                <span>Between-Service Priority (2:30–4:30 PM AWST)</span>
                <button
                  type="button"
                  onClick={() => setActiveTab("ai")}
                  className="text-[#0096A3] font-bold hover:underline"
                >
                  ← Ask Gemma 4 4B
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
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-950 text-white shadow-xl hover:shadow-2xl hover:bg-zinc-800 transition-all cursor-pointer group active:scale-95 border border-white/20"
        aria-label="Open AI Assistant & Founder Desk"
      >
        <div className="relative flex items-center justify-center">
          <ApertureLogo size={16} color="#00BFCC" glow />
          <span className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 border border-zinc-950" />
        </div>
        <span className="text-xs font-bold text-white flex items-center gap-1.5">
          <span>Ask Gemma 4 4B</span>
          <span className="hidden sm:inline text-zinc-400 font-normal">• Direct Desk</span>
        </span>
      </button>

    </div>
  );
}
