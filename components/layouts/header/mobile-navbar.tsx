"use client";

import Button from "@/components/ui/button";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { TbMenu2 } from "react-icons/tb";
import { useLocale } from "@/i18n";
import { NAVBARITEMS } from "@/config/navbar-items";

export default function MobileNavbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const locale = useLocale("fa");

  return (
    <nav className="relative py-2 md:hidden shadow mb-3">
      <div className="container flex items-center justify-between">
        <Button className="!p-0" onClick={() => setOpenMenu(!openMenu)}>
          <TbMenu2 className="text-2xl" />
        </Button>
        <div className="flex items-center gap-3">
          <h6 className="text-primary">
            <a href="/">{locale?.project?.title}</a>
          </h6>
        </div>
      </div>
      <div
        className={`${
          openMenu ? "max-w-full" : "w-0 max-w-0 overflow-hidden"
        } fixed inset-y-0 z-50 flex h-screen w-full space-y-5 bg-black bg-opacity-60 transition-all duration-500`}
      >
        <div className="ml-auto h-screen w-5/6 overflow-auto bg-[#f9f9f9] pt-5">
          <div className="mb-5 mr-auto flex w-7/12 items-start justify-between">
            <h6 className="text-primary">
              <a href="/">{locale?.project?.title}</a>
            </h6>
            <button onClick={() => setOpenMenu(false)} className="pl-3">
              <AiOutlineCloseCircle className="text-2xl" />
            </button>
          </div>
          <ul className="space-y-3">
            {NAVBARITEMS.map((val: any, index: any) => {
              return (
                <li
                  key={index}
                  className={`${
                    openMenu
                      ? "opacity-100 transition-all delay-75 duration-300"
                      : "opacity-0"
                  }`}
                >
                  <a href={val.href!}>{val.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className="h-screen w-1/6"
          onClick={() => {
            setOpenMenu(false);
          }}
        ></div>
      </div>
    </nav>
  );
}
