import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Projects",
	description: "Aqui muestro misnproyectos personales",
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
	return (<>{children}</>);
}
