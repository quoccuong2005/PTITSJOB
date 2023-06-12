import i18n from 'i18next';
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

  i18n
    .init({
      interpolation: { escapeValue: false },
      lng: langCode,
      resources: {
        en: {
          common: commonEn,
        },
        vi: {
          common: commonVi,
        },
      },
    })
    .catch((e) => {
      console.log(e);
    });
})();

export default i18n;
