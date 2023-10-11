import Header from "@/components/layouts/header";
import EN from "@/i18n/en";
import { Metadata } from "next";
import { SupportedLocaleType } from "@/i18n";

export const metadata: Metadata = {
  title: "بلوبری",
  description: "بزرگترین وبسایت پرسش و پاسخ",
};

type Props = {
  params: {
    lang: SupportedLocaleType;
  };
};

export default function Home(props: any) {
  return (
    <main className="">
      <section>
        <Header lang={props.params?.lang} />
      </section>
    </main>
  );
}
