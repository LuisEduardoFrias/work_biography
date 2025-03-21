"use client"
import { useState, Suspense, lazy } from 'react'
import Loading from '@/app/loading'
import localFont from 'next/font/local'
import Link from 'next/link';
import PdfSvg from 'svg/pdf_svg';
import Socials from '../../jsons/socials.json'
import MenuList from '../../jsons/menu_list.json'
import Option, { TypeOption } from './option'
import './styles.css'

const orbitron = localFont({
	src: "../../../public/fonts/Orbitron/Orbitron-VariableFont_wght.ttf"
});

type TypeSocial = {
	href: string,
	src: string
}

export default function Footer() {
	const [downloading] = useState(false);
	// const fileDownloadRef = useRef(null);
	const cvPath = process.env.PATH_CV;

	// async function handleDownload(event: MouseEvent<HTMLAnchorElement, MouseEvent>) {
	// 		event.preventDefault();
	// 		setDownloading(true);
	// 
	// 	}

	return (
		<div className="footer-container" >
			<nav className={orbitron.className}>
				<ul>
					{MenuList.map((li: TypeOption, index: number) => <Option key={index} {...li} />)}
				</ul>
			</nav>
			<div>
				<div className="downloadPdfBtn">
					{cvPath ?

						(
							downloading ?
								<div className="refresh_icon"></div> :
								<a aria-label="download cv" href={`./profile/${cvPath}`} download >
									<PdfSvg />
								</a>
						)

						:
						<Link href="/CV?error=IEV" aria-label={"/CV?error=IEV"}>
							{downloading ? <div className="refresh_icon"></div> : <PdfSvg />}
						</Link>
					}
					{'CV'}
				</div>

				<div className="social-footer" >
					{Socials.map((social: TypeSocial) => {
						//	const DynamicComponent = requited(`../../svg/${social.src}.tsx`).default;
						const DynamicComponent = lazy(() => import(`../../svg/${social.src}.tsx`));

						return (
							<a key={social.href} aria-label={social.href} href={social.href} target="_blank">
								<Suspense fallback={<Loading />}>
									<DynamicComponent />
								</Suspense>
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}


