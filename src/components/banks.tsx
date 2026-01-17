"use client";
import Image from "next/image";
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

type Props = {
  banks: { code: string }[],
}

export function Banks({ banks }: Props) {
  const { bank,  setBank } = useBank();

  return (
    <Carousel
      opts={{ align: 'end', startIndex: Math.ceil(banks.length / 4) }}
      className="w-full flex max-w-1/2"
    >
      <CarouselContent className="py-10 mx-4">
        {banks.map(({ code }) => (
          <CarouselItem 
            key={code} 
            className={cn(
                "lg:basis-1/6",
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
                  <div className="w-full h-full flex justify-center items center p-1 bg-accent-foreground">
                    <Image 
                      className=" flex select-none pointer-events-none w-full object-contain " 
                      src={images[code] || "https://picsum.photos/100/100"} 
                      alt={`${code} logo`} 
                      width={100}
                      height={100}
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
  )
}
