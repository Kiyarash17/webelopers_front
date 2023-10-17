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
    <div className="bg-gray-100 flex justify-center items-center h-screen min-h-screen overflow-auto">
      <div className="flex-1 h-screen hidden md:block">
        <img
          src="/img/login.jpg"
          alt="Login image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-8 flex-1 overflow-auto">
        <PageClient locale={locale} />
      </div>
    </div>
  );
}
