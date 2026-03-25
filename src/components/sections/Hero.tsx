import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";
import GradientText from "@/components/ui/GradientText";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

export default function Hero(): React.ReactElement {
  return (
    <Section className="min-h-screen flex items-center bg-deep pt-16" id="hero">
      <NoiseOverlay />
      {/* Placeholder — Hero section */}
      <div className="relative z-10 flex flex-col items-center text-center gap-6">
        <SectionLabel>IPTV UK Subscription</SectionLabel>
        <h1 className="font-display text-5xl font-bold tracking-[-0.04em] text-body">
          <GradientText>Stream Anything.</GradientText>
          <br />
          Pay Less.
        </h1>
        <p className="max-w-xl text-lg text-muted leading-relaxed">
          10,000+ live channels, sports, and entertainment delivered to any device. Instant activation — no contracts.
        </p>
      </div>
    </Section>
  );
}
