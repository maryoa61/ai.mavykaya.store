import { news } from "../lib/data";
import { tutorials } from "../lib/tutorials";

export const dynamic = "force-static";

export default function sitemap() {
  const base = "https://ai.mavykaya.store";
  const pages = ["", "/news", "/free-tokens", "/tutorials", "/shop", "/about", "/contact", "/privacy"];
  const now = new Date();
  return [
    ...pages.map((p) => ({ url: `${base}${p}${p ? "/" : ""}`, lastModified: now })),
    ...news.map((n) => ({ url: `${base}/news/${n.slug}/`, lastModified: now })),
    ...tutorials.map((t) => ({ url: `${base}/tutorials/${t.slug}/`, lastModified: now })),
  ];
}
