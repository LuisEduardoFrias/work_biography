import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'user-images.githubusercontent.com',
				port: '',
				pathname: '/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg',
			},
			{
				protocol: 'https',
				hostname: 'icon.icepanel.io',
				port: '',
				pathname: '/Technology/**',
			},
			{
				protocol: 'https',
				hostname: 'images.icon-icons.com',
				port: '',
				pathname: '/2389/PNG/512/**',
			},
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com/',
				port: '',
				pathname: '/CSS-Next/logo.css/48f24dccd4e169118d17bab998c3d276e95167df/css.svg',
			},
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				port: '',
				pathname: '/github/explore/5cc0a03a302ec862c4aeac2a22a513ae31c35432/topics/astro/astro.png',
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