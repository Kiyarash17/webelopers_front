import Button from "@/components/ui/button";
import { NAVBARITEMS } from "@/config/navbar-items";
import { useLocale } from "@/i18n";
import { FiLogIn } from "react-icons/fi";

export default function Navbar() {
  const locale = useLocale("fa");

  return (
    <nav className="py-3 shadow">
      <div className="flex justify-between items-center container">
        <h6 className="text-primary">
          <a href="/">{locale?.project?.title}</a>
        </h6>
        <ul className="flex items-center gap-5">
          {NAVBARITEMS.map((val, index) => (
            <li key={index} className="hover:border-b-2 border-secondary">
              <a href={val.href}>{val.title}</a>
            </li>
          ))}
        </ul>
        <Button color="gray">
          {locale?.login?.login}
          <FiLogIn className="text-lg" />
        </Button>
      </div>
    </nav>
  );
}
