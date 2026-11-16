import type { Metadata, Viewport } from "next";
import { Amiri, Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ServiceWorker } from "@/components/ServiceWorker";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://salah-research.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "The Standing — A Quranic Study of Ṣ-L-W",
    template: "%s · The Standing",
  },
  description:
    "A verse-by-verse study of all 108 Quranic verses of the root Ṣ-L-W, arriving at one meaning: a standing-state within the full working reach of a power that determines one.",
  authors: [{ name: "Muhammad Idrees" }],
  creator: "Muhammad Idrees",
  keywords: [
    "Quran",
    "salah",
    "salat",
    "ṣalāh",
    "Quranic study",
    "root study",
    "Ṣ-L-W",
    "prayer",
    "Quran translation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en",
    url: siteUrl,
    siteName: "The Standing",
    title: "The Standing — A Quranic Study of Ṣ-L-W",
    description:
      "All 108 verses of the root Ṣ-L-W, read in context, tested against one meaning. 105 direct fits, 3 explained nuances, 0 contradictions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Standing — A Quranic Study of Ṣ-L-W",
    description:
      "All 108 verses of the root Ṣ-L-W, read in context, tested against one meaning.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080b0a" },
    { media: "(prefers-color-scheme: light)", color: "#f6f3ec" },
  ],
  width: "device-width",
  initialScale: 1,
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.dataset.theme=t;}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${inter.variable} ${fraunces.variable} ${amiri.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-background"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <ServiceWorker />
      </body>
    </html>
  );
}
