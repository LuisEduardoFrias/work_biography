'use client'
import Image from 'next/image'
import { Page } from 'cp/book'
import useTranslate from 'hk/use_translate'

export default function Studies() {
	const translate = useTranslate();

	//https://youtube.com/playlist?list=PLqjdFmR_HdQRPDrw00oKVGHJ5sXf1H21z&si=LXIiqABxFWsw-3lK

	const youtubers = [
		{
			section: "web y infirmstivo",
			name: "Miguel Ángel Durán",
			img: "https://avatars.githubusercontent.com/u/1561955?v=4",
			url: "https://github.com/midudev"
		},
		{
			section: "web",
			name: "Fernando Herrera",
			img: "https://yt3.googleusercontent.com/wi0ZUvM16CDMJSP1CDqY8QLskk6y7-Un7ztvMDC2Xdbkm8KHR3BWg08bd0EgPgfEHqUpZGkzyA=s160-c-k-c0x00ffffff-no-rj",
			url: "https://m.youtube.com/channel/UCuaPTYj15JSkETGnEseaFFg"
		},
		{
			section: "C#",
			name: "Hector D' Leon",
			img: null,
			url: "https://m.youtube.com/c/hdeleonnet"
		},
		{
			section: "C#",
			name: "Felipe Gavilan Programa",
			img: "https://yt3.googleusercontent.com/12nnBdRb96DZy82FSic7S7G6c1ug5yt-htli72JD5fPKxQYgFEcc7rD9DzXaAZN6T5ZxHyKChnQ=s160-c-k-c0x00ffffff-no-rj",
			url: "https://m.youtube.com/@gavilanch2"
		},
		{
			section: "Arquitectura",
			name: "Manuel Zapata",
			img: "https://yt3.googleusercontent.com/ytc/AIdro_lSSmKLguZg8Gq4by9HhanhKQm8uvp_sFgTjODsjd9IoA=s160-c-k-c0x00ffffff-no-rj",
			url: "https://m.youtube.com/manuelzapata"
		},
		{
			section: "infirmativo",
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
			name: "refactoring guru",
			url: "https://refactoring.guru/es/design-patterns"
		},
		{
			name: "free code camp",
			url: "https://www.freecodecamp.org/espanol/news/los-3-tipos-de-patrones-de-diseno-que-todo-desarrollador-deberia-saber-con-codigos-de-ejemplo-de-cada-uno/"
		},
		{
			name: "RJ code Advance",
			url: "https://youtube.com/playlist?list=PLqjdFmR_HdQRPDrw00oKVGHJ5sXf1H21z&si=oh_tMKLnpbztAz9r"
		},
		{
			name: "yjjjjj",
			url: "yyuuu"
		},
	]

	return (
		<Page >
			<div className="bg-amber-400 -md:col-start-1 -md:col-end-2 md:col-start-1 md:col-end-2 row-start-1 md:row-end-2 -md:row-end-3 flex flex-col items-center pb-10 pt-15 h-full relative">

				<h1 className="absolute z-40 text-2xl bg-transluxed backdrop-blur px-7 py-2 rounded-2xl font-extrabold left-1/2 top-[5px] translate-x-[-50%] " >{translate('Studies')}</h1>

				⁴<Image className="-md:w-full md:w-1/2 lg:w-[80%] -md:h-[300px]" id="profile" src="/imgs/diploma.webp" priority={true} width={3264} height={2177} alt="Image of profile" />

				<div className="flex flex-col items-center overflow-y-scroll">

					<h2>youtubers favoritos</h2>

					<section className="flex flex-row flex-wrap gap-2">
						{
							youtubers.map((youtuber, index) =>
								<article key={index}>
									<a href={youtuber.url}>
										<h2>{youtuber.name}</h2>
										{youtuber.img ?
											<Image className="-md:w-full md:w-1/2 lg:w-[80%] -md:h-[300px]" id="profile" src={youtuber.img} priority={true} width={3264} height={2177} alt="Image of profile" /> :
											<Image className="-md:w-full md:w-1/2 lg:w-[80%] -md:h-[300px]" id="profile" src="/imgs/hide_image.png" priority={true} width={3264} height={2177} alt="Image of profile" />
										}
									</a>
								</article>
							)
						}
					</section>

					<h2>Books</h2>

					<section className="flex flex-row flex-wrap gap-2">
						{
							books.map((book, index) =>
								<article key={index}>
									<a href={book.url}>
										<h2>{book.name}</h2>
										<h3>{book.autor}</h3>
										{book.img ?
											<Image className="-md:w-full md:w-1/2 lg:w-[80%] -md:h-[300px]" id="profile" src={book.img} priority={true} width={3264} height={2177} alt="Image of profile" /> :
											<Image className="-md:w-full md:w-1/2 lg:w-[80%] -md:h-[300px]" id="profile" src="/imgs/hide_image.png" priority={true} width={3264} height={2177} alt="Image of profile" />
										}
									</a>
								</article>
							)
						}
					</section>

					<section className="flex flex-row flex-wrap gap-2">
						{
							otherResourves.map((resoucer, index) =>
								<article key={index}>
									<a href={resoucer.url}>
										<h2>{resoucer.name}</h2>
									</a>
								</article>
							)
						}
					</section>

				</div>
			</div>
			<div className="-md:hidden -md:col-start-1 -md:col-end-2 -md:row-start-2 -md:row-end-3 md:col-start-2 -md:col-end-3 -md:row-start-1 -md:row-end-2 h-full  relative">
			</div>
		</Page>
	);
}
