"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/lib/translations";

export type Language = "en" | "fr";

type TranslationType = typeof translations.en;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // 1. Check for explicit manual selection by user
    try {
      const manualLang = localStorage.getItem("haimate_lang_manual") as Language | null;
      if (manualLang === "en" || manualLang === "fr") {
        setLanguageState(manualLang);
        document.documentElement.lang = manualLang;
        return;
      }
    } catch {
      // localStorage not accessible
    }

    // 2. Initial detection based on user's device system language
    let initialLang: Language = "en";
    if (typeof navigator !== "undefined") {
      const browserLang = (navigator.language || (navigator.languages && navigator.languages[0]) || "").toLowerCase();
      if (browserLang.startsWith("fr")) {
        initialLang = "fr";
      }
    }
    setLanguageState(initialLang);
    document.documentElement.lang = initialLang;

    // 3. Asynchronously detect French IP location (api.country.is)
    const abortController = new AbortController();
    const timeoutId = setTimeout(() => abortController.abort(), 2500);

    fetch("https://api.country.is/", { signal: abortController.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Status " + res.status);
        return res.json();
      })
      .then((data) => {
        clearTimeout(timeoutId);
        // French sovereign territories & France ISO codes
        const frenchTerritories = ["FR", "GP", "MQ", "GF", "RE", "YT", "NC", "PF", "WF", "PM", "BL", "MF"];
        if (data && typeof data.country === "string" && frenchTerritories.includes(data.country.toUpperCase())) {
          // Confirmed French IP
          setLanguageState("fr");
          document.documentElement.lang = "fr";
        } else if (initialLang !== "fr") {
          // Non-French IP and non-French device
          setLanguageState("en");
          document.documentElement.lang = "en";
        }
      })
      .catch(() => {
        // Network timeout or blocked: gracefully fall back to device language (already applied)
      });

    return () => {
      clearTimeout(timeoutId);
      abortController.abort();
    };
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("haimate_lang_manual", lang);
      document.documentElement.lang = lang;
    } catch {
      // localStorage not accessible
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
