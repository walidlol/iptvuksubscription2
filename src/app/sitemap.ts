import type { MetadataRoute } from "next";

const SITE_URL = "https://iptvuksubscription.uk";

type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

interface SitemapEntry {
  url: string;
  lastModified: Date;
  changeFrequency: ChangeFreq;
  priority: number;
}

const STATIC_ROUTES: Array<{ path: string; changeFreq: ChangeFreq; priority: number }> = [
  { path: "",              changeFreq: "daily",   priority: 1.0 },
  { path: "pricing",      changeFreq: "weekly",  priority: 0.9 },
  { path: "iptv-uk-channels", changeFreq: "weekly",  priority: 0.9 },
  { path: "iptv-subscription-uk", changeFreq: "monthly", priority: 0.8 },
  { path: "setup-guide",  changeFreq: "monthly", priority: 0.8 },
  { path: "faq",          changeFreq: "monthly", priority: 0.8 },
  { path: "about",        changeFreq: "monthly", priority: 0.7 },
  { path: "contact",      changeFreq: "monthly", priority: 0.7 },
  { path: "blog",         changeFreq: "daily",   priority: 0.7 },
  { path: "terms",        changeFreq: "yearly",  priority: 0.3 },
  { path: "privacy",      changeFreq: "yearly",  priority: 0.3 },
  { path: "refund-policy",changeFreq: "yearly",  priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: SitemapEntry[] = STATIC_ROUTES.map(({ path, changeFreq, priority }) => ({
    url: path ? `${SITE_URL}/${path}/` : `${SITE_URL}/`,
    lastModified: now,
    changeFrequency: changeFreq,
    priority,
  }));

  // Blog posts are generated dynamically via next-sitemap postbuild.
  // Add any known blog slugs here to include them in the Next.js sitemap too.
  const BLOG_SLUGS: string[] = [
    // e.g. "best-iptv-uk-subscription-2026"
    // populated as blog content is added
  ];

  const blogEntries: SitemapEntry[] = BLOG_SLUGS.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
