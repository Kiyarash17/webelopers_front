import Button from "@/components/ui/button";
import { NAVBARITEMS } from "@/config/navbar-items";
import { SupportedLocaleType, useLocale } from "@/i18n";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import MobileNavbar from "./mobile-navbar";

type Props = {
  lang: SupportedLocaleType;
};
export default function Navbar(props: Props) {
  const locale = useLocale(props.lang);

  return (
    <>
      <nav className="hidden md:block py-3 shadow mb-3">
        <div className="flex justify-between items-center container">
          <h6 className="text-primary">
            <a href="/">{locale?.project?.title}</a>
          </h6>
          <ul className="flex items-center gap-5">
            {locale?.navbar?.map((val, index) => (
              <li key={index} className="hover:border-b-2 border-secondary">
                <Link href={`${val.href}`}>{val.title}</Link>
              </li>
            ))}
          </ul>
          <Button color="gray">
            {locale?.login?.title}
            <FiLogIn className="text-lg" />
          </Button>
        </div>
      </nav>
      <MobileNavbar />
    </>
  );
}
