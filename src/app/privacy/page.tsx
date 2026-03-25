import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";

const SITE_URL = "https://iptvuksubscription.uk";
const LAST_UPDATED = "26 March 2026";
const COMPANY_EMAIL = "support@iptvuksubscription.uk";

export const metadata: Metadata = {
  title: "Privacy Policy — IPTV UK Subscription",
  description:
    "Privacy Policy for IPTV UK Subscription. We are committed to protecting your personal data in accordance with UK GDPR and the Data Protection Act 2018.",
  alternates: { canonical: `${SITE_URL}/privacy/` },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website", locale: "en_GB", url: `${SITE_URL}/privacy/`,
    siteName: "IPTV UK Subscription",
    title: "Privacy Policy — IPTV UK Subscription",
    description: "How we collect, use, and protect your personal data under UK GDPR.",
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",           item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Privacy Policy", item: `${SITE_URL}/privacy/` },
  ],
};

const H2 = "font-display font-semibold text-body text-lg mt-10 mb-3";
const H3 = "font-body font-semibold text-body text-sm mt-6 mb-2";
const P  = "text-sm text-muted leading-relaxed mb-3";
const LI = "text-sm text-muted leading-relaxed";
const UL = "list-disc list-outside pl-5 space-y-1.5 mb-3";

