import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/AuthContext";
import i18n from "../../i18n";
import ScrollTopButton from "./components/ScrollTopButton";
import Footer from "./footer";
import Header from "./header";
import dynamic from "next/dynamic";
const HeaderSinhVien = dynamic(() => import("./HeaderSinhVien"), { ssr: false });
const HeaderDoanhNghiep = dynamic(() => import("./HeaderDoanhNghiep"), { ssr: false });
import Head from "next/head";
import Ami from "../../components/Ami";

const CommonLayout = ({ children }: any) => {
  const [language, setLanguage] = useState<string>();
  const [mounted, setMounted] = useState(false);
  const { setLangCode } = useContext(AuthContext);

  const langMap: Record<string, string> = {
    "vi-VN": "vi",
    "en-US": "en",
    "es-ES": "es",
    "zh-CN": "zh",
    "zh-TW": "zh-TW",
    "lo-LA": "lo",
    "km-KH": "km",
  };

  const reverseLangMap: Record<string, string> = Object.fromEntries(
    Object.entries(langMap).map(([k, v]) => [v, k])
  );

  useEffect(() => {
    setMounted(true);
    const storedLangCode = localStorage.getItem("langCode") || "vi-VN";
    const mappedLang = langMap[storedLangCode] || "vi";

    setLanguage(mappedLang);
    i18n.changeLanguage(mappedLang);
    setLangCode(storedLangCode);
  }, [setLangCode]);

  const handleChangeLanguage = (lang: string) => {
    const langCodeToStore = reverseLangMap[lang] || "vi-VN";

    i18n.changeLanguage(lang);
    setLanguage(lang);

    if (mounted) {
      localStorage.setItem("langCode", langCodeToStore);
    }
    setLangCode(langCodeToStore);
  };


  // Lấy vai trò người dùng từ localStorage ('candidate' hoặc 'recruiter') và cập nhật khi role thay đổi hoặc chuyển trang
  const [userRole, setUserRole] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const updateRole = () => {
      const role = typeof window !== "undefined" ? localStorage.getItem("userRole") : null;
      setUserRole(role);
      if (!role && router.pathname !== "/Checkuser/checkuser") {
        router.replace("/Checkuser/checkuser");
      }
    };
    updateRole();
    window.addEventListener("storage", updateRole);
    router.events?.on("routeChangeComplete", updateRole);
    return () => {
      window.removeEventListener("storage", updateRole);
      router.events?.off("routeChangeComplete", updateRole);
    };
  }, [router]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico"></link>
        <title>Đại học số</title>
      </Head>
      <div className='flex flex-col min-h-screen bg-[#FFFFFF]'>
        {/* Hiển thị header theo vai trò */}
        {userRole === "candidate" ? (
          <HeaderSinhVien language={language} handleChangeLanguage={handleChangeLanguage} />
        ) : userRole === "recruiter" ? (
          <HeaderDoanhNghiep language={language} handleChangeLanguage={handleChangeLanguage} />
        ) : (
          <></>
        )}
        <div className='flex-auto overflow-hidden bg-[#F7F7F7]'>{children}</div>
        <Footer />
        <ScrollTopButton />
      </div>
      <Ami />
    </>
  );
};
export default React.memo(CommonLayout);
4