import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────

export default function Breadcrumb({
  items,
}: {
  items: BreadcrumbItem[];
}): React.ReactElement {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol
        className="flex flex-wrap items-center gap-1.5 text-xs text-subtle"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, i) => (
          <li
            key={item.label}
            className="flex items-center gap-1.5"
            itemScope
            itemType="https://schema.org/ListItem"
            itemProp="itemListElement"
          >
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-muted transition-colors"
                itemProp="item"
              >
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span className="text-muted" itemProp="name">
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(i + 1)} />
            {i < items.length - 1 && (
              <span aria-hidden="true" className="text-subtle/50">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
