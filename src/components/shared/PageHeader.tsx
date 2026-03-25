import SectionLabel from "@/components/ui/SectionLabel";
import Breadcrumb, { type BreadcrumbItem } from "@/components/shared/Breadcrumb";
import NoiseOverlay from "@/components/ui/NoiseOverlay";

interface PageHeaderProps {
  label: string;
  title: string;
  description?: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageHeader({
  label,
  title,
  description,
  breadcrumbs,
}: PageHeaderProps): React.ReactElement {
  return (
    <div className="relative border-b border-line bg-deep pt-28 pb-16 px-6">
      <NoiseOverlay />
      <div className="relative z-10 mx-auto max-w-[1200px] flex flex-col gap-5">
        <Breadcrumb items={breadcrumbs} />
        <SectionLabel>{label}</SectionLabel>
        <h1 className="font-display text-5xl font-bold tracking-[-0.04em] text-body max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-xl text-lg text-muted leading-relaxed">{description}</p>
        )}
      </div>
    </div>
  );
}
