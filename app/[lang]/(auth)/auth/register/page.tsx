import Input from "@/components/ui/input";
import { useLocale } from "@/i18n";
import { Metadata } from "next";
import PageClient from "./page-client";

export const metadata: Metadata = {
  title: "Register",
};

export default function Page(props: any) {
  const locale = useLocale(props.params?.lang);

  return (
    <div className="bg-gray-100 flex justify-center items-stretch min-h-screen overflow-hidden">
      <div className="flex-1 min-h-screen h-auto hidden md:block bg-white">
        <img
          src="/img/login.jpg"
          alt="Login image"
          className="object-contain w-full h-full"
        />
      </div>
      <div className="p-8 flex-1 overflow-auto min-h-screen">
        <PageClient locale={locale} />
      </div>
    </div>
  );
}
