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
}

type CellValue = boolean | string;

interface CompareRow {
  feature: string;
  starter: CellValue;
  silver: CellValue;
  golden: CellValue;
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
  },
  {
    id: "silver",
    tier: "Silver",
    badge: "POPULAR",
    badgeVariant: "accent",
    monthlyPerMonth: 6.50,
    monthlyTotal: 39,
    monthlyPeriod: "6 months",
    yearlyPerMonth: 5.20,
    yearlyTotal: 62.40,
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
  },
];

const COMPARE_ROWS: CompareRow[] = [
  { feature: "Live Channels",    starter: "35,000+", silver: "35,000+", golden: "35,000+" },
  { feature: "Stream Quality",   starter: "Full HD",  silver: "4K UHD",  golden: "4K UHD"  },
  { feature: "Connections",      starter: "1",        silver: "2",        golden: "2"        },
  { feature: "4K Ultra HD",      starter: false,      silver: true,       golden: true       },
  { feature: "Catch-up TV",      starter: false,      silver: true,       golden: true       },
  { feature: "VOD Library",      starter: false,      silver: true,       golden: true       },
  { feature: "PPV Sports",       starter: false,      silver: true,       golden: true       },
  { feature: "Anti-freeze Tech", starter: false,      silver: false,      golden: true       },
  { feature: "Support",          starter: "24/7",     silver: "Priority", golden: "Priority" },
];

// ─── JSON-LD schema ────────────────────────────────────────────────────────

const pricingSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "IPTV UK Subscription Plans",
  description:
    "Premium IPTV UK subscription plans with 35,000+ live channels, 4K streaming, and instant activation.",
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

// ─── Icons ────────────────────────────────────────────────────────────────

