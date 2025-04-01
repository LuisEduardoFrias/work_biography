import localFont from 'next/font/local'
import useTranslate from 'hk/use_translate'
import './styles.css'

const orbitron = localFont({
	src: "../../../public/fonts/Orbitron/Orbitron-VariableFont_wght.ttf"
});

export default function Presentation() {
const { translate } = useTranslate();

	return (
		<div className="presentation-container w-full h-auto px-2 flex flex-col align-middle gap-3">

			<h1 className={`${orbitron.className} flex flex-col`}>
				<span>{translate('Hello')} <strong className="text-color-shine" >Luis Eduardo </strong></span>
				<span className="line-through font-mono text-[15px]">{translate('fixes_printer')}</span>
				<span>{translate('developer')}</span>
			</h1>

			<h2 className={`${orbitron.className} text-color-shine`} >BackEnd y FrontEnd</h2>
			<div>
				<p dangerouslySetInnerHTML={{ __html: translate('presentation-p1') }} />
				<br />
				<p dangerouslySetInnerHTML={{ __html: translate('presentation-p2') }} />
			</div>
		</div>
	);
}
