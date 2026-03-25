import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTABanner from "@/components/home/CTABanner";
import ContactForm from "./ContactForm";

const SITE_URL = "https://iptvuksubscription.uk";

export const metadata: Metadata = {
  title: "Contact IPTV UK Subscription — 24/7 Support Team",
  description:
    "Contact IPTV UK Subscription support 24/7. Get help with setup, billing, channels, or request a free trial. Average response under 1 hour.",
  alternates: { canonical: `${SITE_URL}/contact/` },
  openGraph: {
    type: "website", locale: "en_GB", url: `${SITE_URL}/contact/`,
    siteName: "IPTV UK Subscription",
    title: "Contact IPTV UK Subscription — 24/7 Support",
    description: "Our UK support team responds in under 1 hour. Get help with setup, billing, free trials, and more.",
    images: [{ url: "/images/brand/og-image.jpg", width: 1200, height: 630 }],
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",    item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact/` },
  ],
};

const CONTACT_DETAILS = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Email",
    value: "support@iptvuksubscription.uk",
    note: "We reply within 1 hour",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.75" />
        <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "Response Time",
    value: "Under 1 hour",
    note: "Average reply time, 24/7",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 0142 2.18 2 2 0 016 4.07v3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 22l4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    label: "Live Chat",
    value: "Available on website",
    note: "Fastest response for urgent issues",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    label: "Free Trial",
    value: "24-hour trial available",
    note: "No credit card required",
  },
];

