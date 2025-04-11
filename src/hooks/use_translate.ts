import { useState, useCallback, useEffect } from 'react';
import { State, Actions } from '@/state_warehouse';
import langEn from '../translates/language.en.json'
import langEs from '../translates/language.es.json'
import { useSubscriberState } from 'subscriber_state';
interface TranslationMap {
  [key: string]: string;
}

export default function useTranslate(componenName: string) {
  console.log("translates --------- ", componenName)
  const [{ language }] = useSubscriberState<State, Actions>('language', componenName);
  console.log("translates 1", language)
  const [translations, setTranslations] = useState<TranslationMap>({});
  console.log("translates 2" + translations["Una pasión"])

  const getTranslate = useCallback(async () => {
    try {
      console.log("translates 5----")
      const translates = await import(`../translates/language.${language}.json`);
      setTranslations(translates.default);
      //setTranslations(language === "es" ? langEs : langEn);
    } catch (error) {
      console.log("translates error-")
      console.error(`Error loading translation for language ${language}:`, error);
      setTranslations({});
    }
  }, [language]);

  getTranslate();

  // useEffect(() => {
  //     console.log("translates 4")
  //     getTranslate();
  //    // setTranslations(language === "es" ? langEs : langEn);
  //   }, [language])


  const translate = useCallback((text: string): string => {
    console.log("translates 6")
    return translations[text] || text;
    //return text;
  }, [translations]);

  console.log("translates 3")
  console.log("-----------------------------------")
  console.log("-----------------------------------")

  return { translate };
}
