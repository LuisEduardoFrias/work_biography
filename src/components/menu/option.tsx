import Link from "next/link";
import useTranslate from 'hk/use_translate'

export type TypeOption = {
	name: string;
	href: string;
	src: string;
};

export default function Option({ name, href, src }: TypeOption) {
	const translate = useTranslate();
	const DynamicComponent = require(`../../svg/${src}.tsx`).default;

	return (
		<li>
			<Link href={href} label={href} aria-label={href}>
				<DynamicComponent />
				<p className='footer_tooltip'>{translate(name)}</p>
			</Link>
		</li>
	)
}
