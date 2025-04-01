import {  useState } from 'react';
import { State, Actions } from '@/state_warehouse';
import { useSubscriberState } from 'subscriber_state';

interface TranslationMap {
	[key: string]: string;
}

export default function useTranslate() {
	const [{ language }] = useSubscriberState<State, Actions>('language');
	const [translations, setTranslations] = useState<TranslationMap>({});

	(() => {
		if (language) {
			(async () => {
				try {
					const translates = await import(`../translates/language.${language}.json`);
					setTranslations(translates.default);
				} catch (error) {
					console.error(`Error loading translation for language ${language}:`, error);
					setTranslations({});
				}
			})()
		}
	})()

	const translate = (text: string): string => {
		return translations[text] || text;
	};

	return { translate, isLoading: !translations };
}