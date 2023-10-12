import Button from "@/components/ui/button";
import { MdOutlineCalendarMonth } from "react-icons/md";

export default function QuestionCard() {
  return (
    <div className=" space-y-2 rounded-3xl shadow-sm px-5 py-3 bg-white">
      <div className="flex justify-between items-center">
        <h6 className="text-gray-500 text-base md:text-lg">عنوان</h6>
        <div>
          <Button
            color="primary"
            className="!rounded-3xl !text-sm"
            href={`/questions/${12}`}
          >
            مشاهده
          </Button>
        </div>
      </div>
      <p>توضیحات</p>
      <div className="h-[1px] w-full bg-gray-300"></div>
      <div className="flex items-center justify-between">
        <p className="text-gray-400 text-xs sm:text-sm md:text-base">
          تست
        </p>
        <div className="w-[1px] bg-gray-300 h-full"></div>
        <p className="text-primary text-xs sm:text-sm md:text-base">
          تست
        </p>
        <div className="w-[1px] bg-gray-300 h-full"></div>
        <div className="flex items-center gap-2">
          <p className="text-gray-400 text-xs sm:text-sm md:text-base">
            1402/07/26
          </p>
          <MdOutlineCalendarMonth className="text-primary text-base md:text-xl" />
        </div>
      </div>
    </div>
  );
}
