import type { BlogPost } from "@/types";
import BlogCard from "@/components/blog/BlogCard";

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps): React.ReactElement {
  if (posts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <p className="text-muted">No posts published yet. Check back soon.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <div key={post.slug} className="relative">
          <BlogCard post={post} />
        </div>
      ))}
    </div>
  );
}
