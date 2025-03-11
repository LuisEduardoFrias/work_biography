'use client'
import Link from 'next/link'
import { Page } from 'cp/book'
import FrontEnd from 'cp/skills/front_end'
import BackEnd from 'cp/skills/back_end'
import Other from 'cp/skills/other'
import Slider from 'cp/skills/slider'
import BackHome from 'cp/back_home'
import useTranslate from 'hk/use_translate'
import '@/state_warehouse'

export default function Skill() {
	const translate = useTranslate();
	return (
		<Page>
			<div className="w-6/12 h-full relative">
				<h1 className="absolute font-extrabold left-1/2 top-[-15px] translate-x-[-50%]" >{translate('Skills')}</h1>
			</div>
			<Slider>
				<BackEnd />
				<FrontEnd />
				<Other />
			</Slider>
			<div className="w-6/12 h-full relative">
				<BackHome position="right" />
			</div>
		</Page>
	);
}
