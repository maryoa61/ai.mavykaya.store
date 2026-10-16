const links = [
  { href: "/", label: "خانه" },
  { href: "/news/", label: "اخبار" },
  { href: "/free-tokens/", label: "توکن رایگان" },
  { href: "/tutorials/", label: "آموزش‌ها" },
  { href: "/shop/", label: "فروشگاه" },
];

export default function Header() {
  return (
    <header className="border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-3">
        <a href="/" className="text-xl font-black">
          Mavy <span className="text-secondary">AI</span>
        </a>
        <nav className="flex flex-wrap gap-5 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="opacity-80 hover:opacity-100 hover:text-secondary">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
