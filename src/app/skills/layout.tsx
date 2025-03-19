import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Skills",
	description: "Aqui muestro mis abilidades tegnologicas.",
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
	return (<>{children}</>);
}
