"use client";

import { PropsWithChildren, useState } from "react";
import { LanguageContext } from "@/contexts/language-context";
import { DEFAULT_LANGUAGE } from "@/langs";

export function Provider ({ children }: PropsWithChildren) {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  return (
    <LanguageContext.Provider value={[ language, setLanguage ]}>
      {children}
    </LanguageContext.Provider>
  )
} ;
