'use client'
import { useStore } from 'swh/index'
import { useCallback } from 'react';
import { TranslateEntity } from 'ett/translate_entity'

export default function useTranslate() {
  const isLoading = useStore((state) => state.isLoading)
  const translations = useStore((state) => state.translations)

  const translate = useCallback((text: string) => {
    if (translations)
      return (translations.find((trans) => trans.key === text))?.value || text;
    return text;
  }, [translations]);

  return { translate, isLoading }
}