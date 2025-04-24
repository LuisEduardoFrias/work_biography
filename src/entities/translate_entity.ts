import { alpha } from 'wolf-db'

export enum ECategory {
  home = 'home',
  skill = 'skill',
  project = 'project',
  experience = 'experience',
  studie = 'studie',
  about = 'about',
  notfound = 'notfound',
  setting = 'setting',
}



export class TransLangEntity  {
  languages: LanguageEntity[];
  translations: TranslateEntity[];
  constructor(languages: LanguageEntity[], translations: TranslateEntity[]) {
    this.languages = languages;
    this.translations = translations;
  }
}

export class LanguageEntity extends alpha {
  key: string;
  value: string;

  constructor(key: string, value: string) {
    super();
    this.key = key;
    this.value = value;
  }
}

export class TranslateEntity extends alpha {
  key: string;
  value: string;
  language: string;
  category: ECategory;

  constructor(key: string, value: string, language: string, category: ECategory) {
    super();
    this.key = key;
    this.value = value;
    this.language = language;
    this.category = category;
  }
}
