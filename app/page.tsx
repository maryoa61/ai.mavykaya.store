"use client";

import { freeModels, news } from "../lib/data";
import { modelEn, newsEn } from "../lib/content";
import { useLang } from "../components/LanguageProvider";

const css = `
  .scene { perspective: 1400px; }
  .layer { position: absolute; transform-style: preserve-3d; transition: transform .6s cubic-bezier(.2,.7,.2,1); }
  .float { animation: float 7s ease-in-out infinite; }
  .float-b { animation: float 9s ease-in-out -3s infinite; }
  .spin { animation: spin 26s linear infinite; }
  @keyframes float { 0%,100% { translate: 0 0; } 50% { translate: 0 -14px; } }
  @keyframes spin { to { rotate: 360deg; } }
  .tilt { transition: transform .5s ease, box-shadow .5s ease; }
  .tilt:hover { transform: rotateX(4deg) rotateY(-6deg) translateY(-6px); }
  @media (prefers-reduced-motion: reduce) {
    .float, .float-b, .spin { animation: none; }
    .tilt, .layer { transition: none; }
  }
`;

type Model = (typeof freeModels)[number];
type NewsItem = (typeof news)[number];

const [top, mid, back] = freeModels;

export default function Home() {
  const { t, pick } = useLang();

  const modelToken = (m: Model) => pick(m.token, modelEn[m.slug]?.token ?? m.token);
  const modelDesc = (m: Model) => pick(m.desc, modelEn[m.slug]?.desc ?? m.desc);
  const newsTitle = (n: NewsItem) => pick(n.title, newsEn[n.slug]?.title ?? n.title);
  const newsDate = (n: NewsItem) => pick(n.date, newsEn[n.slug]?.date ?? n.date);

  return (
    <main className="mx-auto max-w-7xl px-4">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      {/* هیرو */}
      <section className="grid items-center gap-10 py-12 md:grid-cols-2 md:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-1.5 text-xs font-bold text-secondary">
            {t("home.trend")}
          </p>
          <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
            {t("home.heroA")}
            <span className="block bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent rtl:bg-gradient-to-l">
              {t("home.heroB")}
            </span>
          </h1>
          <p className="mt-5 max-w-lg text-base leading-loose opacity-75 md:text-lg">{t("home.lead")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="/free-tokens/" className="rounded-full bg-secondary px-7 py-3 font-bold text-dark transition hover:opacity-90">
              {t("home.ctaFree")}
            </a>
            <a href="/tutorials/" className="rounded-full border border-white/20 px-7 py-3 font-bold transition hover:border-secondary hover:text-secondary">
              {t("home.ctaTutorial")}
            </a>
          </div>
        </div>

        {/* صحنه‌ی سه‌بعدی */}
        <div className="scene relative mx-auto h-[300px] w-full max-w-md md:h-[440px]">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 blur-3xl" />
          <div className="spin absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-secondary/25" />

          {back && (
            <div
              className="layer float-b left-[12%] top-[10%] w-[68%] rounded-3xl border border-white/10 bg-card/70 p-5 opacity-70"
              style={{ transform: "translateZ(-120px) rotateY(14deg) rotateX(6deg)" }}
            >
              <p className="text-xs text-secondary">{modelToken(back)}</p>
              <p className="mt-2 font-bold">{back.name}</p>
            </div>
          )}
          {mid && (
            <div
              className="layer float left-[18%] top-[30%] w-[66%] rounded-3xl border border-white/15 bg-card/85 p-5 shadow-2xl"
              style={{ transform: "translateZ(0px) rotateY(-6deg)" }}
            >
              <p className="text-xs text-secondary">{modelToken(mid)}</p>
              <p className="mt-2 font-bold">{mid.name}</p>
            </div>
          )}
          {top && (
            <div
              className="layer float left-[6%] top-[4%] w-[70%] rounded-3xl border border-secondary/30 bg-gradient-to-br from-primary/90 to-card p-6 shadow-2xl"
              style={{ transform: "translateZ(110px) rotateY(-14deg) rotateX(8deg)" }}
            >
              <p className="text-xs opacity-80">{modelToken(top)}</p>
              <p className="mt-2 text-xl font-black">{top.name}</p>
              <p className="mt-2 text-sm opacity-80">{modelDesc(top)}</p>
            </div>
          )}
        </div>
      </section>

      {/* مدل‌های رایگان */}
      <section className="py-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-black md:text-3xl">{t("home.freeTitle")}</h2>
          <a href="/free-tokens/" className="shrink-0 text-sm font-bold text-secondary">{t("home.viewAll")}</a>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {freeModels.map((m) => (
            <div key={m.slug} className="tilt rounded-3xl border border-white/10 bg-card p-6 shadow-xl hover:shadow-primary/20">
              <span className="inline-block rounded-full bg-secondary/15 px-3 py-1 text-xs font-bold text-secondary">
                {modelToken(m)}
              </span>
              <h3 className="mt-4 text-xl font-black">{m.name}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-70">{modelDesc(m)}</p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm font-bold">
                <a href={m.url} target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                  {t("home.official")}
                </a>
                <a href="/free-tokens/" className="opacity-70 hover:opacity-100">{t("home.details")}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* اخبار */}
      <section className="py-12">
        <h2 className="mb-6 text-2xl font-black md:text-3xl">{t("home.latest")}</h2>
        <div className="grid gap-6 md:grid-cols-5">
          {news[0] && (
            <a
              href={`/news/${news[0].slug}/`}
              className="tilt flex flex-col justify-end rounded-3xl bg-gradient-to-br from-primary to-[#8A7DFF] p-8 md:col-span-3 md:min-h-[300px]"
            >
              <span className="w-fit rounded-full bg-white px-3 py-1 text-xs font-bold text-dark">
                {news[0].cat} • {newsDate(news[0])}
              </span>
              <h3 className="mt-4 text-2xl font-black leading-snug md:text-3xl">{newsTitle(news[0])}</h3>
              <span className="mt-4 text-sm font-bold">{t("home.readMore")}</span>
            </a>
          )}

          <div className="flex flex-col gap-4 md:col-span-2">
            {news.slice(1, 3).map((n) => (
              <a key={n.slug} href={`/news/${n.slug}/`} className="rounded-2xl border border-white/10 bg-card p-5 transition hover:border-secondary/50">
                <span className="text-xs opacity-60">{n.cat} • {newsDate(n)}</span>
                <p className="mt-2 font-bold leading-relaxed">{newsTitle(n)}</p>
              </a>
            ))}
            <a href="/news/" className="text-sm font-bold text-secondary">{t("home.allNews")}</a>
          </div>
        </div>
      </section>

      {/* لینک آموزش‌ها */}
      <section className="py-12">
        <a
          href="/tutorials/"
          className="tilt flex flex-col gap-4 rounded-3xl border border-secondary/30 bg-card p-8 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h2 className="text-2xl font-black">{t("home.tutTitle")}</h2>
            <p className="mt-2 opacity-70">{t("home.tutLead")}</p>
          </div>
          <span className="shrink-0 rounded-full bg-secondary px-6 py-3 font-bold text-dark">{t("home.tutCta")}</span>
        </a>
      </section>

      {/* فراخوان */}
      <section className="my-12 rounded-[2rem] border border-secondary/20 bg-gradient-to-br from-card to-dark p-8 text-center md:p-14">
        <h2 className="text-2xl font-black md:text-4xl">{t("home.finalTitle")}</h2>
        <p className="mx-auto mt-3 max-w-xl opacity-70">{t("home.finalLead")}</p>
        <a href="/free-tokens/" className="mt-7 inline-block rounded-full bg-secondary px-8 py-3 font-bold text-dark transition hover:opacity-90">
          {t("home.finalCta")}
        </a>
      </section>
    </main>
  );
}
