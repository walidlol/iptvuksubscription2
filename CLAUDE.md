# IPTV UK Subscription — Project Rules

## Project Overview
Premium IPTV subscription website for the EMD iptvuksubscription.uk.
Awwwards-quality design. SEO-first architecture.
Built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion.

## ECC Integration
This project uses Everything Claude Code (ECC) skills and agents.
Skills are in .claude/skills/ — USE THEM:
- frontend-patterns: Follow for all component architecture
- coding-standards: Follow for all TypeScript/React code
- security-review: Run before any deployment
- verification-loop: Run after completing each major feature
- tdd-workflow: Use when adding interactive features

Agents are in .claude/agents/ — DELEGATE TO THEM:
- code-reviewer: Run after building each page
- security-reviewer: Run before deployment

Commands are in .claude/commands/:
- /code-review: Quick quality check
- /build-fix: When build fails
- /checkpoint: Before risky changes

## Design System — AWWWARDS QUALITY

### Colors (CSS Variables)
#### Dark Mode (Default)
--bg-deep: #050507
--bg-primary: #0A0A0E
--bg-card: #0E0E14
--bg-card-hover: #141420
--border: #1A1A2E
--border-hover: #252540
--accent: #FF2D55            (vibrant red — primary accent)
--accent-dim: rgba(255,45,85,0.10)
--accent-glow: rgba(255,45,85,0.25)
--accent-secondary: #FF6B6B  (soft coral — secondary)
--text-primary: #EEEEF5
--text-secondary: #7B7B9A
--text-tertiary: #4A4A65

#### Light Mode
--bg-deep: #FAFAFA
--bg-primary: #FFFFFF
--bg-card: #F5F5F7
--bg-card-hover: #EBEBF0
--border: #E0E0E8
--border-hover: #D0D0DA
--accent: #0066FF             (electric blue — primary accent)
--accent-dim: rgba(0,102,255,0.08)
--accent-glow: rgba(0,102,255,0.20)
--accent-secondary: #4D94FF   (lighter blue — secondary)
--text-primary: #1A1A2E
--text-secondary: #6B6B85
--text-tertiary: #9B9BB0

### Typography
- Display/Headlines: "Clash Display" (import from CDN)
  Weights: 600, 700
  Letter-spacing: -0.04em on hero, -0.02em on section heads
  Sizes: clamp() for fluid scaling

- Body: "DM Sans" (from next/font/google)
  Weights: 400, 500, 600, 700
  Line-height: 1.6-1.7 for body text

- Labels: DM Sans, 11-12px, weight 700, uppercase,
  letter-spacing 0.1em, color var(--accent)

### Layout Rules
- Max content width: 1200px
- Section padding: 100-120px vertical, 24px horizontal
- Card border-radius: 16-20px
- Button border-radius: 12px
- Mobile-first: design at 375px, scale up

### Animation Rules
- Use Framer Motion for ALL animations
- Scroll reveals: staggerChildren with 0.06-0.1s delay
- Easing: [0.16, 1, 0.3, 1] (spring curve)
- Hover transitions: 0.3s with same easing
- NO CSS @keyframes (Framer Motion only)
- Respect prefers-reduced-motion

### Visual Texture
- Noise overlay at 2-3% opacity on backgrounds
- Radial gradient orbs for atmosphere (green, cyan)
- Subtle grid pattern in hero (masked with radial fade)
- Glass-morphism: background blur + semi-transparent bg + border

### What Makes It Awwwards
- Every section has a small uppercase label ("PRICING", "FAQ")
- Massive headline + subtle body text hierarchy
- Cards that physically lift on hover (translateY -4 to -8px)
- Content sections that slide/fade in on scroll intersection
- Generous whitespace — let content breathe
- Custom thin scrollbar matching theme
- Selection color matches accent

## SEO Rules — NON-NEGOTIABLE

### Every Page Must Have:
1. Unique metadata export (title under 60 chars, description 150-160 chars)
2. Primary keyword in title tag, FIRST position
3. H1 tag containing keyword variation
4. Keyword in first 100 words naturally
5. All images: next/image with descriptive alt text
6. Internal links to at least 3 other pages
7. Breadcrumb navigation
8. Schema.org JSON-LD (Organization, Product, FAQ, etc.)
9. Canonical URL
10. Open Graph tags

### Target Keywords (use naturally, NEVER stuff)
- Primary: "iptv uk subscription"
- Variant: "iptv subscription uk"
- Broad: "iptv uk"

### URL Structure
/                          → Homepage
/pricing/                  → Pricing
/iptv-uk-channels/         → Channels
/iptv-subscription-uk/     → Features
/setup-guide/              → Setup guides
/blog/                     → Blog index
/blog/[slug]/              → Blog posts
/faq/                      → FAQ
/contact/                  → Contact
/about/                    → About
/terms/                    → Terms
/privacy/                  → Privacy
/refund-policy/            → Refund

### Content Requirements
- Homepage: 2,500+ words total across sections
- Money pages: 2,000+ words
- Blog posts: 1,500-3,000 words
- FAQ answers: 50-100 words each, keyword-rich

## Code Standards (from ECC coding-standards skill)
- TypeScript strict: no `any`, explicit return types on exports
- Components under 200 lines — split if larger
- Props always typed with interfaces
- Error handling: try/catch on all async operations
- Immutable patterns: spread operator, never mutate
- Early returns over deep nesting
- Named constants over magic numbers
- Server Components by default, "use client" only when needed
- All images via next/image with width, height, alt, priority
- File naming: PascalCase for components, camelCase for utils

## Content Data
All content data (plans, channels, reviews, FAQ, movies) lives in:
src/lib/data.ts

## Image Locations
- Brand assets: public/images/brand/
- Content images: public/images/content/{movies,tvshows,sports,news}/
- Use next/image with priority on above-fold images

## The 20 Content Showcase Items
Use these for the trending/content carousel and category pages:

### Movies (5)
1. Avengers: Doomsday (Marvel · Action, Dec 2026)
2. Dune: Part Three / Messiah (Sci-Fi · Epic, 2026)
3. The Odyssey (Christopher Nolan · Epic, July 2026)
4. Project Hail Mary (Sci-Fi · Adventure, 2026)
5. Send Help (Sam Raimi · Horror/Thriller, Jan 2026)

### TV Shows (5)
6. Spider-Noir (Nicolas Cage · Marvel Noir, 2026)
7. A Knight of the Seven Kingdoms (HBO · Game of Thrones, 2026)
8. One Piece Season 2 (Netflix · Live Action, 2026)
9. Stranger Things 5 (Sci-Fi · Horror, 2026)
10. Succession (HBO · Award-Winning Drama, 2026)

### Sports (5)
11. Premier League Live (Football, UK Weekly)
12. UEFA Champions League (Football, Tues/Wed)
13. F1 World Championship (Motorsport, Global Grand Prix)
14. Super Bowl LXI and NFL (American Football, Weekly)
15. UFC PPV Events (Combat Sports, Monthly)

### News & Entertainment (5)
16. BBC News 24/7 (UK News, Live)
17. Sky News Live (UK News, Live)
18. CNN International (World News, Live)
19. Al Jazeera English (World News, Live)
20. The Tonight Show with Jimmy Fallon (Entertainment, Nightly)