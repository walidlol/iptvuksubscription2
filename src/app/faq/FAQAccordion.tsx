"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

import type { FaqItem } from "./faqData";
import { ALL_FAQS } from "./faqData";

export type { FaqItem };
export { ALL_FAQS };

const SPRING = [0.16, 1, 0.3, 1] as const;

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
    <div className={cn("border rounded-[14px] overflow-hidden transition-colors duration-200", isOpen ? "border-accent/30 bg-card" : "border-line bg-card/50 hover:border-line-hover")}>
      <button onClick={onToggle} aria-expanded={isOpen} className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
        <span className={cn("text-sm sm:text-base font-body font-medium leading-snug transition-colors duration-200", isOpen ? "text-body" : "text-muted")}>
          {item.question}
        </span>
        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.22, ease: SPRING }} className={cn("shrink-0 transition-colors duration-200", isOpen ? "text-accent" : "text-subtle")}>
          <Plus size={18} strokeWidth={2} aria-hidden="true" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div key="answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: SPRING }} className="overflow-hidden">
            <p className="px-6 pb-6 pt-0 text-sm text-muted leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── FAQAccordion ─────────────────────────────────────────────────────────

export default function FAQAccordion({ items = ALL_FAQS }: { items?: FaqItem[] }): React.ReactElement {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const categories = [...new Set(items.map((i) => i.category))];

  return (
    <div>
      {categories.map((cat) => {
        const catItems = items.filter((i) => i.category === cat);
        return (
          <div key={cat} className="mb-10 last:mb-0">
            <p className="text-[11px] font-body font-bold uppercase tracking-[0.1em] text-accent mb-4">{cat}</p>
            <div className="flex flex-col gap-3">
              {catItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openId === item.id}
                  onToggle={() => setOpenId((prev) => (prev === item.id ? null : item.id))}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
