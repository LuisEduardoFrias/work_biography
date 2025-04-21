import { studies } from 'dwh/index'
import { TitleEntity, YoutuberEntity, OtherResourveEntity, BookEntity } from 'ett/studie_entity'

export async function GET() {
  try {
    const result = await Promise.all([
      studies.TitleEntity.get(),
      studies.YoutuberEntity.get(),
      studies.OtherResourveEntity.get(),
      studies.BookEntity.get(),
    ]);

    const result_ = {
      titles: result[0],
      youtubers: result[1],
      books: result[2],
      otherResourves: result[3],
    }

    return new Response(JSON.stringify(result_), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

// export async function GET() {
//   try {
// 
//     await studies.TitleEntity.post(new TitleEntity(
//       "Tegnico superior en desarollo de software",
//       "/imgs/diploma.webp",
//       "titulo tegnico superior en desarrollo de software"
//     ));
// 
//     await studies.YoutuberEntity.post(new YoutuberEntity(
//       "web e infirmativo",
//       "Miguel Ángel Durán",
//       "https:avatars.githubusercontent.com/u/1561955?v=4",
//       'alt ',
//       "https:github.com/midudev"
//     ));
//     await studies.YoutuberEntity.post(new YoutuberEntity(
//       "web",
//       "Fernando Herrera",
//       "https:yt3.googleusercontent.com/wi0ZUvM16CDMJSP1CDqY8QLskk6y7-Un7ztvMDC2Xdbkm8KHR3BWg08bd0EgPgfEHqUpZGkzyA=s160-c-k-c0x00ffffff-no-rj",
//       'alt ',
//       "https:m.youtube.com/channel/UCuaPTYj15JSkETGnEseaFFg"
//     ));
//     await studies.YoutuberEntity.post(new YoutuberEntity(
//       "C#",
//       "Hector D' Leon",
//       "https:avatars.githubusercontent.com/u/1091493?v=4",
//       'alt ',
//       "https:m.youtube.com/c/hdeleonnet"
//     ));
//     await studies.YoutuberEntity.post(new YoutuberEntity(
//       "C#",
//       "Felipe Gavilan",
//       "https:yt3.googleusercontent.com/12nnBdRb96DZy82FSic7S7G6c1ug5yt-htli72JD5fPKxQYgFEcc7rD9DzXaAZN6T5ZxHyKChnQ=s160-c-k-c0x00ffffff-no-rj",
//       'alt ',
//       "https:m.youtube.com/@gavilanch2"
//     ));
//     await studies.YoutuberEntity.post(new YoutuberEntity(
//       "Arquitectura",
//       "Manuel Zapata",
//       "https:yt3.googleusercontent.com/ytc/AIdro_lSSmKLguZg8Gq4by9HhanhKQm8uvp_sFgTjODsjd9IoA=s160-c-k-c0x00ffffff-no-rj",
//       'alt ',
//       "https:m.youtube.com/manuelzapata"
//     ));
//     await studies.YoutuberEntity.post(new YoutuberEntity(
//       "infirmativo",
//       "EDTeam",
//       "https:yt3.googleusercontent.com/gVPEp1RFXTNqaImY4yOnIjamU1AFDGNEpI1B7g_D4PBX10esTrtQpqejAaj0sNx_hl7lugPEYA=s160-c-k-c0x00ffffff-no-rj",
//       'alt ',
//       "https:m.youtube.com/EDteam"
//     ));
// 
//     await studies.BookEntity.post(new BookEntity(
//       "https:m.media-amazon.com/images/I/815Cko39rUL._AC_UF1000,1000_QL80_FMwebp_.jpg",
//       "alt ",
//       "Patrones de diseño",
//       "Erich Gamma",
//       "https:drive.google.com/file/d/1HItkw-GQweclpdukgA3a5paX6lvDnfsK/view?usp=drivesdk"
//     ));
//     await studies.BookEntity.post(new BookEntity(
//       "https:m.media-amazon.com/images/I/61IYQs-mEZL._AC_UF1000,1000_QL80_FMwebp_.jpg",
//       "alt ",
//       "El Libro Negro del Programador",
//       "Rafael Gómez Blanes",
//       "https:drive.google.com/file/d/124qN2gc13Ln-buSKW5QsiodEsLcnt9uQ/view?usp=drivesdk"
//     ));
//     await studies.BookEntity.post(new BookEntity(
//       "https:m.media-amazon.com/images/I/61foCyDAF1L._AC_UF1000,1000_QL80_FMwebp_.jpg",
//       "alt ",
//       "Introducción a la arquitectura de software: Un enfoque práctico",
//       "Oscar Javier Blancarte Iturralde",
//       "https:drive.google.com/file/d/1lNvmmbSZxLkH432927tmrxPlAI7Toaiy/view?usp=drivesdk"
//     ));
//     await studies.BookEntity.post(new BookEntity(
//       "https:m.media-amazon.com/images/I/81hqaXB5dbL._AC_UF1000,1000_QL80_FMwebp_.jpg",
//       "alt ",
//       "Introducción a los patrones de diseño: Un enfoque práctico",
//       "Oscar J Blancarte Iturralde",
//       "https:drive.google.com/file/d/1UCdW3bDP2OpCc-_LCURUE2NXnAjxB4_V/view?usp=drivesdk"
//     ));
//     await studies.BookEntity.post(new BookEntity(
//       "https:m.media-amazon.com/images/I/614tCf6nhfL._AC_UF1000,1000_QL80_FMwebp_.jpg",
//       "alt ",
//       "Guía de Arquitectura N-Capas orientada al Dominio con .NET 4.0",
//       "Cesar de la Torre",
//       "https:drive.google.com/file/d/1V-VUJUGMpj866BNXzIG8lrC3XZgjM892/view?usp=drivesdk"
//     ));
//     await studies.BookEntity.post(new BookEntity(
//       "https:refactoring.guru/images/patterns/book/web-cover-es-3x.png",
//       "alt ",
//       "Sumérgete en los patrones de diseño",
//       "Alexander shvert",
//       "https:drive.google.com/file/d/133w2lidyUtRygQCOyTBGhjqEky1ahuMx/view?usp=drivesdk"
//     ));
//     await studies.BookEntity.post(new BookEntity(
//       "https:m.media-amazon.com/images/I/61orja1+P7L._AC_UF1000,1000_QL80_FMwebp_.jpg",
//       "alt ",
//       "Código limpio / Clean code",
//       "Robert C. Martin",
//       "https:drive.google.com/file/d/1I9Gx00BdDvBZjJGkgOPv6O4_anwVL23o/view?usp=drivesdk"
//     ));
// 
//     await studies.OtherResourveEntity.post(new OtherResourveEntity(
//       "Refactoring guru",
//       "https:refactoring.guru/es/design-patterns"
//     ));
//     await studies.OtherResourveEntity.post(new OtherResourveEntity(
//       "Free code camp",
//       "https:www.freecodecamp.org/espanol/news/"
//     ));
//     await studies.OtherResourveEntity.post(new OtherResourveEntity(
//       "RJ code Advance",
//       "https:youtube.com/playlist?list=PLqjdFmR_HdQRPDrw00oKVGHJ5sXf1H21z&si=oh_tMKLnpbztAz9r"
//     ));
//     await studies.OtherResourveEntity.post(new OtherResourveEntity(
//       "Arquitectura",
//       "https:youtube.com/playlist?list=PLqjdFmR_HdQRPDrw00oKVGHJ5sXf1H21z&si=LXIiqABxFWsw-3lK"
//     ));
//     await studies.OtherResourveEntity.post(new OtherResourveEntity(
//       "Clear code js",
//       "https:github.com/andersontr15/clean-code-javascript-es"
//     ));
// 
//     return new Response(JSON.stringify({}), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' }
//     });
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

export async function POST(request: Request) {
  const body = await request.json();
  const { titles, youtubers, otherResourves, books } = body;

  try {

    if (titles)
      await studies.TitleEntity.post(new TitleEntity(titles));
    if (youtubers)
      await studies.YoutuberEntity.post(new YoutuberEntity(youtubers));
    if (otherResourves)
      await studies.OtherResourveEntity.post(new OtherResourveEntity(otherResourves));
    if (books)
      await studies.BookEntity.post(new BookEntity(books));

    return new Response(JSON.stringify({ message: 'Experiences creada exitosamente' }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const { titles, youtubers, otherResourves, books } = body;

  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');

  if (titles) {
    const obj = new TitleEntity(titles);
    obj.id = id;
    await studies.TitleEntity.put(obj, { id });
  }

  if (youtubers) {
    const obj = new YoutuberEntity(youtubers);
    obj.id = id;
    await studies.YoutuberEntit.put(obj, { id });
  }

  if (otherResourves) {
    const obj = new OtherResourveEntity(otherResourves);
    obj.id = id;
    await studies.OtherResourveEntity.put(obj, { id });
  }

  if (books) {
    const obj = new BookEntity(books);
    obj.id = id;
    await studies.BookEntity.post(obj, { id });
  }


  return new Response(JSON.stringify({ message: 'Experiences creada exitosamente' }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');
  const type = searchParams.get('type');

  if (type.toLowerCase() === "BookEntity".toLowerCase()) {
    await studies.BookEntity.delete({ id });
  }
  if (type.toLowerCase() === "OtherResourveEntity".toLowerCase()) {
    await studies.OtherResourveEntity.delete({ id });
  }
  if (type.toLowerCase() === "YoutuberEntit".toLowerCase()) {
    await studies.YoutuberEntit.delete({ id });
  }
  if (type.toLowerCase() === "TitleEntity".toLowerCase()) {
    await studies.TitleEntity.delete({ id });
  }

  return new Response(JSON.stringify({ message: 'Experiences creada exitosamente' }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}
