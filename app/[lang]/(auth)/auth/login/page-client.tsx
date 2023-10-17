"use client";

import clientApi from "@/api/client";
import Input from "@/components/ui/input";
import { useState } from "react";

type Props = {
  locale: any;
};

export default function PageClient(props: Props) {
  const [query, setQuery] = useState({
    username: undefined as unknown as string,
    password: undefined as unknown as string,
  });

  const onSubmitClicked = (e: any) => {
    e.preventdefault();
    clientApi.auth.authLoginCreate(query, {}).then((resp) => {
      console.log(resp);
    });
  };

  return (
    <>
      <h1 className="text-2xl font-semibold mb-4 text-center">
        {props?.locale?.login?.title}
      </h1>
      <form
        className="flex flex-col justify-center items-center gap-5 container-sm"
        onSubmit={onSubmitClicked}
      >
        <Input
          id="username"
          label={props?.locale?.login?.username}
          fullWidth
          onChange={(e: any) =>
            setQuery({ ...query, username: e.target?.value })
          }
        />
        <Input
          id="password"
          label={props?.locale?.login?.password}
          fullWidth
          onChange={(e: any) =>
            setQuery({ ...query, password: e.target?.value })
          }
        />

        <button
          type="submit"
          className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-md py-2 px-4 w-full"
        >
          {props?.locale?.login?.title}
        </button>
      </form>
      <div className="mt-5 text-primary text-center">
        <a
          href={props?.locale?.login?.registerHref}
          className="hover:underline"
        >
          {props?.locale?.login?.signUp}
        </a>
      </div>
    </>
  );
}
