import { useLocale } from "@/i18n";
import Button from "../ui/button";

type Props = {
  lang: any;
};

export default function StaticSection(props: Props) {
  const locale = useLocale(props.lang);

  return (
    <section className="pt-20 pb-16">
      <div className="container space-y-8">
        <h2 className="text-gray-500 text-base md:text-xl font-medium text-center mb-5">
          {locale?.statstitle}
        </h2>

        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col justify-center items-center gap-2">
            <h3 className="text-primary text-2xl md:text-4xl font-extrabold dir-ltr">
              +1000
            </h3>
            <p className="text-gray-600">{locale?.stats[0]}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 border-x border-gray-400 px-5 mx-5">
            <h3 className="text-primary text-2xl md:text-4xl font-extrabold dir-ltr">
              +7000
            </h3>
            <p className="text-gray-600">{locale?.stats[1]}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <h3 className="text-primary text-2xl md:text-4xl font-extrabold dir-ltr">
              +10000
            </h3>
            <p className="text-gray-600">{locale?.stats[2]}</p>
          </div>
        </div>
        <Button
          color="primary"
          className="mx-auto w-fit"
          href={locale?.login?.loginBtn}
        >
          {locale?.login?.title}
        </Button>
      </div>
    </section>
  );
}
