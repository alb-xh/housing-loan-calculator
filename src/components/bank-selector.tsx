"use client";

import Image from "next/image";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useBank } from "@/hooks/use-bank";
import { images } from "@/banks";
import { useTranslation } from "@/hooks/use-translation";
import { BankDataSchema } from "@/lib/db";

type Props = {
  banks: BankDataSchema[];
};

export function BankSelector({ banks }: Props) {
  const t = useTranslation();
  const { bank: selectedBank, setBank } = useBank();
  const [loaded, setLoaded] = useState<string[]>([]);
  const handleDone = (code: string) =>
    setLoaded((prev) => [...new Set(prev.concat(code))]);

  const ready = loaded.length === banks.length;
  const progress = !ready
    ? Math.round((loaded.length / banks.length) * 100)
    : undefined;

  return (
    <div className="flex flex-col items-center w-full gap-1 pt-4">
      <div className="w-10/12 md:w-3/5 font-mono text-sm">
        {t("select.bank")}
      </div>
      {!ready && <Progress className="w-4/5 md:w-1/2 mt-2" value={progress} />}
      <Carousel
        opts={{ align: "start", startIndex: Math.ceil(banks.length / 4) }}
        className={cn(
          "w-full flex max-w-3/5 md:max-w-1/2",
          ready ? "opacity-100" : "opacity-0",
        )}
      >
        <CarouselContent className="mx-2 py-2">
          {banks.map((bank) => (
            <CarouselItem
              key={bank.code}
              className={cn(
                "basis-1/3 md:basis-1/6",
                bank.code === selectedBank?.code
                  ? "opacity-100"
                  : "opacity-70 hover:opacity-90",
              )}
              onClick={() => setBank(bank)}
            >
              <Card
                className={cn(
                  "p-0 bg-tr  border-0 rounded-md overflow-hidden  h-full",
                  bank.code === selectedBank?.code
                    ? "border-foreground shadow-[0px_0px_10px]"
                    : "border-transparent",
                )}
              >
                <CardContent className="flex flex-col justify-between p-0 h-full">
                  <div className="w-full h-full flex justify-center items-center p-1 bg-accent-foreground">
                    <Image
                      className="flex select-none pointer-events-none w-full object-contain"
                      src={images[bank.code] || ""}
                      alt={`${bank.code} logo`}
                      width={100}
                      height={100}
                      loading="eager"
                      onLoad={() => handleDone(bank.code)}
                      onError={() => handleDone(bank.code)}
                    />
                  </div>
                  <div className="w-full flex justify-center items center bg-red-950 font-mono text-sm select-none pointer-events-none py-0.5 text-secondary dark:text-primary">
                    {bank.code}
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
