import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const isDev = import.meta.env.DEV;

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: isDev
        ? '/locales/{{lng}}/{{ns}}.json'
        : '/sound-sniff/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
