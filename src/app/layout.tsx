import "./globals.css";
import type { Viewport } from "next";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Montserrat } from "next/font/google";
import { metadata } from "@/metadata";
import { Navbar } from "@/components/navbar";
import { Provider } from "@/components/Provider";
import { Title } from "@/components/Title";

const font = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export { metadata };

export function generateViewport(): Viewport {
  return {
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#ffffff" },
      { media: "(prefers-color-scheme: dark)", color: "#25252a" }
    ],
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={font.variable}>
        <main className="w-full md:w-4/5 mx-auto">
          <Provider>
            <Title />
            <Navbar />
            {children}
            <Analytics />
            <SpeedInsights />
          </Provider>
        </main>
      </body>
    </html>
  );
}
