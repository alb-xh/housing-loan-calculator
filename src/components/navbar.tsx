"use client";
import { Sun, Moon, Languages } from "lucide-react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/use-mobile";
import { useTheme } from "@/hooks/use-theme";
import { ClientRender } from "@/components/client-render";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useLang } from "@/hooks/use-lang";
import { ComponentProps, PropsWithChildren } from "react";
import { Language } from "@/contexts/language-context";

function Logo () {
  return (
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
  )
};

function NavButton ({ children, ...rest }: ComponentProps<typeof Button>) {
  return (
    <Button 
      variant="ghost"  
      className="focus-visible:ring-0 focus-visible:outline-none" 
      tabIndex={-1} 
      size="icon"
      {...rest}
      >
      {children}
    </Button>
  )
};

export function LanguageMenuItem ({ lang, children }: PropsWithChildren<{ lang: Language }>) {
  const { language, setLanguage } = useLang();
  const isActive = lang === language;
  const handleOnSelect = (e: Event) => {
    e.preventDefault();
    if (!isActive) setLanguage(lang);
  }
  
  return (
    <DropdownMenuItem 
      className={`flex justify-center${!isActive && ' opacity-50 hover:opacity-100'}`}
      onSelect={handleOnSelect}
    >
      {children}
    </DropdownMenuItem>
  );
};

export function LanguageSelector() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <NavButton>
          <Languages />
        </NavButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-0" align="center">
        <DropdownMenuGroup >
          <LanguageMenuItem lang="al">
            🇦🇱
          </LanguageMenuItem>
          <LanguageMenuItem lang="en">
            🇬🇧
          </LanguageMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

function ThemeToggler () {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <NavButton onClick={toggleTheme}>
      {theme === 'light' ? <Sun /> : <Moon />}
    </NavButton>
  );
};

export function Navbar() {
  const isMobile = useIsMobile();

  return (
    <NavigationMenu className="w-full max-w-none justify-between pb-0.5 border-b-2" viewport={isMobile}>
      <NavigationMenuList className="flex-wrap pl-1">
        <NavigationMenuItem>
          <Logo />
        </NavigationMenuItem>
      </NavigationMenuList>
      <ClientRender>
        <NavigationMenuList className="flex-wrap ">
          <NavigationMenuItem  className="focus-visible:ring-0 focus-visible:outline-none">
            <LanguageSelector />
          </NavigationMenuItem>
          <NavigationMenuItem>
            <ThemeToggler />
          </NavigationMenuItem>
        </NavigationMenuList>
      </ClientRender>
    </NavigationMenu>
  );
}
