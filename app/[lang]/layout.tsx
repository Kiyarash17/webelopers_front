import "@/styles/inter.css";
import "@/styles/vazirmatn.css";
import "@/styles/globals.css";
import { SupportedLocaleType } from "@/i18n";

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: SupportedLocaleType };
}) {
  return (
    <html lang={lang} className={`${lang == "fa" ? "dir-rtl" : "dir-ltr"}`}>
      <body>{children}</body>
    </html>
  );
}
