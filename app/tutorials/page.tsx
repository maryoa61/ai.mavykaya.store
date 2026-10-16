import { tutorials } from "../../lib/data";

export const metadata = { title: "آموزش‌های کاربردی | Mavy AI", description: "آموزش استفاده از ابزارهای هوش مصنوعی" };

export default function Tutorials() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-8">
      <h1 className="text-3xl font-black">آموزش‌های کاربردی</h1>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {tutorials.map((t) => (
          <div key={t.slug} className="glass p-6 rounded-3xl">
            <h3 className="font-bold">{t.title}</h3>
            <span className="text-xs opacity-50">{t.time} مطالعه</span>
            <span className="block text-xs opacity-60 mt-3">به‌زودی</span>
          </div>
        ))}
      </div>
    </div>
  );
}
