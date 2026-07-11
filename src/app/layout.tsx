import type { Metadata } from "next";
import { Lexend, Space_Grotesk } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["300","400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ana Siqueira | UI Designer & Frontend Developer",

  description:
    "Portfólio de Ana Siqueira, UI Designer e Frontend Developer especializada em e-commerce, interfaces digitais e experiências de alta conversão.",

  keywords: [
    "UI Designer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Tailwind",
    "UX",
    "E-commerce",
    "Portfolio",
    "Wake",
    "Figma",
  ],

  authors: [
    {
      name: "Ana Siqueira",
    },
  ],

  creator: "Ana Siqueira",

  openGraph: {
    title: "Ana Siqueira | UI Designer & Frontend Developer",

    description:
      "Portfólio com projetos de UI Design, Frontend e E-commerce.",

    type: "website",

    images: "/img/og-image.png",

    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${lexend.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
