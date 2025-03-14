import Main from '../../../.next/static/chunks/main';
'use client'
import BackHome from 'cp/back_home'
import { Page } from 'cp/book'
import Image from 'next/image'
import useTranslate from 'hk/use_translate'

export default function page() {
	const translate = useTranslate();
	return (
		<Page>
			<div className="w-6/12 h-full relative">
				<BackHome position="left" />
				<div className="w-full h-full flex flex-col p-5 overflow-y-hidden">

					<header className="flex flex-col justify-center items-center">
						<Image className="w-[200px] h-[200px] rounded-full mb-[20px] border-4 border-theme-4" src="/imgs/profile.webp" width={3264} height={2177} alt="Image of profile" />

						<h1 className="text-[2em] text-center mb-[10px]" >Luis Eduardo Frias</h1>
						<h2 className="text-[1.5em] text-center mb-[10px]" >{translate("about_subtitle")}</h2>
						<h3 className="text-[1em] mb-[10px]" >{translate("about_address")}</h3>
					</header>

					<main className="overflow-y-scroll mb-2 overflow-x-hidden space-y-3">

						<h2>Mi Aventura en el Mundo de la Programación</h2>

						<section id="introduccion">
							<h2 className="mb-2 font-bold underline text-theme-5" >Mis Inicios en la Informática</h2>
							<p>Mi introducción al mundo de la informática comenzó a los 15 años, durante un curso de soporte informático mientras culsaba en la secundaria. Este curso me brindó una visión general de computación, redes y sistemas, despertando mi interés por este campo.</p>
							<p>En el Instituto Politécnico Prof. Juan Bosch, durante mi tercer año de bachillerato, comencé a profundizar en la programación con materias como programación con Delphi, desarrollo web con Dreamweaver y lógica de compuertas. Aunque me gustaba la programación, sentía que Delphi y Dreamweaver eran tegnologias ambiguas. Prefería la web tradicional con HTML, CSS y JavaScript, y explorar alternativas como Visual Basic.</p>
						</section>

						<section id="desafios">
							<h2 className="mb-2 font-bold underline text-theme-5" >Desafíos y Decisiones</h2>
							<p>Al terminar el bachillerato, la oportunidad de una beca en el ITLA (Instituto Tegnico de las Americas) para el tegnico de software, recomendado por una profesora se esfumó debido a circunstancias personales, la muerte mi padre, la caida economica el la famila, lo que me llebo a la UASD (Universidad Autonoma de Santo Domingo) con el deseo de convertirme en ingeniero informático, donde la carrera había cambiado de ser un 'ingenieria' a 'licenciatura'. La decepción fue grande, pero decidí continuar.</p>
							<p>La experiencia que me esperava en la UASD era difícil, con la decepción que ya tenia, con introduccion de un ciclo básico extenso, la dificultad de estudiar alla y la necesidad de trabajar, me llevaron a nunca asistir, Finalmente, gracias a Dios un dia me encontre con una amiga de la segundario, ella estudiaba en el ITSC (Instituto Tegnico Superior Comunitario) un instituto igusl de bueno wue el ITLA, fue entonces donde encontré mi camino en el Técnico Superior en Desarrollo de Software.</p>
						</section>

						<section id="autodidacta">
							<h2 className="mb-2 font-bold underline text-theme-5" >El Camino del Autodidacta</h2>
							<p>Luego de finalizar el tegnico en el ITSC en el 2020, comense aprender de forma autodidacta. Perdí el anhelo del título de ingeniero, valorando más el conocimiento y la capacidad. Me considero un "ingeniero de software" en constante aprendizaje.</p>
							<p>Recientemente, el deseo de obtener el título universitario ha resurgido. Además, el inglés se ha convertido en mi segunda gran meta, luego de condeguir mi titulo.</p>
						</section>

						<section id="reflexiones">
							<h2 className="mb-2 font-bold underline text-theme-5" >Reflexiones Finales</h2>
							<p>Mi viaje en la programación ha sido un camino de descubrimientos, desafíos y aprendizaje constante. He aprendido que la pasión, la dedicación y la capacidad de aprender por uno mismo son fundamentales en este campo.</p>
						</section>
					</main>

					<footer>
						<p>&copy; 2024 Luis Eduardo Frias</p>
					</footer>

				</div>
			</div>

			<div className="w-6/12 h-full relative">
			</div>
		</Page>
	);
}



