"use client";

import type { ReactNode } from "react";
import { freeModels, news } from "../lib/data";
import { modelEn, newsEn } from "../lib/content";
import { useLang } from "../components/LanguageProvider";
import NotifyButton from "../components/NotifyButton";
import type { Key } from "../lib/i18n";

/* ------------------------- safe English lookups ------------------------- */
/* Works whether lib/content.ts is an array (by index) or an object (by slug). */

type ModelEn = { token?: string; desc?: string };
type NewsEn = { title?: string; date?: string };

const modelEnMap = modelEn as unknown as Record<string | number, ModelEn | undefined>;
const newsEnMap = newsEn as unknown as Record<string | number, NewsEn | undefined>;

/* ---------------------------------- icons --------------------------------- */

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M3.5 10h12m0 0-4.5-4.5M15.5 10 11 14.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExternalIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M6.5 13.5 13.5 6.5M8 6.5h5.5V12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="m4.5 10.5 3.6 3.6 7.4-8.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TrendIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M2.5 14.5 8 9l3.5 3.5 6-6.5M13 6h4.5v4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InfoIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 9.2v4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="10" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function ChatIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M16.5 5.5h-13v8h3v3l4-3h6v-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function SparkIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M10 3l1.9 5.1L17 10l-5.1 1.9L10 17l-1.9-5.1L3 10l5.1-1.9L10 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function GemIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M10 3.5 15.5 8 10 16.5 4.5 8 10 3.5ZM4.5 8h11" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <circle cx="9" cy="9" r="4.75" stroke="currentColor" strokeWidth="1.6" />
      <path d="m12.6 12.6 3.9 3.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------ page-scoped CSS ----------------------------- */

const pageCss = `
  ::selection { background: rgba(0, 229, 204, 0.28); }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid #E9A23B;
    outline-offset: 3px;
  }

  .stack-scene { perspective: 1100px; }

  .stack-card {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 19rem;
  }
  .stack-back {
    transform: translate(-50%, -50%) translate(-24px, -58px) translateZ(-95px) rotateY(-15deg);
    opacity: 0.5;
  }
  .stack-mid {
    transform: translate(-50%, -50%) translate(-8px, -16px) translateZ(-48px) rotateY(-7deg);
    opacity: 0.75;
  }
  .stack-front {
    transform: translate(-50%, -50%) translateY(26px) translateZ(14px) rotateY(2deg);
  }
  [dir="rtl"] .stack-back {
    transform: translate(-50%, -50%) translate(24px, -58px) translateZ(-95px) rotateY(15deg);
  }
  [dir="rtl"] .stack-mid {
    transform: translate(-50%, -50%) translate(8px, -16px) translateZ(-48px) rotateY(7deg);
  }
  [dir="rtl"] .stack-front {
    transform: translate(-50%, -50%) translateY(26px) translateZ(14px) rotateY(-2deg);
  }

  @keyframes mavy-float {
    0%, 100% { transform: translateY(0); }
    50%      { transform: translateY(-12px); }
  }
  @keyframes mavy-spin {
    from { transform: translate(-50%, -50%) translateZ(-140px) rotate(0deg); }
    to   { transform: translate(-50%, -50%) translateZ(-140px) rotate(360deg); }
  }
  .stack-float { animation: mavy-float 7s ease-in-out infinite; }
  .stack-float-d1 { animation-delay: -2.3s; }
  .stack-float-d2 { animation-delay: -4.6s; }
  .stack-ring {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) translateZ(-140px);
    animation: mavy-spin 36s linear infinite;
  }

  .tilt {
    transition: transform 0.35s cubic-bezier(0.22, 0.61, 0.36, 1),
      border-color 0.35s ease, box-shadow 0.35s ease;
  }
  @media (hover: hover) and (pointer: fine) {
    .tilt:hover {
      transform: perspective(900px) translateY(-6px) rotateX(2.5deg);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .stack-float,
    .stack-ring {
      animation: none !important;
    }
    .tilt:hover {
      transform: none;
    }
  }
`;

/* ------------------------------ shop preview data ------------------------------ */

