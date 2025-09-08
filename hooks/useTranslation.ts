import { useTranslation as useReactI18next } from 'react-i18next';

export const useTranslation = (namespace: string = 'common') => {
  const { t, i18n } = useReactI18next(namespace);
  
  
  
  return [t, i18n] as const;
};

export default useTranslation;
