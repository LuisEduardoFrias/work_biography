'use client'
import BackHome from 'cp/back_home'
import Image from 'next/image'
import { Page } from 'cp/book'
import useTranslate from 'hk/use_translate'
import '@/state_warehouse'

export default function page() {
	const translate = useTranslate();
	return (
		<Page >
			<div className="w-6/12 h-full relative">
				<BackHome position="left" />
					<Image className="w-[200px] h-[200px]" id="profile" src="/imgs/diploma.webp" priority={true} width={3264} height={2177} alt="Image of profile" />
			</div>
			<div className="w-6/12 h-full">

			</div>
		</Page>
	);
}
