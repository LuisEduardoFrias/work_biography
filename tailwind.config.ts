import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			screens: {
				'-md': { 'max': '768px' },
			},
			dropShadow: {
				homero: '0 0 0.75rem var(--theme-1)'
			},
			borderRadius: {
				"border-page-radius": "var(--border-page-radius)",
			},
			backgroundImage: {
				'custom-gradient': 'linear-gradient(0deg, #35353588 0%, #ffffff00 20%, #ffffff00 95%,  #35353588 100%)',
			},
			backgroundSize: {
				'repeating-linear-size': '100% 25px',
			},
			colors: {
				"base": "var(--base)",
				"contrast": "var(--contrast)",
				"transluxed": "var(--transluxed)",

				"font-color": "var(--font-color)",
				"font-color-ctt": "var(--font-color-ctt)",
				"font-color-alt": "var(--font-color-alt)",

				"border-color": "var(--border-color)",
				"border-color-ctt": "var(--border-color-ctt)",
				"border-color-alt": "var(--border-color-alt)",

				"theme-0": "var(--theme-0)",
				"theme-1": "var(--theme-1)",
				"theme-2": "var(--theme-2)",
				"theme-3": "var(--theme-3)",
				"theme-4": "var(--theme-4)",
				"theme-5": "var(--theme-5)",
				"theme-6": "var(--theme-6)",
				"theme-7": "var(--theme-7)",
				"theme-8": "var(--theme-8)",
			},
			height: {
				"book-h": "695px",
			},
			animation: {
				"image-scale-top": "img_scale_top 1s 2s ease forwards",
				"image-scale-bottom": "img_scale_bottom 1s 0s ease forwards",
				"meteor-effect": "meteor 50s 0s linear infinite",
				"points1": "show_point 3s 0.5s linear infinite",
				"points2": "show_point 3s 1.5s linear infinite",
				"points3": "show_point 3s 2.5s linear infinite",
				"move-loading": "move_loading 3s 0s linear infinite",
			},
			keyframes: {
				img_scale_top: {
					"0%": {
						transform: "scale(0)"
					},
					"100%": {
						transform: "scale(1)"
					}
				},
				img_scale_bottom: {
					"100%": {
						transform: "scale(0)",
						display: 'none'
					}
				},
				meteor: {
					"0%": {
						transform: "rotate(215deg) translateX(0)",
						boxShadow: '0 0 0 1px var(--meteor_n)',
						opacity: "1"
					},
					"50%": {
						transform: "rotate(215deg) translateX(-400px)",
						boxShadow: '0 0 0 1px var(--meteor_n)',
						opacity: "1"
					},
					"100%": {
						transform: "rotate(215deg) translateX(-800px)",
						boxShadow: '0 0 0 1px var(--meteor_n)',
						opacity: "0"
					}
				},
				move_loading: {
					"0%": {
						transform: "translateX(0)"
					},
					"50%": {
						transform: "translateX(40px)"
					},
					"100%": {
						transform: "translateX(80px)"
					}
				},
				show_point: {
					"0%": {
						opacity: '1'
					},
					"100%": {
						opacity: '0'
					}
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
