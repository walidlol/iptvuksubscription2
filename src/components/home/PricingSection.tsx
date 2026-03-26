"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Constants ────────────────────────────────────────────────────────────

const SPRING = [0.16, 1, 0.3, 1] as const;
const SITE_URL = "https://iptvuksubscription.uk";

// ─── Types ────────────────────────────────────────────────────────────────

interface PricingPlan {
  id: string;
  tier: string;
  badge?: string;
  badgeVariant?: "accent" | "gold";
  monthlyPerMonth: number;
  monthlyTotal: number;
  monthlyPeriod: string;
  yearlyPerMonth: number;
  yearlyTotal: number;
  features: string[];
  highlighted: boolean;
  premium: boolean;
  accentColor: string;
  glowColor: string;
  description: string;
}

type CellValue = boolean | string;

interface CompareRow {
  feature: string;
  icon: string;
  starter: CellValue;
  silver: CellValue;
  golden: CellValue;
  highlight?: boolean;
}

// ─── Plan data ────────────────────────────────────────────────────────────

const PLANS: PricingPlan[] = [
  {
    id: "starter",
    tier: "Starter",
    monthlyPerMonth: 9.67,
    monthlyTotal: 29,
    monthlyPeriod: "3 months",
    yearlyPerMonth: 7.74,
    yearlyTotal: 92.83,
    description: "Everything you need to start streaming today.",
    features: [
      "35,000+ live channels",
      "Full HD streaming",
      "1 device connection",
      "UK + 150 countries",
      "Instant activation",
      "24/7 live support",
    ],
    highlighted: false,
    premium: false,
    accentColor: "#7B7B9A",
    glowColor: "rgba(123,123,154,0.15)",
  },
  {
    id: "silver",
    tier: "Silver",
    badge: "MOST POPULAR",
    badgeVariant: "accent",
    monthlyPerMonth: 6.50,
    monthlyTotal: 39,
    monthlyPeriod: "6 months",
    yearlyPerMonth: 5.20,
    yearlyTotal: 62.40,
    description: "4K sport + catch-up for the whole household.",
    features: [
      "35,000+ live channels",
      "4K Ultra HD streams",
      "2 simultaneous devices",
      "7-day catch-up TV",
      "Full VOD library",
      "PPV sports included",
      "UK + 150 countries",
      "Priority 24/7 support",
    ],
    highlighted: true,
    premium: false,
    accentColor: "#FF2D55",
    glowColor: "rgba(255,45,85,0.22)",
  },
  {
    id: "golden",
    tier: "Golden",
    badge: "BEST VALUE",
    badgeVariant: "gold",
    monthlyPerMonth: 4.92,
    monthlyTotal: 59,
    monthlyPeriod: "12 months",
    yearlyPerMonth: 3.94,
    yearlyTotal: 47.25,
    description: "Maximum performance. Anti-freeze. Premier League in 4K.",
    features: [
      "35,000+ live channels",
      "4K Ultra HD streams",
      "2 simultaneous devices",
      "7-day catch-up TV",
      "Full VOD library",
      "PPV sports included",
      "Anti-freeze buffer tech",
      "Electronic programme guide",
      "Priority 24/7 support",
    ],
    highlighted: false,
    premium: true,
    accentColor: "#FFB800",
    glowColor: "rgba(255,184,0,0.22)",
  },
];

const COMPARE_ROWS: CompareRow[] = [
  { feature: "Live Channels",     icon: "📺", starter: "35,000+",  silver: "35,000+",   golden: "35,000+",  },
  { feature: "Stream Quality",    icon: "🎥", starter: "Full HD",   silver: "4K UHD",    golden: "4K UHD",   highlight: true },
  { feature: "Connections",       icon: "🔌", starter: "1 screen", silver: "2 screens", golden: "2 screens" },
  { feature: "4K Ultra HD",       icon: "⚡", starter: false,       silver: true,        golden: true,       highlight: true },
  { feature: "Catch-up TV",       icon: "⏮", starter: false,       silver: true,        golden: true        },
  { feature: "VOD Library",       icon: "🎬", starter: false,       silver: true,        golden: true        },
  { feature: "PPV Sports",        icon: "🥊", starter: false,       silver: true,        golden: true,       highlight: true },
  { feature: "Anti-freeze Tech",  icon: "🧊", starter: false,       silver: false,       golden: true,       highlight: true },
  { feature: "Full EPG",          icon: "📅", starter: false,       silver: true,        golden: true        },
  { feature: "Support",           icon: "💬", starter: "24/7",      silver: "Priority",  golden: "Priority"  },
];

