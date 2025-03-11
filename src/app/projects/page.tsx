'use client'
import { useState, useEffect } from 'react'
import { Page } from 'cp/book'
import BackHome from 'cp/back_home'
import Loading from '../loading'
import useTranslate from 'hk/use_translate'
import Image from 'next/image'
import { getRepoInfoWithProfile } from 'sv/auth_github'
import '@/state_warehouse'

export default function page() {
	const translate = useTranslate();
	const [state, setState] = useState(null)

	useEffect(() => {
		(async () => {
			const data = await getRepoInfoWithProfile();
			setState(data)
		})()
	}, [])


	return (
		<Page>
			<div className="w-6/12 h-full relative">
				<BackHome position="left" />
				<h1 className="absolute font-extrabold left-1/2 top-[-15px] translate-x-[-50%]" >{translate('Project')}</h1>
				<div className="w-full h-full border border-amber-500 p-3 overflow-y-scroll">
					<span>{JSON.stringify(state, null, 2)}</span>
					{!state && <Loading />}
				</div>
			</div>
			<div className="w-6/12 h-full">
			</div>
		</Page>
	);
}
