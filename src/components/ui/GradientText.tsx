import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  from?: string;
  to?: string;
}

/**
 * Applies the emerald→cyan gradient to text.
 * Used on hero keywords and section highlight words.
 */
export default function GradientText({
  children,
  className,
  from = "#00E87B",
  to = "#00B4D8",
}: GradientTextProps): React.ReactElement {
  return (
    <span
      className={cn("inline-block bg-clip-text text-transparent", className)}
      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {children}
    </span>
  );
}
