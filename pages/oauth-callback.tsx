import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const OAuthCallback: NextPage = () => {
	const [common] = useTranslation("common");

	return (
		<>
			<Head>
				<title>{"Đang chuyển hướng" + common("common.suffix-title")}</title>
				<meta property='og:title' content={"Đang chuyển hướng" + common("common.suffix-title") || ""} />
			</Head>

			<div className='clearfix' />
			<div className='py-90'>
				<div className='container'>
					<div className='row error-row'>
						<div className='col-xs-12'>
							<div className='twm-error-content'>
								<h4 className='twm-error-title2 site-text-primary'>Đang chuyển hướng!</h4>

								<Link href='/' className='btn btn-primary'>
									Về trang chủ
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default OAuthCallback;
