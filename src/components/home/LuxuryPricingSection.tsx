"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────

interface PricingPlan {
  id: string;
  tier: string;
  badge?: string;
  isRecommended?: boolean;
  monthlyPerMonth: number;
  monthlyTotal: number;
  monthlyPeriod: string;
  yearlyPerMonth: number;
  yearlyTotal: number;
  features: string[];
  highlighted: boolean;
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
  },
  {
    id: "silver",
    tier: "Silver",
    badge: "Recommended",
    isRecommended: true,
    monthlyPerMonth: 6.5,
    monthlyTotal: 39,
    monthlyPeriod: "6 months",
    yearlyPerMonth: 5.2,
    yearlyTotal: 62.4,
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
  },
  {
    id: "golden",
    tier: "Golden",
    badge: "Best Value",
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
  },
];

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
      className="inline-flex items-center p-1 bg-[#1a1a1a] rounded-full border border-[#2a2a2a]"
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
            className="relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200"
          >
            {active && (
              <motion.div
                layoutId="billing-pill-luxury"
                className="absolute inset-0 bg-[#0d9488] rounded-full"
                transition={{ type: "spring", bounce: 0.18, duration: 0.38 }}
              />
            )}
            <span
              className={cn(
                "relative z-10 flex items-center gap-2 whitespace-nowrap",
                active ? "text-white" : "text-[#666]"
              )}
            >
              {yearly ? "Yearly" : "Monthly"}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ─── Glowing Badge Component ──────────────────────────────────────────────

function GlowingBadge({
  children,
  variant = "teal",
}: {
  children: React.ReactNode;
  variant?: "teal" | "gold";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider",
        "animate-pulse-glow",
        variant === "teal"
          ? "bg-[#0d9488] text-white shadow-[0_0_20px_rgba(13,148,136,0.6),0_0_40px_rgba(13,148,136,0.3)]"
          : "bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-[0_0_20px_rgba(245,158,11,0.6),0_0_40px_rgba(245,158,11,0.3)]"
      )}
    >
      {children}
    </span>
  );
}

// ─── Pricing card ─────────────────────────────────────────────────────────

function PricingCard({
  plan,
  isYearly,
}: {
  plan: PricingPlan;
  isYearly: boolean;
}): React.ReactElement {
  const perMonth = isYearly ? plan.yearlyPerMonth : plan.monthlyPerMonth;
  const total = isYearly ? plan.yearlyTotal : plan.monthlyTotal;
  const period = isYearly ? "billed annually" : `billed every ${plan.monthlyPeriod}`;

  return (
    <div
      className={cn(
        "relative flex flex-col h-full rounded-2xl p-8 transition-all duration-300",
        plan.highlighted
          ? "bg-[#111] border-[#0d9488] border-2"
          : "bg-[#0a0a0a] border border-[#1f1f1f] hover:border-[#333]"
      )}
    >
      {/* Glow effect for highlighted card */}
      {plan.highlighted && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            boxShadow: "0 0 60px rgba(13,148,136,0.15), 0 0 100px rgba(13,148,136,0.1)",
          }}
        />
      )}

      {/* Badge */}
      {plan.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <GlowingBadge variant={plan.isRecommended ? "teal" : "gold"}>
            {plan.badge}
          </GlowingBadge>
        </div>
      )}

      {/* Tier name */}
      <div className="mb-6 pt-2">
        <h3 className="text-white text-lg font-semibold mb-1">{plan.tier}</h3>
        <p className="text-[#666] text-sm">
          {plan.id === "starter"
            ? "For people looking to explore."
            : plan.id === "silver"
            ? "For higher limits and power users."
            : "For fast moving teams and collaboration."}
        </p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isYearly ? "yearly" : "monthly"}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="text-4xl font-bold text-white tabular-nums"
            >
              £{perMonth.toFixed(2)}
            </motion.span>
          </AnimatePresence>
          <span className="text-[#666] text-sm">/month</span>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.p
            key={isYearly ? "yearly-total" : "monthly-total"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-[#555] text-xs mt-1 tabular-nums"
          >
            £{total.toFixed(2)} {period}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-3 flex-1 mb-8">
        {plan.features.map((feat) => (
          <li key={feat} className="flex items-start gap-3 text-sm text-[#999]">
            <svg
              className={cn(
                "w-4 h-4 mt-0.5 shrink-0",
                plan.highlighted ? "text-[#0d9488]" : "text-[#666]"
              )}
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M3 8L6.5 11.5L13 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <Link
        href="/pricing/"
        className={cn(
          "flex items-center justify-center h-12 rounded-full text-sm font-semibold transition-all duration-300",
          plan.highlighted
            ? "bg-white text-black hover:bg-[#f0f0f0]"
            : "bg-[#1a1a1a] text-white border border-[#333] hover:bg-[#222] hover:border-[#444]"
        )}
      >
        {plan.highlighted ? "Start a Silver plan" : "Get Started"}
        <svg
          className="w-4 h-4 ml-2"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M6 4L10 8L6 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────

export default function LuxuryPricingSection(): React.ReactElement {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className="relative py-24 bg-[#050505] overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(13,148,136,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#111] border border-[#222]">
            <GlowingBadge variant="teal">New</GlowingBadge>
            <span className="text-[#999] text-sm">
              Introducing Credit-Based Pricing
            </span>
            <Link href="/pricing/" className="text-[#999] hover:text-white text-sm flex items-center gap-1 transition-colors">
              Learn More
              <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none">
                <path d="M4 2L8 6L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Plans and Pricing
          </h2>
          <p className="text-[#666] text-lg max-w-md mx-auto leading-relaxed">
            Get started immediately for free. Upgrade for more credits, usage and
            collaboration.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <BillingToggle isYearly={isYearly} onChange={setIsYearly} />
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} isYearly={isYearly} />
          ))}
        </div>

        {/* Enterprise Section */}
        <div className="rounded-2xl bg-[#0a0a0a] border border-[#1f1f1f] p-8 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">Enterprise</h3>
              <p className="text-[#666] text-sm mb-6">
                For large companies that require additional security.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Training opt-out by default",
                  "SAML SSO",
                  "Priority access for better performance and no queues",
                  "Dedicated customer support",
                  "Access to v0 API",
                ].map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-[#999]"
                  >
                    <svg
                      className="w-4 h-4 mt-0.5 shrink-0 text-[#0d9488]"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8L6.5 11.5L13 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#1a1a1a] text-white border border-[#333] hover:bg-[#222] hover:border-[#444] transition-all duration-300 text-sm font-semibold"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for glowing animation */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(13,148,136,0.6), 0 0 40px rgba(13,148,136,0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(13,148,136,0.8), 0 0 60px rgba(13,148,136,0.4);
          }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
