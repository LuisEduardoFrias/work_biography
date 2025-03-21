'use client'
import Link from 'next/link'
import { Page } from 'cp/book'
import KeyBoard from 'cp/keyboard'
import experiences from '../../jsons/experiences.json'
import useTranslate from 'hk/use_translate'
import Image from 'next/image'
import '@/state_warehouse'

export default function page() {
	const translate = useTranslate();

	return (
		<Page>
			<div className="col-start-1 col-end-2 md:row-start-1 md:row-end-2 row-start-1 row-end-3 h-full relative ">
				<h1 className="absolute text-2xl bg-transluxed backdrop-blur px-7 py-2 rounded-2xl font-extrabold left-1/2 top-[5px] translate-x-[-50%] " >{translate('Experiences')}</h1>
				<div className="w-full h-full box-border pt-14 flex flex-row flex-wrap space-y-4 p-3 overflow-y-scroll">
					{experiences.map((experience, index) => (
						<ExperienceCard key={index} {...experience} />
					))}
					<div className="my-2">
						<KeyBoard />
					</div>
				</div>
			</div>
			<div className="hidden md:visible col-start-1 col-end-2 md:row-start-1 md:row-end-2 row-start-2 row-end-3 h-full relative">
			</div>
		</Page>
	);
}

type TypeExperience = {
	key: string;
	title: string;
	cargo: string;
	tegnologies: string[];
	responsabilities: string[];
}

function ExperienceCard(experience: TypeExperience) {
	const translate = useTranslate();

	return (
		<div className="bg-base text-contrast rounded-lg h-64 border overflow-y-scroll border-ctt shadow-[2px_2px_6px_2px_var(--theme-6)] p-4 mb-4">
			<h2 className="text-xl font-semibold mb-2">{experience.title}</h2>
			<p className="text-gray-600 mb-2">{translate('Cargo:')} {translate(experience.cargo)}</p>
			<div className="flex flex-wrap mb-2">
				{experience.tegnologies.map((tech) => (
					<span
						key={tech}
						className="bg-theme-1 text-base shadow-[inset_1px_1px_1px_0_var(--contrast),2px_2px_4px_0_var(--theme-5)] rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
					>
						{tech}
					</span>
				))}
			</div>
			<ul className="list-disc list-inside">
				{experience.responsabilities.map((responsibility, index) => (
					<li key={index} className="text-gray-700 mb-1">
						{translate(responsibility)}
					</li>
				))}
			</ul>
		</div>
	);
};
