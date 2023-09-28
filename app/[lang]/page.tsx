import { useLocale } from "@/i18n";

export default function Page({ params: { lang } }: any) {
  const locale = useLocale(lang);
  console.log(locale);

  return (
    <>
      <p>{locale?.project?.title}</p>

    </>
  );
}
