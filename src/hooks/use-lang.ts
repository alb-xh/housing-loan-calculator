import { useContext } from "react";
import { LanguageContext } from "@/contexts/language-context";

export const useLang = () => useContext(LanguageContext);
