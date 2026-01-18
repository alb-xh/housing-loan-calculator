import { BankDataSchema } from "@/lib/db";
import { createContext } from "react";

export type BankContextValue = {
  bank: BankDataSchema | null;
  setBank: (bank: BankDataSchema) => void;
};

export const BankContext = createContext<BankContextValue>(
  {} as BankContextValue,
);
