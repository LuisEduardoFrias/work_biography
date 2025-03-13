import localFont from 'next/font/local'
import useTranslate from 'hk/use_translate'
import './styles.css'

export default function Presentation({ days_one }: { days_one: any }) {
	const translate = useTranslate();

	return (
		<div className={`${days_one.className} header-container `}>
			<h1 className="flex flex-col">
				<span>{translate('Hello')} <strong className="text-color-shine" >Luis Eduardo </strong></span>
				<span className="line-through font-mono text-[15px]">{translate('fixes_printer')}</span>
				<span>{translate('developer')}</span>
			</h1>

			<h2 className="text-color-shine" >BackEnd y FrontEnd</h2>
			<div>
				<p dangerouslySetInnerHTML={{ __html: translate('I have over 4 years of experience in the job market, specializing as a backend developer with the language of') }} />
				<p dangerouslySetInnerHTML={{ __html: translate('I also develop websites using') }} />
			</div>
		</div>
	);
}
