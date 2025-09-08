import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// @ts-ignore
import commonEn from "/commons/language/en.json";
// @ts-ignore
import commonVi from "/commons/language/vi.json";
// @ts-ignore
import commonEs from "/commons/language/es.json";
// @ts-ignore
import commonZh from "/commons/language/zh.json";
// @ts-ignore
import commonLo from "/commons/language/lo.json";
// @ts-ignore
import commonKm from "/commons/language/km.json";

// Initialize i18n with default settings (SSR-safe)
i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "vi", // Default to Vietnamese
  fallbackLng: "vi",
  debug: false,
  resources: {
    en: { common: commonEn },
    vi: { common: commonVi },
    es: { common: commonEs },
    zh: { common: commonZh },
    lo: { common: commonLo },
    km: { common: commonKm },
  },
  // SSR settings
  react: {
    useSuspense: false, // Prevent SSR issues
  },
});

export default i18n;
