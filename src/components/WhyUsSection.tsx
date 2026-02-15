"use client";
import { useLanguage } from "@/lib/LanguageContext";
import { GALLERY_8 } from "@/lib/images";

const items = [
  { icon: "water", titleKey: "whyus.item1.title" as const, descKey: "whyus.item1.desc" as const },
  { icon: "phishing", titleKey: "whyus.item2.title" as const, descKey: "whyus.item2.desc" as const },
  { icon: "local_fire_department", titleKey: "whyus.item3.title" as const, descKey: "whyus.item3.desc" as const },
  { icon: "landscape", titleKey: "whyus.item4.title" as const, descKey: "whyus.item4.desc" as const },
  { icon: "family_restroom", titleKey: "whyus.item5.title" as const, descKey: "whyus.item5.desc" as const },
  { icon: "volume_off", titleKey: "whyus.item6.title" as const, descKey: "whyus.item6.desc" as const },
];

export default function WhyUsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="udogodnienia"
      className="scroll-mt-20 relative py-24"
      style={{
        backgroundImage: `url(${GALLERY_8})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-forest-900/85" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="text-primary font-semibold tracking-wider uppercase text-sm">
            {t("whyus.subtitle")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">
            {t("whyus.title")}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
        </div>

        {/* Items Grid — glass tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="group bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/[0.12] hover:border-primary/30 transition-all duration-300"
            >
              <div className="bg-primary/15 rounded-xl w-12 h-12 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/25 transition-colors">
                <span className="material-icons">{item.icon}</span>
              </div>
              <h3 className="font-bold text-white mb-1.5">{t(item.titleKey)}</h3>
              <p className="text-sm text-white/60 leading-relaxed">
                {t(item.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
