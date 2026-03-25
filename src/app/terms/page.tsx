import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";

const SITE_URL = "https://iptvuksubscription.uk";
const LAST_UPDATED = "26 March 2026";
const COMPANY_EMAIL = "support@iptvuksubscription.uk";

export const metadata: Metadata = {
  title: "Terms of Service — IPTV UK Subscription",
  description:
    "Terms of Service for IPTV UK Subscription. Read our subscriber agreement covering usage, payments, acceptable use, and liability.",
  alternates: { canonical: `${SITE_URL}/terms/` },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website", locale: "en_GB", url: `${SITE_URL}/terms/`,
    siteName: "IPTV UK Subscription",
    title: "Terms of Service — IPTV UK Subscription",
    description: "Terms of Service for IPTV UK Subscription. Read our subscriber agreement.",
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",              item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Terms of Service",  item: `${SITE_URL}/terms/` },
  ],
};

// ─── Shared prose styles ──────────────────────────────────────────────────────

const H2 = "font-display font-semibold text-body text-lg mt-10 mb-3";
const H3 = "font-body font-semibold text-body text-sm mt-6 mb-2";
const P  = "text-sm text-muted leading-relaxed mb-3";
const LI = "text-sm text-muted leading-relaxed";
const UL = "list-disc list-outside pl-5 space-y-1.5 mb-3";

