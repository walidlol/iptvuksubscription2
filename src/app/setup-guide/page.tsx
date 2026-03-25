import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTABanner from "@/components/home/CTABanner";
import SetupTabs from "./SetupTabs";

const SITE_URL = "https://iptvuksubscription.uk";

export const metadata: Metadata = {
  title: "IPTV UK Setup Guide — Get Started in 5 Minutes",
  description:
    "How to set up your IPTV UK subscription in under 5 minutes. Step-by-step guides for Amazon Fire Stick, Smart TV, Android, iPhone, Windows and MAG Box.",
  alternates: { canonical: `${SITE_URL}/setup-guide/` },
  openGraph: {
    type: "website", locale: "en_GB", url: `${SITE_URL}/setup-guide/`,
    siteName: "IPTV UK Subscription",
    title: "IPTV UK Setup Guide — 5 Minute Installation on Any Device",
    description: "Step-by-step setup guides for Fire Stick, Smart TV, Android, iPhone, Windows and MAG Box.",
    images: [{ url: "/images/brand/og-image.jpg", width: 1200, height: 630 }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",        item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Setup Guide", item: `${SITE_URL}/setup-guide/` },
  ],
};

const RECOMMENDED_APPS = [
  { name: "TiviMate",         platform: "Android / Fire Stick", rating: "★★★★★", note: "Best EPG, catch-up & multi-screen. Our #1 pick." },
  { name: "IPTV Smarters Pro",platform: "All platforms",        rating: "★★★★☆", note: "Versatile cross-platform app. Great for multi-device use." },
  { name: "GSE Smart IPTV",   platform: "iOS / iPadOS",         rating: "★★★★★", note: "Best iOS option. Supports 4K and AirPlay." },
  { name: "Smart IPTV",       platform: "Samsung Smart TV",     rating: "★★★★☆", note: "One-time small activation fee. Reliable on Samsung TVs." },
  { name: "SS IPTV",          platform: "LG Smart TV",          rating: "★★★★☆", note: "Free and feature-rich for LG WebOS TVs." },
  { name: "VLC Media Player", platform: "Windows / Mac",        rating: "★★★☆☆", note: "Free desktop option. Limited EPG — use Smarters for better experience." },
];

const TROUBLESHOOT = [
  { issue: "Channels not loading",    fix: "Check your internet connection speed (need 10+ Mbps). Verify your M3U URL is entered correctly with no extra spaces. Try restarting your IPTV player app." },
  { issue: "Buffering during sport",  fix: "Switch to a wired ethernet connection if on Wi-Fi. Check your broadband speed — 4K requires 50 Mbps+. During peak times, try a different server region via your player app settings." },
  { issue: "EPG not showing",         fix: "In your player app settings, locate the EPG/XMLTV URL field and enter the EPG URL from your welcome email. Enable auto-refresh so the guide updates daily." },
  { issue: "App crashes on startup",  fix: "Clear the app's cache and data in your device settings. Uninstall and reinstall the app. Ensure your device firmware and the app are both on the latest version." },
  { issue: "Credentials rejected",    fix: "Copy-paste your credentials directly from the welcome email — avoid manual typing. Check for accidental spaces before/after the URL or password. Contact support if the issue persists." },
];

