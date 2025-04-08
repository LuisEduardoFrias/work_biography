'use client';
import { useRef, useEffect } from 'react';
import  Page from 'cp/book/page'
import Image from 'next/image';
import sections from '../../jsons/about.json';
import useTranslate from 'hk/use_translate';

export default function About() {
	const {translate} = useTranslate();
	const mainRef = useRef<HTMLElement>(null);
	const h1Ref = useRef<HTMLHeadingElement>(null);
	const h2Ref = useRef<HTMLHeadingElement>(null);
	const h3Ref = useRef<HTMLHeadingElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (mainRef.current && h3Ref.current && h2Ref.current && h1Ref.current) {
				const scrollPosition = mainRef.current.scrollTop;

				if (scrollPosition >= 192) {
					h3Ref.current.classList.add('hidden', 'absolute');
				}

				if (scrollPosition >= 384) {
					h2Ref.current.classList.add('hidden', 'absolute');
				}

				if (scrollPosition >= 576) {
					h1Ref.current.classList.add('hidden', 'absolute');
				}

				if (scrollPosition < 575) {
					h1Ref.current.classList.remove('hidden', 'absolute');
				}

				if (scrollPosition < 383) {
					h2Ref.current.classList.remove('hidden', 'absolute');
				}

				if (scrollPosition < 191) {
					h3Ref.current.classList.remove('hidden', 'absolute');
				}
			}
		};

		if (mainRef.current) {
			mainRef.current.addEventListener('scroll', handleScroll);
		}
	}, []);

	return (
		<Page>
			<div className="-md:col-start-1 -md:col-end-2 md:col-start-1 md:col-end-2 row-start-1 md:row-end-2 -md:row-end-3 h-full relative">
				<div className="w-full h-full flex flex-col p-5 gap-2 overflow-y-hidden">
					<header className="flex flex-col gap-2 items-center mt-2">
						<Image
							className="w-[200px] h-[200px] rounded-full border-4 border-theme-4"
							style={{
								maskImage: 'linear-gradient(black 80%, transparent)',
								filter: 'drop-shadow(0px 0px 5px var(--contrast))'
							}}
							src="/imgs/profile.webp"
							width={3264}
							height={2177}
							alt="Imagen of the author"
						/>
						<h1 ref={h1Ref} className="text-3xl font-bold text-center">
							Luis Eduardo Frias
						</h1>
						<h2 ref={h2Ref} className="text-[1.5em] text-center">
							{translate('about_subtitle')}
						</h2>
						<h3 ref={h3Ref} className="text-[1em]">
							{translate('about_address')}
						</h3>
					</header>
					<main ref={mainRef} className="text-[15px] flex flex-col  items-center gap-5 overflow-y-scroll">
						{sections.map((section) => (
							<article key={section.id} className="w-full">
								<h2 className="text-[16px] font-semibold mb-2 text-theme-5">
									{translate(section.section)}
								</h2>
								<P text={translate(section.p1)} />
								<br />
								<P text={translate(section.p2)} />
							</article>
						))}
					</main>
					<footer className="text-[10px] text-center">
						<p>&copy; {translate('about_footer')} </p>
					</footer>
				</div>
			</div>
			<div className="hidden -md:col-start-1 -md:col-end-2 -md:row-start-2 -md:row-end-3 md:col-start-2 -md:col-end-3 -md:row-start-1 -md:row-end-2 h-full  relative"></div>
		</Page>
	);
}

function P({ text }: { text: string }) {
	return (
		<p style={{
			textWrap: 'pretty',
			hyphens: 'auto',
			hyphenateLimitChars: '3 2',
		}} className="text-[12px]" dangerouslySetInnerHTML={{ __html: text }} />
	)
}


/*
resiliencia y persistencia
		"p1": "Coming soon", //"Para 2022, mi carrera como programador había experimentado un crecimiento significativo, tras asumir nuevos roles y desafíos, me encontraba en un momento de gran \"satisfacción\" personal y profesional (siempre me mantengo en constrante aprendisaje). Disfrutaba de un excelente ambiente laboral, una vida familiar plena y la perspectiva de seguir avanzando. Estaba a punto de concretar una oportunidad de trabajo remoto con una empresa mexicana, esta y otras cartas, tenia soble la meza, lo que me impulsó a fijar nuevas metas y a enfocarme en el dominio del inglés para alcanzar el siguiente nivel. Todo parecía marchar a la perfección, hasta que una acusación injusta me llevó a enfrentar un período de privación de libertad.",
		"p2": "", // "De repente, todo se derrumbó. ¿Cómo recuperarme? El apoyo incondicional de mi familia fue fundamental para mantenerme en pie. Durante ese tiempo, me dediqué a buscar una forma de estudiar para no quedarme estancado, fue dificil lograrlo pero tras un año, logré lo que parecía imposible para mi en ese entonces, comencé a explorar nuevas tecnologías, adquirir nuevas abilidades y desarrollar proyectos personales, comense a tonar pruebas tegnica, mi principal motivación era el reto..."
*/
