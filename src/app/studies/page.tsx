'use client'
import Link from 'next/link'
import { Page } from 'cp/book'
import useTranslate from 'hk/use_translate'
import '@/state_warehouse'

export default function page() {
	const translate = useTranslate();
	return (
		<Page>
			<div className="w-6/12 h-full ">
				<p>{translate('Studies')} </p>
				<Link href="/">back</Link>
			</div>
			<div className="w-6/12 h-full">

			</div>
		</Page>
	);
}
