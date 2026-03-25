"use client";

import { motion, type Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right" | "none";

interface ScrollRevealProps {
  children: React.ReactNode;
  /** Stagger delay in seconds. Default: 0 */
  delay?: number;
  /** Slide direction. Default: "up" */
  direction?: Direction;
  /** Travel distance in px. Default: 24 */
  distance?: number;
  className?: string;
}

// CLAUDE.md spring easing
const SPRING = [0.16, 1, 0.3, 1] as const;

function buildVariants(direction: Direction, distance: number): Variants {
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const sign =
    direction === "down" || direction === "right" ? -1 : 1;

  const hidden =
    direction === "none"
      ? { opacity: 0 }
      : { opacity: 0, [axis]: sign * distance };

  const visible =
    direction === "none"
      ? { opacity: 1 }
      : { opacity: 1, [axis]: 0 };

  return { hidden, visible };
}

export default function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  distance = 24,
  className,
}: ScrollRevealProps): React.ReactElement {
  const prefersReduced = useReducedMotion();
  const variants = buildVariants(direction, distance);

  // Skip animation entirely if user prefers reduced motion
  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: SPRING,
      }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
