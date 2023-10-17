"use client";

import clientApi from "@/api/client";
import Input from "@/components/ui/input";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  locale: any;
};

export default function PageClient(props: Props) {
  const [query, setQuery] = useState({
    username: undefined as unknown as string,
    password: undefined as unknown as string,
    email: undefined as unknown as string,
    first_name: undefined as unknown as string,
    last_name: undefined as unknown as string,
  });

  const onSubmitClicked = (e: any) => {
    e.preventdefault();
    clientApi.auth
      .authRegisterCreate(query, {})
      .then((resp) => {
        console.log(resp);
        toast.success(props.locale?.register?.message, {
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
  };

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4 text-center">
        {props?.locale?.register?.title}
      </h1>
      <form className="flex flex-col justify-center items-center gap-5 container-sm">
        <Input
          id="username"
          label={props?.locale?.register?.username}
          fullWidth
          onChange={(e: any) =>
            setQuery({ ...query, username: e.target?.value })
          }
        />
        <Input
          id="password"
          label={props?.locale?.register?.password}
          fullWidth
          onChange={(e: any) =>
            setQuery({ ...query, password: e.target?.value })
          }
        />
        <Input
          id="email"
          label={props?.locale?.register?.email}
          fullWidth
          onChange={(e: any) => setQuery({ ...query, email: e.target?.value })}
        />
        <Input
          id="first_name"
          label={props?.locale?.register?.first_name}
          fullWidth
          onChange={(e: any) =>
            setQuery({ ...query, first_name: e.target?.value })
          }
        />
        <Input
          id="last_name"
          label={props?.locale?.register?.last_name}
          fullWidth
          onChange={(e: any) =>
            setQuery({ ...query, last_name: e.target?.value })
          }
        />

        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-md py-2 px-4 w-full"
          onSubmit={onSubmitClicked}
        >
          {props?.locale?.register?.title}
        </button>
      </form>
      <div className="mt-5 text-primary text-center">
        <a
          href={props?.locale?.register?.loginHref}
          className="hover:underline"
        >
          {props?.locale?.register?.login}
        </a>
      </div>
    </>
  );
}
