"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

// ─── Trust badges ─────────────────────────────────────────────────────────

const TRUST_BADGES = [
  { icon: "★ 4.9", label: "Trustpilot"       },
  { icon: "⊕",    label: "7-Day Money Back"  },
  { icon: "⚡",    label: "Instant Activation" },
  { icon: "◎",    label: "UK Support 24/7"   },
] as const;

// ─── Particle config ──────────────────────────────────────────────────────

interface Particle {
  id: number;
  x: number;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 8,
    duration: Math.random() * 6 + 6,
    opacity: Math.random() * 0.4 + 0.1,
  }));
}

// ─── Split text into letter spans ─────────────────────────────────────────

function SplitText({
  text,
  className,
  tag: Tag = "span",
}: {
  text: string;
  className?: string;
  tag?: "span" | "div";
}): React.ReactElement {
  return (
    <Tag className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="hero-letter"
          aria-hidden="true"
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Tag>
  );
}

// ─── Noise overlay ────────────────────────────────────────────────────────

function NoiseSVG(): React.ReactElement {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
      <filter id="hero-noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#hero-noise)" opacity="0.025" />
    </svg>
  );
}

// ─── Live viewer counter ──────────────────────────────────────────────────

function LiveCounter(): React.ReactElement {
  const BASE = 1847;
  const [count, setCount] = useState(BASE);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.max(BASE - 20, Math.min(BASE + 40, prev + delta));
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line bg-card/60 backdrop-blur-sm mb-8">
      <span className="live-dot relative flex h-2.5 w-2.5 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
      </span>
      <span className="text-xs font-body font-semibold text-subtle tracking-wide">
        <strong className="text-body font-semibold tabular-nums">{count.toLocaleString()}</strong>
        {" "}watching now ·{" "}
        <strong className="text-body font-semibold">48,000+</strong> UK subscribers
      </span>
    </div>
  );
}

// ─── Scroll indicator ─────────────────────────────────────────────────────

