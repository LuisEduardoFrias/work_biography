'use client'
import Link from 'next/link'
import { Page } from 'cp/book'
import useTranslate from 'hk/use_translate'
import Image from 'next/image'
import '@/state_warehouse'

export default function page() {
	const translate = useTranslate();
	return (
		<Page>
			<div className="w-6/12 h-full">
				<p>{translate('Projects')} </p>
				<Link href="/">{translate('back')}</Link>
				<Image
					src="/vercel.svg"
					className="dark:invert"
					alt="Next.js logo"
					width={180}
					height={38}
					priority />
			</div>
			<div className="w-6/12 h-full">
				<Image
					src="/window.svg"
					className="dark:invert"
					alt="Next.js logo"
					width={180}
					height={38}
					priority />
			</div>
		</Page>
	);
}
