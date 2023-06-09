import type { NextPage } from "next";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import LoginForm from "../components/Account/LoginForm";
import { useAuth } from "../context/AuthContext";

const Login: NextPage = () => {
	const [common] = useTranslation("common");
	const { setShowAuthModal: setShowModal } = useAuth();

	return (
		<>
			<Head>
				<title>{"Đăng nhập" + common("common.suffix-title")}</title>
				<meta property='og:title' content={"Đăng nhập" + common("common.suffix-title") || ""} />
			</Head>

			<div className='section-full p-t90  p-b90 site-bg-white bg-cover twm-ac-fresher-wrap'>
				<div className='container'>
					<div className='row d-flex justify-content-center'>
						<div className='col-lg-6 col-md-12'>
							<div className='twm-sign-up'>
								<LoginForm setShowModal={setShowModal} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