// ─── JSON-LD ──────────────────────────────────────────────────────────────

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IPTV UK Subscription Plans",
  description: "Premium IPTV UK subscription plans with 35,000+ live channels, 4K streaming, and instant activation.",
  itemListElement: PLANS.map((plan, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: `IPTV UK Subscription — ${plan.tier}`,
      description: `${plan.monthlyPeriod} IPTV UK subscription. ${plan.features.slice(0, 2).join(", ")}.`,
      brand: { "@type": "Brand", name: "IPTV UK Subscription" },
      offers: {
        "@type": "Offer",
        price: plan.monthlyTotal.toFixed(2),
        priceCurrency: "GBP",
        priceValidUntil: "2026-12-31",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/pricing/`,
        seller: { "@type": "Organization", name: "IPTV UK Subscription" },
      },
    },
  })),
};

// ─── Billing toggle ────────────────────────────────────────────────────────

function BillingToggle({ isYearly, onChange }: { isYearly: boolean; onChange: (v: boolean) => void }): React.ReactElement {
  return (
    <div className="inline-flex items-center p-1.5 bg-card rounded-full border border-line gap-0.5" role="group" aria-label="Billing period">
      {([false, true] as const).map((yearly) => {
        const active = isYearly === yearly;
        return (
          <button
            key={String(yearly)}
            onClick={() => onChange(yearly)}
            aria-pressed={active}
            className="relative px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200"
          >
            {active && (
              <motion.div
                layoutId="billing-pill"
                className="absolute inset-0 bg-accent rounded-full"
                transition={{ type: "spring", bounce: 0.18, duration: 0.38 }}
              />
            )}
            <span className={cn("relative z-10 flex items-center gap-2 whitespace-nowrap", active ? "text-white" : "text-muted")}>
              {yearly ? (
                <>
                  Yearly
                  <span className={cn("px-1.5 py-0.5 rounded text-[10px] font-bold tracking-wide", active ? "bg-white/20 text-white" : "bg-accent/15 text-accent")}>
                    SAVE 20%
                  </span>
                </>
              ) : "Monthly"}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ─── Pricing card ─────────────────────────────────────────────────────────

function PricingCard({ plan, isYearly }: { plan: PricingPlan; isYearly: boolean }): React.ReactElement {
  const perMonth = isYearly ? plan.yearlyPerMonth : plan.monthlyPerMonth;
  const total    = isYearly ? plan.yearlyTotal    : plan.monthlyTotal;
  const period   = isYearly ? "billed annually" : `billed every ${plan.monthlyPeriod}`;

  const inner = (
    <div
      className={cn(
        "relative flex flex-col h-full rounded-[22px] px-7 pb-7 pt-9 overflow-hidden",
        plan.highlighted ? "bg-card border-0" : "bg-card border border-line"
      )}
    >
      {/* Background tint for highlighted */}
      {plan.highlighted && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 120% 60% at 50% 0%, ${plan.glowColor} 0%, transparent 70%)` }}
          aria-hidden="true"
        />
      )}

      {/* Golden: sparkle top decoration */}
      {plan.premium && (
        <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[22px]" style={{ background: "linear-gradient(90deg, var(--accent) 0%, var(--cyan) 50%, var(--gold) 100%)" }} aria-hidden="true" />
      )}

      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-[15px] left-1/2 -translate-x-1/2 whitespace-nowrap z-10">
          <span className={cn(
            "px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.1em]",
            plan.badgeVariant === "gold"
              ? "text-[#0A0A10]"
              : "text-white shadow-[0_0_20px_var(--accent-glow)]",
          )}
          style={{
            background: plan.badgeVariant === "gold"
              ? "linear-gradient(135deg, #FFB800, #FFDB4D)"
              : "var(--accent)",
          }}>
            {plan.badge}
          </span>
        </div>
      )}

      {/* Tier + description */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-1">
          <span
            className="text-[11px] font-bold uppercase tracking-[0.14em]"
            style={{ color: plan.accentColor }}
          >
            {plan.tier}
          </span>
        </div>
        <p className="text-xs text-muted leading-relaxed">{plan.description}</p>
      </div>

      {/* Price */}
      <div className="mb-1">
        <div className="flex items-end gap-1">
          <span className="font-display font-bold leading-none overflow-hidden" style={{ fontSize: "3rem", color: plan.premium ? plan.accentColor : "var(--text-primary)" }}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isYearly ? "y" : "m"}
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.2, ease: SPRING }}
                className="block"
              >
                £{perMonth.toFixed(2)}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="text-muted text-sm pb-2">/mo</span>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={isYearly ? "yp" : "mp"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-xs text-subtle tabular-nums"
          >
            £{total.toFixed(2)} {period}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="border-t border-line my-6" />

      {/* Features */}
      <ul className="flex flex-col gap-3 flex-1 mb-8">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-center gap-2.5 text-sm text-muted">
            <span className="shrink-0 w-4 h-4 rounded-full flex items-center justify-center" style={{ background: `${plan.accentColor}20`, color: plan.accentColor }}>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                <path d="M1.5 4L3 5.5L6.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {feat}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/pricing/"
        className={cn(
          "flex items-center justify-center h-12 rounded-[12px] text-sm font-bold",
          "transition-all duration-300 group"
        )}
        style={{
          background: plan.premium
            ? "linear-gradient(135deg, var(--accent) 0%, var(--cyan) 50%, var(--gold) 100%)"
            : plan.highlighted
            ? "var(--accent)"
            : "var(--bg-card-hover)",
          color: plan.premium || plan.highlighted ? "#fff" : "var(--text-primary)",
          boxShadow: plan.premium
            ? `0 0 28px ${plan.glowColor}, 0 4px 24px rgba(0,0,0,0.4)`
            : plan.highlighted
            ? `0 0 20px var(--accent-glow)`
            : "none",
          border: !plan.premium && !plan.highlighted ? "1px solid var(--border)" : "none",
        }}
      >
        Get Started
        <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200 inline-block">→</span>
      </Link>
    </div>
  );

  if (plan.premium) {
    return (
      <div
        className="p-px rounded-[23px] h-full"
        style={{
          background: "linear-gradient(145deg, var(--accent) 0%, var(--cyan) 50%, var(--gold) 100%)",
          boxShadow: `0 0 60px ${plan.glowColor}`,
        }}
      >
        {inner}
      </div>
    );
  }

  if (plan.highlighted) {
    return (
      <div
        className="p-px rounded-[23px] h-full"
        style={{
          background: "linear-gradient(145deg, var(--accent) 0%, rgba(255,107,53,0.6) 100%)",
          boxShadow: `0 0 40px ${plan.glowColor}`,
        }}
      >
        {inner}
      </div>
    );
  }

  return <div className="h-full rounded-[23px]">{inner}</div>;
}

