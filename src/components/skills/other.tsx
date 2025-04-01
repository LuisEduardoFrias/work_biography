import Skills from '../../jsons/skills.json'
import { Draw } from './back_end'
import useTranslate from 'hk/use_translate'
import './back_end.css'

type Sk = {
	href: string;
	alt: string;
	name: string;
}

export default function Other() {
	const { translate } = useTranslate();

	return (
		<div className="w-full px-5 space-y-10">
			<h2>{translate('Others')}</h2>
			<div className="flex flex-wrap gap-12">
				{
					Skills.another.map((e: Sk, index) => <Draw key={index} onclick={() => { }} skill={e} index={index} />)
				}
			</div>
			<h2>{translate('Interests')}</h2>
			<div className="flex flex-wrap gap-12">
				{
					Skills.interest.map((e: Sk, index) => <Draw key={index} onclick={() => { }} skill={e} index={index} />)
				}
			</div>
		</div>
	)
}