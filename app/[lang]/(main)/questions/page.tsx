import QuestionCard from "@/components/questions/cards";
import QuestionsHeader from "@/components/questions/header";
import Button from "@/components/ui/button";
import Pagination from "@/components/ui/pagination";
import Paper from "@/components/ui/paper";
import { MdOutlineCalendarMonth } from "react-icons/md";
import PageClient from "./page-client";
import { useLocale } from "@/i18n";
import serverApi from "@/api/server";

async function getQuestions() {
  return (await serverApi.questions.questionsList()).data
}

export default async function Page(props: any) {
  const locale = useLocale(props.params?.lang);

  // const questions = await getQuestions();

  // console.log(questions.results);

  return (
    <div className="space-y-5 container">
      <QuestionsHeader locale={locale} lang={props.params?.lang} />

      <div className="space-y-3">
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
      </div>

      <PageClient />
    </div>
  );
}
