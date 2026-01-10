"use client";

import { PropsWithChildren, useState } from "react";
import { ThemeContext } from "@/contexts/theme-context";
import { LanguageContext } from "@/contexts/language-context";
import { DEFAULT_THEME, DEFAULT_LANGUAGE } from "@/contexts/defaults";

export function Provider ({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState(DEFAULT_THEME)
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {children}
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};
