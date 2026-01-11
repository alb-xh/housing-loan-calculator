"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { ThemeContext } from "@/contexts/theme-context";
import { LanguageContext } from "@/contexts/language-context";
import { DEFAULT_LANGUAGE } from "@/langs";
import { getDefaultTheme } from "@/theme";
import { CurrencyContext, DEFAULT_CURRENCY } from "@/contexts/currency-context";

export function Provider ({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState(getDefaultTheme());
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);

  useEffect(() => {
    const classList = document.documentElement.classList;

    if (theme === 'dark') classList.add('dark');
    else classList.remove('dark');
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <CurrencyContext.Provider value={{ currency, setCurrency }}>
          {children}
        </CurrencyContext.Provider>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
};
