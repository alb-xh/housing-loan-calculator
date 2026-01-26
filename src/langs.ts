import type { Language } from "./contexts/language-context";

export type LanguageContent = {
  title: string;
  select: {
    bank: string;
    year: string;
    amount: string,
  };
  amount: {
    button: {
      message: string,
    },
  },
  underConstruction: {
    message: string;
  };
};

export const DEFAULT_LANGUAGE: Language = "al";

export const al: LanguageContent = {
  title: "Kalkulatori i Kredive për Banesa",
  select: {
    bank: "Zgjidh bankën",
    year: "Zgjidh vitet",
    amount: "Shto shumën",
  },
  amount: {
    button: { 
      message: "Llogarit"
    }
  },
  underConstruction: {
    message: "Nën zhvillim",
  },
};

export const en: LanguageContent = {
  title: "Home Loan Calculator",
  select: {
    bank: "Select bank",
    year: "Select year",
    amount: "Add amount",
  },
  amount: {
    button: { 
      message: "Calculate",
    }
  },
  underConstruction: {
    message: "Under construction",
  },
};

export const langs: Record<Language, LanguageContent> = {
  en,
  al,
};
