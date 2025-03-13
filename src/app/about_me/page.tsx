'use client'
import BackHome from 'cp/back_home'
import { Page } from 'cp/book'
import Image from 'next/image'
import useTranslate from 'hk/use_translate'

export default function page() {
	const translate = useTranslate();
	return (
		<Page>
			<div className="w-6/12 h-full relative">
				<BackHome position="left" />
				<div className="w-full h-full p-10 overflow-y-scroll">

					<div className="flex justify-center">
						<Image className="w-[200px] h-[200px] rounded-full mb-[20px] border border-theme-4" src="/imgs/profile.webp" width={3264} height={2177} alt="Image of profile" />
					</div>

					<h1 className="text-[2em] mb-[10px]" >Luis Eduardo Frias</h1>

					<h2 className="text-[1.5em] mb-[10px]" >{translate("about_subtitle")}</h2>

					<p className="text-[1.5em] mb-[10px]" >
						<strong>{translate("about_phone")}:</strong> 8492280058
					</p>

					<p className="text-[1.5em] mb-[10px]" >
						<strong>{'GitHub: '}</strong>
						<a className="text-theme-4 decoration-0" href="https://www.github.luiseduardofrias.io">
							https://www.github.luiseduardofrias.io
						</a>
					</p>

					<p className="text-[1.5em] mb-[10px]" >
						<strong>{'LinkedIn: '}</strong>
						<a className="text-theme-4 decoration-0" href="https://www.linkedin.com">https://www.linkedin.com</a>
					</p>

					<p className="text-[1.5em] mb-[10px]" >
						<strong>{'Portafolio: '}</strong>
						<a className="text-theme-4 decoration-0" href="https://www.github.luiseduardofrias.io/porfolio">
							https://www.github.luiseduardofrias.io/porfolio
						</a>
					</p>

					<p className="text-[1.5em] mb-[10px]" >
						<strong>{`${translate("Address")}: `}</strong>{translate("Dominican Republic")}
					</p>

					<p className="text-[1.5em] mb-[10px]" >{translate("about_text1")}</p>

					<p className="text-[1.5em] mb-[10px]" >{translate("about_subtitletext2")}</p>

				</div>
			</div>

			<div className="w-6/12 h-full relative">
			</div>
		</Page>
	);
}