export default function PrivacyPage(): React.ReactElement {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      {/* ── Hero ── */}
      <section className="pt-32 pb-12 bg-deep">
        <div className="mx-auto max-w-[860px] px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
          <p className="label-tag mb-4">Legal</p>
          <h1 className="font-display font-bold tracking-[-0.04em] leading-[1.05] text-body mb-4" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>
            Privacy Policy
          </h1>
          <p className={P}>Last updated: {LAST_UPDATED}</p>
          <p className={P}>
            IPTV UK Subscription (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and share your personal data when you visit{" "}
            <strong className="text-body">iptvuksubscription.uk</strong> or subscribe to our service. We comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="pb-24 bg-surface">
        <div className="mx-auto max-w-[860px] px-6">

          {/* 1 */}
          <h2 className={H2}>1. Who We Are</h2>
          <p className={P}>The data controller responsible for your personal data is IPTV UK Subscription, operating at iptvuksubscription.uk. For all data protection queries, contact us at{" "}
            <a href={`mailto:${COMPANY_EMAIL}`} className="text-accent hover:text-body transition-colors">{COMPANY_EMAIL}</a>.
          </p>

          {/* 2 */}
          <h2 className={H2}>2. What Personal Data We Collect</h2>
          <h3 className={H3}>2.1 Data you provide directly</h3>
          <ul className={UL}>
            <li className={LI}><strong className="text-body">Email address</strong> — required to deliver your subscription credentials and communicate with you;</li>
            <li className={LI}><strong className="text-body">Payment information</strong> — processed by our PCI-compliant payment processor; we do not store card numbers or CVVs on our servers;</li>
            <li className={LI}><strong className="text-body">Name</strong> — collected at checkout and when you contact support;</li>
            <li className={LI}><strong className="text-body">Support enquiries</strong> — the content of messages you send us via the contact form or email.</li>
          </ul>
          <h3 className={H3}>2.2 Data collected automatically</h3>
          <ul className={UL}>
            <li className={LI}><strong className="text-body">IP address</strong> — logged for security purposes and to detect abuse of the service;</li>
            <li className={LI}><strong className="text-body">Device and browser information</strong> — collected to diagnose technical issues;</li>
            <li className={LI}><strong className="text-body">Usage data</strong> — pages visited and time spent on our website, collected via analytics tools;</li>
            <li className={LI}><strong className="text-body">Cookies</strong> — see Section 8 for our cookie policy.</li>
          </ul>

          {/* 3 */}
          <h2 className={H2}>3. Lawful Basis for Processing</h2>
          <p className={P}>We process your personal data on the following lawful bases under UK GDPR:</p>
          <ul className={UL}>
            <li className={LI}><strong className="text-body">Performance of a contract</strong> — to process your payment, deliver your credentials, and provide the subscription service you have purchased;</li>
            <li className={LI}><strong className="text-body">Legitimate interests</strong> — to prevent fraud, maintain service security, and improve our service (where such interests are not overridden by your rights);</li>
            <li className={LI}><strong className="text-body">Legal obligation</strong> — to comply with applicable laws and regulations;</li>
            <li className={LI}><strong className="text-body">Consent</strong> — for marketing communications, where you have opted in.</li>
          </ul>

          {/* 4 */}
          <h2 className={H2}>4. How We Use Your Data</h2>
          <p className={P}>We use your personal data to:</p>
          <ul className={UL}>
            <li className={LI}>Process payments and deliver subscription credentials;</li>
            <li className={LI}>Provide customer support and respond to your enquiries;</li>
            <li className={LI}>Send service-related notifications (subscription expiry reminders, credential recovery);</li>
            <li className={LI}>Detect, prevent, and investigate fraud or misuse of the service;</li>
            <li className={LI}>Improve our website and service through aggregated, anonymised analytics;</li>
            <li className={LI}>Send marketing communications, where you have given consent and can unsubscribe at any time.</li>
          </ul>
          <p className={P}>We will never sell your personal data to third parties.</p>

          {/* 5 */}
          <h2 className={H2}>5. Data Sharing</h2>
          <p className={P}>We share your personal data only with:</p>
          <ul className={UL}>
            <li className={LI}><strong className="text-body">Payment processors</strong> — to handle transactions securely (e.g. Stripe, PayPal). They act as independent data controllers under their own privacy policies;</li>
            <li className={LI}><strong className="text-body">Email service providers</strong> — to deliver transactional and service emails on our behalf, acting as data processors under our instruction;</li>
            <li className={LI}><strong className="text-body">Analytics providers</strong> — aggregated, anonymised data only, to help us understand website usage;</li>
            <li className={LI}><strong className="text-body">Law enforcement or regulatory bodies</strong> — where required by law or to protect our rights.</li>
          </ul>
          <p className={P}>All third-party processors we use are bound by appropriate data processing agreements and provide adequate data protection safeguards.</p>

          {/* 6 */}
          <h2 className={H2}>6. Data Retention</h2>
          <p className={P}>We retain your personal data for as long as necessary to provide the service and comply with our legal obligations:</p>
          <ul className={UL}>
            <li className={LI}><strong className="text-body">Account data</strong> (email, name): retained while your subscription is active and for 12 months after expiry, after which it is deleted or anonymised;</li>
            <li className={LI}><strong className="text-body">Payment records</strong>: retained for 7 years to comply with UK tax and accounting requirements;</li>
            <li className={LI}><strong className="text-body">Support communications</strong>: retained for 2 years after the last interaction;</li>
            <li className={LI}><strong className="text-body">Security logs</strong> (IP addresses): retained for 90 days.</li>
          </ul>

          {/* 7 */}
          <h2 className={H2}>7. Your Rights Under UK GDPR</h2>
          <p className={P}>You have the following rights regarding your personal data:</p>
          <ul className={UL}>
            <li className={LI}><strong className="text-body">Right of access</strong> — request a copy of the personal data we hold about you;</li>
            <li className={LI}><strong className="text-body">Right to rectification</strong> — request correction of inaccurate or incomplete data;</li>
            <li className={LI}><strong className="text-body">Right to erasure</strong> (&ldquo;right to be forgotten&rdquo;) — request deletion of your data, subject to our legal obligations;</li>
            <li className={LI}><strong className="text-body">Right to restriction</strong> — request that we limit processing of your data in certain circumstances;</li>
            <li className={LI}><strong className="text-body">Right to data portability</strong> — receive your data in a commonly used, machine-readable format;</li>
            <li className={LI}><strong className="text-body">Right to object</strong> — object to processing based on legitimate interests or for direct marketing;</li>
            <li className={LI}><strong className="text-body">Right to withdraw consent</strong> — where processing is based on consent, you may withdraw it at any time.</li>
          </ul>
          <p className={P}>To exercise any of these rights, contact us at{" "}
            <a href={`mailto:${COMPANY_EMAIL}`} className="text-accent hover:text-body transition-colors">{COMPANY_EMAIL}</a>. We will respond within 30 days. You also have the right to lodge a complaint with the UK Information Commissioner&apos;s Office (ICO) at{" "}
            <strong className="text-body">ico.org.uk</strong> if you believe your data has been handled unlawfully.
          </p>

          {/* 8 */}
          <h2 className={H2}>8. Cookies</h2>
          <p className={P}>We use cookies to improve your browsing experience and to understand how our site is used. The cookies we set include:</p>
          <ul className={UL}>
            <li className={LI}><strong className="text-body">Strictly necessary cookies</strong>: required for core site functionality (e.g. session management). Cannot be disabled;</li>
            <li className={LI}><strong className="text-body">Analytics cookies</strong>: help us understand page views and user behaviour in aggregate. Can be declined;</li>
            <li className={LI}><strong className="text-body">Preference cookies</strong>: remember your choices (e.g. dismissing a banner). Can be declined.</li>
          </ul>
          <p className={P}>You can control cookies through your browser settings. Disabling certain cookies may affect site functionality. We do not use advertising or tracking cookies for targeted marketing.</p>

          {/* 9 */}
          <h2 className={H2}>9. Data Security</h2>
          <p className={P}>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, loss, destruction, or alteration. These include:</p>
          <ul className={UL}>
            <li className={LI}>HTTPS encryption for all data transmitted between your browser and our servers;</li>
            <li className={LI}>Encrypted storage for sensitive data;</li>
            <li className={LI}>Access controls limiting data access to authorised personnel;</li>
            <li className={LI}>Regular security reviews of our systems.</li>
          </ul>
          <p className={P}>No method of transmission over the internet is 100% secure. In the event of a data breach that poses a risk to your rights and freedoms, we will notify you and the ICO within 72 hours as required by UK GDPR.</p>

          {/* 10 */}
          <h2 className={H2}>10. International Transfers</h2>
          <p className={P}>Some of our service providers may be based outside the UK. Where personal data is transferred outside the UK, we ensure appropriate safeguards are in place — either through UK adequacy decisions, standard contractual clauses, or other approved transfer mechanisms. We do not transfer your data to countries without adequate data protection levels.</p>

          {/* 11 */}
          <h2 className={H2}>11. Children&apos;s Privacy</h2>
          <p className={P}>Our service is not directed at individuals under the age of 18. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us at {COMPANY_EMAIL} and we will promptly delete the information.</p>

          {/* 12 */}
          <h2 className={H2}>12. Changes to This Policy</h2>
          <p className={P}>We may update this Privacy Policy from time to time to reflect changes in law, technology, or our practices. We will notify you of significant changes by email or by posting a notice on our website. The &ldquo;last updated&rdquo; date at the top indicates when this policy was last revised. Continued use of our service after the effective date constitutes acceptance of the updated policy.</p>

          {/* 13 */}
          <h2 className={H2}>13. Contact Us</h2>
          <p className={P}>For any questions about this Privacy Policy or to exercise your data rights, contact:</p>
          <p className={P}>
            <strong className="text-body">Email:</strong>{" "}
            <a href={`mailto:${COMPANY_EMAIL}`} className="text-accent hover:text-body transition-colors">{COMPANY_EMAIL}</a>
          </p>
          <p className={P}>We will acknowledge your request within 72 hours and respond fully within 30 days.</p>

          {/* Footer links */}
          <div className="mt-12 pt-8 border-t border-line flex flex-wrap gap-4 text-xs text-subtle">
            <Link href="/terms/" className="text-accent hover:text-body transition-colors">Terms of Service</Link>
            <Link href="/refund-policy/" className="text-accent hover:text-body transition-colors">Refund Policy</Link>
            <Link href="/contact/" className="text-accent hover:text-body transition-colors">Contact Support</Link>
            <Link href="/pricing/" className="text-accent hover:text-body transition-colors">Pricing Plans</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
