"use client";

import { startTransition, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Nav items ────────────────────────────────────────────────────────────
//
// anchor: smooth-scroll target used only on the homepage ("/").
// On every other page the item falls back to href.

interface NavItem {
  label: string;
  href: string;
  anchor?: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Pricing",  href: "/pricing/",              anchor: "#pricing"  },
  { label: "Channels", href: "/iptv-uk-channels/",     anchor: "#channels" },
  { label: "Setup",    href: "/setup-guide/"                               },
  { label: "Blog",     href: "/blog/"                                       },
  { label: "FAQ",      href: "/faq/",                  anchor: "#faq"      },
];

// CLAUDE.md spring easing
const SPRING = [0.16, 1, 0.3, 1] as const;

// ─── Mobile menu animation ────────────────────────────────────────────────

const mobileMenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1 },
};

// ─── Component ────────────────────────────────────────────────────────────

export default function Header(): React.ReactElement {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Transparent → solid on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    startTransition(() => setMenuOpen(false));
  }, [pathname]);

  const resolveHref = (item: NavItem): string =>
    isHome && item.anchor ? item.anchor : item.href;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "bg-deep/90 backdrop-blur-xl border-line/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent border-transparent"
      )}
    >
      {/* ── Desktop bar ─────────────────────────────────────────────────── */}
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        {/* Logo + brand */}
        <Link
          href="/"
          className="flex items-center gap-2.5 shrink-0"
          aria-label="IPTV UK Subscription — home"
        >
          <Image
            src="/images/brand/logo-icon.svg"
            alt=""
            width={32}
            height={32}
            priority
          />
          <span className="font-display font-semibold text-[17px] tracking-tight leading-none">
            <span className="text-body">IPTV </span>
            <span className="text-accent">UK</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const href = resolveHref(item);
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={href}
                className={cn(
                  "px-3 py-2 text-sm rounded-lg transition-colors duration-200",
                  isActive
                    ? "text-body bg-card"
                    : "text-muted hover:text-body hover:bg-card"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact/"
            className="px-4 py-2 text-sm text-muted hover:text-body transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/pricing/"
            className={cn(
              "inline-flex items-center h-9 px-5 rounded-[10px] text-sm font-semibold",
              "bg-accent text-deep",
              "shadow-[0_0_16px_var(--accent-glow)]",
              "hover:bg-[#00cc6a] hover:shadow-[0_0_28px_var(--accent-glow)]",
              "transition-all duration-300"
            )}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-muted hover:text-body hover:bg-card transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0,   opacity: 1 }}
                exit={{   rotate:  90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X size={18} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate:  90, opacity: 0 }}
                animate={{ rotate: 0,   opacity: 1 }}
                exit={{   rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu size={18} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* ── Mobile menu ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3, ease: SPRING }}
            className="md:hidden overflow-hidden border-t border-line/50 bg-deep/95 backdrop-blur-xl"
          >
            <nav className="flex flex-col px-6 py-4 gap-0.5">
              {NAV_ITEMS.map((item, i) => {
                const href = resolveHref(item);
                const isActive = pathname === item.href;

                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, ease: SPRING }}
                  >
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        "flex items-center py-3 text-sm transition-colors border-b border-line/40 last:border-0",
                        isActive ? "text-body font-medium" : "text-muted hover:text-body"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="pt-4 pb-2 flex flex-col gap-2.5">
                <Link
                  href="/contact/"
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-center h-10 rounded-[10px] text-sm font-medium",
                    "border border-line text-body hover:border-line-hover hover:bg-card",
                    "transition-all duration-200"
                  )}
                >
                  Contact
                </Link>
                <Link
                  href="/pricing/"
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-center h-10 rounded-[10px] text-sm font-semibold",
                    "bg-accent text-deep",
                    "shadow-[0_0_16px_var(--accent-glow)]",
                    "hover:bg-[#00cc6a]",
                    "transition-all duration-200"
                  )}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
