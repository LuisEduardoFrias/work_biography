'use client'
import { Page } from 'cp/book'
import Profile from 'cp/profile'
import Menu from 'cp/menu'
import Presentation from 'cp/presentation'
import useTranslate from 'hk/use_translate'

export default function Home() {
	const translate = useTranslate();
	return (
		<Page>
			<div className="w-6/12 h-full flex flex-col justify-between ">
				<Presentation />
				<Menu />
			</div>
			<div className="w-6/12 h-full">
				<Profile />
			</div>
		</Page>
	);
}
