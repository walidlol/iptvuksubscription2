import Image from "next/image";
import Link from "next/link";

// ─── Sport events data ────────────────────────────────────────────────────

const SPORTS = [
  {
    image: "/images/content/sports/best-iptv-for-premier-league-football-uk.jpg",
    competition: "Premier League",
    channel: "Sky Sports PL",
    badge: "4K UHD",
    badgeColor: "rgba(255,45,85,0.85)",
    status: "LIVE",
  },
  {
    image: "/images/content/sports/watch-f1-live-stream-free-uk-reddit-2026.jpg",
    competition: "Formula 1",
    channel: "Sky Sports F1",
    badge: "4K UHD",
    badgeColor: "rgba(255,184,0,0.85)",
    status: "LIVE",
  },
  {
    image: "/images/content/sports/watch-ufc-live-stream-free-uk-iptv-subscription.jpg",
    competition: "UFC Events",
    channel: "TNT Sports",
    badge: "PPV INC.",
    badgeColor: "rgba(255,45,85,0.85)",
    status: "LIVE",
  },
  {
    image: "/images/content/sports/best-sports-streaming-apps-recommendations-uk.jpg",
    competition: "Champions League",
    channel: "TNT Sports 1–4",
    badge: "HD",
    badgeColor: "rgba(100,150,255,0.85)",
    status: "LIVE",
  },
  {
    image: "/images/content/sports/how-to-watch-mlb-2026-live-stream-uk.jpg",
    competition: "MLB 2026",
    channel: "Premier Sports",
    badge: "HD",
    badgeColor: "rgba(0,200,100,0.85)",
    status: "LIVE",
  },
];

// ─── Component ────────────────────────────────────────────────────────────

export default function SportHighlights(): React.ReactElement {
  return (
    <section className="py-24 bg-deep overflow-hidden" aria-labelledby="sport-heading">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="label-tag mb-4">Live Sport</p>
            <h2
              id="sport-heading"
              className="font-display font-bold tracking-[-0.03em] leading-[1.1]"
              style={{ fontSize: "clamp(1.8rem, 4.5vw, 3rem)" }}
            >
              Every Match.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, var(--accent) 0%, var(--cyan) 100%)" }}
              >
                Every Competition.
              </span>
            </h2>
          </div>
          <Link
            href="/iptv-uk-channels/"
            className="text-sm text-accent hover:text-body transition-colors font-medium shrink-0"
          >
            Browse all channels →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {SPORTS.map((sport) => (
            <div
              key={sport.competition}
              className="group relative rounded-[16px] overflow-hidden border border-line hover:border-accent/40 hover:shadow-[0_0_28px_var(--accent-glow)] transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{ aspectRatio: "3/4" }}
            >
              {/* Image */}
              <Image
                src={sport.image}
                alt={`${sport.competition} on IPTV UK subscription`}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Quality badge */}
              <div className="absolute top-3 right-3 z-10">
                <span
                  className="px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-wide text-white"
                  style={{ background: sport.badgeColor, backdropFilter: "blur(4px)" }}
                >
                  {sport.badge}
                </span>
              </div>

              {/* Live pill */}
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase bg-accent/20 text-accent border border-accent/30 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  {sport.status}
                </span>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 px-3 pb-3 z-10">
                <p className="text-[12px] font-bold text-white leading-tight">{sport.competition}</p>
                <p className="text-[10px] text-white/60 mt-0.5">{sport.channel}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sport channel logos row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {[
            "Sky Sports PL", "Sky Sports F1", "Sky Sports Football",
            "TNT Sports 1–4", "Eurosport", "Premier Sports",
            "Sky Sports Cricket", "Sky Sports Golf", "beIN Sports",
          ].map((ch) => (
            <span key={ch} className="px-3 py-1.5 rounded-full text-xs font-medium text-muted border border-line bg-card hover:border-accent/30 hover:text-body transition-all duration-200 cursor-default">
              {ch}
            </span>
          ))}
        </div>
        <p className="text-center text-xs text-subtle mt-4">
          1,200+ sports channels including all Sky Sports, TNT Sports, and Eurosport. PPV included on Silver &amp; Golden.
        </p>
      </div>
    </section>
  );
}
