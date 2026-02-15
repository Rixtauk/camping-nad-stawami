"use client";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { ABOUT_IMAGE } from "@/lib/images";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="o-miejscu" className="scroll-mt-20 py-24 bg-primary/5 dark:bg-primary/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column — Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 rounded-xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={ABOUT_IMAGE}
                  alt={t("about.title")}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column — Text */}
          <div className="w-full lg:w-1/2">
            <p className="text-primary font-bold text-lg mb-4">{t("about.subtitle")}</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {t("about.title")}
            </h2>
            {t("about.body")
              .split("\n")
              .map((paragraph, index) => (
                <p
                  key={index}
                  className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
