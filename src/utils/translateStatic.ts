import { Languages } from "@/enums/languages";
import { Locale } from "@/types/locale";
import { strings as enStrings } from "@/locales/en/strings";
import { strings as arStrings } from "@/locales/ar/strings";

export const translateStaticString = (key: string, locale: Locale): string =>
  locale === Languages.ENGLISH ? enStrings[key] : arStrings[key];
