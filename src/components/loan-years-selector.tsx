"use client";

import { useEffect, useMemo } from "react";
import { Slider } from "@/components/ui/slider";
import { useTranslation } from "@/hooks/use-translation";
import { useBank } from "@/hooks/use-bank";
import { cn } from "@/lib/utils";
import { useYears } from "@/hooks/use-years";

export function LoanYearsSelector() {
  const t = useTranslation();
  const { bank } = useBank();
  const { years, setYears } = useYears();

  const rates = useMemo(
    () =>
      bank?.interestNorms.reduce((acc: Record<string, number>, norm) => {
        const year = Math.ceil(norm.months.end / 12);
        acc[year] = norm.rate;

        return acc;
      }, {}),
    [bank],
  );

  const max = useMemo(
    () => Math.max(...Object.keys(rates ?? {}).map(Number), 0),
    [rates],
  );

  useEffect(() => {
    if (!max) return;
    if (!years) return setYears(Math.min(max, 20));
    setYears(Math.min(years, max));
  }, [ max, years, setYears ]);

  return (
    <div className={cn("flex flex-col items-center w-full gap-6", bank ? 'opacity-100' : 'opacity-80')}>
      <div className="w-10/12 md:w-3/5 font-mono text-sm flex justify-between">
        <span>{t("select.year")}</span>
        <span className="font-bold text-md pr-[10%]">{years}</span>
      </div>
      <Slider
        className="w-4/5 md:w-1/2"
        min={1}
        step={1}
        max={max}
        disabled={!bank || !years}
        value={[ years ?? 1 ]}
        onValueChange={([ value ]) => setYears(value)}
      />
    </div>
  );
}
