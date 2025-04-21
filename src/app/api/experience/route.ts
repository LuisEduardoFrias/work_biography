import { experience } from 'dwh/index'
import { ExperienceEntity } from 'ett/experience_entity'

 export async function GET() {
   const _experiences = await experience.ExperienceEntity.get();
 
   return new Response(JSON.stringify(_experiences), {
     status: 200,
     headers: { 'Content-Type': 'application/json' }
   });
 }

// export async function GET() {
// 
//   await experience.ExperienceEntity.post(new ExperienceEntity(
//     "Tecnoligía Asesoría, Servicios, TAS SRL",
//     "Software engineer",
//     [
//       "Fui outsourcing de la 'Asociación La Nacional de Ahorros y Préstamos (ALNAP)'",
//       "Realicé mantenimiento al backend del internet banking",
//       "Implementé nuevas características en el backend",
//       "Llevé a cabo la refactorización de código legacy en el backend",
//       "Añadí y optimicé consultas en Oracle PL/sql y Microsoft SQL server T-sql",
//       "Brindé soporte a usuarios"
//     ],
//     [
//       "Asp .Net framework",
//       "Asp .Net Core",
//       "C#",
//       "soap",
//       "Api RestFull",
//       "Oracle Pl/Sql",
//       "Sql server T-sql"
//     ],
//   ));
// 
//   await experience.ExperienceEntity.post(new ExperienceEntity(
//     "Aloe Software SRL",
//     "Software developer",
//     [
//       "Para la empresa de courier 'EPS', formé parte de un equipo de tres personas para crear un sistema de administración de paquetes (previamente desarrollado en Delphi)",
//       "Dentro de este proyecto, adquirí un conocimiento profundo de la lógica de negocio, analicé nuevos requerimientos y características, para luego desarrollarlas desde cero",
//       "Implemente la arquitectura y dessrrollo del backend, usando una arquitectura en DDD",
//       "También trabajamos en conjunto en el desarrollo y estilización de componentes en React",
//     ],
//     [
//       "C# Asp .Net core",
//       "React",
//       "TypeScript",
//       "Redux"
//     ],
//   ));
// 
//   await experience.ExperienceEntity.post(new ExperienceEntity(
//     "Tecnologia y sistemancomputarizado SRL",
//     "developer",
//     [
//       "En la migración del sistema ERP desarrollado en COBOL, trabajé de manera individual",
//       "Logré migrar el sistema a Windows Forms",
//       "Creé interfaces para permitir la interacción de COBOL con verifones de CartNet y VisaNet, así como con otros dispositivos de hardware",
//     ],
//     [
//       "C#",
//       "windows forms"
//     ],
//   ));
// 
//   return new Response(JSON.stringify([]), {
//     status: 200,
//     headers: { 'Content-Type': 'application/json' }
//   });
// }

export async function POST(request: Request) {
  const body = await request.json();
  const { institution, position, responsibilities, technologies } = body;

  await experience.ExperienceEntity.post(new ExperienceEntity(institution, position, responsibilities, technologies));

  return new Response(JSON.stringify({ message: 'Experiences creada exitosamente' }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const { institution, position, responsibilities, technologies } = body;

  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');

  const obj = new ExperienceEntity(institution, position, responsibilities, technologies);
  obj.id = id;

  await experience.ExperienceEntity.put(obj, { id });

  return new Response(JSON.stringify({ message: 'Experiences creada exitosamente' }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');

  await experience.ExperienceEntity.delete({ id });

  return new Response(JSON.stringify({ message: 'Experiences creada exitosamente' }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}

/*
Fui outsourcing de la 'Asociación La Nacional de Ahorros y Préstamos (ALNAP)'.
Realicé mantenimiento al backend del internet banking.
Implementé nuevas características en el backend.
Llevé a cabo la refactorización de código legacy en el backend.
Añadí y optimicé consultas en bases de datos Oracle.
Brindé soporte a usuarios.


Para la empresa de courier 'EPS', formé parte de un equipo de tres personas para crear un sistema de administración de paquetes (previamente desarrollado en Delphi).
Dentro de este proyecto, adquirí un conocimiento profundo de la lógica de negocio, analicé nuevos requerimientos y características, para luego desarrollarlas desde cero.
Implemente la arquitectura y dessrrollo del backend, usando una arquitectura en DDD.
También trabajamos en conjunto en el desarrollo y estilización de componentes en React.

En la migración del sistema ERP desarrollado en COBOL, trabajé de manera individual.
Logré migrar el sistema a Windows Forms.
Creé interfaces para permitir la interacción de COBOL con verifones de CartNet y VisaNet, así como con otros dispositivos de hardware.


I was an outsourced worker for 'Asociación La Nacional de Ahorros y Préstamos (ALNAP)'.
I performed maintenance on the backend of the internet banking system.
I implemented new features in the backend.
I carried out the refactoring of legacy code in the backend.
I added and optimized queries in Oracle databases.
I provided user support.

For the courier company 'EPS', I was part of a three-person team to create a package management system (previously developed in Delphi).
Within this project, I gained a deep understanding of the business logic, analyzed new requirements and features, and then developed them from scratch.
I implemented the architecture and development of the backend, using a DDD (Domain-Driven Design) architecture.
We also worked together on the development and styling of components in React.

In the migration of the ERP system developed in COBOL, I worked individually.
I successfully migrated the system to Windows Forms.
I created interfaces to enable the interaction of COBOL with verifones from CartNet and VisaNet, as well as with other hardware devices.

*/