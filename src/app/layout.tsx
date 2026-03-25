import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
    "The UK's most reliable IPTV subscription. Access 10,000+ live channels, sports, and entertainment with instant activation — no contracts.",
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
      "10,000+ live channels, sports, and entertainment. Instant activation, no contracts.",
    images: [{ url: "/images/brand/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV UK Subscription",
    description: "10,000+ live channels. Instant activation, no contracts.",
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050508",
};

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
      </head>
      <body className="min-h-full flex flex-col bg-surface text-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
