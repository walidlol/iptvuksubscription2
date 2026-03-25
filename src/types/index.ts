// ─── Subscription Plans ───────────────────────────────────────────────────

export interface Plan {
  id: string;
  name: string;
  months: number;
  price: number;
  pricePerMonth: number;
  isBestValue: boolean;
  features: string[];
  connections: number;
  badge?: string;
}

// ─── Channels ─────────────────────────────────────────────────────────────

export type ChannelCategory = "sports" | "entertainment" | "news" | "movies" | "kids" | "international";

export interface Channel {
  id: string;
  name: string;
  category: ChannelCategory;
  logo?: string;
  isHd: boolean;
}

// ─── Content Showcase ─────────────────────────────────────────────────────

export type ContentType = "movie" | "tvshow" | "sport" | "news";

export interface ContentItem {
  id: string;
  title: string;
  type: ContentType;
  genre: string;
  year?: number | string;
  frequency?: string;
  image?: string;
}

// ─── Testimonials ─────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  body: string;
  plan: string;
  date: string;
}

// ─── FAQ ──────────────────────────────────────────────────────────────────

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// ─── Blog ─────────────────────────────────────────────────────────────────

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  readingTime: string;
  category: string;
  tags: string[];
  featured?: boolean;
  image?: string;
}

// ─── Stats ────────────────────────────────────────────────────────────────

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

// ─── Setup Guides ─────────────────────────────────────────────────────────

export type DeviceType = "firestick" | "androidtv" | "smarttv" | "mag" | "vlc" | "ios" | "kodi";

export interface SetupGuide {
  device: DeviceType;
  name: string;
  steps: string[];
  icon: string;
}

// ─── Navigation ───────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}