function ScrollIndicator(): React.ReactElement {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handler = (): void => setVisible(window.scrollY < 80);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.4 }}
    >
      <span className="text-[9px] font-body font-bold uppercase tracking-[0.2em] text-subtle">
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
  const containerRef   = useRef<HTMLDivElement>(null);
  const headlineRef    = useRef<HTMLHeadingElement>(null);
  const subtitleRef    = useRef<HTMLParagraphElement>(null);
  const ctaRef         = useRef<HTMLDivElement>(null);
  const badgesRef      = useRef<HTMLDivElement>(null);
  const [particles]    = useState<Particle[]>(() => generateParticles(18));

  // ── Parallax ────────────────────────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const orbTopY    = useTransform(scrollYProgress, [0, 1], ["0%", prefersReduced ? "0%" : "-25%"]);
  const orbBottomY = useTransform(scrollYProgress, [0, 1], ["0%", prefersReduced ? "0%" : "15%"]);
  const contentY   = useTransform(scrollYProgress, [0, 1], ["0%", prefersReduced ? "0%" : "-12%"]);

  // ── anime.js letter reveal ───────────────────────────────────────────────
  useEffect(() => {
    if (prefersReduced) return;

    let cleanup = false;

    import("animejs").then((mod) => {
      if (cleanup) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const anime = (mod as any).default ?? mod;

      // Letters in h1
      if (headlineRef.current) {
        anime({
          targets: headlineRef.current.querySelectorAll(".hero-letter"),
          opacity:    [0, 1],
          translateY: [32, 0],
          delay:      anime.stagger(28, { start: 100 }),
          duration:   700,
          easing:     "easeOutExpo",
        });
      }

      // Subtitle fade up
      if (subtitleRef.current) {
        anime({
          targets:    subtitleRef.current,
          opacity:    [0, 1],
          translateY: [20, 0],
          duration:   800,
          delay:      500,
          easing:     "easeOutExpo",
        });
      }

      // CTA buttons
      if (ctaRef.current) {
        anime({
          targets:    ctaRef.current.children,
          opacity:    [0, 1],
          translateY: [16, 0],
          delay:      anime.stagger(80, { start: 650 }),
          duration:   600,
          easing:     "easeOutExpo",
        });
      }

      // Trust badges
      if (badgesRef.current) {
        anime({
          targets:    badgesRef.current.children,
          opacity:    [0, 1],
          translateY: [12, 0],
          delay:      anime.stagger(60, { start: 850 }),
          duration:   500,
          easing:     "easeOutExpo",
        });
      }
    });

    return () => { cleanup = true; };
  }, [prefersReduced]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--bg-deep)" }}
      aria-label="Hero — IPTV UK Subscription"
    >
      {/* ── Gradient orbs ─────────────────────────────────────────────── */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: orbTopY }} aria-hidden="true">
        <div
          className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            filter: "blur(90px)",
            opacity: "var(--orb-opacity)",
          }}
        />
      </motion.div>

      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: orbBottomY }} aria-hidden="true">
        <div
          className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, var(--cyan) 0%, transparent 70%)",
            filter: "blur(100px)",
            opacity: "var(--orb-opacity)",
          }}
        />
        <div
          className="absolute bottom-[20%] left-[-8%] w-[300px] h-[300px] rounded-full"
          style={{
            background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
            filter: "blur(80px)",
            opacity: "calc(var(--orb-opacity) * 0.6)",
          }}
        />
      </motion.div>

      {/* ── Grid pattern ──────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Floating particles ────────────────────────────────────────── */}
      {!prefersReduced && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {particles.map((p) => (
            <span
              key={p.id}
              className="particle"
              style={{
                left: `${p.x}%`,
                bottom: `-${p.size * 2}px`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                "--particle-opacity": p.opacity,
                animationDelay: `${p.delay}s`,
                animationDuration: `${p.duration}s`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      )}

      {/* ── Noise ─────────────────────────────────────────────────────── */}
      <NoiseSVG />

      {/* ── Content ───────────────────────────────────────────────────── */}
      <motion.div
        className="relative z-10 mx-auto max-w-[1200px] px-6 py-32 flex flex-col items-center text-center"
        style={{ y: contentY }}
      >
        {/* Live counter */}
        <LiveCounter />

        {/* H1 — split into letters for anime.js */}
        <h1
          ref={headlineRef}
          className="font-display font-bold tracking-[-0.04em] leading-[1.05] mb-6"
          style={{ fontSize: "clamp(2.8rem, 7.5vw, 5.5rem)" }}
        >
          <SplitText text="Premium " />{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, var(--accent) 0%, var(--cyan) 100%)" }}
          >
            <SplitText text="IPTV UK" />
          </span>
          <br />
          <SplitText text="Subscription" />
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-base sm:text-lg text-muted leading-relaxed max-w-[640px] mb-10"
          style={{ opacity: prefersReduced ? 1 : 0 }}
        >
          The most reliable <strong className="text-body font-medium">IPTV UK subscription</strong>{" "}
          on the market. Stream{" "}
          <strong className="text-body font-medium">35,000+ live channels</strong>,{" "}
          <strong className="text-body font-medium">100,000+ on-demand</strong> titles, and
          all the Premier League action in{" "}
          <strong className="text-body font-medium">4K Ultra HD</strong> — with
          anti-freeze buffer technology keeping every stream silky smooth.
        </p>

        {/* CTA buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center gap-3 mb-14"
          style={{ opacity: prefersReduced ? 1 : 0 }}
        >
          <Link
            href="/pricing/"
            className={cn(
              "magnetic inline-flex items-center justify-center h-12 px-8 rounded-[12px] text-sm font-semibold",
              "bg-accent text-white",
              "shadow-[0_0_24px_var(--accent-glow)]",
              "hover:bg-accent-hover hover:shadow-[0_0_40px_var(--accent-glow)]",
              "transition-all duration-300"
            )}
          >
            Start Free Trial →
          </Link>
          <Link
            href="/iptv-uk-channels/"
            className={cn(
              "magnetic inline-flex items-center justify-center h-12 px-8 rounded-[12px] text-sm font-semibold",
              "bg-transparent border border-line text-body",
              "hover:border-accent/50 hover:text-accent hover:bg-accent-dim",
              "transition-all duration-300"
            )}
          >
            View All Channels
          </Link>
        </div>

        {/* Trust badges */}
        <div
          ref={badgesRef}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          style={{ opacity: prefersReduced ? 1 : 0 }}
        >
          {TRUST_BADGES.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2">
              <span className="text-accent text-xs font-bold">{badge.icon}</span>
              <span className="text-xs text-subtle font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <ScrollIndicator />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, var(--bg-primary))" }}
        aria-hidden="true"
      />
    </section>
  );
}
