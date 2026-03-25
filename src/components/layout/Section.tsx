import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div" | "article";
  narrow?: boolean;
}

/**
 * Standard section wrapper with consistent vertical padding and max-width.
 * CLAUDE.md: "Section padding: 100-120px vertical, 24px horizontal"
 * "Max content width: 1200px"
 */
export default function Section({
  children,
  className,
  id,
  as: Tag = "section",
  narrow = false,
}: SectionProps): React.ReactElement {
  return (
    <Tag
      id={id}
      className={cn(
        "relative w-full py-[100px] px-6",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto w-full",
          narrow ? "max-w-3xl" : "max-w-[1200px]"
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
