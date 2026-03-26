"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { contentItems } from "@/lib/data";
import type { ContentType, ContentItem } from "@/types";
import { cn } from "@/lib/utils";

// ─── Per-item accent colors (for background shift) ────────────────────────

const ITEM_COLORS: Record<string, { bg: string; glow: string; label: string }> = {
  m1: { bg: "rgba(180,30,60,0.18)",   glow: "rgba(220,30,60,0.30)",   label: "Movie"    },
  m2: { bg: "rgba(140,90,20,0.18)",   glow: "rgba(180,120,20,0.28)",  label: "Movie"    },
  m3: { bg: "rgba(30,60,180,0.18)",   glow: "rgba(30,80,220,0.28)",   label: "Movie"    },
  m4: { bg: "rgba(20,140,100,0.18)",  glow: "rgba(20,180,120,0.28)",  label: "Movie"    },
  m5: { bg: "rgba(180,60,20,0.18)",   glow: "rgba(220,80,20,0.28)",   label: "Movie"    },
  t1: { bg: "rgba(180,20,140,0.18)",  glow: "rgba(220,20,180,0.30)",  label: "Series"   },
  t2: { bg: "rgba(80,30,160,0.18)",   glow: "rgba(110,40,210,0.30)",  label: "Series"   },
  t3: { bg: "rgba(20,100,160,0.18)",  glow: "rgba(20,130,210,0.28)",  label: "Series"   },
  t4: { bg: "rgba(160,60,20,0.18)",   glow: "rgba(210,80,20,0.28)",   label: "Series"   },
  t5: { bg: "rgba(20,140,60,0.18)",   glow: "rgba(20,180,80,0.28)",   label: "Series"   },
  s1: { bg: "rgba(20,160,60,0.18)",   glow: "rgba(20,220,80,0.32)",   label: "Live"     },
  s2: { bg: "rgba(20,120,200,0.18)",  glow: "rgba(20,160,255,0.32)",  label: "Live"     },
  s3: { bg: "rgba(200,80,20,0.18)",   glow: "rgba(255,100,20,0.32)",  label: "Live"     },
  s4: { bg: "rgba(20,60,180,0.18)",   glow: "rgba(20,80,230,0.32)",   label: "Live"     },
  s5: { bg: "rgba(180,20,20,0.18)",   glow: "rgba(230,20,20,0.32)",   label: "Live"     },
  n1: { bg: "rgba(20,80,180,0.18)",   glow: "rgba(20,100,230,0.28)",  label: "News"     },
  n2: { bg: "rgba(20,140,140,0.18)",  glow: "rgba(20,180,180,0.28)",  label: "News"     },
  n3: { bg: "rgba(20,140,60,0.18)",   glow: "rgba(20,180,80,0.28)",   label: "News"     },
  n4: { bg: "rgba(120,40,20,0.18)",   glow: "rgba(160,50,20,0.28)",   label: "News"     },
  n5: { bg: "rgba(60,20,140,0.18)",   glow: "rgba(80,20,180,0.28)",   label: "News"     },
};

const DEFAULT_COLOR = { bg: "rgba(255,45,85,0.10)", glow: "rgba(255,45,85,0.18)", label: "" };

// ─── Tabs ─────────────────────────────────────────────────────────────────

const TABS = [
  { label: "All",        type: "all"    as const },
  { label: "Movies",     type: "movie"  as const },
  { label: "TV Shows",   type: "tvshow" as const },
  { label: "Live Sport", type: "sport"  as const },
  { label: "News",       type: "news"   as const },
];

type TabType = ContentType | "all";

// ─── Fallback gradients ────────────────────────────────────────────────────

const CARD_GRADIENTS = [
  "linear-gradient(145deg, #1C1B4E 0%, #3D1082 100%)",
  "linear-gradient(145deg, #0B1E42 0%, #173A80 100%)",
  "linear-gradient(145deg, #1A280A 0%, #2E5214 100%)",
  "linear-gradient(145deg, #3A0C0C 0%, #7A1A1A 100%)",
  "linear-gradient(145deg, #1C1C40 0%, #38386C 100%)",
  "linear-gradient(145deg, #2C1400 0%, #6C3A00 100%)",
  "linear-gradient(145deg, #0A1E2A 0%, #14385A 100%)",
  "linear-gradient(145deg, #200E3A 0%, #4A1A78 100%)",
  "linear-gradient(145deg, #0E2A14 0%, #1A5A28 100%)",
  "linear-gradient(145deg, #281200 0%, #703400 100%)",
  "linear-gradient(145deg, #14102E 0%, #2E226A 100%)",
  "linear-gradient(145deg, #001A2A 0%, #00365A 100%)",
  "linear-gradient(145deg, #1A0A28 0%, #420F64 100%)",
  "linear-gradient(145deg, #0A200A 0%, #165A16 100%)",
  "linear-gradient(145deg, #281A0A 0%, #5A3A14 100%)",
  "linear-gradient(145deg, #0A0A2E 0%, #18186A 100%)",
  "linear-gradient(145deg, #2E0A0A 0%, #6A1414 100%)",
  "linear-gradient(145deg, #0A1A20 0%, #143050 100%)",
  "linear-gradient(145deg, #1C0A28 0%, #4A1464 100%)",
  "linear-gradient(145deg, #200E0E 0%, #502020 100%)",
];

