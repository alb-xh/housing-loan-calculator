import { useContext } from "react";
import { YearsContext } from "@/contexts/years-context";

export const useYears = () => useContext(YearsContext);
