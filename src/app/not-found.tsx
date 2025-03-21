'use client'
import Image from "next/image"
import Link from "next/link"
import { Page } from 'cp/book'
import { useSearchParams } from 'next/navigation'
import useTranslate from 'hk/use_translate'

export default function NotFoundPage() {
	const translate = useTranslate();
	const params = useSearchParams()
	const error = params.get('error')

	return (
		<Page>
			<div className="w-6/12 h-full relative" >
				<div className="flex flex-col space-y-6 text-color">
				        	<h2 className="text-5xl font-extrabold text-center" >{translate('Something went wrong!')}</h2>
				{error&&	<span className="text-center" >{translate(error)}</span>}
				        	<Link href={"/"} className="text-2xl text-primary underline font-extrabold text-center" >
				        		{translate('Go to the home')}
				        	</Link>
				</div>
				<Image
					priority={true}
					className="w-11/12 absolute bottom-0 left-0 drop-shadow-homero "
					src="/imgs/homero_simpsons_404_edi.webp"
					width={500}
					height={500}
					alt={"image error 404"}
				/>
			</div>
			<div className="w-6/12 h-full">
			</div>
		</Page>
	);
}