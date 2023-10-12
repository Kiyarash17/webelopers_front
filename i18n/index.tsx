import EN from "./en";
import FA from "./fa";

const i18n = {
  en: EN,
  fa: FA,
};
const SupportedLocales = ["en", "fa"];
export type SupportedLocaleType = "en" | "fa";
function useLocale(lang: SupportedLocaleType) {
  return i18n[lang];
}

export { useLocale, SupportedLocales };
