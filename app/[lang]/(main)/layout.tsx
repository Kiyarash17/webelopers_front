import Navbar from "@/components/layouts/header/navbar";
import { SupportedLocaleType } from "@/i18n";

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: SupportedLocaleType };
}) {
  return (
    <html lang={lang}>
      <body>
        <header>
          <Navbar lang={lang} />
        </header>

        {children}
      </body>
    </html>
  );
}
