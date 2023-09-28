import { AiOutlinePhone } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { TbBrandTelegram } from "react-icons/tb";
import Button from "@/components/ui/button";

export const SOCIALMEDIA = [
  {
    icon: <TbBrandTelegram className="text-xl" />,
    value: (
      <Button href="/" className="dir-ltr !p-0">
        BlueBerry
      </Button>
    ),
  },
  {
    icon: <AiOutlinePhone className="text-xl" />,
    value: (
      <Button href="tel:09335444972" className="!p-0">
        09335444972
      </Button>
    ),
  },
  {
    icon: <CiMail className="text-xl" />,
    value: (
      <Button href="mailto:hi@blueberry.com" className="!p-0">
        blueberry.info@gmail.com
      </Button>
    ),
  },
];
