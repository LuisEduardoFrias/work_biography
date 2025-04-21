'use client'
import { useState, useEffect } from 'react'
import ActionFetchApi from '../../actions/action_fetch_api'
import ExperienceCard from './experience_card'
import { ExperienceEntity } from 'ett/experience_entity'

export default function Experiences() {
  const [experiences, setExperiences] = useState<ExperienceEntity[]>([])

  useEffect(() => {
    (async () => {
      setExperiences(await ActionFetchApi("experience", 'GET'))
    })()
  }, [])

  return (
    <>
      {experiences.map((experience: ExperienceEntity) => (
        <ExperienceCard key={`${experience.id}`} {...experience} />
      ))}
    </>
  );
}

