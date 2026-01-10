"use client";

import Head from "next/head";
import { useTranslation } from "@/hooks/use-translation";
import { useEffect } from "react";

export function Title () {
  const t = useTranslation();
  const title = t('title');

  useEffect(() => {
    document.title = title;
  }, [title]);
  
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
