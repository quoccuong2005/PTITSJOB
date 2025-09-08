import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export const useCommonTranslation = () => {
  const [isClient, setIsClient] = useState(false);
  const { t, ready } = useTranslation('common');
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const commonT = (key: string, options?: any): string => {
    if (!isClient || !ready) {
      return key; 
    }
    return t(`common.${key}`, options) as unknown as string;
  };
  
  return [commonT] as const;
};

export const useNamespaceTranslation = (namespace: string) => {
  const [isClient, setIsClient] = useState(false);
  const { t, ready } = useTranslation('common');
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const namespaceT = (key: string, options?: any): string => {
    if (!isClient || !ready) {
      return key; 
    }
    return t(`${namespace}.${key}`, options) as unknown as string;
  };
  
  return [namespaceT] as const;
};

export const useMenuTranslation = () => {
  return useNamespaceTranslation('menu');
};

export const useDangKyThiTranslation = () => {
  return useNamespaceTranslation('dangKyThi');
};

export default useCommonTranslation;
