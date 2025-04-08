import LoadingImage from "cp/loading_image";
import useTranslate from "hk/use_translate";

export type TypeProjectCard = {
	name: string;
	description: string;
	created_at: string;
	updated_at: string;
	pushed_at: string;
	topics: string[];
	language: string;
	html_url: string;
	gifUrls: string[];
};

export default function ProjectCard(state: TypeProjectCard) {
	const {translate} = useTranslate();
	const {
		name,
		description,
		created_at,
		updated_at,
		pushed_at,
		topics,
		language,
		html_url,
		gifUrls
	} = state;

	return (
		<div className="text-contrast bg-base rounded-lg h-96 w-full overflow-y-scroll border border-ctt shadow-[2px_2px_6px_2px_var(--theme-6)] p-2">

			<h2 className="text-2xl font-semibold mb-2 cursor-pointer">
				<a href={html_url} target="_blank" rel="noopener noreferrer">
					{name}
				</a>
			</h2>

			<p className="text-gray-600 mb-2">{description}</p>

			<div className="flex flex-wrap mb-2">
				{topics &&
					topics.map(topic => (
						<span
							key={topic}
							className="bg-theme-1 text-base shadow-[inset_1px_1px_1px_0_var(--contrast),2px_2px_4px_0_var(--theme-5)] rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
						>
							{topic}
						</span>
					))}
			</div>

			<p className="text-sm text-gray-500 mb-1">
				{translate("Lenguaje:")} {language || translate("Desconocido")}
			</p>

			<p className="text-sm text-gray-500 mb-1">
				{translate("Creado:")}{" "}
				{new Date(created_at).toLocaleDateString()}
			</p>

			<p className="text-sm text-gray-500 mb-1">
				{translate("Actualizado:")}{" "}
				{new Date(updated_at).toLocaleDateString()}
			</p>

			<p className="text-sm text-gray-500 mb-4">
				{translate("Última actualización:")}{" "}
				{new Date(pushed_at).toLocaleDateString()}
			</p>

			{gifUrls && gifUrls.length > 0 && (
				<div className="mb-4">
					<h3 className="text-lg font-semibold mb-2">GIFs:</h3>
					<div className="flex flex-wrap gap-2">
						{gifUrls.map((url, index) => (
							<LoadingImage key={index} url={url} alt={`gif of project ${index}`} contentCss="border border-contrast rounded-2xl w-32 h-44" className="w-32 h-44 rounded-2xl" />
						))}
					</div>
				</div>
			)}

		</div>
	);
}
