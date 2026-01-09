export type Language = 'al' | 'en';

export type LanguageContent = {
  underConstruction: {
    message: string
  },
};

export const al: LanguageContent = {
  underConstruction: {
    message: 'Nën zhvillim',
  },
};

export const en: LanguageContent = {
  underConstruction: {
    message: 'Under construction',
  },
};

export const all: Record<Language, LanguageContent> = { 
  en, 
  al 
};

