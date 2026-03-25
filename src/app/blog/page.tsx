import type { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import Section from "@/components/layout/Section";
import BlogGrid from "@/components/blog/BlogGrid";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "IPTV UK Blog — Tips, Guides & News",
  description:
    "IPTV UK subscription guides, setup tutorials, channel comparisons, and streaming tips. Stay up to date with the latest IPTV news and best practices.",
  alternates: { canonical: "https://iptvuksubscription.uk/blog/" },
};

export default function BlogPage(): React.ReactElement {
  const posts = getAllBlogPosts();

  return (
    <>
      <PageHeader
        label="BLOG"
        title="IPTV UK Guides & News"
        description="Setup tutorials, channel guides, and streaming tips from the IPTV UK team."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <Section>
        <BlogGrid posts={posts} />
      </Section>
    </>
  );
}
