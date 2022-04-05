import i18n from 'i18next';
import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import vi from './vi.json';

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};
export const translations = {};

// export const convertLanguageJsonToObject = (obj, dict, current) => {
//   Object.keys(obj).forEach(key => {
//     const currentLookupKey = current ? `${current}.${key}` : key;
//     if (typeof obj[key] === 'object') {
//       dict[key] = {};
//       convertLanguageJsonToObject(obj[key], dict[key], currentLookupKey);
//     } else {
//       dict[key] = currentLookupKey;
//     }
//   });
// };

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'vi',
    debug: false,
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    }
  });

export default i18n;