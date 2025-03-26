'use client'
import Image from 'next/image'
import { Page } from 'cp/book'
import useTranslate from 'hk/use_translate'

const youtubers = [
	{
		sector: "web y infirmativo",
		name: "Miguel Ángel Durán",
		img: "https://avatars.githubusercontent.com/u/1561955?v=4",
		url: "https://github.com/midudev"
	},
	{
		sector: "web",
		name: "Fernando Herrera",
		img: "https://yt3.googleusercontent.com/wi0ZUvM16CDMJSP1CDqY8QLskk6y7-Un7ztvMDC2Xdbkm8KHR3BWg08bd0EgPgfEHqUpZGkzyA=s160-c-k-c0x00ffffff-no-rj",
		url: "https://m.youtube.com/channel/UCuaPTYj15JSkETGnEseaFFg"
	},
	{
		sector: "C#",
		name: "Hector D' Leon",
		img: "https://avatars.githubusercontent.com/u/1091493?v=4",
		url: "https://m.youtube.com/c/hdeleonnet"
	},
	{
		sector: "C#",
		name: "Felipe Gavilan Programa",
		img: "https://yt3.googleusercontent.com/12nnBdRb96DZy82FSic7S7G6c1ug5yt-htli72JD5fPKxQYgFEcc7rD9DzXaAZN6T5ZxHyKChnQ=s160-c-k-c0x00ffffff-no-rj",
		url: "https://m.youtube.com/@gavilanch2"
	},
	{
		sector: "Arquitectura",
		name: "Manuel Zapata",
		img: "https://yt3.googleusercontent.com/ytc/AIdro_lSSmKLguZg8Gq4by9HhanhKQm8uvp_sFgTjODsjd9IoA=s160-c-k-c0x00ffffff-no-rj",
		url: "https://m.youtube.com/manuelzapata"
	},
	{
		sector: "infirmativo",
		name: "EDTeam",
		img: "https://yt3.googleusercontent.com/gVPEp1RFXTNqaImY4yOnIjamU1AFDGNEpI1B7g_D4PBX10esTrtQpqejAaj0sNx_hl7lugPEYA=s160-c-k-c0x00ffffff-no-rj",
		url: "https://m.youtube.com/EDteam"
	},
]

const books = [
	{
		img: "https://m.media-amazon.com/images/I/815Cko39rUL._AC_UF1000,1000_QL80_FMwebp_.jpg",
		name: "Patrones de diseño",
		autor: "Erich Gamma",
		url: "https://drive.google.com/file/d/1HItkw-GQweclpdukgA3a5paX6lvDnfsK/view?usp=drivesdk"
	},
	{
		img: "https://m.media-amazon.com/images/I/61IYQs-mEZL._AC_UF1000,1000_QL80_FMwebp_.jpg",
		name: "El Libro Negro del Programador",
		autor: "Rafael Gómez Blanes",
		url: "https://drive.google.com/file/d/124qN2gc13Ln-buSKW5QsiodEsLcnt9uQ/view?usp=drivesdk"
	},
	{
		img: "https://m.media-amazon.com/images/I/61foCyDAF1L._AC_UF1000,1000_QL80_FMwebp_.jpg",
		name: "Introducción a la arquitectura de software: Un enfoque práctico",
		autor: "Oscar Javier Blancarte Iturralde",
		url: "https://drive.google.com/file/d/1lNvmmbSZxLkH432927tmrxPlAI7Toaiy/view?usp=drivesdk"
	},
	{
		img: "https://m.media-amazon.com/images/I/81hqaXB5dbL._AC_UF1000,1000_QL80_FMwebp_.jpg",
		name: "Introducción a los patrones de diseño: Un enfoque práctico",
		autor: "Oscar J Blancarte Iturralde",
		url: "https://drive.google.com/file/d/1UCdW3bDP2OpCc-_LCURUE2NXnAjxB4_V/view?usp=drivesdk"
	},
	{
		img: "https://m.media-amazon.com/images/I/614tCf6nhfL._AC_UF1000,1000_QL80_FMwebp_.jpg",
		name: "Guía de Arquitectura N-Capas orientada al Dominio con .NET 4.0",
		autor: "Cesar de la Torre",
		url: "https://drive.google.com/file/d/1V-VUJUGMpj866BNXzIG8lrC3XZgjM892/view?usp=drivesdk"
	},
	{
		img: "https://refactoring.guru/images/patterns/book/web-cover-es-3x.png",
		name: "Sumérgete en los patrones de diseño",
		autor: "alexander shvert",
		url: "https://drive.google.com/file/d/133w2lidyUtRygQCOyTBGhjqEky1ahuMx/view?usp=drivesdk"
	},
	{
		img: "https://m.media-amazon.com/images/I/61orja1+P7L._AC_UF1000,1000_QL80_FMwebp_.jpg",
		name: "Código limpio / Clean code",
		autor: "Robert C. Martin",
		url: "https://drive.google.com/file/d/1I9Gx00BdDvBZjJGkgOPv6O4_anwVL23o/view?usp=drivesdk"
	},
]

