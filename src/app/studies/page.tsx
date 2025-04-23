"use client";
import { useState, useEffect } from "react"
import LoadingImage from "cp/loading_image"
import Loading from '../loading'
import ActionFetchApi from '../../actions/action_fetch_api'
import Page from 'cp/book/page'
import TitlePage from 'cp/title_page'
import { YoutuberEntity, StudiesEntity, BookEntity ,OtherResourveEntity} from 'ett/studie_entity'
import { useStore } from 'swh/index'

export default function Studies() {
  const isLoading = useStore((state) => state.isLoading)
  const translate = useStore((state) => state.translate)

  const [data, setData] = useState<StudiesEntity>()

  useEffect(() => {
    (async () => {
      setData(await ActionFetchApi("study", 'GET'))
    })()
  }, [])

  return (
    <Page>
      {!data ?
        <Loading /> :
        <>
          <div className="-md:col-start-1 -md:col-end-2 md:col-start-1 md:col-end-2 row-start-1 md:row-end-2 -md:row-end-3 flex flex-col items-center pt-16 h-full relative">
            <TitlePage title="Studies" />

            <div className="flex flex-col items-center overflow-y-scroll gap-4 pb-10">
              <h2 className="text-center font-extrabold text-2xl my-6">
                {translate("Titles")}
              </h2>
              {isLoading && <div className="refresh_icon"></div>}
              <section className="w-full flex flex-row flex-wrap gap-4 justify-center items-center">
                {data.titles.map((title, index) => (
                  <article
                    key={index}
                    className="select-none w-[90%] -md:h-[300px] shadow-[var(theme-6)] rounded-[10px] p-2 flex flex-col justify-center items-center"
                  >
                    <h3 className="text-center" >{translate(title.name)}</h3>
                    <LoadingImage
                      contentCss="h-full w-full flex justify-center items-center"
                      className="w-full h-auto"
                      src={title.img}
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
                    className="select-none border-4 border-theme-2 shadow-[var(theme-6)] rounded-[10px] p-2 w-[200px] h-auto flex flex-col items-center"
                  >
                    <h3 className="text-center" >{book.autor}</h3>
                    <a
                      href={book.url}
                      aria-label={book.url}
                      target="_blank"
                    >
                      <LoadingImage
                        contentCss="h-full w-full flex justify-center items-center"
                        className="w-full h-auto"
                        src={book.img}
                        alt={`book, ${book.name} - ${book.autor}`}
                      />
                    </a>
                  </article>
                ))}
              </section>

              <div className="-md:visible md:hidden">
                <SectionTwo translate={translate} youtubers={data.youtubers} otherResourves={data.otherResourves} />
              </div>
            </div>
          </div>
          <div className="-md:hidden -md:col-start-1 -md:col-end-2 -md:row-start-2 -md:row-end-3 md:col-start-2 -md:col-end-3 -md:row-start-1 -md:row-end-2 h-full pt-10 overflow-y-scroll relative">
            <div className="-md:hidden md:visible ">
              <SectionTwo translate={translate} youtubers={data.youtubers} otherResourves={data.otherResourves} />
            </div>
          </div>
        </>
      }
    </Page>
  );
}

function SectionTwo({ translate, youtubers, otherResourves }: { translate: (value: string) => string, youtubers: YoutuberEntity[], otherResourves: OtherResourveEntity[] }) {
  return (
    <>
      <h2 className="text-center font-extrabold text-2xl mb-6">
        {translate("Youtubers")}
      </h2>

      <section className="flex flex-row flex-wrap gap-2 justify-center">
        {youtubers.map((youtuber, index) => (
          <article
            key={index}
            className="select-none border-4 border-theme-2 shadow-[var(theme-6)] p-2 rounded-[10px] w-[200px] h-auto flex flex-col items-center gap-2"
          >
            <h2 className="text-center"  >{translate(youtuber.name)}</h2>
            <a
              href={youtuber.url}
              aria-label={`youtuber: ${youtuber.name}`}
              target="_blank"
            >
              <LoadingImage
                contentCss="h-full w-full flex justify-center items-center"
                className="transition rounded-full transition-[border-radius_1s_ease] hover:rounded"
                src={youtuber.img}
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
        {otherResourves.map((resoucer, index) => (
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
