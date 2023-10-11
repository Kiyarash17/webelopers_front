import Button from "@/components/ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function QuestionsHeader() {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center w-1/3">
        <input
          type="text"
          className="bg-gray py-2 rounded-lg px-4 w-full focus:outline-none"
          placeholder="جستجو کنید.."
        />
        <HiMagnifyingGlass className="text-2xl -mr-8 text-gray-700" />
      </div>
      <Button className="text-primary border-2 border-primary hover:bg-primary hover:text-white">
        <AiOutlinePlus />
        افزودن سوال جدید
      </Button>
    </div>
  );
}
