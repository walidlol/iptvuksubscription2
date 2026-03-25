"use client";

import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ContentCarousel(): React.ReactElement {
  return (
    <Section id="content">
      <div className="mb-12">
        <SectionLabel>TRENDING NOW</SectionLabel>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.02em] text-body">
          What&apos;s Streaming
        </h2>
      </div>
      {/* TODO: Horizontal scroll carousel of ContentItem cards */}
    </Section>
  );
}
