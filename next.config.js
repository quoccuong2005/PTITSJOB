/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
	env: {
		BASE_URL: process.env.BASE_URL,
		BASE_URL_IMAGE: process.env.BASE_URL_IMAGE,
		GA: process.env.GA,
	},
	images: {
		domains: ["ais.aisenote.com", "lms.ptit.edu.vn"],
	},
	reactStrictMode: true,
	swcMinify: true,
});
