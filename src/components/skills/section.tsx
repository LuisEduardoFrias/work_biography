import Draw, { Sk } from './drawm'
import Skills from '../../jsons/skills.json'
import useTranslate from 'hk/use_translate'

type TypeSection = {
  title: string,
  section: string
}

type TypeSkills = {
  backend: Sk[];
  frontend: Sk[];
  another: Sk[];
  interest: Sk[];
}

export default function Section({ title, section }: TypeSection) {
 const { translate } = useTranslate();
 
  return (
    <div className="w-full px-5 space-y-10">
      <h2>{translate(title)}</h2>

      <section className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-3 justify-center">
        {
          Skills[section as keyof TypeSkills].map((e: Sk, index: number) =>
            <Draw key={index} skill={e} index={index} />)
        }
      </section>
    </div>
  )
}