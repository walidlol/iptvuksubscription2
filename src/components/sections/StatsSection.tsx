import Section from "@/components/layout/Section";
import { stats } from "@/lib/data";

export default function StatsSection(): React.ReactElement {
  return (
    <Section className="border-y border-line bg-deep py-16" id="stats">
      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center gap-1">
            <span className="font-display text-4xl font-bold text-body">
              {stat.value}
              {stat.suffix && (
                <span className="text-accent">{stat.suffix}</span>
              )}
            </span>
            <span className="text-sm text-muted">{stat.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
