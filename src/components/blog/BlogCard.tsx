import Link from "next/link";
import type { BlogPost } from "@/types";
import { formatDate } from "@/lib/utils";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps): React.ReactElement {
  return (
    <Card hover className="group flex flex-col gap-4 p-6">
      <div className="flex items-center gap-3">
        <Badge variant="muted">{post.category}</Badge>
        <span className="text-xs text-subtle">{post.readingTime}</span>
      </div>

      <div className="flex-1">
        <h3 className="font-display text-xl font-semibold text-body group-hover:text-accent transition-colors leading-snug">
          <Link href={`/blog/${post.slug}/`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
          {post.description}
        </p>
      </div>

      <div className="flex items-center justify-between text-xs text-subtle">
        <span>{post.author}</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </div>
    </Card>
  );
}
