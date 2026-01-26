import { createContext } from "react";

export const DEFAULT_AMOUNT = 100000;

export type AmountContextValue = {
  amount: number;
  setAmount: (setAmount: number) => void;
};

export const AmountContext = createContext<AmountContextValue>(
  {} as AmountContextValue,
);
