"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  Send,
  X,
  RotateCcw,
  Bot,
  User,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Phone,
  Landmark,
  Scan,
  Layers,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import ApertureLogo from "./ApertureLogo";

interface MalloAssistantProps {
  isOpen: boolean;
  onClose: () => void;
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

export default function MalloAssistant({
  isOpen,
  onClose,
  onOpenAuditModal,
}: MalloAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "assistant",
      text: "G'day! I'm Mallo, your virtual operational assistant trained on Mallory's hospitality pipelines (strictly capped at 150 tokens for brevity). Ask me anything about our docket automation, WA state grants, or how our 14-day audit works.",
      tokensUsed: 44,
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
    "Will AI pay bills without my approval?",
    "Which POS & Xero tools work?",
    "How does docket OCR catch price creep?",
    "How do I reach Mallory directly?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingText]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const generateMalloResponse = (query: string): { text: string; action?: any } => {
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
            onClose();
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
            onClose();
          },
          icon: ShieldCheck,
        },
      };
    }

    // 4. POS, Tills & Accounting integrations
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
            onClose();
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
        text: "hAI Mate! was founded by Mallory Antomarchi, an applied AI automation practice operating on-the-ground in Perth & Western Australia, serving venues nationally. You deal directly with Mallory on 0402 472 262—no junior ticket queues.",
        action: {
          label: "Chat with Mallory on WhatsApp",
          onClick: () => {
            window.open(
              "https://wa.me/61402472262?text=Hi%20Mallory%2C%20I%20run%20a%20venue%20in%20WA%20and%20want%20to%20chat%20about%20automating%20dockets%20and%20admin.",
              "_blank",
              "noopener,noreferrer"
            );
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
        text: "Our private document ingestion pipeline parses wholesale dockets in 5 seconds. It cross-checks every billed line item against your contracted supplier price agreement, flags hidden price creep in red, and stages verified draft bills directly into Xero/MYOB.",
        action: {
          label: "Try Live Docket Simulator",
          onClick: () => {
            const el = document.getElementById("simulator");
            el?.scrollIntoView({ behavior: "smooth" });
            onClose();
          },
          icon: Scan,
        },
      };
    }

    // Fallback response
    return {
      text: "I am Mallo, your lightweight operational assistant (strictly capped at 150 tokens for concise answers). For custom technical scoping or to see how your venue can eliminate 4–8 hours/week on delivery dockets, you can book a free 14-day audit or chat directly with founder Mallory on WhatsApp.",
      action: {
        label: "WhatsApp Mallory (0402 472 262)",
        onClick: () => {
          window.open(
            "https://wa.me/61402472262?text=Hi%20Mallory%2C%20I%20run%20a%20venue%20in%20WA%20and%20want%20to%20chat%20about%20automating%20dockets%20and%20admin.",
            "_blank",
            "noopener,noreferrer"
          );
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

    const { text: fullResponse, action } = generateMalloResponse(query);
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
    }, 28);
  };

  const handleReset = () => {
    setMessages([
      {
        id: "welcome",
        sender: "assistant",
        text: "G'day! I'm Mallo, your virtual operational assistant trained on Mallory's hospitality pipelines (strictly capped at 150 tokens for brevity). Ask me anything about our docket automation, WA state grants, or how our 14-day audit works.",
        tokensUsed: 44,
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2.5rem)] max-w-sm sm:max-w-md bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[85vh] h-[580px] animate-in fade-in slide-in-from-bottom-3 duration-200 select-none">
      
      {/* Header Bar */}
      <div className="px-4 py-3 bg-[#0F172A] text-white flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center p-1.5 shadow-xs">
            <ApertureLogo size={20} color="#00BFCC" glow />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-tight">Mallo // AI Assistant</span>
              <span className="text-[10px] font-mono font-bold text-[#00BFCC] bg-[#00BFCC]/15 px-2 py-0.5 rounded-full border border-[#00BFCC]/30">
                AI Assistant
              </span>
            </div>
            <p className="text-[10px] text-zinc-400">
              150 Token Guardrail • Human-in-the-Loop Active
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            title="Reset conversation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close assistant"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages Scroll Body */}
      <div className="p-4 overflow-y-auto flex-1 space-y-3 bg-zinc-50/50 text-xs">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex flex-col ${
              m.sender === "user" ? "items-end" : "items-start"
            }`}
          >
            <div
              className={`max-w-[88%] p-3.5 rounded-2xl leading-relaxed shadow-2xs ${
                m.sender === "user"
                  ? "bg-[#0F172A] text-white rounded-br-xs"
                  : "bg-white text-zinc-800 border border-zinc-200/90 rounded-bl-xs"
              }`}
            >
              <p className="whitespace-pre-wrap">{m.text}</p>

              {/* Action Button if attached */}
              {m.action && (
                <div className="mt-2.5 pt-2 border-t border-zinc-100">
                  <button
                    type="button"
                    onClick={m.action.onClick}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0F172A] text-white font-bold text-[11px] hover:bg-[#1E293B] transition-colors shadow-2xs cursor-pointer"
                  >
                    {m.action.icon && <m.action.icon className="w-3 h-3 text-[#00BFCC]" />}
                    <span>{m.action.label}</span>
                    <ArrowRight className="w-3 h-3 text-zinc-400" />
                  </button>
                </div>
              )}
            </div>

            {/* Token Badge for Assistant Messages */}
            {m.sender === "assistant" && m.tokensUsed && (
              <span className="text-[9px] text-zinc-400 font-mono mt-1 px-1">
                Mallo AI • {m.tokensUsed} / {MAX_TOKENS} tokens
              </span>
            )}
          </div>
        ))}

        {/* Streaming message if generating */}
        {isStreaming && (
          <div className="flex flex-col items-start animate-in fade-in duration-100">
            <div className="max-w-[88%] p-3.5 rounded-2xl bg-white text-zinc-800 border border-[#00BFCC]/40 shadow-2xs rounded-bl-xs">
              <p className="whitespace-pre-wrap">{streamingText}</p>
              <span className="inline-block w-1.5 h-3 bg-[#00BFCC] animate-pulse ml-1 -mb-0.5" />
            </div>
            <span className="text-[9px] text-[#0096A3] font-mono mt-1 px-1 animate-pulse">
              Mallo is typing...
            </span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Prompt Chips */}
      <div className="px-3 py-2 bg-white border-t border-zinc-100 shrink-0">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
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

      {/* Input Row */}
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
            placeholder="Ask about dockets, WA grants, or till setup..."
            disabled={isStreaming}
            className="flex-1 px-3.5 py-2 text-xs rounded-full border border-zinc-200 focus:outline-none focus:border-[#0F172A] bg-zinc-50 focus:bg-white transition-all placeholder:text-zinc-400"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isStreaming}
            className="p-2 rounded-full bg-[#0F172A] text-white disabled:opacity-30 hover:bg-[#1E293B] transition-colors shrink-0 shadow-xs cursor-pointer"
            aria-label="Send query"
          >
            <Send className="w-3.5 h-3.5 text-[#00BFCC]" />
          </button>
        </form>

        <div className="mt-2 flex items-center justify-between text-[10px] text-zinc-400 px-1">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-[#0096A3]" />
            Strict Non-Training Guarantee
          </span>
          <a
            href="https://wa.me/61402472262?text=Hi%20Mallory%2C%20I%20run%20a%20venue%20in%20WA%20and%20want%20to%20chat%20about%20automating%20dockets%20and%20admin."
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-600 hover:text-[#0F172A] font-semibold"
          >
            Prefer WhatsApp? Call Mallory →
          </a>
        </div>
      </div>

    </div>
  );
}
