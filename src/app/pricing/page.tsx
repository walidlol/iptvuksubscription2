import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import PricingSection from "@/components/home/PricingSection";
import CTABanner from "@/components/home/CTABanner";

const SITE_URL = "https://iptvuksubscription.uk";

export const metadata: Metadata = {
  title: "IPTV UK Subscription Pricing Plans 2026",
  description:
    "Compare IPTV UK subscription plans from £4.92/month. Starter, Silver and Golden plans with 35,000+ channels, 4K streams and instant activation. 7-day money back.",
  alternates: { canonical: `${SITE_URL}/pricing/` },
  openGraph: {
    type: "website", locale: "en_GB", url: `${SITE_URL}/pricing/`,
    siteName: "IPTV UK Subscription",
    title: "IPTV UK Subscription Pricing — From £4.92/month",
    description: "Three honest plans. 35,000+ channels, 4K streams, instant activation. No contracts.",
    images: [{ url: "/images/brand/og-image.jpg", width: 1200, height: 630 }],
  },
};

// ─── What's Included data ─────────────────────────────────────────────────

const INCLUDED = [
  { category: "Sports",          items: ["Sky Sports Premier League", "Sky Sports Football", "Sky Sports F1 (4K)", "Sky Sports Cricket & Golf", "TNT Sports 1–4", "Eurosport 1 & 2", "Premier Sports 1 & 2", "NFL Game Pass", "PPV boxing & UFC (Silver/Golden)"] },
  { category: "Entertainment",   items: ["BBC One & Two HD", "ITV HD, ITV2, ITV3, ITV4", "Channel 4 HD & E4", "Channel 5 HD & 5Star", "Sky One, Sky Atlantic", "Sky Witness, Sky Comedy", "Dave, Gold, Drama, Alibi", "Yesterday, W Channel"] },
  { category: "Movies",          items: ["Sky Cinema Premiere (4K)", "Sky Cinema Select, Hits, Action", "Sky Cinema Thriller & Drama", "Sky Cinema Family & Greats", "Film4 HD", "Sony Movies & Sony Movies Action"] },
  { category: "News",            items: ["BBC News 24/7", "Sky News HD", "GB News & TalkTV", "CNN International", "Al Jazeera English", "Bloomberg TV & CNBC Europe"] },
  { category: "Kids",            items: ["CBeebies & CBBC", "Cartoon Network & Nickelodeon", "Disney Channel & Disney Junior", "Nick Jr. & Baby TV", "Tiny Pop & Boomerang"] },
  { category: "International",   items: ["150+ countries covered", "French: TF1, M6, TV5Monde", "German: ARD, ZDF, RTL", "Italian: RAI Uno", "Spanish: Antena 3, TVE", "Arabic: MBC1, Al Arabiya", "Indian: Zee TV, Star Plus"] },
];

const PRICING_FAQ = [
  { q: "Can I cancel my IPTV UK subscription at any time?", a: "Our plans are pre-paid periods (3, 6, or 12 months). There are no auto-renewals — when your plan expires, you simply choose whether to renew. Within the first 7 days, you can request a full refund under our money-back guarantee, no questions asked." },
  { q: "What payment methods do you accept?", a: "We accept all major credit and debit cards (Visa, Mastercard), PayPal, and cryptocurrency. All payments are processed through encrypted, PCI-compliant payment gateways. We never store card details on our servers." },
  { q: "Is there a difference in channel count between plans?", a: "No — all three plans include the full 35,000+ channel lineup and 100,000+ VOD library. The differences are stream quality (4K is Silver/Golden only), simultaneous connections (1 or 2), catch-up TV, and anti-freeze technology on the Golden plan." },
  { q: "How quickly will I receive my login credentials?", a: "Credentials are delivered to your email within minutes of payment confirmation. Most customers are watching their first channel within 5 minutes of purchase. Check your spam folder if you don't see the email within 15 minutes, or contact support." },
  { q: "Can I upgrade from Starter to Silver mid-subscription?", a: "Yes. Contact our support team and we'll arrange a pro-rata upgrade, crediting the remaining value of your current plan towards the new one. Most upgrades are processed within 1 hour during business hours." },
  { q: "Do the prices include VAT?", a: "All prices shown are inclusive of UK VAT at the standard rate. There are no additional taxes or surcharges added at checkout. The price displayed is the final amount you pay." },
];

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",    item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Pricing", item: `${SITE_URL}/pricing/` },
  ],
};

