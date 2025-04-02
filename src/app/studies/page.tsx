"use client";
import LoadingImage from "cp/loading_image";
import { Page } from "cp/book";
import data from "js/studies.json";
import useTranslate from "hk/use_translate";

export default function Studies() {
	const { translate } = useTranslate();

	return (
		<Page>
			<div className="-md:col-start-1 -md:col-end-2 md:col-start-1 md:col-end-2 row-start-1 md:row-end-2 -md:row-end-3 flex flex-col items-center pt-16 h-full relative">
				<h1 className="absolute z-40 text-2xl bg-transluxed backdrop-blur px-7 py-2 rounded-2xl font-extrabold left-1/2 top-[5px] translate-x-[-50%] ">
					{translate("Studies")}
				</h1>

				<div className="flex flex-col items-center overflow-y-scroll gap-4 pb-10">
					<h2 className="text-center font-extrabold text-2xl my-6">
						{translate("Titles")}
					</h2>

					<section className="w-full flex flex-row flex-wrap gap-4 justify-center items-center">
						{data.titles.map((title, index) => (
							<article
								key={index}
								className="select-none w-[90%] -md:h-[300px] shadow-[var(theme-6)] rounded-[10px] p-2 flex flex-col items-center"
							>
								<h3>{translate(title.name)}</h3>
								<LoadingImage
									contentCss="h-full w-full flex justify-center items-center"
									className="w-full h-auto"
									url={title.img}
									alt={title.alt}
								/>
							</article>
						))}
					</section>

					<h2 className="text-center font-extrabold text-2xl my-6">
						{translate("Books")}
					</h2>

					<section className="w-full flex flex-row flex-wrap gap-4 justify-center align-middle">
						{data.books.map((book, index) => (
							<article
								key={index}
								className="select-none border-4 border-theme-2 shadow-[var(theme-6)] rounded-[10px] p-2 w-[200px] flex flex-col items-center"
							>
								<h3>{book.autor}</h3>
								<a
									href={book.url}
									aria-label={book.url}
									target="_blank"
								>
									<LoadingImage
										contentCss="h-full w-full flex justify-center items-center"
										className="w-full h-auto"
										url={book.img}
										alt={`book, ${book.name} - ${book.autor}`}
									/>
								</a>
							</article>
						))}
					</section>

					<div className="-md:visible md:hidden">
						<SectionTwo translate={translate} />
					</div>
				</div>
			</div>
			<div className="-md:hidden -md:col-start-1 -md:col-end-2 -md:row-start-2 -md:row-end-3 md:col-start-2 -md:col-end-3 -md:row-start-1 -md:row-end-2 h-full pt-10 overflow-y-scroll relative">
				<div className="-md:hidden md:visible ">
					<SectionTwo translate={translate} />
				</div>
			</div>
		</Page>
	);
}

function SectionTwo({ translate }: { translate: (value: string) => string }) {
	return (
		<>
			<h2 className="text-center font-extrabold text-2xl mb-6">
				{translate("Youtubers")}
			</h2>

			<section className="flex flex-row flex-wrap gap-2 justify-center">
				{data.youtubers.map((youtuber, index) => (
					<article
						key={index}
						className="select-none border-4 border-theme-2 shadow-[var(theme-6)] p-2 rounded-[10px] w-[200px] h-auto flex flex-col items-center gap-2"
					>
						<h2>{translate(youtuber.name)}</h2>
						<a
							href={youtuber.url}
							aria-label={`youtuber: ${youtuber.name}`}
							target="_blank"
						>
							<LoadingImage
								contentCss="h-full w-full flex justify-center items-center"
								className="transition rounded-full transition-[border-radius_1s_ease] hover:rounded"
								url={youtuber.img}
								alt={`youtuber: ${youtuber.name}`}
							/>
						</a>
						<span>{youtuber.sector}</span>
					</article>
				))}
			</section>

			<h2 className="text-center font-extrabold text-2xl my-6">
				{translate("Other-resouces")}
			</h2>

			<section className="flex flex-row flex-wrap gap-2 justify-center pb-10">
				{data.otherResourves.map((resoucer, index) => (
					<article
						key={index}
						className="border-4 border-theme-2 shadow-[var(theme-6)] p-2 rounded-[10px] w-[200px] h-auto flex flex-col items-center gap-2"
					>
						<a
							aria-label={resoucer.name}
							target="_blank"
							href={resoucer.url}
						>
							<h2>{resoucer.name}</h2>
						</a>
					</article>
				))}
			</section>
		</>
	);
}
