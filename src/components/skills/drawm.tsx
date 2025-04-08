import Image from 'next/image'

export type Sk = {
  href: string;
  alt: string;
  name: string;
}

type TDrawProps = {
  key: number,
  skill: Sk,
  index: number,
}

export default function Draw({ skill, index }: TDrawProps) {
  return (
    <article key={index} >
      <div className="scale-0 animate-show border border-theme-1 bg-[#a7a7a78b] group transition-shadow hover:scale-110 hover:shadow-[2px_2px_3px_5px_var(--theme-6)] shadow-[2px_2px_3px_0_var(--theme-4)] p-2 flex flex-col justify-center gap-1 items-center rounded-2xl">
        {skill.href && <Image src={skill.href} className="group-hover:animate-skill-move transition-transform min-w-[120px] min-h-fit" width={70} height={70} alt={skill.alt} />}
        {skill.name && <span>{skill.name}</span>}
      </div>
    </article>
  )
}
