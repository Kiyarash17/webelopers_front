import { Metadata } from "next";
import Paper from "@/components/ui/paper";
import { SupportedLocaleType, useLocale } from "@/i18n";

export const metadata: Metadata = {
  title: "درباره ما",
};

export default function Page(props: any) {
  const locale = useLocale(props.params?.lang);

  return (
    <div className="h-full w-full space-y-7 pt-9">
      <div className="space-y-2 bg-primary py-5">
        <h1 className="text-center text-xl text-white md:text-4xl">
          {locale.about?.title}
        </h1>
        <div className="mx-auto h-0.5 w-2/12 bg-secondary md:w-1/12"></div>
      </div>
      <Paper className="container relative space-y-8" size="lg">
        <div className="space-y-5 text-justify">
          <p className="leading-7 text-gray-600">
            {locale?.about?.description}
          </p>
        </div>

        <div className="flex items-center justify-center rounded-lg bg-secondary p-4 text-white md:p-7">
          <h5>{locale?.about?.secondTitle}</h5>
        </div>
        <ul className="list-disc text-gray-600 container text-sm md:text-base space-y-2 pr-3">
          {locale?.about?.bulletPoints?.map((val, index) => (
            <li key={index}>{val}</li>
          ))}
        </ul>
        <p className="text-justify leading-7 text-gray-700"></p>
      </Paper>
    </div>
  );
}
