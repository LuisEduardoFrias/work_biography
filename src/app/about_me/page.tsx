'use client';
import { Page } from 'cp/book';
import sections from '../../jsons/about.json'
import Image from 'next/image';
import useTranslate from 'hk/use_translate';

export default function About() {
	const translate = useTranslate();
	return (
		<Page>
			<div className="-md:col-start-1 -md:col-end-2 md:col-start-1 md:col-end-2 row-start-1 md:row-end-2 -md:row-end-3 h-full relative">
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
					<footer className="mt-8 text-[10px] text-center">
						<p>&copy; {translate("footer_about")} </p>
					</footer>
				</div>
			</div>
			<div className="hidden -md:col-start-1 -md:col-end-2 -md:row-start-2 -md:row-end-3 md:col-start-2 -md:col-end-3 -md:row-start-1 -md:row-end-2 h-full  relative">
			</div>
		</Page>
	);
}
/*
		"p1": "Coming soon", //"Para 2022, mi carrera como programador había experimentado un crecimiento significativo, tras asumir nuevos roles y desafíos, me encontraba en un momento de gran \"satisfacción\" personal y profesional (siempre me mantengo en constrante aprendisaje). Disfrutaba de un excelente ambiente laboral, una vida familiar plena y la perspectiva de seguir avanzando. Estaba a punto de concretar una oportunidad de trabajo remoto con una empresa mexicana, esta y otras cartas, tenia soble la meza, lo que me impulsó a fijar nuevas metas y a enfocarme en el dominio del inglés para alcanzar el siguiente nivel. Todo parecía marchar a la perfección, hasta que una acusación injusta me llevó a enfrentar un período de privación de libertad.",
		"p2": "", // "De repente, todo se derrumbó. ¿Cómo recuperarme? El apoyo incondicional de mi familia fue fundamental para mantenerme en pie. Durante ese tiempo, me dediqué a buscar una forma de estudiar para no quedarme estancado, fue dificil lograrlo pero tras un año, logré lo que parecía imposible para mi en ese entonces, comencé a explorar nuevas tecnologías, adquirir nuevas abilidades y desarrollar proyectos personales, comense a tonar pruebas tegnica, mi principal motivación era el reto..."
*/