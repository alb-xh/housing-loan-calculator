import { useCallback } from "react";
import { all } from "@/langs";
import { get } from "@/lib/utils";
import { useLang } from "./use-lang";

export const useTranslation = () => {
  const [lang] = useLang();
  return useCallback((key: string) => get(all[lang], key, ''), [ lang ]);
};
