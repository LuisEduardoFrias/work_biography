import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
	title: "About me",
	description: "Aqui hablo de mi hisyoria como programador.",
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode; }>) {
	return (<>{children}</>);
}
