import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Uppercase accent label used above every section headline.
 * CLAUDE.md: "Every section has a small uppercase label"
 */
export default function SectionLabel({
  children,
  className,
}: SectionLabelProps): React.ReactElement {
  return (
    <span
      className={cn(
        "label-tag inline-flex items-center gap-1.5",
        className
      )}
    >
      <span className="inline-block w-1 h-1 rounded-full bg-accent" />
      {children}
    </span>
  );
}
