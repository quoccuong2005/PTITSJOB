import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// @ts-ignore
import commonEn from '/commons/language/en.json';
// @ts-ignore
import commonVi from '/commons/language/vi.json';

const ISSERVER = typeof window === 'undefined';

(async () => {
  let langCode = 'vi-VN';
  if (!ISSERVER) {
    langCode = localStorage.getItem('langCode') || 'vi-VN';
  }

  // Map vi-VN to vi for i18n
  const mappedLangCode = langCode === 'vi-VN' ? 'vi' : langCode;

  i18n
    .use(initReactI18next)
    .init({
      interpolation: { escapeValue: false },
      lng: mappedLangCode,
      fallbackLng: 'vi',
      debug: true, // Enable debug to see what's happening
      resources: {
        en: {
          common: commonEn.common,
        },
        vi: {
          common: commonVi.common,
        },
      },
    })
    .catch((e) => {
      console.log(e);
    });
})();

export default i18n;
