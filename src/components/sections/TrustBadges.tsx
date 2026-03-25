import Section from "@/components/layout/Section";

const badges = [
  { icon: "shield", label: "Secure Checkout" },
  { icon: "zap", label: "Instant Activation" },
  { icon: "refresh-cw", label: "No Contracts" },
  { icon: "headphones", label: "24/7 Support" },
  { icon: "wifi", label: "99.9% Uptime" },
];

export default function TrustBadges(): React.ReactElement {
  return (
    <Section className="py-12" id="trust">
      <div className="flex flex-wrap items-center justify-center gap-8">
        {badges.map((badge) => (
          <div key={badge.label} className="flex items-center gap-2 text-sm text-muted">
            <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
            {badge.label}
          </div>
        ))}
      </div>
    </Section>
  );
}
