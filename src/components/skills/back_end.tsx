import Image from 'next/image'
import Skills from '../../jsons/skills.json'
import './back_end.css'

type Sk = {
	href: string;
	alt: string;
	name: string;
}

type TDrawProps = {
	key: number,
	skill: Sk,
	index: number,
	onclick: () => void
}

export function Draw({ skill, index, onclick }: TDrawProps) {

	const Styles = {
		gridArea: `s${index + 1}`,
	}

	return (
		<div key={index} style={Styles} onClick={onclick} >
			<div className="border border-theme-1 bg-[#a7a7a78b] group transition-shadow hover:scale-110 hover:shadow-[2px_2px_3px_5px_var(--theme-6)] shadow-[2px_2px_3px_0_var(--theme-4)] p-2 flex flex-col justify-center gap-1 items-center rounded-2xl">
				{skill.href && <Image src={skill.href} className="group-hover:rotate-45 transition-transform min-w-[100px] min-h-fit" width={70} height={70} alt={skill.alt} />}
				{skill.name && <span>{skill.name}</span>}
			</div>
			<div></div>
		</div>
	)
}

export default function BackEnd() {
	return (
		<div className="w-full px-5 space-y-10">
			<h2>Back End</h2>
			<div className="flex flex-wrap gap-12">
				{
					Skills.backend.map((e: Sk, index: number) => <Draw key={index} onclick={() => { }} skill={e} index={index} />)
				}
			</div>
		</div>
	)
}