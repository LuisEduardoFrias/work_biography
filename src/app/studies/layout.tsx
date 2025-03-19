import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Studie",
	description: "Aqui muestros lis logros academicos.",
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
	return (<>{children}</>);
}

