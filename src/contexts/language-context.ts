import { createContext } from 'react';

export type Language = 'al' | 'en';
export type LanguageContextValue = {
  language: Language, 
  setLanguage: (language: Language) => void
};

export const LanguageContext = createContext<LanguageContextValue>({} as LanguageContextValue);
