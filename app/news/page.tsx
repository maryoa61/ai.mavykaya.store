import { news } from "../../lib/data";

export const metadata = { title: "اخبار هوش مصنوعی | Mavy AI", description: "آخرین اخبار دنیای هوش مصنوعی" };

export default function NewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-8">
      <h1 className="text-3xl font-black">اخبار هوش مصنوعی</h1>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {news.map((n) => (
          <a key={n.slug} href={`/news/${n.slug}/`} className="glass p-6 rounded-3xl hover:bg-white/10">
            <div className="text-4xl">{n.img}</div>
            <span className="text-xs bg-primary px-2 py-1 rounded-full mt-3 inline-block">{n.cat}</span>
            <h3 className="font-bold mt-3 leading-relaxed">{n.title}</h3>
            <span className="text-xs opacity-50">{n.date}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
