'use client'
import { useEffect } from 'react'
import { useSubscriberState } from 'subscriber_state'
import languages from 'tls/languages.json'

interface Language {
	key: string;
	value: string;
}

export default function SelectLanguage() {
	const [{ language }, { changeLanguage }] = useSubscriberState(['language']);

	const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
		changeLanguage(event.target.value);
	};

	return (
		<select
			id="language-select"
			className="select-none font-bold text-font-color bg-transparent rounded-md w-28 border-2 border-border-color-ctt p-1"
			value={language}
			onChange={handleLanguageChange}
		>
			{languages.map((lang: Language) => (
				<option key={lang.key} value={lang.key}>
					{lang.value}
				</option>
			))}
		</select>
	);
}
