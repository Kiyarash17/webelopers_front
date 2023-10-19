"use client";

import clientApi from "@/api/client";
import QuestionCard from "@/components/questions/cards";
import QuestionsHeader from "@/components/questions/header";
import Pagination from "@/components/ui/pagination";
import { useEffect, useState } from "react";

type Props = {
  locale: any;
  lang: any;
};

export default function PageClient(props: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [data, setData] = useState<any>([]);
  const [query, setQuery] = useState({
    page: 1,
    page_size: 12,
    title: searchQuery,
  });

  const getQuestions = (query: any) => {
    clientApi.questions
      .questionsList({})
      .then((resp) => {
        setData(resp.data);
      })
      .catch((err) => {
        getQuestions(query);
      });
  };

  useEffect(() => {
    getQuestions(query);
  }, [searchQuery]);

  return (
    <div className="container space-y-5">
      <QuestionsHeader
        locale={props?.locale}
        lang={props?.lang}
        setSearchQuery={setSearchQuery}
      />

      <div className="flex justify-center items-center">
        {data?.count > 0 ? (
          <div className="space-y-3">
            {data?.results?.map((val: any) => (
              <QuestionCard data={val} key={val.id} />
            ))}
            <Pagination
              className="pagination-bar mt-10"
              currentPage={query.page}
              pageSize={query.page_size}
              totalCount={data.count}
              onPageChange={(page: number) => getQuestions({ ...query, page })}
              siblingCount={1}
              loading={loading}
            />
          </div>
        ) : (
          <p className="my-auto">هیچ دیتایی یافت نشد</p>
        )}
      </div>
    </div>
  );
}
