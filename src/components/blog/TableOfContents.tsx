"use client";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps): React.ReactElement {
  if (items.length === 0) return <></>;

  return (
    <nav aria-label="Table of contents" className="rounded-[16px] border border-line bg-card p-6">
      <p className="label-tag mb-4">ON THIS PAGE</p>
      <ol className="flex flex-col gap-2">
        {items.map((item) => (
          <li
            key={item.id}
            style={{ paddingLeft: `${(item.level - 2) * 12}px` }}
          >
            <a
              href={`#${item.id}`}
              className="text-sm text-muted hover:text-body transition-colors"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
