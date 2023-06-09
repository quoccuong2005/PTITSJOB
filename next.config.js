/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
	env: {
		BASE_URL: process.env.BASE_URL,
		GA: process.env.GA,
	},
	images: {
		domains: ["ais.aisenote.com"],
	},
	reactStrictMode: true,
	swcMinify: true,
});
