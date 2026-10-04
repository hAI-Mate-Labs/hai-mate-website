"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  Send,
  X,
  RotateCcw,
  ShieldCheck,
  Calendar,
  MessageSquare,
  Landmark,
  Scan,
  Layers,
  ArrowRight,
} from "lucide-react";
import ApertureLogo from "./ApertureLogo";
import {
  queryMallo,
  getRemainingDailyQueries,
  MAX_INPUT_CHARS,
  MAX_OUTPUT_TOKENS,
} from "@/lib/malloGemma";

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
  modelUsed?: string;
  action?: {
    label: string;
    onClick: () => void;
    icon?: any;
  };
}

const MAX_TOKENS = MAX_OUTPUT_TOKENS;

export default function MalloAssistant({
  isOpen,
  onClose,
  onOpenAuditModal,
}: MalloAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "assistant",
      text: "G'day! I'm Mallo, your sovereign margin assistant powered by Gemma 4 (strictly capped at 35 words for brevity). Ask me anything about our wholesale docket OCR, WA state grant co-funding, or our 14-day diagnostic audit.",
      tokensUsed: 38,
      modelUsed: "Mallo AI",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const [remainingQueries, setRemainingQueries] = useState<number>(3);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setRemainingQueries(getRemainingDailyQueries());
  }, [isOpen]);

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

  const handleSendMessage = async (textToSend?: string) => {
    const rawQuery = (textToSend || inputValue).trim();
    if (!rawQuery || isStreaming) return;

    // Strict input length constraint (~35-40 tokens max)
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

      const result = await queryMallo(query, "en", history);

      let actionObj: Message["action"] | undefined = undefined;
      if (result.actionType === "audit") {
        actionObj = {
          label: "Book 14-Day Audit",
          onClick: onOpenAuditModal,
          icon: Calendar,
        };
      } else if (result.actionType === "grants") {
        actionObj = {
          label: "Explore WA Grant Calculator",
          onClick: () => {
            const el = document.getElementById("grants");
            el?.scrollIntoView({ behavior: "smooth" });
            onClose();
          },
          icon: Landmark,
        };
      } else if (result.actionType === "covenant") {
        actionObj = {
          label: "Read Operator Covenant",
          onClick: () => {
            const el = document.getElementById("how-it-works");
            el?.scrollIntoView({ behavior: "smooth" });
            onClose();
          },
          icon: ShieldCheck,
        };
      } else if (result.actionType === "integrations") {
        actionObj = {
          label: "View All Integrations",
          onClick: () => {
            const el = document.getElementById("integrations");
            el?.scrollIntoView({ behavior: "smooth" });
            onClose();
          },
          icon: Layers,
        };
      } else if (result.actionType === "simulator") {
        actionObj = {
          label: "Try Live Docket Simulator",
          onClick: () => {
            const el = document.getElementById("simulator");
            el?.scrollIntoView({ behavior: "smooth" });
            onClose();
          },
          icon: Scan,
        };
      } else if (result.actionType === "whatsapp") {
        actionObj = {
          label: "WhatsApp Mallory (0402 472 262)",
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
          text: "I am Mallo, your hospitality margin assistant. To review your dockets or book a 14-day audit, message Mallory directly on WhatsApp.",
          tokensUsed: 30,
          modelUsed: "Offline Engine",
        },
      ]);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: "welcome",
        sender: "assistant",
        text: "G'day! I'm Mallo, your sovereign margin assistant powered by Gemma 4 (strictly capped at 35 words for brevity). Ask me anything about our wholesale docket OCR, WA state grant co-funding, or our 14-day diagnostic audit.",
        tokensUsed: 38,
        modelUsed: "Mallo AI",
      },
    ]);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2.5rem)] max-w-sm sm:max-w-md bg-white rounded-3xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[85vh] h-[580px] animate-in fade-in slide-in-from-bottom-3 duration-200 select-none">
      
      {/* Header Bar */}
      <div className="px-4 py-3 bg-[#0F172A] text-white flex items-center justify-between shrink-0 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center p-1.5 shadow-xs">
            <ApertureLogo size={20} color="#00BFCC" glow />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold tracking-tight">Mallo // Margin Assistant</span>
              <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded-full border border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Gemma 4</span>
              </span>
            </div>
            <div className="mt-0.5">
              {remainingQueries > 0 ? (
                <span className="text-[10px] text-zinc-400 font-mono">
                  {remainingQueries}/3 free queries left today
                </span>
              ) : (
                <span className="text-[10px] text-amber-400 font-mono font-bold">
                  Daily limit reached (3/3)
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            title="Reset conversation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
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
                  ? "bg-[#0F172A] text-white rounded-br-xs font-medium"
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
            {m.sender === "assistant" && (
              <span className="text-[9px] text-zinc-400 font-mono mt-1 px-1 flex items-center gap-1.5">
                <span className="font-semibold text-zinc-600">{m.modelUsed || "Mallo AI"}</span>
                <span>•</span>
                <span>{m.tokensUsed || 35} tokens</span>
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
              disabled={isStreaming || remainingQueries <= 0}
              onClick={() => handleSendMessage(q)}
              className="px-2.5 py-1 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 text-[10px] font-medium whitespace-nowrap transition-colors cursor-pointer shrink-0 disabled:opacity-50"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input Row with Rate Limiter */}
      <div className="p-3 bg-white border-t border-zinc-200 shrink-0">
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
              placeholder={remainingQueries > 0 ? "Ask about dockets, WA grants, or 33% labor target..." : "Daily limit reached (3/3). WhatsApp Mallory directly →"}
              disabled={isStreaming || remainingQueries <= 0}
              className="w-full pl-3.5 pr-14 py-2 text-xs rounded-full border border-zinc-200 focus:outline-none focus:border-[#0F172A] bg-zinc-50 focus:bg-white transition-all placeholder:text-zinc-400 disabled:opacity-60"
            />
            {inputValue.length > 90 && (
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[9px] font-mono text-zinc-400 pointer-events-none">
                {inputValue.length}/{MAX_INPUT_CHARS}
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={!inputValue.trim() || isStreaming || remainingQueries <= 0}
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
            href="https://wa.me/61402472262?text=Hi%20Mallory%2C%20I%20run%20a%20venue%20and%20want%20to%20streamline%20our%20dockets%20and%20back-office%20admin."
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
