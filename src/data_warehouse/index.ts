import { wolfPackCreate } from 'wolf-db'
import { SkillEntity } from 'ett/skill_entity'
import { LangTransEntity } from 'ett/translate_entity'
import { ExperienceEntity } from 'ett/experience_entity'
import {
  TitleEntity, YoutuberEntity,
  OtherResourveEntity, BookEntity
} from 'ett/studie_entity'

const wolfpack = wolfPackCreate([
  {
    member: [LangTransEntity],
    wolfpack: "translate"
  },
  {
    member: [ExperienceEntity],
    wolfpack: "experience"
  },
  {
    member: [SkillEntity],
    wolfpack: "skills"
  },
  {
    member: [TitleEntity, YoutuberEntity, OtherResourveEntity, BookEntity],
    wolfpack: "studies"
  }
]);

export const { translate, experience, skills, studies } = wolfpack;