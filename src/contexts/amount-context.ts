import { createContext } from "react";

export type AmountContextValue = {
  amount: number | null;
  setAmount: (setAmount: number | null) => void;
};

export const AmountContext = createContext<AmountContextValue>(
  {} as AmountContextValue,
);
