"use client";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { STAY_CARD_1, STAY_CARD_2, STAY_CARD_3 } from "@/lib/images";

const cards = [
  { icon: "festival", image: STAY_CARD_1, titleKey: "stays.tent.title" as const, descKey: "stays.tent.desc" as const },
  { icon: "rv_hookup", image: STAY_CARD_2, titleKey: "stays.camper.title" as const, descKey: "stays.camper.desc" as const },
  { icon: "cabin", image: STAY_CARD_3, titleKey: "stays.cabin.title" as const, descKey: "stays.cabin.desc" as const },
];

export default function StayOptionsSection() {
  const { t } = useLanguage();

  return (
    <section id="noclegi" className="scroll-mt-20 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm">
            {t("stays.subtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 dark:text-white">
            {t("stays.title")}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={card.image}
                  alt={t(card.titleKey)}
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </div>

              {/* Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <span className="material-icons text-primary text-3xl mb-3 block">
                  {card.icon}
                </span>
                <h3 className="text-xl font-bold mb-2">{t(card.titleKey)}</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  {t(card.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a
            href="tel:+48608306739"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-primary/20 group"
          >
            <span className="material-icons mr-2">phone</span>
            {t("stays.cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
