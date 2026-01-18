import type { Metadata } from "next";
import { DEFAULT_LANGUAGE, langs } from "./langs";

export const metadata: Metadata = {
  title: langs[DEFAULT_LANGUAGE].title,
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
    siteName: "www.llogaritkredi.al",
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
    icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" }, 
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
    ],
  },
};