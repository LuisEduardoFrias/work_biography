import { skills } from 'dwh/index'
import { SkillEntity } from 'ett/skill_entity'

export async function GET() {
  const _skills = await skills.SkillEntity.get();

  return new Response(JSON.stringify(_skills), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { href, alt, name, tooltipText, skillType } = body;

  await skills.SkillEntity.post(new SkillEntity(href, alt, name, skillType, tooltipText));

  return new Response(JSON.stringify({ message: 'Skill creada exitosamente' }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function PUT(request: NextRequest) {
  const body = await request.json();
  const { href, alt, name, tooltipText, skillType } = body;

  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');

  const obj = new SkillEntity(href, alt, name, tooltipText, skillType);
  obj.id = id;

  await skills.SkillEntity.put(obj, { id });

  return new Response(JSON.stringify({ message: 'Experiences creada exitosamente' }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const id = searchParams.get('id');

  await skills.SkillEntity.delete({ id });

  return new Response(JSON.stringify({ message: 'Experiences creada exitosamente' }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' }
  });
}
