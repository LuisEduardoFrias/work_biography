import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				primary: "var(--primary)",
				second: "var(--second)",
				border: "var(--border)",
				color: "var(--color)",
			},
			height: {
				"book-h": "695px",
			},
			animation: {
				"meteor-effect": "meteor 50s 0s linear infinite",
			},
			keyframes: {
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
						opacity: "0",
					},
				},
			},
		},
	},
	plugins: [],
} satisfies Config;
