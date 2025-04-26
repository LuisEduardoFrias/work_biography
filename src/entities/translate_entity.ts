
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

export class TransLangEntity {
  languages: LanguageEntity[];
  translations: TranslateEntity[];
  constructor(languages: LanguageEntity[], translations: TranslateEntity[]) {
    this.languages = languages;
    this.translations = translations;
  }
}

export class LanguageEntity {
  id: string;
  key: string;
  value: string;

  constructor(id:string,key: string, value: string) {
    this.id = id;
    this.key = key;
    this.value = value;
  }
}

export class TranslateEntity {
  id: string;
  key: string;
  value: string;
  language: string;
  category: ECategory;

  constructor(id:string,key: string, value: string, language: string, category: ECategory) {
    this.id = id;
    this.key = key;
    this.value = value;
    this.language = language;
    this.category = category;
  }
}
