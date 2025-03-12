"use client"
import { useState } from 'react'
import Image from 'next/image'
import Skills from '../../jsons/skills.json'
import './back_end.css'

type Sk = {
	href: string;
	alt: string;
	name: string;
	/*  description: string;
	  showDesc: boolean;*/
}

type TDrawProps = {
	skill: Sk,
	index: number,
	selectInd: number,
	onclick: () => void
}

export function Draw({ skill, index, selectInd, onclick }: TDrawProps) {

	const Styles = {
		gridArea: `s${index + 1}`,
	}

	return (
		<div key={index} style={Styles} onClick={onclick} >
			<div>
				{skill.href && <Image src={skill.href} width={70} height={70} alt={skill.alt} />}
				{skill.name && <span>{skill.name}</span>}
			</div>
			<div></div>
		</div>
	)
}

export default function BackEnd() {
	const [selectInd, setSelect] = useState(-1)

	const skills: Sk[] = [...Skills.backend.advancedExperience, ...Skills.backend.middleExperience];
	let count = skills.length;
	count = count / 2 === 0 ? count : count + 1;

	const StyleGrid = {
		//	gridTemplateColumns: `repeat(6, 50px`,
		//gridTemplateRows: `repeat(6, 50px`,

		gridTemplateColumns: `repeat(${12}, Calc(60px - 30px))`,
		gridTemplateRows: `repeat(${8}, Calc(60px - 20px))`,
	}

	return (
		<div className="backend-page">
			<h2>Back End</h2>

			<div style={StyleGrid}>
				{
					skills.map((e: Sk, index) => <Draw key={index} selectInd={selectInd} onclick={() => setSelect(index)} skill={e} index={index} />)
				}
			</div>
		</div>
	)
}