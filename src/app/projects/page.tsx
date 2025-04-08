'use client'
import { useState, useEffect } from 'react'
import Page from 'cp/book/page'
import Piano from 'cp/piano'
import ProjectCard, { TypeProjectCard } from 'cp/project_card'
import Loading from '../loading'
import useTranslate from 'hk/use_translate'
import { getRepoInfoWithProfile } from 'sv/auth_github'

export default function Projects() {
  const { translate } = useTranslate();
  const [state, setState] = useState<TypeProjectCard[] | null>(null)

  useEffect(() => {
    (async () => {
      setState(await getRepoInfoWithProfile())
    })()
  }, [])

  return (
    <Page>
      <div className="-md:col-start-1 -md:col-end-2 md:col-start-1 md:col-end-2 row-start-1 md:row-end-2 -md:row-end-3 h-full relative pb-3">
        <h1 className="absolute z-40 text-2xl bg-transluxed backdrop-blur px-7 py-2 rounded-2xl font-extrabold left-1/2 top-[5px] translate-x-[-50%] " >{translate('Projects')}</h1>
        <div className="rounded-[var(--border-page-radius)_0_0_var(--border-page-radius)] w-full h-full box-border pt-14 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3 justify-center  p-3 overflow-y-scroll" >

          {state ?
            state?.map((obj: TypeProjectCard) => <ProjectCard key={obj.name} {...obj} />) :
            <span className="text-center w-full">{translate("Loading data")}</span>
          }

          {state &&
            <div className="my-3 w-full flex justify-center align-middle visible md:hidden">
              <Piano />
            </div>
          }

          {!state && <Loading />}
        </div>
      </div>
      <div className="-md:hidden -md:col-start-1 -md:col-end-2 -md:row-start-2 -md:row-end-3 md:col-start-2 -md:col-end-3 -md:row-start-1 -md:row-end-2 h-full  relative">
        <div className="-md:hidden h-full md:visible relative">
          <Piano />
        </div>
      </div>
    </Page>
  );
}
