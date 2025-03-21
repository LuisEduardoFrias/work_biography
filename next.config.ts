import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
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
				pathname: '/pmndrs/zustand/**',
			},
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				port: '',
				pathname: '/LuisEduardoFrias/cats_and_boxes/main/gifs/**',
			},
		],
		formats: ['image/webp'],
		//  unoptimized: true,
	},
};

module.exports = nextConfig;