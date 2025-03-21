'use client'
import { Page } from 'cp/book'
import FrontEnd from 'cp/skills/front_end'
import BackEnd from 'cp/skills/back_end'
import Other from 'cp/skills/other'
import Slider from 'cp/skills/slider'
import useTranslate from 'hk/use_translate'
import '@/state_warehouse'

export default function Skill() {
	const translate = useTranslate();
	return (
		<Page>
			<div className="col-start-1 col-end-2 md:row-start-1 md:row-end-2 row-start-2 row-end-3 h-full relative">
			</div>
			<Slider>
				<BackEnd />
				<FrontEnd />
				<Other />
			</Slider>
			<div className="md:col-start-2 md:col-end-3 col-start-1 col-end-2 row-start-1 row-end-2 h-ful relative">
				<h1 className="absolute font-extrabold left-1/2 top-[0px] translate-x-[-50%]" >{translate('Skills')}</h1>
			</div>
		</Page>
	);
}
