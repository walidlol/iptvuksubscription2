import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTABanner from "@/components/home/CTABanner";
import ChannelBrowser from "./ChannelBrowser";

const SITE_URL = "https://iptvuksubscription.uk";

export const metadata: Metadata = {
  title: "IPTV UK Channels — 35,000+ Live Channels",
  description:
    "Browse 35,000+ channels in your IPTV UK subscription — Sky Sports, Premier League, Sky Cinema, BBC, ITV, news, kids & 150 international countries. All plans included.",
  alternates: { canonical: `${SITE_URL}/iptv-uk-channels/` },
  openGraph: {
    type: "website", locale: "en_GB", url: `${SITE_URL}/iptv-uk-channels/`,
    siteName: "IPTV UK Subscription",
    title: "IPTV UK Channels — 35,000+ Live Channels in Your Subscription",
    description: "Every Sky Sports channel, TNT Sports, Sky Cinema, BBC, ITV and 150 countries — all in one IPTV UK subscription.",
    images: [{ url: "/images/brand/og-image.jpg", width: 1200, height: 630 }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",     item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Channels", item: `${SITE_URL}/iptv-uk-channels/` },
  ],
};

const CATEGORY_HIGHLIGHTS = [
  { title: "Sports",        count: "1,200+", examples: "Sky Sports PL, Sky Sports F1 (4K), TNT Sports 1–4, Eurosport, Premier Sports, beIN Sports" },
  { title: "Entertainment", count: "2,500+", examples: "BBC One/Two HD, ITV, Channel 4, Sky Atlantic, Sky One, Dave, Gold, Drama, Alibi" },
  { title: "Movies",        count: "800+",   examples: "Sky Cinema Premiere (4K), Sky Cinema Action, Film4 HD, Sony Movies, TCM" },
  { title: "News",          count: "250+",   examples: "BBC News, Sky News, GB News, CNN, Al Jazeera, Bloomberg, Euronews, CNBC" },
  { title: "Kids",          count: "400+",   examples: "CBeebies, CBBC, Cartoon Network, Nickelodeon, Disney Channel, Disney Junior" },
  { title: "International", count: "30,000+",examples: "150+ countries — France, Germany, Italy, Spain, India, Arabic, USA, and more" },
];

export default function ChannelsPage(): React.ReactElement {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-deep">
        <div className="mx-auto max-w-[1200px] px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Channels" }]} />
          <p className="label-tag mb-4">Channels</p>
          <h1
            className="font-display font-bold tracking-[-0.04em] leading-[1.05] text-body mb-5"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}
          >
            35,000+{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-cyan) 100%)" }}>
              IPTV UK Channels
            </span>
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-[640px] mb-6">
            Every <strong className="text-body font-medium">IPTV UK subscription</strong> plan includes the full channel library from day one — sports, entertainment, movies, news, kids, and international channels from 150 countries. No add-ons. No premium tiers. Browse a selection below.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/pricing/" className="inline-flex items-center h-10 px-5 rounded-[10px] text-sm font-semibold bg-accent text-deep shadow-[0_0_16px_var(--color-accent-glow)] hover:bg-[#00cc6a] transition-all duration-300">
              Get Full Access →
            </Link>
            <Link href="/setup-guide/" className="inline-flex items-center h-10 px-5 rounded-[10px] text-sm font-medium border border-line text-muted hover:border-accent/40 hover:text-body transition-all duration-200">
              Setup Guide
            </Link>
          </div>
        </div>
      </section>

      {/* ── Category summary row ─────────────────────────────────────────── */}
      <section className="py-12 bg-surface border-y border-line">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORY_HIGHLIGHTS.map((cat) => (
              <div key={cat.title} className="flex flex-col gap-1 p-4 rounded-[12px] bg-card border border-line text-center">
                <span className="font-display font-bold text-xl text-accent leading-none tabular-nums">{cat.count}</span>
                <span className="text-xs font-body font-semibold text-body">{cat.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Interactive channel browser ──────────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="label-tag mb-4">Channel Browser</p>
          <h2 className="font-display font-bold tracking-[-0.03em] text-body mb-3" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
            Search &amp; Filter Channels
          </h2>
          <p className="text-muted text-sm leading-relaxed max-w-[480px] mb-8">
            A selection from our full library. Search by name or filter by category — all channels are included in every plan.
          </p>
          <ChannelBrowser />
          <p className="mt-6 text-xs text-subtle">
            This is a representative sample. The full subscription includes 35,000+ live channels and 100,000+ VOD titles.
          </p>
        </div>
      </section>

      {/* ── Category deep dives ──────────────────────────────────────────── */}
      <section className="py-20 bg-deep">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="label-tag mb-4">What&apos;s Included</p>
          <h2 className="font-display font-bold tracking-[-0.03em] text-body mb-10" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
            Channel Categories in Detail
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORY_HIGHLIGHTS.map((cat) => (
              <div key={cat.title} className="p-6 rounded-[16px] bg-card border border-line hover:border-accent/25 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display font-semibold text-body text-base">{cat.title}</h3>
                  <span className="text-xs font-body font-bold text-accent tabular-nums">{cat.count} channels</span>
                </div>
                <p className="text-xs text-muted leading-relaxed">{cat.examples}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Frequently asked channel questions ──────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[860px] px-6">
          <p className="label-tag mb-4 text-center">Channels FAQ</p>
          <h2 className="font-display font-bold tracking-[-0.03em] text-body text-center mb-8" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
            Common Channel Questions
          </h2>
          <dl className="flex flex-col gap-4">
            {[
              { q: "Are channels in HD or SD?", a: "The vast majority of channels are streamed in Full HD (1080p). On Silver and Golden plans, select sports and cinema channels are available in 4K Ultra HD. A small number of niche international channels are in SD where that is the native broadcast quality." },
              { q: "Are all channels available in every plan?", a: "Yes — all 35,000+ channels and 100,000+ VOD titles are accessible on every plan from day one. The plan differences are stream quality (4K), simultaneous connections (1 or 2), catch-up TV availability, and anti-freeze technology. There are no channel tiers or hidden premium packs." },
              { q: "How often is the channel list updated?", a: "Our team reviews and updates the channel lineup weekly. New channels are typically added within 48 hours of launch. If a channel disappears due to a broadcast change, we replace it or restore it quickly. Customers can request specific channels via our support team." },
            ].map((item) => (
              <div key={item.q} className="p-5 rounded-[14px] bg-card border border-line">
                <dt className="font-body font-semibold text-body text-sm mb-2">{item.q}</dt>
                <dd className="text-sm text-muted leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-center text-sm text-subtle">
            <Link href="/faq/" className="text-accent hover:text-body transition-colors">Read the full FAQ</Link>
            {" "}or{" "}
            <Link href="/pricing/" className="text-accent hover:text-body transition-colors">view pricing plans</Link>.
          </p>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
