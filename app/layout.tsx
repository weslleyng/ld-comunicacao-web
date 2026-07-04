import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCtaBar from "@/components/layout/MobileCtaBar";
import TweakSwitcher from "@/components/ui/TweakSwitcher";
import {
  SITE_URL,
  SITE_NAME,
  SITE_TITLE,
  SITE_DESCRIPTION,
  siteJsonLd,
} from "@/lib/site";
import { TWEAK_KEY } from "@/lib/tweaks";
import "./globals.css";

// Self-hosted fonts exposed as CSS variables, bridged in globals.css to the
// original --font-display / --font-body tokens.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display-next",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-body-next",
});

// Google Analytics 4 measurement ID.
const GA_MEASUREMENT_ID = "G-LP6DY7NX0T";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | LD Comunicação",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "Luana Dávila", url: SITE_URL }],
  creator: "Luana Dávila",
  publisher: SITE_NAME,
  category: "Assessoria de Imprensa",
  keywords: [
    "assessoria de imprensa",
    "assessoria de imprensa Manaus",
    "assessoria de imprensa estratégica",
    "relações com a imprensa",
    "media training",
    "gestão de crise",
    "autoridade na mídia",
    "LD Comunicação",
    "Luana Dávila",
  ],
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description:
      "Sua expertise merece estar na imprensa que constrói autoridade. 14 anos transformando competência técnica em presença na imprensa.",
    url: `${SITE_URL}/`,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "LD Comunicação — Assessoria de Imprensa Estratégica",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description:
      "Sua expertise merece estar na imprensa que constrói autoridade. 14 anos de experiência.",
    images: [`${SITE_URL}/og-image.png`],
  },
};

export const viewport: Viewport = {
  themeColor: "#FBF9F4",
};

// Restores the visitor's saved design Tweak before the first paint, so the
// chosen theme is applied without a flash on reload. The switcher is always
// available, so the choice persists for every visitor.
const previewBootstrap = `(function(){try{var d=document.documentElement,ls=window.localStorage,T=${JSON.stringify(
  TWEAK_KEY
)};var t=ls.getItem(T)||"";if(t){d.setAttribute("data-tweak",t);}else{d.removeAttribute("data-tweak");}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Google Analytics 4 — loaded after hydration so it never blocks render. */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <script dangerouslySetInnerHTML={{ __html: previewBootstrap }} />
        <a href="#main" className="skip-link">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCtaBar />
        <TweakSwitcher />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </body>
    </html>
  );
}