export default function PricingPage(): React.ReactElement {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      {/* ── Page hero ────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-deep">
        <div className="mx-auto max-w-[1200px] px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
          <p className="label-tag mb-4">Pricing</p>
          <h1
            className="font-display font-bold tracking-[-0.04em] leading-[1.05] text-body mb-5"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}
          >
            Honest Plans for{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-cyan) 100%)" }}>
              Every Budget
            </span>
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-[600px]">
            Our <strong className="text-body font-medium">IPTV UK subscription</strong> comes in three straightforward plans — Starter, Silver, and Golden. Every plan includes the full 35,000+ channel lineup from day one. No hidden tiers, no premium add-ons, no auto-renewals.
          </p>
        </div>
      </section>

      {/* ── Pricing cards (interactive toggle) ──────────────────────────── */}
      <PricingSection />

      {/* ── What's included ──────────────────────────────────────────────── */}
      <section className="py-20 bg-deep">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="label-tag mb-4">Channel Coverage</p>
          <h2 className="font-display font-bold tracking-[-0.03em] text-body mb-3" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            What&apos;s Included in Every Plan
          </h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed max-w-[540px] mb-10">
            All plans include the complete channel library. Here&apos;s a breakdown of what you get across every category.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INCLUDED.map((cat) => (
              <div key={cat.category} className="p-6 rounded-[16px] bg-card border border-line">
                <h3 className="font-display font-semibold text-accent text-sm uppercase tracking-[0.08em] mb-4">{cat.category}</h3>
                <ul className="flex flex-col gap-2">
                  {cat.items.map((item) => (
                    <li key={item} className="text-xs text-muted flex items-start gap-2">
                      <span className="shrink-0 text-accent mt-0.5">·</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-subtle text-center">
            Full channel list available on our{" "}
            <Link href="/iptv-uk-channels/" className="text-accent hover:text-body transition-colors">Channels page →</Link>
          </p>
        </div>
      </section>

      {/* ── Why choose us ────────────────────────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="label-tag mb-4">Why Us</p>
          <h2 className="font-display font-bold tracking-[-0.03em] text-body mb-10" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Why Our Pricing Beats the Competition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {[
              { title: "No Contract Lock-in",     desc: "Our plans are fixed periods, not rolling contracts. When your plan expires, you choose whether to renew. No debt collection letters, no exit fees." },
              { title: "7-Day Money-Back",         desc: "If the service doesn't meet your expectations within 7 days, we'll refund you in full. No questions, no 30-day return windows — 7 days, full refund." },
              { title: "One Price, All Channels",  desc: "There are no premium tiers hidden behind a paywall. Every channel in our 35,000+ library is available from the first day of your subscription." },
              { title: "Cheaper Than Sky",         desc: "Our 12-month Golden plan costs less than one month of a basic Sky subscription. For the equivalent Sky Sports package, the savings are over £900 per year." },
              { title: "Instant Activation",       desc: "You receive your credentials by email within minutes of payment. No engineer visit, no hardware delivery, no 5-day waiting period. Watch today." },
              { title: "Honest Billing",           desc: "All prices include VAT. What you see is what you pay. We've never added a 'service charge' at checkout and we never will." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-[16px] bg-card border border-line">
                <h3 className="font-display font-semibold text-body text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing FAQ ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-deep">
        <div className="mx-auto max-w-[860px] px-6">
          <p className="label-tag mb-4 text-center">Pricing FAQ</p>
          <h2 className="font-display font-bold tracking-[-0.03em] text-body text-center mb-10" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}>
            Common Pricing Questions
          </h2>
          <dl className="flex flex-col gap-4">
            {PRICING_FAQ.map((item) => (
              <div key={item.q} className="p-6 rounded-[16px] bg-card border border-line">
                <dt className="font-body font-semibold text-body text-sm mb-2">{item.q}</dt>
                <dd className="text-sm text-muted leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-center text-sm text-subtle">
            More questions?{" "}
            <Link href="/faq/" className="text-accent hover:text-body transition-colors">Read our full FAQ</Link>
            {" "}or{" "}
            <Link href="/contact/" className="text-accent hover:text-body transition-colors">contact support</Link>.
          </p>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
