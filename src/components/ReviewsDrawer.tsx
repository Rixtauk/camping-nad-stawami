"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/travel/search?ts=CAEaSQopEicyJTB4NDcwZTIxY2IwNjZlMDI0ZDoweDQ5MDFiODNhODVmY2FiZjISHBIUCgcI6g8QAhgREgcI6g8QAhgSGAEyBAgAEAA&qs=CAEyE0Nnb0k4dGZ5cjZpSDdvQkpFQUU4AkIJCfKr_IU6uAFJ&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls";

const reviews = [
  {
    name: "Marek W.",
    date: "2025-08",
    stars: 5,
    text: "Świetne miejsce na spokojny wypoczynek. Stawy piękne, cisza, właściciel bardzo pomocny. Wędkowałem codziennie — ryby są! Na pewno wrócimy.",
  },
  {
    name: "Anna K.",
    date: "2025-07",
    stars: 5,
    text: "Byliśmy z dziećmi i psem — idealne miejsce. Plac zabaw, ognisko wieczorem, a rano kawa z widokiem na wodę. Polecam rodzinom.",
  },
  {
    name: "Tomasz P.",
    date: "2025-07",
    stars: 5,
    text: "Camping jak kiedyś — bez sztuczności. Rozbiliśmy namiot przy stawie, grill, ognisko. Sanitariaty czyste. Bardzo fair ceny.",
  },
  {
    name: "Katarzyna M.",
    date: "2025-06",
    stars: 4,
    text: "Urokliwe miejsce w dolinie. Okolica piękna — byliśmy w Kopalni Złota i w Jaskini Niedźwiedziej. Camping świetna baza wypadowa.",
  },
  {
    name: "Piotr D.",
    date: "2025-08",
    stars: 5,
    text: "Przyjechałem kamperem — bez problemu, prąd dostępny. 3 stawy, wędkowanie w cenie, wieczorem ognisko. Rewelacja, a nie camping.",
  },
  {
    name: "Joanna S.",
    date: "2025-06",
    stars: 5,
    text: "Kameralne, ciche, bez tłumów. Właśnie o to nam chodziło. Właściciel miły i konkretny. Wrócimy we wrześniu!",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleG() {
  return (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export default function ReviewsDrawer() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Floating tab — right edge */}
      <button
        onClick={() => setOpen(true)}
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-[61] transition-all duration-300 ${
          open ? "opacity-0 pointer-events-none translate-x-4" : "opacity-100 translate-x-0"
        }`}
        aria-label="Open reviews"
      >
        <div className="flex flex-col items-center bg-forest-900/95 backdrop-blur-md border border-white/10 border-r-0 rounded-l-xl px-2 py-4 shadow-2xl shadow-black/40 hover:px-3 transition-all group">
          <span className="text-white/70 text-[0.6rem] font-semibold uppercase tracking-widest [writing-mode:vertical-lr] rotate-180 group-hover:text-white/90 transition-colors mb-2.5">
            {t("reviews.tab")}
          </span>
          <span className="text-amber-400 font-bold text-sm leading-none [writing-mode:vertical-lr] rotate-180 mb-1.5">4.6</span>
          <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </button>

      {/* Slide-out panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[62] w-full sm:w-[400px] transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full bg-forest-900/[0.97] backdrop-blur-xl border-l border-white/10 flex flex-col">
          {/* Header */}
          <div className="shrink-0 px-5 pt-5 pb-4 border-b border-white/[0.06]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white font-bold text-lg">{t("reviews.title")}</h2>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
              >
                <span className="material-icons text-xl">close</span>
              </button>
            </div>

            {/* Google rating summary */}
            <div className="flex items-center gap-3">
              <GoogleG />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-2xl leading-none">4.6</span>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4].map((i) => (
                      <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <svg className="w-4 h-4" viewBox="0 0 20 20">
                      <defs>
                        <linearGradient id="drawer-half">
                          <stop offset="60%" stopColor="#fbbf24" />
                          <stop offset="60%" stopColor="#374151" />
                        </linearGradient>
                      </defs>
                      <path fill="url(#drawer-half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>
                <span className="text-white/40 text-xs">{t("reviews.powered")}</span>
              </div>
            </div>
          </div>

          {/* Scrollable reviews */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3 scrollbar-thin">
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 hover:bg-white/[0.07] transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <span className="text-white text-sm font-semibold block leading-tight">{review.name}</span>
                      <span className="text-white/30 text-[0.65rem]">{review.date}</span>
                    </div>
                  </div>
                  <Stars count={review.stars} />
                </div>
                <p className="text-white/65 text-[0.8rem] leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="shrink-0 px-5 py-4 border-t border-white/[0.06]">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl text-white font-semibold text-sm transition-all group"
            >
              <GoogleG />
              <span>{t("reviews.cta")}</span>
              <span className="material-icons text-white/40 group-hover:text-white/70 text-base transition-colors">open_in_new</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
