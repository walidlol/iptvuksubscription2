import Link from "next/link";
import { Flame, Tv, Smartphone, Monitor, Tablet, Radio } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Device data ──────────────────────────────────────────────────────────

interface Device {
  icon: LucideIcon;
  name: string;
  tagline: string;
  href: string;
}

const DEVICES: Device[] = [
  {
    icon: Flame,
    name: "Amazon Fire Stick",
    tagline: "Most popular — TiviMate ready",
    href: "/setup-guide/",
  },
  {
    icon: Tv,
    name: "Smart TV",
    tagline: "Samsung, LG, Sony & more",
    href: "/setup-guide/",
  },
  {
    icon: Smartphone,
    name: "iOS & Android",
    tagline: "Phone and tablet streaming",
    href: "/setup-guide/",
  },
  {
    icon: Monitor,
    name: "Windows & Mac",
    tagline: "VLC or any IPTV player",
    href: "/setup-guide/",
  },
  {
    icon: Tablet,
    name: "iPad & Tablet",
    tagline: "Perfect for travel use",
    href: "/setup-guide/",
  },
  {
    icon: Radio,
    name: "MAG Box",
    tagline: "Dedicated IPTV hardware",
    href: "/setup-guide/",
  },
];

// ─── Device card ──────────────────────────────────────────────────────────

function DeviceCard({ device }: { device: Device }): React.ReactElement {
  const Icon = device.icon;
  return (
    <div className="group flex flex-col gap-4 p-6 rounded-[16px] bg-card border border-line hover:border-accent/35 hover:shadow-[0_0_24px_rgba(0,232,123,0.10)] hover:-translate-y-1 transition-all duration-300">
      {/* Icon */}
      <div className="w-10 h-10 rounded-[10px] bg-accent-dim flex items-center justify-center shrink-0">
        <Icon
          size={20}
          className="text-accent"
          aria-hidden="true"
          strokeWidth={1.75}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-1 flex-1">
        <p className="text-sm font-body font-semibold text-body leading-snug">
          {device.name}
        </p>
        <p className="text-xs text-subtle leading-relaxed">{device.tagline}</p>
      </div>

      {/* CTA link */}
      <Link
        href={device.href}
        className="text-xs font-body font-semibold text-accent hover:text-body transition-colors duration-200 flex items-center gap-1 w-fit"
      >
        Setup Guide
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}

// ─── DeviceSection ────────────────────────────────────────────────────────

export default function DeviceSection(): React.ReactElement {
  return (
    <section className="py-24 bg-deep" aria-labelledby="devices-heading">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="label-tag mb-4">Compatibility</p>
          <h2
            id="devices-heading"
            className="font-display font-bold tracking-[-0.03em] leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Every Device.{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, var(--color-accent) 0%, var(--color-cyan) 100%)",
              }}
            >
              5 Minutes Setup.
            </span>
          </h2>
          <p className="mt-4 text-muted text-base sm:text-lg max-w-[520px] leading-relaxed">
            Your IPTV UK subscription works on any screen you own — no
            proprietary box, no engineer visit required.
          </p>
        </div>

        {/* Device grid */}
        <div
          className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Compatible devices"
        >
          {DEVICES.map((device) => (
            <div key={device.name} role="listitem">
              <DeviceCard device={device} />
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-8 text-xs text-subtle text-center">
          Full device-specific guides available on our{" "}
          <Link
            href="/setup-guide/"
            className="text-accent hover:text-body transition-colors"
          >
            Setup Guide page
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
