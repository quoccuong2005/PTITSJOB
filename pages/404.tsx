import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const NotFound: NextPage = () => {
	const [common] = useTranslation("common");

	return (
		<>
			<Head>
				<title>{"Không tìm thấy trang" + common("common.suffix-title")}</title>
				<meta property='og:title' content={"Không tìm thấy trang" + common("common.suffix-title") || ""} />
			</Head>

			<div className='clearfix' />
			<div className='py-90'>
				<div className='container'>
					<div className='row error-row'>
						<div className='col-lg-6 col-md-12'>
							<div className='twm-error-image'>
								<Image src='/images/error-404.svg' alt='#' width={200} height={200} />
							</div>
						</div>

						<div className='col-lg-6 col-md-12'>
							<div className='twm-error-content'>
								<h4 className='twm-error-title2 site-text-primary'>Không tìm thấy!</h4>
								<p>
									Rất tiếc, trang web bạn đang truy cập không tồn tại hoặc tạm thời không khả dụng. Vui lòng thử lại
									sau.
								</p>
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

export default NotFound;
