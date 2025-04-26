'use client'
import { useState, useEffect } from 'react'
import DrawSkill from './draw_skill'
import { skillEnum } from 'ett/skill_enum'
import { SkillEntity } from 'ett/skill_entity'
import skill_ from 'js/skill.json'
import useTranslate from 'hk/use_translate'

type TypeSection = {
  title: string,
  skillType: skillEnum
}

export default function Section({ title, skillType }: TypeSection) {
  const [skills, setSkills] = useState<SkillEntity[]>([])
  const { translate, isLoading } = useTranslate()

  useEffect(() => {
    setSkills(skill_.filter((skill) => skill.skillType === skillType) as SkillEntity[])
  }, [skillType])

  return (
    <div className="w-full px-5 space-y-10">
      <div className="flex flex-row">
        <h2>{translate(title)}</h2>{isLoading && <div className="refresh_icon"></div>}
      </div>

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