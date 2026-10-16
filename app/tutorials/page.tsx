import { tutorials } from "../../lib/data";
export default function Tutorials(){
 return(<div className="max-w-7xl mx-auto px-4 mt-8">
  <h1 className="text-3xl font-black">آموزش های کاربردی</h1>
  <div className="grid md:grid-cols-2 gap-6 mt-6">
    {tutorials.map(t=>(
      <div key={t.slug} className="glass p-6 rounded-3xl">
        <h3 className="font-bold">{t.title}</h3><span className="text-xs opacity-50">{t.time} مطالعه</span>
        <a href="#" className="block text-secondary text-sm mt-3">شروع آموزش ←</a>
      </div>
    ))}
  </div>
 </div>)
}
