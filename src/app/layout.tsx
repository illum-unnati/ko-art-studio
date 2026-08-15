import type { Metadata } from "next";
import localFont from "next/font/local";
import { Beth_Ellen } from "next/font/google";
import "./globals.css";
import { SvgFilters } from "@/components/SvgFilters";

/* Crimson Pro — display / headings. Variable font covers the full
   ExtraLight–Black range in a single file per style. */
const crimsonPro = localFont({
  variable: "--font-crimson-pro",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/CrimsonPro-Variable.woff2",
      weight: "200 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/CrimsonPro-VariableItalic.woff2",
      weight: "200 900",
      style: "italic",
    },
  ],
});

/* Archivo — body / sans copy. Variable font covers Thin–Black across
   both styles. */
const archivo = localFont({
  variable: "--font-archivo",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/Archivo-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "../../public/fonts/Archivo-VariableItalic.woff2",
      weight: "100 900",
      style: "italic",
    },
  ],
});

const bethEllen = Beth_Ellen({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ko Art Studio | Art Classes Brooklyn | Portfolio Prep NYC",
    template: "%s | Ko Art Studio",
  },
  description:
    "Art classes in Cobble Hill, Brooklyn. 95% HS acceptance rate. Prep for LaGuardia, Pratt, Cornell. Kids summer school from $350/wk. Book a free consultation.",
  metadataBase: new URL("https://www.koartstudionyc.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${crimsonPro.variable} ${archivo.variable} ${bethEllen.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SvgFilters />
        {children}
      </body>
    </html>
  );
}
