"use client";

import { useLanguage } from "@/lib/LanguageContext";

const items = [
  { icon: "shower", key: "facilities.item1" as const },
  { icon: "power", key: "facilities.item2" as const },
  { icon: "local_fire_department", key: "facilities.item3" as const },
  { icon: "child_care", key: "facilities.item4" as const },
  { icon: "sports_tennis", key: "facilities.item5" as const },
  { icon: "pedal_bike", key: "facilities.item6" as const },
];

export default function FacilitiesSection() {
  const { t } = useLanguage();

  return (
    <section id="udogodnienia-lista" className="scroll-mt-20 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm">
            {t("facilities.subtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 dark:text-white">
            {t("facilities.title")}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        {/* Facility items — 2x3 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {items.map((item) => (
            <div
              key={item.key}
              className="flex items-center gap-3 bg-primary/5 dark:bg-white/5 rounded-xl px-5 py-4"
            >
              <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                <span className="material-icons text-primary">{item.icon}</span>
              </div>
              <span className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                {t(item.key)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
