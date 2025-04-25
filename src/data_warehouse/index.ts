import { wolfPackCreate } from 'wolf-db'
import type { TDbManager } from 'wolf-db'
import { SkillEntity } from 'ett/skill_entity'
import { TranslateEntity, LanguageEntity } from 'ett/translate_entity'
import { ExperienceEntity } from 'ett/experience_entity'
import {
  TitleEntity, YoutuberEntity,
  OtherResourveEntity, BookEntity
} from 'ett/studie_entity'

type typeDt = {
  translate: {
    LanguageEntity: TDbManager<LanguageEntity>,
    TranslateEntity: TDbManager<TranslateEntity>,
  },
  experience: {
    ExperienceEntity: TDbManager<ExperienceEntity>,
  },
  skills: {
    SkillEntity: TDbManager<SkillEntity>,
  },
  studies: {
    TitleEntity: TDbManager<TitleEntity>,
    YoutuberEntity: TDbManager<YoutuberEntity>,
    OtherResourveEntity: TDbManager<OtherResourveEntity>,
    BookEntity: TDbManager<BookEntity>,
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