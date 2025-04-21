import { alpha } from 'wolf-db'

/*
  //about page
  aboutSubtitle: string;
  aboutAddress: string;
  aboutFooter: string;
  //
  introductionSection: string;
  introductionP1: string;
  introductionP2: string;
  challengesSection: string;
  challengesP1: string;
  challengesP2: string;
  selfTaughtSection: string;
  selfTaughtP1: string;
  selfTaughtP2: string;
  fallSection: string;
  fallP1: string;
  fallP2: string;
  reflectionsSection: string;
  reflectionsP1: string;
  reflectionsP2: string;
  unaPasion: string;
  trayectoriaDeUnIngenieroDeSoftware: string;
  spanich: string;
  english: string;
  back: string;
  iev: string;
  hello: string;
  fixesPrinter: string;
  developer: string;
  presentationP1: string;
  presentationP2: string;
  writeYourOwnStory: string;
  others: string;
  interests: string;
  goToTheHome: string;
  somethingWentWrong: string;
  page5: string;
  otherResouces: string;
  tecnicoSuperiorEnDesarolloDeSoftware: string;
  books: string;
  titles: string;
  //title pages
  studies: string;
  skills: string;
  projects: string;
  experiences: string;
  aboutMe: string;
  */

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
