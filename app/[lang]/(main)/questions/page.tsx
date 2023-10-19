import PageClient from "./page-client";
import { useLocale } from "@/i18n";

export default async function Page(props: any) {
  const locale = useLocale(props.params?.lang);

  return <PageClient lang={props.params?.lang} locale={locale} />;
}
