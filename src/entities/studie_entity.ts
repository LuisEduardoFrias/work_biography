import { alpha } from 'wolf-db'

export class TitleEntity extends alpha {
  name: string;
  img: string;
  alt: string;
  constructor(name: string, img: string, alt: string) {
    super()
    this.name = name;
    this.img = img;
    this.alt = alt;
  }
}

export class YoutuberEntity extends alpha {
  sector: string;
  name: string;
  img: string;
  url: string;
  alt: string;
  constructor(sector: string, name: string, img: string, alt: string, url: string) {
    super()
    this.sector = sector;
    this.name = name;
    this.img = img;
    this.alt = alt;
    this.url = url;
  }
}

export class BookEntity extends alpha {
  img: string;
  alt: string;
  name: string;
  autor: string;
  url: string;
  constructor(img: string, alt: string, name: string, autor: string, url: string) {
    super()
    this.img = img;
    this.name = name;
    this.autor = autor;
    this.alt = alt;
    this.url = url;
  }
}

export class OtherResourveEntity extends alpha {
  name: string;
  url: string;
  constructor(name: string, url: string) {
    super()
    this.name = name;
    this.url = url;
  }
}