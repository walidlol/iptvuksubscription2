import type { NextConfig } from "next";

// ─── Content Security Policy ───────────────────────────────────────────────
// Keep directives tight — only allow what the app actually needs.
const CSP_DIRECTIVES = [
  // Default: same-origin only
  "default-src 'self'",

  // Scripts: self + inline scripts Next.js needs + Framer Motion (no external CDN)
  // Note: 'unsafe-inline' is needed for Next.js script injection; nonce-based CSP
  // can be added later with Next.js middleware for stricter control.
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",

  // Styles: self + Google Fonts + Clash Display CDN + inline styles (Tailwind/Framer)
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://api.fontshare.com",

  // Fonts: self + Google Fonts + Fontshare (Clash Display)
  "font-src 'self' https://fonts.gstatic.com https://api.fontshare.com",

  // Images: self + data URIs (used by SVG components)
  "img-src 'self' data: blob:",

  // Media: self only (no external video sources)
  "media-src 'self'",

  // Connect: self + any API endpoints (extend as needed)
  "connect-src 'self'",

  // Frames: none — this site should never be embedded
  "frame-src 'none'",
  "frame-ancestors 'none'",

  // Workers and manifest
  "worker-src 'self' blob:",
  "manifest-src 'self'",

  // Form actions: self only
  "form-action 'self'",

  // Upgrade insecure requests in production
  "upgrade-insecure-requests",
].join("; ");

// ─── Security headers ─────────────────────────────────────────────────────
const SECURITY_HEADERS = [
  {
    key: "Content-Security-Policy",
    value: CSP_DIRECTIVES,
  },
  {
    // Prevent clickjacking — never render in an iframe
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    // Prevent MIME-type sniffing
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    // Referrer: send origin on same-origin, only origin on cross-origin HTTPS
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    // Permissions: disable unused browser features
    key: "Permissions-Policy",
    value: [
      "camera=()",
      "microphone=()",
      "geolocation=()",
      "payment=()",
      "usb=()",
      "interest-cohort=()",
    ].join(", "),
  },
  {
    // Force HTTPS for 2 years, include subdomains
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    // Legacy XSS protection for older browsers
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    // DNS prefetch control
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
];

const nextConfig: NextConfig = {
  reactCompiler: true,

  // Apply security headers to all routes
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: SECURITY_HEADERS,
      },
    ];
  },

  // Canonical redirects — trailing slash enforcement
  async redirects() {
    return [
      // Redirect non-trailing-slash to trailing-slash for all pages
      // (handled by Next.js trailingSlash, but explicit for edge cases)
    ];
  },

  // Image optimisation
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 86400, // 1 day
    remotePatterns: [
      // Add external image domains here if needed
      // e.g. { protocol: "https", hostname: "images.example.com" }
    ],
  },

  // Enforce trailing slashes (matches SEO canonical URLs)
  trailingSlash: true,

  // Production source maps off for security (don't expose source to public)
  productionBrowserSourceMaps: false,

  // Compression
  compress: true,

  // Power header — don't advertise Next.js
  poweredByHeader: false,
};

export default nextConfig;