const otherResourves = [
	{
		name: "Refactoring guru",
		url: "https://refactoring.guru/es/design-patterns"
	},
	{
		name: "Free code camp",
		url: "https://www.freecodecamp.org/espanol/news/los-3-tipos-de-patrones-de-diseno-que-todo-desarrollador-deberia-saber-con-codigos-de-ejemplo-de-cada-uno/"
	},
	{
		name: "RJ code Advance",
		url: "https://youtube.com/playlist?list=PLqjdFmR_HdQRPDrw00oKVGHJ5sXf1H21z&si=oh_tMKLnpbztAz9r"
	},
	{
		name: "Arquitectura",
		url: "https://youtube.com/playlist?list=PLqjdFmR_HdQRPDrw00oKVGHJ5sXf1H21z&si=LXIiqABxFWsw-3lK"
	},
	{
		name: "Clear code js",
		url: "https://github.com/andersontr15/clean-code-javascript-es"
	},
]

export default function Studies() {
	const translate = useTranslate();

	return (
		<Page >
			<div className="-md:col-start-1 -md:col-end-2 md:col-start-1 md:col-end-2 row-start-1 md:row-end-2 -md:row-end-3 flex flex-col items-center pt-16 h-full relative">

				<h1 className="absolute z-40 text-2xl bg-transluxed backdrop-blur px-7 py-2 rounded-2xl font-extrabold left-1/2 top-[5px] translate-x-[-50%] " >{translate('Studies')}</h1>

				<div className="flex flex-col items-center overflow-y-scroll gap-4 pb-10">

					<Image className="-md:w-full md:w-1/2 lg:w-[80%] -md:h-[300px]" id="profile" src="/imgs/diploma.webp" priority={true} width={3264} height={2177} alt="Image of profile" />

					<h2 className="text-center font-extrabold text-2xl my-6" >Books</h2>

					<section className="w-full flex flex-row flex-wrap gap-4 justify-center align-middle mi-contenedor">
						{books.map((book, index) => (
							<article
								key={index}
								className="border-4 border-theme-2 rounded-[10px] p-2 w-[200px] flex flex-col items-center"
							>
								<h3>{book.autor}</h3>
								<a href={book.url} aria-label={book.url} target="_blank">
									{book.img ? (
										<Image
											className="w-full h-auto "
											id="profile"
											src={book.img}
											priority={true}
											width={3264}
											height={2177}
											alt="Image of profile"
										/>
									) : (
										<Image
											className="w-full h-auto"
											id="profile"
											src="/imgs/hide_image.png"
											priority={true}
											width={3264}
											height={2177}
											alt="Image of profile"
										/>
									)}
								</a>
							</article>
						))}
					</section>


					<div className="-md:visible md:hidden">
						<SectionTwo />
					</div>

				</div>
			</div>
			<div className="-md:hidden -md:col-start-1 -md:col-end-2 -md:row-start-2 -md:row-end-3 md:col-start-2 -md:col-end-3 -md:row-start-1 -md:row-end-2 h-full pt-10 overflow-y-scroll relative">

				<div className="-md:hidden md:visible ">
					<SectionTwo />
				</div>

			</div>
		</Page>
	);
}

function SectionTwo() {
	return (
		<>
			<h2 className="text-center font-extrabold text-2xl mb-6" >Youtubers favoritos</h2>

			<section className="flex flex-row flex-wrap gap-2 justify-center">
				{
					youtubers.map((youtuber, index) =>
						<article key={index} className="border-4 border-theme-2 p-2 rounded-[10px] w-[200px] h-auto flex flex-col items-center gap-2">
							<h2>{youtuber.name}</h2>
							<a href={youtuber.url}>
								{youtuber.img ?
									<Image className="rounded-full" id="profile" src={youtuber.img} priority={true} width={3264} height={2177} alt="Image of profile" /> :
									<Image className="-mw-[200px] " id="profile" src="/imgs/hide_image.png" priority={true} width={3264} height={2177} alt="Image of profile" />
								}
							</a>
							<span>{youtuber.sector}</span>
						</article>
					)
				}
			</section>

			<h2 className="text-center font-extrabold text-2xl my-6" >Otros recursos</h2>

			<section className="flex flex-row flex-wrap gap-2 justify-center pb-10  mi-contenedor">
				{
					otherResourves.map((resoucer, index) =>
						<article key={index} className="border-4 border-theme-2 p-2 rounded-[10px] w-[200px] h-auto flex flex-col items-center gap-2">
							<a href={resoucer.url}>
								<h2>{resoucer.name}</h2>
							</a>
						</article>
					)
				}
			</section>

		</>
	)
}