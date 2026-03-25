import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getBlogPost, getBlogSlugs } from "@/lib/blog";
import { generateArticleSchema } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";
import Section from "@/components/layout/Section";
import PageHeader from "@/components/shared/PageHeader";
import SchemaOrg from "@/components/shared/SchemaOrg";
import TableOfContents from "@/components/blog/TableOfContents";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams(): Promise<Array<{ slug: string }>> {
  return getBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const result = getBlogPost(slug);

  if (!result) return {};

  const { post } = result;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://iptvuksubscription.uk/blog/${slug}/` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps): Promise<React.ReactElement> {
  const { slug } = await params;
  const result = getBlogPost(slug);

  if (!result) notFound();

  const { post, content } = result;
  const schema = generateArticleSchema(post);

  return (
    <>
      <SchemaOrg schema={schema} />
      <PageHeader
        label={post.category.toUpperCase()}
        title={post.title}
        description={post.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog/" },
          { label: post.title },
        ]}
      />
      <Section>
        <div className="flex gap-12 lg:flex-row flex-col">
          {/* Article */}
          <article className="prose prose-invert max-w-none flex-1 min-w-0">
            <div className="flex items-center gap-4 mb-8 text-sm text-muted">
              <span>{post.author}</span>
              <span>·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
            <MDXRemote source={content} />
          </article>

          {/* Sidebar */}
          <aside className="lg:w-60 shrink-0">
            <TableOfContents items={[]} />
          </aside>
        </div>
      </Section>
    </>
  );
}
