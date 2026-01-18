"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/hooks/use-translation";
import { useBank } from "@/hooks/use-bank";

export function LoanYearsSelector() {
  const t = useTranslation();
  const { bank } = useBank();

  return (
    <div className="flex flex-col items-center w-full gap-6 px-4">
      <div className="w-10/12 md:w-3/5 font-mono text-sm">
        {t("select.year")}
      </div>
      <Slider
        disabled={true}
        defaultValue={[0]}
        max={100}
        step={1}
        className="w-4/5 md:w-1/2"
      />
    </div>
  );
}
