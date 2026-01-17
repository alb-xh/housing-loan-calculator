import { createContext } from 'react';

export type BankContextValue = {
  bank: string, 
  setBank: (bank: string) => void
};

export const BankContext = createContext<BankContextValue>({} as BankContextValue);
