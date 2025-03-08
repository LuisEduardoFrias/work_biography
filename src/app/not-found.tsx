'use client'
import Image from "next/image"
import Link from "next/link"
import { Page } from 'cp/book'
import useTranslate from 'hk/use_translate'
import error404 from "../../public/imgs/homero_simpsons_404_edi.webp"

type TypeError = {
	error: Error & { digest?: string }
	reset: () => void
}

export default function NotFoundPage({ error, reset, }: TypeError) {
	const translate = useTranslate();
	return (
		<Page>
			<div className="w-6/12 h-full relative" >
				<div className="flex flex-col space-y-6">
					<h2 className="text-5xl font-extrabold text-center" >{translate('Something went wrong!')}</h2>
					<Link href={"/"} className="text-2xl text-primary underline font-extrabold text-center" >
						{translate('Go to the home')}
					</Link>
				</div>
				<Image
					priority={true}
					placeholder="blur"
					className="w-11/12 absolute bottom-0 left-0 drop-shadow-homero "
					src={error404}
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