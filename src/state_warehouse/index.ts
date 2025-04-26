'use client'
import { create } from 'zustand'
import { setCookie, getCookie } from 'hp/cookies'
import { TranslateEntity } from 'ett/translate_entity'
import translate_ from 'js/translate.json'

interface Translation {
  [key: string]: string;
}

interface StoreState {
  selectedLanguage: string;
  translations: Translation[];
  languages: { id: string, key: string, value: string }[];
  isDark: boolean;
  isLoading: boolean;
  changeLanguage: (newLanguage: string) => void;
  changeTheme: (isDark: boolean) => void;
}

const useStore = create<StoreState>((set, get) => ({
  selectedLanguage: getCookie('selectedLanguage') ?? 'es',
  isDark: getCookie('isDark') ?? true,
  translations: translate_.translations.filter((trans) => trans.language === (getCookie('selectedLanguage') ?? 'es')),
  languages: translate_.languages,
  isLoading: false,

  changeLanguage: (newLanguage: string) => {
    set({ selectedLanguage: newLanguage, isLoading: true });

    setTimeout(() => {
      const trans = translate_.translations.filter((trans) => trans.language === newLanguage);

      set({ translations: trans, isLoading: false });
    }, 1000)

    setCookie('selectedLanguage', newLanguage);
  },

  changeTheme: (isDark: boolean) => {
    set({ isDark });
    setCookie('isDark', isDark);
  }
}));

export { useStore };
