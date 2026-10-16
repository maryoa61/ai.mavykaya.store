import { freeModels } from "../../lib/data";

export const metadata = { title: "مدل‌های دارای پلن رایگان | Mavy AI", description: "سرویس‌های هوش مصنوعی با پلن یا سهمیه رایگان" };

export default function FreeTokens() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-8">
      <h1 className="text-3xl font-black">مدل‌های دارای پلن رایگان 🎁</h1>
      <p className="text-xs opacity-60 mt-2">سهمیه و شرایط رایگان هر سرویس ممکن است تغییر کند؛ جزئیات دقیق را در سایت رسمی ببینید.</p>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {freeModels.map((m) => (
          <div key={m.slug} className="glass p-6 rounded-3xl">
            <span className={`${m.color} px-3 py-1 rounded-full text-xs font-bold`}>{m.token}</span>
            <h3 className="text-xl font-bold mt-3">{m.name}</h3>
            <p className="opacity-70 text-sm mt-1">{m.desc}</p>
            <a href={m.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-secondary text-dark px-5 py-2 rounded-full font-bold text-sm">
              رفتن به سایت اصلی →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
