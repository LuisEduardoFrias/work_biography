'use client'
import Link from 'next/link'
import { Page } from 'cp/book'
import Profile from 'cp/profile'
import Menu from 'cp/menu'
import Presentation from 'cp/presentation'
import useTranslate from 'hk/use_translate'
import localFont from "next/font/local";

const days_one = localFont({
	src: "../../public/fonts/Days_One/DaysOne-Regular.ttf"
});

export default function Home() {
	const translate = useTranslate();

	return (
		<Page>
			<div className="w-6/12 h-full flex flex-col justify-between ">
				<Presentation days_one={days_one} />
				<Menu days_one={days_one} />
			</div>
			<div className="w-6/12 h-full">
				<Profile />
			</div>
		</Page>
	);
}