function getGradient(idx: number): string {
  return CARD_GRADIENTS[idx % CARD_GRADIENTS.length];
}

// ─── Play icon ────────────────────────────────────────────────────────────

function PlayIcon(): React.ReactElement {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
      <circle cx="26" cy="26" r="25" stroke="white" strokeWidth="1.5" strokeOpacity="0.7" />
      <path d="M21 18L36 26L21 34V18Z" fill="white" fillOpacity="0.9" />
    </svg>
  );
}

// ─── Single card ─────────────────────────────────────────────────────────

function CarouselCard({
  item,
  position,  // -2..2 relative to center
  idx,
  onClick,
}: {
  item: ContentItem;
  position: number;
  idx: number;
  onClick: () => void;
}): React.ReactElement {
  const isCenter = position === 0;
  const absPos = Math.abs(position);
  const isLive = item.type === "sport" || item.type === "news";
  const displayMeta = item.year?.toString() ?? item.frequency ?? "";

  // Visual transforms based on position
  const scale   = isCenter ? 1 : Math.max(0.72, 1 - absPos * 0.14);
  const opacity = isCenter ? 1 : Math.max(0.3, 1 - absPos * 0.3);
  const zIndex  = 10 - absPos;
  const translateX = position * (isCenter ? 0 : 240);

  return (
    <motion.article
      layout
      animate={{
        scale,
        opacity,
        x: translateX,
        zIndex,
        filter: isCenter ? "brightness(1)" : `brightness(${0.6 + (1 - absPos * 0.2) * 0.4})`,
      }}
      transition={{ type: "spring", stiffness: 280, damping: 30 }}
      onClick={onClick}
      className={cn(
        "absolute left-1/2 -translate-x-1/2 cursor-pointer",
        "rounded-[20px] overflow-hidden",
        "border transition-colors duration-500",
        isCenter
          ? "w-[220px] sm:w-[260px] h-[330px] sm:h-[390px] border-accent/50 shadow-[0_0_50px_var(--accent-glow)]"
          : "w-[180px] sm:w-[210px] h-[270px] sm:h-[310px] border-line"
      )}
      style={{ zIndex }}
      aria-label={`Watch ${item.title}`}
    >
      {/* Image / gradient */}
      {item.image ? (
        <Image
          src={item.image}
          alt={`${item.title} on IPTV UK subscription`}
          fill
          sizes={isCenter ? "260px" : "210px"}
          className="object-cover"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
      ) : null}
      <div className="absolute inset-0 -z-10" style={{ background: getGradient(idx) }} />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.92) 35%, rgba(0,0,0,0.1) 100%)" }}
      />

      {/* Genre pill */}
      <div className="absolute top-3 left-3 z-10">
        <span className="px-2 py-1 rounded-full text-[10px] font-bold text-white/90 bg-black/50 backdrop-blur-sm border border-white/10">
          {item.genre}
        </span>
      </div>

      {/* Year */}
      {displayMeta && (
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2 py-1 rounded-full text-[10px] text-white/60 bg-black/40 backdrop-blur-sm">
            {displayMeta}
          </span>
        </div>
      )}

      {/* Live/Trending badge */}
      {isCenter && (
        <div className="absolute bottom-[80px] left-3 z-10">
          <span className={cn(
            "inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wide",
            isLive
              ? "bg-accent/20 text-accent border border-accent/30"
              : "bg-white/10 text-white/70 border border-white/15"
          )}>
            {isLive && <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />}
            {isLive ? "LIVE" : "TRENDING"}
          </span>
        </div>
      )}

      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-6 z-10">
        <p className={cn("font-semibold text-white leading-snug line-clamp-2",
          isCenter ? "text-[15px]" : "text-[12px]"
        )}>
          {item.title}
        </p>
        {isCenter && (
          <p className="text-[11px] text-white/50 mt-1">{item.genre}</p>
        )}
      </div>

      {/* Play overlay for center card */}
      {isCenter && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <motion.div whileHover={{ scale: 1.08 }} transition={{ duration: 0.15 }}>
            <PlayIcon />
          </motion.div>
        </div>
      )}
    </motion.article>
  );
}

// ─── ContentShowcase ──────────────────────────────────────────────────────

