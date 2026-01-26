"use client";

import { useState } from "react";
import { useTranslation } from "@/hooks/use-translation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useAmount } from "@/hooks/use-amount";
import { Calculator } from "lucide-react";
import { useYears } from "@/hooks/use-years";

export function AmountInput() {
  const { amount, setAmount } = useAmount();
  const [value, setValue] = useState<number>(amount);
  const t = useTranslation();
  const { years } = useYears();

  return (
    <div className={cn("flex flex-col items-center w-full pt-6", years ? 'opacity-100' : 'opacity-80')}>
      <div className="w-10/12 md:w-3/5 font-mono text-sm flex justify-between">
        <span>{t("select.amount")}</span>
      </div>
      <Field
        className={"flex w-4/5 md:w-1/2 pt-4"}
        orientation="horizontal"
      >
        <Input 
          type="number" 
          value={String(value ?? "")} 
          disabled={!years}
          onChange={(e) => {
            const nr = Number(e.target.value);
            if (Number.isInteger(nr) && nr > 0 && nr <= Math.pow(10, 9)) setValue(nr);
          }}
        />
        <Button 
          className="flex justify-center bg-accent text-foreground transition hover:text-secondary items-center gap-0.5 font-mono"
          disabled={((value || 0) <= 0)}
          onClick={() => setAmount(value)}
        >
          <Calculator />{t("amount.button.message")}
        </Button>
      </Field>
    </div>
  );
}
