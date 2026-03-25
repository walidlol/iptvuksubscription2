import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

/**
 * Returns all blog post slugs from the content/blog directory.
 */
export function getBlogSlugs(): string[] {
  try {
    return fs
      .readdirSync(BLOG_DIR)
      .filter((file) => file.endsWith(".mdx") || file.endsWith(".md"))
      .map((file) => file.replace(/\.(mdx|md)$/, ""));
  } catch {
    return [];
  }
}

/**
 * Returns the full content and metadata for a single blog post by slug.
 */
export function getBlogPost(slug: string): { post: BlogPost; content: string } | null {
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const { text: readTime } = readingTime(content);

  const post: BlogPost = {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    date: data.date ?? new Date().toISOString(),
    author: data.author ?? "IPTV UK Team",
    readingTime: readTime,
    category: data.category ?? "General",
    tags: data.tags ?? [],
    featured: data.featured ?? false,
    image: data.image,
  };

  return { post, content };
}

/**
 * Returns all blog posts sorted by date descending.
 */
export function getAllBlogPosts(): BlogPost[] {
  const slugs = getBlogSlugs();

  return slugs
    .map((slug) => getBlogPost(slug)?.post)
    .filter((post): post is BlogPost => post !== undefined)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Returns featured posts for the blog index hero.
 */
export function getFeaturedPosts(limit = 3): BlogPost[] {
  return getAllBlogPosts()
    .filter((post) => post.featured)
    .slice(0, limit);
}
