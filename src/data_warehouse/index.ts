import { wolfPackCreate } from 'wolf-db'
import type { DbManager } from 'wolf-db'
import { SkillEntity } from 'ett/skill_entity'
import { TranslateEntity, LanguageEntity } from 'ett/translate_entity'
import { ExperienceEntity } from 'ett/experience_entity'
import {
  TitleEntity, YoutuberEntity,
  OtherResourveEntity, BookEntity
} from 'ett/studie_entity'

type typeDt = {
  translate: {
    LanguageEntity: DbManager<LanguageEntity>,
    TranslateEntity: DbManager<TranslateEntity>,
  },
  experience: {
    ExperienceEntity: DbManager<ExperienceEntity>,
  },
  skills: {
    SkillEntity: DbManager<SkillEntity>,
  },
  studies: {
    TitleEntity: DbManager<TitleEntity>,
    YoutuberEntity: DbManager<YoutuberEntity>,
    OtherResourveEntity: DbManager<OtherResourveEntity>,
    BookEntity: DbManager<BookEntity>,
  },
}

const wolfpack = wolfPackCreate<typeDt>([
  {
    member: [LanguageEntity, TranslateEntity],
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