'use client'
import Image from 'next/image'
import { Page } from 'cp/book'
import useTranslate from 'hk/use_translate'

export default function Studies() {
	const translate = useTranslate();
	return (
		<Page >
			<div className="-md:col-start-1 -md:col-end-2 md:col-start-1 md:col-end-2 row-start-1 md:row-end-2 -md:row-end-3 flex justify-center items-center h-full relative">
				<h1 className="absolute z-40 text-2xl bg-transluxed backdrop-blur px-7 py-2 rounded-2xl font-extrabold left-1/2 top-[5px] translate-x-[-50%] " >{translate('Studies')}</h1>
				<Image className="-md:w-full md:w-1/2 lg:w-[80%] -md:h-[300px]" id="profile" src="/imgs/diploma.webp" priority={true} width={3264} height={2177} alt="Image of profile" />
			</div>
			<div className="-md:hidden -md:col-start-1 -md:col-end-2 -md:row-start-2 -md:row-end-3 md:col-start-2 -md:col-end-3 -md:row-start-1 -md:row-end-2 h-full  relative">
			</div>
		</Page>
	);
}
