'use client'
import { useState, useEffect } from 'react'
import DrawSkill from './draw_skill'
import ActionFetchApi from '../../actions/action_fetch_api'
import { skillEnum } from 'ett/skill_enum'
import { SkillEntity } from 'ett/skill_entity'
import { useStore } from 'swh/index'

type TypeSection = {
  title: string,
  skillType: skillEnum
}

export default function Section({ title, skillType }: TypeSection) {
  const [skills, setSkills] = useState<SkillEntity[]>([])
  const isLoading = useStore((state) => state.isLoading)
  const translate = useStore((state) => state.translate)

  useEffect(() => {
    (async () => {
      const skills_ = await ActionFetchApi("skill", 'GET');

      setSkills(skills_.filter(
        (skill: SkillEntity) => skill.skillType === skillType
      ))
    })()
  }, [skillType])

  return (
    <div className="w-full px-5 space-y-10">
      <h2>{translate(title)}</h2>

      {isLoading && <div className="refresh_icon"></div>}

      <section className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 justify-center">
        {
          skills.map((skill: SkillEntity) =>
            <DrawSkill key={`${skill.id as string}`}
              href={skill.href}
              alt={skill.alt}
              name={skill.name}
              tooltipText={skill.tooltipText}
            />)
        }
      </section>
    </div>
  )
}