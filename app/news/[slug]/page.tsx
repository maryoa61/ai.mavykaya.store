import { news } from "../../../lib/data";
export function generateStaticParams(){ return news.map(n=>({slug:n.slug})) }
export default function NewsDetail({params}:{params:{slug:string}}){
 const item = news.find(n=>n.slug===params.slug);
 return(<div className="max-w-3xl mx-auto px-4 mt-8">
  <span className="bg-primary px-3 py-1 rounded-full text-xs">{item?.cat}</span>
  <h1 className="text-3xl font-black mt-4 leading-tight">{item?.title}</h1>
  <p className="opacity-60 text-sm mt-2">نویسنده: تیم Mavy AI • منبع: رسمی</p>
  <div className="glass p-8 rounded-3xl mt-6 leading-loose">این خبر به صورت کامل با محتوای سئو شده اینجا قرار میگیرد. برای هر خبر 500 کلمه محتوای یونیک بنویس تا گوگل رتبه بده.</div>
 </div>)
}
