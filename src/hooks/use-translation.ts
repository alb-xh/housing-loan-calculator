import { useCallback } from "react";
import { langs } from "@/langs";
import { get } from "@/lib/utils";
import { useLang } from "./use-lang";

export const useTranslation = () => {
  const { language } = useLang();
  return useCallback((key: string) => get(langs[language], key, ''), [ language ]);
};
