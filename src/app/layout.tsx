import "./globals.css";
import Head from "next/head";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";

const schema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Formation JavaScript en ligne : De débutant à expert en 2025🚀",
  description:
    "Formation JavaScript en français, apprendre JavaScript rapidement sur une plateforme innovante. Mise à jour en 2025 et maintenue par Ashxjs.",
  provider: {
    "@type": "Organization",
    name: "CodeWithAshX",
    url: "https://codewithashx.fr",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    url: "https://codewithashx.fr",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1250",
  },
};

export const metadata: Metadata = {
  title: "Formation JavaScript en ligne : De débutant à expert en 2025🚀",
  description:
    "Formation JavaScript en français, apprendre JavaScript rapidement sur une plateforme innovante. Mise à jour en 2025 et maintenue par Ashxjs.",
  keywords:
    "formation JavaScript, apprendre JavaScript, développement web, formation gratuite, créer site web, application mobile, serveur",
  metadataBase: new URL("https://codewithashx.fr"),
  alternates: {
    canonical: "/",
  },
  twitter: {},
  openGraph: {
    title: "Formation JavaScript en ligne : De débutant à expert en 2025🚀",
    description:
      "Formation JavaScript en français, apprendre JavaScript rapidement sur une plateforme innovante. Mise à jour en 2025 et maintenue par Ashxjs.",
    url: "https://codewithashx.fr",
    siteName: "Codewithashx",
    images: [
      {
        url: "og_image.webp",
        width: 1200,
        height: 630,
        alt: "Formation JavaScript - Apprenez à coder",
      },
    ],
    type: "website",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const GA_ID = "G-N7BW1WHQGW";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"
        />
        <meta
          name="next-size-adjust"
          content="width=device-width, initial-scale=1"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2),
          }}
        />
      </Head>
      <body className={`${poppins.className} antialiased`}>
        {children}
        <SpeedInsights />
        <GoogleAnalytics gaId={GA_ID} />
      </body>
    </html>
  );
}
