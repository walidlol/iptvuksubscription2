import type { Metadata } from "next";

const SITE_URL = "https://iptvuksubscription.uk";
const SITE_NAME = "IPTV UK Subscription";
const DEFAULT_OG_IMAGE = "/images/brand/og-image.jpg";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

/**
 * Generates consistent metadata for each page following CLAUDE.md SEO rules.
 * - Title under 60 chars
 * - Description 150-160 chars
 * - Canonical URL
 * - Open Graph tags
 */
export function generatePageMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url,
      siteName: SITE_NAME,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

/**
 * Generates JSON-LD schema for a product/service page.
 */
export function generateProductSchema(plan: {
  name: string;
  price: number;
  description: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `IPTV UK Subscription — ${plan.name}`,
    description: plan.description,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    offers: {
      "@type": "Offer",
      price: plan.price,
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/pricing/`,
    },
  };
}

/**
 * Generates FAQ JSON-LD schema.
 */
export function generateFaqSchema(
  items: Array<{ question: string; answer: string }>
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Generates Article JSON-LD schema for blog posts.
 */
export function generateArticleSchema(post: {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}/blog/${post.slug}/`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/brand/logo.svg`,
      },
    },
  };
}
