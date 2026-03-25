import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export default function Card({
  children,
  className,
  hover = false,
  glass = false,
}: CardProps): React.ReactElement {
  return (
    <div
      className={cn(
        "rounded-[16px] border border-line",
        glass
          ? "bg-card/60 backdrop-blur-md"
          : "bg-card",
        hover &&
          "transition-all duration-300 hover:border-line-hover hover:bg-card-hover hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]",
        className
      )}
    >
      {children}
    </div>
  );
}
