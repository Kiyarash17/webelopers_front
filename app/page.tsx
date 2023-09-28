import Header from "@/components/layouts/header";
import EN from "@/i18n/en";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "بلوبری",
  description: "بزرگترین وبسایت پرسش و پاسخ",
};

export default function Home(props: any) {
  return (
    <main className="">
      <section>
        <Header />
      </section>
    </main>
  );
}
