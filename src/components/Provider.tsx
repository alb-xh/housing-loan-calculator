"use client";

import { PropsWithChildren, useState } from "react";
import { LanguageContext } from "@/contexts/language-context";
import type { Language } from "@/langs";

export function Provider ({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState<Language>('al')

  return (
    <LanguageContext.Provider value={[ language, setLanguage ]}>
      {children}
    </LanguageContext.Provider>
  )
} ;