export default function TermsPage(): React.ReactElement {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      {/* ── Hero ── */}
      <section className="pt-32 pb-12 bg-deep">
        <div className="mx-auto max-w-[860px] px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} />
          <p className="label-tag mb-4">Legal</p>
          <h1 className="font-display font-bold tracking-[-0.04em] leading-[1.05] text-body mb-4" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>
            Terms of Service
          </h1>
          <p className={P}>Last updated: {LAST_UPDATED}</p>
          <p className={P}>
            Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully before subscribing to or using any service provided by IPTV UK Subscription (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;, operating at{" "}
            <strong className="text-body">iptvuksubscription.uk</strong>). By purchasing a subscription or using our service, you agree to be bound by these Terms. If you do not agree, do not use the service.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="pb-24 bg-surface">
        <div className="mx-auto max-w-[860px] px-6">

          {/* 1 */}
          <h2 className={H2}>1. Definitions</h2>
          <p className={P}>&ldquo;Service&rdquo; refers to the IPTV streaming subscription provided at iptvuksubscription.uk, including all live channels, video-on-demand content, electronic programme guide (EPG), and associated technical infrastructure.</p>
          <p className={P}>&ldquo;Subscription&rdquo; means a paid access licence to the Service for the period you have purchased.</p>
          <p className={P}>&ldquo;Credentials&rdquo; means the M3U playlist URL, username, and password issued to you upon subscribing.</p>
          <p className={P}>&ldquo;Device&rdquo; means any hardware or software-based IPTV player used to access the Service.</p>

          {/* 2 */}
          <h2 className={H2}>2. Eligibility</h2>
          <p className={P}>You must be at least 18 years of age to purchase a subscription. By subscribing, you confirm that you are 18 or over and are legally capable of entering into a binding agreement. If you are registering on behalf of an organisation, you confirm you have the authority to bind that organisation to these Terms.</p>

          {/* 3 */}
          <h2 className={H2}>3. Account and Credentials</h2>
          <p className={P}>Upon successful payment, we will deliver your Credentials to the email address you provide at checkout, typically within minutes. You are solely responsible for:</p>
          <ul className={UL}>
            <li className={LI}>Keeping your Credentials confidential and not sharing them with any third party;</li>
            <li className={LI}>All use of the Service made under your Credentials;</li>
            <li className={LI}>Notifying us immediately at {COMPANY_EMAIL} if you believe your Credentials have been compromised.</li>
          </ul>
          <p className={P}>We reserve the right to suspend or terminate access if Credentials are shared with unauthorised users or used in a manner inconsistent with these Terms.</p>

          {/* 4 */}
          <h2 className={H2}>4. Permitted Use and Connection Limits</h2>
          <p className={P}>Each subscription plan permits a specified number of simultaneous connections (streams). Starter plans allow 1 simultaneous stream; Silver and Golden plans allow 2. Using more concurrent connections than your plan permits is a breach of these Terms and may result in immediate suspension without refund.</p>
          <p className={P}>You may access the Service on any compatible device(s) you own for personal, non-commercial use only. Commercial use, including but not limited to reselling access or operating a public screening service, is strictly prohibited without our written consent.</p>

          {/* 5 */}
          <h2 className={H2}>5. Acceptable Use</h2>
          <p className={P}>You agree not to:</p>
          <ul className={UL}>
            <li className={LI}>Share, sell, redistribute, or resell your Credentials or access to the Service;</li>
            <li className={LI}>Use the Service to record, copy, redistribute, or publicly perform any content;</li>
            <li className={LI}>Attempt to reverse-engineer, decompile, or circumvent any technical protection measures;</li>
            <li className={LI}>Use the Service in any way that violates applicable UK law or the laws of your jurisdiction;</li>
            <li className={LI}>Transmit any unlawful, harmful, or offensive material through the Service;</li>
            <li className={LI}>Use automated tools to access, scrape, or harvest data from the Service.</li>
          </ul>

          {/* 6 */}
          <h2 className={H2}>6. Subscription, Payment, and Renewal</h2>
          <h3 className={H3}>6.1 Plans and Pricing</h3>
          <p className={P}>Subscription plans are offered on monthly and annual terms. Current pricing is displayed on our Pricing page and is inclusive of UK VAT where applicable. We reserve the right to change prices at any time with at least 30 days&apos; prior notice for existing subscribers.</p>
          <h3 className={H3}>6.2 Payment</h3>
          <p className={P}>Payment is due in advance. We accept major credit and debit cards, PayPal, and cryptocurrency. All payments are processed through PCI-compliant third-party payment processors. We do not store card details on our servers.</p>
          <h3 className={H3}>6.3 Renewal</h3>
          <p className={P}>Subscriptions are not automatically renewed unless you explicitly purchase a renewal. Your access will cease at the end of the paid period unless renewed. We may send you a reminder email before your subscription expires.</p>

          {/* 7 */}
          <h2 className={H2}>7. Free Trials</h2>
          <p className={P}>We offer 24-hour free trials on request, subject to availability and our sole discretion. Free trials are limited to one per person or household. Misrepresentation to obtain multiple trials may result in a ban from the Service. No credit card is required for a trial. Trial access is governed by these Terms in all other respects.</p>

          {/* 8 */}
          <h2 className={H2}>8. Refund Policy</h2>
          <p className={P}>We offer a 7-day money-back guarantee on all subscription plans. To request a refund within 7 days of your original purchase, contact {COMPANY_EMAIL}. Refunds are processed to the original payment method within 3–5 business days. After 7 days, refunds are assessed on a case-by-case basis. See our{" "}
            <Link href="/refund-policy/" className="text-accent hover:text-body transition-colors">Refund Policy</Link> for full details.
          </p>

          {/* 9 */}
          <h2 className={H2}>9. Service Availability and Changes</h2>
          <p className={P}>We aim to provide the Service 24/7 but do not guarantee uninterrupted availability. The Service may be subject to temporary interruptions for maintenance, technical issues, or circumstances beyond our control (including third-party broadcasting changes or force majeure events).</p>
          <p className={P}>The channel lineup is updated regularly. We reserve the right to add, remove, or modify channels or features. Removal of specific channels does not constitute a material change sufficient to trigger a refund, provided the overall service quality is maintained.</p>

          {/* 10 */}
          <h2 className={H2}>10. Intellectual Property</h2>
          <p className={P}>All content accessible through the Service remains the intellectual property of its respective rights holders. Your subscription grants you a limited, personal, non-transferable licence to stream content for private viewing only. No ownership rights are transferred to you. You may not record, copy, or redistribute any content.</p>
          <p className={P}>The IPTV UK Subscription name, logo, and website are our intellectual property. You may not use them without prior written consent.</p>

          {/* 11 */}
          <h2 className={H2}>11. Disclaimer of Warranties</h2>
          <p className={P}>The Service is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, express or implied, to the fullest extent permitted by applicable law. We do not warrant that the Service will be error-free, uninterrupted, or that any specific channel will be available at any given time.</p>
          <p className={P}>Nothing in these Terms excludes or limits our liability for death or personal injury arising from our negligence, fraud or fraudulent misrepresentation, or any other liability that cannot be excluded or limited under English law.</p>

          {/* 12 */}
          <h2 className={H2}>12. Limitation of Liability</h2>
          <p className={P}>To the fullest extent permitted by law, our total liability to you in respect of any losses arising under or in connection with these Terms shall not exceed the amount you paid for your current subscription period. We shall not be liable for indirect, incidental, special, or consequential losses, including loss of profits, data, or goodwill.</p>

          {/* 13 */}
          <h2 className={H2}>13. Termination</h2>
          <p className={P}>We may suspend or terminate your access immediately, without notice or refund, if you breach these Terms. You may cancel your subscription at any time by not renewing — access continues until the end of your paid period. Upon termination for breach, no refund is due.</p>

          {/* 14 */}
          <h2 className={H2}>14. Governing Law and Disputes</h2>
          <p className={P}>These Terms are governed by the laws of England and Wales. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales. If you are a consumer in another jurisdiction, you may also benefit from mandatory local consumer protection laws.</p>

          {/* 15 */}
          <h2 className={H2}>15. Changes to These Terms</h2>
          <p className={P}>We may update these Terms from time to time. We will notify you of material changes by email or by prominently displaying a notice on our website at least 14 days before the changes take effect. Your continued use of the Service after that date constitutes acceptance of the revised Terms.</p>

          {/* 16 */}
          <h2 className={H2}>16. Contact</h2>
          <p className={P}>If you have any questions about these Terms, please contact us at:</p>
          <p className={P}>
            <strong className="text-body">Email:</strong>{" "}
            <a href={`mailto:${COMPANY_EMAIL}`} className="text-accent hover:text-body transition-colors">{COMPANY_EMAIL}</a>
          </p>

          {/* Footer links */}
          <div className="mt-12 pt-8 border-t border-line flex flex-wrap gap-4 text-xs text-subtle">
            <Link href="/privacy/" className="text-accent hover:text-body transition-colors">Privacy Policy</Link>
            <Link href="/refund-policy/" className="text-accent hover:text-body transition-colors">Refund Policy</Link>
            <Link href="/contact/" className="text-accent hover:text-body transition-colors">Contact Support</Link>
            <Link href="/pricing/" className="text-accent hover:text-body transition-colors">Pricing Plans</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
