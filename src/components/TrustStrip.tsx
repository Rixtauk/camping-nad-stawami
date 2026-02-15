"use client";

import { useLanguage } from "@/lib/LanguageContext";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/travel/search?ts=CAEaSQopEicyJTB4NDcwZTIxY2IwNjZlMDI0ZDoweDQ5MDFiODNhODVmY2FiZjISHBIUCgcI6g8QAhgREgcI6g8QAhgSGAEyBAgAEAA&qs=CAEyE0Nnb0k4dGZ5cjZpSDdvQkpFQUU4AkIJCfKr_IU6uAFJ&utm_campaign=sharing&utm_medium=link_btn&utm_source=htls";
const BOOKING_URL = "https://www.booking.com/Share-QFCcX3";

function StarRating() {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4].map((i) => (
        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      {/* Half star for 4.6 */}
      <svg className="w-4 h-4" viewBox="0 0 20 20">
        <defs>
          <linearGradient id="half-star">
            <stop offset="60%" stopColor="#fbbf24" />
            <stop offset="60%" stopColor="#374151" />
          </linearGradient>
        </defs>
        <path fill="url(#half-star)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

export default function TrustStrip() {
  const { t } = useLanguage();

  return (
    <div className="bg-forest-900 border-y border-white/[0.06] py-4 sm:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Desktop: Google + Booking side by side, bigger */}
        <div className="hidden sm:flex items-center justify-center gap-8">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] rounded-xl px-5 py-3 transition-all group"
          >
            <GoogleLogo />
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-xl leading-none">{t("trust.google.score")}</span>
                <StarRating />
              </div>
              <span className="text-white/50 text-xs leading-tight mt-0.5">
                {t("trust.google.reviews")} · Google
              </span>
            </div>
            <span className="material-icons text-white/30 group-hover:text-white/60 text-base transition-colors ml-1">open_in_new</span>
          </a>

          <div className="w-px h-10 bg-white/10" />

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-[#003580]/20 hover:bg-[#003580]/35 border border-[#003580]/30 rounded-xl px-5 py-3 transition-all group"
          >
            <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="4" fill="#003580" />
              <path d="M5.5 5h4.2c2.3 0 3.6 1.1 3.6 2.8 0 1.2-.7 2.1-1.8 2.5v.1c1.4.3 2.2 1.3 2.2 2.7 0 2-1.5 3.2-3.9 3.2H5.5V5zm3.9 4.5c1 0 1.6-.5 1.6-1.3 0-.8-.6-1.2-1.6-1.2H7.8v2.5h1.6zm.2 4.7c1.1 0 1.8-.6 1.8-1.4 0-.9-.7-1.4-1.8-1.4H7.8v2.8h1.8z" fill="white" />
              <circle cx="17.5" cy="16" r="2.5" fill="#003580" stroke="white" strokeWidth="1.5" />
            </svg>
            <span className="text-white/90 text-base font-semibold">{t("trust.booking.cta")}</span>
            <span className="material-icons text-white/30 group-hover:text-white/60 text-base transition-colors">open_in_new</span>
          </a>
        </div>

        {/* Mobile: 2-col, Google + Booking side by side */}
        <div className="grid sm:hidden grid-cols-2 gap-3">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] rounded-xl px-3 py-2.5 transition-all"
          >
            <GoogleLogo />
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-white font-bold text-base leading-none">{t("trust.google.score")}</span>
                <StarRating />
              </div>
              <span className="text-white/50 text-[0.6rem] leading-tight mt-0.5 truncate">
                {t("trust.google.reviews")}
              </span>
            </div>
          </a>

          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#003580]/20 hover:bg-[#003580]/35 border border-[#003580]/30 rounded-xl px-3 py-2.5 transition-all"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
              <rect width="24" height="24" rx="4" fill="#003580" />
              <path d="M5.5 5h4.2c2.3 0 3.6 1.1 3.6 2.8 0 1.2-.7 2.1-1.8 2.5v.1c1.4.3 2.2 1.3 2.2 2.7 0 2-1.5 3.2-3.9 3.2H5.5V5zm3.9 4.5c1 0 1.6-.5 1.6-1.3 0-.8-.6-1.2-1.6-1.2H7.8v2.5h1.6zm.2 4.7c1.1 0 1.8-.6 1.8-1.4 0-.9-.7-1.4-1.8-1.4H7.8v2.8h1.8z" fill="white" />
              <circle cx="17.5" cy="16" r="2.5" fill="#003580" stroke="white" strokeWidth="1.5" />
            </svg>
            <span className="text-white/90 text-sm font-semibold">{t("trust.booking.cta")}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
