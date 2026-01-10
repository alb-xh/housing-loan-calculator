"use client";

import { Sun, Moon } from "lucide-react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/hooks/use-theme";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";

export function Navbar() {
  const isMobile = useIsMobile();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <NavigationMenu className="w-full max-w-none justify-between pb-0.5 border-b-2" viewport={isMobile}>
      <NavigationMenuList className="flex-wrap pl-1">
        <NavigationMenuItem>
          <div className="flex items-center gap-0.5">
            <Image
              className="rounded"
              src="/logo.png"
              width={32}
              height={32}
              alt="Logo"
            />
            <span className="font-semibold">Llogaritkredi.al</span>
          </div>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <Button size="icon" aria-label="Submit" variant="ghost" onClick={toggleTheme}>
            {theme === 'light' ? < Sun /> : <Moon />}
          </Button>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}