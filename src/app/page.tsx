import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import ContentShowcase from "@/components/home/ContentShowcase";
import PricingSection from "@/components/home/PricingSection";
import DeviceSection from "@/components/home/DeviceSection";
import FAQ from "@/components/home/FAQ";
import CTABanner from "@/components/home/CTABanner";

// ─── Schema ───────────────────────────────────────────────────────────────

const SITE_URL = "https://iptvuksubscription.uk";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "IPTV UK Subscription",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?s={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

// ─── Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "IPTV UK Subscription | 35,000+ Channels | Premium UK IPTV 2026",
  description:
    "Best IPTV UK subscription — 35,000+ live channels, 4K Ultra HD, Premier League & Sky Sports. Instant activation, no contracts. From £4.92/mo. 7-day money back.",
  keywords: [
    "iptv uk subscription",
    "iptv subscription uk",
    "iptv uk",
    "best iptv uk",
    "buy iptv uk",
    "uk iptv service",
    "premier league iptv",
    "sky sports iptv uk",
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "IPTV UK Subscription",
    title: "IPTV UK Subscription | 35,000+ Channels from £4.92/mo",
    description:
      "Stream 35,000+ live channels, 4K sport & 100,000+ on-demand titles. Instant activation, no contracts. The UK's most reliable IPTV subscription.",
    images: [{ url: "/images/brand/og-image.jpg", width: 1200, height: 630, alt: "IPTV UK Subscription — Premium Streaming Channels" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV UK Subscription | 35,000+ Channels",
    description: "Stream 35,000+ live channels & 100,000+ on-demand. From £4.92/mo. Instant activation.",
    images: ["/images/brand/og-image.jpg"],
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────

export default function HomePage(): React.ReactElement {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <Hero />
      <StatsBar />
      <ContentShowcase />
      <PricingSection />
      <DeviceSection />
      <FAQ />
      <CTABanner />
    </>
  );
}
