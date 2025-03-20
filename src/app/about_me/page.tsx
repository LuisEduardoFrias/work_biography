'use client';
import { Page } from 'cp/book';
import sections from '../../jsons/about.json'
import Image from 'next/image';
import useTranslate from 'hk/use_translate';

export default function PageAbout() {
	const translate = useTranslate();
	return (
		<Page>
			<div className="w-full md:w-6/12 h-full relative">
				<div className="w-full h-full flex flex-col p-5 overflow-y-hidden">
					<header className="flex flex-col justify-center items-center mb-8">
						<Image
							className="w-[200px] h-[200px] rounded-full mb-4 border-4 border-theme-4"
							src="/imgs/profile.webp"
							width={3264}
							height={2177}
							alt="Imagen de perfil de Luis Eduardo Frias"
						/>
						<h1 className="text-3xl font-bold text-center mb-2">Luis Eduardo Frias</h1>
						<h2 className="text-[1.5em] text-center mb-[10px]" >{translate("about_subtitle")}</h2>
						<h3 className="text-[1em] mb-[10px]" >{translate("about_address")}</h3>
					</header>
					<main className="text-[15px] space-y-6 overflow-y-scroll">
						{sections.map(section =>
							<section key={section.id}>
								<h2 className="text-[20px] font-semibold mb-2 text-theme-5">{translate(section.section)}</h2>
								<p dangerouslySetInnerHTML={{ __html: translate(section.p1) }} />
								<br />
								<p dangerouslySetInnerHTML={{ __html: translate(section.p2) }} />
							</section>
						)}
					</main>
					<footer className="mt-8 text-center">
						<p>&copy; {translate("footer_about")} </p>
					</footer>
				</div>
			</div>
			<div className="hidden md:block md:w-6/12 h-full relative">
			</div>
		</Page>
	);
}