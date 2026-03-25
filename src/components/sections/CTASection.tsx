import Link from "next/link";
import Section from "@/components/layout/Section";
import GradientText from "@/components/ui/GradientText";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import { cn } from "@/lib/utils";

const btnPrimary = "inline-flex h-12 items-center justify-center gap-2 rounded-[12px] px-8 text-base font-semibold bg-accent text-deep hover:bg-[#00cc6a] transition-all duration-300";
const btnSecondary = "inline-flex h-12 items-center justify-center gap-2 rounded-[12px] px-8 text-base font-semibold border border-line text-body hover:border-line-hover hover:bg-card transition-all duration-300";

export default function CTASection(): React.ReactElement {
  return (
    <Section className="bg-deep" id="cta">
      <NoiseOverlay />
      <div className="relative z-10 flex flex-col items-center text-center gap-6">
        <h2 className="font-display text-5xl font-bold tracking-[-0.04em] text-body">
          Ready to <GradientText>Start Streaming?</GradientText>
        </h2>
        <p className="max-w-md text-lg text-muted">
          Join 50,000+ satisfied subscribers. Instant activation, no contracts.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/pricing/" className={cn(btnPrimary)}>
            View Pricing
          </Link>
          <Link href="/contact/" className={cn(btnSecondary)}>
            Free Trial
          </Link>
        </div>
      </div>
    </Section>
  );
}
