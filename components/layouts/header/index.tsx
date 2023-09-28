import Button from "@/components/ui/button";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useLocale } from "@/i18n";

export default function Header() {
  const locale = useLocale("fa");

  return (
    <div className="flex flex-col-reverse md:flex-row md:max-h-[89vh]">
      <div className="flex-1">
        <img
          src="/img/header.jpg"
          alt="person is thinking"
          className="object-contain w-full h-full mix-blend-multiply"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center gap-5 container">
        <h2 className="font-extrabold text-gray-700">
          {locale?.header?.title}
        </h2>
        <p className="text-gray-400">{locale?.header?.description}</p>
        <Button color="primary" className="w-fit px-8">
          {locale?.header?.button}
          <HiMagnifyingGlass />
        </Button>
      </div>   
    </div>
  );
}
