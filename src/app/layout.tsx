import type { Metadata, Viewport } from "next";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kalkulatori i Kredive për Banesa | Shkallët e Interesit Ditore",
  description: "Kalkulo kreditë për banesa në Shqipëri me normat e interesit të përditësuara çdo ditë. Zgjidh planin më të mirë për ty dhe familjen tënde.",
  keywords: [
    "kredi banesash", 
    "kalkulator kredi", 
    "norma interesi Shqipëri", 
    "kredi për shtëpi", 
    "lending Albania", 
    "banesa financim"
  ],
  authors: [
    { name: "Albano Xhafaj" }
  ],
  openGraph: {
    title: "Kalkulatori i Kredive për Banesa | Shqipëri",
    description: "Përdor kalkulatorin tonë për të llogaritur kreditë për banesa me normat e interesit të përditësuara çdo ditë.",
    url: "https://www.llogaritkredi.al",
    siteName: "llogaritkredi.al",
    images: [ "https://www.llogaritkredi.al/logo.png" ],
    locale: "sq_AL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kalkulatori i Kredive për Banesa | Shqipëri",
    description: "Llogarit kreditë për banesa me normat e interesit të përditësuara çdo ditë.",
    images: [ "https://www.llogaritkredi.al/logo.png" ],
  },
  manifest: "/site.webmanifest",
};

export function generateViewport(): Viewport {
  return {
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#ffffff" },
      { media: "(prefers-color-scheme: dark)", color: "#25252a" }
    ],
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <main className="w-full md:w-4/5 mx-auto">
            <Navbar />
            {children}
            <Analytics />
            <SpeedInsights />
        </main>

      </body>
    </html>
  );
}
