import AnimatedCounter from "@/components/ui/AnimatedCounter";

// ─── Stats data ───────────────────────────────────────────────────────────

interface Stat {
  target: number;
  suffix: string;
  decimals?: boolean;
  label: string;
}

const STATS: Stat[] = [
  { target: 35000,  suffix: "+", label: "Live Channels"   },
  { target: 100000, suffix: "+", label: "On-Demand Titles" },
  { target: 99.9,   suffix: "%", decimals: true, label: "Uptime SLA" },
  { target: 48000,  suffix: "+", label: "UK Subscribers"  },
];

// ─── StatsBar ─────────────────────────────────────────────────────────────

export default function StatsBar(): React.ReactElement {
  return (
    <section
      className="border-y border-line bg-deep"
      aria-label="Service statistics"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-10">
        <dl className="grid grid-cols-2 gap-y-8 sm:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={[
                "flex flex-col items-center gap-1.5 text-center",
                // Dividers between columns (desktop only)
                i > 0 ? "sm:border-l sm:border-line" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <dt className="order-2 text-[11px] font-body font-700 uppercase tracking-[0.1em] text-subtle">
                {stat.label}
              </dt>
              <dd className="order-1">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  duration={stat.decimals ? 1.4 : 2.0}
                  className="font-display font-bold text-[2rem] sm:text-[2.25rem] leading-none text-body"
                />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
