import { useLocale } from "@/i18n";
import PageClient from "./page-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function Page(props: any) {
  const locale = useLocale(props.params?.lang);

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen max-h-screen overflow-hidden">
      <div className="flex-1 h-screen hidden md:block">
        <img
          src="/img/login.jpg"
          alt="Login image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-8 flex-1">
        <PageClient locale={locale} />
      </div>
    </div>
  );
}
