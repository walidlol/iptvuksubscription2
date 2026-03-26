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

      {/* ── Sports deep dive ─────────────────────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="label-tag mb-4">Sports Channels</p>
          <h2 className="font-display font-bold tracking-[-0.03em] text-body mb-4" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
            The Complete UK Sports Package
          </h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed max-w-[720px] mb-10">
            Sports is where cheap IPTV services fall apart — and where our <strong className="text-body font-medium">IPTV UK subscription</strong> proves its engineering. Our sports package covers every major competition broadcast in the UK, streamed to the same quality as the original Sky Sports or TNT Sports feed. No compromises, no blackouts.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-display font-semibold text-body text-lg mb-4">Football — Premier League & Beyond</h3>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Our <strong className="text-body font-medium">IPTV UK subscription</strong> includes every Sky Sports Premier League broadcast, every TNT Sports Premier League match, and every Eurosport game in a single subscription. That means every televised match from August to May — no blackouts, no region locking, no paying per-game for PPV.
              </p>
              <p className="text-sm text-muted leading-relaxed mb-4">
                Beyond the Premier League, our football coverage extends to the UEFA Champions League (all Tuesday and Wednesday matches), UEFA Europa League, the Emirates FA Cup across all rounds, the Carabao Cup, the EFL Championship, Scottish Premiership, and international tournament coverage including the Euros and World Cup qualifiers.
              </p>
              <p className="text-sm text-muted leading-relaxed">
                For fans of European club football, our international sports tier includes La Liga matches on Premier Sports, Serie A, Bundesliga, and Ligue 1 feeds — covering every major European league in one subscription rather than requiring separate broadcaster apps.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { competition: "Premier League", broadcaster: "Sky Sports PL + TNT Sports", detail: "Every televised match, all 38 gameweeks. 4K on Silver/Golden." },
                { competition: "UEFA Champions League", broadcaster: "TNT Sports 1–4", detail: "All group stage and knockout matches from group stage to final." },
                { competition: "FA Cup", broadcaster: "BBC & ITV HD", detail: "Every round including replays, semi-finals and Wembley final." },
                { competition: "Formula 1", broadcaster: "Sky Sports F1 (4K)", detail: "Every practice, qualifying, and race. Driver analysis feeds included." },
                { competition: "Boxing & UFC", broadcaster: "TNT Sports + Sky Sports Box Office", detail: "All major PPV events included on Silver and Golden plans." },
                { competition: "Cricket, Golf, Rugby", broadcaster: "Sky Sports Cricket/Golf/Rugby", detail: "Full Ashes, The Open, Premiership Rugby and Six Nations coverage." },
              ].map((row) => (
                <div key={row.competition} className="flex gap-4 p-4 rounded-[12px] bg-card border border-line">
                  <div className="flex-1 min-w-0">
                    <p className="font-body font-semibold text-body text-sm">{row.competition}</p>
                    <p className="text-xs text-accent mb-1">{row.broadcaster}</p>
                    <p className="text-xs text-muted leading-relaxed">{row.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Entertainment & Movies ───────────────────────────────────────── */}
      <section className="py-20 bg-deep">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="label-tag mb-4">Entertainment & Movies</p>
          <h2 className="font-display font-bold tracking-[-0.03em] text-body mb-4" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
            Entertainment, Cinema & On-Demand
          </h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed max-w-[720px] mb-10">
            Beyond sport, our channel library covers the full spectrum of British television — every terrestrial channel in HD, all Sky entertainment channels, and a 100,000+ title on-demand movie and TV library. Whether you are following a long-running drama series, catching up on a documentary, or browsing for films on a Friday evening, everything is in the same subscription.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="p-6 rounded-[16px] bg-card border border-line">
              <h3 className="font-display font-semibold text-body text-base mb-3">UK Terrestrial Channels in HD</h3>
              <p className="text-sm text-muted leading-relaxed mb-3">
                All five main UK terrestrials are included in high definition — BBC One, BBC Two, ITV, Channel 4, and Channel 5 — along with their sister channels: BBC Three, BBC Four, ITV2, ITV3, ITV4, ITVBe, E4, More4, 5Star, and 5USA. You also get ITVX integration through IPTV Smarters catch-up mode on Silver and Golden plans.
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Live BBC News 24/7 and Sky News are included. For news enthusiasts, the package extends to GB News, TalkTV, Bloomberg TV, CNBC Europe, Euronews, CNN International, and Al Jazeera English — comprehensive UK and international coverage from a single subscription.
              </p>
            </div>
            <div className="p-6 rounded-[16px] bg-card border border-line">
              <h3 className="font-display font-semibold text-body text-base mb-3">Sky Cinema — Full Package</h3>
              <p className="text-sm text-muted leading-relaxed mb-3">
                The Sky Cinema package includes all eight dedicated channels: Sky Cinema Premiere, Sky Cinema Select, Sky Cinema Hits, Sky Cinema Action, Sky Cinema Comedy, Sky Cinema Family, Sky Cinema Thriller, and Sky Cinema Drama. Sky Cinema Premiere is available in 4K on Silver and Golden plans — the same quality as a Sky Cinema subscription costing over £20 a month on its own.
              </p>
              <p className="text-sm text-muted leading-relaxed">
                The VOD library supplements live cinema channels with 100,000+ on-demand titles spanning every genre and era. Films are typically available in the same definition as their live channel counterparts, with full HD for most titles and 4K for selected new releases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── International channels ───────────────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="label-tag mb-4">International Channels</p>
          <h2 className="font-display font-bold tracking-[-0.03em] text-body mb-4" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
            Channels from 150+ Countries
          </h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed max-w-[720px] mb-10">
            The 30,000+ international channels in our library are sourced directly from regional broadcast feeds — not re-encoded third-party streams — giving you authentic broadcast quality for your home country&apos;s television regardless of where in the UK you live. The international tier is included in every plan at no additional cost.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {[
              { region: "South Asian", channels: "200+ channels", examples: "Zee TV, Star Plus, Colors, Sony Entertainment, Star Gold, &TV, SAB TV, Star Vijay, Sun TV, Asianet, Jaya TV", note: "Hindi, Gujarati, Tamil, Telugu, Malayalam, Bengali language packages available." },
              { region: "Arabic", channels: "180+ channels", examples: "MBC1, MBC2, MBC Drama, Al Arabiya, Al Jazeera Arabic, beIN Sports Arabic, MBC Action, Rotana Cinema, Nile TV", note: "Comprehensive Arabic-language news, drama, and sport across the region." },
              { region: "French", channels: "60+ channels", examples: "TF1, France 2, France 3, M6, Canal+, TV5Monde, BFM TV, LCI, beIN Sports France, France 24", note: "Full French mainland TV including premium Canal+ feeds." },
              { region: "German", channels: "50+ channels", examples: "ARD, ZDF, RTL, SAT.1, Pro7, Kabel Eins, VOX, n-tv, Sport1, Sky Sport Bundesliga Germany", note: "All major German free-to-air and premium sports channels." },
              { region: "Italian", channels: "40+ channels", examples: "Rai Uno, Rai Due, Rai Tre, Mediaset (Canale 5, Italia 1, Rete 4), La7, Sky TG24 Italy, DAZN Italy", note: "Full Italian terrestrials plus Serie A coverage." },
              { region: "Spanish & Latin", channels: "120+ channels", examples: "Antena 3, Cuatro, La Sexta, TVE1, TVE2, Telecinco, Canal Sur, Telemundo, Univision, TV Azteca", note: "Spain, Mexico, Colombia, Argentina and other Latin American feeds." },
            ].map((region) => (
              <div key={region.region} className="p-6 rounded-[16px] bg-card border border-line hover:border-accent/25 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-semibold text-body text-sm">{region.region}</h3>
                  <span className="text-xs font-body font-bold text-accent tabular-nums">{region.channels}</span>
                </div>
                <p className="text-xs text-muted leading-relaxed mb-2">{region.examples}</p>
                <p className="text-[11px] text-subtle leading-relaxed">{region.note}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted leading-relaxed max-w-[680px]">
            Additional regions include Turkish, Polish, Romanian, Portuguese (Brazil and Portugal), Dutch, Greek, Scandinavian, Eastern European, African, American (US), Canadian, and Australian channel packages. If you cannot find your specific country or channel on our{" "}
            <Link href="/contact/" className="text-accent hover:text-body transition-colors">contact page</Link>, our team can confirm availability within hours.
          </p>
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
