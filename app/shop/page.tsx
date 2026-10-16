import { shop } from "../../lib/data";

export const metadata = { title: "فروشگاه Mavy Store | Mavy AI", description: "کاتالوگ اشتراک ابزارهای هوش مصنوعی" };

export default function Shop() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-8">
      <h1 className="text-3xl font-black">فروشگاه Mavy Store</h1>
      <p className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 p-3 rounded-xl mt-4 text-sm">
        ⚠️ فروشگاه در حالت کاتالوگ است و به‌زودی فعال می‌شود.
      </p>
      <div className="grid md:grid-cols-4 gap-6 mt-6">
        {shop.map((p) => (
          <div key={p.name} className="bg-white text-dark p-6 rounded-3xl relative">
            <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] px-2 py-1 rounded-full">به زودی</span>
            <h3 className="font-black mt-6">{p.name}</h3>
            <ul className="text-xs opacity-70 mt-3 space-y-1">
              {p.features.map((f) => (<li key={f}>✓ {f}</li>))}
            </ul>
            <button className="w-full mt-4 bg-dark text-white py-2 rounded-full text-sm">اطلاع از موجودی</button>
          </div>
        ))}
      </div>
    </div>
  );
}
