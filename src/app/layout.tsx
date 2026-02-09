import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title:
    "KI-Automatisierung für Steuerberater, Anwälte & Recruiter | Automate Works",
  description:
    "Gewinnen Sie 15h/Woche durch intelligente Prozess-Automatisierung. Spezialisiert auf Kanzleien & Professional Services. DSGVO-konform. Jetzt Potenzial-Analyse buchen.",
  keywords: [
    "KI-Automatisierung",
    "Steuerberater",
    "Rechtsanwalt",
    "Recruiter",
    "Automate Works",
    "Prozessautomatisierung",
    "Professional Services",
    "DSGVO",
  ],
  openGraph: {
    title: "KI-Automatisierung für Professional Services | Automate Works",
    description:
      "15h/Woche zurückgewinnen durch intelligente Prozess-Automatisierung. Spezialisiert auf Kanzleien & Agenturen.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Calendly Widget CSS */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <CookieBanner />
        {/* Calendly Widget JS */}
        <script
          type="text/javascript"
          src="https://assets.calendly.com/assets/external/widget.js"
          async
        />
      </body>
    </html>
  );
}