const shopProducts: { nameKey: Key; features: Key[]; icon: ReactNode }[] = [
  { nameKey: "home.shopP1", features: ["home.shopP1a", "home.shopP1b", "home.shopP1c"], icon: <ChatIcon className="h-5 w-5" /> },
  { nameKey: "home.shopP2", features: ["home.shopP2a", "home.shopP2b", "home.shopP2c"], icon: <SparkIcon className="h-5 w-5" /> },
  { nameKey: "home.shopP3", features: ["home.shopP3a", "home.shopP3b", "home.shopP3c"], icon: <GemIcon className="h-5 w-5" /> },
  { nameKey: "home.shopP4", features: ["home.shopP4a", "home.shopP4b", "home.shopP4c"], icon: <SearchIcon className="h-5 w-5" /> },
];

/* ---------------------------------- page ---------------------------------- */

export default function HomePage() {
  const { t, pick } = useLang();

  const enModel = (i: number): ModelEn | undefined =>
    modelEnMap[freeModels[i].slug] ?? modelEnMap[i];
  const enNews = (i: number): NewsEn | undefined =>
    newsEnMap[news[i].slug] ?? newsEnMap[i];

  const mToken = (i: number) => pick(freeModels[i].token, enModel(i)?.token ?? freeModels[i].token);
  const mName = (i: number) => freeModels[i].name;
  const mDesc = (i: number) => pick(freeModels[i].desc, enModel(i)?.desc ?? freeModels[i].desc);
  const nCat = (i: number) => news[i].cat;
  const nDate = (i: number) => pick(news[i].date, enNews(i)?.date ?? news[i].date);
  const nTitle = (i: number) => pick(news[i].title, enNews(i)?.title ?? news[i].title);

  return (
    <main className="bg-[#080C1E] text-white">
      <style dangerouslySetInnerHTML={{ __html: pageCss }} />

      {/* -------------------------------- hero -------------------------------- */}
      <section className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-220px] h-[460px] w-[720px] -translate-x-1/2 rounded-full bg-[#635BFF]/20 blur-[130px]" />
          <div className="absolute bottom-[-160px] left-[12%] h-[280px] w-[280px] rounded-full bg-[#00E5CC]/10 blur-[110px]" />
        </div>

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:grid-cols-2 lg:gap-10 lg:pb-24 lg:pt-24 xl:px-8">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold tracking-wide text-white/75 sm:text-sm">
              <TrendIcon className="h-4 w-4 text-[#00E5CC]" />
              {t("home.trend")}
            </span>

            <h1 className="mt-6 text-4xl font-black leading-[1.25] md:text-5xl lg:text-6xl lg:leading-[1.15]">
              {t("home.heroA")}
              <br />
              <span className="bg-gradient-to-r from-[#00E5CC] to-[#635BFF] bg-clip-text text-transparent">
                {t("home.heroB")}
              </span>
            </h1>

            <p className="mt-5 text-base leading-8 text-white/65 sm:text-lg sm:leading-9">{t("home.lead")}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="/free-tokens/"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#00E5CC] px-7 text-sm font-black text-[#080C1E] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-10px_rgba(0,229,204,0.55)]"
              >
                {t("home.ctaFree")}
                <ArrowIcon className="h-4 w-4 rtl:rotate-180" />
              </a>
              <a
                href="/tutorials/"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/20 px-7 text-sm font-bold text-white transition-colors hover:border-[#00E5CC]/70 hover:text-[#00E5CC]"
              >
                {t("home.ctaTutorial")}
              </a>
            </div>
          </div>

          {/* 3D card stack — decorative */}
          <div aria-hidden="true" className="relative mx-auto h-[310px] w-full max-w-[460px] sm:h-[440px] sm:max-w-[520px]">
            <div className="stack-scene absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 scale-[0.7] sm:scale-100">
              <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#635BFF]/30 blur-[70px]" />
              <div className="stack-ring h-[400px] w-[400px] rounded-full border-2 border-dashed border-white/15" />

              <div className="stack-card stack-back">
                <div className="stack-float stack-float-d2 rounded-2xl border border-white/10 bg-[#121636]/95 p-5 shadow-xl shadow-black/30">
                  <span className="inline-flex rounded-full bg-[#00E5CC]/10 px-3 py-1 text-[11px] font-bold text-[#00E5CC]">
                    {mToken(2)}
                  </span>
                  <p className="mt-3 text-lg font-extrabold text-white">{mName(2)}</p>
                </div>
              </div>

              <div className="stack-card stack-mid">
                <div className="stack-float stack-float-d1 rounded-2xl border border-white/10 bg-[#121636]/95 p-5 shadow-xl shadow-black/30">
                  <span className="inline-flex rounded-full bg-[#00E5CC]/10 px-3 py-1 text-[11px] font-bold text-[#00E5CC]">
                    {mToken(1)}
                  </span>
                  <p className="mt-3 text-lg font-extrabold text-white">{mName(1)}</p>
                </div>
              </div>

              <div className="stack-card stack-front">
                <div className="stack-float rounded-2xl border border-white/15 bg-[#121636] p-6 shadow-[0_35px_70px_-25px_rgba(0,0,0,0.65)]">
                  <span className="inline-flex rounded-full bg-[#00E5CC]/10 px-3 py-1 text-[11px] font-bold text-[#00E5CC]">
                    {mToken(0)}
                  </span>
                  <p className="mt-3 text-2xl font-black text-white">{mName(0)}</p>
                  <p className="mt-2 line-clamp-3 text-sm leading-7 text-white/60">{mDesc(0)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- free models ---------------------------- */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 xl:px-8">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
          <h2 className="text-2xl font-black md:text-3xl">{t("home.freeTitle")}</h2>
          <a href="/free-tokens/" className="group inline-flex min-h-[44px] items-center gap-1.5 text-sm font-bold text-[#00E5CC]">
            {t("home.viewAll")}
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </a>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {freeModels.map((m, i) => (
            <article
              key={m.slug}
              className="tilt flex flex-col rounded-2xl border border-white/10 bg-[#121636] p-6 hover:border-white/25 hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.7)]"
            >
              <span className="inline-flex w-fit rounded-full bg-[#00E5CC]/10 px-3 py-1 text-xs font-bold text-[#00E5CC]">
                {mToken(i)}
              </span>
              <h3 className="mt-4 text-xl font-black text-white">{mName(i)}</h3>
              <p className="mt-2 flex-1 text-sm leading-7 text-white/60">{mDesc(i)}</p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 border-t border-white/10 pt-2">
                <a
                  href={m.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-bold text-[#00E5CC] transition-colors hover:text-white"
                >
                  {t("home.official")}
                  <ExternalIcon className="h-3.5 w-3.5" />
                </a>
                <a
                  href="/free-tokens/"
                  className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-bold text-white/55 transition-colors hover:text-white"
                >
                  {t("home.details")}
                  <ArrowIcon className="h-4 w-4 rtl:rotate-180" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ----------------------------- latest news ---------------------------- */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 xl:px-8">
        <h2 className="text-2xl font-black md:text-3xl">{t("home.latest")}</h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-5">
          <a
            href={`/news/${news[0].slug}/`}
            className="tilt group relative flex min-h-[300px] flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-[#635BFF] via-[#4A3FD8] to-[#2A2380] p-7 hover:shadow-[0_30px_60px_-25px_rgba(99,91,255,0.5)] sm:p-9 lg:col-span-3"
          >
            <div aria-hidden="true" className="pointer-events-none absolute -end-16 -top-16 h-56 w-56 rounded-full border-[24px] border-white/10" />
            <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -start-10 h-44 w-44 rounded-full bg-white/5 blur-2xl" />
            <div className="relative flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-[#4636C9]">{nCat(0)}</span>
              <span className="text-xs font-bold text-white/75">{nDate(0)}</span>
            </div>
            <div className="relative mt-8">
              <h3 className="text-2xl font-black leading-snug sm:text-3xl">{nTitle(0)}</h3>
              <span className="mt-6 inline-flex min-h-[44px] items-center gap-2 text-sm font-black text-white">
                {t("home.readMore")}
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5 rtl:rotate-180 rtl:group-hover:-translate-x-1.5" />
              </span>
            </div>
          </a>

          <div className="flex flex-col gap-5 lg:col-span-2">
            {[1, 2].map((i) => (
              <a
                key={news[i].slug}
                href={`/news/${news[i].slug}/`}
                className="tilt group flex-1 rounded-3xl border border-white/10 bg-[#121636] p-6 hover:border-white/25"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold text-white/70">{nCat(i)}</span>
                  <span className="text-xs text-white/45">{nDate(i)}</span>
                </div>
                <h3 className="mt-3 line-clamp-2 text-lg font-extrabold leading-relaxed transition-colors group-hover:text-[#00E5CC]">
                  {nTitle(i)}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-white/50 transition-colors group-hover:text-[#00E5CC]">
                  {t("home.readMore")}
                  <ArrowIcon className="h-3.5 w-3.5 rtl:rotate-180" />
                </span>
              </a>
            ))}

            <a
              href="/news/"
              className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl border border-white/10 text-sm font-bold text-[#00E5CC] transition-colors hover:border-[#00E5CC]/40"
            >
              {t("home.allNews")}
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ----------------------------- tutorials ------------------------------ */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 xl:px-8">
        <a
          href="/tutorials/"
          className="tilt group relative flex flex-col gap-7 overflow-hidden rounded-3xl border border-[#00E5CC]/40 bg-[#121636] p-7 hover:border-[#00E5CC]/70 sm:p-10 md:flex-row md:items-center md:justify-between"
        >
          <div aria-hidden="true" className="pointer-events-none absolute -end-14 -top-20 h-52 w-52 rounded-full bg-[#00E5CC]/10 blur-3xl" />
          <div className="relative">
            <h2 className="text-2xl font-black md:text-3xl">{t("home.tutTitle")}</h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-white/60 sm:text-base sm:leading-8">{t("home.tutLead")}</p>
          </div>
          <span className="relative inline-flex min-h-[48px] shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#00E5CC] px-7 text-sm font-black text-[#080C1E] transition-all group-hover:-translate-y-0.5 md:self-auto">
            {t("home.tutCta")}
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </span>
        </a>
      </section>

      {/* ------------------------------ shop ---------------------------------- */}
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-20 xl:px-8">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
          <h2 className="text-2xl font-black md:text-3xl">{t("home.shopTitle")}</h2>
          <a href="/shop/" className="group inline-flex min-h-[44px] items-center gap-1.5 text-sm font-bold text-[#00E5CC]">
            {t("home.shopLink")}
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </a>
        </div>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#E9A23B]/25 bg-[#E9A23B]/10 px-4 py-3.5 sm:items-center">
          <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#E9A23B] sm:mt-0" />
          <p className="text-sm leading-7 text-[#F2C186]">{t("home.shopNotice")}</p>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {shopProducts.map((p) => (
            <article
              key={p.nameKey}
              className="tilt relative flex flex-col rounded-2xl bg-white p-6 text-[#080C1E] shadow-xl shadow-black/40 hover:shadow-2xl"
            >
              <span className="absolute end-4 top-4 whitespace-nowrap rounded-full bg-[#E5484D] px-2.5 py-1 text-[11px] font-black text-white">
                {t("home.shopSoon")}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#080C1E] text-[#00E5CC]">{p.icon}</span>
              <h3 className="mt-4 pe-2 text-lg font-black">{t(p.nameKey)}</h3>
              <ul className="mt-4 flex-1 space-y-2.5">
                {p.features.map((key) => (
                  <li key={key} className="flex items-start gap-2 text-sm text-[#080C1E]/70">
                    <CheckIcon className="mt-1 h-3.5 w-3.5 shrink-0 text-[#00A896]" />
                    <span className="leading-6">{t(key)}</span>
                  </li>
                ))}
              </ul>
              <NotifyButton productName={t(p.nameKey)} label={t("home.shopNotify")} className="mt-6 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full border border-[#080C1E]/15 text-sm font-bold transition-colors hover:border-[#080C1E]/40 hover:bg-[#080C1E]/5" />
            </article>
          ))}
        </div>
      </section>

      {/* ---------------------------- final call to action --------------------- */}
      <section className="mx-auto w-full max-w-6xl px-4 pb-20 pt-2 sm:px-6 sm:pb-28 xl:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-[#121636] to-[#080C1E] px-6 py-16 text-center sm:px-12 sm:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 h-64 w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#635BFF]/25 blur-[100px]" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[#00E5CC]/10 blur-[80px]" />
          <h2 className="relative text-3xl font-black md:text-4xl">{t("home.finalTitle")}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-sm leading-8 text-white/60 sm:text-base">{t("home.finalLead")}</p>
          <div className="relative mt-9">
            <a
              href="/free-tokens/"
              className="inline-flex min-h-[52px] items-center gap-2 rounded-full bg-[#00E5CC] px-9 text-sm font-black text-[#080C1E] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-10px_rgba(0,229,204,0.55)]"
            >
              {t("home.finalCta")}
              <ArrowIcon className="h-4 w-4 rtl:rotate-180" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
