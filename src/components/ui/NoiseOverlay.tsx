import { cn } from "@/lib/utils";

interface NoiseOverlayProps {
  className?: string;
  opacity?: number;
}

/**
 * Adds a subtle grain/noise texture over sections.
 * CLAUDE.md: "Noise overlay at 2-3% opacity on backgrounds"
 *
 * Place as first child of a relative-positioned container.
 */
export default function NoiseOverlay({
  className,
  opacity = 0.025,
}: NoiseOverlayProps): React.ReactElement {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 z-0", className)}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "256px 256px",
        opacity,
        mixBlendMode: "overlay",
      }}
    />
  );
}
