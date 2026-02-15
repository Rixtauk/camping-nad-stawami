"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function FishingSection() {
  const { t } = useLanguage();

  return (
    <section id="wedkowanie" className="scroll-mt-20 py-24 px-6 bg-primary/5 dark:bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative icon */}
        <span className="material-icons text-primary text-5xl mb-6 block opacity-80">
          set_meal
        </span>

        {/* Subtitle */}
        <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-4">
          {t("fishing.subtitle")}
        </p>

        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
          {t("fishing.title")}
        </h2>

        {/* Green underline */}
        <div className="h-1 w-20 bg-primary mx-auto rounded-full" />

        {/* Body text */}
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mt-8 leading-relaxed">
          {t("fishing.body")}
        </p>

        {/* Mini-note */}
        <div className="mt-8 bg-white/50 dark:bg-white/5 border border-primary/20 rounded-xl p-6 text-sm text-slate-500 dark:text-slate-400 italic max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <span className="material-icons text-primary text-lg">info</span>
            <span>{t("fishing.note")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
