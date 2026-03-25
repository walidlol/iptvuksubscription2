import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import FeaturesSection from "@/components/sections/FeaturesSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "IPTV Subscription UK — Features & Benefits",
  description:
    "Why choose our IPTV subscription UK service? Full HD & 4K streaming, 99.9% uptime, 2 simultaneous connections, 7-day catch-up TV, and 24/7 UK support.",
  alternates: { canonical: "https://iptvuksubscription.uk/iptv-subscription-uk/" },
};

export default function FeaturesPage(): React.ReactElement {
  return (
    <>
      <PageHeader
        label="FEATURES"
        title="Why Choose Our IPTV Subscription UK"
        description="Premium streaming quality, UK-based support, and the most reliable uptime in the industry."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Features" }]}
      />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
