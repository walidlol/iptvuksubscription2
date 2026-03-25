import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTABanner from "@/components/home/CTABanner";

const SITE_URL = "https://iptvuksubscription.uk";

export const metadata: Metadata = {
  title: "About IPTV UK Subscription",
  description:
    "Learn about IPTV UK Subscription — trusted by 48,000+ UK households since 2018. Our mission, technology and commitment to reliable IPTV streaming in the UK.",
  alternates: { canonical: `${SITE_URL}/about/` },
  openGraph: {
    type: "website", locale: "en_GB", url: `${SITE_URL}/about/`,
    siteName: "IPTV UK Subscription",
    title: "About IPTV UK Subscription — Trusted Since 2018",
    description: "Trusted by 48,000+ UK households since 2018. Our mission and commitment to reliable IPTV.",
    images: [{ url: "/images/brand/og-image.jpg", width: 1200, height: 630 }],
  },
};

const STATS = [
  { value: "48,000+", label: "Active Subscribers" },
  { value: "2018",    label: "Year Founded"        },
  { value: "150+",    label: "Countries Covered"   },
  { value: "99.9%",   label: "Uptime SLA"          },
];

const TECH_POINTS = [
  { title: "Anti-Freeze Buffer Technology", desc: "Our proprietary buffer management pre-loads stream frames in real time, eliminating the freeze-and-buffer cycle that plagues cheaper IPTV services. Stream every Premier League match without a single interruption." },
  { title: "Multi-Server Failover",         desc: "Every channel is hosted across multiple geographic server clusters. If one node experiences load during peak events, your stream silently re-routes to the fastest available node in under 200ms." },
  { title: "Native 4K & HDR Delivery",      desc: "Select sport and movie channels are streamed natively in 4K Ultra HD with HDR support. No upscaling from 1080p — genuine 2160p broadcast-quality delivery on compatible devices." },
  { title: "7-Day EPG Integration",         desc: "Our full Electronic Programme Guide covers 7 days of scheduling for every channel, refreshed automatically through TiviMate, IPTV Smarters, and all major compatible player apps." },
  { title: "Global Channel Sourcing",       desc: "International channels are sourced directly from regional broadcast feeds, not third-party transcodes, meaning you get authentic broadcast quality for channels from 150+ countries." },
  { title: "Weekly Channel Updates",        desc: "Our channel lineup is reviewed and updated every week. New channels are typically live within 48 hours of launch. We act on customer requests faster than any other UK provider." },
];

const VALUES = [
  { title: "Transparency",           body: "The price you see is the price you pay — no hidden fees, no automatic renewals without consent, and no surprise charges. Every plan is clearly itemised before you commit." },
  { title: "Reliability",            body: "We operate redundant server infrastructure with automatic failover. Even during peak events — Premier League kick-offs, Champions League finals — your stream stays stable." },
  { title: "Customer-First Support", body: "Our support team is available 24/7 via live chat and email. Average response time is under one hour. A real person responds to every ticket — no bot-only support." },
  { title: "Constant Improvement",   body: "We reinvest a significant portion of revenue into infrastructure. In 2026, we launched native 4K for Premier League matches — a first for our price point in the UK market." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",  item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about/` },
  ],
};

