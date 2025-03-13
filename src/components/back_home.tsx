'use client'

import { useRouter } from 'next/navigation'
import useTranslate from 'hk/use_translate'

export default function BackHome({ position }: { position: 'left' | 'right' }) {
	const router = useRouter()
	const translate = useTranslate()

	function handleClick() {
		router.push('/');
	}

	if (position === 'right') {
		return (
			<button className="absolute top-0 right-0 bg-[linear-gradient(45deg,gray_40%,var(--base)_60%)] rounded-bl-[20px] rounded-tr-[20px] shadow-[-2px_2px_4px_0_gray]" onClick={() => handleClick()}  >
				<div className="relative text-white clip-path-right bg-base border border-contrast w-7 h-7" >
					<div className="w-full h-3 rotate-45 absolute top-[12px] right-[5px] flex justify-center align-middle" >
						<span className="text-contrast text-center font-bold text-[5px] origin-bottom-left ">{translate('back')}</span>
					</div>
				</div>
			</button >
		)
	}

	return (
		<button className="absolute left-0 top-0 bg-[linear-gradient(-45deg,gray_40%,var(--base)_60%)] rounded-br-[20px] rounded-tl-[20px] shadow-[2px_2px_4px_0_gray]" onClick={() => handleClick()}  >
			<div className="relative text-white clip-path-left bg-base border border-contrast w-7 h-7" >
				<div className="w-full h-3 rotate-[-45deg] absolute top-[12px] left-[5px] flex justify-center align-middle" >
					<span className="text-contrast text-center font-bold text-[5px] origin-bottom-left ">{translate('back')}</span>
				</div>
			</div>
		</button >
	)
}