function CheckIcon({ className }: { className?: string }): React.ReactElement {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeOpacity="0.25" />
      <path
        d="M5.5 8.5l1.5 1.5 3.5-3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(): React.ReactElement {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="shrink-0 text-subtle mx-auto"
    >
      <path
        d="M10 4L4 10M4 4l6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Billing toggle ────────────────────────────────────────────────────────

function BillingToggle({
  isYearly,
  onChange,
}: {
  isYearly: boolean;
  onChange: (v: boolean) => void;
}): React.ReactElement {
  return (
    <div
      className="inline-flex items-center p-1 bg-card rounded-full border border-line gap-0.5"
      role="group"
      aria-label="Billing period"
    >
      {([false, true] as const).map((yearly) => {
        const active = isYearly === yearly;
        return (
          <button
            key={String(yearly)}
            onClick={() => onChange(yearly)}
            aria-pressed={active}
            className="relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200"
          >
            {active && (
              <motion.div
                layoutId="billing-pill"
                className="absolute inset-0 bg-accent rounded-full"
                transition={{ type: "spring", bounce: 0.18, duration: 0.38 }}
              />
            )}
            <span
              className={cn(
                "relative z-10 flex items-center gap-1.5 whitespace-nowrap",
                active ? "text-deep" : "text-muted"
              )}
            >
              {yearly ? (
                <>
                  Yearly
                  <span
                    className={cn(
                      "px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wide",
                      active
                        ? "bg-deep/20 text-deep"
                        : "bg-accent/15 text-accent"
                    )}
                  >
                    SAVE 20%
                  </span>
                </>
              ) : (
                "Monthly"
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ─── Pricing card ──────────────────────────────────────────────────────────

function PricingCard({
  plan,
  isYearly,
}: {
  plan: PricingPlan;
  isYearly: boolean;
}): React.ReactElement {
  const perMonth = isYearly ? plan.yearlyPerMonth : plan.monthlyPerMonth;
  const total    = isYearly ? plan.yearlyTotal    : plan.monthlyTotal;
  const period   = isYearly
    ? "billed annually"
    : `billed every ${plan.monthlyPeriod}`;

  const inner = (
    <div
      className={cn(
        "relative flex flex-col h-full rounded-[19px] px-7 pb-7 pt-8",
        "bg-card",
        !plan.premium && "border border-line",
        plan.highlighted &&
          "shadow-[0_0_48px_rgba(0,232,123,0.10)] border-accent/20"
      )}
    >
      {/* Tier badge — floats above card */}
      {plan.badge && (
        <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 whitespace-nowrap">
          <span
            className={cn(
              "px-3.5 py-1 rounded-full text-[11px] font-body font-bold uppercase tracking-[0.08em]",
              plan.badgeVariant === "gold"
                ? "bg-gold text-[#0A0A10]"
                : "bg-accent text-deep shadow-[0_0_16px_var(--color-accent-glow)]"
            )}
          >
            {plan.badge}
          </span>
        </div>
      )}

      {/* Tier label */}
      <p className="text-[11px] font-body font-bold uppercase tracking-[0.12em] text-muted mb-4">
        {plan.tier}
      </p>

      {/* Animated price */}
      <div className="flex items-end gap-1 mb-1">
        <span className="font-display font-bold leading-none text-body overflow-hidden" style={{ fontSize: "2.6rem" }}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isYearly ? "y" : "m"}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, ease: SPRING }}
              className="block"
            >
              £{perMonth.toFixed(2)}
            </motion.span>
          </AnimatePresence>
        </span>
        <span className="text-muted text-sm pb-1.5 leading-none">/mo</span>
      </div>

      {/* Billing period */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.p
          key={isYearly ? "yp" : "mp"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="text-xs text-subtle mb-6 tabular-nums"
        >
          £{total.toFixed(2)} {period}
        </motion.p>
      </AnimatePresence>

      <div className="border-t border-line mb-6" />

      {/* Feature list */}
      <ul className="flex flex-col gap-3 flex-1 mb-8">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-center gap-2.5 text-sm text-muted">
            <CheckIcon className="text-accent" />
            {feat}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href="/pricing/"
        className={cn(
          "flex items-center justify-center h-11 rounded-[12px] text-sm font-semibold",
          "transition-all duration-300",
          plan.premium
            ? "bg-accent text-deep shadow-[0_0_20px_var(--color-accent-glow)] hover:bg-[#00cc6a] hover:shadow-[0_0_36px_var(--color-accent-glow)]"
            : plan.highlighted
            ? "bg-accent text-deep hover:bg-[#00cc6a] shadow-[0_0_16px_var(--color-accent-glow)]"
            : "bg-card-hover border border-line text-body hover:border-line-hover"
        )}
      >
        Get Started →
      </Link>
    </div>
  );

  /* Golden: gradient border wrapper */
  if (plan.premium) {
    return (
      <div
        className="p-px rounded-[20px] h-full shadow-[0_0_52px_rgba(0,232,123,0.15)]"
        style={{
          background:
            "linear-gradient(145deg, var(--color-accent) 0%, var(--color-cyan) 50%, var(--color-gold) 100%)",
        }}
      >
        {inner}
      </div>
    );
  }

  return <div className="h-full rounded-[20px]">{inner}</div>;
}

// ─── Comparison table ──────────────────────────────────────────────────────

function TableCell({ value }: { value: CellValue }): React.ReactElement {
  if (value === true)  return <CheckIcon className="text-accent mx-auto" />;
  if (value === false) return <CrossIcon />;
  return <span className="text-xs text-muted font-medium tabular-nums">{value}</span>;
}

function ComparisonTable(): React.ReactElement {
  return (
    <div className="mt-16">
      <p className="text-center text-[11px] font-body font-bold uppercase tracking-[0.1em] text-subtle mb-5">
        Full Feature Comparison
      </p>
      <div className="no-scrollbar overflow-x-auto rounded-[16px] border border-line">
        <table className="w-full min-w-[500px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-line">
              <th
                scope="col"
                className="text-left py-4 px-5 text-subtle font-medium text-xs w-[44%]"
              >
                Feature
              </th>
              {PLANS.map((plan) => (
                <th
                  key={plan.id}
                  scope="col"
                  className={cn(
                    "py-4 px-4 text-center font-display font-semibold text-sm",
                    plan.premium ? "text-accent" : "text-body"
                  )}
                >
                  {plan.tier}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARE_ROWS.map((row, i) => (
              <tr
                key={row.feature}
                className={cn(
                  "border-b border-line last:border-0",
                  i % 2 === 0 ? "bg-card/40" : ""
                )}
              >
                <td className="py-3.5 px-5 text-subtle text-xs">{row.feature}</td>
                <td className="py-3.5 px-4 text-center">
                  <TableCell value={row.starter} />
                </td>
                <td className="py-3.5 px-4 text-center">
                  <TableCell value={row.silver} />
                </td>
                <td className="py-3.5 px-4 text-center">
                  <TableCell value={row.golden} />
                </td>
              </tr>
            ))}
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
      className="py-24 bg-surface"
      aria-labelledby="pricing-heading"
    >
      {/* Product + Offer JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingSchema) }}
      />

      <div className="mx-auto max-w-[1200px] px-6">

        {/* ── Header ──────────────────────────────────────────────────── */}
        <div className="text-center mb-14">
          <p className="label-tag mb-4">Pricing</p>
          <h2
            id="pricing-heading"
            className="font-display font-bold tracking-[-0.03em] leading-[1.05] mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Simple, Honest Pricing.
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-[520px] mx-auto mb-8 leading-relaxed">
            No hidden fees. No contracts. The full{" "}
            <strong className="text-body font-medium">
              IPTV UK subscription
            </strong>{" "}
            for every budget.
          </p>
          <BillingToggle isYearly={isYearly} onChange={setIsYearly} />
        </div>

        {/* ── Cards grid ──────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "flex flex-col",
                plan.highlighted
                  ? "md:scale-[1.03] md:z-10 relative"
                  : ""
              )}
            >
              <PricingCard plan={plan} isYearly={isYearly} />
            </div>
          ))}
        </div>

        {/* ── Comparison table ────────────────────────────────────────── */}
        <ComparisonTable />

      </div>
    </section>
  );
}
