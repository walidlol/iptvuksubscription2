import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";

const SITE_URL = "https://iptvuksubscription.uk";
const LAST_UPDATED = "26 March 2026";
const COMPANY_EMAIL = "support@iptvuksubscription.uk";

export const metadata: Metadata = {
  title: "Refund Policy — IPTV UK Subscription",
  description:
    "IPTV UK Subscription refund policy. 7-day money-back guarantee on all plans. No questions asked. Learn how to request a refund.",
  alternates: { canonical: `${SITE_URL}/refund-policy/` },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website", locale: "en_GB", url: `${SITE_URL}/refund-policy/`,
    siteName: "IPTV UK Subscription",
    title: "Refund Policy — IPTV UK Subscription",
    description: "7-day money-back guarantee on all plans. No questions asked.",
  },
};

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",          item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Refund Policy", item: `${SITE_URL}/refund-policy/` },
  ],
};

const H2 = "font-display font-semibold text-body text-lg mt-10 mb-3";
const P  = "text-sm text-muted leading-relaxed mb-3";
const LI = "text-sm text-muted leading-relaxed";
const UL = "list-disc list-outside pl-5 space-y-1.5 mb-3";

export default function RefundPolicyPage(): React.ReactElement {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />

      {/* ── Hero ── */}
      <section className="pt-32 pb-12 bg-deep">
        <div className="mx-auto max-w-[860px] px-6">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Refund Policy" }]} />
          <p className="label-tag mb-4">Legal</p>
          <h1 className="font-display font-bold tracking-[-0.04em] leading-[1.05] text-body mb-4" style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}>
            Refund Policy
          </h1>
          <p className={P}>Last updated: {LAST_UPDATED}</p>

          {/* Highlight box */}
          <div className="p-5 rounded-[14px] bg-accent-dim border border-accent/20 mt-6">
            <p className="font-body font-semibold text-body text-sm mb-1">7-Day Money-Back Guarantee</p>
            <p className="text-sm text-muted leading-relaxed">
              We offer a full refund within 7 days of purchase on all plans — no questions asked. Contact us at{" "}
              <a href={`mailto:${COMPANY_EMAIL}`} className="text-accent hover:text-body transition-colors">{COMPANY_EMAIL}</a>{" "}
              and we&apos;ll process your refund within 3–5 business days.
            </p>
          </div>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="pb-24 bg-surface">
        <div className="mx-auto max-w-[860px] px-6">

          {/* 1 */}
          <h2 className={H2}>1. 7-Day Money-Back Guarantee</h2>
          <p className={P}>We stand behind the quality of our service. If you are not completely satisfied with your IPTV UK subscription within 7 days of your original purchase date, we will issue a full refund of the amount paid — no questions asked.</p>
          <p className={P}>This guarantee applies to all subscription plans: Starter, Silver, and Golden, on both monthly and annual billing cycles. It also applies to upgrades from one plan to another within the 7-day window.</p>

          {/* 2 */}
          <h2 className={H2}>2. How to Request a Refund</h2>
          <p className={P}>To request a refund within the 7-day guarantee period:</p>
          <ul className={UL}>
            <li className={LI}>Email us at{" "}
              <a href={`mailto:${COMPANY_EMAIL}`} className="text-accent hover:text-body transition-colors">{COMPANY_EMAIL}</a>{" "}
              from the email address used to register your subscription;
            </li>
            <li className={LI}>Include &ldquo;Refund Request&rdquo; in the subject line;</li>
            <li className={LI}>Optionally, include your reason for cancelling — feedback helps us improve, but is not required.</li>
          </ul>
          <p className={P}>You may also submit a refund request through the contact form on our{" "}
            <Link href="/contact/" className="text-accent hover:text-body transition-colors">Contact page</Link>{" "}
            selecting &ldquo;Billing &amp; Payments&rdquo; as the subject.
          </p>
          <p className={P}>Our support team will confirm receipt within 1 hour and process the refund within 1 business day. The refunded amount will appear on your original payment method within 3–5 business days, depending on your bank or payment provider.</p>

          {/* 3 */}
          <h2 className={H2}>3. Refunds After 7 Days</h2>
          <p className={P}>After the 7-day guarantee period has elapsed, we are generally unable to issue refunds for the current subscription period. However, we review exceptional circumstances on a case-by-case basis, including:</p>
          <ul className={UL}>
            <li className={LI}>Prolonged, documented service outages that we have failed to resolve within a reasonable timeframe;</li>
            <li className={LI}>Technical issues preventing access to the service that are attributable to us (not your hardware, software, or internet connection) and that we have been unable to resolve after support interaction;</li>
            <li className={LI}>Duplicate charges resulting from a processing error on our part;</li>
            <li className={LI}>Unauthorised charges where you can demonstrate your payment details were used without your knowledge.</li>
          </ul>
          <p className={P}>To request consideration of a post-7-day refund, contact {COMPANY_EMAIL} with your order details and a description of the issue. We will respond within 48 hours.</p>

          {/* 4 */}
          <h2 className={H2}>4. Non-Refundable Circumstances</h2>
          <p className={P}>The following are not eligible for refund:</p>
          <ul className={UL}>
            <li className={LI}>Refund requests submitted more than 7 days after the original purchase date (except exceptional circumstances in Section 3);</li>
            <li className={LI}>Requests citing incompatibility with your device, where the device is not listed as compatible on our{" "}
              <Link href="/setup-guide/" className="text-accent hover:text-body transition-colors">Setup Guide</Link>;
            </li>
            <li className={LI}>Refunds requested after your account has been terminated for breach of our{" "}
              <Link href="/terms/" className="text-accent hover:text-body transition-colors">Terms of Service</Link>;
            </li>
            <li className={LI}>Free trial access — trials are complimentary and no charge is made;</li>
            <li className={LI}>Partial-period refunds on monthly plans (e.g., &ldquo;I only used it for 2 weeks&rdquo;), except within the 7-day guarantee window.</li>
          </ul>

          {/* 5 */}
          <h2 className={H2}>5. Partial Refunds for Annual Plans</h2>
          <p className={P}>For annual subscriptions, refund requests submitted within 7 days receive a full refund. After 7 days, pro-rata partial refunds may be considered at our discretion for extenuating circumstances outlined in Section 3. In such cases, the refund amount will be calculated based on the unused portion of the annual term, minus the equivalent monthly plan cost for the period used.</p>

          {/* 6 */}
          <h2 className={H2}>6. Free Trials</h2>
          <p className={P}>Free 24-hour trials are provided at no charge. No payment information is collected for trials. Since there is no charge, there is nothing to refund. If you decide to subscribe following a trial, your subscription and its refund eligibility commences from the date of payment.</p>

          {/* 7 */}
          <h2 className={H2}>7. Chargebacks</h2>
          <p className={P}>We ask that you contact us directly before initiating a chargeback with your bank or card issuer. We will resolve legitimate billing disputes promptly. Initiating a chargeback without first contacting us may result in the suspension of your account. Fraudulent chargebacks — where service was received and a refund was not previously requested through our process — will be disputed with supporting evidence.</p>

          {/* 8 */}
          <h2 className={H2}>8. Consumer Rights</h2>
          <p className={P}>Nothing in this Refund Policy limits your statutory rights as a consumer under UK law, including rights under the Consumer Rights Act 2015 and Consumer Contracts Regulations 2013. If you have purchased a subscription as a consumer, you may have a 14-day right of cancellation under the Consumer Contracts Regulations for digital content subscriptions. To exercise this right, contact us within 14 days of your purchase date. Note that if you have accessed the service (streamed content) before requesting cancellation under this right, you may not be entitled to a full refund.</p>

          {/* 9 */}
          <h2 className={H2}>9. Subscription Cancellation</h2>
          <p className={P}>Cancelling your subscription means you choose not to renew at the end of the current billing period. Cancellation does not trigger a refund for the current period — it simply prevents future charges. Your access continues until the end of the paid period. To cancel, you simply do not renew. For annual plans, contact us at {COMPANY_EMAIL} if you would like early-termination consideration under exceptional circumstances.</p>

          {/* 10 */}
          <h2 className={H2}>10. Contact</h2>
          <p className={P}>For all refund enquiries, please contact:</p>
          <p className={P}>
            <strong className="text-body">Email:</strong>{" "}
            <a href={`mailto:${COMPANY_EMAIL}`} className="text-accent hover:text-body transition-colors">{COMPANY_EMAIL}</a>
            <br />
            <strong className="text-body">Response time:</strong> Under 1 hour, 24/7
          </p>
          <p className={P}>Our support team will acknowledge your refund request promptly and keep you informed throughout the process.</p>

          {/* Footer links */}
          <div className="mt-12 pt-8 border-t border-line flex flex-wrap gap-4 text-xs text-subtle">
            <Link href="/terms/" className="text-accent hover:text-body transition-colors">Terms of Service</Link>
            <Link href="/privacy/" className="text-accent hover:text-body transition-colors">Privacy Policy</Link>
            <Link href="/contact/" className="text-accent hover:text-body transition-colors">Contact Support</Link>
            <Link href="/pricing/" className="text-accent hover:text-body transition-colors">Pricing Plans</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
