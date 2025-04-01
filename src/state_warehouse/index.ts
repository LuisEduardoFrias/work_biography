import { createWarehouse, update } from "subscriber_state";
import { setCookie, getCookie } from 'hp/cookies'

export type State = {
	language: string,
	isDark: boolean
}

export type Actions = {
	changeLanguage: (language: string) => void
	changeTheme: (isDark: boolean) => void
}

function changeLanguage(language: string) {
	update((state) => ({ ...state, language }));
	setCookie('language', language);
}

function changeTheme(isDark: boolean) {
	update((state) => ({ ...state, isDark }))
	setCookie('isDark', isDark)
}

createWarehouse<State, Actions>({
	language: getCookie('language') ?? 'es',
	isDark: getCookie('isDark') ?? true,

	changeLanguage,
	changeTheme,
});
