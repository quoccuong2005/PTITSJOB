import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// @ts-ignore
import commonEn from '/commons/language/en.json';
// @ts-ignore
import commonVi from '/commons/language/vi.json';

// Initialize i18n with default settings (SSR-safe)
i18n
  .use(initReactI18next)
  .init({
    interpolation: { escapeValue: false },
    lng: 'vi', // Default to Vietnamese
    fallbackLng: 'vi',
    debug: false,
    resources: {
      en: {
        common: commonEn,
      },
      vi: {
        common: commonVi,
      },
    },
    // SSR settings
    react: {
      useSuspense: false, // Prevent SSR issues
    },
  });

export default i18n;
