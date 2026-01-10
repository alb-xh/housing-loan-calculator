"use client";

import { useTranslation } from "@/hooks/use-translation";
import { useEffect } from "react";

export function Title () {
  const t = useTranslation();
  const title = t('title');

  useEffect(() => {
    document.title = title;
  }, [title]);
  
  return (<title>{title}</title>);
};
