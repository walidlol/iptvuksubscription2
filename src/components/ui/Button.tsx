import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "ghost" | "secondary" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  /**
   * Filled emerald button with glow shadow.
   * Use for the single primary CTA per section.
   */
  primary: [
    "bg-accent text-deep font-semibold",
    "shadow-[0_0_20px_var(--accent-glow)]",
    "hover:bg-[#00cc6a]",
    "hover:shadow-[0_0_32px_var(--accent-glow)]",
    "active:bg-[#00b35e] active:shadow-none",
  ].join(" "),

  /**
   * Transparent with border; turns emerald on hover.
   * Use for secondary actions alongside a primary button.
   */
  ghost: [
    "bg-transparent border border-line text-body",
    "hover:border-accent/50 hover:text-accent hover:bg-accent-dim",
    "active:bg-accent-dim/80",
  ].join(" "),

  /**
   * Muted outlined button for tertiary actions.
   */
  secondary: [
    "bg-transparent border border-line text-muted",
    "hover:border-line-hover hover:bg-card hover:text-body",
  ].join(" "),

  /**
   * Red destructive action button.
   */
  danger: [
    "bg-danger text-white font-semibold",
    "hover:bg-[#e0314a]",
    "active:bg-[#cc2a40]",
  ].join(" "),
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9  px-4 text-sm  rounded-[10px] gap-1.5",
  md: "h-11 px-6 text-sm  rounded-[12px] gap-2",
  lg: "h-13 px-8 text-base rounded-[12px] gap-2",
};

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps): React.ReactElement {
  return (
    <button
      className={cn(
        // Base styles
        "inline-flex items-center justify-center",
        "font-body font-semibold select-none cursor-pointer",
        "transition-all duration-300",
        "disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
