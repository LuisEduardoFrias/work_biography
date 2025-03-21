'use client'
import '@/state_warehouse'
import { useEffect, useState } from 'react'
import { State, Actions } from '@/state_warehouse'
import { useSubscriberState } from 'subscriber_state'

export default function useTranslate() {
	const [{ language }] = useSubscriberState<Partial<State>, Actions>('language');
	const [stateTranslated, setState] = useState(null);

	useEffect(() => {
		(async () => {
			setState(await import(`../translates/language.${language}.json`))
		})()
	}, [language])

	function translate(text: string) {
		if (stateTranslated && Object.keys(stateTranslated).includes(text))
			return stateTranslated[text];

		return text;
	}

	return translate;
}