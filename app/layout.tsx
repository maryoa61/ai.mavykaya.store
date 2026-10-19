import "./globals.css";
import { Inter, Noto_Sans_Arabic } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700", "800", "900"], variable: "--font-inter", display: "swap" });
const notoArabic = Noto_Sans_Arabic({ subsets: ["arabic", "latin"], weight: ["400", "500", "700", "800", "900"], variable: "--font-arabic", display: "swap" });
import Header from "../components/Header";
import Footer from "../components/Footer";
import { LanguageProvider } from "../components/LanguageProvider";

export const metadata = {
  title: "Mavy AI | مرجع اخبار هوش مصنوعی و توکن رایگان",
  description: "جدیدترین اخبار هوش مصنوعی، معرفی مدل‌های دارای سهمیه رایگان و آموزش استفاده.",
  metadataBase: new URL("https://ai.mavykaya.store"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={`${inter.variable} ${notoArabic.variable}`}>
      <body>
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
