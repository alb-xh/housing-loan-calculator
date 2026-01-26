import { createContext } from "react";

export const DEFAULT_YEARS = 20;

export type YearsContextValue = {
  years: number;
  setYears: (setYears: number) => void;
};

export const YearsContext = createContext<YearsContextValue>(
  {} as YearsContextValue,
);
