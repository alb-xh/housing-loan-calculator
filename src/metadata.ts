import type { Metadata } from "next";
import { langs } from "./langs";
import { DEFAULT_LANGUAGE } from "./contexts/defaults";

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