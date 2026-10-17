import { tutorials } from "../../lib/tutorials";

export const metadata = {
  title: "آموزش‌ها | Mavy AI",
  description: "آموزش گام‌به‌گام استفاده از مدل‌های هوش مصنوعی با پلن رایگان",
};

export default function TutorialsPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-black md:text-5xl">آموزش‌ها</h1>
      <p className="mt-3 max-w-xl opacity-70">
        گام‌به‌گام یاد بگیر چطور از مدل‌های هوش مصنوعی استفاده کنی.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {tutorials.map((t) => (
          <a
            key={t.slug}
            href={`/tutorials/${t.slug}/`}
            className="group rounded-3xl border border-white/10 bg-[#121636] p-7 transition hover:border-[#00E5CC]/50"
          >
            <div className="flex items-center gap-3 text-xs">
              <span className="rounded-full bg-[#00E5CC]/15 px-3 py-1 font-bold text-[#00E5CC]">{t.level}</span>
              <span className="opacity-60">{t.time}</span>
            </div>
            <h2 className="mt-4 text-xl font-black transition group-hover:text-[#00E5CC]">{t.title}</h2>
            <p className="mt-2 text-sm leading-relaxed opacity-70">{t.intro}</p>
            <span className="mt-5 inline-block text-sm font-bold text-[#00E5CC]">شروع آموزش ←</span>
          </a>
        ))}
      </div>
    </main>
  );
}
