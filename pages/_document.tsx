import Document, { Head, Main, NextScript, Html, DocumentContext } from "next/document";
import React from "react";
import Script from "next/script";
import { ServerStyleSheet } from "styled-components";

export default class CustomDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					// @ts-ignore
					enhanceApp: (App: JSX.IntrinsicAttributes) => (props: JSX.IntrinsicAttributes) =>
						// @ts-ignore
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html>
				<Head>
					{/* eslint-disable-next-line @next/next/no-sync-scripts */}
					<script src="/js/jquery-2.2.1.min.js"></script>
					{/* eslint-disable-next-line @next/next/no-sync-scripts */}
					<script src="/js/wow.js"></script>
					{/* eslint-disable-next-line @next/next/no-sync-scripts */}
					<script src="/js/script.js"></script>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin={"true"} />
					<link
						href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
						rel='stylesheet'
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com"/>
						<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"}/>
							<link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap"
										rel="stylesheet"/>
					<link rel="preconnect" href="https://fonts.googleapis.com"/>
						<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"}/>
							<link
								href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100;1,200;1,300;1,400;1,500;1,600&display=swap"
								rel="stylesheet"/>
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-LR0C438746"></script>
					<script
						dangerouslySetInnerHTML={{
							__html: `
              window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());

							gtag('config', 'G-LR0C438746');`,
						}}
					></script>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