export default function AboutPage(): React.ReactElement {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-deep">
        <div className="mx-auto max-w-[1200px] px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
          <p className="label-tag mb-4">About Us</p>
          <h1
            className="font-display font-bold tracking-[-0.04em] leading-[1.05] text-body mb-6"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}
          >
            The UK&apos;s Most Reliable{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-cyan) 100%)" }}>
              IPTV Subscription
            </span>
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-[640px]">
            IPTV UK Subscription was founded in 2018 with a single goal: give every UK household access to the
            world&apos;s best live TV at a price that makes sense. Our{" "}
            <strong className="text-body font-medium">IPTV UK subscription</strong> service now serves over
            48,000 active subscribers from London to Edinburgh, Cardiff to Belfast.
          </p>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <section className="py-12 bg-surface border-y border-line">
        <div className="mx-auto max-w-[1200px] px-6">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center gap-1 p-6 rounded-[16px] bg-card border border-line">
                <dd className="font-display font-bold text-[2.2rem] text-body leading-none tabular-nums">{s.value}</dd>
                <dt className="text-[11px] font-body font-bold uppercase tracking-[0.1em] text-subtle">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="label-tag mb-4">Our Story</p>
              <h2 className="font-display font-bold tracking-[-0.03em] leading-[1.1] text-body mb-6" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
                From Cord-Cutters to the UK&apos;s Trusted IPTV Platform
              </h2>
              <div className="flex flex-col gap-4 text-muted text-sm sm:text-base leading-relaxed">
                <p>
                  We started as a small team of UK streaming enthusiasts frustrated by expensive satellite contracts,
                  proprietary hardware requirements, and paying £80 a month for 300 channels while watching 15 of them.
                  IPTV technology offered a better path — and we built the service we wanted to exist.
                </p>
                <p>
                  Our first year was modest: a few hundred subscribers, a handful of server nodes, and a commitment
                  to answering every support ticket personally. That personal touch became our culture. Today, with
                  over 48,000 active accounts, we still respond to every customer — just faster, with a larger team
                  behind us.
                </p>
                <p>
                  We reinvest a significant portion of revenue directly into infrastructure. In 2025, we expanded to
                  four new server regions to reduce latency for customers in Northern Ireland, Scotland, and rural
                  areas. In 2026, we launched native 4K delivery for Premier League and Champions League matches —
                  a first for our price point in the UK market.
                </p>
                <p>
                  Our channel lineup is reviewed every week. When a major broadcaster launches a new channel, we
                  typically have it live within 48 hours. When customers request niche international channels, we
                  source them within the week. This responsiveness is what separates a premium IPTV UK subscription
                  from a generic reseller.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="p-6 rounded-[16px] bg-card border border-line">
                <h3 className="font-display font-semibold text-body text-lg mb-3">What We Offer</h3>
                <ul className="flex flex-col gap-2.5 text-sm text-muted">
                  {[
                    "35,000+ live channels — Sky Sports, TNT Sports, BBC, ITV, Channel 4",
                    "100,000+ on-demand movies and TV shows via our VOD library",
                    "4K Ultra HD streams for sport and cinema on Silver & Golden plans",
                    "Anti-freeze buffer technology for uninterrupted live sport",
                    "7-day catch-up TV on Silver and Golden plans",
                    "Full Electronic Programme Guide (EPG) on all plans",
                    "International channels from 150+ countries",
                    "Instant activation — watching within 5 minutes of purchase",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="shrink-0 text-accent mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-[16px] bg-card border border-line">
                <h3 className="font-display font-semibold text-body text-lg mb-3">Device Compatibility</h3>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  Amazon Fire Stick, Android TV boxes, Samsung and LG Smart TVs, iPhone, iPad, Android phones,
                  Windows, Mac, MAG boxes, and Kodi — if it runs an IPTV player, it works.
                </p>
                <Link href="/setup-guide/" className="text-sm text-accent hover:text-body transition-colors font-medium">
                  View Setup Guide →
                </Link>
              </div>
              <div className="p-6 rounded-[16px] bg-card border border-line">
                <h3 className="font-display font-semibold text-body text-lg mb-3">Pricing & Plans</h3>
                <p className="text-sm text-muted leading-relaxed mb-3">
                  Three honest plans from £4.92/month. No contracts, no auto-renewals, 7-day money-back guarantee.
                </p>
                <Link href="/pricing/" className="text-sm text-accent hover:text-body transition-colors font-medium">
                  View Pricing Plans →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technology ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-deep">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="label-tag mb-4">Technology</p>
          <h2 className="font-display font-bold tracking-[-0.03em] text-body mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Built for the Demands of Live Sport
          </h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed max-w-[560px] mb-10">
            Cheap IPTV services collapse under load. We engineered our infrastructure specifically to handle
            tens of thousands of simultaneous streams during Premier League kick-offs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TECH_POINTS.map((t) => (
              <div key={t.title} className="p-6 rounded-[16px] bg-card/60 border border-line hover:border-accent/30 transition-colors">
                <h3 className="font-display font-semibold text-body text-base mb-2">{t.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="label-tag mb-4">Our Values</p>
          <h2 className="font-display font-bold tracking-[-0.03em] text-body mb-10" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {VALUES.map((v) => (
              <div key={v.title} className="flex flex-col gap-3 p-7 rounded-[16px] bg-card border border-line">
                <h3 className="font-display font-semibold text-body text-lg">{v.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal links ───────────────────────────────────────────────── */}
      <section className="py-14 bg-deep border-y border-line">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <p className="text-sm text-subtle mb-6">Explore IPTV UK Subscription</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { label: "Pricing Plans",          href: "/pricing/"           },
              { label: "35,000+ Channels",       href: "/iptv-uk-channels/"  },
              { label: "Setup Guide",            href: "/setup-guide/"       },
              { label: "FAQ",                    href: "/faq/"               },
              { label: "Contact Support",        href: "/contact/"           },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="px-5 py-2 text-sm text-muted border border-line rounded-full hover:border-accent/40 hover:text-body transition-all duration-200">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
