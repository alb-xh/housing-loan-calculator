import { useContext } from "react";
import { BankContext } from "@/contexts/bank-context";

export const useBank = () => useContext(BankContext);
