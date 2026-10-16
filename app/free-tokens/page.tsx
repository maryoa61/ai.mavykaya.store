import { freeModels } from "../../lib/data";
export default function FreeTokens(){
 return(<div className="max-w-7xl mx-auto px-4 mt-8">
  <h1 className="text-3xl font-black">مدل های سخاوتمند با توکن رایگان 🎁</h1>
  <div className="grid md:grid-cols-2 gap-6 mt-6">
    {freeModels.map(m=>(
      <div key={m.slug} className="glass p-6 rounded-3xl">
        <span className={`${m.color} px-3 py-1 rounded-full text-xs font-bold`}>{m.token}</span>
        <h3 className="text-xl font-bold mt-3">{m.name}</h3>
        <p className="opacity-70 text-sm mt-1">{m.desc}</p>
        <a href="#" className="inline-block mt-4 bg-secondary text-dark px-5 py-2 rounded-full font-bold text-sm">رفتن به سایت اصلی →</a>
      </div>
    ))}
  </div>
 </div>)
}
