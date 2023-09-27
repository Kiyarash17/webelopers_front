import { useLocale } from "@/i18n";

export default function Page({ params: { lang } }: any) {
  console.log("hi");
  const locale = useLocale(lang);

  return (
    <>
      <p>{locale.project.title}</p>

      <h6>hii</h6>
    </>
  );
}
