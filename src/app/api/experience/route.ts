import { experience } from 'dwh/index'
import { ExperienceEntity } from 'ett/experience_entity'

export async function GET(request: Request) {
  const _experiences = await experience.ExperienceEntity.get();

  return new Response(JSON.stringify(_experiences), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { institution,position, responsibilities, technologies} = body;
  
  await experience.ExperienceEntity.post(new ExperienceEntity(institution,position, responsibilities, technologies));

  return new Response(JSON.stringify({ message: 'Experiences creada exitosamente' }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}