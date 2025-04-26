'use client'
import { useState, useEffect, useRef, useCallback } from 'react';
import { useStore } from 'swh/index'
import useTranslate from 'hk/use_translate'
import './styles.css'

type TypeLanguage = {
  id: string,
  key: string;
  value: string;
}

export default function SelectLanguage() {
  const seleLang = useStore((state) => state.selectedLanguage)
  const languages = useStore((state) => state.languages)
  const changeLanguage = useStore((state) => state.changeLanguage)
  const { translate, isLoading } = useTranslate()

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [textLanguage, setTextLanguage] = useState<string>();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, [isOpen, dropdownRef]);

  useEffect(() => {
    setTextLanguage(languages?.find(l => l.key === seleLang)?.value || languages[0].value)
  }, [seleLang, languages]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  const handleLanguageSelect = useCallback((selectedLanguage: string) => {
    changeLanguage(selectedLanguage);
    setIsOpen(false);
  }, [changeLanguage]);

  return (
    <div className="relative w-28" ref={dropdownRef}>
      <div className="absolute z-40 select-none min-h-[34px] flex flex-col justify-center items-center text-font-color bg-base w-full border-2 border-border-color-ctt rounded-[20px]">

        {!isOpen &&
          <button
            type="button"
            className="absolute top-0 flex flex-row justify-center items-center w-full h-full pronter rounded-[20px]"
            onClick={toggleOpen}
          >
            {translate(textLanguage ?? '')}
            {isLoading && <div className="refresh_icon"></div>}
          </button>
        }

        <ul className={`top-0 w-full h-0 top-1/2 ${isOpen ? 'dropdown-open' : 'dropdown-close'} list-none bg-base rounded-[20px] transition-[height_1s_ease] h-0 overflow-hidden`}>

          {languages?.map((languageItem: TypeLanguage, index: number) => (
            <li key={index}>
              <button
                type="button"
                className={`block w-full ${index === 0 ? 'rounded-[20px_20px_0_0]' : 'rounded-[0_0_20px_20px]'} bg-transparent text-center px-4 py-2 text-font-color hover:text-base hover:bg-gray-100`}
                onClick={() => handleLanguageSelect(languageItem.key)}
              >
                <p className={seleLang === languageItem.key ? 'text-shadow' : ''} >
                  {translate(languageItem.value)}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div >
  );
}
