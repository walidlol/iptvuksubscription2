import Link from "next/link";

export default function CTABanner(): React.ReactElement {
  return (
    <section className="py-20 px-6 bg-deep" aria-label="Get started with IPTV UK subscription">
      <div className="mx-auto max-w-[1200px]">
        <div
          className="relative overflow-hidden rounded-[24px] border border-line px-8 py-16 sm:px-16 text-center"
          style={{ background: "var(--bg-card)" }}
        >
          {/* Accent orb */}
          <div
            className="absolute top-[-40%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, var(--accent-dim) 0%, transparent 65%)",
              filter: "blur(60px)",
            }}
            aria-hidden="true"
          />
          {/* Cyan orb */}
          <div
            className="absolute bottom-[-30%] right-[-5%] w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, var(--accent-dim) 0%, transparent 65%)",
              filter: "blur(70px)",
            }}
            aria-hidden="true"
          />
          {/* Grid */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(var(--grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--grid-line) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center">
            <p className="label-tag mb-5">Get Started Today</p>

            <h2
              className="font-display font-bold tracking-[-0.03em] leading-[1.05] text-body mb-5"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}
            >
              Ready to Start Streaming?
            </h2>

            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-[560px] mb-10">
              From just{" "}
              <strong className="text-body font-semibold">£4.92/month</strong>{" "}
              — less than a coffee. Activate your{" "}
              <strong className="text-body font-medium">IPTV UK subscription</strong>{" "}
              in under 5 minutes on any device. No contracts. Cancel any time.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Link
                href="/pricing/"
                className="inline-flex items-center justify-center h-13 px-8 rounded-[12px] text-base font-semibold bg-accent text-white shadow-[0_0_32px_var(--accent-glow)] hover:bg-accent-hover hover:shadow-[0_0_52px_var(--accent-glow)] transition-all duration-300"
              >
                GET INSTANT ACCESS →
              </Link>
              <Link
                href="/pricing/"
                className="text-sm text-subtle hover:text-muted transition-colors"
              >
                View all plans
              </Link>
            </div>

            <p className="mt-6 text-xs text-subtle">
              7-day money-back guarantee &nbsp;·&nbsp; No setup fees &nbsp;·&nbsp; Instant activation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
