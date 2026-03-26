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

      {/* ── Detailed topic guides ────────────────────────────────────────── */}
      <section className="py-20 bg-deep">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="label-tag mb-4">In-Depth Answers</p>
          <h2 className="font-display font-bold tracking-[-0.03em] text-body mb-4" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
            Common Questions, Detailed Answers
          </h2>
          <p className="text-muted text-sm leading-relaxed max-w-[600px] mb-10">
            These are the topics new subscribers ask about most. Each answer is written to give you the full picture — not just a one-liner.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col gap-5">
              <div className="p-6 rounded-[16px] bg-card border border-line">
                <h3 className="font-display font-semibold text-body text-base mb-3">How does IPTV compare to Sky TV?</h3>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  Sky TV delivers television via satellite dish or broadband and requires proprietary hardware (Sky Q or Sky Stream box). Their packages are sold as rolling contracts with automatic annual price increases, and full sports and cinema access requires multiple bolt-ons that can push the monthly bill above £80.
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  Our <strong className="text-body font-medium">IPTV UK subscription</strong> delivers the same channels — including all Sky Sports and Sky Cinema — over your existing broadband connection to any compatible device you already own. No satellite dish, no hardware rental, no 18-month contract. At £4.92/month on an annual Golden plan, you get the same live sport and cinema package Sky charges £70–80/month for.
                </p>
              </div>
              <div className="p-6 rounded-[16px] bg-card border border-line">
                <h3 className="font-display font-semibold text-body text-base mb-3">What happens if a channel goes down?</h3>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  Occasionally, a channel feed may experience a temporary interruption due to broadcast changes, EPG updates, or source maintenance. When this happens, our technical team is typically aware before customers report it — we monitor all channels continuously.
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  For critical live events (Premier League matches, Champions League nights), we operate redundant feeds — if one stream source has an issue, a backup activates automatically. Planned maintenance is never scheduled during major sporting events. If you encounter an issue on a specific channel, contact our 24/7 support team via live chat — most channel issues are resolved within the hour.
                </p>
              </div>
              <div className="p-6 rounded-[16px] bg-card border border-line">
                <h3 className="font-display font-semibold text-body text-base mb-3">Can I use the service on more than one TV at the same time?</h3>
                <p className="text-sm text-muted leading-relaxed">
                  Silver and Golden plans support two simultaneous connections — meaning two different devices can stream different channels at the same time. A Starter plan supports one active stream. Note that &quot;connections&quot; means active streams, not device registrations — you can install our service on multiple devices and the connection limit only applies to simultaneous playback. If your household watches football in the living room while someone else uses a tablet in the kitchen, Silver or Golden is the right choice.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="p-6 rounded-[16px] bg-card border border-line">
                <h3 className="font-display font-semibold text-body text-base mb-3">How do I get my EPG (TV Guide) working?</h3>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  The Electronic Programme Guide (EPG) is included with all plans and works automatically with compatible player apps. In TiviMate, add your Xtream Codes account (not M3U URL) — TiviMate pulls EPG data directly from our server as part of the Xtream Codes API. In IPTV Smarters Pro, use the same Xtream Codes login and enable &apos;Auto-refresh EPG&apos; in settings.
                </p>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  If you added your subscription via M3U URL rather than Xtream Codes, you will need to manually enter the XMLTV EPG URL from your welcome email. Set the app to refresh EPG daily at 3am for the freshest guide data.
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  GSE Smart IPTV on iOS supports EPG via XMLTV URL — paste your EPG URL from the welcome email under Settings → EPG Sources. Smart IPTV on Samsung TVs also supports XMLTV. If the guide shows programme descriptions for some channels but not others, those specific channels may use a different EPG source — contact support with the channel names and we will add them to your XMLTV feed.
                </p>
              </div>
              <div className="p-6 rounded-[16px] bg-card border border-line">
                <h3 className="font-display font-semibold text-body text-base mb-3">What is the difference between M3U and Xtream Codes?</h3>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  An M3U URL is a playlist file that lists all channels as a series of stream links. It works in virtually every IPTV player but requires manual EPG configuration, does not support catch-up TV in most apps, and refreshes channels less efficiently.
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  Xtream Codes (also called Xtream API) is a login-based system (server address, username, password) that connects to our content server directly. It supports automatic EPG loading, catch-up TV on supported apps, faster channel list refreshes, and VOD library browsing. If your welcome email includes both connection types, use Xtream Codes in TiviMate or IPTV Smarters — the experience is significantly better than M3U.
                </p>
              </div>
              <div className="p-6 rounded-[16px] bg-card border border-line">
                <h3 className="font-display font-semibold text-body text-base mb-3">How long does setup take on a new device?</h3>
                <p className="text-sm text-muted leading-relaxed">
                  On an Amazon Fire Stick, the full process — installing TiviMate from the Amazon App Store, adding your Xtream Codes credentials, and downloading the channel list — takes around 4–6 minutes on a typical broadband connection. On a Samsung Smart TV using Smart IPTV, you pay a one-time £3.99 activation fee to the Smart IPTV developers, then enter your M3U URL via their website — around 5 minutes total. iPhone setup with GSE Smart IPTV (available on the App Store) takes under 3 minutes. Our full step-by-step guides with screenshots are on the{" "}
                  <Link href="/setup-guide/" className="text-accent hover:text-body transition-colors">Setup Guide page</Link>.
                </p>
              </div>
            </div>
          </div>
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
