import "./globals.css";
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
    <html lang="fa" dir="rtl">
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
