"use client"
import { useState, useRef, MouseEvent } from 'react'
import Link from 'next/link';
import PdfSvg from 'svg/pdf_svg';
import Socials from '../../jsons/socials.json'
import MenuList from '../../jsons/menu_list.json'
import Option, { TypeOption } from './option'
import './styles.css'

type TypeSocial = {
	href: string,
	classIconName: string,
}

export default function Footer({ days_one }: { days_one: any }) {
	const [downloading, setDownloading] = useState(false);
	const fileDownloadRef = useRef(null);
	const cvPath = process.env.PATH_CV;

	async function handleDownload(event: MouseEvent<HTMLAnchorElement, MouseEvent>) {
		event.preventDefault();
		setDownloading(true);

	}

	return (
		<div className="footer-container" >
			<nav className={days_one.className}>
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
								<a href={`./profile/${cvPath}`} download >
									<PdfSvg />
								</a>
						)

						:
						<Link href="/CV?error=IEV">
							{downloading ? <div className="refresh_icon"></div> : <PdfSvg />}
						</Link>
					}
					{'CV'}
				</div>
				
				<div className="social-footer" >
					{Socials.map((social: TypeSocial) => {
						const DynamicComponent = require(`../../svg/${social.src}.tsx`).default;

						return (
							<a key={social.href} href={social.href} target="_blank">
								<DynamicComponent />
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}


