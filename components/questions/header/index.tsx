import Button from "@/components/ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";

type Props = {
  locale: any;
  lang: any;
};

export default function QuestionsHeader(props: Props) {
  return (
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
      <Button className="text-primary border-2 border-primary hover:bg-primary hover:text-white">
        <AiOutlinePlus className="text-lg" />
        {props.locale?.questions?.addQuestion}
      </Button>
    </div>
  );
}
