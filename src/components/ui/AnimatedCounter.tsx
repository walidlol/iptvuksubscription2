"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  /** Numeric target to count up to */
  target: number;
  /** Text appended after the number (e.g. "+", "%") */
  suffix?: string;
  /** Text prepended before the number (e.g. "£") */
  prefix?: string;
  /** Count-up duration in seconds. Default: 1.8 */
  duration?: number;
  className?: string;
}

function formatValue(value: number, target: number): string {
  // Preserve decimal for non-integer targets (e.g. 99.9)
  if (!Number.isInteger(target)) {
    return value.toFixed(1);
  }
  // Add thousands separator for large numbers
  if (target >= 1000) {
    return Math.round(value).toLocaleString("en-GB");
  }
  return Math.round(value).toString();
}

export default function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 1.8,
  className,
}: AnimatedCounterProps): React.ReactElement {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  const count = useMotionValue(0);
  const display = useTransform(count, (latest) => formatValue(latest, target));

  useEffect(() => {
    if (!isInView) return;

    // Skip count-up animation for users who prefer reduced motion
    if (prefersReduced) {
      count.set(target);
      return;
    }

    const controls = animate(count, target, {
      duration,
      ease: "easeOut",
    });

    return controls.stop;
  }, [isInView, count, target, duration, prefersReduced]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}
