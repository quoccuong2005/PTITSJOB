import i18next from "i18next";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function AISSelectLang() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState<string>('vi');
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const savedLang = localStorage.getItem("langCode") || "vi";
    const mappedLang = savedLang === 'vi-VN' ? 'vi' : savedLang;
    setLang(mappedLang);
    i18next.changeLanguage(mappedLang);
  }, []);

  const changeLanguage = (newLang: string) => {
    setLang(newLang);
    i18next.changeLanguage(newLang);
    
    const langCodeToStore = newLang === 'vi' ? 'vi-VN' : newLang;
    localStorage.setItem("langCode", langCodeToStore);
    setOpen(false);
  };

  
  if (!mounted) {
    return (
      <div className="flex cursor-pointer">
        <img
          src="/images/vi.png"
          alt="Language"
          className="w-10 h-10"
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="flex cursor-pointer" onClick={() => setOpen(!open)}>
        <img
          src={lang === "vi" ? "/images/vi.png" : "/images/us.png"}
          alt={lang === "vi" ? "Vietnamese flag" : "English flag"}
          className="w-10 h-10"
        />
      </div>

      {open && (
        <div className="absolute bg-white shadow-md mt-1 z-50">
          <div
            className="p-2 cursor-pointer flex items-center hover:bg-gray-100"
            onClick={() => changeLanguage("vi")}
          >
            <img src="/images/vi.png" alt="Vietnamese flag" className="w-8 h-8 mr-2" />
            Tiếng Việt
          </div>
          <div
            className="p-2 cursor-pointer flex items-center hover:bg-gray-100"
            onClick={() => changeLanguage("en")}
          >
            <img src="/images/us.png" alt="English flag" className="w-8 h-8 mr-2" />
            English
          </div>
        </div>
      )}
    </div>
  );
}