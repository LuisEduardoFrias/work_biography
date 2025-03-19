import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Experieces",
	description: "Aqui hablo de mis experiencias laborales.",
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
	return (<>{children}</>);
}

