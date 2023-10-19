import Button from "@/components/ui/button";
import { MdOutlineCalendarMonth } from "react-icons/md";

type Props = {
  data: {
    id: any;
    tags: any;
    author: any;
    created_at: any;
    updated_at: any;
    title: any;
    description: any;
    image: any;
    deadline: any;
    status: any;
    questions_fields: any;
  };
};

export default function QuestionCard(props: Props) {
  return (
    <div className=" space-y-2 rounded-3xl shadow-sm px-5 py-3 bg-white">
      <div className="flex justify-between items-center">
        <h6 className="text-gray-500 text-base md:text-lg">
          {props?.data?.title}
        </h6>
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
      <p>{props?.data?.description}</p>
      <div className="h-[1px] w-full bg-gray-300"></div>
      <div className="flex items-center justify-between">
        <p className="text-gray-400 text-xs sm:text-sm md:text-base">{props?.data?.tags}</p>
        <div className="w-[1px] bg-gray-300 h-full"></div>
        <p className="text-primary text-xs sm:text-sm md:text-base">{props?.data?.questions_fields}</p>
        <div className="w-[1px] bg-gray-300 h-full"></div>
        <div className="flex items-center gap-2">
          <p className="text-gray-400 text-xs sm:text-sm md:text-base">
            {props?.data?.deadline}
          </p>
          <MdOutlineCalendarMonth className="text-primary text-base md:text-xl" />
        </div>
      </div>
    </div>
  );
}
