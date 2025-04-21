import { useStore } from 'swh/index'
import  Paragraph from 'cp/paragraph'
import { ExperienceEntity } from 'ett/experience_entity'

type TypeExperience = ExperienceEntity & {
  key: string;
}

export default function ExperienceCard({ institution, position, technologies, responsibilities }: TypeExperience) {
  const isLoading = useStore((state) => state.isLoading)
  const translate = useStore((state) => state.translate)

  return (
    <div className="bg-base text-contrast rounded-lg w-full h-[300px] border overflow-y-scroll shadow-[2px_2px_6px_2px_var(--theme-6)] p-4">
      <h2 className="text-xl font-semibold mb-2">{institution}</h2>
      <p className="text-gray-600 mb-2">{translate('Cargo:')} {translate(position)}</p>
      <div className="flex flex-wrap mb-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-theme-1 text-base shadow-[inset_1px_1px_1px_0_var(--contrast),2px_2px_4px_0_var(--theme-5)] rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
          >
            {tech}
          </span>
        ))}
      </div>
      <ul className="list-disc list-inside">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="text-gray-700 mb-1">
		<Paragraph text={translate(responsibility)} /> 
          </li>
        ))}
      </ul>
    </div>
  );
};
