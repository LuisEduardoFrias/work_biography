'use client'
import { useState, useEffect, useRef } from 'react';
import { useSubscriberState } from 'subscriber_state';
import { State, Actions } from '@/state_warehouse';
import languages from 'tls/languages.json';
import useTranslate from 'hk/use_translate'
import '@/state_warehouse'
import './styles.css'

type TypeLanguage = {
	key: string;
	value: string;
}

export default function SelectLanguage() {
	const [{ language: lang }, { changeLanguage }] = useSubscriberState<State, Actions>('language');
	const { translate } = useTranslate();
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const toggleOpen = () => setIsOpen(!isOpen);

	const handleLanguageSelect = (selectedLanguage: string) => {
		changeLanguage(selectedLanguage);
		setIsOpen(false);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen]);

	const currentLanguage = languages.find(l => l.key === lang)?.value || 'Idioma';

	return (
		<div className="relative w-28" ref={dropdownRef}>
			<div className="absolute z-50 select-none min-h-[34px] flex flex-col justify-center items-center text-font-color bg-base w-full border-2 border-border-color-ctt rounded-[20px]">

				{!isOpen &&
					<button
						type="button"
						className="absolute top-0 w-full h-full pronter rounded-[20px]"
						onClick={toggleOpen}
					>
						{translate(currentLanguage)}
					</button>
				}

				<ul className={`top-0 w-full ${isOpen ? 'dropdown-open' : 'dropdown-close'} list-none bg-base rounded-[20px] transition-[height_1s_ease] h-0 overflow-hidden`}>

					{languages && languages.map((languageItem: TypeLanguage, index: number) => (

						<li key={languageItem.key}>

							<button
								type="button"
								className={`block w-full ${index === 0 ? 'rounded-[20px_20px_0_0]' : 'rounded-[0_0_20px_20px]'} bg-transparent text-center px-4 py-2 text-font-color hover:text-base hover:bg-gray-100`}
								onClick={() => handleLanguageSelect(languageItem.key)}
							>

								<p className={lang === languageItem.key ? 'text-shadow' : ''} >
									{translate(languageItem.value)}
								</p>

							</button>

						</li>

					))}

				</ul>

			</div>
		</div >
	);
}
