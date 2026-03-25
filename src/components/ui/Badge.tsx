import { cn } from "@/lib/utils";

type BadgeVariant = "accent" | "gold" | "cyan" | "muted";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  accent: "bg-accent-dim text-accent border-accent/20",
  gold:   "bg-[rgba(255,184,0,0.12)] text-gold border-gold/20",
  cyan:   "bg-[rgba(0,180,216,0.12)] text-cyan border-cyan/20",
  muted:  "bg-card text-muted border-line",
};

export default function Badge({
  children,
  variant = "accent",
  className,
}: BadgeProps): React.ReactElement {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
