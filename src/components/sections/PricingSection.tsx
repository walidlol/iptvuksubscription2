import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";

export default function PricingSection(): React.ReactElement {
  return (
    <Section id="pricing">
      <div className="text-center mb-12">
        <SectionLabel>PRICING</SectionLabel>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.02em] text-body">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-muted max-w-xl mx-auto">
          No hidden fees. Cancel anytime. Prices in GBP.
        </p>
      </div>
      {/* TODO: PricingCard grid */}
    </Section>
  );
}
