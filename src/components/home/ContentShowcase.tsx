"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { contentItems } from "@/lib/data";
import type { ContentType, ContentItem } from "@/types";
import { cn } from "@/lib/utils";

// ─── Constants ────────────────────────────────────────────────────────────

const SPRING = [0.16, 1, 0.3, 1] as const;

interface Tab {
  label: string;
  type: ContentType | "all";
}

const TABS: Tab[] = [
  { label: "All",        type: "all"    },
  { label: "Movies",     type: "movie"  },
  { label: "TV Shows",   type: "tvshow" },
  { label: "Live Sport", type: "sport"  },
  { label: "News",       type: "news"   },
];

// Fallback gradient per card (used when image fails to load)
const CARD_GRADIENTS: string[] = [
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

function getGradient(itemId: string): string {
  const idx = contentItems.findIndex((c) => c.id === itemId);
  return CARD_GRADIENTS[Math.max(0, idx) % CARD_GRADIENTS.length];
}

function getBadge(type: ContentType): { label: "LIVE" | "TRENDING"; isLive: boolean } {
  if (type === "sport" || type === "news") return { label: "LIVE", isLive: true };
  return { label: "TRENDING", isLive: false };
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

// ─── Content card ─────────────────────────────────────────────────────────

function ContentCard({ item }: { item: ContentItem }): React.ReactElement {
  const { label, isLive } = getBadge(item.type);
  const displayMeta = item.year?.toString() ?? item.frequency ?? "";

  return (
    <article
      className={cn(
        "group relative shrink-0 w-[196px] sm:w-[216px] h-[300px]",
        "rounded-[16px] overflow-hidden cursor-pointer snap-start",
        "border border-line",
        "hover:border-accent/40 hover:shadow-[0_0_24px_var(--accent-glow)]",
        "transition-all duration-300"
      )}
      aria-label={`Watch ${item.title} on IPTV UK subscription`}
    >
      {/* ── Background: real image or gradient fallback ───────────────── */}
      {item.image ? (
        <Image
          src={item.image}
          alt={`${item.title} — available on IPTV UK subscription`}
          fill
          sizes="216px"
          className="object-cover"
          onError={(e) => {
            // Hide broken image so gradient shows through
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{ background: getGradient(item.id) }}
        />
      )}

      {/* Gradient fallback behind image (shows if image fails) */}
      <div
        className="absolute inset-0 -z-10"
        style={{ background: getGradient(item.id) }}
        aria-hidden="true"
      />

      {/* Dark overlay to ensure text readability over real photos */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.15) 100%)" }}
        aria-hidden="true"
      />

      {/* ── Genre pill — top left ──────────────────────────────────────── */}
      <div className="absolute top-3 left-3 z-10">
        <span className="px-2 py-1 rounded-full text-[10px] font-body font-semibold text-white/90 bg-black/50 backdrop-blur-sm border border-white/10 leading-none">
          {item.genre}
        </span>
      </div>

      {/* ── Year / frequency badge — top right ────────────────────────── */}
      {displayMeta && (
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2 py-1 rounded-full text-[10px] font-body font-medium text-white/70 bg-black/40 backdrop-blur-sm leading-none">
            {displayMeta}
          </span>
        </div>
      )}

      {/* ── LIVE / TRENDING badge ──────────────────────────────────────── */}
      <div className="absolute bottom-[76px] left-3 z-10">
        <span
          className={cn(
            "inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-body font-bold uppercase tracking-[0.12em] leading-none",
            isLive
              ? "bg-accent/20 text-accent border border-accent/30"
              : "bg-white/10 text-white/60 border border-white/15"
          )}
        >
          {isLive && (
            <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 animate-pulse" />
          )}
          {label}
        </span>
      </div>

      {/* ── Title bar ─────────────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 px-3 pb-4 pt-6 z-10">
        <p className="text-[13px] font-body font-semibold text-white leading-snug line-clamp-2">
          {item.title}
        </p>
      </div>

      {/* ── Play overlay on hover ──────────────────────────────────────── */}
      <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <motion.div
          initial={false}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.2, ease: SPRING }}
        >
          <PlayIcon />
        </motion.div>
      </div>
    </article>
  );
}

// ─── ContentShowcase ──────────────────────────────────────────────────────

export default function ContentShowcase(): React.ReactElement {
  const [activeTab, setActiveTab] = useState<ContentType | "all">("all");

  const filtered =
    activeTab === "all"
      ? contentItems
      : contentItems.filter((item) => item.type === activeTab);

  return (
    <section className="py-24 overflow-hidden" aria-labelledby="content-heading">
      <div className="mx-auto max-w-[1200px] px-6">

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
        <div className="flex items-center gap-2 mb-8 flex-wrap" role="tablist" aria-label="Content categories">
          {TABS.map((tab) => (
            <button
              key={tab.type}
              role="tab"
              aria-selected={activeTab === tab.type}
              onClick={() => setActiveTab(tab.type)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-body font-medium transition-all duration-200",
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

      {/* ── Carousel ─────────────────────────────────────────────────────── */}
      <div
        className="no-scrollbar overflow-x-auto snap-x snap-mandatory pb-4"
        role="tabpanel"
      >
        <motion.div
          key={activeTab}
          className="flex gap-4 w-max px-6 sm:px-[max(24px,calc((100vw-1200px)/2+24px))]"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05 } },
          }}
        >
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden:   { opacity: 0, y: 20 },
                visible:  { opacity: 1, y: 0, transition: { duration: 0.4, ease: SPRING } },
              }}
            >
              <ContentCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
