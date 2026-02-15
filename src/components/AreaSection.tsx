"use client";

import { useLanguage } from "@/lib/LanguageContext";

const attractions = [
  { icon: "location_city", titleKey: "area.item1.title" as const, descKey: "area.item1.desc" as const },
  { icon: "diamond", titleKey: "area.item2.title" as const, descKey: "area.item2.desc" as const },
  { icon: "terrain", titleKey: "area.item3.title" as const, descKey: "area.item3.desc" as const },
  { icon: "explore", titleKey: "area.item4.title" as const, descKey: "area.item4.desc" as const },
  { icon: "downhill_skiing", titleKey: "area.item5.title" as const, descKey: "area.item5.desc" as const },
];

export default function AreaSection() {
  const { t } = useLanguage();

  return (
    <section
      id="okolica"
      className="scroll-mt-20 py-24 bg-slate-50 dark:bg-background-dark/50 border-t border-slate-200 dark:border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Column — Nearby Attractions */}
          <div className="w-full lg:w-1/2">
            <p className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">
              {t("area.subtitle")}
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-8 leading-tight">
              {t("area.title")}
            </h2>

            <div className="space-y-6">
              {attractions.map((item) => (
                <div key={item.titleKey} className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-lg flex-shrink-0">
                    <span className="material-icons text-primary">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">
                      {t(item.titleKey)}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      {t(item.descKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column — Live Map */}
          <div className="w-full lg:w-1/2">
            <div className="h-[450px] rounded-xl overflow-hidden shadow-2xl relative">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=16.8900%2C50.4560%2C16.9180%2C50.4740&layer=mapnik&marker=50.46477%2C16.90366"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                title="Camping nad Stawami — mapa"
              />

              {/* Address bar overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-icons text-primary">location_on</span>
                  <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                    {t("area.address")}
                  </span>
                </div>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=50.46477,16.90366"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  <span className="material-icons text-sm">navigation</span>
                  {t("area.navigate")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
