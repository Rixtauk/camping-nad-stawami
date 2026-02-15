"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2 bg-white/10 rounded-full px-3 py-1 border border-white/10">
      <button
        onClick={() => setLanguage("pl")}
        className={`text-[10px] font-bold transition-colors ${
          language === "pl" ? "text-primary" : "text-white/40"
        }`}
      >
        PL
      </button>
      <div className="w-[1px] h-3 bg-white/20" />
      <button
        onClick={() => setLanguage("en")}
        className={`text-[10px] font-bold transition-colors ${
          language === "en" ? "text-primary" : "text-white/40"
        }`}
      >
        EN
      </button>
    </div>
  );
}