export default function SetupGuidePage(): React.ReactElement {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-deep">
        <div className="mx-auto max-w-[1200px] px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Setup Guide" }]} />
          <p className="label-tag mb-4">Setup Guide</p>
          <h1
            className="font-display font-bold tracking-[-0.04em] leading-[1.05] text-body mb-5"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}
          >
            Get Started in{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-cyan) 100%)" }}>
              5 Minutes
            </span>
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-[600px] mb-6">
            Setting up your <strong className="text-body font-medium">IPTV UK subscription</strong> is straightforward on any device. Select your device below for a tailored step-by-step guide. No technical knowledge required — if you can install an app, you can set this up.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-subtle">
            {["Amazon Fire Stick", "Smart TV", "Android", "iPhone / iPad", "Windows / Mac", "MAG Box"].map((d) => (
              <span key={d} className="px-3 py-1 rounded-full border border-line bg-card">{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Before you start ─────────────────────────────────────────────── */}
      <section className="py-12 bg-surface border-y border-line">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2 className="font-display font-semibold text-body text-lg mb-4">Before You Start</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { step: "1", title: "Subscribe",        desc: "Choose a plan on our Pricing page and complete payment. Credentials arrive by email within minutes." },
              { step: "2", title: "Check Your Email", desc: "Find the welcome email from IPTV UK Subscription. It contains your M3U URL, username, and password." },
              { step: "3", title: "Follow the Guide", desc: "Select your device below and follow the numbered steps. Most setups take under 5 minutes." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-5 rounded-[12px] bg-card border border-line">
                <span className="w-8 h-8 rounded-full bg-accent-dim text-accent text-sm font-bold flex items-center justify-center shrink-0">{item.step}</span>
                <div>
                  <p className="font-body font-semibold text-body text-sm mb-1">{item.title}</p>
                  <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Device tabs ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="label-tag mb-4">Device Guides</p>
          <h2 className="font-display font-bold tracking-[-0.03em] text-body mb-8" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
            Step-by-Step Setup for Every Device
          </h2>
          <SetupTabs />
        </div>
      </section>

      {/* ── Recommended apps ─────────────────────────────────────────────── */}
      <section className="py-20 bg-deep">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="label-tag mb-4">Recommended Apps</p>
          <h2 className="font-display font-bold tracking-[-0.03em] text-body mb-3" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
            Best IPTV Player Apps
          </h2>
          <p className="text-muted text-sm leading-relaxed max-w-[480px] mb-8">
            Our service works with any IPTV player that supports M3U playlists. Here are our tested recommendations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {RECOMMENDED_APPS.map((app) => (
              <div key={app.name} className="p-5 rounded-[14px] bg-card border border-line hover:border-accent/25 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-body font-semibold text-body text-sm">{app.name}</p>
                  <span className="text-xs text-[#FFB800] shrink-0 ml-2">{app.rating}</span>
                </div>
                <p className="text-xs text-accent mb-1">{app.platform}</p>
                <p className="text-xs text-muted leading-relaxed">{app.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Troubleshooting ──────────────────────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="label-tag mb-4">Troubleshooting</p>
          <h2 className="font-display font-bold tracking-[-0.03em] text-body mb-8" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
            Common Issues &amp; Fixes
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TROUBLESHOOT.map((t) => (
              <div key={t.issue} className="p-5 rounded-[14px] bg-card border border-line">
                <dt className="font-body font-semibold text-body text-sm mb-2">⚠ {t.issue}</dt>
                <dd className="text-xs text-muted leading-relaxed">{t.fix}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm text-subtle">
            Issue not listed here?{" "}
            <Link href="/contact/" className="text-accent hover:text-body transition-colors">Contact our 24/7 support team →</Link>
          </p>
        </div>
      </section>

      {/* ── Internal links ───────────────────────────────────────────────── */}
      <div className="py-10 bg-deep border-t border-line">
        <div className="mx-auto max-w-[1200px] px-6 flex flex-wrap gap-3 justify-center">
          {[{ label: "Pricing Plans", href: "/pricing/" }, { label: "Channel List", href: "/iptv-uk-channels/" }, { label: "FAQ", href: "/faq/" }, { label: "Contact Support", href: "/contact/" }].map((l) => (
            <Link key={l.href} href={l.href} className="px-5 py-2 text-sm text-muted border border-line rounded-full hover:border-accent/40 hover:text-body transition-all duration-200">{l.label}</Link>
          ))}
        </div>
      </div>

      <CTABanner />
    </main>
  );
}