// ─── Interactive comparison table ─────────────────────────────────────────

function ComparisonTable(): React.ReactElement {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const ROW_DETAIL: Record<string, string> = {
    "4K Ultra HD":       "Stream select Premier League matches, Sky Cinema Premiere, and Sky Sports F1 in genuine 2160p — not upscaled. Requires a 4K-compatible device and 50 Mbps+ connection.",
    "Catch-up TV":       "Rewind up to 7 days on supported channels. Never miss a goal, episode, or breaking news segment again. Works in TiviMate and IPTV Smarters.",
    "PPV Sports":        "Major boxing, UFC, and exclusive PPV events are included at no extra cost. No per-event fees — unlike Sky Box Office or TNT Sports PPV.",
    "Anti-freeze Tech":  "Our proprietary buffer management pre-loads stream frames in real time. During high-demand events like Premier League kick-offs, streams stay smooth while others freeze.",
    "Stream Quality":    "HD (1080p) on Starter. Genuine 4K Ultra HD on Silver and Golden plans — broadcast-quality delivery, not upscaled.",
  };

  return (
    <div className="mt-20">
      <div className="text-center mb-8">
        <p className="label-tag mb-3">Plan Comparison</p>
        <h3 className="font-display font-bold text-body tracking-[-0.02em]" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
          Full Feature Comparison
        </h3>
        <p className="text-muted text-sm mt-2">Click any feature row to learn more. Hover a column to highlight.</p>
      </div>

      <div className="no-scrollbar overflow-x-auto rounded-[20px] border border-line">
        <table className="w-full min-w-[520px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-line">
              <th scope="col" className="text-left py-5 px-6 text-subtle font-medium text-xs w-[44%]">
                Feature
              </th>
              {PLANS.map((plan) => (
                <th
                  key={plan.id}
                  scope="col"
                  onMouseEnter={() => setHoveredPlan(plan.id)}
                  onMouseLeave={() => setHoveredPlan(null)}
                  className={cn(
                    "py-5 px-4 text-center cursor-pointer transition-colors duration-200 rounded-t-lg",
                    hoveredPlan === plan.id ? "bg-accent-dim" : ""
                  )}
                >
                  <span
                    className="font-display font-bold text-base block mb-0.5"
                    style={{ color: hoveredPlan === plan.id ? plan.accentColor : "var(--text-primary)" }}
                  >
                    {plan.tier}
                  </span>
                  <span className="text-[11px] text-subtle font-normal">
                    from £{plan.yearlyPerMonth.toFixed(2)}/mo
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARE_ROWS.map((row, i) => {
              const hasDetail = !!ROW_DETAIL[row.feature];
              const isExpanded = expandedRow === row.feature;

              return (
                <>
                  <tr
                    key={row.feature}
                    onClick={() => hasDetail && setExpandedRow(isExpanded ? null : row.feature)}
                    className={cn(
                      "border-b border-line last:border-0 transition-colors duration-150",
                      i % 2 === 0 ? "bg-card/30" : "",
                      row.highlight ? "bg-accent-dim/30" : "",
                      hasDetail ? "cursor-pointer hover:bg-accent-dim/40" : ""
                    )}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{row.icon}</span>
                        <span className={cn("text-xs", row.highlight ? "text-body font-semibold" : "text-subtle")}>
                          {row.feature}
                        </span>
                        {hasDetail && (
                          <motion.span
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-subtle text-xs ml-auto"
                          >
                            ▾
                          </motion.span>
                        )}
                      </div>
                    </td>
                    {(["starter", "silver", "golden"] as const).map((planId) => {
                      const plan = PLANS.find((p) => p.id === planId)!;
                      const value = row[planId];
                      const isHovered = hoveredPlan === planId;
                      return (
                        <td
                          key={planId}
                          className={cn("py-4 px-4 text-center transition-colors duration-200", isHovered ? "bg-accent-dim/30" : "")}
                        >
                          {value === true ? (
                            <span
                              className="inline-flex items-center justify-center w-6 h-6 rounded-full"
                              style={{ background: `${plan.accentColor}20`, color: plan.accentColor }}
                            >
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                                <path d="M2 5L4 7L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                          ) : value === false ? (
                            <span className="inline-flex items-center justify-center w-5 h-5 text-subtle">
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                                <path d="M2.5 2.5L7.5 7.5M7.5 2.5L2.5 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                              </svg>
                            </span>
                          ) : (
                            <span
                              className="text-xs font-semibold tabular-nums"
                              style={{ color: isHovered ? plan.accentColor : "var(--text-secondary)" }}
                            >
                              {value}
                            </span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                  {/* Expandable detail row */}
                  <AnimatePresence>
                    {isExpanded && ROW_DETAIL[row.feature] && (
                      <motion.tr
                        key={`${row.feature}-detail`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="border-b border-line bg-accent-dim/20"
                      >
                        <td colSpan={4} className="px-6 py-3">
                          <p className="text-xs text-muted leading-relaxed">{ROW_DETAIL[row.feature]}</p>
                        </td>
                      </motion.tr>
                    )}
                  </AnimatePresence>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── PricingSection ────────────────────────────────────────────────────────

export default function PricingSection(): React.ReactElement {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section
      id="pricing"
      className="relative py-28 overflow-hidden"
      aria-labelledby="pricing-heading"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Background accent orbs */}
      <div
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--accent-dim) 0%, transparent 65%)", filter: "blur(100px)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,184,0,0.06) 0%, transparent 70%)", filter: "blur(80px)" }}
        aria-hidden="true"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="text-center mb-16">
          <p className="label-tag mb-4">Pricing</p>
          <h2
            id="pricing-heading"
            className="font-display font-bold tracking-[-0.04em] leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)" }}
          >
            Less Than a{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(135deg, var(--accent) 0%, var(--cyan) 60%, var(--gold) 100%)" }}
            >
              Coffee a Month
            </span>
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-[560px] mx-auto mb-3 leading-relaxed">
            Sky charges £75+/month for a similar package. Our{" "}
            <strong className="text-body font-medium">IPTV UK subscription</strong>{" "}
            starts at just £4.92/mo — no contracts, no auto-renewals, 7-day money back.
          </p>

          {/* Social proof bar */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10 mt-6">
            {[
              { v: "48,000+", l: "Active subscribers" },
              { v: "4.9★",    l: "Trustpilot rating"  },
              { v: "99.9%",   l: "Uptime SLA"          },
              { v: "7-day",   l: "Money-back guarantee" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col items-center">
                <span className="font-display font-bold text-body text-lg leading-none">{s.v}</span>
                <span className="text-[11px] text-subtle mt-0.5">{s.l}</span>
              </div>
            ))}
          </div>

          <BillingToggle isYearly={isYearly} onChange={setIsYearly} />
        </div>

        {/* ── Cards ───────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "flex flex-col transition-transform duration-300",
                plan.highlighted ? "md:scale-[1.04] md:z-10 relative" : ""
              )}
            >
              <PricingCard plan={plan} isYearly={isYearly} />
            </div>
          ))}
        </div>

        {/* ── Bottom note ─────────────────────────────────────────────── */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-subtle">
          {["✓ No auto-renewals", "✓ 7-day money-back", "✓ Instant activation", "✓ All prices include VAT"].map((note) => (
            <span key={note} className="flex items-center gap-1">{note}</span>
          ))}
        </div>

        {/* ── Comparison table ────────────────────────────────────────── */}
        <ComparisonTable />

      </div>
    </section>
  );
}
