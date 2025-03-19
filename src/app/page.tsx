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
			<div className="col-start-1 col-end-2 sm:row-start-1 ms:row-end-2 row-start-2 row-end-3 h-full flex flex-col justify-between gap-[20px] ">
				<Presentation />
				<Menu />
			</div>
			<div className="sm:col-start-2 sm:col-end-3 col-start-1 col-end-2 row-start-1 row-end-2 grid-area-right h-full">
				<Profile />
			</div>
		</Page>
	);
}
