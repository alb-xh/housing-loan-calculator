import { useContext } from "react";
import { AmountContext } from "@/contexts/amount-context";

export const useAmount = () => useContext(AmountContext);
