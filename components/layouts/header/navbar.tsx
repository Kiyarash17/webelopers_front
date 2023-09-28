import Button from "@/components/ui/button";
import { NAVBARITEMS } from "@/config/navbar-items";
import { useLocale } from "@/i18n";
import Link from "next/link";
import { FiLogIn } from "react-icons/fi";
import MobileNavbar from "./mobile-navbar";

export default function Navbar() {
  const locale = useLocale("fa");

  return (
    <>
      <nav className="hidden md:block py-3 shadow">
        <div className="flex justify-between items-center container">
          <h6 className="text-primary">
            <a href="/">{locale?.project?.title}</a>
          </h6>
          <ul className="flex items-center gap-5">
            {NAVBARITEMS.map((val, index) => (
              <li key={index} className="hover:border-b-2 border-secondary">
                <Link href={val.href} lang="fa">
                  {val.title}
                </Link>
              </li>
            ))}
          </ul>
          <Button color="gray">
            {locale?.login?.login}
            <FiLogIn className="text-lg" />
          </Button>
        </div>
      </nav>
      <MobileNavbar />
    </>
  );
}
