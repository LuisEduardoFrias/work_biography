import { create } from 'zustand'
import { setCookie, getCookie } from 'hp/cookies'
import ActionFetchApi from '../actions/action_fetch_api'

interface Translation {
  [key: string]: string;
}

interface StoreState {
  selectedLanguage: string;
  translations: Translation[];
  languages: string[];
  isDark: boolean;
  isLoading: boolean;
  changeLanguage: (selectedLanguage: string) => Promise<void>;
  changeTheme: (isDark: boolean) => void;
  translate: (text: string) => string;
  initializeStore: () => Promise<void>;
}

const useStore = create<StoreState>((set, get) => ({
  selectedLanguage: 'es',
  translations: [],
  languages: [{
    "id": "7922d3a4-1a83-492b-85f0-c9754ca75f89",
    "key": "es",
    "value": "Spanich"
  },
  {
    "id": "7922d1a4-1a83-892b-85f0-c9754ca75f89",
    "key": "en",
    "value": "English"
  }],
  isDark: true,
  isLoading: false,

  initializeStore: async () => {
    const storedLanguage = getCookie('selectedLanguage');
    const storedIsDark = getCookie('isDark');
    const initialLanguage = storedLanguage ?? 'es';

    set({ selectedLanguage: initialLanguage, isDark: storedIsDark ?? true, isLoading: true });

    const ActionFetchApiGet = ActionFetchApi.bind(null, `translate?language=${initialLanguage}`, 'GET');

    try {
      const result = await ActionFetchApiGet();
      set({ translations: result?.translations ?? [], languages: result?.languages ?? ['español', 'ingles'], isLoading: false });
    } catch (error) {
      console.error("Error fetching initial translations:", error);
    }
  },

  changeLanguage: async (newLanguage: string) => {
    set({ isLoading: true, selectedLanguage: newLanguage });
    const ActionFetchApiGet = ActionFetchApi.bind(null, `translate?language=${newLanguage}`, 'GET');

    try {
      const result = await ActionFetchApiGet();
      set({ translations: result?.translations ?? [], languages: result?.languages ?? ['español', 'ingles'], isLoading: false, selectedLanguage: newLanguage });
    } catch (error) {
      console.error("Error fetching translations:", error);
    } finally {
      setCookie('selectedLanguage', newLanguage);
    }
  },

  changeTheme: (isDark: boolean) => {
    set({ isDark });
    setCookie('isDark', isDark);
  },

  translate: (text: string): string => {
    const translations = get().translations;

    if (translations)
      return Reflect.get(translations, text) || text;
      
    return text;
  },
}));

export { useStore };
