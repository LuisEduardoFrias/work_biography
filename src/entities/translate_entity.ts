import { alpha } from 'wolf-db'

class TranslateEntity extends alpha {
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

  constructor(
    aboutSubtitle: string,
    aboutAddress: string,
    aboutFooter: string,
    introductionSection: string,
    introductionP1: string,
    introductionP2: string,
    challengesSection: string,
    challengesP1: string,
    challengesP2: string,
    selfTaughtSection: string,
    selfTaughtP1: string,
    selfTaughtP2: string,
    fallSection: string,
    fallP1: string,
    fallP2: string,
    reflectionsSection: string,
    reflectionsP1: string,
    reflectionsP2: string,
    unaPasion: string,
    trayectoriaDeUnIngenieroDeSoftware: string,
    spanich: string,
    english: string,
    back: string,
    iev: string,
    hello: string,
    fixesPrinter: string,
    developer: string,
    presentationP1: string,
    presentationP2: string,
    writeYourOwnStory: string,
    others: string,
    interests: string,
    goToTheHome: string,
    somethingWentWrong: string,
    page5: string,
    otherResouces: string,
    tecnicoSuperiorEnDesarolloDeSoftware: string,
    books: string,
    titles: string,
    studies: string,
    skills: string,
    projects: string,
    experiences: string,
    aboutMe: string
  ) {
    super();
    this.aboutSubtitle = aboutSubtitle;
    this.aboutAddress = aboutAddress;
    this.aboutFooter = aboutFooter;
    this.introductionSection = introductionSection;
    this.introductionP1 = introductionP1;
    this.introductionP2 = introductionP2;
    this.challengesSection = challengesSection;
    this.challengesP1 = challengesP1;
    this.challengesP2 = challengesP2;
    this.selfTaughtSection = selfTaughtSection;
    this.selfTaughtP1 = selfTaughtP1;
    this.selfTaughtP2 = selfTaughtP2;
    this.fallSection = fallSection;
    this.fallP1 = fallP1;
    this.fallP2 = fallP2;
    this.reflectionsSection = reflectionsSection;
    this.reflectionsP1 = reflectionsP1;
    this.reflectionsP2 = reflectionsP2;
    this.unaPasion = unaPasion;
    this.trayectoriaDeUnIngenieroDeSoftware = trayectoriaDeUnIngenieroDeSoftware;
    this.spanich = spanich;
    this.english = english;
    this.back = back;
    this.iev = iev;
    this.hello = hello;
    this.fixesPrinter = fixesPrinter;
    this.developer = developer;
    this.presentationP1 = presentationP1;
    this.presentationP2 = presentationP2;
    this.writeYourOwnStory = writeYourOwnStory;
    this.others = others;
    this.interests = interests;
    this.goToTheHome = goToTheHome;
    this.somethingWentWrong = somethingWentWrong;
    this.page5 = page5;
    this.otherResouces = otherResouces;
    this.tecnicoSuperiorEnDesarolloDeSoftware = tecnicoSuperiorEnDesarolloDeSoftware;
    this.books = books;
    this.titles = titles;
    this.studies = studies;
    this.skills = skills;
    this.projects = projects;
    this.experiences = experiences;
    this.aboutMe = aboutMe;
  }
}

type TypeLanguage = string;

type TypeLangTrans = { language, translate: TranslateEntity };

export class LangTransEntity extends alpha {
  langTrans: TypeLangTrans[];

  constructor(langTrans: TypeLangTrans[]) {
    super();
    this.langTrans = langTrans;
  }
}
