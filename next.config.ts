import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	env: {
		PATH_CV: "/LuisEF_CV_En.pdf",
		GITHUB_KEY: "aaaaaa-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"
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'icon.icepanel.io',
				port: '',
				pathname: '/Technology/**',
			},
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				port: '',
				pathname: '/pmndrs/zustand/main/**',
			},
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				port: '',
				pathname: '/LuisEduardoFrias/gats_and_boxes/main/gifs/**',
			},
		],
		formats: ['image/webp'],
		//  unoptimized: true,
	},
};

export default nextConfig;
