import type {
  Plan,
  ContentItem,
  Testimonial,
  FaqItem,
  Stat,
  SetupGuide,
  NavItem,
} from "@/types";

// ─── Navigation ───────────────────────────────────────────────────────────

export const navItems: NavItem[] = [
  { label: "Channels", href: "/iptv-uk-channels/" },
  { label: "Features", href: "/iptv-subscription-uk/" },
  { label: "Pricing",  href: "/pricing/" },
  { label: "Setup",    href: "/setup-guide/" },
  { label: "Blog",     href: "/blog/" },
  { label: "FAQ",      href: "/faq/" },
];

// ─── Pricing Plans ────────────────────────────────────────────────────────

export const plans: Plan[] = [
  {
    id: "1month",
    name: "1 Month",
    months: 1,
    price: 12.99,
    pricePerMonth: 12.99,
    isBestValue: false,
    connections: 1,
    features: [
      "35,000+ live channels",
      "Full HD & 4K streams",
      "UK, US & international",
      "24/7 customer support",
      "Instant activation",
    ],
  },
  {
    id: "3months",
    name: "3 Months",
    months: 3,
    price: 29.99,
    pricePerMonth: 9.99,
    isBestValue: false,
    connections: 1,
    features: [
      "35,000+ live channels",
      "Full HD & 4K streams",
      "UK, US & international",
      "24/7 customer support",
      "Instant activation",
      "VOD library access",
    ],
  },
  {
    id: "6months",
    name: "6 Months",
    months: 6,
    price: 44.99,
    pricePerMonth: 7.49,
    isBestValue: true,
    connections: 2,
    badge: "Best Value",
    features: [
      "35,000+ live channels",
      "Full HD & 4K streams",
      "UK, US & international",
      "24/7 priority support",
      "Instant activation",
      "VOD library access",
      "2 simultaneous connections",
      "7-day catch-up TV",
    ],
  },
  {
    id: "12months",
    name: "12 Months",
    months: 12,
    price: 69.99,
    pricePerMonth: 5.83,
    isBestValue: false,
    connections: 2,
    features: [
      "35,000+ live channels",
      "Full HD & 4K streams",
      "UK, US & international",
      "24/7 priority support",
      "Instant activation",
      "VOD library access",
      "2 simultaneous connections",
      "7-day catch-up TV",
      "PPV sports included",
    ],
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────

export const stats: Stat[] = [
  { label: "Live Channels",      value: "35,000", suffix: "+" },
  { label: "Active Subscribers", value: "50,000", suffix: "+" },
  { label: "Countries Covered",  value: "150",    suffix: "+" },
  { label: "Uptime",             value: "99.9",   suffix: "%" },
];

// ─── Content Showcase ─────────────────────────────────────────────────────
// Images match actual files in public/images/content/

export const contentItems: ContentItem[] = [
  // Movies
  {
    id: "m1",
    title: "Avengers: Doomsday",
    type: "movie",
    genre: "Marvel · Action",
    year: 2026,
    image: "/images/content/movies/avengers-doomsday-official-release-date-uk.jpg",
  },
  {
    id: "m2",
    title: "Dune: Part Three",
    type: "movie",
    genre: "Sci-Fi · Epic",
    year: 2026,
    image: "/images/content/movies/dune-part-three-online-streaming-platform-uk.jpg",
  },
  {
    id: "m3",
    title: "Project Hail Mary",
    type: "movie",
    genre: "Sci-Fi · Adventure",
    year: 2026,
    image: "/images/content/movies/Project-Hail-Mary-IPTV-UK-streaming.jpg",
  },
  {
    id: "m4",
    title: "Send Help",
    type: "movie",
    genre: "Horror · Thriller",
    year: 2026,
    image: "/images/content/movies/send-help-movie-watch-online-uk-free-iptv-subscription.jpg",
  },
  {
    id: "m5",
    title: "The Odyssey",
    type: "movie",
    genre: "Epic · Drama",
    year: 2026,
    image: "/images/content/movies/the-odyssey-movie-2026-streaming-availability.jpg",
  },
  // TV Shows
  {
    id: "t1",
    title: "Stranger Things 5",
    type: "tvshow",
    genre: "Sci-Fi · Horror",
    year: 2026,
    image: "/images/content/tvshows/iptv-uk-subscription-Stranger-Things-5.jpg",
  },
  {
    id: "t2",
    title: "Spider-Noir",
    type: "tvshow",
    genre: "Marvel · Noir",
    year: 2026,
    image: "/images/content/tvshows/spider-noir-tv-show-streaming-guide-reddit.jpg",
  },
  {
    id: "t3",
    title: "A Knight of the Seven Kingdoms",
    type: "tvshow",
    genre: "HBO · Fantasy",
    year: 2026,
    image: "/images/content/tvshows/a-knight-of-the-seven-kingdoms-where-to-watch.jpg",
  },
  {
    id: "t4",
    title: "One Piece Season 2",
    type: "tvshow",
    genre: "Netflix · Adventure",
    year: 2026,
    image: "/images/content/tvshows/how-to-watch-one-piece-tv-show-netflix-iptvuksubscription.uk.jpg",
  },
  {
    id: "t5",
    title: "Succession",
    type: "tvshow",
    genre: "HBO · Drama",
    year: 2026,
    image: "/images/content/tvshows/iptv-uk-subscription-succession-tv-show-2026-watch-online.jpg",
  },
  // Sports
  {
    id: "s1",
    title: "Premier League Live",
    type: "sport",
    genre: "Football",
    frequency: "Weekly",
    image: "/images/content/sports/best-iptv-for-premier-league-football-uk.jpg",
  },
  {
    id: "s2",
    title: "UFC PPV Events",
    type: "sport",
    genre: "Combat Sports",
    frequency: "Monthly",
    image: "/images/content/sports/watch-ufc-live-stream-free-uk-iptv-subscription.jpg",
  },
  {
    id: "s3",
    title: "Formula 1 Racing",
    type: "sport",
    genre: "Motorsport",
    frequency: "Bi-weekly",
    image: "/images/content/sports/watch-f1-live-stream-free-uk-reddit-2026.jpg",
  },
  {
    id: "s4",
    title: "MLB Baseball",
    type: "sport",
    genre: "Baseball",
    frequency: "Weekly",
    image: "/images/content/sports/how-to-watch-mlb-2026-live-stream-uk.jpg",
  },
  {
    id: "s5",
    title: "Champions League",
    type: "sport",
    genre: "Football",
    frequency: "Tues/Wed",
    image: "/images/content/sports/best-sports-streaming-apps-recommendations-uk.jpg",
  },
  // News & Entertainment
  {
    id: "n1",
    title: "CNN International",
    type: "news",
    genre: "World News",
    frequency: "Live",
    image: "/images/content/news/CNN-news-uk-iptv-channel-working-2026.jpg",
  },
  {
    id: "n2",
    title: "Al Jazeera English",
    type: "news",
    genre: "World News",
    frequency: "Live",
    image: "/images/content/news/where-to-whatch-al-jazeera-uk-iptv-channel-working-2026.jpg",
  },
  {
    id: "n3",
    title: "The Tonight Show",
    type: "news",
    genre: "Entertainment",
    frequency: "Nightly",
    image: "/images/content/news/iptv-uk-subscriptinon-watch-jimmy-fallon-tonight-show-live-2026.jpg",
  },
  {
    id: "n4",
    title: "Sky News Live",
    type: "news",
    genre: "UK News",
    frequency: "Live",
    image: "/images/content/news/best-iptv-subscription-for-uk-2026-reddit-reviews.jpg",
  },
  {
    id: "n5",
    title: "BBC News 24/7",
    type: "news",
    genre: "UK News",
    frequency: "Live",
    image: "/images/content/news/where-to-find-trusted-iptv-sellers-reddit-2026.jpg",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: "r1",
    name: "James T.",
    location: "Manchester",
    rating: 5,
    body: "Best IPTV service I've used in the UK. Crystal clear Premier League streams, zero buffering. The 6-month plan is incredible value.",
    plan: "6 Month",
    date: "2026-01-15",
  },
  {
    id: "r2",
    name: "Sarah K.",
    location: "London",
    rating: 5,
    body: "Setup was instant — literally 5 minutes from payment to watching. Channel selection is massive, especially for sports.",
    plan: "12 Month",
    date: "2026-02-03",
  },
  {
    id: "r3",
    name: "Mike R.",
    location: "Birmingham",
    rating: 5,
    body: "Been using IPTV UK for 8 months now. Reliable, fast, and the support team sorted my query within the hour.",
    plan: "6 Month",
    date: "2026-01-28",
  },
  {
    id: "r4",
    name: "Claire W.",
    location: "Leeds",
    rating: 4,
    body: "Great service overall. The catch-up TV feature is brilliant for not missing matches. Would definitely recommend.",
    plan: "3 Month",
    date: "2026-02-10",
  },
  {
    id: "r5",
    name: "David P.",
    location: "Edinburgh",
    rating: 5,
    body: "Switched from Sky and saving a fortune. All the same channels, better picture quality on 4K streams.",
    plan: "12 Month",
    date: "2026-01-20",
  },
  {
    id: "r6",
    name: "Emma L.",
    location: "Bristol",
    rating: 5,
    body: "Formula 1 in 4K is stunning. Never had an issue mid-race. This is exactly what I was looking for.",
    plan: "6 Month",
    date: "2026-02-14",
  },
  {
    id: "r7",
    name: "Tom H.",
    location: "Liverpool",
    rating: 5,
    body: "The free trial convinced me immediately. Signed up for 12 months and haven't looked back. Massive channel list.",
    plan: "12 Month",
    date: "2026-02-20",
  },
  {
    id: "r8",
    name: "Priya S.",
    location: "Leicester",
    rating: 5,
    body: "International channels are phenomenal — I get channels from India, Pakistan, and the UAE alongside all UK content.",
    plan: "6 Month",
    date: "2026-03-01",
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────

export const faqItems: FaqItem[] = [
  {
    id: "f1",
    question: "What is an IPTV UK subscription?",
    answer:
      "An IPTV UK subscription gives you access to thousands of live TV channels, sports events, and on-demand content delivered over your internet connection. Unlike traditional satellite or cable TV, IPTV streams content directly to any compatible device — Smart TV, Fire Stick, Android box, phone, or tablet.",
    category: "general",
  },
  {
    id: "f2",
    question: "How do I set up my IPTV subscription?",
    answer:
      "Setup takes less than 5 minutes. After purchase, you'll receive your M3U playlist URL and login credentials by email. Simply enter these into any IPTV player app (we recommend TiviMate, IPTV Smarters, or Perfect Player). Full device-specific guides are available on our setup page.",
    category: "setup",
  },
  {
    id: "f3",
    question: "What devices are compatible with IPTV UK?",
    answer:
      "Our service works on virtually any device: Amazon Fire Stick, Android TV boxes, Smart TVs (Samsung, LG, Sony), Android phones and tablets, iPhones and iPads, Windows and Mac computers, MAG boxes, and Kodi. If it runs an IPTV player app, it works.",
    category: "setup",
  },
  {
    id: "f4",
    question: "How many channels are included?",
    answer:
      "All plans include 35,000+ live channels covering UK terrestrial (BBC, ITV, Channel 4, Channel 5), Sky Sports, BT Sport, Sky Cinema, international channels from 150+ countries, and 24/7 news channels. Sports and premium channels are included at no extra cost.",
    category: "channels",
  },
  {
    id: "f5",
    question: "What internet speed do I need for IPTV?",
    answer:
      "For standard HD streaming, 10 Mbps is sufficient. For Full HD (1080p), we recommend 20 Mbps. For 4K Ultra HD streams, 50 Mbps or more ensures a smooth, buffer-free experience. Most UK broadband connections easily meet these requirements.",
    category: "technical",
  },
  {
    id: "f6",
    question: "Can I use my subscription on multiple devices?",
    answer:
      "Our 1-month and 3-month plans support 1 simultaneous connection. Our 6-month and 12-month plans include 2 simultaneous connections, letting you and a family member watch different channels at the same time on different devices.",
    category: "plans",
  },
  {
    id: "f7",
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit and debit cards (Visa, Mastercard, Amex), PayPal, and cryptocurrency. All payments are processed securely through encrypted payment gateways.",
    category: "billing",
  },
  {
    id: "f8",
    question: "Is there a free trial available?",
    answer:
      "We offer a 24-hour free trial so you can test the service before committing. Contact our support team to request a trial — no payment required. This lets you verify compatibility with your devices and assess stream quality.",
    category: "plans",
  },
];

// ─── Setup Guides ─────────────────────────────────────────────────────────

export const setupGuides: SetupGuide[] = [
  {
    device: "firestick",
    name: "Amazon Fire Stick",
    icon: "fire",
    steps: [
      "Go to Settings > Device > Developer Options and enable Apps from Unknown Sources",
      "Open the Downloader app (install from Amazon App Store if needed)",
      "Enter the IPTV Smarters Pro APK URL and download",
      "Install the app and enter your M3U URL and credentials",
      "Start watching your channels",
    ],
  },
  {
    device: "androidtv",
    name: "Android TV / Box",
    icon: "android",
    steps: [
      "Open Google Play Store on your Android TV",
      "Search for 'TiviMate IPTV Player' and install",
      "Open TiviMate and tap 'Add Playlist'",
      "Select 'M3U Playlist' and enter your playlist URL",
      "Wait for channels to load and start watching",
    ],
  },
  {
    device: "smarttv",
    name: "Smart TV (Samsung/LG)",
    icon: "tv",
    steps: [
      "Open the Smart TV app store",
      "Search for 'Smart IPTV' or 'SSIPTV'",
      "Install and launch the application",
      "Navigate to the settings and enter your M3U URL",
      "Channels will load automatically",
    ],
  },
  {
    device: "vlc",
    name: "VLC / Windows / Mac",
    icon: "monitor",
    steps: [
      "Download and install VLC Media Player (free)",
      "Open VLC and go to Media > Open Network Stream",
      "Paste your M3U playlist URL into the URL field",
      "Click Play — your channels will load",
      "Use the playlist panel to browse channels",
    ],
  },
];
