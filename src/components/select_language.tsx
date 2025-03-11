'use client'
import Option from './menu/option';
import { useState, useEffect, ChangeEvent } from 'react'
import { useSubscriberState } from 'subscriber_state'
import languages from 'tls/languages.json'

interface Language {
	key: string;
	value: string;
}

export default function SelectLanguage() {
	const [{ language }, { changeLanguage }] = useSubscriberState('language', true);
	const [isLanguage, setIsLanguage] = useState(language);

	useEffect(() => { setIsLanguage(language) }, [language])

	const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
		changeLanguage(event.target.value);
		setIsLanguage(event.target.value);
	};

	return (
		<select
			id="language-select"
			className="select-none font-bold text-font-color bg-transparent rounded-md w-28 border-2 border-border-color-ctt p-1"
			onChange={handleLanguageChange}
			value={`${isLanguage}`}
		>
			{
				languages.reverse().map((lang: Language) => (
					<option key={lang.key} value={lang.key}>
						{lang.value}
					</option>
				))
			}
		</select>
	);
}



