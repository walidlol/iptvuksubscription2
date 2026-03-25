import Link from "next/link";

export default function NotFound(): React.ReactElement {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-deep px-6 text-center">

      {/* Atmospheric orbs */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: [
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(0,232,123,0.12) 0%, transparent 70%)",
            "radial-gradient(ellipse 40% 30% at 80% 80%, rgba(0,180,216,0.07) 0%, transparent 70%)",
          ].join(", "),
        }}
      />

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        aria-hidden="true"
        style={{
          backgroundImage: "linear-gradient(var(--color-accent) 1px, transparent 1px), linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 50%, black 0%, transparent 80%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-[480px]">
        <p className="label-tag">404 — Page Not Found</p>

        <div>
          <p
            className="font-display font-bold tracking-[-0.04em] leading-none bg-clip-text text-transparent mb-2"
            style={{
              fontSize: "clamp(5rem, 20vw, 10rem)",
              backgroundImage: "linear-gradient(135deg, rgba(238,238,245,0.15) 0%, rgba(238,238,245,0.05) 100%)",
            }}
          >
            404
          </p>
          <h1 className="font-display font-bold tracking-[-0.03em] text-body" style={{ fontSize: "clamp(1.4rem, 4vw, 2.2rem)" }}>
            This page doesn&apos;t exist
          </h1>
        </div>

        <p className="text-muted text-sm leading-relaxed max-w-sm">
          The page you&apos;re looking for may have moved, been renamed, or no longer exists. Check the URL or navigate to a page below.
        </p>

        {/* Quick links */}
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center h-11 px-6 rounded-[12px] text-sm font-semibold bg-accent text-deep shadow-[0_0_20px_var(--color-accent-glow)] hover:bg-[#00cc6a] hover:shadow-[0_0_32px_var(--color-accent-glow)] transition-all duration-300"
          >
            Back to Home
          </Link>
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center h-11 px-6 rounded-[12px] text-sm font-medium border border-line text-muted hover:border-accent/40 hover:text-body transition-all duration-200"
          >
            Contact Support
          </Link>
        </div>

        {/* Popular links */}
        <div className="flex flex-wrap gap-2 justify-center mt-2">
          {[
            { label: "Pricing", href: "/pricing/" },
            { label: "Channel List", href: "/iptv-uk-channels/" },
            { label: "Setup Guide", href: "/setup-guide/" },
            { label: "FAQ", href: "/faq/" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-1.5 text-xs text-subtle border border-line rounded-full hover:border-accent/40 hover:text-body transition-all duration-200"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
