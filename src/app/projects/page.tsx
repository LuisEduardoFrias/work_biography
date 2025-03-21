'use client'
import { useState, useEffect } from 'react'
import { Page } from 'cp/book'

import ProjectCard, { TypeProjectCard } from 'cp/project_card'
import Loading from '../loading'
import useTranslate from 'hk/use_translate'
import Image from 'next/image'
import { getRepoInfoWithProfile } from 'sv/auth_github'
import '@/state_warehouse'

export default function page() {
	const translate = useTranslate();
	const [state, setState] = useState<TypeProjectCard[]>(null)

	useEffect(() => {
		(async () => {
			setState(await getRepoInfoWithProfile())
		})()
	}, [])

	return (
		<Page>
			<div className="md:col-start-2 md:col-end-3 col-start-1 col-end-2 row-start-1 row-end-3 h-full relative">
				<h1 className="absolute text-2xl bg-transluxed backdrop-blur px-7 py-2 rounded-2xl font-extrabold left-1/2 top-[5px] translate-x-[-50%] " >{translate('Project')}</h1>
				<div className="rounded-[var(--border-page-radius)_0_0_var(--border-page-radius)] w-full h-full box-border pt-14 flex flex-row flex-wrap gap-4 p-3 overflow-y-scroll" >

					{state ?
						state?.map((obj: TypeProjectCard) => <ProjectCard key={obj.name} {...obj} />) :
						<span className="text-center w-full">{translate("Not Data")}</span>
					}

					{!state && <Loading />}
				</div>
			</div>
			<div className="hidden md:visible col-start-1 col-end-2 md:row-start-1 md:row-end-2 row-start-2 row-end-3 h-full  relative">
			</div>
		</Page>
	);
}
