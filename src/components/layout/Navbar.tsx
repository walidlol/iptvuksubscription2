"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/data";
import { cn } from "@/lib/utils";

const btnBase =
  "inline-flex h-9 items-center justify-center gap-2 rounded-[10px] px-4 text-sm font-semibold transition-all duration-300 select-none";

export default function Navbar(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line/50 bg-deep/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/brand/logo.svg"
            alt="IPTV UK Subscription"
            width={140}
            height={32}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-muted hover:text-body transition-colors rounded-lg hover:bg-card"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact/"
            className={cn(btnBase, "border border-line text-body hover:border-line-hover hover:bg-card")}
          >
            Contact
          </Link>
          <Link
            href="/pricing/"
            className={cn(btnBase, "bg-accent text-deep hover:bg-[#00cc6a]")}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-muted hover:text-body"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-line bg-deep/95 backdrop-blur-xl px-6 py-4">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-3 text-sm text-muted hover:text-body transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/contact/"
                className={cn(btnBase, "w-full border border-line text-body hover:border-line-hover hover:bg-card")}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/pricing/"
                className={cn(btnBase, "w-full bg-accent text-deep hover:bg-[#00cc6a]")}
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
