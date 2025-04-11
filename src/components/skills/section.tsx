'use client'
import { useState, useEffect } from 'react'
import DrawSkill from './draw_skill'
import useTranslate from 'hk/use_translate'
import ActionFetchApi from '../../actions/action_fetch_api'
import { skillEnum } from 'ett/skill_enum'
import { SkillEntity } from 'ett/skill_entity'

type TypeSection = {
  title: string,
  skillType: skillEnum
}

export default function Section({ title, skillType }: TypeSection) {
  const [skills, setSkills] = useState<SkillEntity[]>([])
  const { translate } = useTranslate('section');
  
  useEffect(() => {
    (async () => {
      const _ActionFetchApi = ActionFetchApi.bind(null, "skill", 'GET');

      const skills_ = await _ActionFetchApi();

      setSkills(skills_.filter(
        (skill: SkillEntity) => skill.skillType === skillType
      ))
    })()
  }, [])

  return (
    <div className="w-full px-5 space-y-10">
      <h2>{translate(title)}</h2>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 justify-center">
        {
          skills.map((skill: SkillEntity) =>
            <DrawSkill key={skill.id} {...skill} />)
        }
      </section>
    </div>
  )
}