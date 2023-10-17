"use client";

import Button from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useState } from "react";
// import clientApi from "@/api/client";
import { toast } from "react-toastify";
import Input from "@/components/ui/input";
import clientApi from "@/api/client";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  locale: any;
};

export default function AddQuestionModal(props: Props) {
  const [loading, setLoading] = useState<boolean>(false);
  const [query, setQuery] = useState<any>({
    title: undefined as unknown as string,
    deadline: undefined as unknown as string,
    description: undefined as unknown as string,
    questions_fields: undefined as unknown as string,
    tags: undefined as unknown as string,
  });

  const onSubmitClicked = (e: any) => {
    e.preventDefault();
    setLoading(true);

    clientApi.questions
      .questionsCreate(query)
      .then((resp) => {
        toast.success("سوال شما با موفقیت ایجاد شد", {
          position: "bottom-right",
          rtl: true,
        });
      })
      .catch((err) => {
        toast.error("لطفا اتصال خود را به اینترنت برسی کنید", {
          position: "bottom-right",
          rtl: true,
        });
      });

    // باید سواگر را اضافه کنیم و بعد دیتای query را به آن ارسال کنیم تا سوال ثبت شود

    // clientApi.
    //   .then((resp) => {
    //     setLoading(false);

    //     props.setOpen(false);
    //   })
    //   .catch((err: any) => {
    //     toast.error("لطفا اتصال خود را به اینترنت برسی کنید", {
    //                 position: "bottom-right",
    //                 rtl: true,
    //   })
  };

  return (
    <Modal setOpen={props.setOpen} open={props.open}>
      <div className="flex items-center justify-between border-b pb-2">
        <p>{props.locale?.questions?.addQuestion}</p>
        <Button
          className="!p-1"
          onClick={(e) => {
            props.setOpen(false), e.preventDefault();
          }}
        >
          <AiOutlineCloseCircle className="text-xl" />
        </Button>
      </div>
      <form className="space-y-6 pt-3" onSubmit={onSubmitClicked}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <Input
            id="title"
            label="نام مسئله"
            value={query.title}
            onChange={(e: any) => setQuery({ ...query, title: e.target.value })}
          />
          <Input
            id="deadline"
            type="date"
            label="ددلاین پاسخگویی"
            value={query.deadline?.toLocaleString()}
            onChange={(e: any) =>
              setQuery({ ...query, deadline: e.target.value })
            }
          />
          <Input
            id="tags"
            label="تگ مسئله"
            value={query.tags}
            onChange={(e: any) => setQuery({ ...query, tags: e.target.value })}
          />
          <Input
            id="questions_fields"
            label="فیلد سوال(آموزشی و ...)"
            value={query.questions_fields}
            onChange={(e: any) => setQuery({ ...query, questions_fields: e.target.value })}
          />

          <div className="space-y-2 col-span-1 sm:col-span-2 md:col-span-3">
            <label htmlFor="description" className="block text-sm">
              توضیحات(اختیاری)
            </label>
            <textarea
              className="py-1.5 bg-sGray border border-gray-300 text-gray-500 focus:outline-none rounded-lg px-2 w-full focus:border-primary"
              id="description"
              value={query.description}
              onChange={(e) =>
                setQuery({ ...query, description: e.target.value })
              }
            />
          </div>
        </div>

        <Button color="primary" className="!w-20" loading={loading}>
          ثبت
        </Button>
      </form>
    </Modal>
  );
}
