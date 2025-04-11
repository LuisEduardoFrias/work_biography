'use client'
import { useState, useEffect } from 'react'
import ActionFetchApi from '../../actions/action_fetch_api'
import useTranslate from 'hk/use_translate'
import ExperienceCard from './experience_card'
import {ExperienceEntity} from 'ett/experience_entity'

export default function Experiences() {
const [experiences, setExperiences] = useState<ExperienceEntity[]>([])
  const { translate } = useTranslate("experiences");
  
  useEffect(() => {
    (async () => {
      const _ActionFetchApi = ActionFetchApi.bind(null, "experience", 'GET');
      setExperiences(await _ActionFetchApi())
    })()
  }, [])

  return (
    <Page>
      <div className="col-start-1 col-end-2 md:row-start-1 md:row-end-2 row-start-1 row-end-3 h-full relative ">
        <h1 className="absolute text-2xl bg-transluxed backdrop-blur px-7 py-2 rounded-2xl font-extrabold left-1/2 top-[5px] translate-x-[-50%] " >{translate('Experiences')}</h1>
        <div className="w-full h-full pt-14 flex flex-1 flex-row flex-wrap items-center gap-y-4  p-3 overflow-y-scroll">
          {experiences.map((experience:ExperienceEntity) => (
            <ExperienceCard key={experience.id} {...experience} />
          ))}
          <div className="my-3 w-full flex justify-center align-middle visible md:hidden">
            <KeyBoard />
          </div>
        </div>
      </div>
      <div className="-md:hidden md:visible md:col-start-2 col-end-3 md:row-start-1 md:row-end-2 flex justify-center align-middle h-full relative">
        <div className="-md:hidden md:visible relative">
          <KeyBoard />
        </div>
      </div>
    </Page>
  );
}

