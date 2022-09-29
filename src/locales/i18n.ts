import dayjs from 'dayjs';
import i18n, { Resource, TFunction } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { LocalesEnum } from '@/enums';
import { TRANSLATIONS_EN, TRANSLATIONS_VI } from '@/locales/index';

const resources: Resource = {
  en: { translation: TRANSLATIONS_EN },
  vi: { translation: TRANSLATIONS_VI },
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init({
    fallbackLng: LocalesEnum.En,
    resources,
    interpolation: {
      format: function (value, format: string | undefined) {
        if (value instanceof Date) return dayjs(value).format(format);
        return value;
      },
    },
  })
  .then((r: TFunction) => r);

export default i18n;
