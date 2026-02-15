"use client";
import { useLanguage } from "@/lib/LanguageContext";

const navLinks = [
  { key: "footer.about" as const, href: "#o-miejscu" },
  { key: "footer.stays" as const, href: "#noclegi" },
  { key: "footer.facilities" as const, href: "#udogodnienia" },
  { key: "footer.fishing" as const, href: "#wedkowanie" },
  { key: "footer.area" as const, href: "#okolica" },
  { key: "footer.booking" as const, href: "#dojazd" },
  { key: "footer.faq" as const, href: "#faq" },
  { key: "footer.contact" as const, href: "#kontakt" },
] as const;

export default function ContactFooter() {
  const { t } = useLanguage();

  return (
    <footer id="kontakt" className="scroll-mt-20 relative bg-slate-900 dark:bg-[#0a140d] text-white overflow-hidden">
      {/* Contact strip — horizontal 3-column layout */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 items-start">
          {/* Column 1: Phone */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold mb-3 text-white/50 uppercase tracking-wider text-xs">{t("contact.title")}</h2>
            <a href="tel:+48608306739" className="group">
              <p className="text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                {t("contact.phone.local")}
              </p>
              <p className="text-sm text-slate-400 mt-1">
                {t("contact.phone.international")}
              </p>
            </a>
          </div>

          {/* Column 2: Address + GPS */}
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2">
              <span className="material-icons text-primary text-xl">location_on</span>
              <span className="text-slate-300 text-sm">{t("contact.address")}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="material-icons text-primary text-xl">my_location</span>
              <span className="text-slate-400 text-sm">{t("contact.gps")}</span>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=50.46477,16.90366"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 font-semibold text-sm transition-colors pt-1"
            >
              <span className="material-icons text-lg">directions</span>
              {t("contact.directions")}
            </a>
          </div>

          {/* Column 3: Social */}
          <div className="text-center md:text-right">
            <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-3">{t("contact.social")}</p>
            <div className="flex justify-center md:justify-end gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c.796 0 1.441.645 1.441 1.44s-.645 1.44-1.441 1.44c-.795 0-1.439-.645-1.439-1.44s.644-1.44 1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-primary rounded-md flex items-center justify-center">
              <span className="material-icons text-white text-base">forest</span>
            </div>
            <span className="text-sm font-bold tracking-tight">
              {t("footer.brand")}
            </span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="hover:text-primary transition-colors"
                href={link.href}
              >
                {t(link.key)}
              </a>
            ))}
          </nav>
          <p className="text-xs text-slate-600">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
