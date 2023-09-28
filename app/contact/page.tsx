import Paper from "@/components/ui/paper";
import { SOCIALMEDIA } from "@/config/social-media";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تماس با ما",
};

export default function Page() {
  return (
    <div className="h-full w-full space-y-7 bg-[url('/img/pages-bg.png')] bg-contain bg-no-repeat pt-9">
      <div className="space-y-2 bg-primary py-5">
        <h1 className="text-center text-xl text-white md:text-4xl">
          ارتباط با ما
        </h1>
      </div>
      <Paper className="container" size="lg">
        <div className="flex w-full flex-col gap-8 md:flex-row md:gap-0">
          <div className="flex-1 space-y-8 container-sm">
            <img src="/img/contact.jpg" alt="people's image" className="mix-blend-multiply w-2/3 mx-auto" />
          </div>
          <ul className="flex-1 flex flex-col justify-center items-start gap-5 container-md">
            {SOCIALMEDIA.map((val: any, index: number) => (
              <li key={index} className="flex items-center gap-3">
                <span className="rounded-full border border-secondary p-3 text-2xl text-secondary">
                  {val.icon}
                </span>
                {val.value}
              </li>
            ))}
          </ul>
        </div>
      </Paper>
    </div>
  );
}
