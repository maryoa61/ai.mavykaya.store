"use client";

import { useLang } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-white/10 mt-16 py-10 text-center text-xs opacity-60">
      <div className="max-w-7xl mx-auto px-4">
        <p className="font-bold text-white text-sm">{t("footer.tagline")}</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="/about/">{t("footer.about")}</a>
          <a href="/contact/">{t("footer.contact")}</a>
          <a href="/privacy/">{t("footer.privacy")}</a>
        </div>
        <p className="mt-4">{t("footer.rights")}</p>
      </div>
    </footer>
  );
}
