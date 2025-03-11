'use client'
import BackHome from 'cp/back_home'
import { Page } from 'cp/book'
import useTranslate from 'hk/use_translate'
import Image from 'next/image'
import '@/state_warehouse'

export default function page() {
	const translate = useTranslate();

	return (
		<Page>
			<div className="w-6/12 h-full relative m-auto p-10 overflow-y-scroll ">
				<BackHome position="left" />
				<div className="flex justify-center">
					<Image className="w-[200px] h-[200px] rounded-full mb-[20px] border border-theme-4" id="profile" src="/imgs/profile.webp" priority={true} width={3264} height={2177} alt="Image of profile" />
				</div>
				<h1 className="text-[2em] mb-[10px]" >Luis Eduardo Frias</h1>
				<h2 className="text-[1.5em] mb-[10px]" >{translate("about_subtitle")}</h2>
				<p className="text-[1.5em] mb-[10px]" >
					<strong>{translate("about_phone")}:</strong> 8492280058
				</p>
				<p className="text-[1.5em] mb-[10px]" >
					<strong>{'GitHub: '}</strong>
					<a className="text-theme-4 decoration-0"  href="https://www.github.luiseduardofrias.io">
						https://www.github.luiseduardofrias.io
					</a>
				</p>
				<p className="text-[1.5em] mb-[10px]" >
					<strong>{'LinkedIn: '}</strong>
					<a className="text-theme-4 decoration-0"  href="https://www.linkedin.com">https://www.linkedin.com</a>
				</p>
				<p className="text-[1.5em] mb-[10px]" >
					<strong>{'Portafolio: '}</strong>
					<a className="text-theme-4 decoration-0"  href="https://www.github.luiseduardofrias.io/porfolio">
						https://www.github.luiseduardofrias.io/porfolio
					</a>
				</p>
				<p className="text-[1.5em] mb-[10px]" >
					<strong>{`${translate("Address")}: `}</strong>{translate("Dominican Republic")}
				</p>
				<p className="text-[1.5em] mb-[10px]" >{translate("about_text1")}</p>
				<p className="text-[1.5em] mb-[10px]" >{translate("about_subtitletext2")}</p>

			</div>
			<div className="w-6/12 h-full">
			</div>
		</Page>
	);
}
