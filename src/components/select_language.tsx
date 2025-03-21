'use client'
import { useState, useEffect, ChangeEvent } from 'react'
import { useSubscriberState } from 'subscriber_state'
import { State, Actions } from '@/state_warehouse'
//import useTranslate from 'hk/use_translate'
import languages from 'tls/languages.json'

type TypeLanguage = {
	key: string;
	value: string;
}

export default function SelectLanguage() {
	const [{ language: lang }, { changeLanguage }] = useSubscriberState<Partial<State>, Actions>('language', true);
	const [language, setLanguage] = useState(lang);
	//	const translate = useTranslate();

	useEffect(() => { changeLanguage(language) }, [language,changeLanguage])

	const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setLanguage(event.target.value)
	};

	return (
		<select
			name="translate"
			className="select-none font-bold text-font-color bg-transparent rounded-[20px] w-28 border-2 border-border-color-ctt p-1"
			onChange={handleLanguageChange}
			value={language}
		>
			{
				languages && languages.map((lang: TypeLanguage) =>
					<option key={lang.key} value={lang.key}>
						{lang.value}
					</option>
				)
			}
		</select>
	);
}



