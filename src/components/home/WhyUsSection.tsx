import Link from "next/link";

// ─── Feature data ─────────────────────────────────────────────────────────

const FEATURES = [
  {
    emoji: "⚡",
    title: "Instant Activation",
    desc: "Your credentials land in your inbox within minutes of payment. No engineer, no waiting period. Most customers are watching within 5 minutes of subscribing.",
    color: "rgba(255,184,0,0.12)",
    border: "rgba(255,184,0,0.25)",
  },
  {
    emoji: "🏆",
    title: "Every Sky Sports Channel",
    desc: "Sky Sports Premier League, Football, F1 (4K), Cricket, Golf, Arena — all included on every plan. Plus TNT Sports 1–4, Eurosport, and Premier Sports.",
    color: "rgba(255,45,85,0.10)",
    border: "rgba(255,45,85,0.25)",
  },
  {
    emoji: "🌍",
    title: "150+ Countries",
    desc: "Arabic, South Asian, French, German, Turkish, Polish, and dozens more. International channels are sourced from direct broadcast feeds — authentic quality.",
    color: "rgba(0,200,150,0.10)",
    border: "rgba(0,200,150,0.25)",
  },
  {
    emoji: "🧊",
    title: "Anti-Freeze Buffer Tech",
    desc: "Our proprietary buffer pre-loads stream frames in real time. During high-demand events like Premier League kick-offs, streams stay smooth while others freeze.",
    color: "rgba(100,150,255,0.10)",
    border: "rgba(100,150,255,0.25)",
  },
  {
    emoji: "📅",
    title: "7-Day Catch-Up TV",
    desc: "Missed a match or episode? Catch up on anything that aired in the last 7 days on Silver and Golden plans. Works in TiviMate and IPTV Smarters.",
    color: "rgba(255,100,50,0.10)",
    border: "rgba(255,100,50,0.25)",
  },
  {
    emoji: "💬",
    title: "24/7 UK Support",
    desc: "A real person responds to every support ticket — not a bot. Average response under one hour via live chat or email. Support has no off-hours.",
    color: "rgba(180,50,255,0.10)",
    border: "rgba(180,50,255,0.25)",
  },
];

// ─── Comparison strip ─────────────────────────────────────────────────────

const VS_DATA = [
  { label: "Sky Sports + Entertainment", price: "~£75/mo", note: "18-month contract" },
  { label: "Virgin Media Full House",     price: "~£85/mo", note: "Hardware install required" },
  { label: "IPTV UK — Golden Plan",       price: "£4.92/mo", note: "No contract · Instant activation", highlight: true },
];

// ─── Component ────────────────────────────────────────────────────────────

export default function WhyUsSection(): React.ReactElement {
  return (
    <>
      {/* ── Features grid ──────────────────────────────────────────────── */}
      <section className="py-24 bg-deep" aria-labelledby="features-heading">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="label-tag mb-4">Why Choose Us</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <h2
              id="features-heading"
              className="font-display font-bold tracking-[-0.03em] leading-[1.1] max-w-[500px]"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)" }}
            >
              Built for UK Viewers.{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, var(--accent) 0%, var(--cyan) 100%)" }}
              >
                Priced for Everyone.
              </span>
            </h2>
            <p className="text-muted text-sm sm:text-base leading-relaxed max-w-[420px]">
              Sky charges £900 a year for a similar package. We charge less than their monthly bill for an entire year — without the contracts, hardware, or waiting.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group p-6 rounded-[20px] border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                style={{
                  background: f.color,
                  borderColor: f.border,
                }}
              >
                <div className="text-3xl mb-4">{f.emoji}</div>
                <h3 className="font-display font-semibold text-body text-base mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── vs Traditional TV comparison ────────────────────────────────── */}
      <section className="py-16 bg-surface border-y border-line" aria-label="Price comparison">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="label-tag mb-6 text-center">Price Comparison</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {VS_DATA.map((row) => (
              <div
                key={row.label}
                className={[
                  "p-6 rounded-[16px] border text-center transition-all duration-300",
                  row.highlight
                    ? "border-accent/50 shadow-[0_0_32px_var(--accent-glow)] bg-accent-dim"
                    : "border-line bg-card",
                ].join(" ")}
              >
                <p className={["text-xs font-bold uppercase tracking-[0.08em] mb-2", row.highlight ? "text-accent" : "text-subtle"].join(" ")}>
                  {row.label}
                </p>
                <p className={["font-display font-bold leading-none mb-2", row.highlight ? "text-accent" : "text-body"].join(" ")} style={{ fontSize: "2rem" }}>
                  {row.price}
                </p>
                <p className="text-xs text-subtle">{row.note}</p>
                {row.highlight && (
                  <Link
                    href="/pricing/"
                    className="mt-4 inline-flex items-center justify-center h-9 px-5 rounded-[10px] text-xs font-bold bg-accent text-white shadow-[0_0_16px_var(--accent-glow)] hover:bg-accent-hover transition-all duration-200"
                  >
                    Get This Plan →
                  </Link>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-subtle mt-4">
            Sky and Virgin prices based on published 2026 rates. All IPTV UK prices include VAT.
          </p>
        </div>
      </section>
    </>
  );
}
