import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ChannelsShowcase(): React.ReactElement {
  return (
    <Section id="channels">
      <div className="text-center mb-12">
        <SectionLabel>CHANNELS</SectionLabel>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.02em] text-body">
          10,000+ Live Channels
        </h2>
      </div>
      {/* TODO: Channel category tabs + logos grid */}
    </Section>
  );
}
