import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";

export default function FAQSection(): React.ReactElement {
  return (
    <Section id="faq" narrow>
      <div className="text-center mb-12">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.02em] text-body">
          Common Questions
        </h2>
      </div>
      {/* TODO: Radix Accordion with FaqItem entries */}
    </Section>
  );
}
