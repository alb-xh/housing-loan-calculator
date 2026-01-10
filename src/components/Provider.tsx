"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { ThemeContext } from "@/contexts/theme-context";
import { LanguageContext } from "@/contexts/language-context";
import { DEFAULT_LANGUAGE } from "@/langs";
import { getDefaultTheme } from "@/theme";

export function Provider ({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState(getDefaultTheme());
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);

  useEffect(() => {
    const classList = document.documentElement.classList;

    if (theme === 'dark') classList.add('dark');
    else classList.remove('dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {children}
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};
