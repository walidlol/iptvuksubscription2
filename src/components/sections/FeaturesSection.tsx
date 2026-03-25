import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";

export default function FeaturesSection(): React.ReactElement {
  return (
    <Section id="features">
      <div className="text-center mb-12">
        <SectionLabel>FEATURES</SectionLabel>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.02em] text-body">
          Everything You Need
        </h2>
      </div>
      {/* TODO: Feature cards grid */}
    </Section>
  );
}
