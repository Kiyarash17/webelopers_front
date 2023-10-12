"use client";

import Button from "@/components/ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";
import AddQuestionModal from "../modals/add";
import { useState } from "react";

type Props = {
  locale: any;
  lang: any;
};

export default function QuestionsHeader(props: Props) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center w-1/3">
          <input
            type="text"
            className="bg-gray py-2 rounded-lg px-4 w-full focus:outline-none"
            placeholder={props.locale?.questions?.search}
          />
          <HiMagnifyingGlass
            className={`text-2xl ${
              props.lang == "en" ? "-ml-8" : "-mr-8"
            } text-gray-700`}
          />
        </div>
        <Button
          className="text-primary border-2 border-primary hover:bg-primary hover:text-white"
          onClick={() => setOpen(!open)}
        >
          <AiOutlinePlus className="text-lg" />
          {props.locale?.questions?.addQuestion}
        </Button>
      </div>
      <AddQuestionModal open={open} setOpen={setOpen} locale={props.locale} />
    </>
  );
}
