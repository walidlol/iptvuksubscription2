"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

// ─── Spring easing (CLAUDE.md) ────────────────────────────────────────────

const SPRING = [0.16, 1, 0.3, 1] as const;

// ─── Trust badges ─────────────────────────────────────────────────────────

interface TrustBadge {
  icon: React.ReactElement;
  label: string;
}

function StarIcon(): React.ReactElement {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" className="text-[#00B67A]">
      <path d="M7 0l1.796 5.528H14l-4.702 3.416 1.796 5.528L7 11.056l-4.094 3.416 1.796-5.528L0 5.528h5.204z" />
    </svg>
  );
}

function ShieldIcon(): React.ReactElement {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function BoltIcon(): React.ReactElement {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function HeadphonesIcon(): React.ReactElement {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

const TRUST_BADGES: TrustBadge[] = [
  { icon: <StarIcon />,       label: "Trustpilot 4.9★"     },
  { icon: <ShieldIcon />,     label: "7-Day Money Back"    },
  { icon: <BoltIcon />,       label: "Instant Activation"  },
  { icon: <HeadphonesIcon />, label: "UK Support 24/7"     },
];

// ─── Gradient headline ─────────────────────────────────────────────────────

function GradientText({ children }: { children: React.ReactNode }): React.ReactElement {
  return (
    <span
      className="bg-clip-text text-transparent"
      style={{
        backgroundImage: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-cyan) 100%)",
      }}
    >
      {children}
    </span>
  );
}

// ─── Pulsing dot ──────────────────────────────────────────────────────────

function PulsingDot(): React.ReactElement {
  return (
    <span className="relative flex h-2.5 w-2.5 shrink-0">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
    </span>
  );
}

// ─── Noise SVG (inline, no external dep) ─────────────────────────────────

function NoiseSVG(): React.ReactElement {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <filter id="hero-noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.65"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#hero-noise)" opacity="0.02" />
    </svg>
  );
}

// ─── Scroll indicator ─────────────────────────────────────────────────────

function ScrollIndicator(): React.ReactElement {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = (): void => setVisible(window.scrollY < 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4 }}
    >
      <span className="text-[9px] font-body font-700 uppercase tracking-[0.2em] text-subtle">
        Scroll
      </span>
      <motion.span
        className="block w-px h-10 bg-gradient-to-b from-subtle to-transparent"
        animate={{ scaleY: [1, 0.4, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────

export default function Hero(): React.ReactElement {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms (disabled when user prefers reduced motion)
  const orbTopY    = useTransform(scrollYProgress, [0, 1], ["0%",  prefersReduced ? "0%" : "-25%"]);
  const orbBottomY = useTransform(scrollYProgress, [0, 1], ["0%",  prefersReduced ? "0%" : "15%"]);
  const contentY   = useTransform(scrollYProgress, [0, 1], ["0%",  prefersReduced ? "0%" : "-12%"]);

  // Stagger helper — index × 0.08s base delay
  const delay = (i: number): number => i * 0.08;

  const fadeUp = (i: number): object => ({
    initial:   prefersReduced ? {} : { opacity: 0, y: 24 },
    animate:   { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: SPRING, delay: delay(i) },
  });

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--color-deep)" }}
      aria-label="Hero — IPTV UK Subscription"
    >
      {/* ── Layer 1: Gradient orbs ─────────────────────────────────────── */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: orbTopY }}
        aria-hidden="true"
      >
        {/* Accent orb — top centre */}
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: orbBottomY }}
        aria-hidden="true"
      >
        {/* Cyan orb — bottom right */}
        <div
          className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, var(--color-cyan) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
      </motion.div>

      {/* ── Layer 2: Grid pattern ─────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Layer 3: Noise ────────────────────────────────────────────── */}
      <NoiseSVG />

      {/* ── Layer 4: Content ──────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 mx-auto max-w-[1200px] px-6 py-32 flex flex-col items-center text-center"
        style={{ y: contentY }}
      >
        {/* Trust pill */}
        <motion.div {...fadeUp(0)}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line bg-card/60 backdrop-blur-sm mb-8">
            <PulsingDot />
            <span className="text-xs font-body font-semibold text-subtle tracking-wide">
              Trusted by{" "}
              <strong className="text-body font-semibold">48,000+</strong>{" "}
              UK Households
            </span>
          </div>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fadeUp(1)}
          className="font-display font-bold tracking-[-0.04em] leading-[1.05] mb-6"
          style={{ fontSize: "clamp(2.8rem, 7.5vw, 5.5rem)" }}
        >
          Premium{" "}
          <GradientText>IPTV UK</GradientText>
          <br />
          Subscription
        </motion.h1>

        {/* Subtitle — "iptv uk subscription" appears within first 100 words ✓ */}
        <motion.p
          {...fadeUp(2)}
          className="text-base sm:text-lg text-muted leading-relaxed max-w-[640px] mb-10"
        >
          The most reliable <strong className="text-body font-medium">IPTV UK subscription</strong>{" "}
          on the market. Stream{" "}
          <strong className="text-body font-medium">35,000+ live channels</strong>,{" "}
          <strong className="text-body font-medium">100,000+ on-demand</strong> titles, and
          all the Premier League action in{" "}
          <strong className="text-body font-medium">4K Ultra HD</strong> — with
          our anti-freeze buffer technology keeping every stream silky smooth.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          {...fadeUp(3)}
          className="flex flex-col sm:flex-row items-center gap-3 mb-14"
        >
          <Link
            href="/pricing/"
            className={cn(
              "inline-flex items-center justify-center h-12 px-7 rounded-[12px] text-sm font-semibold",
              "bg-accent text-deep",
              "shadow-[0_0_24px_var(--color-accent-glow)]",
              "hover:bg-[#00cc6a] hover:shadow-[0_0_40px_var(--color-accent-glow)]",
              "transition-all duration-300"
            )}
          >
            Start Free Trial →
          </Link>
          <Link
            href="/iptv-uk-channels/"
            className={cn(
              "inline-flex items-center justify-center h-12 px-7 rounded-[12px] text-sm font-semibold",
              "bg-transparent border border-line text-body",
              "hover:border-accent/50 hover:text-accent hover:bg-accent-dim",
              "transition-all duration-300"
            )}
          >
            View All Channels
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          {...fadeUp(4)}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {TRUST_BADGES.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2">
              {badge.icon}
              <span className="text-xs text-subtle font-medium">{badge.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <ScrollIndicator />

      {/* Bottom fade-to-bg */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--color-surface))",
        }}
        aria-hidden="true"
      />
    </section>
  );
}
