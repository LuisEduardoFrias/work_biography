'use client'
import { Page } from 'cp/book'
import Profile from 'cp/profile'
import Menu from 'cp/menu'
import Presentation from 'cp/presentation'
import '@/state_warehouse'

export default function Home() {
	return (
		<Page>
			<div className="left-page-home pt-3 overflow-y-scroll md:overflow-y-hidden col-start-1 col-end-2 md:row-start-1 md:row-end-2 row-start-2 row-end-3 h-full flex flex-col justify-between gap-[20px] -md:bg-custom-gradient">
				<Presentation />
				<Menu />
			</div>
			<div className="md:col-start-2 md:col-end-3 col-start-1 col-end-2 row-start-1 row-end-2 h-full">
				<Profile />
			</div>
		</Page>
	);
}
