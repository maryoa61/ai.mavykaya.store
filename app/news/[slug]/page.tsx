import { notFound } from "next/navigation";
import { news } from "../../../lib/data";

export const dynamicParams = false;

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = news.find((n) => n.slug === params.slug);
  return { title: item ? `${item.title} | Mavy AI` : "Mavy AI" };
}

export default function NewsDetail({ params }: { params: { slug: string } }) {
  const item = news.find((n) => n.slug === params.slug);
  if (!item) notFound();
  return (
    <div className="max-w-3xl mx-auto px-4 mt-8">
      <span className="bg-primary px-3 py-1 rounded-full text-xs">{item.cat}</span>
      <h1 className="text-3xl font-black mt-4 leading-tight">{item.title}</h1>
      <p className="opacity-60 text-sm mt-2">نویسنده: تیم Mavy AI • {item.date}</p>
      <div className="glass p-8 rounded-3xl mt-6 leading-loose">
        متن کامل این خبر به‌زودی منتشر می‌شود.
      </div>
      <a href="/news/" className="text-secondary text-sm mt-6 inline-block">← بازگشت به اخبار</a>
    </div>
  );
}
