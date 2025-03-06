'use client'
import Link from 'next/link'
import useTranslate from 'hk/use_translate'
import { Page } from 'cp/book'
import '@/state_warehouse'

export default function Home() {
	const translate = useTranslate();

	return (
		<Page>
			<div className="w-6/12 h-full">
				<p>{translate('Page 5')}</p>
				<div className="flex space-x-5 p-5">
					<Link href="/experiences">{translate('Experiences')}</Link>
					<Link href="/studies">{translate('Studies')}</Link>
					<Link href="/skills">{translate('Skills')}</Link>
					<Link href="/projects">{translate('Projects')}</Link>
					<Link href="/about_me">{translate('about me')}</Link>
				</div>
			</div>
			<div className="w-6/12 h-full">
				<p>Page 5 other</p>
			</div>
		</Page>
	);
}
