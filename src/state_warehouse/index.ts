'use client'

import { createWarehouse, update } from "subscriber_state";
import { setCookie, getCookie } from 'hp/cookies'

type State = {
	language: string,
	isDark: boolean
}

type Actions = {
	changeLanguage: (language: string) => void
	changeTheme: (isDark: boolean) => void
}

function changeLanguage(language: string) {
	setCookie('language', language)
	update((state) => ({ ...state, language }))
}
function changeTheme(isDark: boolean) {
	setCookie('isDark', isDark)
	update((state) => ({ ...state, isDark }))
}


createWarehouse<State, Actions>({
	language: getCookie('language') ?? 'es',
	isDark: getCookie('isDark') ?? true,

	changeLanguage,
	changeTheme,
});

