
export type StudiesEntity = {
  titles: TitleEntity[],
  books: BookEntity[],
  youtubers: YoutuberEntity[],
  otherResourves: OtherResourveEntity[]
}

export class TitleEntity {
  id: string;
  name: string;
  img: string;
  alt: string;
  constructor(id:string,name: string, img: string, alt: string) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.alt = alt;
  }
}

export class YoutuberEntity {
  id: string;
  sector: string;
  name: string;
  img: string;
  alt: string;
  url: string;
  constructor(id:string,sector: string, name: string, img: string, alt: string, url: string) {
    this.id = id;
    this.sector = sector;
    this.name = name;
    this.img = img;
    this.alt = alt;
    this.url = url;
  }
}

export class BookEntity {
  id: string;
  img: string;
  alt: string;
  name: string;
  autor: string;
  url: string;
  constructor(id:string,img: string, alt: string, name: string, autor: string, url: string) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.autor = autor;
    this.alt = alt;
    this.url = url;
  }
}

export class OtherResourveEntity {
  id: string;
  name: string;
  url: string;
  constructor(id:string,name: string, url: string) {
    this.id = id;
    this.name = name;
    this.url = url;
  }
}