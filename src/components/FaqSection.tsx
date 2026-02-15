"use client";
import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const faqKeys = [
  { q: "faq.q1" as const, a: "faq.a1" as const },
  { q: "faq.q2" as const, a: "faq.a2" as const },
  { q: "faq.q3" as const, a: "faq.a3" as const },
  { q: "faq.q4" as const, a: "faq.a4" as const },
  { q: "faq.q5" as const, a: "faq.a5" as const },
];

export default function FaqSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-20 py-24 bg-beige-soft dark:bg-[#1a1d1a]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm">
            {t("faq.subtitle")}
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 dark:text-white">
            {t("faq.title")}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="space-y-4">
          {faqKeys.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-slate-200 dark:border-white/10"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex items-center justify-between w-full py-6 cursor-pointer group text-left"
                >
                  <span className="text-lg font-semibold pr-8 group-hover:text-primary transition-colors">
                    {t(item.q)}
                  </span>
                  <span
                    className={`material-symbols-outlined icon-rotate text-slate-400 ${isOpen ? "open" : ""}`}
                  >
                    expand_more
                  </span>
                </button>
                <div className={`faq-content ${isOpen ? "open" : ""}`}>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {t(item.a)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
