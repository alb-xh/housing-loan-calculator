import { createContext } from "react";

export type YearsContextValue = {
  years: number | null;
  setYears: (setYears: number | null) => void;
};

export const YearsContext = createContext<YearsContextValue>(
  {} as YearsContextValue,
);