export default function ContentShowcase(): React.ReactElement {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [centerIdx, setCenterIdx] = useState(0);
  const autoRef   = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);

  const items =
    activeTab === "all"
      ? contentItems
      : contentItems.filter((it) => it.type === activeTab);

  // Reset center when tab changes
  useEffect(() => {
    setCenterIdx(0);
  }, [activeTab]);

  const advance = useCallback((dir: 1 | -1) => {
    setCenterIdx((prev) => (prev + dir + items.length) % items.length);
  }, [items.length]);

  // Auto-advance every 3.5s
  useEffect(() => {
    autoRef.current = setInterval(() => advance(1), 3500);
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [advance]);

  const resetAuto = (): void => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => advance(1), 3500);
  };

  const goTo = (idx: number): void => {
    setCenterIdx(idx);
    resetAuto();
  };

  const handlePrev = (): void => { advance(-1); resetAuto(); };
  const handleNext = (): void => { advance(1);  resetAuto(); };

  // Touch swipe
  const onTouchStart = (e: React.TouchEvent): void => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd   = (e: React.TouchEvent): void => {
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) { advance(dx < 0 ? 1 : -1); resetAuto(); }
  };

  // Active item for background color
  const activeItem  = items[centerIdx];
  const activeColor = activeItem ? (ITEM_COLORS[activeItem.id] ?? DEFAULT_COLOR) : DEFAULT_COLOR;

  // Cards visible: center ± 2
  const visibleCards = [-2, -1, 0, 1, 2].map((offset) => {
    const idx = (centerIdx + offset + items.length) % items.length;
    return { item: items[idx], position: offset, idx };
  });

  return (
    <section
      className="py-24 overflow-hidden relative transition-colors duration-700"
      aria-labelledby="content-heading"
      style={{
        background: `radial-gradient(ellipse 100% 80% at 50% 0%, ${activeColor.bg} 0%, var(--bg-primary) 65%)`,
      }}
    >
      {/* Dynamic glow orb behind carousel */}
      <div
        className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${activeColor.glow} 0%, transparent 70%)`,
          filter: "blur(80px)",
          opacity: 0.6,
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <p className="label-tag mb-4">Content Library</p>

        <h2
          id="content-heading"
          className="font-display font-bold tracking-[-0.03em] leading-[1.1] mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
        >
          Everything.{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, var(--accent) 0%, var(--cyan) 100%)" }}
          >
            One Subscription.
          </span>
        </h2>

        <p className="text-muted text-base sm:text-lg leading-relaxed max-w-[580px] mb-10">
          The UK&apos;s hottest movies, live sport, and live TV — all in one{" "}
          <strong className="text-body font-medium">IPTV UK subscription</strong>.
          No extra boxes. No hidden fees. Just everything, everywhere.
        </p>

        {/* Tabs */}
        <div className="flex items-center gap-2 mb-14 flex-wrap" role="tablist" aria-label="Content categories">
          {TABS.map((tab) => (
            <button
              key={tab.type}
              role="tab"
              aria-selected={activeTab === tab.type}
              onClick={() => { setActiveTab(tab.type); resetAuto(); }}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
                activeTab === tab.type
                  ? "bg-accent text-white shadow-[0_0_16px_var(--accent-glow)]"
                  : "bg-card text-muted border border-line hover:border-line-hover hover:text-body"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── 3D Carousel ────────────────────────────────────────────────── */}
      <div
        className="relative h-[420px] sm:h-[480px] overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        role="tabpanel"
        aria-label="Content carousel"
      >
        <AnimatePresence>
          {visibleCards.map(({ item, position, idx }) => (
            <CarouselCard
              key={`${activeTab}-${item.id}`}
              item={item}
              position={position}
              idx={idx}
              onClick={() => position === 0 ? undefined : goTo((centerIdx + position + items.length) % items.length)}
            />
          ))}
        </AnimatePresence>

        {/* Prev / Next arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-line flex items-center justify-center text-muted hover:text-body hover:border-accent/40 transition-all duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          aria-label="Next"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-line flex items-center justify-center text-muted hover:text-body hover:border-accent/40 transition-all duration-200"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* ── Dot navigation ─────────────────────────────────────────────── */}
      <div className="flex justify-center gap-1.5 mt-8 px-6" aria-label="Carousel position">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to item ${i + 1}`}
            className={cn(
              "rounded-full transition-all duration-300",
              i === centerIdx
                ? "w-6 h-1.5 bg-accent"
                : "w-1.5 h-1.5 bg-line hover:bg-muted"
            )}
          />
        ))}
      </div>

      {/* ── Active item title ───────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 mt-8">
        <AnimatePresence mode="wait">
          {activeItem && (
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <p className="font-display font-semibold text-body text-lg">{activeItem.title}</p>
              <p className="text-sm text-muted mt-1">{activeItem.genre} · {activeItem.year ?? activeItem.frequency}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
