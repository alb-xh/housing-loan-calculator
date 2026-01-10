import type { Language } from "./contexts/language-context";

export type LanguageContent = {
  title: string,
  underConstruction: {
    message: string
  },
};

export const DEFAULT_LANGUAGE: Language = 'al';

export const al: LanguageContent = {
  title: 'Kalkulatori i Kredive për Banesa',
  underConstruction: {
    message: 'Nën zhvillim',
  },
};

export const en: LanguageContent = {
  title: 'Home Loan Calculator',
  underConstruction: {
    message: 'Under construction',
  },
};

export const langs: Record<Language, LanguageContent> = { 
  en, 
  al 
};