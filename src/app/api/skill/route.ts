import {skills} from 'dwh/index'
import { SkillEntity } from 'ett/skill_entity'

export async function GET(request: Request) {
  const _skills = await skills.SkillEntity.get();

  return new Response(JSON.stringify(_skills), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { href, alt, name,tooltipText, skillType } = body;

  await skills.SkillEntity.post(new SkillEntity(href, alt, name,skillType,tooltipText));

  return new Response(JSON.stringify({ message: 'Skill creada exitosamente' }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}