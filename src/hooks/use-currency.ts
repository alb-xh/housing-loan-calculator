import { useContext } from "react";
import { CurrencyContext } from "@/contexts/currency-context";

export const useCurrency = () => useContext(CurrencyContext);
