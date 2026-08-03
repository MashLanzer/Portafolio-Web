import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Public_Sans, JetBrains_Mono } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-bricolage",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-public-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portafolio-web-kappa-coral.vercel.app"),
  title: "Mash — Desarrollo web y herramientas para negocios | Tampa, FL",
  description:
    "Sitios web y herramientas internas para negocios pequeños en Tampa. Órdenes de servicio, control de gastos, registros de trabajo. Web y app Android.",
  keywords: [
    "desarrollo web Tampa",
    "herramientas para negocios",
    "Next.js",
    "apps Android",
    "software a medida",
  ],
  authors: [{ name: "Mash" }],
  openGraph: {
    title: "Mash — Desarrollo web y herramientas para negocios",
    description:
      "Sitios web y herramientas a medida para negocios pequeños en Tampa, FL. Web y app Android.",
    type: "website",
    locale: "es_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#131a3a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bricolage.variable} ${publicSans.variable} ${jetbrains.variable}`}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
