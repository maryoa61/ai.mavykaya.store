import { freeModels, news } from "../lib/data";
export default function Home(){
 return(
  <main className="max-w-7xl mx-auto px-4">
    <section className="grid md:grid-cols-3 gap-6 mt-8">
      <div className="md:col-span-2 bg-gradient-to-br from-primary to-[#8A7DFF] p-8 rounded-[2rem] text-white">
        <span className="bg-white text-dark px-3 py-1 rounded-full text-xs font-bold">🔥 ترند امروز</span>
        <h1 className="text-3xl md:text-4xl font-black mt-4 leading-tight">Claude 3.5 Sonnet با 1 میلیون توکن رایگان!</h1>
        <p className="mt-3 opacity-90">آموزش فعالسازی + لینک مستقیم + کد API رایگان</p>
        <a href="/free-tokens" className="inline-block mt-6 bg-white text-dark px-6 py-3 rounded-full font-bold">مشاهده آموزش رایگان ←</a>
      </div>
      <div className="glass p-6 rounded-[2rem]">
        <h3 className="font-bold">آخرین اخبار</h3>
        <ul className="mt-4 space-y-4 text-sm">
          {news.slice(0,3).map(n=>(
            <li key={n.slug} className="border-b border-white/5 pb-3 last:border-0"><a href={`/news/${n.slug}`}>{n.title}</a><span className="block text-xs opacity-50 mt-1">{n.cat} • {n.date}</span></li>
          ))}
        </ul>
        <a href="/news" className="text-secondary text-xs mt-4 block">همه اخبار ←</a>
      </div>
    </section>
    <section className="mt-12">
      <div className="flex justify-between items-center"><h2 className="text-xl font-black">مدل‌های سخاوتمند امروز 🎁</h2><a href="/free-tokens" className="text-sm text-secondary">مشاهده همه</a></div>
      <div className="grid md:grid-cols-3 gap-6 mt-4">
        {freeModels.map(m=>(
          <div key={m.slug} className="glass p-6 rounded-3xl">
            <span className={`${m.color} px-3 py-1 rounded-full text-xs font-bold`}>{m.token}</span>
            <h3 className="font-bold text-lg mt-3">{m.name}</h3>
            <p className="text-sm opacity-70 mt-1">{m.desc}</p>
            <a href={`/free-tokens`} className="text-secondary text-sm mt-3 block">آموزش دریافت ←</a>
          </div>
        ))}
      </div>
    </section>
  </main>
 )
}
