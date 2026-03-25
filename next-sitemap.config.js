/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://iptvuksubscription.uk",
  generateRobotsTxt: false,   // robots.ts handles this via Next.js App Router
  sitemapSize: 5000,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api/", "/_next/", "/admin/"] },
      { userAgent: "GPTBot",       disallow: "/" },
      { userAgent: "ChatGPT-User", disallow: "/" },
      { userAgent: "CCBot",        disallow: "/" },
      { userAgent: "anthropic-ai", disallow: "/" },
    ],
  },
  // Per-page priority overrides
  transform: async (config, path) => {
    const priorities = /** @type {Record<string, number>} */ ({
      "/":                    1.0,
      "/pricing/":            0.95,
      "/iptv-uk-channels/":   0.9,
      "/iptv-subscription-uk/": 0.85,
      "/setup-guide/":        0.8,
      "/faq/":                0.8,
      "/about/":              0.7,
      "/contact/":            0.7,
      "/blog/":               0.7,
      "/terms/":              0.3,
      "/privacy/":            0.3,
      "/refund-policy/":      0.3,
    });

    const priority = priorities[path] ?? (path.startsWith("/blog/") ? 0.6 : config.priority);

    const changefreqMap = {
      "/":                    "daily",
      "/pricing/":            "weekly",
      "/iptv-uk-channels/":   "weekly",
      "/blog/":               "daily",
    };
    const changefreq = changefreqMap[path] ?? config.changefreq;

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
