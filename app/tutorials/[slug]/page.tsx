import { notFound } from "next/navigation";
import { tutorials } from "../../../lib/tutorials";

export const dynamicParams = false;

export function generateStaticParams() {
  return tutorials.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const t = tutorials.find((x) => x.slug === params.slug);
  return { title: t ? `${t.title} | Mavy AI` : "آموزش | Mavy AI" };
}

export default function TutorialPage({ params }: { params: { slug: string } }) {
  const t = tutorials.find((x) => x.slug === params.slug);
  if (!t) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <a href="/tutorials/" className="text-sm font-bold text-[#00E5CC]">→ همه‌ی آموزش‌ها</a>

      <div className="mt-6 flex items-center gap-3 text-xs">
        <span className="rounded-full bg-[#00E5CC]/15 px-3 py-1 font-bold text-[#00E5CC]">{t.level}</span>
        <span className="opacity-60">{t.time}</span>
      </div>
      <h1 className="mt-4 text-3xl font-black leading-tight md:text-4xl">{t.title}</h1>
      <p className="mt-4 text-lg leading-loose opacity-75">{t.intro}</p>

      <ol className="mt-12 space-y-10 border-r-2 border-[#00E5CC]/30 pr-8">
        {t.steps.map((s, i) => (
          <li key={s.title} className="relative">
            <span className="absolute -right-[2.6rem] top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#00E5CC] text-sm font-black text-[#080C1E]">
              {i + 1}
            </span>
            <h2 className="text-xl font-black">{s.title}</h2>
            <p className="mt-3 leading-loose opacity-80">{s.body}</p>
            {s.code && (
              <pre dir="ltr" className="mt-4 overflow-x-auto rounded-2xl border border-white/10 bg-[#080C1E] p-5 text-left text-sm leading-relaxed">
                <code>{s.code}</code>
              </pre>
            )}
          </li>
        ))}
      </ol>
    </article>
  );
}
