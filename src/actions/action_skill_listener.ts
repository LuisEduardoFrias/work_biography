'use server'
import { eventHandler } from 'wolf-db'
import { SkillEntity } from 'ett/skill_entity'
import { skillEnum } from 'ett/skill_enum'

export default async function ActionSkillListener(
  skillType: skillEnum,
  setter: (data: any) => void
) {
  eventHandler.on('skills:SkillEntity:post',
    (data: SkillEntity[]) => {
      console.log('skillType: ', skillType);
      setter(data.filter(
        (da: SkillEntity) => da.skillType === skillType))
    })
}

