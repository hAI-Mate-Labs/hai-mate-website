"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ThemePreference = "system" | "dark" | "light";
export type ActiveTheme = "dark" | "light";

interface ThemeContextType {
  theme: ActiveTheme;
  themePreference: ThemePreference;
  setThemePreference: (pref: ThemePreference) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  themePreference: "system",
  setThemePreference: () => {},
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themePreference, setThemePreferenceState] = useState<ThemePreference>("system");
  const [theme, setThemeState] = useState<ActiveTheme>("light");

  useEffect(() => {
    // 1. Check if user manually saved a preference
    let savedPref: ThemePreference = "system";
    try {
      const stored = localStorage.getItem("haimate_theme_pref") as ThemePreference | null;
      if (stored === "system" || stored === "dark" || stored === "light") {
        savedPref = stored;
      }
    } catch {
      // localStorage not accessible
    }

    setThemePreferenceState(savedPref);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const resolveTheme = (pref: ThemePreference): ActiveTheme => {
      if (pref === "system") {
        return mediaQuery.matches ? "dark" : "light";
      }
      return pref;
    };

    const resolved = resolveTheme(savedPref);
    setThemeState(resolved);
    applyThemeToDOM(resolved);

    // 2. React to OS / device system dark mode changes
    const handleMediaChange = (e: MediaQueryListEvent) => {
      let currentPref: ThemePreference = "system";
      try {
        currentPref = (localStorage.getItem("haimate_theme_pref") as ThemePreference) || "system";
      } catch {}

      if (currentPref === "system") {
        const nextTheme: ActiveTheme = e.matches ? "dark" : "light";
        setThemeState(nextTheme);
        applyThemeToDOM(nextTheme);
      }
    };

    mediaQuery.addEventListener("change", handleMediaChange);
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  const applyThemeToDOM = (active: ActiveTheme) => {
    const root = document.documentElement;
    if (active === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
      root.style.colorScheme = "dark";
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }
  };

  const setThemePreference = (pref: ThemePreference) => {
    setThemePreferenceState(pref);
    try {
      localStorage.setItem("haimate_theme_pref", pref);
    } catch {}

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const resolved: ActiveTheme =
      pref === "system" ? (mediaQuery.matches ? "dark" : "light") : pref;
    setThemeState(resolved);
    applyThemeToDOM(resolved);
  };

  const toggleTheme = () => {
    const next: ActiveTheme = theme === "dark" ? "light" : "dark";
    setThemePreference(next);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themePreference,
        setThemePreference,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
