import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import i18n from "../../i18n";
import ScrollTopButton from "./components/ScrollTopButton";
import Footer from "./footer";
import Header from "./header";
import Head from "next/head";

const CommonLayout = ({ children }: any) => {
	const [language, setLanguage] = useState<string>("");
	const { setLangCode } = useContext(AuthContext);

	useEffect(() => {
		(async () => {
			const langCode = localStorage.getItem("langCode") || "vi-VN";
			const mappedLang = langCode === 'vi-VN' ? 'vi' : langCode;
			
			setLanguage(langCode);
			i18n.changeLanguage(mappedLang);
		})();
	}, []);

	const handleChangeLanguage = (lang: string) => {
		// Map vi-VN to vi for i18n compatibility
		const mappedLang = lang === 'vi-VN' ? 'vi' : lang;
		
		i18n.changeLanguage(mappedLang);
		setLanguage(lang);
		localStorage.setItem("langCode", lang);
		setLangCode(lang);
	};

	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
				<link rel="icon" href="/favicon.ico"></link>
				<title>Quản lý khoa học</title>
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
