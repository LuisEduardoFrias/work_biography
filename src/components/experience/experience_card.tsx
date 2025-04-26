import useTranslate from 'hk/use_translate'
import Paragraph from 'cp/paragraph'
//import { ExperienceEntity } from 'ett/experience_entity'

type TypeExperience = {
  key: string;
  institution: string;
  position: string;
  responsibilities: string[];
  technologies: string[];
}

export default function ExperienceCard({ institution, position, technologies, responsibilities }: TypeExperience) {
  const { translate, isLoading } = useTranslate()

  return (
    <article className="flex flex-col items-center gap-4 bg-base text-contrast rounded-lg w-full h-[300px] border overflow-y-scroll shadow-[2px_2px_6px_2px_var(--theme-6)] p-4">

      <h2 className="text-xl text-center font-semibold">
        {translate(institution)}
      </h2>

      <div>
        <h3 className="text-gray-300 flex flex-row font-extrabold" >
          {translate(position)}
          {isLoading && <div className="refresh_icon"></div>}
        </h3>
      </div>

      <div className="w-full">
        <h3 className="text-gray-300 text-sm font-[300] mb-2" >{translate("Technologies")}</h3>

        <ul className="list-inside flex flex-row flex-wrap gap-y-1 ">
          {technologies.map((tech) => (
            <li key={tech} className="bg-theme-1 font-[100] text-xs shadow-[inset_1px_1px_1px_0_var(--contrast),2px_2px_4px_0_var(--theme-5)]
            rounded-full px-3 py-1 text-xs font-semibold text-base mr-2 mb-2">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full">
        <h3 className="text-gray-300 text-sm font-[300] mb-2" >{translate("Responsibilities")}</h3>

        <ul className="list-decimal flex flex-col flex-wrap gap-y-1 pl-3">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="text-gray-300 text-xs mb-1">
              <Paragraph text={translate(responsibility)} />
            </li>
          ))}
        </ul>

      </div>

    </article>
  );
};
