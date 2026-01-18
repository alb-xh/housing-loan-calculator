"use client";

import { PropsWithChildren, useEffect, useState } from "react";
import { ThemeContext } from "@/contexts/theme-context";
import { LanguageContext } from "@/contexts/language-context";
import { DEFAULT_LANGUAGE } from "@/langs";
import { getDefaultTheme } from "@/theme";
import { CurrencyContext, DEFAULT_CURRENCY } from "@/contexts/currency-context";
import { BankContext } from "@/contexts/bank-context";
import { BankDataSchema } from "@/lib/db";

export function Provider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState(getDefaultTheme());
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);
  const [bank, setBank] = useState<BankDataSchema | null>(null);

  useEffect(() => {
    const classList = document.documentElement.classList;

    if (theme === "dark") classList.add("dark");
    else classList.remove("dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <CurrencyContext.Provider value={{ currency, setCurrency }}>
          <BankContext.Provider value={{ bank, setBank }}>
            {children}
          </BankContext.Provider>
        </CurrencyContext.Provider>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  );
}
