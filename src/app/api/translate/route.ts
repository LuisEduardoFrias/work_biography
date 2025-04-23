import { NextRequest } from 'next/server'
import { translate } from 'dwh/index'
import { arrayToObject } from 'hp/array_to_object'
import { TranslateEntity, /*ECategory, LanguageEntity*/ } from 'ett/translate_entity'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const language = searchParams.get('language');

  const result = await Promise.all([
    translate.TranslateEntity.get(),
    translate.LanguageEntity.get()
  ]);


  if (!result) {
    return new Response(JSON.stringify({}), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  const translate_ = result[0]?.filter((t: TranslateEntity) => t.language === language);

  if (!translate_) {
    return new Response(JSON.stringify({}), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  return new Response(JSON.stringify({ translations: arrayToObject<TranslateEntity>(translate_, 'key'), languages: result[1] }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { key, value, language, category } = body;

  await translate.TranslateEntity.post(new TranslateEntity(key, value, language, category));

  return new Response(JSON.stringify({ message: 'Experiences creada exitosamente' }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const { key, value, language, category } = body;

  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');

  if (!id) {
    return new Response(JSON.stringify({ message: 'Experiences no a dido creada' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const obj = new TranslateEntity(key, value, language, category);
  obj.id = id;

  await translate.TranslateEntity.put(obj, { id });

  return new Response(JSON.stringify({ message: 'Experiences creada exitosamente' }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');

  await translate.TranslateEntity.delete({ id });

  return new Response(JSON.stringify({ message: 'Experiences creada exitosamente' }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}



/*
{
  "key":"await translate",
  "value":"traducir",
  "language":"es",
  "category":"home"
}

export async function GET(request: Request) {
  try {
    await translate.LanguageEntity.post(new LanguageEntity('es', 'Spanich'));
    await translate.LanguageEntity.post(new LanguageEntity('en', 'English'));

    await translate.TranslateEntity.post(new TranslateEntity('about_subtitle', 'Software Engineer', 'en', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('about_address', 'Dominican', 'en', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('about_footer', '2024 Luis Eduardo Frias ', 'en', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('introduction-section', 'My Beginnings in Computer Science', 'en', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('introduction-p1', "My introduction to the world of computer science began at the age of 15, during a '<b>Computer Support</b>' course while in high school. This course gave me an overview of computing, networks, and systems, sparking my interest in this technological world, and longing to obtain a <b>Computer Engineering</b> degree in the future.", 'en', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('introduction-p2', "At the <i>Prof. Juan Bosch Polytechnic Institute</i>, during my third year of high school, I began to delve into programming with subjects such as programming with <i>Delphi</i>, web development with <i>Dreamweaver</i>, and gate logic. Although I liked programming, I felt that <i>Delphi and Dreamweaver</i> were ambiguous technologies, I preferred traditional web with HTML, CSS, and JavaScript, and exploring alternatives like Visual Basic.", 'en', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('challenges-section', 'Challenges and Decisions', 'en', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('challenges-p1', "Upon finishing high school, a teacher told me about an opportunity for a scholarship at ITLA (Technological Institute of the Americas) in the '<i>Software Development</i>' career, this opportunity vanished due to personal circumstances. Later, the death of my father and the economic downturn in my family led me to focus on UASD (Autonomous University of Santo Domingo) in order to fulfill my desire to become a <b>Computer Engineer</b>, a desire that waned when I discovered that the career had changed its title from an '<b>Engineering</b>' to a '<b>Bachelor's Degree</b>', the disappointment was great, but I decided to continue.", 'en', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('challenges-p2', "In the end, the experience that awaited me at UASD was difficult, with the difficulty involved in studying there, the disappointment I already had about the career, the introduction of an extensive 2-year basic cycle, and the need to work, led me to never attend, I abandoned all hope.<br /> Finally, a light appeared, thank God, one day I ran into a high school friend, she was studying at ITSC (Higher Technical Community Institute)); an institute just as good as ITLA, she guided me and explained how everything was there, she restored my hopes. It was then that I found my path as a '<b>Higher Technician in Software Development</b>'.", 'en', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('self-taught-section', 'The Self-Taught Path', 'en', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('self-taught-p1', "By mid-2019, I already had my first job as a programmer and finished my technical degree at ITSC in 2020. I began to learn self-taught, I absorbed information and gained experience very quickly, and in a short time, I had already gotten my 2nd job and doubled my income, a stable job where I could grow even more. On a friend's recommendation, I was contacted for what was my 3rd job and thus doubled my income again, good work environment, even greater growth and development capabilities, again my desire to acquire a university degree (<b>Engineer</b>) vanished. I valued more the knowledge and ability I had acquired after the technical degree and continuing as self-taught. I consider myself a '<b>Computer Engineer</b>' in constant learning.", 'en', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('self-taught-p2', 'Currently in mid-2025, the desire to obtain a university degree has resurfaced. Also, English has become my second great goal or who knows maybe they will switch places.', 'en', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('fall-section', 'A stumble, deep fall', 'en', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('fall-p1', 'Coming soon', 'en', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('fall-p2', ' ', 'en', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('reflections-section', 'Final Reflections', 'en', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('reflections-p1', 'My journey in programming has been a path of discovery, challenges, and constant learning. I have learned that passion, dedication, and the ability to learn on one\'s own are fundamental in this field.', 'en', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('reflections-p2', 'Always seeking new challenges.', 'en', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('Una pasión', 'A passion', 'en', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('Trayectoria de un ingeniero de software', 'Career path of a software engineer', 'en', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('Spanich', 'Spanich', 'en', ECategory.setting));
    await translate.TranslateEntity.post(new TranslateEntity('English', 'English', 'en', ECategory.setting));
    await translate.TranslateEntity.post(new TranslateEntity('back', 'Back', 'en', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Loading data', 'Loading data', 'en', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Loading', 'Loading', 'en', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('IEV', 'The CV file is not available at this time.', 'en', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Hello', 'Hello! I\'m ', 'en', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('fixes_printer', 'the one who fixes the printer,', 'en', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('developer', 'software engineer', 'en', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('presentation-p1', 'I have experience in the job market, I adapt easily and quickly.', 'en', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('presentation-p2', 'I have good soft skills, I am very collaborative, I am passionate about learning new and different things.', 'en', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Write your own story.', 'Write your own story.', 'en', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Others', 'Others', 'en', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Interests', 'Interests', 'en', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Go to the home', 'Go to the home', 'en', ECategory.notfound));
    await translate.TranslateEntity.post(new TranslateEntity('Something went wrong!', 'Something went wrong!', 'en', ECategory.notfound));
    await translate.TranslateEntity.post(new TranslateEntity('Page 5', 'Page 5', 'en', ECategory.notfound));
    await translate.TranslateEntity.post(new TranslateEntity('Another', 'Another', 'en', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Interest', 'Interest', 'en', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Other-resouces', 'Other resouces', 'en', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Tegnico superior en desarollo de software', 'Senior Technician in Software Development', 'en', ECategory.studie));
    await translate.TranslateEntity.post(new TranslateEntity('Books', 'Books', 'en', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Titles', 'Titles', 'en', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Studies', 'Studies', 'en', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Skills', 'Skills', 'en', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Projects', 'Projects', 'en', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Experiences', 'Experiences', 'en', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('About me', 'About me', 'en', ECategory.home));
    //
    await translate.TranslateEntity.post(new TranslateEntity('about_subtitle', 'Ingeniero de Software', 'es', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('about_address', 'Dominicano', 'es', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('about_footer', '2024 Luis Eduardo Frias ', 'es', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('introduction-section', 'Mis Inicios en la Informática', 'es', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('introduction-p1', "Mi introducción al mundo de la informática comenzó a los 15 años, durante un curso de '<b>Soporte Informático</b>' mientras cursaba la secundaria. Este curso me brindó una visión general de la computación, redes y sistemas, despertando mi interés por este mundo tecnológico, anhelando así conseguir el título de <b>Ingeniero en Informática</b> en un futuro.", 'es', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('introduction-p2', "En el <i>Instituto Politécnico Prof. Juan Bosch</i>, durante mi tercer año de secundaria, comencé a profundizar en la programación con materias como programación con <i>Delphi</i>, desarrollo web con <i>Dreamweaver</i> y lógica de compuertas. Aunque me gustaba la programación, sentía que <i>Delphi y Dreamweaver</i> eran tecnologías ambiguas, prefería la web tradicional con HTML, CSS y JavaScript, y explorar alternativas como Visual Basic.", 'es', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('challenges-section', 'Desafíos y Decisiones', 'es', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('challenges-p1', "Al terminar la secundaria, una maestra me habló de una oportunidad para una beca en el ITLA (Instituto Tecnológico de las Américas) en la carrera de '<i>Desarrollo de Software</i>', dicha oportunidad se esfumó debido a circunstancias personales, Luego, la muerte de mi padre y la caída económica en mi familia me llevaron enfocarme a la UASD (Universidad Autónoma de Santo Domingo) con el fin de cumplir mi anhelo de convertirme en <b>Ingeniero en Informática</b>, anhelo que decallo al descubrir que la carrera había cambiado su titulo pasando de ser una '<b>Ingeniería</b>' a ser una '<b>Licenciatura</b>', la decepción fue grande, pero decidí continuar.", 'es', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('challenges-p2', "Al final, la experiencia que me esperaba en la UASD era difícil, con la dificultad que implica estudiar allí, la decepción que ya tenía sobre la carrera, la introducción de un ciclo básico extenso de 2 años y la necesidad de trabajar, me llevaron a nunca asistir, abandoné todo anhelo.<br /> Finalmente, una luz apareció, gracias a Dios, un día me encontré con una amiga de la secundaria, ella estudiaba en el ITSC (Instituto Técnico Superior Comunitario)); un instituto igual de bueno que el ITLA, ella me guio y explicó cómo era todo allí, me devolvió las esperanzas. Fue entonces donde encontré mi camino como '<b>Técnico Superior en Desarrollo de Software</b>'.", 'es', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('self-taught-section', 'El Camino del Autodidacta', 'es', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('self-taught-p1', "Para amediado del años 2019 ya tenía mi primer empleo como programador y finalice la carrera técnica en el ITSC en el 2020. Comencé a aprender de forma autodidacta, adsorvia informacion y adquiria experiencia muy rapido, y en poco tiempo ya abia consegido mi 2do trabajo y duplicado mis ingresos, un empleo estable donde podia creser aun mas.", 'es', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('self-taught-p2', "Por la recomendscion de un amigo fue como fui contactado para lo que fue mi 3er empleo y asi duplicado otra vez mis ingreso, buen ambiente laboral, capacidades de cresimiento y desarrollo aun mayores, nuevamente mi deceos de arquirir un titulo universitario (<b>Ingeniero</b>) se esfumaron. Valoraba más el conocimiento y la capacidad que había adquirido luego de la carrera técnica y seguir como autodidacta. Me considero a mí mismo como '<b>Ingeniero en Software</b>' en constante aprendizaje.", 'es', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('fall-section', 'Un tropiezo, caída profunda', 'es', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('fall-p1', 'Proximamente', 'es', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('fall-p2', ' ', 'es', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('reflections-section', 'Reflexiones Finales', 'es', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('reflections-p1', "Mi viaje en la programación ha sido un camino de descubrimientos, desafíos y aprendizaje constante. He aprendido que la pasión, la dedicación y la capacidad de aprender por uno mismo son fundamentales en este campo.<br /><br/ >Actual mente en pleno 2025, el deseo de obtener el título universitario ha resurgido. Además, el inglés se ha convertido en mi segunda gran meta o quien sabe quisas intercambien los puestos.", 'es', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('reflections-p2', 'Siempre en busca de nuevos retos.', 'es', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('Una pasión', 'Una pasión', 'es', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('Trayectoria de un ingeniero de software', 'Trayectoria de un ingeniero de software', 'es', ECategory.about));
    await translate.TranslateEntity.post(new TranslateEntity('Spanich', 'Español', 'es', ECategory.setting));
    await translate.TranslateEntity.post(new TranslateEntity('English', 'Ingles', 'es', ECategory.setting));
    await translate.TranslateEntity.post(new TranslateEntity('back', 'Atras', 'es', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Loading data', 'Cargando datos', 'es', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Loading', 'Cargando', 'es', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('IEV', 'El archivo del CV no está disponible en este momento.', 'es', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Hello', 'Hola! soy', 'es', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('fixes_printer', 'el que arregla la impresora,', 'es', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('developer', 'ingeniero de software', 'es', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('presentation-p1', 'Tengo experiencia en el mercado laboral, me adactor facil y rapido.', 'es', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('presentation-p2', 'Tengo buena abilidades blandas, soy muy colaborativo, me apaciona aprender cosas nuevas y diferentes.', 'es', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Write your own story.', 'Escribe tu propia historia.', 'es', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Go to the home', 'Ir al inicio!', 'es', ECategory.notfound));
    await translate.TranslateEntity.post(new TranslateEntity('Others', 'Otros', 'es', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Interests', 'Intereses', 'es', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Something went wrong!', '¡Algo salió mal!', 'es', ECategory.notfound));
    await translate.TranslateEntity.post(new TranslateEntity('Page 5', 'pagina 5', 'es', ECategory.notfound));
    await translate.TranslateEntity.post(new TranslateEntity('Another', 'Otros', 'es', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Interest', 'Intereses', 'es', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Other-resouces', 'Otros recursos', 'es', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Tegnico superior en desarollo de software', 'Tegnico superior en desarollo de software', 'es', ECategory.studie));
    await translate.TranslateEntity.post(new TranslateEntity('Books', 'Libros', 'es', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Titles', 'Titulos', 'es', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Studies', 'Estudios', 'es', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Skills', 'Abilidades', 'es', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Projects', 'Proyectos', 'es', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('Experiences', 'Experiencias', 'es', ECategory.home));
    await translate.TranslateEntity.post(new TranslateEntity('About me', 'Acerca de mi', 'es', ECategory.home));

    return new Response(JSON.stringify({ message: 'TranslateEntity creada exitosamente' }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error("Error:", error);
  }
}

*/