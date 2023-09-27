import EN from "./en";
import FA from "./fa";

const i18n = {
  en: EN,
  fa: FA,
};

export type SupportedLocale = "en" | "fa";

function useLocale(lang: SupportedLocale) {
  return i18n[lang];
}

export { useLocale };
