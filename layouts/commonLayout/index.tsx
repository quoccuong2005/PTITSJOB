import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import i18n from "../../i18n";
import ScrollTopButton from "./components/ScrollTopButton";
import Footer from "./footer";
import Header from "./header";
import Head from "next/head";

const CommonLayout = ({ children }: any) => {
	const [language, setLanguage] = useState<string>("vi");
	const [mounted, setMounted] = useState(false);
	const { setLangCode } = useContext(AuthContext);

	useEffect(() => {
		setMounted(true);
		const langCode = localStorage.getItem("langCode") || "vi-VN";
		const mappedLang = langCode === 'vi-VN' ? 'vi' : langCode;
		
		
		setLanguage(mappedLang);
		i18n.changeLanguage(mappedLang);
		setLangCode(langCode);
	}, [setLangCode]);

	const handleChangeLanguage = (lang: string) => {
		
		const langCodeToStore = lang === 'vi' ? 'vi-VN' : lang;
		
		i18n.changeLanguage(lang);
		setLanguage(lang);
		if (mounted) {
			localStorage.setItem("langCode", langCodeToStore);
		}
		setLangCode(langCodeToStore);
	};

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<link rel="icon" href="/favicon.ico"></link>
				<title>Cổng học trực tuyến</title>
			</Head>
			<div className='flex flex-col min-h-screen bg-[#FFFFFF]'>
				<Header language={language} handleChangeLanguage={handleChangeLanguage} />
				<div className='flex-auto overflow-hidden'>{children}</div>
				<Footer />
				<ScrollTopButton />
			</div>
		</>

	);
};
export default React.memo(CommonLayout);
4