import { testimonials } from "@/lib/data";

// ─── Star rating ──────────────────────────────────────────────────────────

function Stars({ rating }: { rating: number }): React.ReactElement {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1"
          className={i < rating ? "text-[#FFB800]" : "text-subtle"}
          aria-hidden="true"
        >
          <path d="M6 1l1.236 3.8H11L8.118 6.9l1.236 3.8L6 8.6l-3.354 2.1 1.236-3.8L1 4.8h3.764z" />
        </svg>
      ))}
    </div>
  );
}

// ─── Single card ──────────────────────────────────────────────────────────

function ReviewCard({
  review,
}: {
  review: (typeof testimonials)[number];
}): React.ReactElement {
  return (
    <article
      className="shrink-0 w-[300px] sm:w-[340px] p-5 rounded-[14px] bg-card border border-line"
      aria-label={`Review by ${review.name}`}
    >
      <Stars rating={review.rating} />
      <p className="text-sm text-muted leading-relaxed mt-3 mb-4 line-clamp-3">
        &ldquo;{review.body}&rdquo;
      </p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-body font-semibold text-body">{review.name}</p>
          <p className="text-[11px] text-subtle">{review.location}</p>
        </div>
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-accent-dim text-accent border border-accent/20 font-medium">
          {review.plan}
        </span>
      </div>
    </article>
  );
}

// ─── TestimonialMarquee ───────────────────────────────────────────────────
// Duplicates items so the marquee loops seamlessly.

export default function TestimonialMarquee(): React.ReactElement {
  // Double the list for seamless loop
  const doubled = [...testimonials, ...testimonials];

  return (
    <section
      className="py-20 overflow-hidden border-t border-line"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-[1200px] px-6 mb-10">
        <p className="label-tag mb-4 text-center">Customer Reviews</p>
        <h2
          id="testimonials-heading"
          className="font-display font-bold tracking-[-0.03em] text-body text-center"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)" }}
        >
          Trusted by{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, var(--accent) 0%, var(--cyan) 100%)" }}
          >
            48,000+
          </span>{" "}
          UK Households
        </h2>
        <p className="text-muted text-sm text-center mt-3 max-w-[480px] mx-auto leading-relaxed">
          Real reviews from real subscribers. Every testimonial is from a verified IPTV UK subscription customer.
        </p>
      </div>

      {/* Marquee row — no JS needed, pure CSS animation */}
      <div
        className="relative"
        style={{
          maskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
        aria-label="Scrolling customer reviews"
      >
        <div className="marquee-track gap-4 px-4">
          {doubled.map((review, i) => (
            <ReviewCard key={`${review.id}-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* Aggregate rating summary */}
      <div className="mx-auto max-w-[1200px] px-6 mt-10 flex flex-wrap gap-6 justify-center">
        {[
          { label: "Trustpilot", score: "4.9/5", stars: 5 },
          { label: "Google",     score: "4.8/5", stars: 5 },
          { label: "Reddit",     score: "4.7/5", stars: 5 },
        ].map((p) => (
          <div key={p.label} className="flex items-center gap-3 px-5 py-3 rounded-[12px] bg-card border border-line">
            <div>
              <p className="text-[11px] text-subtle uppercase tracking-[0.08em] font-bold">{p.label}</p>
              <p className="text-sm font-display font-bold text-body">{p.score}</p>
            </div>
            <Stars rating={p.stars} />
          </div>
        ))}
      </div>
    </section>
  );
}
