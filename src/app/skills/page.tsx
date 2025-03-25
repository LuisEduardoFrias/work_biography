'use client'
import { Page } from 'cp/book'
import FrontEnd from 'cp/skills/front_end'
import BackEnd from 'cp/skills/back_end'
import Other from 'cp/skills/other'
import useTranslate from 'hk/use_translate'

export default function Skill() {
	const translate = useTranslate();
	return (
		<Page>
			<div className="col-start-1 col-end-2 -md:row-start-1 md:row-end-3 row-start-1 -md:row-end-3 md:row-end-2 h-full pt-7 relative">
				<h1 className="absolute font-extrabold left-1/2 top-[0px] translate-x-[-50%]" >{translate('Skills')}</h1>
				<div className="w-full h-full flex flex-col gap-10 pb-10 overflow-y-scroll">
					<BackEnd />
					<FrontEnd />
					<div className="md:hidden">
						<Other />
					</div>
				</div>
			</div>
			<div className="-md:hidden col-start-2 col-end-3 row-start-1 row-end-2 pt-10 h-ful relative">
				<div className="w-full h-full flex flex-col gap-10 pb-10 overflow-y-scroll">
					<Other />
				</div>
			</div>
		</Page>
	);
}
