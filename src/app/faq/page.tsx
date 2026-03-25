import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTABanner from "@/components/home/CTABanner";
import FAQAccordion from "./FAQAccordion";
import { ALL_FAQS } from "./faqData";

const SITE_URL = "https://iptvuksubscription.uk";

export const metadata: Metadata = {
  title: "IPTV UK Subscription FAQ — 20+ Questions Answered",
  description:
    "Answers to the most common IPTV UK subscription questions — devices, channels, setup, billing, streaming quality, and legal. Updated 2026.",
  alternates: { canonical: `${SITE_URL}/faq/` },
  openGraph: {
    type: "website", locale: "en_GB", url: `${SITE_URL}/faq/`,
    siteName: "IPTV UK Subscription",
    title: "IPTV UK Subscription FAQ — Every Question Answered",
    description: "Find answers about channels, devices, setup, billing, streaming quality and legality for your IPTV UK subscription.",
    images: [{ url: "/images/brand/og-image.jpg", width: 1200, height: 630 }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",         item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "FAQ",          item: `${SITE_URL}/faq/` },
  ],
};

export default function FAQPage(): React.ReactElement {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-deep">
        <div className="mx-auto max-w-[1200px] px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} />
          <p className="label-tag mb-4">FAQ</p>
          <h1
            className="font-display font-bold tracking-[-0.04em] leading-[1.05] text-body mb-5"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}
          >
            IPTV UK Subscription{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-cyan) 100%)" }}>
              FAQ
            </span>
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-[640px] mb-6">
            Everything you need to know about your <strong className="text-body font-medium">IPTV UK subscription</strong> — devices, channels, setup, billing, streaming quality, and more. Can&apos;t find your answer? Our 24/7 support team is one message away.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/pricing/" className="inline-flex items-center h-10 px-5 rounded-[10px] text-sm font-semibold bg-accent text-deep shadow-[0_0_16px_var(--color-accent-glow)] hover:bg-[#00cc6a] transition-all duration-300">
              View Pricing →
            </Link>
            <Link href="/contact/" className="inline-flex items-center h-10 px-5 rounded-[10px] text-sm font-medium border border-line text-muted hover:border-accent/40 hover:text-body transition-all duration-200">
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      {/* ── Quick stats ───────────────────────────────────────────────────── */}
      <section className="py-10 bg-surface border-y border-line">
        <div className="mx-auto max-w-[1200px] px-6">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { value: "20+", label: "Questions answered" },
              { value: "<1hr", label: "Support response time" },
              { value: "24/7", label: "Support availability" },
              { value: "7-day", label: "Money-back guarantee" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 p-4 rounded-[12px] bg-card border border-line">
                <dt className="font-display font-bold text-xl text-accent leading-none tabular-nums">{stat.value}</dt>
                <dd className="text-xs font-body text-subtle">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── FAQ accordion ────────────────────────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[860px] px-6">
          <p className="label-tag mb-4">All Questions</p>
          <h2 className="font-display font-bold tracking-[-0.03em] text-body mb-3" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
            Frequently Asked Questions
          </h2>
          <p className="text-muted text-sm leading-relaxed max-w-[480px] mb-10">
            Browse all categories below. Use your browser&apos;s search (Ctrl+F / Cmd+F) to find a specific topic quickly.
          </p>
          <FAQAccordion />
          <p className="mt-10 text-sm text-subtle text-center">
            Still have questions?{" "}
            <Link href="/contact/" className="text-accent hover:text-body transition-colors">
              Contact our 24/7 support team →
            </Link>
          </p>
        </div>
      </section>

      {/* ── Popular topics ───────────────────────────────────────────────── */}
      <section className="py-20 bg-deep">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="label-tag mb-4 text-center">Popular Topics</p>
          <h2 className="font-display font-bold tracking-[-0.03em] text-body text-center mb-10" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
            What People Ask Most
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                topic: "Free Trial",
                summary: "Yes — we offer a 24-hour free trial with no credit card required. Contact our support team via live chat to activate yours instantly.",
                link: "/contact/",
                linkLabel: "Request free trial →",
              },
              {
                topic: "Sky Sports Included?",
                summary: "Every plan includes all Sky Sports channels — Sky Sports PL, Football, F1, Golf, Cricket, Arena, Racing — plus TNT Sports 1–4 and Eurosport.",
                link: "/iptv-uk-channels/",
                linkLabel: "Browse all channels →",
              },
              {
                topic: "Which Devices Work?",
                summary: "Amazon Fire Stick, Android TV boxes, Samsung and LG Smart TVs, iPhone, iPad, Windows, Mac, MAG boxes and Kodi all work with your subscription.",
                link: "/setup-guide/",
                linkLabel: "View setup guides →",
              },
              {
                topic: "Setup Time",
                summary: "Most customers are streaming within 5 minutes of subscribing. Your M3U URL and credentials arrive by email — paste them into any IPTV player app.",
                link: "/setup-guide/",
                linkLabel: "How to set up →",
              },
              {
                topic: "Pricing & Plans",
                summary: "Plans start from £4.92/month on the annual Golden plan. All plans include 35,000+ channels, HD streaming, and the full VOD library from day one.",
                link: "/pricing/",
                linkLabel: "Compare plans →",
              },
              {
                topic: "Buffering & Quality",
                summary: "On a stable 20 Mbps+ connection, our anti-freeze buffer technology prevents dropouts. 4K requires 50 Mbps+. Wired ethernet always beats Wi-Fi for sport.",
                link: "/setup-guide/",
                linkLabel: "Fix buffering →",
              },
            ].map((item) => (
              <div key={item.topic} className="p-6 rounded-[16px] bg-card border border-line hover:border-accent/25 transition-colors">
                <h3 className="font-display font-semibold text-body text-base mb-3">{item.topic}</h3>
                <p className="text-xs text-muted leading-relaxed mb-4">{item.summary}</p>
                <Link href={item.link} className="text-xs text-accent hover:text-body transition-colors">{item.linkLabel}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal links ───────────────────────────────────────────────── */}
      <div className="py-10 bg-surface border-t border-line">
        <div className="mx-auto max-w-[1200px] px-6 flex flex-wrap gap-3 justify-center">
          {[
            { label: "Pricing Plans", href: "/pricing/" },
            { label: "Channel List", href: "/iptv-uk-channels/" },
            { label: "Setup Guide", href: "/setup-guide/" },
            { label: "Contact Support", href: "/contact/" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="px-5 py-2 text-sm text-muted border border-line rounded-full hover:border-accent/40 hover:text-body transition-all duration-200">
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <CTABanner />
    </main>
  );
}
