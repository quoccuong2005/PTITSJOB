import i18next from "i18next";
import "moment/locale/vi";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { I18nextProvider } from "react-i18next";
import { ToastContainer } from "react-toastify";
import Loading from "../components/Loading";
import { AuthProvider } from "../context/AuthContext";
import i18n from "../i18n";
import CommonLayout from "../layouts/commonLayout";
// CSS
import "react-toastify/dist/ReactToastify.css";
import "../components/TinyEditor/style.css";
import 'react-loading-skeleton/dist/skeleton.css'
import "../styles/global.scss";
import FlowbiteContext from "../context/FlowbiteContext";
import { useEffect } from "react";
import { googleAnalytics } from "../init-ga";
import "../public/css/animate.css";
function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const currentUrl = process.env.BASE_URL + router.asPath;
	useEffect(()=>{
		// if (typeof window !== 'undefined') {
		// 	const savedLanguage = localStorage.getItem('langCode') || 'vi';
		// 	const mappedLang = savedLanguage === 'vi-VN' ? 'vi' : savedLanguage;
		// 	i18n.changeLanguage(mappedLang);
		// }
		googleAnalytics()
		window.addEventListener('load', () => {
			if ('serviceWorker' in navigator) {
				navigator.serviceWorker.register('/sw.js');
			}
		})
	},[])
	return (
		<FlowbiteContext>
			<Head>
				{/* <!-- Mobile Specific Meta--> */}
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta httpEquiv='X-UA-Compatible' content='ie=edge' />
				<meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
				<meta name='description' content='Nền tảng Đại học số Học viện Công nghệ Bưu Chính Viễn Thông' />
				<meta
					name='keywords'
					content='Cổng học trực tuyến, Đại học số'
				/>
				<meta name='author' content='ICI' />
				<link rel='icon' href='/favicon.ico' />
				<meta name='theme-color' content='#cc0d00' />

				<meta property='og:url' content={currentUrl || process.env.BASE_URL} />
				<meta property='og:type' content='article' />
				<meta
					property='og:description'
					content='Cổng học trực tuyến, Đại học số'
					key='ogdesc'
				/>
				<meta property='og:image' content='/images/PTIT_LOGO.png' key='ogimg' />
			</Head>

			<AuthProvider>
				<I18nextProvider i18n={i18next}>
					<Loading />
					<CommonLayout>
						<Component {...pageProps} />
					</CommonLayout>
				</I18nextProvider>
			</AuthProvider>

			<ToastContainer autoClose={2000} hideProgressBar />
		</FlowbiteContext>
	);
}

export default MyApp;
