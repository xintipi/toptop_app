import dayjs from 'dayjs';
import i18n, { Resource, TFunction } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { LocalesEnum } from '@/enums';

import commonEn from './en/common.json';
import enRules from './en/en_rules.json';
import commonVi from './vi/common.json';
import viRules from './vi/vi_rules.json';

const resources: Resource = {
  en: {
    common: commonEn,
    rules: enRules,
  },
  vi: {
    common: commonVi,
    rules: viRules,
  },
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  .init({
    fallbackLng: LocalesEnum.En,
    // Set default namespace
    defaultNS: 'common',
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
