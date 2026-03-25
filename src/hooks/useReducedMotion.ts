"use client";

import { useEffect, useState } from "react";

function getMatchValue(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Returns true if the user has requested reduced motion
 * via the OS accessibility setting.
 *
 * Use this to gate Framer Motion animations per CLAUDE.md:
 * "Respect prefers-reduced-motion"
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(getMatchValue);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return prefersReduced;
}
