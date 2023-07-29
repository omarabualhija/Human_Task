import i18n from 'i18next';
import {initReactI18next, useTranslation} from 'react-i18next';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';

i18n
  .use(RNLanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    supportedLngs: ['en', 'ar'],
    resources: {
      ar: require('./ar.json'),
      en: require('./en.json'),
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;

export function translate(key: string) {
  const {t} = useTranslation();
  return t(key);
}
