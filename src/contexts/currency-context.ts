import { createContext } from 'react';

export type Currency = 'LEK' | 'EUR';
export type CurrencyContextValue = {
  currency: Currency, 
  setCurrency: (currency: Currency) => void
};

export const DEFAULT_CURRENCY: Currency = 'LEK';
export const CurrencyContext = createContext<CurrencyContextValue>({} as CurrencyContextValue);
