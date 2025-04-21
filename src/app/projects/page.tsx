'use client'
import { useState, useEffect } from 'react'
import Page from 'cp/book/page'
import Piano from 'cp/piano'
import ProjectCard, { TypeProjectCard } from 'cp/project_card'
import Loading from '../loading'
import TitlePage from 'cp/title_page'
import { useStore } from 'swh/index'
import { getRepoInfoWithProfile } from 'sv/auth_github'

export default function Projects() {
  const isLoading = useStore((state) => state.isLoading)
  const translate = useStore((state) => state.translate)
  const [state, setState] = useState<TypeProjectCard[] | null>(null)

  useEffect(() => {
    (async () => {
      setState(await getRepoInfoWithProfile())
    })()
  }, [])

  return (
    <Page>
      <div className="-md:col-start-1 -md:col-end-2 md:col-start-1 md:col-end-2 row-start-1 md:row-end-2 -md:row-end-3 h-full relative pb-3">
        <TitlePage title="Projects" />
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
