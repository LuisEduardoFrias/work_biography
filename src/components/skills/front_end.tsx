import Skills from "../../jsons/skills.json";
import { Draw } from "./back_end";
import "./back_end.css";

type Sk = {
	href: string;
	alt: string;
	name: string;
}

export default function FrontEnd() {
	return (
		<div className="w-full px-5 space-y-10">
			<h2>Front End</h2>
			<div className="flex flex-wrap gap-12">
				{
					Skills.frontend.map((e: Sk, index) => <Draw key={index} onclick={() => { }} skill={e} index={index} />)
				}
			</div>
		</div>
	)
}