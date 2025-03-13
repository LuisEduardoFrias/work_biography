'use client'
import { useState, useEffect, ChangeEvent } from 'react'
import { useSubscriberState } from 'subscriber_state'
import useTranslate from 'hk/use_translate'
import languages from 'tls/languages.json'

type TypeLanguage = {
	key: string;
	value: string;
}

export default function SelectLanguage() {
	const [{ language: lang }, { changeLanguage }] = useSubscriberState('language', true);
	const [language, setLanguage] = useState(lang);
	const translate = useTranslate();

	const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
	changeLanguage(event.target.value)
		setLanguage(event.target.value)
	};

	return (
		<select
		name="translate"
			className="select-none font-bold text-font-color bg-transparent rounded-md w-28 border-2 border-border-color-ctt p-1"
			onChange={handleLanguageChange}
			value={language}
		>
			{
				languages && languages.map((lang: TypeLanguage) =>
					<option key={lang.key} value={lang.key}>
						{translate(lang.value)}
					</option>
				)
			}
		</select>
	);
}



