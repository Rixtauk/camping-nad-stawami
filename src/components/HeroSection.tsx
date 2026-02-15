"use client";

import { useLanguage } from "@/lib/LanguageContext";

const bullets = [
  "hero.bullet1",
  "hero.bullet2",
  "hero.bullet3",
  "hero.bullet4",
  "hero.bullet5",
] as const;

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <>
      {/* ═══════════ MOBILE HERO (< md) ═══════════ */}
      <section
        id="hero"
        className="md:hidden scroll-mt-20 bg-forest-900 pt-24 pb-8"
      >
        {/* Heading + subtitle */}
        <div className="px-5">
          <h1 className="text-serif text-[1.65rem] text-white font-bold leading-[1.18] mb-4">
            {t("hero.title")}
          </h1>
          <p className="text-sm text-white/65 font-light mb-5 leading-relaxed">
            {t("hero.subtitle")}
          </p>
        </div>

        {/* Letterbox video */}
        <div className="px-4 mb-6">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/5">
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="/images/hero.png"
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/images/hero-video2.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.3)]" />
          </div>
        </div>

        {/* Bullets + CTAs */}
        <div className="px-5">
          <ul className="space-y-2 mb-6">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start space-x-2">
                <span className="material-icons text-primary text-lg mt-0.5">check_circle</span>
                <span className="text-white/80 text-[0.8rem] leading-snug">{t(bullet)}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-2.5">
            <a
              href="tel:+48608306739"
              className="bg-primary text-background-dark px-6 py-3.5 rounded-xl font-bold text-sm hover:scale-[1.02] transition-all shadow-xl shadow-primary/30 flex items-center justify-center space-x-2"
            >
              <span className="material-icons-outlined text-xl">phone</span>
              <span>{t("hero.cta1")}</span>
            </a>
            <a
              href="https://wa.me/48608306739"
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-white/20 transition-all flex items-center justify-center space-x-2"
            >
              <span>{t("hero.cta2")}</span>
            </a>
          </div>

          <p className="mt-3 text-[0.65rem] text-white/35">
            {t("hero.microcopy")}
          </p>
        </div>
      </section>

      {/* ═══════════ DESKTOP HERO (md+) ═══════════ */}
      <section
        className="hidden md:flex scroll-mt-20 relative h-screen min-h-[700px] w-full items-center overflow-hidden"
        aria-hidden="true"
      >
        {/* Background video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero.png"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/images/hero-video2.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/25 to-transparent" />
        </div>

        {/* Main content — positioned right */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 flex justify-end">
          <div className="max-w-xl">
            <h1 className="text-serif text-3xl lg:text-[2.75rem] text-white font-bold leading-[1.15] mb-5">
              {t("hero.title")}
            </h1>
            <p className="text-base lg:text-lg text-white/75 font-light mb-8 leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <ul className="space-y-2.5 mb-8">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-center space-x-2.5">
                  <span className="material-icons text-primary text-xl">check_circle</span>
                  <span className="text-white/85 text-sm">{t(bullet)}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-row items-start gap-3">
              <a
                href="tel:+48608306739"
                className="bg-primary text-background-dark px-7 py-3.5 rounded-xl font-bold text-sm hover:scale-105 transition-all shadow-xl shadow-primary/30 flex items-center justify-center space-x-2"
              >
                <span className="material-icons-outlined text-xl">phone</span>
                <span>{t("hero.cta1")}</span>
              </a>
              <a
                href="https://wa.me/48608306739"
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-7 py-3.5 rounded-xl font-bold text-sm hover:bg-white/20 transition-all flex items-center justify-center space-x-2"
              >
                <span>{t("hero.cta2")}</span>
              </a>
            </div>

            <p className="mt-4 text-xs text-white/40">
              {t("hero.microcopy")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
