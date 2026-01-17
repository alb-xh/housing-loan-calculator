"use client";
import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils";
import { useBank } from "@/hooks/use-bank";
import { images } from "@/banks";
import { useState } from "react";

type Props = {
  banks: { code: string }[],
}

export function Banks({ banks }: Props) {
  const { bank,  setBank } = useBank();
  const [loaded, setLoaded] = useState<string[]>([]);
  const handleDone = (code: string) => setLoaded((prev) => [ ...new Set(prev.concat(code)) ]);

  const ready = loaded.length === banks.length;
  const progress = !ready ? Math.round(loaded.length / banks.length * 100) : undefined;

  return (
    <div className="flex flex-col items-center w-full">
      {!ready && (
        <Progress 
          className="w-3xs md:w-sm mt-10"
          value={progress} 
        />
      )}
      <Carousel
        opts={{ align: 'start', startIndex: Math.ceil(banks.length / 4) }}
        className={cn(
          "w-full flex max-w-3/5 md:max-w-1/2", 
          ready ? "opacity-100" : "opacity-0",
        )}
      >
        <CarouselContent className="py-10 mx-2">
          {banks.map(({ code }) => (
            <CarouselItem 
              key={code} 
              className={cn(
                  "basis-1/3 md:basis-1/6",
                  bank === code ? 'opacity-100' : 'opacity-70 hover:opacity-90',
              )}
              onClick={() => setBank(code)}
            >
                <Card 
                  className={cn(
                    "p-0 bg-tr  border-0 rounded-md overflow-hidden  h-full",
                    bank === code ? 'border-foreground shadow-[0px_0px_10px]' : 'border-transparent', 
                  )}
                > 
                  <CardContent className="flex flex-col justify-between p-0 h-full">
                    <div className="w-full h-full flex justify-center items-center p-1 bg-accent-foreground">
                      <Image 
                        className="flex select-none pointer-events-none w-full object-contain" 
                        src={images[code] || ""} 
                        alt={`${code} logo`} 
                        width={100}
                        height={100}
                        loading="eager"
                        onLoad={() => handleDone(code)}
                        onError={() => handleDone(code)}
                      />
                    </div>
                    <div className="w-full flex justify-center items center bg-red-950 font-mono text-sm select-none pointer-events-none py-0.5 text-secondary dark:text-primary">{code}</div>
                  </CardContent>
                </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
