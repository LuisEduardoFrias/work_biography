'use client'
import useTranslate from 'hk/use_translate'

export default function Loading() {
	const translate = useTranslate();

	return (
		<div className="w-full h-full absolute z-50">
			<div className="w-5 h-40 animate-move-loading absolute bottom-[60px]" >
				<div className="w-5 h-36 animate-bounce">

					<div className="bg-pink-700 rounded-t-3xl h-4 w-5"></div>
					<div className="relative bg-gray-400 h-4 w-5 flex justify-between">
						<div className="absolute top-[3px] bg-gray-300 z-20 h-[2px] w-5"></div>
						<div className="absolute bottom-[3px] bg-gray-300 z-20 h-[2px] w-5"></div>
						<div className="absolute bg-gray-400 z-0 h-4 w-[2px]"></div>
						<div className="bg-gray-500 h-4 w-1.5"></div>
						<div className="bg-gray-500 h-4 w-1.5"></div>
					</div>
					<div className="bg-amber-400 h-full w-5 flex justify-center items-center">
						<div className="absolute left-0 bg-amber-300 h-full w-[2px]"></div>
						<div className="relative bg-amber-500 h-full w-2">
							<span className="absolute top-[80px] text-black left-[-76px] text-[5px] w-40 rotate-90">
								<span className="font-extrabold">H2 </span>
								<span>- {translate('Write your own story.')}</span>
							</span>
						</div>
					</div>
					<div className="relative h-5 w-5 border-[10px] border-transparent border-t-[24px] border-t-amber-100">
						<div className="absolute top-[-24px] left-[-10px] h-2 w-[6px] border-[3.2px] border-transparent border-t-[8px] border-t-amber-400"></div>
						<div className="absolute top-[-24px] left-[-3px] h-2 w-[6px] border-[3.2px] border-transparent border-t-[8px] border-t-amber-500"></div>
						<div className="absolute top-[-24px] left-[4px] h-2 w-[6px] border-[3.2px] border-transparent border-t-[8px] border-t-amber-400"></div>
						<div className="absolute top-[-8px] left-[-3px] h-2 w-[6px] border-[3.2px] border-transparent border-t-[8px] border-t-border-color-ctt"></div>
					</div>
				</div>
			</div>
			<div className="flex flex-row pl-5 space-x-[22px] w-full absolute bottom-5">
				<div className="animate-points1 opacity-0 w-1 h-1 rounded bg-theme-1 transition-transform left-0 mt-14"></div>
				<div className="animate-points2 opacity-0 w-1 h-1 rounded bg-theme-1 transition-transform left-[40px] mt-14"></div>
				<div className="animate-points3 opacity-0 w-1 h-1 rounded bg-theme-1 transition-transform left-[80px] mt-14"></div>
			</div>
		</div>
	)
}