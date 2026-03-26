import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://iptvuksubscription.uk";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "IPTV UK Subscription",
  url: SITE_URL,
  logo: `${SITE_URL}/images/brand/logo.svg`,
  description:
    "The UK's most reliable IPTV subscription service. Access thousands of live channels, sports, and entertainment with instant activation — no contracts.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "support@iptvuksubscription.uk",
    availableLanguage: "English",
  },
  areaServed: "GB",
  sameAs: [],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "IPTV UK Subscription — Premium Streaming Channels",
    template: "%s | IPTV UK Subscription",
  },
  description:
    "The UK's most reliable IPTV subscription. Access 35,000+ live channels, 4K sport & 100,000+ on-demand titles with instant activation — no contracts.",
  keywords: [
    "iptv uk subscription",
    "iptv subscription uk",
    "iptv uk",
    "uk live tv channels",
    "buy iptv uk",
    "best iptv uk",
  ],
  authors: [{ name: "IPTV UK Subscription", url: SITE_URL }],
  creator: "IPTV UK Subscription",
  publisher: "IPTV UK Subscription",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "IPTV UK Subscription",
    title: "IPTV UK Subscription — Premium Streaming Channels",
    description:
      "35,000+ live channels, 4K sport & 100,000+ on-demand. Instant activation, no contracts.",
    images: [{ url: "/images/brand/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV UK Subscription",
    description: "35,000+ live channels. Instant activation, no contracts.",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)",  color: "#050508" },
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
  ],
};

// Anti-flash script — runs before React hydrates to set correct theme
const themeScript = `
try {
  var t = localStorage.getItem('theme');
  if (!t) t = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', t);
} catch(e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html
      lang="en-GB"
      className={dmSans.variable}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&display=swap"
          rel="stylesheet"
        />
        {/* Anti-flash: set data-theme before first paint */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <ThemeProvider>
          <ScrollProgress />
          <CustomCursor />
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
