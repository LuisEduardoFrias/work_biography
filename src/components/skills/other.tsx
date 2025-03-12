"use client"
import { useState } from 'react'
import Skills from '../../jsons/skills.json'
import Skill from 'cp/skills/skill'
import { Draw } from './back_end'
import './back_end.css'

type Sk = {
	href: string;
	alt: string;
	name: string;
	/*  description: string;
	  showDesc: boolean;*/
}

export default function Other() {
	const [selectInd, setSelect] = useState(-1)

	const skills = [...Skills.another.advancedExperience, ...Skills.another.middleExperience];
	let count = skills.length;
	count = count / 2 === 0 ? count : count + 1;

	const StyleGrid = {
		gridTemplateColumns: `repeat(${12}, Calc(60px - 10px))`,
		gridTemplateRows: `repeat(${8}, Calc(60px - 10px))`,
		gridTemplateAreas:
			`" s1 s1 s3 s3 s3 s7 s7 s10 s10 s10 s13 s13 " 
          " s1 s1 s3 s3 s3 s7 s7 s10 s10 s10 s13 s13 " 
          " s1 s1 s2 s2 s5 s5 s9 s9  s11 s11 s18 s18 " 
          " s20 s20 s2 s2 s5 s5 s9 s9  s11 s11 s18 s18 " 
          " s4 s4 s4 s6 s6 s6 s9 s9  s12 s12 s17 s17 " 
          " s4 s4 s4 s6 s6 s6 s9 s9  s12 s12 s17 s17 "
          " s19 s19 s15 s15 s14 s14 s14 s8 s8 s16 s16 s16 "
          " s19 s19 s15 s15 s14 s14 s14 s8 s8 s16 s16 s16  "`,
		overflow: "scroll"
	}

	return (
		<div className="backend-page">
			<h2>{"Otros"}</h2>

			<div style={StyleGrid}>
				{
					skills.map((e: Sk, index) => <Draw key={index} selectInd={selectInd} onclick={() => setSelect(index)} skill={e} index={index} />)
				}
			</div>
		</div>
	)
}