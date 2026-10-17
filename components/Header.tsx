"use client";

import { useLang } from "./LanguageProvider";
import type { Key } from "../lib/i18n";

const links: { href: string; key: Key }[] = [
  { href: "/", key: "nav.home" },
  { href: "/news/", key: "nav.news" },
  { href: "/free-tokens/", key: "nav.free" },
  { href: "/tutorials/", key: "nav.tutorials" },
  { href: "/shop/", key: "nav.shop" },
];

export default function Header() {
  const { lang, setLang, t } = useLang();

  return (
    <header className="border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-3">
        <a href="/" className="text-xl font-black">
          Mavy <span className="text-secondary">AI</span>
        </a>
        <nav className="flex flex-wrap items-center gap-5 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="opacity-80 hover:opacity-100 hover:text-secondary">
              {t(l.key)}
            </a>
          ))}
          <button
            type="button"
            onClick={() => setLang(lang === "fa" ? "en" : "fa")}
            aria-label="Change language"
            className="rounded-full border border-secondary/40 px-3 py-1 text-xs font-bold text-secondary transition hover:bg-secondary hover:text-dark"
          >
            {t("toggle")}
          </button>
        </nav>
      </div>
    </header>
  );
}
