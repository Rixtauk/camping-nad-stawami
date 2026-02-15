"use client";
import { useLanguage } from "@/lib/LanguageContext";

const steps = [
  { num: "1", titleKey: "booking.step1.title" as const, descKey: "booking.step1.desc" as const },
  { num: "2", titleKey: "booking.step2.title" as const, descKey: "booking.step2.desc" as const },
  { num: "3", titleKey: "booking.step3.title" as const, descKey: "booking.step3.desc" as const },
];

export default function BookingSection() {
  const { t } = useLanguage();

  return (
    <section id="dojazd" className="scroll-mt-20 bg-primary/5 dark:bg-primary/5 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm">
            {t("booking.subtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 dark:text-white">
            {t("booking.title")}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.num} className="text-center">
              <span className="text-4xl font-bold text-primary">{step.num}</span>
              <h3 className="font-bold mt-3 mb-2 dark:text-white">{t(step.titleKey)}</h3>
              <p className="text-sm text-slate-500">{t(step.descKey)}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <a
            href="tel:+48608306739"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20"
          >
            <span className="material-icons">phone</span>
            {t("booking.cta1")}
          </a>
          <a
            href="https://wa.me/48608306739"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-bold transition-all"
          >
            <span className="material-icons">chat</span>
            {t("booking.cta2")}
          </a>
          <a
            href="https://www.booking.com/Share-QFCcX3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#003580] hover:bg-[#00265c] text-white rounded-lg font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-[#003580]/20"
          >
            <span className="material-icons">hotel</span>
            {t("booking.cta3")}
          </a>
        </div>
      </div>
    </section>
  );
}
