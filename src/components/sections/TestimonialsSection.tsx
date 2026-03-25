import Section from "@/components/layout/Section";
import SectionLabel from "@/components/ui/SectionLabel";

export default function TestimonialsSection(): React.ReactElement {
  return (
    <Section id="testimonials">
      <div className="text-center mb-12">
        <SectionLabel>REVIEWS</SectionLabel>
        <h2 className="mt-4 font-display text-4xl font-bold tracking-[-0.02em] text-body">
          Trusted by 50,000+ Subscribers
        </h2>
      </div>
      {/* TODO: Testimonial card grid with star ratings */}
    </Section>
  );
}
