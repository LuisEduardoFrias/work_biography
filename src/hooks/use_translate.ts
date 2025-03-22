import { useEffect, useState } from 'react';
import { State, Actions } from '@/state_warehouse';
import { useSubscriberState } from 'subscriber_state';

interface TranslationMap {
	[key: string]: string;
}

export default function useTranslate() {
	const [{ language }] = useSubscriberState<State, Actions>('language');
	const [stateTranslated, setStateTranslated] = useState<TranslationMap>({});

	useEffect(() => {
		if (language) {
			(async () => {
				try {
					const translates = await import(`../translates/language.${language}.json`);
					setStateTranslated(translates.default as TranslationMap);
				} catch (error) {
					console.error(`Error loading translation for language ${language}:`, error);
					setStateTranslated({});
				}
			})()
		} else {
			setStateTranslated({});
		}
	}, [language]);

	const translate = (text: string): string => {
		return stateTranslated[text] || text;
	};

	return translate;
}
