"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

// ─── Constants ────────────────────────────────────────────────────────────

const SPRING = [0.16, 1, 0.3, 1] as const;
const SITE_URL = "https://iptvuksubscription.uk";

// ─── FAQ data ─────────────────────────────────────────────────────────────

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "f1",
    question: "What devices work with an IPTV UK subscription?",
    answer:
      "Our IPTV UK subscription works on virtually every modern device — Amazon Fire Stick, Android TV boxes, Smart TVs (Samsung, LG, Sony), iOS and Android phones and tablets, Windows and Mac computers, MAG boxes, and Kodi. If it runs a player app like TiviMate, IPTV Smarters, or Perfect Player, it works with our service. No specialist hardware is required; if you're already streaming Netflix, you're already set up.",
  },
  {
    id: "f2",
    question: "How quickly can I start watching after subscribing?",
    answer:
      "Instantly. Once your payment is confirmed, your M3U playlist URL and account credentials are delivered by email within minutes. Load them into your preferred IPTV player and you're live. Most customers are watching their first channel within 5 minutes. Our step-by-step setup guides cover every device. If you run into anything, our 24/7 support team typically responds within the hour.",
  },
  {
    id: "f3",
    question: "Do you offer a free trial?",
    answer:
      "Yes — we offer a 24-hour free trial on our IPTV UK subscription so you can test stream quality, channel availability, and device compatibility before committing. Simply contact our support team via live chat or email to request your trial. No credit card is required. If you're happy — and the vast majority of trial users subscribe — you can upgrade directly from the trial account.",
  },
  {
    id: "f4",
    question: "What's your refund policy?",
    answer:
      "All plans come with a 7-day money-back guarantee. If our IPTV UK subscription doesn't meet your expectations within 7 days of purchase, contact our support team for a full refund — no questions asked. Refunds are typically processed within 3–5 business days back to your original payment method. Requests beyond 7 days are reviewed individually. Full terms are outlined on our Refund Policy page.",
  },
  {
    id: "f5",
    question: "Will channels buffer during live sport?",
    answer:
      "Rarely, and when on a stable connection, essentially never. Our infrastructure is built for peak-demand events — Premier League kick-offs, Champions League finals, and major boxing nights. Our anti-freeze buffer technology pre-loads stream frames in real time to prevent interruptions. A 20 Mbps connection is all you need for flawless 4K sport. Thousands of UK subscribers watch live football every week without a single dropout.",
  },
  {
    id: "f6",
    question: "How many channels are included in an IPTV UK subscription?",
    answer:
      "Every IPTV UK subscription plan includes 35,000+ live channels: all UK terrestrials (BBC, ITV, Channel 4, Channel 5), full Sky Sports and TNT Sports packages, Sky Cinema, discovery+, and channels from 150+ countries. Dedicated Premier League, Champions League, F1, boxing, and UFC feeds are included at no extra cost. You also get 100,000+ on-demand titles. There are no premium add-ons — everything is in one subscription from day one.",
  },
  {
    id: "f7",
    question: "Is IPTV legal in the UK?",
    answer:
      "IPTV technology is entirely legal — it's the same delivery method used by Netflix, BBC iPlayer, and Sky Go. What matters legally is the content being accessed. We provide a technical streaming service; subscribers are responsible for ensuring their usage complies with applicable UK broadcasting regulations. If you have specific concerns about content licensing in your region, we recommend seeking independent legal advice.",
  },
  {
    id: "f8",
    question: "Can I use a VPN with your service?",
    answer:
      "Yes, our IPTV UK subscription is fully compatible with VPNs. A VPN can enhance privacy and reduce ISP throttling that sometimes affects stream quality. For best results, connect to a UK-based VPN server — this ensures the lowest latency and full access to region-specific channels. NordVPN, ExpressVPN, and Surfshark all work reliably with our service. If you notice buffering on VPN, switching to a closer UK server usually resolves it immediately.",
  },
];

// ─── JSON-LD schema ────────────────────────────────────────────────────────

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

// ─── Accordion item ───────────────────────────────────────────────────────

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}): React.ReactElement {
  return (
    <div
      className={cn(
        "border border-line rounded-[14px] overflow-hidden transition-colors duration-200",
        isOpen ? "border-accent/30 bg-card" : "bg-card/50 hover:border-line-hover"
      )}
    >
      {/* Trigger */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span
          className={cn(
            "text-sm sm:text-base font-body font-medium leading-snug transition-colors duration-200",
            isOpen ? "text-body" : "text-muted"
          )}
        >
          {item.question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.22, ease: SPRING }}
          className={cn(
            "shrink-0 transition-colors duration-200",
            isOpen ? "text-accent" : "text-subtle"
          )}
        >
          <Plus size={18} strokeWidth={2} aria-hidden="true" />
        </motion.span>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: SPRING }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 pt-0 text-sm text-muted leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────

export default function FAQ(): React.ReactElement {
  const [openId, setOpenId] = useState<string | null>("f1");

  const toggle = (id: string): void =>
    setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="py-24 bg-surface" aria-labelledby="faq-heading">
      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-[860px] px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="label-tag mb-4">FAQ</p>
          <h2
            id="faq-heading"
            className="font-display font-bold tracking-[-0.03em] leading-[1.1] mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Questions &amp; Answers
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-[480px] mx-auto leading-relaxed">
            Everything you need to know about our{" "}
            <strong className="text-body font-medium">
              IPTV UK subscription
            </strong>{" "}
            service.
          </p>
        </div>

        {/* Accordion list */}
        <div
          className="flex flex-col gap-3"
          role="list"
          aria-label="Frequently asked questions"
        >
          {FAQ_ITEMS.map((item) => (
            <div key={item.id} role="listitem">
              <AccordionItem
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggle(item.id)}
              />
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <p className="mt-10 text-center text-sm text-subtle">
          Still have questions?{" "}
          <a
            href={`${SITE_URL}/contact/`}
            className="text-accent hover:text-body transition-colors font-medium"
          >
            Contact our support team →
          </a>
        </p>
      </div>
    </section>
  );
}
