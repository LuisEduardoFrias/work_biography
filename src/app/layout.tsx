import type { Metadata } from "next";
import { ReactNode } from "react";
import localFont from "next/font/local";
import Book from "cp/book";
import Meteors from 'cp/meteors'
import SelectLanguage from "cp/select_language"
import SwitchTheme from "cp/switch_theme"
import '@/state_warehouse'
import "./globals.css";

const days_one = localFont({
	src: "../../public/fonts/Days_One/DaysOne-Regular.ttf"
});

export const metadata: Metadata = {
	title: "Mi Camino en la Programación: De la Decepción a la Autodidaxia",
	description: "Descubre mi viaje personal en el mundo de la programación, desde mis inicios en soporte informático hasta convertirme en un 'ingeniero de software' autodidacta.",
	authors: [{ name: "Luis Eduardo Frias" }],
	keywords: "programación, autodidacta, desarrollo de software, HTML, CSS, JavaScript, educación, experiencia, carrera profesional, ITLA, ITSC, UASD"
};

export default function RootLayout({ children, }: Readonly<{ children: ReactNode; }>) {
	return (
		<html lang="es">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body className={`${days_one.className} antialiased flex flex-col`}>
				<Meteors />
				<div className="w-full flex flex-row space-x-5 justify-end p-2">
					<SelectLanguage />
					<SwitchTheme />
				</div>
				<Book>
					{children}
				</Book>
			</body>
		</html>
	);
}
