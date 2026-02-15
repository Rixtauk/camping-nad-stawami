"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

const navLinks = [
  { key: "nav.about" as const, href: "#o-miejscu" },
  { key: "nav.stays" as const, href: "#noclegi" },
  { key: "nav.facilities" as const, href: "#udogodnienia" },
  { key: "nav.fishing" as const, href: "#wedkowanie" },
  { key: "nav.area" as const, href: "#okolica" },
  { key: "nav.booking" as const, href: "#dojazd" },
  { key: "nav.faq" as const, href: "#faq" },
  { key: "nav.contact" as const, href: "#kontakt" },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <a href="#hero" className="flex items-center space-x-2 shrink-0">
          <span className="material-icons-outlined text-primary text-2xl sm:text-3xl">
            nature_people
          </span>
          <span className="text-serif text-sm sm:text-lg font-bold tracking-tight text-white whitespace-nowrap">
            {t("nav.brand")}
          </span>
        </a>

        {/* Right: Language toggle + CTA + Burger */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <LanguageToggle />

          {/* Phone CTA — icon-only on mobile, full button on sm+ */}
          <a
            href="tel:+48608306739"
            className="hidden sm:flex bg-primary text-background-dark px-6 py-2.5 rounded-full font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/20 items-center"
          >
            {t("nav.cta")}
          </a>
          <a
            href="tel:+48608306739"
            className="flex sm:hidden w-10 h-10 bg-primary rounded-full items-center justify-center shadow-lg shadow-primary/20"
            aria-label="Zadzwoń"
          >
            <span className="material-icons-outlined text-background-dark text-xl">phone</span>
          </a>

          {/* Burger menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 flex items-center justify-center text-white hover:text-primary transition-colors"
            aria-label="Menu"
          >
            <span className="material-icons text-2xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Dropdown menu — right-aligned */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className={`absolute right-4 sm:right-6 top-0 w-56 transition-all duration-300 ease-in-out origin-top-right ${
            menuOpen
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="bg-slate-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl overflow-hidden">
            <div className="py-2 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.key}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-white/80 hover:text-primary hover:bg-white/5 transition-colors py-3 px-5"
                >
                  {t(link.key)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
