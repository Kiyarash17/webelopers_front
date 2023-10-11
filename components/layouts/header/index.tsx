import Button from "@/components/ui/button";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { SupportedLocaleType, useLocale } from "@/i18n";
import Image from "next/image";

type Props = {
  lang: SupportedLocaleType;
};

export default function Header(props: Props) {
  const locale = useLocale(props?.lang);

  return (
    <div className="flex flex-col-reverse md:flex-row md:max-h-[89vh]">
      <div className="flex-1">
        <img
          src="/img/header.jpg"
          alt="person is thinking"
          className="object-contain w-full h-full mix-blend-multiply"
        />
        <Image src="/img/header.jpg" width={200} height={200} alt="test" />
      </div>
      <div className="flex-1 flex flex-col justify-center gap-5 container">
        <h2 className="font-extrabold text-gray-700">
          {locale?.header?.title}
        </h2>
        <p className="text-gray-400">{locale?.header?.description}</p>
        <Button color="primary" className="w-fit px-8" href="/questions">
          {locale?.header?.button}
          <HiMagnifyingGlass />
        </Button>
      </div>
    </div>
  );
}
