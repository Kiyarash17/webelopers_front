import QuestionCard from "@/components/questions/cards";
import QuestionsHeader from "@/components/questions/header";
import Button from "@/components/ui/button";
import Paper from "@/components/ui/paper";
import { MdOutlineCalendarMonth } from "react-icons/md";

const filterItems = [
  {
    title: "",
  },
];

export default function Page() {
  return (
    <div className="space-y-5">
      <QuestionsHeader />

      <div className="space-y-3">
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </div>
    </div>
  );
}
