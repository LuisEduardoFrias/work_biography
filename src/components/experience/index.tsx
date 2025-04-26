'use client'
import { useState, useEffect } from 'react'
import experience_ from 'js/experience.json'
import ExperienceCard from './experience_card'
import { ExperienceEntity } from 'ett/experience_entity'

export default function Experiences() {
  const [experiences, setExperiences] = useState<ExperienceEntity[]>([])

  useEffect(() => {
      setExperiences(experience_)
  }, [])

  return (
    <>
      {experiences.map((experience: ExperienceEntity) => (
        <ExperienceCard key={`${experience.id as string}`}
          institution={experience.institution}
          position={experience.position}
          responsibilities={experience.responsibilities}
          technologies={experience.technologies}
        />
      ))}
    </>
  );
}

