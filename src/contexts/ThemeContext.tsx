"use client";

import { createContext, startTransition, useContext, useEffect, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────

export type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggle: () => void;
}

// ─── Context ──────────────────────────────────────────────────────────────

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggle: () => {},
});

export function useTheme(): ThemeContextValue {
  return useContext(ThemeContext);
}

// ─── Provider ─────────────────────────────────────────────────────────────

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [theme, setTheme] = useState<Theme>("dark");

  // Sync from localStorage / system on mount
  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    let resolved: Theme;
    if (stored === "dark" || stored === "light") {
      resolved = stored;
    } else {
      resolved = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    startTransition(() => setTheme(resolved));
  }, []);

  // Apply data-theme attribute + persist
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = (): void =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
