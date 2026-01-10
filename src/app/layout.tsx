import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Montserrat } from "next/font/google";
import { metadata } from "@/metadata";
import { Navbar } from "@/components/navbar";
import { Provider } from "@/components/Provider";
import { Title } from "@/components/Title";
import { LoadPreferredThemeScript } from "@/components/load-preferred-theme-script";

const font = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export { metadata };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <LoadPreferredThemeScript />
      </head>
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
