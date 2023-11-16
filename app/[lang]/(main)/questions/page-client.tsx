"use client";

import clientApi from "@/api/client";
import QuestionCard from "@/components/questions/cards";
import QuestionsHeader from "@/components/questions/header";
import Button from "@/components/ui/button";
import Pagination from "@/components/ui/pagination";
import { useEffect, useState } from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";

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
        {/* {data?.count > 0 ? ( */}
        <div className="w-full space-y-3">
          {data?.results?.map((val: any) => (
            <QuestionCard data={val} key={val.id} />
          ))}

          {/* These are static data */}

          <div className="w-full space-y-2 rounded-3xl shadow-sm px-5 py-3 bg-white">
            <div className="flex justify-between items-center">
              <h6 className="text-gray-500 text-base md:text-lg">
                چجوری پروژه ی ریکت بسازیم؟
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
            <p>توضیحات</p>
            <div className="h-[1px] w-full bg-gray-300"></div>
            <div className="flex items-center justify-between">
              <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                برنامه نویسی
              </p>
              <div className="w-[1px] bg-gray-300 h-full"></div>
              <p className="text-primary text-xs sm:text-sm md:text-base">
                فرانت اند
              </p>
              <div className="w-[1px] bg-gray-300 h-full"></div>
              <div className="flex items-center gap-2">
                <p className="text-gray-400 text-xs sm:text-sm md:text-base">
                  1402/12/19
                </p>
                <MdOutlineCalendarMonth className="text-primary text-base md:text-xl" />
              </div>
            </div>
          </div>

          {/* Static data finished */}

          <Pagination
            className="pagination-bar mt-10"
            currentPage={query.page}
            pageSize={query.page_size}
            // totalCount={data.count}
            totalCount={100}
            onPageChange={(page: number) => getQuestions({ ...query, page })}
            siblingCount={1}
            loading={loading}
          />
        </div>
        {/* ) : (
          <p className="my-auto">هیچ دیتایی یافت نشد</p>
        )} */}
      </div>
    </div>
  );
}