export default function ContactPage(): React.ReactElement {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="pt-32 pb-16 bg-deep">
        <div className="mx-auto max-w-[1200px] px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <p className="label-tag mb-4">Contact</p>
          <h1
            className="font-display font-bold tracking-[-0.04em] leading-[1.05] text-body mb-5"
            style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)" }}
          >
            We&apos;re Here{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, var(--color-accent) 0%, var(--color-cyan) 100%)" }}>
              24/7
            </span>
          </h1>
          <p className="text-muted text-base sm:text-lg leading-relaxed max-w-[600px]">
            Our <strong className="text-body font-medium">IPTV UK subscription</strong> support team is available around the clock. Whether you need help with setup, billing, your free trial, or a technical issue during live sport — we respond in under an hour. Every ticket is answered by a human.
          </p>
        </div>
      </section>

      {/* ── Contact details row ──────────────────────────────────────────── */}
      <section className="py-10 bg-surface border-y border-line">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CONTACT_DETAILS.map((item) => (
              <div key={item.label} className="flex gap-4 p-5 rounded-[12px] bg-card border border-line">
                <span className="w-9 h-9 rounded-[8px] bg-accent-dim text-accent flex items-center justify-center shrink-0">
                  {item.icon}
                </span>
                <div>
                  <p className="text-[11px] font-body font-bold uppercase tracking-[0.1em] text-accent mb-0.5">{item.label}</p>
                  <p className="text-sm font-body font-semibold text-body leading-snug">{item.value}</p>
                  <p className="text-xs text-subtle mt-0.5">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main content: form + info ─────────────────────────────────────── */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">

            {/* Form — 3/5 */}
            <div className="lg:col-span-3">
              <p className="label-tag mb-4">Send a Message</p>
              <h2 className="font-display font-bold tracking-[-0.03em] text-body mb-2" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
                Get in Touch
              </h2>
              <p className="text-muted text-sm leading-relaxed mb-8">
                Fill in the form below and we&apos;ll reply to your email within 1 hour. For the fastest response during live events, use the live chat widget.
              </p>
              <ContactForm />
            </div>

            {/* Info sidebar — 2/5 */}
            <div className="lg:col-span-2 flex flex-col gap-6">

              {/* What we can help with */}
              <div className="p-6 rounded-[16px] bg-card border border-line">
                <p className="text-[11px] font-body font-bold uppercase tracking-[0.1em] text-accent mb-4">What We Help With</p>
                <ul className="flex flex-col gap-3">
                  {[
                    "Setting up your IPTV UK subscription on any device",
                    "Fixing buffering, EPG issues, or app crashes",
                    "Requesting your 24-hour free trial",
                    "Billing questions, upgrades, and cancellations",
                    "Lost or forgotten credentials",
                    "Adding specific channels to your subscription",
                    "Using your subscription abroad with a VPN",
                    "MAG box portal configuration and MAC registration",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-muted leading-relaxed">
                      <span className="shrink-0 text-accent mt-0.5">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Response commitment */}
              <div className="p-6 rounded-[16px] bg-card border border-line">
                <p className="text-[11px] font-body font-bold uppercase tracking-[0.1em] text-accent mb-4">Our Promise</p>
                <div className="flex flex-col gap-4">
                  {[
                    { title: "Human support only", desc: "No bots. Every message is read and replied to by a real person from our UK-based support team." },
                    { title: "Under 1 hour", desc: "Our average first-response time is under 1 hour — even during evenings, weekends, and match days." },
                    { title: "7-day money back", desc: "Not satisfied within 7 days? We refund in full, no questions asked. No lengthy disputes." },
                  ].map((item) => (
                    <div key={item.title}>
                      <p className="font-body font-semibold text-body text-sm mb-1">{item.title}</p>
                      <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ teaser */}
              <div className="p-5 rounded-[14px] bg-accent-dim border border-accent/15">
                <p className="font-body font-semibold text-body text-sm mb-2">Check our FAQ first</p>
                <p className="text-xs text-muted leading-relaxed mb-3">
                  Our FAQ answers 20+ common questions about devices, channels, billing, and setup — you might find your answer instantly.
                </p>
                <Link href="/faq/" className="text-xs text-accent hover:text-body transition-colors font-medium">
                  Browse the FAQ →
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Common contact reasons ────────────────────────────────────────── */}
      <section className="py-20 bg-deep">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="label-tag mb-4 text-center">Quick Answers</p>
          <h2 className="font-display font-bold tracking-[-0.03em] text-body text-center mb-10" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}>
            Common Questions Before Contacting
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                q: "How do I get my credentials after purchasing?",
                a: "Your M3U playlist URL, username, and password are delivered to your registered email address within minutes of payment confirmation. Check your spam folder if you don't see it within 15 minutes. Contact us with your registered email if you still can't find it.",
              },
              {
                q: "How do I request a free trial?",
                a: "Contact our support team via live chat or using the form above — select 'Free Trial Request' as the subject. Trials are 24 hours, no credit card required. We activate them manually so they're typically live within 30 minutes.",
              },
              {
                q: "My channels are buffering — what do I do?",
                a: "First, check your broadband speed (minimum 10 Mbps for HD, 50 Mbps for 4K). Switch to a wired ethernet connection if possible. Try switching server regions in your player app settings. If issues persist, contact us and we'll diagnose it within the hour.",
              },
              {
                q: "Can I cancel at any time?",
                a: "Yes. There are no long-term contracts. You can stop renewing at any time — your subscription simply expires at the end of the paid period. For refunds within 7 days of purchase, contact support and we'll process a full refund without question.",
              },
            ].map((item) => (
              <div key={item.q} className="p-6 rounded-[16px] bg-card border border-line">
                <dt className="font-body font-semibold text-body text-sm mb-2">{item.q}</dt>
                <dd className="text-xs text-muted leading-relaxed">{item.a}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-sm text-subtle text-center">
            More questions?{" "}
            <Link href="/faq/" className="text-accent hover:text-body transition-colors">Read the full FAQ</Link>
            {" "}or{" "}
            <Link href="/pricing/" className="text-accent hover:text-body transition-colors">view pricing plans</Link>.
          </p>
        </div>
      </section>

      {/* ── Internal links ───────────────────────────────────────────────── */}
      <div className="py-10 bg-surface border-t border-line">
        <div className="mx-auto max-w-[1200px] px-6 flex flex-wrap gap-3 justify-center">
          {[
            { label: "Pricing Plans",  href: "/pricing/" },
            { label: "Channel List",   href: "/iptv-uk-channels/" },
            { label: "Setup Guide",    href: "/setup-guide/" },
            { label: "FAQ",            href: "/faq/" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="px-5 py-2 text-sm text-muted border border-line rounded-full hover:border-accent/40 hover:text-body transition-all duration-200">
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <CTABanner />
    </main>
  );
}
